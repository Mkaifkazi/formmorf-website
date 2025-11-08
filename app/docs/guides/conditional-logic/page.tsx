import { Metadata } from "next";
import { CodeBlock } from "@/components/ui/CodeBlock";

export const metadata: Metadata = {
  title: "Conditional Logic - FormMorf Documentation",
  description: "Learn how to show or hide fields dynamically based on user input",
};

export default function ConditionalLogicPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Conditional Logic
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Create dynamic forms that show or hide fields based on user input and conditions.
        </p>
      </div>

      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Overview
        </h2>
        <p className="mt-3 text-muted-foreground">
          Conditional logic allows you to control field visibility dynamically. Fields can be shown or hidden
          based on the values of other fields in your form.
        </p>
        <div className="mt-4 rounded-lg border bg-background p-4">
          <h3 className="font-semibold">Key Features</h3>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            <li>• Show/hide fields based on other field values</li>
            <li>• Support for multiple conditions with AND/OR logic</li>
            <li>• 15+ condition operators for different data types</li>
            <li>• Real-time field visibility updates</li>
            <li>• Clean, type-safe API</li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Condition Operators
        </h2>
        <p className="mt-3 text-muted-foreground">
          FormMorf supports different operators for different field types.
        </p>

        <div className="mt-4 space-y-4">
          <div className="rounded-lg border bg-background p-4">
            <h3 className="font-semibold mb-3">Boolean Operators</h3>
            <p className="text-sm text-muted-foreground mb-2">
              For checkbox and switch fields:
            </p>
            <ul className="space-y-1 text-sm">
              <li>• <code className="bg-muted px-2 py-0.5 rounded">is_checked</code> - Field is checked/enabled</li>
              <li>• <code className="bg-muted px-2 py-0.5 rounded">is_not_checked</code> - Field is unchecked/disabled</li>
            </ul>
          </div>

          <div className="rounded-lg border bg-background p-4">
            <h3 className="font-semibold mb-3">Comparison Operators</h3>
            <p className="text-sm text-muted-foreground mb-2">
              For text, email, select, and other string-based fields:
            </p>
            <ul className="space-y-1 text-sm">
              <li>• <code className="bg-muted px-2 py-0.5 rounded">equals</code> - Exact match</li>
              <li>• <code className="bg-muted px-2 py-0.5 rounded">not_equals</code> - Does not match</li>
              <li>• <code className="bg-muted px-2 py-0.5 rounded">contains</code> - Includes substring</li>
              <li>• <code className="bg-muted px-2 py-0.5 rounded">not_contains</code> - Does not include substring</li>
              <li>• <code className="bg-muted px-2 py-0.5 rounded">starts_with</code> - Begins with string</li>
              <li>• <code className="bg-muted px-2 py-0.5 rounded">ends_with</code> - Ends with string</li>
              <li>• <code className="bg-muted px-2 py-0.5 rounded">is_empty</code> - Field is empty</li>
              <li>• <code className="bg-muted px-2 py-0.5 rounded">is_not_empty</code> - Field has value</li>
            </ul>
          </div>

          <div className="rounded-lg border bg-background p-4">
            <h3 className="font-semibold mb-3">Numeric Operators</h3>
            <p className="text-sm text-muted-foreground mb-2">
              For number, range, and rating fields:
            </p>
            <ul className="space-y-1 text-sm">
              <li>• <code className="bg-muted px-2 py-0.5 rounded">greater_than</code> - Value is greater</li>
              <li>• <code className="bg-muted px-2 py-0.5 rounded">less_than</code> - Value is less</li>
              <li>• <code className="bg-muted px-2 py-0.5 rounded">greater_than_or_equal</code> - Value is ≥</li>
              <li>• <code className="bg-muted px-2 py-0.5 rounded">less_than_or_equal</code> - Value is ≤</li>
            </ul>
          </div>

          <div className="rounded-lg border bg-background p-4">
            <h3 className="font-semibold mb-3">Array Operators</h3>
            <p className="text-sm text-muted-foreground mb-2">
              For checkbox groups and multi-select fields:
            </p>
            <ul className="space-y-1 text-sm">
              <li>• <code className="bg-muted px-2 py-0.5 rounded">includes</code> - Array includes value</li>
              <li>• <code className="bg-muted px-2 py-0.5 rounded">not_includes</code> - Array does not include value</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Basic Example
        </h2>
        <p className="mt-3 text-muted-foreground">
          Show a field only when a checkbox is checked:
        </p>
        <div className="mt-4">
          <CodeBlock
            code={`const schema: FormSchema = {
  id: 'newsletter-signup',
  title: 'Newsletter Signup',
  fields: [
    {
      id: '1',
      type: 'email',
      name: 'email',
      label: 'Email Address',
      required: true
    },
    {
      id: '2',
      type: 'checkbox',
      name: 'subscribe',
      label: 'Subscribe to weekly newsletter'
    },
    {
      id: '3',
      type: 'select',
      name: 'frequency',
      label: 'Email Frequency',
      options: [
        { label: 'Daily', value: 'daily' },
        { label: 'Weekly', value: 'weekly' },
        { label: 'Monthly', value: 'monthly' }
      ],
      // Show this field only when subscribe checkbox is checked
      conditions: {
        show: [
          {
            fieldId: '2',
            operator: 'is_checked'
          }
        ]
      }
    }
  ]
};`}
            language="tsx"
          />
        </div>
      </div>

      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Multiple Conditions with AND Logic
        </h2>
        <p className="mt-3 text-muted-foreground">
          Show a field only when all conditions are met:
        </p>
        <div className="mt-4">
          <CodeBlock
            code={`{
  id: '4',
  type: 'textarea',
  name: 'feedback',
  label: 'Additional Feedback',
  // Show only when:
  // - User is subscribed AND
  // - Selected daily frequency
  conditions: {
    show: [
      {
        fieldId: '2',
        operator: 'is_checked'
      },
      {
        fieldId: '3',
        operator: 'equals',
        value: 'daily'
      }
    ],
    logic: 'and'  // Default behavior
  }
}`}
            language="tsx"
          />
        </div>
      </div>

      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Multiple Conditions with OR Logic
        </h2>
        <p className="mt-3 text-muted-foreground">
          Show a field when any condition is met:
        </p>
        <div className="mt-4">
          <CodeBlock
            code={`{
  id: '5',
  type: 'text',
  name: 'promotionCode',
  label: 'Promotion Code',
  // Show when EITHER:
  // - User selected daily frequency OR
  // - User selected weekly frequency
  conditions: {
    show: [
      {
        fieldId: '3',
        operator: 'equals',
        value: 'daily'
      },
      {
        fieldId: '3',
        operator: 'equals',
        value: 'weekly'
      }
    ],
    logic: 'or'
  }
}`}
            language="tsx"
          />
        </div>
      </div>

      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Numeric Conditions
        </h2>
        <p className="mt-3 text-muted-foreground">
          Show fields based on numeric values:
        </p>
        <div className="mt-4">
          <CodeBlock
            code={`const schema: FormSchema = {
  id: 'product-order',
  title: 'Product Order',
  fields: [
    {
      id: '1',
      type: 'number',
      name: 'quantity',
      label: 'Quantity',
      min: 1,
      max: 100,
      required: true
    },
    {
      id: '2',
      type: 'text',
      name: 'bulkDiscount',
      label: 'Bulk Order Discount Code',
      helpText: 'Available for orders of 10 or more',
      // Show only when quantity >= 10
      conditions: {
        show: [
          {
            fieldId: '1',
            operator: 'greater_than_or_equal',
            value: 10
          }
        ]
      }
    },
    {
      id: '3',
      type: 'rating',
      name: 'rating',
      label: 'Rate Your Experience',
      maxRating: 5
    },
    {
      id: '4',
      type: 'textarea',
      name: 'improvementSuggestions',
      label: 'How Can We Improve?',
      // Show only when rating < 4
      conditions: {
        show: [
          {
            fieldId: '3',
            operator: 'less_than',
            value: 4
          }
        ]
      }
    }
  ]
};`}
            language="tsx"
          />
        </div>
      </div>

      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Text-Based Conditions
        </h2>
        <p className="mt-3 text-muted-foreground">
          Use string comparison operators for text fields:
        </p>
        <div className="mt-4">
          <CodeBlock
            code={`{
  id: '1',
  type: 'select',
  name: 'country',
  label: 'Country',
  options: [
    { label: 'United States', value: 'US' },
    { label: 'Canada', value: 'CA' },
    { label: 'United Kingdom', value: 'UK' }
  ]
},
{
  id: '2',
  type: 'text',
  name: 'state',
  label: 'State',
  // Show only for US
  conditions: {
    show: [
      {
        fieldId: '1',
        operator: 'equals',
        value: 'US'
      }
    ]
  }
},
{
  id: '3',
  type: 'text',
  name: 'province',
  label: 'Province',
  // Show only for Canada
  conditions: {
    show: [
      {
        fieldId: '1',
        operator: 'equals',
        value: 'CA'
      }
    ]
  }
}`}
            language="tsx"
          />
        </div>
      </div>

      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Hide vs Show Conditions
        </h2>
        <p className="mt-3 text-muted-foreground">
          You can use either <code>show</code> or <code>hide</code> conditions:
        </p>
        <div className="mt-4">
          <CodeBlock
            code={`// Using 'show' - field visible when condition is true
{
  id: '1',
  type: 'text',
  name: 'companyName',
  label: 'Company Name',
  conditions: {
    show: [
      {
        fieldId: 'accountType',
        operator: 'equals',
        value: 'business'
      }
    ]
  }
}

// Using 'hide' - field hidden when condition is true
{
  id: '2',
  type: 'text',
  name: 'personalBio',
  label: 'Personal Bio',
  conditions: {
    hide: [
      {
        fieldId: 'accountType',
        operator: 'equals',
        value: 'business'
      }
    ]
  }
}`}
            language="tsx"
          />
        </div>
      </div>

      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Complex Example
        </h2>
        <p className="mt-3 text-muted-foreground">
          A registration form with multiple conditional fields:
        </p>
        <div className="mt-4">
          <CodeBlock
            code={`const schema: FormSchema = {
  id: 'event-registration',
  title: 'Event Registration',
  fields: [
    {
      id: '1',
      type: 'select',
      name: 'attendeeType',
      label: 'I am attending as',
      required: true,
      options: [
        { label: 'Individual', value: 'individual' },
        { label: 'Company Representative', value: 'company' },
        { label: 'Student', value: 'student' }
      ]
    },
    {
      id: '2',
      type: 'text',
      name: 'companyName',
      label: 'Company Name',
      required: true,
      conditions: {
        show: [
          { fieldId: '1', operator: 'equals', value: 'company' }
        ]
      }
    },
    {
      id: '3',
      type: 'text',
      name: 'university',
      label: 'University Name',
      required: true,
      conditions: {
        show: [
          { fieldId: '1', operator: 'equals', value: 'student' }
        ]
      }
    },
    {
      id: '4',
      type: 'file',
      name: 'studentId',
      label: 'Student ID Card',
      accept: 'image/*,.pdf',
      helpText: 'Upload your student ID for verification',
      conditions: {
        show: [
          { fieldId: '1', operator: 'equals', value: 'student' }
        ]
      }
    },
    {
      id: '5',
      type: 'checkbox',
      name: 'bringGuest',
      label: 'I will bring a guest (+1)'
    },
    {
      id: '6',
      type: 'text',
      name: 'guestName',
      label: 'Guest Name',
      required: true,
      conditions: {
        show: [
          { fieldId: '5', operator: 'is_checked' }
        ]
      }
    },
    {
      id: '7',
      type: 'email',
      name: 'guestEmail',
      label: 'Guest Email',
      required: true,
      conditions: {
        show: [
          { fieldId: '5', operator: 'is_checked' }
        ]
      }
    }
  ]
};`}
            language="tsx"
          />
        </div>
      </div>

      <div className="rounded-lg border bg-muted/50 p-6">
        <h3 className="font-semibold">💡 Best Practices</h3>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li>• Keep conditions simple and easy to understand</li>
          <li>• Avoid circular dependencies (Field A depends on B, B depends on A)</li>
          <li>• Use meaningful field IDs that make conditions readable</li>
          <li>• Test all condition paths thoroughly</li>
          <li>• Consider using <code>hide</code> instead of <code>show</code> when it makes logic clearer</li>
          <li>• Document complex conditional logic in code comments</li>
        </ul>
      </div>
    </div>
  );
}
