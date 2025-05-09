'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card";
import { Button } from "./button";
import { Check } from "lucide-react";

interface SubscriptionTierProps {
  name: string;
  description: string;
  price: number;
  features: string[];
  coffeeAmount: number;
  isPopular?: boolean;
  onSelect: () => void;
}

export function SubscriptionTier({
  name,
  description,
  price,
  features,
  coffeeAmount,
  isPopular = false,
  onSelect,
}: SubscriptionTierProps) {
  return (
    <Card className={`w-full max-w-sm ${isPopular ? 'border-primary' : ''}`}>
      <CardHeader>
        {isPopular && (
          <div className="text-sm font-medium text-primary mb-2">Most Popular</div>
        )}
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="mt-4">
          <span className="text-3xl font-bold">${price}</span>
          <span className="text-muted-foreground">/month</span>
        </div>
        <div className="text-sm text-muted-foreground mt-2">
          {coffeeAmount}g of coffee per month
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          variant={isPopular ? "default" : "outline"}
          onClick={onSelect}
        >
          Select Plan
        </Button>
      </CardFooter>
    </Card>
  );
}

export function SubscriptionTiers() {
  const tiers = [
    {
      name: "Casual Cupper",
      description: "Perfect for occasional coffee enthusiasts",
      price: 19.99,
      coffeeAmount: 250,
      features: [
        "250g of coffee per month",
        "Whole beans or ground",
        "Basic roast level options",
        "Standard shipping",
        "Access to community forum",
      ],
    },
    {
      name: "Daily Drinker",
      description: "For those who can't start their day without coffee",
      price: 34.99,
      coffeeAmount: 500,
      features: [
        "500g of coffee per month",
        "Whole beans or ground",
        "All roast level options",
        "Priority shipping",
        "Access to brewing guides",
        "Virtual cupping sessions",
      ],
      isPopular: true,
    },
    {
      name: "Coffee Connoisseur",
      description: "For true coffee aficionados",
      price: 69.99,
      coffeeAmount: 1000,
      features: [
        "1kg of coffee per month",
        "Whole beans or ground",
        "All roast level options",
        "Access to rare micro-lots",
        "Express shipping",
        "Priority access to events",
        "Exclusive roaster meetups",
        "Personal coffee consultation",
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {tiers.map((tier) => (
        <SubscriptionTier
          key={tier.name}
          {...tier}
          onSelect={() => {
            // Handle subscription selection
            console.log(`Selected ${tier.name}`);
          }}
        />
      ))}
    </div>
  );
} 