import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "FormMorf - React Form Builder Library",
  description:
    "Enterprise React form builder with drag-and-drop functionality, responsive previews, and comprehensive validation. Built with Material-UI and TypeScript.",
  keywords: [
    "react",
    "form builder",
    "drag and drop",
    "typescript",
    "material-ui",
    "form library",
    "validation",
  ],
  authors: [{ name: "FormMorf Contributors" }],
  openGraph: {
    title: "FormMorf - React Form Builder Library",
    description:
      "Build dynamic forms with drag-and-drop. Enterprise-ready React form builder.",
    type: "website",
    url: "https://formmorf.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "FormMorf - React Form Builder Library",
    description:
      "Build dynamic forms with drag-and-drop. Enterprise-ready React form builder.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          storageKey="formmorf-theme"
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
