"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertCircle, XCircle } from "lucide-react";

const modules = [
  {
    id: "transitopt",
    name: "TransitOpt",
    description: "Frequency and schedule optimization for public transit",
    status: "active" as const,
    kpis: [
      { name: "On-Time Performance", value: "94%", trend: "up" },
      { name: "Avg Wait Time", value: "4.2 min", trend: "down" },
    ],
  },
  {
    id: "fleetopt",
    name: "FleetOpt",
    description: "Vehicle allocation and routing optimization",
    status: "active" as const,
    kpis: [
      { name: "Fleet Utilization", value: "87%", trend: "up" },
      { name: "Empty KM", value: "12%", trend: "down" },
    ],
  },
  {
    id: "ridersense",
    name: "RiderSense",
    description: "Passenger flow and crowding analysis",
    status: "warning" as const,
    kpis: [
      { name: "Peak Load", value: "78%", trend: "stable" },
      { name: "Comfort Index", value: "82", trend: "up" },
    ],
  },
  {
    id: "costlogic",
    name: "CostLogic",
    description: "Operational cost analysis and optimization",
    status: "active" as const,
    kpis: [
      { name: "Cost per KM", value: "₺2.45", trend: "down" },
      { name: "Savings", value: "18%", trend: "up" },
    ],
  },
];

const statusConfig = {
  active: { icon: CheckCircle2, color: "text-primary" },
  warning: { icon: AlertCircle, color: "text-warning" },
  error: { icon: XCircle, color: "text-destructive" },
  inactive: { icon: XCircle, color: "text-muted-foreground" },
};

export default function ModulesGrid() {
  return (
    <section className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            OW <span className="text-gradient">Suite</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Modular solutions for comprehensive city optimization
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {modules.map((module, index) => {
            const StatusIcon = statusConfig[module.status].icon;
            const statusColor = statusConfig[module.status].color;

            return (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full liquid-glass">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <StatusIcon className={`w-5 h-5 ${statusColor}`} />
                          <CardTitle className="text-xl">{module.name}</CardTitle>
                        </div>
                        <CardDescription>{module.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        {module.kpis.map((kpi) => (
                          <div key={kpi.name} className="space-y-1">
                            <p className="text-xs text-muted-foreground uppercase tracking-wide">
                              {kpi.name}
                            </p>
                            <p className="text-2xl font-bold text-primary">
                              {kpi.value}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {kpi.trend === "up" && "↑ Improving"}
                              {kpi.trend === "down" && "↓ Decreasing"}
                              {kpi.trend === "stable" && "→ Stable"}
                            </p>
                          </div>
                        ))}
                      </div>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full"
                      >
                        <Link href={`/solutions#${module.id}`}>
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button asChild size="lg" variant="outline">
            <Link href="/solutions">
              View All Solutions
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
