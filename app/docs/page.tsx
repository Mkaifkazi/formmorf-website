import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Github, Package } from "lucide-react";

export const metadata: Metadata = {
  title: "Documentation - FormMorf",
  description: "Complete documentation for FormMorf - React form builder library",
};

export default function DocsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Introduction
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Welcome to FormMorf - a powerful, enterprise-ready React form builder
          library with drag-and-drop functionality.
        </p>
      </div>

      <div className="flex gap-4">
        <Link
          href="https://www.npmjs.com/package/@formmorf/builder"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-lg border bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-muted"
        >
          <Package className="mr-2 h-4 w-4" />
          npm Package
        </Link>
        <Link
          href="https://github.com/Mkaifkazi/formmorf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-lg border bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-muted"
        >
          <Github className="mr-2 h-4 w-4" />
          GitHub
        </Link>
      </div>

      <div className="rounded-lg border bg-muted/50 p-6">
        <h2 className="text-xl font-semibold">What is FormMorf?</h2>
        <p className="mt-3 text-muted-foreground">
          FormMorf is a comprehensive React library that enables developers to build
          dynamic, interactive forms with a visual drag-and-drop interface. It
          combines powerful features with an intuitive API to make form building
          fast and enjoyable.
        </p>
      </div>

      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Key Features
        </h2>
        <ul className="mt-4 space-y-3">
          <li className="flex items-start">
            <span className="mr-3 text-primary">✓</span>
            <div>
              <strong>Drag & Drop Interface:</strong> Intuitive form building with
              @dnd-kit for smooth, accessible drag-and-drop interactions
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-primary">✓</span>
            <div>
              <strong>20+ Field Types:</strong> Rich set of form fields including
              text, number, date, file upload, rich text editor, and more
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-primary">✓</span>
            <div>
              <strong>Responsive Preview:</strong> See how your forms look on
              desktop, tablet, and mobile devices in real-time
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-primary">✓</span>
            <div>
              <strong>Comprehensive Validation:</strong> Built-in validators and
              support for custom validation rules
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-primary">✓</span>
            <div>
              <strong>TypeScript Support:</strong> Full type definitions for
              excellent IDE support and type safety
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-primary">✓</span>
            <div>
              <strong>Material-UI Integration:</strong> Beautiful, accessible
              components following Material Design
            </div>
          </li>
        </ul>
      </div>

      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Tech Stack
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border bg-background p-4">
            <h3 className="font-semibold">Core</h3>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>• React 18</li>
              <li>• TypeScript</li>
              <li>• Zustand (State Management)</li>
              <li>• Immer (Immutable Updates)</li>
            </ul>
          </div>
          <div className="rounded-lg border bg-background p-4">
            <h3 className="font-semibold">UI & Interactions</h3>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>• Material-UI v7</li>
              <li>• @dnd-kit (Drag & Drop)</li>
              <li>• Emotion (CSS-in-JS)</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Use Cases
        </h2>
        <ul className="mt-4 space-y-2 text-muted-foreground">
          <li>• <strong>Admin Panels:</strong> Create dynamic forms for data entry and management</li>
          <li>• <strong>Survey Tools:</strong> Build customizable surveys and questionnaires</li>
          <li>• <strong>Form Builders:</strong> Embed a form builder in your SaaS application</li>
          <li>• <strong>Workflow Automation:</strong> Generate forms programmatically based on business logic</li>
          <li>• <strong>CMS Systems:</strong> Enable content editors to create custom forms</li>
        </ul>
      </div>

      <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-6">
        <h3 className="font-semibold">Ready to get started?</h3>
        <p className="mt-2 text-muted-foreground">
          Follow our installation guide to add FormMorf to your project
        </p>
        <Link
          href="/docs/installation"
          className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
        >
          Installation Guide
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
