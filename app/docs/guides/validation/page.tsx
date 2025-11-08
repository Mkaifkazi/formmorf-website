import { Metadata } from "next";
import { CodeBlock } from "@/components/ui/CodeBlock";

export const metadata: Metadata = {
  title: "Validation - FormMorf Documentation",
  description: "Learn how to validate form fields with built-in and custom validation rules",
};

export default function ValidationPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Form Validation
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Ensure data quality with comprehensive validation rules, real-time feedback, and custom error messages.
        </p>
      </div>

      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Overview
        </h2>
        <p className="mt-3 text-muted-foreground">
          FormMorf provides built-in validation for all field types with real-time feedback and customizable error messages.
        </p>
        <div className="mt-4 rounded-lg border bg-background p-4">
          <h3 className="font-semibold">Validation Features</h3>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            <li>• Required field validation</li>
            <li>• Length constraints (min/max)</li>
            <li>• Numeric range validation</li>
            <li>• Pattern matching with regex</li>
            <li>• Custom error messages</li>
            <li>• Real-time validation feedback</li>
            <li>• Type-specific validation (email, URL, phone)</li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Required Fields
        </h2>
        <p className="mt-3 text-muted-foreground">
          Mark fields as required to prevent form submission without values.
        </p>
        <div className="mt-4">
          <CodeBlock
            code={`{
  id: '1',
  type: 'text',
  name: 'username',
  label: 'Username',
  required: true  // Field must have a value
}`}
            language="tsx"
          />
        </div>
      </div>

      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Length Validation
        </h2>
        <p className="mt-3 text-muted-foreground">
          Validate the length of text inputs with minimum and maximum constraints.
        </p>
        <div className="mt-4">
          <CodeBlock
            code={`{
  id: '1',
  type: 'text',
  name: 'username',
  label: 'Username',
  required: true,
  validation: {
    minLength: 3,
    maxLength: 20,
    customMessage: 'Username must be between 3 and 20 characters'
  }
},
{
  id: '2',
  type: 'textarea',
  name: 'bio',
  label: 'Bio',
  validation: {
    maxLength: 500,
    customMessage: 'Bio cannot exceed 500 characters'
  }
}`}
            language="tsx"
          />
        </div>
      </div>

      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Numeric Validation
        </h2>
        <p className="mt-3 text-muted-foreground">
          Set minimum and maximum values for numeric fields.
        </p>
        <div className="mt-4">
          <CodeBlock
            code={`{
  id: '1',
  type: 'number',
  name: 'age',
  label: 'Age',
  required: true,
  validation: {
    min: 18,
    max: 120,
    customMessage: 'Age must be between 18 and 120'
  }
},
{
  id: '2',
  type: 'number',
  name: 'quantity',
  label: 'Quantity',
  validation: {
    min: 1,
    customMessage: 'Quantity must be at least 1'
  }
}`}
            language="tsx"
          />
        </div>
      </div>

      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Pattern Validation (Regex)
        </h2>
        <p className="mt-3 text-muted-foreground">
          Use regular expressions for custom validation patterns.
        </p>
        <div className="mt-4">
          <CodeBlock
            code={`// Alphanumeric username
{
  id: '1',
  type: 'text',
  name: 'username',
  label: 'Username',
  validation: {
    pattern: '^[a-zA-Z0-9_]+$',
    customMessage: 'Username can only contain letters, numbers, and underscores'
  }
}

// US Phone number
{
  id: '2',
  type: 'text',
  name: 'phone',
  label: 'Phone Number',
  validation: {
    pattern: '^\\+?1?\\d{10}$',
    customMessage: 'Please enter a valid 10-digit US phone number'
  }
}

// Strong password
{
  id: '3',
  type: 'password',
  name: 'password',
  label: 'Password',
  validation: {
    minLength: 8,
    pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]',
    customMessage: 'Password must contain uppercase, lowercase, number, and special character'
  }
}

// ZIP code
{
  id: '4',
  type: 'text',
  name: 'zipCode',
  label: 'ZIP Code',
  validation: {
    pattern: '^\\d{5}(-\\d{4})?$',
    customMessage: 'Please enter a valid ZIP code (e.g., 12345 or 12345-6789)'
  }
}`}
            language="tsx"
          />
        </div>
      </div>

      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Email Validation
        </h2>
        <p className="mt-3 text-muted-foreground">
          Email fields have automatic format validation built-in.
        </p>
        <div className="mt-4">
          <CodeBlock
            code={`{
  id: '1',
  type: 'email',
  name: 'email',
  label: 'Email Address',
  required: true,
  // Email validation is automatic for type: 'email'
  validation: {
    customMessage: 'Please enter a valid email address'
  }
}`}
            language="tsx"
          />
        </div>
      </div>

      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          URL Validation
        </h2>
        <p className="mt-3 text-muted-foreground">
          URL fields validate web addresses automatically.
        </p>
        <div className="mt-4">
          <CodeBlock
            code={`{
  id: '1',
  type: 'url',
  name: 'website',
  label: 'Website URL',
  placeholder: 'https://example.com',
  validation: {
    customMessage: 'Please enter a valid URL starting with http:// or https://'
  }
}`}
            language="tsx"
          />
        </div>
      </div>

      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          File Upload Validation
        </h2>
        <p className="mt-3 text-muted-foreground">
          Validate file uploads by type, size, and quantity.
        </p>
        <div className="mt-4">
          <CodeBlock
            code={`{
  id: '1',
  type: 'file',
  name: 'resume',
  label: 'Upload Resume',
  accept: '.pdf,.doc,.docx',
  maxSize: 5,        // 5 MB
  maxFiles: 1,
  validation: {
    required: true,
    customMessage: 'Please upload your resume (PDF or Word, max 5MB)'
  }
}

{
  id: '2',
  type: 'image',
  name: 'photos',
  label: 'Upload Photos',
  accept: 'image/*',
  multiple: true,
  maxSize: 10,       // 10 MB per file
  maxFiles: 5,
  validation: {
    customMessage: 'Upload up to 5 images (max 10MB each)'
  }
}`}
            language="tsx"
          />
        </div>
      </div>

      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Custom Error Messages
        </h2>
        <p className="mt-3 text-muted-foreground">
          Provide user-friendly error messages for better UX.
        </p>
        <div className="mt-4">
          <CodeBlock
            code={`{
  id: '1',
  type: 'text',
  name: 'couponCode',
  label: 'Coupon Code',
  validation: {
    pattern: '^[A-Z0-9]{6,10}$',
    customMessage: 'Coupon code must be 6-10 uppercase letters or numbers'
  }
}

{
  id: '2',
  type: 'number',
  name: 'discount',
  label: 'Discount Percentage',
  validation: {
    min: 0,
    max: 100,
    customMessage: 'Discount must be between 0% and 100%'
  }
}`}
            language="tsx"
          />
        </div>
      </div>

      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Complete Validation Example
        </h2>
        <p className="mt-3 text-muted-foreground">
          A registration form with comprehensive validation.
        </p>
        <div className="mt-4">
          <CodeBlock
            code={`const registrationSchema: FormSchema = {
  id: 'user-registration',
  title: 'Create Account',
  description: 'Sign up for a new account',
  fields: [
    {
      id: '1',
      type: 'text',
      name: 'firstName',
      label: 'First Name',
      required: true,
      validation: {
        minLength: 2,
        maxLength: 50,
        pattern: '^[a-zA-Z\\s-]+$',
        customMessage: 'First name must be 2-50 letters only'
      }
    },
    {
      id: '2',
      type: 'text',
      name: 'lastName',
      label: 'Last Name',
      required: true,
      validation: {
        minLength: 2,
        maxLength: 50,
        pattern: '^[a-zA-Z\\s-]+$',
        customMessage: 'Last name must be 2-50 letters only'
      }
    },
    {
      id: '3',
      type: 'email',
      name: 'email',
      label: 'Email Address',
      required: true,
      validation: {
        customMessage: 'Please provide a valid email address'
      }
    },
    {
      id: '4',
      type: 'text',
      name: 'username',
      label: 'Username',
      required: true,
      validation: {
        minLength: 3,
        maxLength: 20,
        pattern: '^[a-zA-Z0-9_]+$',
        customMessage: 'Username: 3-20 characters, letters/numbers/underscores only'
      }
    },
    {
      id: '5',
      type: 'password',
      name: 'password',
      label: 'Password',
      required: true,
      validation: {
        minLength: 8,
        pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])',
        customMessage: 'Password: min 8 chars, must include uppercase, lowercase, number, special char'
      }
    },
    {
      id: '6',
      type: 'phone',
      name: 'phone',
      label: 'Phone Number',
      validation: {
        pattern: '^\\+?1?\\d{10,14}$',
        customMessage: 'Enter a valid phone number (10-14 digits)'
      }
    },
    {
      id: '7',
      type: 'number',
      name: 'age',
      label: 'Age',
      required: true,
      validation: {
        min: 13,
        max: 120,
        customMessage: 'You must be at least 13 years old'
      }
    },
    {
      id: '8',
      type: 'url',
      name: 'website',
      label: 'Website (Optional)',
      validation: {
        customMessage: 'Please enter a valid URL'
      }
    },
    {
      id: '9',
      type: 'textarea',
      name: 'bio',
      label: 'Bio',
      validation: {
        maxLength: 500,
        customMessage: 'Bio must not exceed 500 characters'
      }
    },
    {
      id: '10',
      type: 'checkbox',
      name: 'terms',
      label: 'I agree to the Terms and Conditions',
      required: true,
      validation: {
        customMessage: 'You must accept the terms to continue'
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
          Validation Feedback
        </h2>
        <p className="mt-3 text-muted-foreground">
          FormMorf provides real-time validation feedback as users interact with fields.
        </p>
        <div className="mt-4 rounded-lg border bg-background p-4">
          <h3 className="font-semibold mb-3">Validation Timing</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• <strong>On blur</strong> - Validation runs when user leaves a field</li>
            <li>• <strong>On change</strong> - Real-time validation for immediate feedback</li>
            <li>• <strong>On submit</strong> - Full form validation before submission</li>
            <li>• <strong>Visual indicators</strong> - Error states with red borders and icons</li>
            <li>• <strong>Error messages</strong> - Clear messages below fields</li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Handling Validation in Code
        </h2>
        <p className="mt-3 text-muted-foreground">
          Access validation errors in your submit handler.
        </p>
        <div className="mt-4">
          <CodeBlock
            code={`import { useState } from 'react';
import { FormViewer } from '@formmorf/builder';

function RegistrationForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (data: Record<string, any>) => {
    // Data is already validated by FormMorf
    console.log('Valid form data:', data);

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        const errorData = await response.json();

        // Handle server-side validation errors
        if (errorData.fieldErrors) {
          setErrors(errorData.fieldErrors);
        }
      } else {
        // Success - redirect or show message
        window.location.href = '/welcome';
      }
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  return (
    <FormViewer
      schema={registrationSchema}
      onSubmit={handleSubmit}
    />
  );
}`}
            language="tsx"
          />
        </div>
      </div>

      <div className="rounded-lg border bg-muted/50 p-6">
        <h3 className="font-semibold">💡 Validation Best Practices</h3>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li>• Provide clear, helpful error messages that guide users</li>
          <li>• Use client-side validation for immediate feedback</li>
          <li>• Always validate on the server as well for security</li>
          <li>• Keep validation rules consistent with backend requirements</li>
          <li>• Test regex patterns thoroughly before deployment</li>
          <li>• Consider accessibility when displaying error messages</li>
          <li>• Don't make optional fields unnecessarily restrictive</li>
        </ul>
      </div>
    </div>
  );
}
