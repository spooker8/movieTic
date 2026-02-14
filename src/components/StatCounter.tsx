interface StatCounterProps {
  value: string;
  label: string;
}

export default function StatCounter({ value, label }: StatCounterProps) {
  return (
    <div className="text-center">
      <div className="text-4xl sm:text-5xl font-bold text-electric mb-2">{value}</div>
      <div className="text-sm text-slate font-medium">{label}</div>
    </div>
  );
}
