import Link from "next/link";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

export default function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block p-6 bg-white rounded-2xl border border-border hover:border-electric/30 hover:shadow-lg hover:shadow-electric/5 transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-xl bg-sky flex items-center justify-center text-electric mb-4 group-hover:bg-electric group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-navy mb-2">{title}</h3>
      <p className="text-sm text-slate leading-relaxed mb-4">{description}</p>
      <span className="inline-flex items-center text-sm font-medium text-electric group-hover:gap-2 transition-all">
        Learn more
        <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </span>
    </Link>
  );
}
