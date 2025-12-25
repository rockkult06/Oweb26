"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

const proofMetrics = [
  { value: "18%", label: "Cost Reduction", description: "Average savings on transit operations" },
  { value: "22%", label: "Efficiency Gain", description: "Improved route optimization" },
  { value: "26%", label: "On-Time Performance", description: "Enhanced schedule adherence" },
  { value: "40%", label: "Empty KM Reduction", description: "Optimized vehicle utilization" },
];

export default function ProofBar() {
  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 glass border-y border-white/10" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {proofMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center space-y-2 liquid-glass rounded-2xl p-6 backdrop-blur-xl"
            >
              <div className="flex items-center justify-center space-x-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="text-4xl md:text-5xl font-bold text-primary font-heading">
                  {metric.value}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {metric.label}
              </h3>
              <p className="text-sm text-muted-foreground">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
