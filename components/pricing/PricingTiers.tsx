"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

const tiers = [
  {
    name: "Starter",
    description: "Perfect for small cities",
    price: "Custom",
    features: [
      "Up to 3 modules",
      "Cloud deployment",
      "Standard support",
      "12-week pilot included",
      "Basic analytics",
    ],
    cta: "Contact Sales",
  },
  {
    name: "Professional",
    description: "For mid-size municipalities",
    price: "Custom",
    features: [
      "Up to 6 modules",
      "Cloud or Hybrid deployment",
      "Priority support",
      "12-week pilot included",
      "Advanced analytics",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large cities and regions",
    price: "Custom",
    features: [
      "All modules",
      "Any deployment option",
      "24/7 dedicated support",
      "12-week pilot included",
      "Full analytics suite",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
  },
];

export default function PricingTiers() {
  return (
    <section className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={`h-full ${
                  tier.popular
                    ? "border-primary border-2 shadow-lg shadow-primary/20"
                    : "hover:border-primary/50"
                } transition-all`}
              >
                {tier.popular && (
                  <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{tier.price}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    variant={tier.popular ? "default" : "outline"}
                    className="w-full"
                    size="lg"
                  >
                    <Link href="/contact">{tier.cta}</Link>
                  </Button>
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
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">
            All plans include a 12-week pilot program. Need a custom solution?
          </p>
          <Button asChild variant="outline">
            <Link href="/contact">Request Custom Quote</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
