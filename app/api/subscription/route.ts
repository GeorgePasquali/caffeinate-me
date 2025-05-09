import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { subscriptionTiers } from '@/lib/db/schema';
import { auth } from '@/lib/auth';
import { stripe } from '@/lib/stripe';
import { eq } from 'drizzle-orm';

export async function GET() {
  try {
    const tiers = await db.select().from(subscriptionTiers);
    return NextResponse.json(tiers);
  } catch (error) {
    console.error('Error fetching subscription tiers:', error);
    return NextResponse.json(
      { error: 'Failed to fetch subscription tiers' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { tierId } = body;

    // Fetch the subscription tier
    const tier = await db.query.subscriptionTiers.findFirst({
      where: eq(subscriptionTiers.id, tierId),
    });

    if (!tier) {
      return NextResponse.json(
        { error: 'Subscription tier not found' },
        { status: 404 }
      );
    }

    // Create a Stripe checkout session
    const checkoutSession = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: tier.name,
              description: tier.description || undefined,
            },
            unit_amount: Math.round(Number(tier.monthlyAmount) * 100), // Convert to cents
            recurring: {
              interval: 'month',
            },
          },
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/subscription/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/subscription/cancel`,
      customer_email: session.user.email || undefined,
      metadata: {
        userId: session.user.id,
        tierId: tier.id.toString(),
      },
    });

    return NextResponse.json({ checkoutUrl: checkoutSession.url });
  } catch (error) {
    console.error('Error creating subscription:', error);
    return NextResponse.json(
      { error: 'Failed to create subscription' },
      { status: 500 }
    );
  }
} 