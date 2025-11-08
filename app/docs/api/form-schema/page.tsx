import { Metadata } from "next";
import { CodeBlock } from "@/components/ui/CodeBlock";

export const metadata: Metadata = {
  title: "FormSchema API - FormMorf Documentation",
  description: "Complete API reference for FormSchema structure and configuration",
};

export default function FormSchemaPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          FormSchema API
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Complete reference for FormSchema structure, field definitions, and configuration options.
        </p>
      </div>

      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          FormSchema Interface
        </h2>
        <p className="mt-3 text-muted-foreground">
          The main schema object that defines your form structure.
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-semibold">Property</th>
                <th className="text-left py-3 px-4 font-semibold">Type</th>
                <th className="text-left py-3 px-4 font-semibold">Required</th>
                <th className="text-left py-3 px-4 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-primary">id</td>
                <td className="py-3 px-4 font-mono text-sm">string</td>
                <td className="py-3 px-4">Yes</td>
                <td className="py-3 px-4">Unique identifier for the form</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-primary">title</td>
                <td className="py-3 px-4 font-mono text-sm">string</td>
                <td className="py-3 px-4">Yes</td>
                <td className="py-3 px-4">Form title displayed to users</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-primary">description</td>
                <td className="py-3 px-4 font-mono text-sm">string</td>
                <td className="py-3 px-4">No</td>
                <td className="py-3 px-4">Optional form description</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-primary">fields</td>
                <td className="py-3 px-4 font-mono text-sm">FieldDefinition[]</td>
                <td className="py-3 px-4">Yes</td>
                <td className="py-3 px-4">Array of field definitions</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-primary">settings</td>
                <td className="py-3 px-4 font-mono text-sm">FormSettings</td>
                <td className="py-3 px-4">No</td>
                <td className="py-3 px-4">Form-level configuration</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-primary">version</td>
                <td className="py-3 px-4 font-mono text-sm">string</td>
                <td className="py-3 px-4">No</td>
                <td className="py-3 px-4">Schema version for tracking</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-primary">createdAt</td>
                <td className="py-3 px-4 font-mono text-sm">Date</td>
                <td className="py-3 px-4">No</td>
                <td className="py-3 px-4">Creation timestamp</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-primary">updatedAt</td>
                <td className="py-3 px-4 font-mono text-sm">Date</td>
                <td className="py-3 px-4">No</td>
                <td className="py-3 px-4">Last update timestamp</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          FormSettings Interface
        </h2>
        <p className="mt-3 text-muted-foreground">
          Optional settings to customize form behavior and appearance.
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-semibold">Property</th>
                <th className="text-left py-3 px-4 font-semibold">Type</th>
                <th className="text-left py-3 px-4 font-semibold">Default</th>
                <th className="text-left py-3 px-4 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-primary">submitButtonText</td>
                <td className="py-3 px-4 font-mono text-sm">string</td>
                <td className="py-3 px-4">"Submit"</td>
                <td className="py-3 px-4">Text for submit button</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-primary">cancelButtonText</td>
                <td className="py-3 px-4 font-mono text-sm">string</td>
                <td className="py-3 px-4">"Cancel"</td>
                <td className="py-3 px-4">Text for cancel button</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-primary">showLabels</td>
                <td className="py-3 px-4 font-mono text-sm">boolean</td>
                <td className="py-3 px-4">true</td>
                <td className="py-3 px-4">Show field labels</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-primary">labelPosition</td>
                <td className="py-3 px-4 font-mono text-sm">'top' | 'left' | 'right'</td>
                <td className="py-3 px-4">'top'</td>
                <td className="py-3 px-4">Label position relative to field</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-primary">theme</td>
                <td className="py-3 px-4 font-mono text-sm">'light' | 'dark'</td>
                <td className="py-3 px-4">'light'</td>
                <td className="py-3 px-4">Form theme</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-primary">clearOnSubmit</td>
                <td className="py-3 px-4 font-mono text-sm">boolean</td>
                <td className="py-3 px-4">false</td>
                <td className="py-3 px-4">Clear form after submission</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          FieldValidation Interface
        </h2>
        <p className="mt-3 text-muted-foreground">
          Validation rules applicable to form fields.
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-semibold">Property</th>
                <th className="text-left py-3 px-4 font-semibold">Type</th>
                <th className="text-left py-3 px-4 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-primary">required</td>
                <td className="py-3 px-4 font-mono text-sm">boolean</td>
                <td className="py-3 px-4">Field must have a value</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-primary">minLength</td>
                <td className="py-3 px-4 font-mono text-sm">number</td>
                <td className="py-3 px-4">Minimum string length</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-primary">maxLength</td>
                <td className="py-3 px-4 font-mono text-sm">number</td>
                <td className="py-3 px-4">Maximum string length</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-primary">min</td>
                <td className="py-3 px-4 font-mono text-sm">number</td>
                <td className="py-3 px-4">Minimum numeric value</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-primary">max</td>
                <td className="py-3 px-4 font-mono text-sm">number</td>
                <td className="py-3 px-4">Maximum numeric value</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-primary">pattern</td>
                <td className="py-3 px-4 font-mono text-sm">string</td>
                <td className="py-3 px-4">Regex pattern for validation</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-primary">customMessage</td>
                <td className="py-3 px-4 font-mono text-sm">string</td>
                <td className="py-3 px-4">Custom error message</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          FieldConditions Interface
        </h2>
        <p className="mt-3 text-muted-foreground">
          Conditional logic for showing/hiding fields dynamically.
        </p>
        <div className="mt-4">
          <CodeBlock
            code={`interface FieldConditions {
  show?: ConditionRule[];  // Show field when conditions are met
  hide?: ConditionRule[];  // Hide field when conditions are met
  logic?: 'and' | 'or';    // How to combine multiple conditions (default: 'and')
}

interface ConditionRule {
  fieldId: string;              // The field to check
  operator: ConditionOperator;  // Comparison operator
  value?: any;                  // Value to compare against
}

type ConditionOperator =
  // Boolean operators
  | 'is_checked'
  | 'is_not_checked'
  // Comparison operators
  | 'equals'
  | 'not_equals'
  | 'contains'
  | 'not_contains'
  | 'starts_with'
  | 'ends_with'
  | 'is_empty'
  | 'is_not_empty'
  // Numeric operators
  | 'greater_than'
  | 'less_than'
  | 'greater_than_or_equal'
  | 'less_than_or_equal'
  // Array operators
  | 'includes'
  | 'not_includes';`}
            language="tsx"
          />
        </div>
      </div>

      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Example Usage
        </h2>
        <div className="mt-4">
          <CodeBlock
            code={`const schema: FormSchema = {
  id: 'user-registration',
  title: 'User Registration',
  description: 'Create your account',
  fields: [
    {
      id: '1',
      type: 'text',
      name: 'username',
      label: 'Username',
      required: true,
      validation: {
        minLength: 3,
        maxLength: 20,
        pattern: '^[a-zA-Z0-9_]+$',
        customMessage: 'Username must be 3-20 alphanumeric characters'
      }
    },
    {
      id: '2',
      type: 'email',
      name: 'email',
      label: 'Email',
      required: true
    },
    {
      id: '3',
      type: 'password',
      name: 'password',
      label: 'Password',
      required: true,
      validation: {
        minLength: 8,
        customMessage: 'Password must be at least 8 characters'
      }
    },
    {
      id: '4',
      type: 'checkbox',
      name: 'subscribe',
      label: 'Subscribe to newsletter'
    },
    {
      id: '5',
      type: 'text',
      name: 'referralCode',
      label: 'Referral Code',
      conditions: {
        show: [
          {
            fieldId: '4',
            operator: 'is_checked'
          }
        ]
      }
    }
  ],
  settings: {
    submitButtonText: 'Create Account',
    cancelButtonText: 'Reset',
    theme: 'light',
    clearOnSubmit: false
  },
  version: '1.0.0'
};`}
            language="tsx"
          />
        </div>
      </div>

      <div className="rounded-lg border bg-muted/50 p-6">
        <h3 className="font-semibold">💡 Best Practices</h3>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li>• Use unique IDs for all fields to enable proper tracking</li>
          <li>• Keep field names consistent with your backend API</li>
          <li>• Provide clear validation messages to guide users</li>
          <li>• Use conditional logic sparingly to avoid complexity</li>
          <li>• Version your schemas for easier tracking and migrations</li>
        </ul>
      </div>
    </div>
  );
}
