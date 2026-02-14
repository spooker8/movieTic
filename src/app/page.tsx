import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import StatCounter from "@/components/StatCounter";
import CTABanner from "@/components/CTABanner";

/* ─── Icon components ─── */
function ShieldIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}
function ServerIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    </svg>
  );
}
function NetworkIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
    </svg>
  );
}
function BackupIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
  );
}
function DDoSIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>
  );
}
function ConsultancyIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
    </svg>
  );
}

/* ─── Client logos (placeholder) ─── */
const clients = [
  "TechCorp",
  "MegaBuild",
  "DataFlow",
  "SecureNet",
  "PowerGrid",
  "CloudFirst",
];

export default function HomePage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="hero-gradient circuit-pattern relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-white/10 text-sky rounded-full mb-6 border border-white/10">
              ICT &amp; Electrical Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Powering Malaysian Businesses with{" "}
              <span className="text-amber">Smart Solutions</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8 max-w-xl">
              Your trusted partner for managed IT services, networking,
              infrastructure, and electrical engineering — delivering reliability
              you can build on.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-electric text-white font-semibold rounded-xl hover:bg-electric-dark transition-colors text-lg"
              >
                Get a Quote
              </Link>
              <Link
                href="/services/it"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-colors text-lg"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative gradient blur */}
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-electric/20 rounded-full blur-3xl" />
      </section>

      {/* ═══ TRUST BAR ═══ */}
      <section className="border-b border-border bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <p className="text-center text-sm text-slate font-medium mb-6 uppercase tracking-wider">
            Trusted by leading organizations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {clients.map((name) => (
              <div
                key={name}
                className="text-xl font-bold text-slate-300 hover:text-slate transition-colors cursor-default"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TWO DIVISIONS ═══ */}
      <section className="bg-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="What We Do"
            title="Two Divisions, One Mission"
            description="We combine deep ICT expertise with electrical engineering capabilities to deliver end-to-end solutions for Malaysian businesses."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {/* IT Division */}
            <Link
              href="/services/it"
              className="group relative overflow-hidden rounded-2xl bg-white border border-border p-8 lg:p-10 hover:border-electric/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-sky flex items-center justify-center text-electric mb-6 group-hover:bg-electric group-hover:text-white transition-colors">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-3">IT Services</h3>
              <p className="text-slate leading-relaxed mb-4">
                Managed IT, cybersecurity, networking, cloud infrastructure, and
                dedicated server solutions to keep your business running securely
                and efficiently.
              </p>
              <span className="inline-flex items-center text-electric font-semibold group-hover:gap-2 transition-all">
                Explore IT Services
                <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>

            {/* Electrical Division */}
            <Link
              href="/services/electrical"
              className="group relative overflow-hidden rounded-2xl bg-white border border-border p-8 lg:p-10 hover:border-amber/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-amber/10 flex items-center justify-center text-amber mb-6 group-hover:bg-amber group-hover:text-white transition-colors">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-3">
                Electrical Engineering
              </h3>
              <p className="text-slate leading-relaxed mb-4">
                Expert consultancy, design, project management, and
                implementation for power systems across commercial, residential,
                and industrial sectors.
              </p>
              <span className="inline-flex items-center text-amber-dark font-semibold group-hover:gap-2 transition-all">
                Explore E&amp;E Services
                <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ KEY SERVICES GRID ═══ */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Services"
            title="What We Do Best"
            description="From managed cybersecurity to full infrastructure buildouts, we provide comprehensive ICT solutions tailored to your needs."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={<ShieldIcon />}
              title="Managed Security"
              description="24/7 security monitoring, threat detection, firewall management, and anti-virus solutions to protect your business."
              href="/services/it#managed"
            />
            <ServiceCard
              icon={<ServerIcon />}
              title="Infrastructure"
              description="Dedicated servers, virtualization, and reliable hosting solutions designed for high availability and performance."
              href="/services/it#infrastructure"
            />
            <ServiceCard
              icon={<NetworkIcon />}
              title="Network Solutions"
              description="End-to-end network design, implementation, and managed monitoring to keep your operations connected."
              href="/services/it#managed"
            />
            <ServiceCard
              icon={<BackupIcon />}
              title="Backup & Recovery"
              description="Automated backup systems and disaster recovery planning to ensure your data is always safe and recoverable."
              href="/services/it#infrastructure"
            />
            <ServiceCard
              icon={<DDoSIcon />}
              title="DDoS Mitigation"
              description="Advanced protection against distributed denial-of-service attacks to keep your services online."
              href="/services/it#managed"
            />
            <ServiceCard
              icon={<ConsultancyIcon />}
              title="IT Consultancy"
              description="Strategic IT advisory, software licensing, and technology audits to align your infrastructure with business goals."
              href="/services/it#consultancy"
            />
          </div>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="bg-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Track Record"
            title="Why Malaysian Businesses Trust Us"
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <StatCounter value="10+" label="Years of Experience" />
            <StatCounter value="500+" label="Projects Delivered" />
            <StatCounter value="24/7" label="Support Available" />
            <StatCounter value="99.9%" label="Uptime Guarantee" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-border">
              <div className="w-12 h-12 rounded-xl bg-sky flex items-center justify-center text-electric mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-navy mb-2">
                Local Expertise, Global Standards
              </h3>
              <p className="text-sm text-slate leading-relaxed">
                Based in Malaysia with deep understanding of local regulations
                and business needs, while applying international best practices.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-border">
              <div className="w-12 h-12 rounded-xl bg-sky flex items-center justify-center text-electric mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-navy mb-2">
                End-to-End Solutions
              </h3>
              <p className="text-sm text-slate leading-relaxed">
                One partner for both ICT and electrical needs — reducing
                coordination overhead and ensuring seamless integration.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-border">
              <div className="w-12 h-12 rounded-xl bg-sky flex items-center justify-center text-electric mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-navy mb-2">
                Proactive Monitoring
              </h3>
              <p className="text-sm text-slate leading-relaxed">
                We don&apos;t wait for things to break. Continuous monitoring and
                proactive maintenance keep your systems running at peak
                performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FEATURED PROJECTS ═══ */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Portfolio"
            title="Our Recent Work"
            description="See how we've helped businesses across Malaysia strengthen their IT infrastructure and electrical systems."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                tag: "IT Infrastructure",
                title: "Enterprise Network Overhaul",
                client: "Financial Services Corp",
                desc: "Complete redesign and deployment of a secure, high-availability network serving 500+ employees across 3 offices.",
              },
              {
                tag: "Managed Security",
                title: "24/7 SOC Implementation",
                client: "E-Commerce Platform",
                desc: "Deployed managed security operations center with real-time threat monitoring, reducing incident response time by 80%.",
              },
              {
                tag: "Electrical",
                title: "Commercial Power Systems",
                client: "Mixed-Use Development",
                desc: "Full electrical consultancy and project management for a 25-storey mixed-use development in Kuala Lumpur.",
              },
            ].map((project) => (
              <div
                key={project.title}
                className="group rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-navy to-navy-light flex items-center justify-center">
                  <span className="text-white/20 text-6xl font-bold">
                    {project.title[0]}
                  </span>
                </div>
                <div className="p-6">
                  <span className="inline-block px-2.5 py-1 text-xs font-semibold bg-sky text-electric rounded-full mb-3">
                    {project.tag}
                  </span>
                  <h3 className="text-lg font-semibold text-navy mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate mb-3">{project.client}</p>
                  <p className="text-sm text-slate leading-relaxed">
                    {project.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/projects"
              className="inline-flex items-center px-6 py-3 text-electric font-semibold border-2 border-electric rounded-xl hover:bg-electric hover:text-white transition-colors"
            >
              View All Projects
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <CTABanner />
    </>
  );
}
