import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "IT Services",
  description:
    "Managed IT services, cybersecurity, networking, cloud infrastructure, and consultancy solutions for Malaysian businesses.",
};

const managedServices = [
  {
    title: "Managed Security",
    desc: "Comprehensive cybersecurity monitoring and management including SIEM, vulnerability assessments, and incident response. We keep watch so you can focus on business.",
    features: ["24/7 threat monitoring", "Vulnerability scanning", "Incident response", "Security audits"],
  },
  {
    title: "Managed Firewall",
    desc: "Enterprise-grade firewall deployment, configuration, and ongoing management. Our team ensures your perimeter stays secure against evolving threats.",
    features: ["Rule management", "Policy optimization", "Traffic analysis", "Compliance reporting"],
  },
  {
    title: "Managed Network",
    desc: "End-to-end network design, deployment, and monitoring. We ensure your network performs reliably with minimal downtime and maximum throughput.",
    features: ["Network design", "Performance monitoring", "Bandwidth management", "Uptime SLAs"],
  },
  {
    title: "Anti-virus & Anti-spam",
    desc: "Multi-layered protection against malware, ransomware, phishing, and spam across all endpoints and email systems.",
    features: ["Endpoint protection", "Email filtering", "Ransomware defense", "Automated updates"],
  },
  {
    title: "IDS/IPS",
    desc: "Intrusion detection and prevention systems that identify and block malicious activity before it impacts your operations.",
    features: ["Real-time detection", "Automated blocking", "Alert management", "Forensic logging"],
  },
  {
    title: "DDoS Mitigation",
    desc: "Advanced protection against distributed denial-of-service attacks ensuring your services remain online during attack events.",
    features: ["Traffic scrubbing", "Rate limiting", "Geographic filtering", "Attack analytics"],
  },
];

const infrastructure = [
  {
    title: "Dedicated Servers",
    desc: "High-performance dedicated server solutions with guaranteed resources, full root access, and managed support options.",
    features: ["Custom configurations", "Full root access", "SLA-backed uptime", "Managed options"],
  },
  {
    title: "Virtualization",
    desc: "Server virtualization solutions that maximize hardware utilization, improve scalability, and simplify management.",
    features: ["VMware / Hyper-V", "Resource optimization", "Live migration", "Cost reduction"],
  },
  {
    title: "Disaster Recovery",
    desc: "Business continuity planning and disaster recovery solutions that ensure you can recover quickly from any disruption.",
    features: ["DR planning", "Automated failover", "Data replication", "Recovery testing"],
  },
  {
    title: "Managed Backup",
    desc: "Automated, encrypted backup solutions with flexible retention policies and verified restore procedures.",
    features: ["Automated scheduling", "Encrypted storage", "Restore verification", "Offsite copies"],
  },
];

export default function ITServicesPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="hero-gradient circuit-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-white/10 text-sky rounded-full mb-4 border border-white/10">
              IT Services
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Enterprise IT Solutions{" "}
              <span className="text-amber">Built for Reliability</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
              From managed cybersecurity to cloud infrastructure, we provide
              comprehensive ICT solutions that keep your business secure,
              connected, and performing at its best.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ OVERVIEW ═══ */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
                title: "Managed Services",
                desc: "24/7 monitoring, management, and support for your security, network, and IT infrastructure.",
                anchor: "#managed",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                  </svg>
                ),
                title: "Infrastructure",
                desc: "Servers, virtualization, backup, and disaster recovery — the backbone of your operations.",
                anchor: "#infrastructure",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                  </svg>
                ),
                title: "Consultancy",
                desc: "Strategic IT advisory, licensing, and technology audits to optimize your investments.",
                anchor: "#consultancy",
              },
            ].map((item) => (
              <a
                key={item.title}
                href={item.anchor}
                className="group flex flex-col p-6 rounded-2xl border border-border bg-white hover:border-electric/30 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-sky flex items-center justify-center text-electric mb-4 group-hover:bg-electric group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">{item.title}</h3>
                <p className="text-sm text-slate leading-relaxed">{item.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MANAGED SERVICES ═══ */}
      <section id="managed" className="bg-light py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Managed Services"
            title="Security & Network Management"
            description="Round-the-clock monitoring and management of your critical IT systems. We handle the complexity so you can focus on growth."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {managedServices.map((svc) => (
              <div
                key={svc.title}
                className="bg-white rounded-2xl p-6 border border-border hover:border-electric/30 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-navy mb-3">{svc.title}</h3>
                <p className="text-sm text-slate leading-relaxed mb-4">{svc.desc}</p>
                <ul className="space-y-2">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate">
                      <svg className="w-4 h-4 text-electric shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INFRASTRUCTURE ═══ */}
      <section id="infrastructure" className="bg-white py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Infrastructure"
            title="Servers, Storage & Recovery"
            description="Robust infrastructure solutions designed for high availability, performance, and business continuity."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {infrastructure.map((svc) => (
              <div
                key={svc.title}
                className="bg-light rounded-2xl p-8 border border-border hover:border-electric/30 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-navy mb-3">{svc.title}</h3>
                <p className="text-slate leading-relaxed mb-4">{svc.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {svc.features.map((f) => (
                    <span
                      key={f}
                      className="px-3 py-1 text-xs font-medium bg-sky text-electric rounded-full"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONSULTANCY ═══ */}
      <section id="consultancy" className="bg-light py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Consultancy"
            title="Strategic IT Advisory"
            description="Expert guidance to help you make informed technology decisions that drive real business value."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "IT Strategy & Advisory",
                desc: "Comprehensive technology assessments and roadmaps aligned with your business objectives. We help you prioritize investments for maximum impact.",
              },
              {
                title: "Software Licensing",
                desc: "Optimize your software spend with expert licensing advice. We help you navigate complex licensing models and ensure full compliance.",
              },
              {
                title: "Technology Audits",
                desc: "Thorough evaluation of your existing IT environment to identify risks, inefficiencies, and opportunities for improvement.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 border border-border"
              >
                <h3 className="text-lg font-semibold text-navy mb-3">{item.title}</h3>
                <p className="text-sm text-slate leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <CTABanner
        title="Need help with your IT infrastructure?"
        description="Let our experts assess your current setup and recommend the right solutions for your business."
      />
    </>
  );
}
