"use client";

import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 px-8 py-16 text-center md:px-16 md:py-24"
        >
          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Ready to build amazing forms?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Get started with FormMorf today and create beautiful, functional
              forms in minutes.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/docs"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow transition-all hover:bg-primary/90 hover:shadow-lg"
              >
                <BookOpen className="mr-2 h-4 w-4" />
                Read Documentation
              </Link>
              <Link
                href="https://www.npmjs.com/package/@formmorf/builder"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border bg-background px-8 py-3 text-sm font-semibold shadow-sm transition-all hover:bg-muted hover:shadow"
              >
                View on npm
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
