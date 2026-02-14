import Link from "next/link";

interface CTABannerProps {
  title?: string;
  description?: string;
}

export default function CTABanner({
  title = "Ready to power up your business?",
  description = "Let's discuss how Saint Systems can provide the ICT and electrical solutions your business needs to thrive.",
}: CTABannerProps) {
  return (
    <section className="hero-gradient circuit-pattern">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-electric text-white font-semibold rounded-xl hover:bg-electric-dark transition-colors"
          >
            Contact Us
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
