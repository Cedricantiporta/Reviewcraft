export function CheckIcon({ color = "#A4C3AC", size = 16 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" className="shrink-0">
      <path
        d="M2 7.2L5.3 10.5L12 3.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
