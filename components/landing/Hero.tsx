"use client";

import Link from "next/link";
import { ArrowRight, Github, Terminal } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 dark:from-primary/5 dark:via-secondary/5 dark:to-accent/5" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="container relative px-4 py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="https://www.npmjs.com/package/@formmorf/builder"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium transition-colors hover:bg-muted"
            >
              <span className="mr-2">🎉</span>
              <span>Now available on npm</span>
              <ArrowRight className="ml-2 h-3 w-3" />
            </Link>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Build Dynamic Forms with{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Drag & Drop
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg text-muted-foreground md:text-xl"
          >
            Enterprise React form builder with responsive previews, comprehensive
            validation, and TypeScript support. Built with Material-UI for modern,
            accessible forms.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center"
          >
            <Link
              href="/docs"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow transition-all hover:bg-primary/90 hover:shadow-lg"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center rounded-lg border bg-background px-8 py-3 text-sm font-semibold shadow-sm transition-all hover:bg-muted hover:shadow"
            >
              View Demo
            </Link>
            <Link
              href="https://github.com/Mkaifkazi/formmorf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border bg-background px-8 py-3 text-sm font-semibold shadow-sm transition-all hover:bg-muted hover:shadow"
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Link>
          </motion.div>

          {/* Installation command */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12"
          >
            <div className="inline-flex items-center rounded-lg border bg-muted/50 px-4 py-2 font-mono text-sm shadow-sm">
              <Terminal className="mr-2 h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">npm install</span>
              <span className="ml-2 font-semibold">@formmorf/builder</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
