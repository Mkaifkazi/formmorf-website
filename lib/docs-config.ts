export interface DocSection {
  title: string;
  items: DocItem[];
}

export interface DocItem {
  title: string;
  href: string;
  description?: string;
}

export const docsConfig: DocSection[] = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Introduction",
        href: "/docs",
        description: "Learn about FormMorf and what it can do",
      },
      {
        title: "Installation",
        href: "/docs/installation",
        description: "Install FormMorf in your project",
      },
      {
        title: "Quick Start",
        href: "/docs/quick-start",
        description: "Build your first form in minutes",
      },
    ],
  },
  {
    title: "Components",
    items: [
      {
        title: "FormBuilder",
        href: "/docs/components/form-builder",
        description: "Drag-and-drop form builder component",
      },
      {
        title: "FormViewer",
        href: "/docs/components/form-viewer",
        description: "Runtime form rendering component",
      },
      {
        title: "Field Types",
        href: "/docs/components/field-types",
        description: "All available form field types",
      },
    ],
  },
  {
    title: "Guides",
    items: [
      {
        title: "Validation",
        href: "/docs/guides/validation",
        description: "Validate form fields with built-in rules",
      },
      {
        title: "Conditional Logic",
        href: "/docs/guides/conditional-logic",
        description: "Show/hide fields dynamically",
      },
      {
        title: "Styling & Theming",
        href: "/docs/guides/styling",
        description: "Customize form appearance",
      },
    ],
  },
  {
    title: "API Reference",
    items: [
      {
        title: "FormSchema",
        href: "/docs/api/form-schema",
        description: "Form schema structure and types",
      },
    ],
  },
  {
    title: "Examples",
    items: [
      {
        title: "Basic Form",
        href: "/docs/examples/basic-form",
        description: "Simple contact form example",
      },
    ],
  },
];
