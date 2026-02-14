"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import SectionHeading from "@/components/SectionHeading";

const faqs = [
  {
    q: "What areas in Malaysia do you serve?",
    a: "We serve clients throughout Peninsular Malaysia, with our primary office in Kuala Lumpur. For projects outside the Klang Valley, we coordinate with local partners to ensure seamless delivery.",
  },
  {
    q: "How quickly can you respond to a service request?",
    a: "For managed service clients, we provide 24/7 monitoring with response times as fast as 15 minutes for critical issues. For new inquiries, we aim to respond within one business day.",
  },
  {
    q: "Do you offer both IT and electrical services together?",
    a: "Absolutely. Our integrated approach means you get a single partner for both ICT and electrical needs, reducing coordination overhead and ensuring seamless project delivery.",
  },
  {
    q: "What is your typical project timeline?",
    a: "Timelines vary by project scope. A managed services engagement can be set up within 2-4 weeks, while large electrical projects may take several months. We provide detailed timelines during the proposal phase.",
  },
  {
    q: "Do you provide ongoing support after project completion?",
    a: "Yes, we offer flexible support and maintenance packages for all our services. From 24/7 managed monitoring to periodic maintenance visits, we tailor support to your needs.",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="hero-gradient circuit-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-white/10 text-sky rounded-full mb-4 border border-white/10">
              Contact
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Let&apos;s <span className="text-amber">Talk</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
              Have questions? Need a quote? We&apos;d love to hear from you.
              Fill out the form below and we&apos;ll get back to you as soon as
              we can.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ CONTACT FORM + INFO ═══ */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-navy mb-6">
                Send Us a Message
              </h2>
              {submitted ? (
                <div className="bg-success/10 border border-success/30 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-slate">
                    Thank you for reaching out. Our team will get back to you
                    within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-navy mb-1.5"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border focus:border-electric focus:ring-2 focus:ring-electric/20 outline-none transition-all text-sm"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-navy mb-1.5"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border focus:border-electric focus:ring-2 focus:ring-electric/20 outline-none transition-all text-sm"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-navy mb-1.5"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 rounded-xl border border-border focus:border-electric focus:ring-2 focus:ring-electric/20 outline-none transition-all text-sm"
                        placeholder="+60 12-345 6789"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-navy mb-1.5"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 rounded-xl border border-border focus:border-electric focus:ring-2 focus:ring-electric/20 outline-none transition-all text-sm"
                        placeholder="Company name"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-navy mb-1.5"
                    >
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 rounded-xl border border-border focus:border-electric focus:ring-2 focus:ring-electric/20 outline-none transition-all text-sm bg-white"
                    >
                      <option value="">Select a service...</option>
                      <option value="managed-security">Managed Security</option>
                      <option value="managed-network">Managed Network</option>
                      <option value="infrastructure">Infrastructure & Servers</option>
                      <option value="consultancy">IT Consultancy</option>
                      <option value="electrical">Electrical Engineering</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-navy mb-1.5"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border focus:border-electric focus:ring-2 focus:ring-electric/20 outline-none transition-all text-sm resize-none"
                      placeholder="Tell us about your project or requirements..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 bg-electric text-white font-semibold rounded-xl hover:bg-electric-dark transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-navy mb-6">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky flex items-center justify-center text-electric shrink-0 mt-0.5">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Office Address</h3>
                    <p className="text-sm text-slate leading-relaxed">
                      Kuala Lumpur, Malaysia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky flex items-center justify-center text-electric shrink-0 mt-0.5">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Email</h3>
                    <a
                      href="mailto:info@saint.my"
                      className="text-sm text-electric hover:text-electric-dark transition-colors"
                    >
                      info@saint.my
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky flex items-center justify-center text-electric shrink-0 mt-0.5">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Phone</h3>
                    <a
                      href="tel:+60312345678"
                      className="text-sm text-electric hover:text-electric-dark transition-colors"
                    >
                      +603-1234 5678
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky flex items-center justify-center text-electric shrink-0 mt-0.5">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Office Hours</h3>
                    <p className="text-sm text-slate">
                      Mon - Fri: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-sm text-slate">
                      Sat - Sun: Closed
                    </p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-4 border-t border-border">
                  <h3 className="font-semibold text-navy mb-3">Follow Us</h3>
                  <div className="flex gap-3">
                    <a
                      href="https://facebook.com/thesaintsystems/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-light flex items-center justify-center text-slate hover:text-electric hover:bg-sky transition-colors"
                      aria-label="Facebook"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a
                      href="https://linkedin.com/company/saintsystems"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-light flex items-center justify-center text-slate hover:text-electric hover:bg-sky transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a
                      href="https://instagram.com/saintsystems/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-light flex items-center justify-center text-slate hover:text-electric hover:bg-sky transition-colors"
                      aria-label="Instagram"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="bg-light py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="FAQ"
            title="Frequently Asked Questions"
            description="Quick answers to common questions about our services."
          />
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-border overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <span className="font-semibold text-navy pr-4">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-slate shrink-0 transition-transform ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4">
                    <p className="text-slate leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
