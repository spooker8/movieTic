import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Electrical Engineering",
  description:
    "Expert electrical engineering consultancy, design, project management, and implementation for commercial, residential, and industrial projects in Malaysia.",
};

const sectors = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    title: "Commercial",
    desc: "Office buildings, retail spaces, shopping complexes, and commercial developments.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
      </svg>
    ),
    title: "Residential",
    desc: "Condominiums, housing developments, luxury homes, and residential towers.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-5.384 3.085A.5.5 0 015.25 17.8V6.2a.5.5 0 01.786-.458l5.384 3.085m0 0l5.384 3.085a.5.5 0 010 .866l-5.384 3.085m0-7.036V3.375a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v3.548m-3 0h3m-3 7.036v3.548a.75.75 0 00.75.75h1.5a.75.75 0 00.75-.75v-3.548m-3 0h3" />
      </svg>
    ),
    title: "Industrial",
    desc: "Factories, warehouses, data centers, and heavy industrial facilities.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Consult",
    desc: "We listen to your requirements, assess the project scope, and understand your specific needs and constraints.",
  },
  {
    step: "02",
    title: "Design",
    desc: "Our engineers create detailed electrical designs compliant with Malaysian standards and regulations (MS IEC, JKR, BOMBA).",
  },
  {
    step: "03",
    title: "Implement",
    desc: "Professional installation and commissioning by certified electricians, with rigorous quality control at every stage.",
  },
  {
    step: "04",
    title: "Support",
    desc: "Ongoing maintenance, testing, and support to ensure your electrical systems perform reliably throughout their lifecycle.",
  },
];

export default function ElectricalPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy-light to-amber-dark">
        <div className="circuit-pattern absolute inset-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-amber/20 text-amber rounded-full mb-4 border border-amber/30">
              Electrical Engineering
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Electrical Solutions{" "}
              <span className="text-amber">You Can Trust</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
              Expert consultancy, design, project management, and implementation
              for power systems across commercial, residential, and industrial
              sectors in Malaysia.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES OVERVIEW ═══ */}
      <section id="consultancy" className="bg-white py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Services"
            title="Full-Spectrum Electrical Engineering"
            description="From initial consultancy through to final commissioning, we provide end-to-end electrical engineering services for projects of any scale."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Electrical Consultancy",
                desc: "Expert advisory services for electrical system planning, compliance assessment, and energy optimization. We help you make informed decisions before committing to a design.",
                features: ["Load analysis", "Feasibility studies", "Energy audits", "Compliance review"],
              },
              {
                title: "System Design",
                desc: "Detailed electrical system design including single-line diagrams, panel schedules, cable sizing, and earthing systems — all compliant with MS IEC standards.",
                features: ["Power distribution", "Lighting design", "Earthing & protection", "LV/MV systems"],
              },
              {
                title: "Project Management",
                desc: "End-to-end project coordination ensuring your electrical works are delivered on time, within budget, and to the highest quality standards.",
                features: ["Scheduling & planning", "Contractor coordination", "Quality assurance", "Budget control"],
              },
              {
                title: "Installation & Commissioning",
                desc: "Professional installation by certified electricians with comprehensive testing and commissioning to ensure everything works as designed.",
                features: ["Certified installers", "Testing & inspection", "Commissioning reports", "Handover support"],
              },
            ].map((svc) => (
              <div
                key={svc.title}
                className="bg-light rounded-2xl p-8 border border-border hover:border-amber/30 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-navy mb-3">{svc.title}</h3>
                <p className="text-slate leading-relaxed mb-4">{svc.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {svc.features.map((f) => (
                    <span
                      key={f}
                      className="px-3 py-1 text-xs font-medium bg-amber/10 text-amber-dark rounded-full"
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

      {/* ═══ SECTORS ═══ */}
      <section className="bg-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Sectors"
            title="Industries We Serve"
            description="Our electrical engineering expertise spans across multiple sectors, each with its own unique requirements and standards."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {sectors.map((sector) => (
              <div
                key={sector.title}
                className="bg-white rounded-2xl p-8 border border-border text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-amber/10 flex items-center justify-center text-amber mx-auto mb-6">
                  {sector.icon}
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">{sector.title}</h3>
                <p className="text-slate leading-relaxed">{sector.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section id="projects" className="bg-white py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Process"
            title="How We Work"
            description="A proven four-step approach that ensures quality outcomes on every project."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={step.step} className="relative">
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-1/2 z-0" />
                )}
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber to-amber-dark flex items-center justify-center text-white text-2xl font-bold mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-2">{step.title}</h3>
                  <p className="text-sm text-slate leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STANDARDS ═══ */}
      <section id="implementation" className="bg-light py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              label="Compliance"
              title="Standards & Certifications"
              description="All our work complies with Malaysian and international standards, ensuring safety, reliability, and regulatory compliance."
            />
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "MS IEC 60364",
                "JKR Standards",
                "BOMBA Compliance",
                "Suruhanjaya Tenaga",
                "IEC 61439",
                "CIDB Registered",
              ].map((std) => (
                <span
                  key={std}
                  className="px-4 py-2 text-sm font-medium bg-white text-navy border border-border rounded-xl"
                >
                  {std}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <CTABanner
        title="Planning an electrical project?"
        description="Get expert consultancy and a detailed proposal from our engineering team. We'll help you plan, design, and deliver."
      />
    </>
  );
}
