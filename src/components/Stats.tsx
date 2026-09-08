const STATS = [
  { value: "15,000+", label: "Reviews Removed" },
  { value: "600+", label: "Sellers Protected" },
  { value: "Always-On", label: "Monitoring" },
];

export function Stats() {
  return (
    <section className="bg-white pt-10 pb-[100px]">
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-10 px-6 text-center sm:grid-cols-3 sm:px-10">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <div className="text-[40px] font-semibold tracking-tight text-ink">{stat.value}</div>
            <div className="mt-1.5 text-sm text-muted">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
