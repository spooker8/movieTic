import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Saint Systems Sdn Bhd — a Malaysian provider of ICT and electrical engineering services, committed to powering businesses with smart solutions.",
};

const values = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Integrity",
    desc: "We operate with transparency and honesty in every engagement, building lasting trust with our clients and partners.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Innovation",
    desc: "We stay at the forefront of technology, continuously adopting new tools and methodologies to deliver better outcomes.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "Reliability",
    desc: "We deliver on our commitments with consistency. When we say 99.9% uptime, we mean it — backed by proactive monitoring.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Partnership",
    desc: "We treat every client relationship as a long-term partnership, investing in understanding your business to deliver the right solutions.",
  },
];

const team = [
  { name: "Ahmad Razak", role: "Managing Director", initials: "AR" },
  { name: "Sarah Lim", role: "Head of IT Services", initials: "SL" },
  { name: "Daniel Tan", role: "Chief Engineer (E&E)", initials: "DT" },
  { name: "Nurul Amin", role: "Operations Manager", initials: "NA" },
];

export default function AboutPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="hero-gradient circuit-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-white/10 text-sky rounded-full mb-4 border border-white/10">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Having Fun Building Businesses We&apos;re{" "}
              <span className="text-amber">Proud Of</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
              Saint Systems Sdn Bhd is a Malaysian provider of ICT and electrical
              engineering services, driven by a passion for building businesses
              without boundaries.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ STORY ═══ */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading label="Our Story" title="From Vision to Reality" center={false} />
              <div className="space-y-4 text-slate leading-relaxed">
                <p>
                  Founded in Malaysia, Saint Systems grew from a small IT
                  services team into a full-spectrum technology and engineering
                  company. Our founders saw an opportunity to bridge the gap
                  between ICT and electrical engineering — two disciplines that
                  are increasingly intertwined in the modern business landscape.
                </p>
                <p>
                  Today, we serve clients across diverse industries, from
                  financial institutions requiring enterprise-grade security to
                  property developers needing comprehensive electrical
                  solutions. Our dual expertise means clients get a single,
                  trusted partner for their technology and infrastructure needs.
                </p>
                <p>
                  We believe in building businesses we&apos;re proud of — not
                  just for ourselves, but for the communities and organizations
                  we serve.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-navy to-navy-light rounded-2xl p-12 flex items-center justify-center min-h-[360px]">
              <div className="text-center">
                <div className="text-6xl font-bold text-white/20 mb-2">10+</div>
                <div className="text-white/60 text-lg">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MISSION & VISION ═══ */}
      <section className="bg-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 lg:p-10 border border-border">
              <div className="w-12 h-12 rounded-xl bg-sky flex items-center justify-center text-electric mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Our Vision</h3>
              <p className="text-slate leading-relaxed">
                To be Malaysia&apos;s most trusted provider of integrated ICT and
                electrical solutions — empowering businesses to operate
                securely, efficiently, and without limits.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 lg:p-10 border border-border">
              <div className="w-12 h-12 rounded-xl bg-amber/10 flex items-center justify-center text-amber mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Our Mission</h3>
              <p className="text-slate leading-relaxed">
                To deliver reliable, innovative, and cost-effective technology
                and engineering services that help Malaysian businesses grow,
                compete, and succeed in an increasingly connected world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ VALUES ═══ */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Core Values"
            title="What Drives Us"
            description="These principles guide every decision we make and every project we deliver."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="p-6 rounded-2xl border border-border hover:border-electric/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-sky flex items-center justify-center text-electric mb-4">
                  {v.icon}
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">{v.title}</h3>
                <p className="text-sm text-slate leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TEAM ═══ */}
      <section className="bg-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Leadership"
            title="Meet Our Team"
            description="Experienced professionals committed to delivering exceptional results for every client."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl p-6 border border-border text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-electric to-navy mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {member.initials}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-navy">{member.name}</h3>
                <p className="text-sm text-slate mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <CTABanner
        title="Want to work with us?"
        description="We'd love to learn about your business and how we can help. Get in touch with our team today."
      />
    </>
  );
}
