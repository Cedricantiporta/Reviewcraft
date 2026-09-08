export function Logo({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="32" height="32" rx="9" fill="#17256C" />
      <text
        x="17"
        y="22"
        textAnchor="middle"
        fontFamily="-apple-system, BlinkMacSystemFont, Inter, sans-serif"
        fontSize="13"
        fontWeight="700"
        letterSpacing="0.3"
        fill="#143CFB"
      >
        RC
      </text>
    </svg>
  );
}
