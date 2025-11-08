import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Field Types - FormMorf Documentation",
  description: "Complete reference of all available form field types",
};

export default function FieldTypesPage() {
  const fieldTypes = [
    {
      category: "Text Input",
      fields: [
        { type: "text", name: "Text", description: "Single-line text input" },
        { type: "textarea", name: "Textarea", description: "Multi-line text input" },
        { type: "email", name: "Email", description: "Email input with validation" },
        { type: "phone", name: "Phone", description: "Phone number input" },
        { type: "url", name: "URL", description: "Website URL input" },
        { type: "password", name: "Password", description: "Password input (masked)" },
      ]
    },
    {
      category: "Numeric",
      fields: [
        { type: "number", name: "Number", description: "Numeric input with min/max" },
        { type: "range", name: "Range Slider", description: "Visual slider for numbers" },
        { type: "rating", name: "Rating", description: "Star rating component" },
      ]
    },
    {
      category: "Choice",
      fields: [
        { type: "select", name: "Select Dropdown", description: "Dropdown selection" },
        { type: "radio", name: "Radio Buttons", description: "Single choice from options" },
        { type: "checkbox", name: "Checkbox", description: "Single or multiple choices" },
        { type: "switch", name: "Switch Toggle", description: "On/off toggle" },
      ]
    },
    {
      category: "Date & Time",
      fields: [
        { type: "date", name: "Date Picker", description: "Select a date" },
        { type: "time", name: "Time Picker", description: "Select a time" },
        { type: "datetime", name: "DateTime Picker", description: "Select date and time" },
        { type: "daterange", name: "Date Range", description: "Select start and end dates" },
      ]
    },
    {
      category: "Media",
      fields: [
        { type: "file", name: "File Upload", description: "Upload any file type" },
        { type: "image", name: "Image Upload", description: "Upload and preview images" },
      ]
    },
    {
      category: "Rich Input",
      fields: [
        { type: "richtext", name: "Rich Text Editor", description: "WYSIWYG text editor" },
        { type: "color", name: "Color Picker", description: "Visual color selection" },
      ]
    },
    {
      category: "Layout",
      fields: [
        { type: "header", name: "Heading", description: "Static heading text (H1-H6)" },
        { type: "paragraph", name: "Paragraph", description: "Static paragraph text" },
        { type: "divider", name: "Divider", description: "Visual separator line" },
        { type: "section", name: "Section", description: "Collapsible field group" },
      ]
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Field Types
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          FormMorf supports 20+ field types out of the box. All fields are fully
          customizable with validation, styling, and conditional logic.
        </p>
      </div>

      <div className="space-y-12">
        {fieldTypes.map((category) => (
          <div key={category.category}>
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight border-b pb-2">
              {category.category}
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {category.fields.map((field) => (
                <div
                  key={field.type}
                  className="rounded-lg border bg-background p-4 transition-all hover:shadow-md"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="font-semibold">{field.name}</h3>
                    <code className="rounded bg-muted px-2 py-0.5 text-xs text-primary">
                      {field.type}
                    </code>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {field.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Common Properties
        </h2>
        <p className="mt-3 text-muted-foreground">
          All field types support these common properties:
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
                <td className="py-3 px-4 font-mono text-primary">id</td>
                <td className="py-3 px-4 font-mono text-sm">string</td>
                <td className="py-3 px-4">Unique identifier for the field</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-primary">type</td>
                <td className="py-3 px-4 font-mono text-sm">FieldType</td>
                <td className="py-3 px-4">The type of field (text, email, etc.)</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-primary">label</td>
                <td className="py-3 px-4 font-mono text-sm">string</td>
                <td className="py-3 px-4">Field label displayed to users</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-primary">name</td>
                <td className="py-3 px-4 font-mono text-sm">string</td>
                <td className="py-3 px-4">Field name for form submission</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-primary">placeholder</td>
                <td className="py-3 px-4 font-mono text-sm">string</td>
                <td className="py-3 px-4">Placeholder text</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-primary">helpText</td>
                <td className="py-3 px-4 font-mono text-sm">string</td>
                <td className="py-3 px-4">Help text shown below the field</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-primary">required</td>
                <td className="py-3 px-4 font-mono text-sm">boolean</td>
                <td className="py-3 px-4">Whether the field is required</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-primary">disabled</td>
                <td className="py-3 px-4 font-mono text-sm">boolean</td>
                <td className="py-3 px-4">Whether the field is disabled</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-primary">defaultValue</td>
                <td className="py-3 px-4 font-mono text-sm">any</td>
                <td className="py-3 px-4">Default value for the field</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-primary">validation</td>
                <td className="py-3 px-4 font-mono text-sm">FieldValidation</td>
                <td className="py-3 px-4">Validation rules</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-primary">style</td>
                <td className="py-3 px-4 font-mono text-sm">FieldStyle</td>
                <td className="py-3 px-4">Custom styling options</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-primary">conditions</td>
                <td className="py-3 px-4 font-mono text-sm">FieldConditions</td>
                <td className="py-3 px-4">Conditional visibility rules</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Type-Specific Properties
        </h2>
        <div className="mt-4 space-y-4">
          <details className="group rounded-lg border bg-background">
            <summary className="cursor-pointer p-4 font-semibold hover:bg-muted">
              Text Fields (text, email, textarea, etc.)
            </summary>
            <div className="border-t p-4">
              <ul className="space-y-2 text-sm">
                <li>• <code>maxLength</code> - Maximum character length</li>
                <li>• <code>pattern</code> - Regex pattern for validation</li>
                <li>• <code>rows</code> - Number of rows (textarea only)</li>
              </ul>
            </div>
          </details>

          <details className="group rounded-lg border bg-background">
            <summary className="cursor-pointer p-4 font-semibold hover:bg-muted">
              Number Fields
            </summary>
            <div className="border-t p-4">
              <ul className="space-y-2 text-sm">
                <li>• <code>min</code> - Minimum value</li>
                <li>• <code>max</code> - Maximum value</li>
                <li>• <code>step</code> - Step increment</li>
              </ul>
            </div>
          </details>

          <details className="group rounded-lg border bg-background">
            <summary className="cursor-pointer p-4 font-semibold hover:bg-muted">
              Select & Radio Fields
            </summary>
            <div className="border-t p-4">
              <ul className="space-y-2 text-sm">
                <li>• <code>options</code> - Array of {`{label, value}`} objects</li>
                <li>• <code>multiple</code> - Allow multiple selections</li>
              </ul>
            </div>
          </details>

          <details className="group rounded-lg border bg-background">
            <summary className="cursor-pointer p-4 font-semibold hover:bg-muted">
              File Upload Fields
            </summary>
            <div className="border-t p-4">
              <ul className="space-y-2 text-sm">
                <li>• <code>accept</code> - Accepted file types (e.g., "image/*")</li>
                <li>• <code>multiple</code> - Allow multiple files</li>
                <li>• <code>maxSize</code> - Max file size in MB</li>
                <li>• <code>maxFiles</code> - Max number of files</li>
              </ul>
            </div>
          </details>

          <details className="group rounded-lg border bg-background">
            <summary className="cursor-pointer p-4 font-semibold hover:bg-muted">
              Rating Field
            </summary>
            <div className="border-t p-4">
              <ul className="space-y-2 text-sm">
                <li>• <code>maxRating</code> - Maximum rating value (default: 5)</li>
                <li>• <code>allowHalf</code> - Allow half-star ratings</li>
              </ul>
            </div>
          </details>

          <details className="group rounded-lg border bg-background">
            <summary className="cursor-pointer p-4 font-semibold hover:bg-muted">
              Date/Time Fields
            </summary>
            <div className="border-t p-4">
              <ul className="space-y-2 text-sm">
                <li>• <code>minDate</code> - Minimum selectable date</li>
                <li>• <code>maxDate</code> - Maximum selectable date</li>
                <li>• <code>format</code> - Time format (12 or 24 hour)</li>
              </ul>
            </div>
          </details>
        </div>
      </div>

      <div className="rounded-lg border bg-muted/50 p-6">
        <h3 className="font-semibold">💡 Tips</h3>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li>• All fields support custom validation rules</li>
          <li>• Use conditional logic to show/hide fields dynamically</li>
          <li>• Field width can be set to 25%, 50%, 75%, or 100%</li>
          <li>• Static fields (header, paragraph) don't collect data</li>
        </ul>
      </div>
    </div>
  );
}
