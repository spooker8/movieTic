import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore our portfolio of IT infrastructure, cybersecurity, and electrical engineering projects delivered across Malaysia.",
};

const projects = [
  {
    tag: "IT Infrastructure",
    tagColor: "bg-sky text-electric",
    title: "Enterprise Network Overhaul",
    client: "Financial Services Corp",
    desc: "Complete redesign and deployment of a secure, high-availability network infrastructure serving 500+ employees across 3 office locations in Kuala Lumpur.",
    results: ["99.99% uptime achieved", "40% latency reduction", "Full PCI-DSS compliance"],
  },
  {
    tag: "Managed Security",
    tagColor: "bg-sky text-electric",
    title: "24/7 SOC Implementation",
    client: "E-Commerce Platform",
    desc: "Deployed a fully managed security operations center with real-time threat monitoring, automated incident response, and comprehensive reporting.",
    results: ["80% faster incident response", "Zero data breaches", "Automated threat detection"],
  },
  {
    tag: "Electrical",
    tagColor: "bg-amber/10 text-amber-dark",
    title: "Commercial Power Systems",
    client: "Mixed-Use Development",
    desc: "Full electrical consultancy, design, and project management for a 25-storey mixed-use development including retail, office, and residential components.",
    results: ["On-time delivery", "15% energy savings", "Full MS IEC compliance"],
  },
  {
    tag: "Cloud & Servers",
    tagColor: "bg-sky text-electric",
    title: "Cloud Migration Program",
    client: "Healthcare Provider",
    desc: "Migrated critical healthcare applications and patient data systems from on-premises servers to a hybrid cloud architecture with full disaster recovery.",
    results: ["60% cost reduction", "3x performance improvement", "HIPAA-aligned security"],
  },
  {
    tag: "Electrical",
    tagColor: "bg-amber/10 text-amber-dark",
    title: "Industrial Power Upgrade",
    client: "Manufacturing Plant",
    desc: "Complete electrical system upgrade for a manufacturing facility, including new MV switchgear, power factor correction, and automated monitoring systems.",
    results: ["30% energy savings", "Zero unplanned outages", "Suruhanjaya Tenaga compliant"],
  },
  {
    tag: "Network",
    tagColor: "bg-sky text-electric",
    title: "Campus-Wide Network",
    client: "Education Institution",
    desc: "Designed and deployed a high-speed campus network connecting 12 buildings with centralized management, guest WiFi, and integrated security.",
    results: ["10Gbps backbone", "5,000+ concurrent users", "Unified management console"],
  },
];

export default function ProjectsPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="hero-gradient circuit-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-white/10 text-sky rounded-full mb-4 border border-white/10">
              Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Projects That Speak{" "}
              <span className="text-amber">For Themselves</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
              Real results from real projects. Explore how we&apos;ve helped
              Malaysian businesses strengthen their IT infrastructure and
              electrical systems.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ PROJECT GRID ═══ */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Case Studies"
            title="Featured Projects"
            description="A selection of projects that demonstrate our expertise across IT and electrical engineering disciplines."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                {/* Placeholder image area */}
                <div className="h-48 bg-gradient-to-br from-navy to-navy-light flex items-center justify-center relative overflow-hidden">
                  <span className="text-white/10 text-8xl font-bold absolute">
                    {project.title[0]}
                  </span>
                  <span className={`absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded-full ${project.tagColor}`}>
                    {project.tag}
                  </span>
                </div>
                <div className="p-6 lg:p-8">
                  <h3 className="text-xl font-semibold text-navy mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-electric font-medium mb-3">
                    {project.client}
                  </p>
                  <p className="text-slate leading-relaxed mb-4">
                    {project.desc}
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="text-xs font-semibold text-navy uppercase tracking-wider mb-2">
                      Key Results
                    </p>
                    <ul className="space-y-1.5">
                      {project.results.map((r) => (
                        <li key={r} className="flex items-center gap-2 text-sm text-slate">
                          <svg className="w-4 h-4 text-success shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CLIENTS ═══ */}
      <section className="bg-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Clients"
            title="Trusted By Industry Leaders"
            description="We are proud to have worked with organizations across diverse sectors in Malaysia."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {["TechCorp", "MegaBuild", "DataFlow", "SecureNet", "PowerGrid", "CloudFirst", "FinanceHub", "MediCare", "EduNet", "RetailMax", "LogiTech", "GreenPower"].map(
              (name) => (
                <div
                  key={name}
                  className="bg-white rounded-xl p-6 border border-border flex items-center justify-center hover:border-electric/30 transition-colors"
                >
                  <span className="text-lg font-bold text-slate-300 hover:text-slate transition-colors">
                    {name}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <CTABanner
        title="Have a project in mind?"
        description="We'd love to hear about your requirements. Let's discuss how we can deliver results for your business."
      />
    </>
  );
}
