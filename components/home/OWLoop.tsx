"use client";

import { motion } from "framer-motion";
import { Database, Eye, Brain, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const loopSteps = [
  {
    icon: Database,
    title: "Data",
    description: "Collect and integrate urban data from multiple sources",
    color: "text-primary",
  },
  {
    icon: Eye,
    title: "Visualization",
    description: "Transform data into immersive 3D visualizations",
    color: "text-secondary",
  },
  {
    icon: Brain,
    title: "Analysis",
    description: "AI-driven analytics for actionable insights",
    color: "text-primary",
  },
  {
    icon: Zap,
    title: "Action",
    description: "Implement optimizations with measurable results",
    color: "text-secondary",
  },
];

export default function OWLoop() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            The <span className="text-gradient">OW Loop</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A continuous cycle of data-driven optimization for smart cities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {loopSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full liquid-glass">
                  <CardContent className="p-6 space-y-4">
                    <div className={`w-12 h-12 rounded-xl glass flex items-center justify-center ${step.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold font-heading">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Connecting Arrow - Static */}
        <div className="hidden lg:flex justify-center mt-8">
          <div className="text-primary">
            <svg
              width="200"
              height="40"
              viewBox="0 0 200 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 20 L180 20 M170 10 L180 20 L170 30"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
