export function Logo({ size = 30 }: { size?: number }) {
  return (
    <span
      className="font-bold tracking-tight select-none"
      style={{ fontSize: size * 0.73 }}
    >
      <span className="text-ink">R</span>
      <span className="text-blue">C</span>
    </span>
  );
}
