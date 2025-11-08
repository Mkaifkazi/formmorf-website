import { Metadata } from "next";
import { CodeBlock } from "@/components/ui/CodeBlock";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "FormBuilder Component - FormMorf Documentation",
  description: "Complete API reference for the FormBuilder component",
};

export default function FormBuilderPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          FormBuilder
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          The FormBuilder component provides a drag-and-drop interface for
          creating dynamic forms visually.
        </p>
      </div>

      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Basic Usage
        </h2>
        <div className="mt-4">
          <CodeBlock
            code={`import { FormBuilder } from '@formmorf/builder';
import '@formmorf/builder/dist/style.css';

function App() {
  const handleSave = (schema) => {
    console.log('Form schema:', schema);
  };

  return (
    <FormBuilder
      onSave={handleSave}
      initialSchema={{
        title: 'My Form',
        description: 'Form description',
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
          Props
        </h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-semibold">Prop</th>
                <th className="text-left py-3 px-4 font-semibold">Type</th>
                <th className="text-left py-3 px-4 font-semibold">Default</th>
                <th className="text-left py-3 px-4 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-primary">initialSchema</td>
                <td className="py-3 px-4 font-mono text-sm">FormSchema</td>
                <td className="py-3 px-4 text-muted-foreground">-</td>
                <td className="py-3 px-4">Initial form schema to load</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-primary">onSave</td>
                <td className="py-3 px-4 font-mono text-sm">(schema: FormSchema) =&gt; void</td>
                <td className="py-3 px-4 text-muted-foreground">-</td>
                <td className="py-3 px-4">Callback when user saves the form</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-primary">readOnly</td>
                <td className="py-3 px-4 font-mono text-sm">boolean</td>
                <td className="py-3 px-4 font-mono">false</td>
                <td className="py-3 px-4">Disable editing if true</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Features
        </h2>
        <ul className="mt-4 space-y-3">
          <li className="flex items-start">
            <span className="mr-3 text-primary">✓</span>
            <div>
              <strong>Drag & Drop:</strong> Intuitive drag-and-drop interface
              powered by @dnd-kit
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-primary">✓</span>
            <div>
              <strong>Field Palette:</strong> Sidebar with 20+ available field
              types
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-primary">✓</span>
            <div>
              <strong>Properties Panel:</strong> Configure field properties,
              validation, and styling
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-primary">✓</span>
            <div>
              <strong>Device Preview:</strong> See how forms look on desktop,
              tablet, and mobile
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-primary">✓</span>
            <div>
              <strong>Undo/Redo:</strong> Full history management for all
              changes
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-primary">✓</span>
            <div>
              <strong>Form Settings:</strong> Configure submit button text,
              labels, and theme
            </div>
          </li>
        </ul>
      </div>

      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Advanced Example
        </h2>
        <p className="mt-3 text-muted-foreground">
          Using FormBuilder with state management and persistence:
        </p>
        <div className="mt-4">
          <CodeBlock
            code={`import { useState, useEffect } from 'react';
import { FormBuilder, FormSchema } from '@formmorf/builder';

function FormManager() {
  const [schema, setSchema] = useState<FormSchema | null>(null);

  // Load schema from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('formSchema');
    if (saved) {
      setSchema(JSON.parse(saved));
    } else {
      setSchema({
        title: 'New Form',
        description: '',
        fields: []
      });
    }
  }, []);

  const handleSave = (newSchema: FormSchema) => {
    // Save to localStorage
    localStorage.setItem('formSchema', JSON.stringify(newSchema));

    // Also save to backend
    fetch('/api/forms', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newSchema)
    });

    setSchema(newSchema);
  };

  if (!schema) return <div>Loading...</div>;

  return (
    <div className="h-screen">
      <FormBuilder
        initialSchema={schema}
        onSave={handleSave}
      />
    </div>
  );
}`}
            language="tsx"
          />
        </div>
      </div>

      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Keyboard Shortcuts
        </h2>
        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between rounded-lg border p-3">
            <span className="font-medium">Undo</span>
            <kbd className="rounded bg-muted px-2 py-1 font-mono text-sm">Ctrl + Z</kbd>
          </div>
          <div className="flex items-center justify-between rounded-lg border p-3">
            <span className="font-medium">Redo</span>
            <kbd className="rounded bg-muted px-2 py-1 font-mono text-sm">Ctrl + Shift + Z</kbd>
          </div>
          <div className="flex items-center justify-between rounded-lg border p-3">
            <span className="font-medium">Delete Selected Field</span>
            <kbd className="rounded bg-muted px-2 py-1 font-mono text-sm">Delete</kbd>
          </div>
        </div>
      </div>

      <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-6">
        <h3 className="font-semibold">Next: FormViewer</h3>
        <p className="mt-2 text-muted-foreground">
          Learn how to render forms for end users with the FormViewer component
        </p>
        <Link
          href="/docs/components/form-viewer"
          className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
        >
          FormViewer Documentation
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
