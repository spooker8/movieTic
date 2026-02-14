"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "About", href: "/about" },
  {
    label: "IT Services",
    href: "/services/it",
    children: [
      { label: "Managed Services", href: "/services/it#managed" },
      { label: "Infrastructure", href: "/services/it#infrastructure" },
      { label: "Consultancy", href: "/services/it#consultancy" },
    ],
  },
  {
    label: "Electrical",
    href: "/services/electrical",
    children: [
      { label: "Consultancy & Design", href: "/services/electrical#consultancy" },
      { label: "Project Management", href: "/services/electrical#projects" },
      { label: "Implementation", href: "/services/electrical#implementation" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-electric flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold text-navy">
              Saint<span className="text-electric">Systems</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-electric rounded-lg transition-colors inline-flex items-center gap-1"
                >
                  {link.label}
                  {link.children && (
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                {link.children && openDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-0 w-56 bg-white rounded-xl shadow-lg border border-border py-2">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-slate-600 hover:text-electric hover:bg-sky/50 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center px-5 py-2.5 bg-electric text-white text-sm font-semibold rounded-xl hover:bg-electric-dark transition-colors"
            >
              Get a Quote
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-light transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-electric hover:bg-sky/50 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="ml-4 space-y-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-2 text-sm text-slate-500 hover:text-electric transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block mx-4 mt-3 py-3 bg-electric text-white text-center font-semibold rounded-xl hover:bg-electric-dark transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
