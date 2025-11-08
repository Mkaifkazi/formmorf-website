import { Metadata } from "next";
import { CodeBlock } from "@/components/ui/CodeBlock";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Installation - FormMorf Documentation",
  description: "Learn how to install FormMorf in your React project",
};

export default function InstallationPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Installation
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Install FormMorf in your React project using your preferred package manager.
        </p>
      </div>

      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Requirements
        </h2>
        <ul className="mt-4 space-y-2 text-muted-foreground">
          <li>• React 17.0.0 or higher</li>
          <li>• React DOM 17.0.0 or higher</li>
          <li>• Node.js 16.0.0 or higher</li>
        </ul>
      </div>

      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Install the package
        </h2>
        <p className="mt-3 text-muted-foreground">
          Choose your package manager and run the installation command:
        </p>

        <div className="mt-4 space-y-4">
          <div>
            <h3 className="mb-2 text-sm font-semibold">npm</h3>
            <CodeBlock code="npm install @formmorf/builder" language="bash" />
          </div>

          <div>
            <h3 className="mb-2 text-sm font-semibold">pnpm</h3>
            <CodeBlock code="pnpm add @formmorf/builder" language="bash" />
          </div>

          <div>
            <h3 className="mb-2 text-sm font-semibold">yarn</h3>
            <CodeBlock code="yarn add @formmorf/builder" language="bash" />
          </div>
        </div>
      </div>

      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Peer Dependencies
        </h2>
        <p className="mt-3 text-muted-foreground">
          FormMorf requires the following peer dependencies to be installed in your project:
        </p>

        <div className="mt-4">
          <CodeBlock
            code={`npm install react react-dom immer

# Or if using pnpm
pnpm add react react-dom immer

# Or if using yarn
yarn add react react-dom immer`}
            language="bash"
          />
        </div>

        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <p className="text-sm text-muted-foreground">
            <strong>Note:</strong> If you already have React and React DOM installed,
            you only need to add <code className="rounded bg-muted px-1 py-0.5">immer</code>.
          </p>
        </div>
      </div>

      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Import Styles
        </h2>
        <p className="mt-3 text-muted-foreground">
          Import the CSS file in your application's entry point or layout component:
        </p>

        <div className="mt-4">
          <CodeBlock
            code={`import '@formmorf/builder/dist/style.css';`}
            language="tsx"
          />
        </div>
      </div>

      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Verify Installation
        </h2>
        <p className="mt-3 text-muted-foreground">
          Create a simple test to verify the installation:
        </p>

        <div className="mt-4">
          <CodeBlock
            code={`import { FormBuilder } from '@formmorf/builder';
import '@formmorf/builder/dist/style.css';

function App() {
  return (
    <div>
      <h1>FormMorf Test</h1>
      <FormBuilder
        initialSchema={{
          title: 'Test Form',
          description: '',
          fields: []
        }}
      />
    </div>
  );
}

export default App;`}
            language="tsx"
          />
        </div>
      </div>

      <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-6">
        <h3 className="font-semibold">Next Steps</h3>
        <p className="mt-2 text-muted-foreground">
          Now that you have FormMorf installed, learn how to build your first form
        </p>
        <Link
          href="/docs/quick-start"
          className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
        >
          Quick Start Guide
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
