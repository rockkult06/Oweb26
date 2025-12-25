"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, MapPin, Calendar } from "lucide-react";

const caseStudies = [
  {
    id: "izmir",
    city: "İzmir",
    title: "Transit Network Optimization",
    description:
      "Comprehensive optimization of İzmir's public transportation network",
    duration: "12 weeks",
    results: [
      { metric: "On-Time Performance", value: "+18%", improvement: true },
      { metric: "Empty KM Reduction", value: "-26%", improvement: true },
      { metric: "Annual Cost Savings", value: "₺2.4M", improvement: true },
      { metric: "Passenger Satisfaction", value: "+22%", improvement: true },
    ],
    modules: ["TransitOpt", "FleetOpt", "CostLogic"],
  },
  {
    id: "istanbul",
    city: "Istanbul",
    title: "GTFS-RT Integration & Real-Time Analytics",
    description:
      "Real-time data integration for improved service reliability and passenger experience",
    duration: "16 weeks",
    results: [
      { metric: "Real-Time Accuracy", value: "94%", improvement: true },
      { metric: "Passenger Satisfaction", value: "+22%", improvement: true },
      { metric: "Operational Efficiency", value: "+15%", improvement: true },
      { metric: "Data Quality Score", value: "98%", improvement: true },
    ],
    modules: ["GTFS-RT Manager", "RiderSense", "Intelligence Hub"],
  },
];

export default function CaseStudiesList() {
  return (
    <section className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4">
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <MapPin className="w-5 h-5 text-primary" />
                        <CardTitle className="text-3xl">{study.city}</CardTitle>
                      </div>
                      <h3 className="text-xl font-semibold text-primary mb-2">
                        {study.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {study.description}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{study.duration}</span>
                        </div>
                      </div>
                    </div>
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold mb-3">
                        Key Results
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {study.results.map((result) => (
                          <div
                            key={result.metric}
                            className="p-4 bg-background rounded-xl border border-border"
                          >
                            <p className="text-xs text-muted-foreground mb-1">
                              {result.metric}
                            </p>
                            <p className="text-2xl font-bold text-primary">
                              {result.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-2">
                        Modules Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {study.modules.map((module) => (
                          <span
                            key={module}
                            className="text-xs px-3 py-1 bg-primary/20 text-primary rounded-full"
                          >
                            {module}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
