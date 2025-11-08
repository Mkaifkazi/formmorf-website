"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export function LivePreview() {
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
            See it in action
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Try the live demo to experience FormMorf's powerful features
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-12 max-w-6xl"
        >
          <div className="relative overflow-hidden rounded-lg border bg-background shadow-2xl">
            {/* Video Preview */}
            <div className="aspect-video w-full">
              <video
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/formmorf-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </motion.div>

        {/* Demo features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mt-12 max-w-3xl"
        >
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-lg border bg-background p-4 text-center">
              <div className="text-2xl font-bold text-primary">20+</div>
              <div className="mt-1 text-sm text-muted-foreground">
                Field Types
              </div>
            </div>
            <div className="rounded-lg border bg-background p-4 text-center">
              <div className="text-2xl font-bold text-secondary">3</div>
              <div className="mt-1 text-sm text-muted-foreground">
                Device Previews
              </div>
            </div>
            <div className="rounded-lg border bg-background p-4 text-center">
              <div className="text-2xl font-bold text-accent">100%</div>
              <div className="mt-1 text-sm text-muted-foreground">
                TypeScript
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
