"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { docsConfig } from "@/lib/docs-config";
import { ChevronDown, ChevronRight, Menu } from "lucide-react";
import { useState } from "react";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [openSections, setOpenSections] = useState<string[]>(
    docsConfig.map((section) => section.title)
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSection = (title: string) => {
    setOpenSections((prev) =>
      prev.includes(title)
        ? prev.filter((t) => t !== title)
        : [...prev, title]
    );
  };

  return (
    <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10 py-4 md:py-8 px-4">
      {/* Mobile Menu Toggle Button */}
      <div className="md:hidden mb-4">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex w-full items-center justify-between rounded-lg border bg-background px-4 py-3 text-sm font-semibold shadow-sm hover:bg-muted transition-colors"
        >
          <div className="flex items-center gap-2">
            <Menu className="h-4 w-4" />
            <span>Documentation Menu</span>
          </div>
          <ChevronDown
            className={`h-4 w-4 transition-transform ${
              mobileMenuOpen ? "" : "-rotate-90"
            }`}
          />
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`${
        mobileMenuOpen ? 'block' : 'hidden'
      } md:block md:sticky md:top-20 md:h-[calc(100vh-5rem)] md:overflow-y-auto md:border-r mb-8 md:mb-0`}>
        <div className="py-6 pr-6 lg:py-8">
          <nav className="space-y-4">
            {docsConfig.map((section) => {
              const isOpen = openSections.includes(section.title);
              const hasActiveItem = section.items.some(
                (item) => pathname === item.href
              );

              return (
                <div key={section.title}>
                  <button
                    onClick={() => toggleSection(section.title)}
                    className="flex w-full items-center justify-between rounded-md px-2 py-1.5 text-sm font-semibold hover:bg-muted transition-colors"
                  >
                    <span>{section.title}</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        isOpen ? "" : "-rotate-90"
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <ul className="mt-2 space-y-1 ml-2">
                      {section.items.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`group flex items-center rounded-md px-3 py-2 text-sm transition-colors hover:bg-muted ${
                                isActive
                                  ? "bg-muted text-foreground font-medium"
                                  : "text-muted-foreground"
                              }`}
                            >
                              <ChevronRight
                                className={`mr-2 h-3 w-3 transition-opacity ${
                                  isActive ? "opacity-100" : "opacity-0 group-hover:opacity-50"
                                }`}
                              />
                              {item.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <main className="relative py-4 md:py-6 lg:py-8">
        <div className="mx-auto w-full min-w-0">
          <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:scroll-mt-20 prose-pre:max-w-full prose-pre:overflow-x-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
