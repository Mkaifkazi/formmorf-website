import { Metadata } from "next";
import { CodeBlock } from "@/components/ui/CodeBlock";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "FormViewer Component - FormMorf Documentation",
  description: "Complete API reference for the FormViewer component",
};

export default function FormViewerPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          FormViewer
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          The FormViewer component renders forms for end users based on a schema
          created with FormBuilder.
        </p>
      </div>

      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Basic Usage
        </h2>
        <div className="mt-4">
          <CodeBlock
            code={`import { FormViewer } from '@formmorf/builder';
import '@formmorf/builder/dist/style.css';

function ContactForm({ schema }) {
  const handleSubmit = (data) => {
    console.log('Form submitted:', data);
    // Send to backend
  };

  return (
    <FormViewer
      schema={schema}
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
                <td className="py-3 px-4 font-mono text-primary">schema</td>
                <td className="py-3 px-4 font-mono text-sm">FormSchema</td>
                <td className="py-3 px-4 text-muted-foreground">required</td>
                <td className="py-3 px-4">The form schema to render</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-primary">onSubmit</td>
                <td className="py-3 px-4 font-mono text-sm">(data: Record&lt;string, any&gt;) =&gt; void</td>
                <td className="py-3 px-4 text-muted-foreground">-</td>
                <td className="py-3 px-4">Callback when form is submitted</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-mono text-primary">initialData</td>
                <td className="py-3 px-4 font-mono text-sm">Record&lt;string, any&gt;</td>
                <td className="py-3 px-4 font-mono">{'{}'}</td>
                <td className="py-3 px-4">Initial form values</td>
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
              <strong>Automatic Validation:</strong> Validates all fields based
              on schema rules
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-primary">✓</span>
            <div>
              <strong>Error Display:</strong> Shows validation errors inline
              below fields
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-primary">✓</span>
            <div>
              <strong>Conditional Fields:</strong> Show/hide fields based on
              other field values
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-primary">✓</span>
            <div>
              <strong>Material-UI Styling:</strong> Beautiful, accessible
              components out of the box
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-primary">✓</span>
            <div>
              <strong>Responsive:</strong> Works perfectly on mobile, tablet,
              and desktop
            </div>
          </li>
        </ul>
      </div>

      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          With Initial Data
        </h2>
        <p className="mt-3 text-muted-foreground">
          Pre-fill form fields with existing data (for edit forms):
        </p>
        <div className="mt-4">
          <CodeBlock
            code={`function EditContactForm({ contactId }) {
  const [schema, setSchema] = useState(null);
  const [initialData, setInitialData] = useState({});

  useEffect(() => {
    // Load schema and contact data
    Promise.all([
      fetch('/api/form-schema').then(r => r.json()),
      fetch(\`/api/contacts/\${contactId}\`).then(r => r.json())
    ]).then(([formSchema, contact]) => {
      setSchema(formSchema);
      setInitialData({
        fullName: contact.name,
        email: contact.email,
        phone: contact.phone,
        message: contact.notes
      });
    });
  }, [contactId]);

  const handleSubmit = (data) => {
    fetch(\`/api/contacts/\${contactId}\`, {
      method: 'PUT',
      body: JSON.stringify(data)
    });
  };

  if (!schema) return <div>Loading...</div>;

  return (
    <FormViewer
      schema={schema}
      initialData={initialData}
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
          Handling Submission
        </h2>
        <p className="mt-3 text-muted-foreground">
          Complete example with loading states and error handling:
        </p>
        <div className="mt-4">
          <CodeBlock
            code={`function ContactForm({ schema }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (!response.ok) throw new Error('Submit failed');

      setSubmitSuccess(true);
      // Reset form or redirect
      setTimeout(() => {
        window.location.href = '/thank-you';
      }, 2000);

    } catch (error) {
      setSubmitError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {submitSuccess && (
        <div className="mb-4 rounded bg-green-100 p-4 text-green-800">
          Form submitted successfully!
        </div>
      )}

      {submitError && (
        <div className="mb-4 rounded bg-red-100 p-4 text-red-800">
          Error: {submitError}
        </div>
      )}

      <FormViewer
        schema={schema}
        onSubmit={handleSubmit}
      />

      {isSubmitting && (
        <div className="mt-4 text-center text-muted-foreground">
          Submitting...
        </div>
      )}
    </div>
  );
}`}
            language="tsx"
          />
        </div>
      </div>

      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Validation
        </h2>
        <p className="mt-3 text-muted-foreground">
          FormViewer automatically validates fields based on the schema. No
          additional code needed!
        </p>
        <div className="mt-4 rounded-lg border bg-muted/50 p-4">
          <ul className="space-y-2 text-sm">
            <li>• <strong>Required fields:</strong> Checked before submission</li>
            <li>• <strong>Email validation:</strong> Validates email format</li>
            <li>• <strong>Number ranges:</strong> Min/max validation for numbers</li>
            <li>• <strong>String length:</strong> Min/max length for text fields</li>
            <li>• <strong>Pattern matching:</strong> Regex validation support</li>
            <li>• <strong>Custom validators:</strong> Add your own validation logic</li>
          </ul>
        </div>
      </div>

      <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-6">
        <h3 className="font-semibold">Explore Field Types</h3>
        <p className="mt-2 text-muted-foreground">
          Learn about all 20+ available field types and their properties
        </p>
        <Link
          href="/docs/components/field-types"
          className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
        >
          Field Types Documentation
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
