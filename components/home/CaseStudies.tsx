"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";

const caseStudies = [
  {
    city: "İzmir",
    title: "Transit Network Optimization",
    description: "Comprehensive optimization of public transportation network",
    results: [
      { metric: "On-Time Performance", value: "+18%", improvement: true },
      { metric: "Empty KM", value: "-26%", improvement: true },
      { metric: "Cost Savings", value: "₺2.4M", improvement: true },
    ],
  },
  {
    city: "Istanbul",
    title: "GTFS-RT Integration",
    description: "Real-time data integration for improved service reliability",
    results: [
      { metric: "Real-Time Accuracy", value: "94%", improvement: true },
      { metric: "Passenger Satisfaction", value: "+22%", improvement: true },
      { metric: "Operational Efficiency", value: "+15%", improvement: true },
    ],
  },
];

export default function CaseStudies() {
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
            Case <span className="text-gradient">Studies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results from cities using OW platform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full liquid-glass">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-2xl">{study.city}</CardTitle>
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {study.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {study.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      {study.results.map((result) => (
                        <div
                          key={result.metric}
                          className="flex items-center justify-between p-3 bg-background rounded-xl"
                        >
                          <span className="text-sm text-muted-foreground">
                            {result.metric}
                          </span>
                          <span className="text-lg font-bold text-primary">
                            {result.value}
                          </span>
                        </div>
                      ))}
                    </div>
                    <Button asChild variant="outline" className="w-full">
                      <Link href={`/case-studies#${study.city.toLowerCase()}`}>
                        Read Full Case Study
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button asChild size="lg" variant="outline">
            <Link href="/case-studies">
              View All Case Studies
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
