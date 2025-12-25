"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Team Member 1",
    role: "CEO & Co-Founder",
    description: "Expertise in urban planning and smart city solutions",
  },
  {
    name: "Team Member 2",
    role: "CTO & Co-Founder",
    description: "Specialized in AI/ML and data analytics platforms",
  },
  {
    name: "Team Member 3",
    role: "Head of Product",
    description: "Product strategy and user experience design",
  },
];

export default function TeamSection() {
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
            Our <span className="text-gradient">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate experts dedicated to transforming urban mobility
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:border-primary/50 transition-colors">
                <CardContent className="p-6 space-y-4 text-center">
                  <div className="w-24 h-24 rounded-full bg-background-secondary mx-auto flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold font-heading">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary font-medium">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
