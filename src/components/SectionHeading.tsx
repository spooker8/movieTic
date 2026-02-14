interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  center?: boolean;
}

export default function SectionHeading({
  label,
  title,
  description,
  center = true,
}: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""} mb-12`}>
      {label && (
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-sky text-electric rounded-full mb-4">
          {label}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-slate leading-relaxed">{description}</p>
      )}
    </div>
  );
}
