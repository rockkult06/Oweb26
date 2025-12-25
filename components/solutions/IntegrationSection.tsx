"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Plug, Database, Cloud, Shield } from "lucide-react";

const integrations = [
  {
    icon: Database,
    title: "Data Integration",
    description: "Seamless integration with GTFS, GTFS-RT, AVL, and ticketing systems",
  },
  {
    icon: Cloud,
    title: "Cloud & On-Prem",
    description: "Flexible deployment options to meet your infrastructure requirements",
  },
  {
    icon: Plug,
    title: "API-First",
    description: "RESTful APIs for easy integration with existing systems",
  },
  {
    icon: Shield,
    title: "Secure",
    description: "Enterprise-grade security with end-to-end encryption",
  },
];

export default function IntegrationSection() {
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
            Easy <span className="text-gradient">Integration</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built to work with your existing infrastructure
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {integrations.map((integration, index) => {
            const Icon = integration.icon;
            return (
              <motion.div
                key={integration.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:border-primary/50 transition-colors">
                  <CardContent className="p-6 space-y-4 text-center">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mx-auto">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold font-heading">
                      {integration.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {integration.description}
                    </p>
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
