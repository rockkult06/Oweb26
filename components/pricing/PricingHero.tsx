"use client";

import { motion } from "framer-motion";

export default function PricingHero() {
  return (
    <section className="pt-32 pb-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold font-heading">
            Flexible <span className="text-gradient">Pricing</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Choose the plan that fits your city's needs. All plans include our
            12-week pilot program.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
