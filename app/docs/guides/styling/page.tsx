import { Metadata } from "next";
import { CodeBlock } from "@/components/ui/CodeBlock";

export const metadata: Metadata = {
  title: "Styling & Theming - FormMorf Documentation",
  description: "Customize the appearance of your forms with Material-UI theming and custom styles",
};

export default function StylingPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Styling & Theming
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Customize the appearance of your forms with Material-UI theming, custom CSS, and field-level styling.
        </p>
      </div>

      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Default Styles
        </h2>
        <p className="mt-3 text-muted-foreground">
          FormMorf comes with default Material-UI styling that works out of the box.
        </p>
        <div className="mt-4">
          <CodeBlock
            code={`import { FormViewer } from '@formmorf/builder';
import '@formmorf/builder/dist/style.css';

function MyForm() {
  return (
    <FormViewer
      schema={mySchema}
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
          Material-UI Theme Provider
        </h2>
        <p className="mt-3 text-muted-foreground">
          Wrap your application with Material-UI's ThemeProvider to customize the global theme.
        </p>
        <div className="mt-4">
          <CodeBlock
            code={`import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormViewer } from '@formmorf/builder';
import '@formmorf/builder/dist/style.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
    },
    secondary: {
      main: '#dc004e',
      light: '#f73378',
      dark: '#9a0036',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
      styleOverrides: {
        root: {
          marginBottom: '1rem',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
        },
      },
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <FormViewer schema={mySchema} onSubmit={handleSubmit} />
    </ThemeProvider>
  );
}`}
            language="tsx"
          />
        </div>
      </div>

      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Dark Mode Support
        </h2>
        <p className="mt-3 text-muted-foreground">
          Enable dark mode using Material-UI's palette mode.
        </p>
        <div className="mt-4">
          <CodeBlock
            code={`import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? '#90caf9' : '#1976d2',
      },
      background: {
        default: darkMode ? '#121212' : '#f5f5f5',
        paper: darkMode ? '#1e1e1e' : '#ffffff',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle Dark Mode
      </button>
      <FormViewer schema={mySchema} onSubmit={handleSubmit} />
    </ThemeProvider>
  );
}`}
            language="tsx"
          />
        </div>
      </div>

      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Field-Level Styling
        </h2>
        <p className="mt-3 text-muted-foreground">
          Apply custom styles to individual fields using the <code>style</code> property.
        </p>

        <div className="mt-4 space-y-4">
          <div className="rounded-lg border bg-background p-4">
            <h3 className="font-semibold mb-3">Field Width</h3>
            <CodeBlock
              code={`{
  id: '1',
  type: 'text',
  name: 'firstName',
  label: 'First Name',
  style: {
    width: '50%'  // 25%, 50%, 75%, or 100%
  }
}`}
              language="tsx"
            />
          </div>

          <div className="rounded-lg border bg-background p-4">
            <h3 className="font-semibold mb-3">Text Alignment</h3>
            <CodeBlock
              code={`{
  id: '2',
  type: 'header',
  content: 'Personal Information',
  style: {
    textAlign: 'center'  // 'left', 'center', or 'right'
  }
}`}
              language="tsx"
            />
          </div>

          <div className="rounded-lg border bg-background p-4">
            <h3 className="font-semibold mb-3">Custom CSS Classes</h3>
            <CodeBlock
              code={`{
  id: '3',
  type: 'text',
  name: 'email',
  label: 'Email Address',
  style: {
    className: 'my-custom-field highlighted'
  }
}`}
              language="tsx"
            />
          </div>
        </div>
      </div>

      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Form Layout Examples
        </h2>
        <p className="mt-3 text-muted-foreground">
          Create different form layouts using field widths.
        </p>

        <div className="mt-4 space-y-6">
          <div>
            <h3 className="font-semibold mb-3">Two-Column Layout</h3>
            <CodeBlock
              code={`fields: [
  {
    id: '1',
    type: 'text',
    name: 'firstName',
    label: 'First Name',
    style: { width: '50%' }
  },
  {
    id: '2',
    type: 'text',
    name: 'lastName',
    label: 'Last Name',
    style: { width: '50%' }
  },
  {
    id: '3',
    type: 'email',
    name: 'email',
    label: 'Email',
    style: { width: '100%' }
  }
]`}
              language="tsx"
            />
          </div>

          <div>
            <h3 className="font-semibold mb-3">Three-Column Layout</h3>
            <CodeBlock
              code={`fields: [
  {
    id: '1',
    type: 'select',
    name: 'country',
    label: 'Country',
    style: { width: '50%' }
  },
  {
    id: '2',
    type: 'text',
    name: 'state',
    label: 'State',
    style: { width: '25%' }
  },
  {
    id: '3',
    type: 'text',
    name: 'zip',
    label: 'ZIP Code',
    style: { width: '25%' }
  }
]`}
              language="tsx"
            />
          </div>
        </div>
      </div>

      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Custom CSS Styling
        </h2>
        <p className="mt-3 text-muted-foreground">
          Override default styles with custom CSS.
        </p>
        <div className="mt-4">
          <CodeBlock
            code={`/* styles.css */

/* Custom field styling */
.my-custom-field input {
  border-radius: 12px;
  padding: 12px 16px;
  font-size: 16px;
}

.my-custom-field:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* Highlighted fields */
.highlighted {
  background-color: #fff8dc;
  border: 2px solid #ffd700;
}

/* Custom button styles */
.form-submit-button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 12px 32px;
  border-radius: 8px;
  font-weight: 600;
}

/* Custom form container */
.custom-form-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}`}
            language="css"
          />
        </div>
      </div>

      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Form Settings
        </h2>
        <p className="mt-3 text-muted-foreground">
          Customize form appearance through schema settings.
        </p>
        <div className="mt-4">
          <CodeBlock
            code={`const schema: FormSchema = {
  id: 'styled-form',
  title: 'Contact Form',
  description: 'Get in touch with us',
  fields: [...],
  settings: {
    submitButtonText: 'Send Message',
    cancelButtonText: 'Clear Form',
    showLabels: true,
    labelPosition: 'top',  // 'top', 'left', or 'right'
    theme: 'light',         // 'light' or 'dark'
    clearOnSubmit: false
  }
};`}
            language="tsx"
          />
        </div>
      </div>

      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Complete Styled Example
        </h2>
        <p className="mt-3 text-muted-foreground">
          A fully customized form with theme provider and custom styles.
        </p>
        <div className="mt-4">
          <CodeBlock
            code={`import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormViewer } from '@formmorf/builder';
import '@formmorf/builder/dist/style.css';
import './custom-form.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#667eea',
    },
    secondary: {
      main: '#764ba2',
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            '&:hover fieldset': {
              borderColor: '#667eea',
            },
          },
        },
      },
    },
  },
});

const schema = {
  id: 'styled-contact',
  title: 'Get In Touch',
  description: 'We would love to hear from you',
  fields: [
    {
      id: '1',
      type: 'text',
      name: 'name',
      label: 'Your Name',
      style: { width: '100%', className: 'animated-field' }
    },
    {
      id: '2',
      type: 'email',
      name: 'email',
      label: 'Email Address',
      style: { width: '50%' }
    },
    {
      id: '3',
      type: 'phone',
      name: 'phone',
      label: 'Phone Number',
      style: { width: '50%' }
    },
    {
      id: '4',
      type: 'textarea',
      name: 'message',
      label: 'Your Message',
      style: { width: '100%' }
    }
  ],
  settings: {
    submitButtonText: 'Send Message',
    labelPosition: 'top'
  }
};

export default function StyledForm() {
  const handleSubmit = (data: any) => {
    console.log('Form submitted:', data);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="custom-form-container">
        <FormViewer schema={schema} onSubmit={handleSubmit} />
      </div>
    </ThemeProvider>
  );
}`}
            language="tsx"
          />
        </div>
      </div>

      <div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Responsive Design
        </h2>
        <p className="mt-3 text-muted-foreground">
          FormMorf forms are responsive by default. Use CSS media queries for custom responsive behavior.
        </p>
        <div className="mt-4">
          <CodeBlock
            code={`/* Responsive styles */
@media (max-width: 768px) {
  /* Stack fields on mobile */
  .form-field-50 {
    width: 100% !important;
  }

  .custom-form-container {
    padding: 1rem;
  }

  /* Adjust button size */
  .form-submit-button {
    width: 100%;
    padding: 16px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  /* Tablet adjustments */
  .custom-form-container {
    max-width: 700px;
  }
}`}
            language="css"
          />
        </div>
      </div>

      <div className="rounded-lg border bg-muted/50 p-6">
        <h3 className="font-semibold">💡 Styling Tips</h3>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li>• Use Material-UI's ThemeProvider for consistent global styling</li>
          <li>• Field widths automatically adjust to container size</li>
          <li>• Combine field-level styles with global CSS for flexibility</li>
          <li>• Test forms on mobile devices for responsive behavior</li>
          <li>• Use CSS variables for easy theme customization</li>
          <li>• Keep accessibility in mind when customizing colors and contrast</li>
        </ul>
      </div>
    </div>
  );
}
