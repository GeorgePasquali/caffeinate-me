'use client';

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { RadioGroup, RadioGroupItem } from "./radio-group";
import { Label } from "./label";
import { Button } from "./button";
import { Progress } from "./progress";

interface QuizStep {
  question: string;
  options: {
    label: string;
    value: string;
    description?: string;
  }[];
}

const quizSteps: QuizStep[] = [
  {
    question: "How much coffee do you consume per month?",
    options: [
      {
        label: "Casual (1-2 cups per week)",
        value: "casual",
        description: "Perfect for occasional coffee enjoyment",
      },
      {
        label: "Regular (3-4 cups per week)",
        value: "regular",
        description: "For those who enjoy coffee regularly",
      },
      {
        label: "Daily (1-2 cups per day)",
        value: "daily",
        description: "For coffee enthusiasts who need their daily fix",
      },
      {
        label: "Heavy (3+ cups per day)",
        value: "heavy",
        description: "For true coffee aficionados",
      },
    ],
  },
  {
    question: "What's your preferred grind type?",
    options: [
      {
        label: "Whole Beans",
        value: "whole",
        description: "Maximum freshness and flexibility",
      },
      {
        label: "Ground",
        value: "ground",
        description: "Ready to brew",
      },
    ],
  },
  {
    question: "What roast level do you prefer?",
    options: [
      {
        label: "Light",
        value: "light",
        description: "Bright, acidic, and complex flavors",
      },
      {
        label: "Medium",
        value: "medium",
        description: "Balanced flavor with moderate acidity",
      },
      {
        label: "Dark",
        value: "dark",
        description: "Rich, bold, and full-bodied",
      },
    ],
  },
  {
    question: "Do you prefer single origin or blends?",
    options: [
      {
        label: "Single Origin",
        value: "single",
        description: "Unique characteristics from specific regions",
      },
      {
        label: "Blends",
        value: "blend",
        description: "Complex and balanced flavor profiles",
      },
      {
        label: "Both",
        value: "both",
        description: "Variety is the spice of life",
      },
    ],
  },
];

export function CoffeePreferencesQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const progress = ((currentStep + 1) / quizSteps.length) * 100;

  const handleAnswer = (value: string) => {
    setAnswers((prev) => ({ ...prev, [currentStep]: value }));
  };

  const handleNext = () => {
    if (currentStep < quizSteps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // Handle quiz completion
      console.log("Quiz completed:", answers);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const currentQuestion = quizSteps[currentStep];

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Find Your Perfect Coffee Match</CardTitle>
        <CardDescription>
          Answer a few questions to help us recommend the best subscription for you
        </CardDescription>
        <Progress value={progress} className="mt-4" />
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">{currentQuestion.question}</h3>
            <RadioGroup
              value={answers[currentStep]}
              onValueChange={handleAnswer}
              className="space-y-4"
            >
              {currentQuestion.options.map((option) => (
                <div key={option.value} className="flex items-start space-x-3">
                  <RadioGroupItem value={option.value} id={option.value} />
                  <div className="grid gap-1.5 leading-none">
                    <Label
                      htmlFor={option.value}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {option.label}
                    </Label>
                    {option.description && (
                      <p className="text-sm text-muted-foreground">
                        {option.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </RadioGroup>
          </div>
          <div className="flex justify-between pt-4">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentStep === 0}
            >
              Back
            </Button>
            <Button
              onClick={handleNext}
              disabled={!answers[currentStep]}
            >
              {currentStep === quizSteps.length - 1 ? "Complete" : "Next"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 