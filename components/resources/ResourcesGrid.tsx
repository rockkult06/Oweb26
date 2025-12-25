"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, BookOpen, Download, ExternalLink } from "lucide-react";

const resources = [
  {
    type: "whitepaper",
    icon: FileText,
    title: "Smart City Optimization Guide",
    description: "Comprehensive guide to implementing smart city solutions",
    category: "Whitepaper",
  },
  {
    type: "guide",
    icon: BookOpen,
    title: "RFP Template for Transit Optimization",
    description: "Ready-to-use RFP template for transit optimization projects",
    category: "Template",
  },
  {
    type: "tech",
    icon: FileText,
    title: "GTFS-RT Integration Best Practices",
    description: "Technical documentation for GTFS-RT data integration",
    category: "Technical",
  },
  {
    type: "guide",
    icon: BookOpen,
    title: "ROI Calculation Methodology",
    description: "Detailed methodology for calculating transit optimization ROI",
    category: "Guide",
  },
];

export default function ResourcesGrid() {
  return (
    <section className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <motion.div
                key={resource.title}
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
                    <span className="text-xs text-primary font-medium">
                      {resource.category}
                    </span>
                    <CardTitle className="text-xl">{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
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
