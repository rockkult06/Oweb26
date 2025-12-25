"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export default function CTABand() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 glass-strong border-y border-white/20" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading">
            Ready to <span className="text-gradient">Optimize Your City</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join leading municipalities using OW platform to transform their
            urban operations. Start with a 12-week pilot program.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/contact">
                Request Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8"
            >
              <Link href="/contact">
                <Calendar className="mr-2 w-5 h-5" />
                Schedule Meeting
              </Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            No credit card required • 12-week pilot program • Enterprise support
          </p>
        </motion.div>
      </div>
    </section>
  );
}
