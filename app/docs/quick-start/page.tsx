import { Metadata } from "next";
import { CodeBlock } from "@/components/ui/CodeBlock";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Quick Start - FormMorf Documentation",
  description: "Build your first form with FormMorf in minutes",
};

export default function QuickStartPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Quick Start
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Learn how to build your first form with FormMorf in just a few minutes.
        </p>
      </div>

      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Basic Usage
        </h2>
        <p className="mt-3 text-muted-foreground">
          Here's a simple example of using the FormBuilder component:
        </p>

        <div className="mt-4">
          <CodeBlock
            code={`import { FormBuilder } from '@formmorf/builder';
import '@formmorf/builder/dist/style.css';

function App() {
  const handleSave = (schema) => {
    console.log('Form schema:', schema);
    // Save to your backend or state management
  };

  return (
    <FormBuilder
      onSave={handleSave}
      initialSchema={{
        title: 'Contact Form',
        description: 'Get in touch with us',
        fields: []
      }}
    />
  );
}`}
            language="tsx"
          />
        </div>
      </div>

      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          FormViewer for Runtime
        </h2>
        <p className="mt-3 text-muted-foreground">
          Once you have a form schema, use FormViewer to render it for users:
        </p>

        <div className="mt-4">
          <CodeBlock
            code={`import { FormViewer } from '@formmorf/builder';
import '@formmorf/builder/dist/style.css';

function ContactPage({ formSchema }) {
  const handleSubmit = (data) => {
    console.log('Form submitted:', data);
    // Process form submission
  };

  return (
    <FormViewer
      schema={formSchema}
      onSubmit={handleSubmit}
    />
  );
}`}
            language="tsx"
          />
        </div>
      </div>

      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Complete Example
        </h2>
        <p className="mt-3 text-muted-foreground">
          Here's a full example showing both builder and viewer:
        </p>

        <div className="mt-4">
          <CodeBlock
            code={`import { useState } from 'react';
import { FormBuilder, FormViewer, FormSchema } from '@formmorf/builder';
import '@formmorf/builder/dist/style.css';

function FormManager() {
  const [schema, setSchema] = useState<FormSchema>({
    title: 'My Form',
    description: '',
    fields: []
  });
  const [mode, setMode] = useState<'build' | 'preview'>('build');

  const handleSave = (newSchema: FormSchema) => {
    setSchema(newSchema);
    console.log('Schema saved:', newSchema);
  };

  const handleSubmit = (data: Record<string, any>) => {
    console.log('Form data:', data);
    alert('Form submitted! Check console for data.');
  };

  return (
    <div>
      <div className="mb-4">
        <button
          onClick={() => setMode('build')}
          className={mode === 'build' ? 'font-bold' : ''}
        >
          Build Mode
        </button>
        <button
          onClick={() => setMode('preview')}
          className={mode === 'preview' ? 'font-bold' : ''}
        >
          Preview Mode
        </button>
      </div>

      {mode === 'build' ? (
        <FormBuilder
          initialSchema={schema}
          onSave={handleSave}
        />
      ) : (
        <FormViewer
          schema={schema}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

export default FormManager;`}
            language="tsx"
          />
        </div>
      </div>

      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          With Initial Fields
        </h2>
        <p className="mt-3 text-muted-foreground">
          You can provide a pre-configured schema with fields:
        </p>

        <div className="mt-4">
          <CodeBlock
            code={`const initialSchema = {
  title: 'Contact Form',
  description: 'We would love to hear from you',
  fields: [
    {
      id: '1',
      type: 'text',
      label: 'Full Name',
      name: 'fullName',
      required: true,
      placeholder: 'Enter your name'
    },
    {
      id: '2',
      type: 'email',
      label: 'Email Address',
      name: 'email',
      required: true,
      placeholder: 'you@example.com'
    },
    {
      id: '3',
      type: 'textarea',
      label: 'Message',
      name: 'message',
      required: true,
      placeholder: 'Your message here...',
      rows: 5
    }
  ]
};

<FormBuilder initialSchema={initialSchema} onSave={handleSave} />`}
            language="tsx"
          />
        </div>
      </div>

      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Next.js Integration
        </h2>
        <p className="mt-3 text-muted-foreground">
          For Next.js projects, make sure to use client components:
        </p>

        <div className="mt-4">
          <CodeBlock
            code={`'use client';

import { FormBuilder } from '@formmorf/builder';
import '@formmorf/builder/dist/style.css';

export default function BuilderPage() {
  return <FormBuilder {...props} />;
}`}
            language="tsx"
          />
        </div>
      </div>

      <div className="rounded-lg border bg-muted/50 p-6">
        <h3 className="font-semibold">💡 Tips</h3>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li>• The FormBuilder component is fully controlled - save the schema to your state or backend</li>
          <li>• FormViewer is lightweight and can render any schema created by FormBuilder</li>
          <li>• All components work with Material-UI themes out of the box</li>
          <li>• Use TypeScript for better autocomplete and type safety</li>
        </ul>
      </div>

      <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-6">
        <h3 className="font-semibold">Explore Components</h3>
        <p className="mt-2 text-muted-foreground">
          Learn more about the FormBuilder and FormViewer components
        </p>
        <Link
          href="/docs/components/form-builder"
          className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
        >
          Component Documentation
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
