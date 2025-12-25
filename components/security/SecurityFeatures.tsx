"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, FileCheck, Eye, Key, Server } from "lucide-react";

const features = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "AES-256 encryption for data at rest and TLS 1.3 for data in transit",
  },
  {
    icon: Shield,
    title: "KVKK/GDPR Compliant",
    description: "Full compliance with Turkish KVKK and EU GDPR regulations",
  },
  {
    icon: FileCheck,
    title: "ISO 27001 Certified",
    description: "Internationally recognized information security management",
  },
  {
    icon: Eye,
    title: "Audit Logging",
    description: "Comprehensive audit trails for all system operations and access",
  },
  {
    icon: Key,
    title: "Access Control",
    description: "Role-based access control (RBAC) with multi-factor authentication",
  },
  {
    icon: Server,
    title: "Secure Infrastructure",
    description: "Enterprise-grade infrastructure with regular security audits",
  },
];

export default function SecurityFeatures() {
  return (
    <section className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:border-primary/50 transition-colors">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
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
      </div>
    </section>
  );
}
