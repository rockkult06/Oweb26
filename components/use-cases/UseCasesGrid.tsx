"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Building2, Bus, DollarSign, Leaf, Accessibility } from "lucide-react";

const useCases = [
  {
    icon: Building2,
    title: "Municipal Operations",
    description: "Optimize city-wide operations and resource allocation",
    challenges: [
      "Inefficient resource allocation",
      "Lack of operational visibility",
      "High operational costs",
    ],
    solutions: [
      "Real-time operational dashboards",
      "Predictive resource allocation",
      "Cost optimization analytics",
    ],
  },
  {
    icon: Bus,
    title: "Public Transportation",
    description: "Enhance transit efficiency and passenger experience",
    challenges: [
      "Schedule adherence issues",
      "Overcrowding during peak hours",
      "Empty vehicle kilometers",
    ],
    solutions: [
      "Frequency optimization",
      "Demand-responsive routing",
      "Fleet utilization analytics",
    ],
  },
  {
    icon: DollarSign,
    title: "Budget Optimization",
    description: "Maximize budget efficiency and identify savings",
    challenges: [
      "Unclear cost drivers",
      "Budget overruns",
      "Limited ROI visibility",
    ],
    solutions: [
      "Cost analysis and modeling",
      "Savings identification",
      "ROI tracking and reporting",
    ],
  },
  {
    icon: Leaf,
    title: "Environmental Impact",
    description: "Reduce carbon footprint and improve sustainability",
    challenges: [
      "High fuel consumption",
      "Inefficient routes",
      "Environmental compliance",
    ],
    solutions: [
      "Route optimization",
      "Emission tracking",
      "Sustainability reporting",
    ],
  },
  {
    icon: Accessibility,
    title: "Accessibility & Equity",
    description: "Ensure equitable access to transportation services",
    challenges: [
      "Accessibility gaps",
      "Service coverage issues",
      "Equity compliance",
    ],
    solutions: [
      "Accessibility scoring",
      "Coverage analysis",
      "Equity optimization",
    ],
  },
];

export default function UseCasesGrid() {
  return (
    <section className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{useCase.title}</CardTitle>
                    <CardDescription>{useCase.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold mb-2">
                        Common Challenges
                      </h4>
                      <ul className="space-y-1">
                        {useCase.challenges.map((challenge) => (
                          <li
                            key={challenge}
                            className="text-xs text-muted-foreground flex items-start"
                          >
                            <span className="mr-2">•</span>
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-2">
                        OW Solutions
                      </h4>
                      <ul className="space-y-1">
                        {useCase.solutions.map((solution) => (
                          <li
                            key={solution}
                            className="text-xs text-primary flex items-start"
                          >
                            <span className="mr-2">✓</span>
                            <span>{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
