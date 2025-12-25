"use client";

import { motion } from "framer-motion";
import { Shield, Lock, FileCheck, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const securityFeatures = [
  {
    icon: Shield,
    title: "KVKK/GDPR Compliant",
    description: "Full compliance with data protection regulations",
  },
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "AES-256 encryption for data at rest and in transit",
  },
  {
    icon: FileCheck,
    title: "ISO Certified",
    description: "ISO 27001 certified security practices",
  },
  {
    icon: Eye,
    title: "Audit Logging",
    description: "Comprehensive audit trails for all operations",
  },
];

export default function SecurityTeaser() {
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
            Enterprise <span className="text-gradient">Security</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built with security and compliance at the core
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full liquid-glass">
                  <CardContent className="p-6 space-y-4 text-center">
                    <div className="w-12 h-12 rounded-xl glass flex items-center justify-center mx-auto">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold font-heading">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
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
          <Button asChild size="lg">
            <Link href="/security">
              Learn More About Security
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
