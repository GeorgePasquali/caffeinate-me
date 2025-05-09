import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, Coffee, Package, Users, Heart, Clock, Leaf, Calendar, Star, Award, Sparkles } from 'lucide-react';
import { AnimatedHero } from './components/animated-hero';
import { AnimatedCard } from './components/animated-card';
import CoolBarista from '@/public/cool-barista.png';

// Floating gradient background
function FloatingGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-orange-100/30 via-transparent to-orange-100/30 animate-float" />
      <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-orange-100/30 via-transparent to-orange-100/30 animate-float-delayed" />
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section with Parallax Effect */}
      <section className="relative bg-gradient-to-b from-orange-50 to-white dark:from-gray-900 dark:to-gray-950 py-20 overflow-hidden">
        <AnimatedHero />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm transition-colors hover:bg-accent hover:text-accent-foreground animate-fade-in">
                <Sparkles className="mr-2 h-4 w-4" />
                <span>Freshly Roasted Coffee Subscription</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-50 leading-tight animate-slide-up">
                Freshly Roasted. Delivered Monthly. Made for Coffee Lovers.
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 animate-slide-up-delayed">
                Premium coffee subscriptions with beans sourced from the world's top micro-roasters—delivered fresh across Eastern Europe.
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-in-delayed">
                <Button size="lg" className="rounded-full group">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full">
                  How It Works
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden group animate-fade-in-delayed">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
              <Image
                src={CoolBarista}
                alt="Fresh coffee beans and brewed coffee"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section with Hover Cards */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-50">How It Works</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Experience the perfect cup of coffee with our simple, personalized subscription process
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Coffee,
                title: "Tell us how you like your coffee",
                description: "Quiz-style onboarding – roast level, quantity, grind",
                details: "Our coffee quiz helps us understand your preferences and brewing habits to create your perfect match."
              },
              {
                icon: Package,
                title: "We roast and ship fresh every cycle",
                description: "Roast-to-order model based on subscriptions",
                details: "Each batch is roasted to order and shipped within 24 hours of roasting for maximum freshness."
              },
              {
                icon: Users,
                title: "Sip, learn, and connect",
                description: "Access community content & events",
                details: "Join our community of coffee enthusiasts for virtual tastings, brewing workshops, and more."
              }
            ].map((step, index) => (
              <AnimatedCard key={index} className="animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Card className="border-none shadow-lg hover:shadow-xl transition-shadow cursor-pointer bg-white dark:bg-gray-800">
                      <CardContent className="pt-6">
                        <step.icon className="h-12 w-12 text-orange-500 dark:text-orange-400 mb-4" />
                        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-50">{step.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                      </CardContent>
                    </Card>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-50">{step.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{step.details}</p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </AnimatedCard>
            ))}
          </div>
          <div className="text-center mt-12 animate-fade-in-delayed">
            <Button size="lg" className="rounded-full group">
              Join Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Caffeinate Section with Tabs */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-50">Why Caffeinate?</h2>
          <Tabs defaultValue="quality" className="max-w-3xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-gray-100 dark:bg-gray-800">
              <TabsTrigger value="quality" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">Quality</TabsTrigger>
              <TabsTrigger value="community" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">Community</TabsTrigger>
              <TabsTrigger value="flexibility" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">Flexibility</TabsTrigger>
            </TabsList>
            <TabsContent value="quality" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Clock,
                    title: "Always fresh",
                    description: "Roasted after you subscribe"
                  },
                  {
                    icon: Heart,
                    title: "Curated for Eastern Europe",
                    description: "Faster delivery, better sourcing"
                  },
                  {
                    icon: Leaf,
                    title: "Transparent sourcing",
                    description: "From small farms"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <feature.icon className="h-6 w-6 text-orange-500 dark:text-orange-400 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">{feature.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="community" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Users,
                    title: "Connect with coffee lovers",
                    description: "Join our vibrant community"
                  },
                  {
                    icon: Star,
                    title: "Expert guidance",
                    description: "Learn from coffee professionals"
                  },
                  {
                    icon: Award,
                    title: "Exclusive events",
                    description: "Virtual tastings and workshops"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <feature.icon className="h-6 w-6 text-orange-500 dark:text-orange-400 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">{feature.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="flexibility" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Calendar,
                    title: "Flexible subscriptions",
                    description: "Cancel or pause anytime"
                  },
                  {
                    icon: Package,
                    title: "Customizable delivery",
                    description: "Choose your frequency"
                  },
                  {
                    icon: Coffee,
                    title: "Variety of options",
                    description: "Different roast levels and origins"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <feature.icon className="h-6 w-6 text-orange-500 dark:text-orange-400 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">{feature.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Subscription Plans Section with Enhanced Cards */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-50">Explore Subscription Plans</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Choose the perfect plan for your coffee journey
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Casual Cupper",
                amount: "250g",
                description: "Perfect for weekend brewing",
                features: ["Monthly delivery", "Single origin", "Brewing guide"]
              },
              {
                title: "Daily Drinker",
                amount: "500g–1kg",
                description: "For your daily coffee ritual",
                features: ["Bi-weekly delivery", "Multiple origins", "Priority support"]
              },
              {
                title: "Connoisseur Box",
                amount: "Rare finds",
                description: "Exclusive tastings & rare beans",
                features: ["Weekly delivery", "Limited editions", "VIP events access"]
              }
            ].map((plan, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800">
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-gray-50">{plan.title}</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-500 dark:text-orange-400 mb-4">{plan.amount}</div>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-600 dark:text-gray-300">
                        <Star className="h-4 w-4 text-orange-500 dark:text-orange-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 rounded-full group">
                    Choose Plan
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="rounded-full">
              Compare Plans
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Community Section with Enhanced Cards */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-50">Join Our Coffee Community</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Connect with fellow coffee enthusiasts and expand your coffee knowledge
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Monthly virtual cuppings",
                description: "Join our expert-led coffee tastings"
              },
              {
                title: "Brewing masterclasses",
                description: "Learn from professional baristas"
              },
              {
                title: "Local meetups and collabs",
                description: "Connect with coffee lovers near you"
              },
              {
                title: "Coffee journal and tools",
                description: "Track and improve your brewing"
              }
            ].map((activity, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-50">{activity.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 max-w-2xl mx-auto text-center">
            <blockquote className="text-xl italic text-gray-600">
              "The only subscription where I know my beans are fresher than what I find in stores."
            </blockquote>
            <p className="mt-4 font-medium">- Maria K., Coffee Enthusiast</p>
          </div>
        </div>
      </section>

      {/* Newsletter Section with Enhanced Design */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm mb-4">
              <Sparkles className="mr-2 h-4 w-4" />
              <span>Join our community</span>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-50">Not ready to commit?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Join our free monthly brewletter! Get brewing tips, origin stories, and exclusive discounts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400"
              />
              <Button className="rounded-full group">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
