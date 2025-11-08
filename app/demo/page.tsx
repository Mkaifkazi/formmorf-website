import { Metadata } from "next";
import { ExternalLink, Code2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Live Demo - FormMorf",
  description: "Try FormMorf's interactive form builder demo. Build and preview forms with drag-and-drop.",
};

export default function DemoPage() {
  return (
    <div className="container px-4 py-12">
      {/* Header */}
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Live Demo
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Experience FormMorf's powerful form builder in action. Build, customize,
          and preview forms with all features enabled.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="mx-auto mt-8 flex max-w-4xl flex-col gap-4 sm:flex-row sm:justify-center">
        <Link
          href="https://formmorf-showcase.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow transition-all hover:bg-primary/90 hover:shadow-lg"
        >
          <ExternalLink className="mr-2 h-4 w-4" />
          Open in New Tab
        </Link>
        <Link
          href="https://github.com/Mkaifkazi/formmorf/tree/master/examples/showcase"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-lg border bg-background px-6 py-3 text-sm font-semibold shadow-sm transition-all hover:bg-muted hover:shadow"
        >
          <Code2 className="mr-2 h-4 w-4" />
          View Source Code
        </Link>
      </div>

      {/* Embedded Demo */}
      <div className="mx-auto mt-12 max-w-7xl">
        <div className="overflow-hidden rounded-lg border bg-background shadow-2xl">
          <iframe
            src="https://formmorf-showcase.vercel.app"
            className="h-[800px] w-full border-0"
            title="FormMorf Live Demo"
            allow="clipboard-write"
          />
        </div>
      </div>

      {/* Features Callout */}
      <div className="mx-auto mt-12 max-w-4xl">
        <div className="rounded-lg border bg-muted/50 p-6">
          <h2 className="text-xl font-semibold">What you can do in the demo:</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            <li className="flex items-start space-x-2">
              <span className="text-primary">✓</span>
              <span className="text-sm">Drag and drop form fields</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-primary">✓</span>
              <span className="text-sm">Configure field properties</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-primary">✓</span>
              <span className="text-sm">Preview on multiple devices</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-primary">✓</span>
              <span className="text-sm">Add validation rules</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-primary">✓</span>
              <span className="text-sm">Test form submission</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-primary">✓</span>
              <span className="text-sm">Export form schema as JSON</span>
            </li>
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="mx-auto mt-12 max-w-4xl text-center">
        <h2 className="text-2xl font-bold">Ready to integrate FormMorf?</h2>
        <p className="mt-2 text-muted-foreground">
          Check out our documentation to get started with your own project
        </p>
        <Link
          href="/docs"
          className="mt-6 inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow transition-all hover:bg-primary/90 hover:shadow-lg"
        >
          Read Documentation
        </Link>
      </div>
    </div>
  );
}
