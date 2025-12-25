"use client";

import { motion } from "framer-motion";
import { Calendar, CheckCircle2, Clock, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const timelineSteps = [
  {
    week: "Weeks 1-2",
    title: "Discovery & Setup",
    description: "Data integration and system configuration",
    icon: Calendar,
  },
  {
    week: "Weeks 3-4",
    title: "Baseline Analysis",
    description: "Current state assessment and KPI establishment",
    icon: Target,
  },
  {
    week: "Weeks 5-8",
    title: "Optimization Phase",
    description: "AI-driven recommendations and implementation",
    icon: CheckCircle2,
  },
  {
    week: "Weeks 9-12",
    title: "Results & Scale",
    description: "Performance review and expansion planning",
    icon: Clock,
  },
];

export default function PilotTimeline() {
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
            <span className="text-gradient">12-Week Pilot</span> Program
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fast-track implementation with measurable results in just 12 weeks
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary transform -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {timelineSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.week}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <Card className="h-full liquid-glass">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-10 h-10 rounded-full glass flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-sm font-semibold text-primary">
                          {step.week}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold font-heading">
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
        </div>
      </div>
    </section>
  );
}
