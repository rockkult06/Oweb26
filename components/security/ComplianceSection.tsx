"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const complianceItems = [
  "KVKK (Turkish Personal Data Protection Law) compliant",
  "GDPR (General Data Protection Regulation) compliant",
  "ISO 27001 certified information security management",
  "Regular third-party security audits",
  "Data processing agreements (DPA) available",
  "Privacy by design principles",
  "Data minimization and purpose limitation",
  "Right to access and data portability",
  "Data breach notification procedures",
  "Secure data deletion and retention policies",
];

export default function ComplianceSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              Compliance & <span className="text-gradient">Certifications</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Meeting the highest standards for data protection and security
            </p>
          </div>

          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {complianceItems.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
