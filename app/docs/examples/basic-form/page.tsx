import { Metadata } from "next";
import { CodeBlock } from "@/components/ui/CodeBlock";

export const metadata: Metadata = {
  title: "Basic Form Example - FormMorf Documentation",
  description: "Simple contact form example using FormMorf",
};

export default function BasicFormExample() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Basic Contact Form
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A simple contact form with name, email, and message fields.
        </p>
      </div>

      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Complete Example
        </h2>
        <div className="mt-4">
          <CodeBlock
            code={`import { useState } from 'react';
import { FormBuilder, FormViewer, FormSchema } from '@formmorf/builder';
import '@formmorf/builder/dist/style.css';

// Define the contact form schema
const contactFormSchema: FormSchema = {
  id: 'contact-form',
  title: 'Contact Us',
  description: 'We would love to hear from you',
  fields: [
    {
      id: '1',
      type: 'text',
      name: 'fullName',
      label: 'Full Name',
      placeholder: 'John Doe',
      required: true,
      validation: {
        minLength: 2,
        customMessage: 'Please enter your full name'
      }
    },
    {
      id: '2',
      type: 'email',
      name: 'email',
      label: 'Email Address',
      placeholder: 'john@example.com',
      required: true,
      helpText: 'We will never share your email'
    },
    {
      id: '3',
      type: 'phone',
      name: 'phone',
      label: 'Phone Number',
      placeholder: '+1 (555) 000-0000',
      required: false
    },
    {
      id: '4',
      type: 'select',
      name: 'subject',
      label: 'Subject',
      required: true,
      options: [
        { label: 'General Inquiry', value: 'general' },
        { label: 'Technical Support', value: 'support' },
        { label: 'Billing Question', value: 'billing' },
        { label: 'Partnership', value: 'partnership' }
      ]
    },
    {
      id: '5',
      type: 'textarea',
      name: 'message',
      label: 'Message',
      placeholder: 'Tell us how we can help you...',
      required: true,
      validation: {
        minLength: 10,
        maxLength: 500,
        customMessage: 'Message must be between 10 and 500 characters'
      }
    }
  ]
};

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (data: Record<string, any>) => {
    console.log('Form data:', data);

    // Send to backend
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setSubmitted(true);
        // Show success message or redirect
        alert('Thank you for contacting us!');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to submit form');
    }
  };

  return (
    <div className="container mx-auto max-w-2xl py-8">
      <h1 className="mb-8 text-3xl font-bold">Contact Us</h1>

      {submitted ? (
        <div className="rounded-lg border bg-green-50 p-6">
          <h2 className="text-xl font-semibold text-green-800">
            Thank You!
          </h2>
          <p className="mt-2 text-green-700">
            We have received your message and will get back to you soon.
          </p>
        </div>
      ) : (
        <FormViewer
          schema={contactFormSchema}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

export default ContactPage;`}
            language="tsx"
          />
        </div>
      </div>

      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Schema Breakdown
        </h2>
        <p className="mt-3 text-muted-foreground">
          Let's break down the form schema:
        </p>

        <div className="mt-4 space-y-4">
          <div className="rounded-lg border bg-background p-4">
            <h3 className="font-semibold">Full Name Field</h3>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>• Type: <code>text</code></li>
              <li>• Required with minimum 2 characters</li>
              <li>• Custom validation message</li>
            </ul>
          </div>

          <div className="rounded-lg border bg-background p-4">
            <h3 className="font-semibold">Email Field</h3>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>• Type: <code>email</code></li>
              <li>• Automatic email format validation</li>
              <li>• Help text shown below field</li>
            </ul>
          </div>

          <div className="rounded-lg border bg-background p-4">
            <h3 className="font-semibold">Phone Field</h3>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>• Type: <code>phone</code></li>
              <li>• Optional field (required: false)</li>
              <li>• Formatted phone input</li>
            </ul>
          </div>

          <div className="rounded-lg border bg-background p-4">
            <h3 className="font-semibold">Subject Field</h3>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>• Type: <code>select</code></li>
              <li>• Dropdown with predefined options</li>
              <li>• Required selection</li>
            </ul>
          </div>

          <div className="rounded-lg border bg-background p-4">
            <h3 className="font-semibold">Message Field</h3>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>• Type: <code>textarea</code></li>
              <li>• Min/max length validation (10-500 chars)</li>
              <li>• Multi-line text input</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Backend Integration
        </h2>
        <p className="mt-3 text-muted-foreground">
          Example API endpoint for handling form submissions:
        </p>
        <div className="mt-4">
          <CodeBlock
            code={`// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { fullName, email, phone, subject, message } = req.body;

  // Validate data
  if (!fullName || !email || !subject || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // Send email notification
    await sendEmail({
      to: 'contact@example.com',
      subject: \`Contact Form: \${subject}\`,
      html: \`
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> \${fullName}</p>
        <p><strong>Email:</strong> \${email}</p>
        <p><strong>Phone:</strong> \${phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> \${subject}</p>
        <p><strong>Message:</strong></p>
        <p>\${message}</p>
      \`
    });

    // Save to database (optional)
    await db.contacts.create({
      data: { fullName, email, phone, subject, message }
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ error: 'Failed to process submission' });
  }
}`}
            language="tsx"
          />
        </div>
      </div>

      <div className="rounded-lg border bg-muted/50 p-6">
        <h3 className="font-semibold">💡 Best Practices</h3>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li>• Always validate on both client and server side</li>
          <li>• Show clear success/error messages to users</li>
          <li>• Add loading states during submission</li>
          <li>• Consider adding reCAPTCHA for spam protection</li>
          <li>• Send confirmation emails to users</li>
        </ul>
      </div>
    </div>
  );
}
