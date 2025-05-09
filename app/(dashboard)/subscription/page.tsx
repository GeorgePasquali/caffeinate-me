import { SubscriptionTiers } from "@/components/ui/subscription-tiers";
import { CoffeePreferencesQuiz } from "@/components/ui/coffee-preferences-quiz";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SubscriptionPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Choose Your Coffee Journey</h1>
      
      <Tabs defaultValue="quiz" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="quiz">Find Your Match</TabsTrigger>
          <TabsTrigger value="tiers">View All Plans</TabsTrigger>
        </TabsList>
        
        <TabsContent value="quiz" className="mt-6">
          <CoffeePreferencesQuiz />
        </TabsContent>
        
        <TabsContent value="tiers" className="mt-6">
          <SubscriptionTiers />
        </TabsContent>
      </Tabs>
    </div>
  );
} 