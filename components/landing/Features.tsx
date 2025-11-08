"use client";

import {
  MousePointerClick,
  Smartphone,
  CheckCircle2,
  Palette,
  Code2,
  Settings2,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: MousePointerClick,
    title: "Drag & Drop Interface",
    description:
      "Intuitive form building with @dnd-kit. Drag fields, reorder, and customize with ease.",
  },
  {
    icon: Smartphone,
    title: "Responsive Preview",
    description:
      "Preview your forms on desktop, tablet, and mobile devices in real-time.",
  },
  {
    icon: CheckCircle2,
    title: "Comprehensive Validation",
    description:
      "Built-in validators and custom validation support for all field types.",
  },
  {
    icon: Palette,
    title: "Material-UI Components",
    description:
      "Modern, accessible UI components following Material Design principles.",
  },
  {
    icon: Code2,
    title: "TypeScript Support",
    description:
      "Full TypeScript definitions with IntelliSense for better developer experience.",
  },
  {
    icon: Settings2,
    title: "Flexible API",
    description:
      "Easy integration and customization with a powerful, well-documented API.",
  },
];

export function Features() {
  return (
    <section className="border-t bg-muted/30 py-24 md:py-32">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Everything you need to build forms
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Built with modern technologies for the best developer and user
            experience.
          </motion.p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 transition-colors group-hover:from-primary/30 group-hover:to-secondary/30">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
