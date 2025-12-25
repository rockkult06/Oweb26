"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold font-heading">Mission</h2>
                <p className="text-muted-foreground">
                  To empower municipal decision-makers with data-driven tools
                  that make smart cities tangible, efficient, and sustainable.
                  We believe urban optimization should be visible, interactive,
                  and measurable.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="h-full">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-secondary" />
                </div>
                <h2 className="text-2xl font-bold font-heading">Vision</h2>
                <p className="text-muted-foreground">
                  To become the leading platform for smart city optimization,
                  where every city has access to the tools needed to create
                  efficient, sustainable, and citizen-friendly urban
                  environments.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
