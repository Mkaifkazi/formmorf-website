"use client";

import { motion } from "framer-motion";
import { CodeBlock } from "@/components/ui/CodeBlock";

const installCode = `npm install @formmorf/builder
# or
pnpm add @formmorf/builder
# or
yarn add @formmorf/builder`;

const importCode = `import { FormBuilder } from '@formmorf/builder';
import '@formmorf/builder/dist/style.css';`;

const usageCode = `function App() {
  const handleSave = (schema) => {
    console.log('Form schema:', schema);
  };

  return (
    <FormBuilder
      onSave={handleSave}
      initialSchema={{
        title: 'My Form',
        description: 'Build your form here',
        fields: []
      }}
    />
  );
}`;

const steps = [
  {
    step: "1",
    title: "Install",
    description: "Add FormMorf to your project",
    code: installCode,
    language: "bash" as const,
  },
  {
    step: "2",
    title: "Import",
    description: "Import the components",
    code: importCode,
    language: "tsx" as const,
  },
  {
    step: "3",
    title: "Use",
    description: "Start building forms",
    code: usageCode,
    language: "tsx" as const,
  },
];

export function QuickStart() {
  return (
    <section className="py-24 md:py-32">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Quick Start
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Get started with FormMorf in just 3 simple steps
          </motion.p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl space-y-12">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid gap-8 md:grid-cols-[200px_1fr] md:gap-12"
            >
              <div>
                <div className="flex items-center space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-lg font-bold text-white">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <CodeBlock code={item.code} language={item.language} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
