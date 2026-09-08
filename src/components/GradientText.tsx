import type { ReactNode } from "react";

const DEFAULT_COLORS = ["#143CFB", "#9BAAFB", "#17256C", "#143CFB"];

export function GradientText({
  children,
  colors = DEFAULT_COLORS,
  speed = 6,
}: {
  children: ReactNode;
  colors?: string[];
  speed?: number;
}) {
  return (
    <span
      className="gradient-text"
      style={{
        backgroundImage: `linear-gradient(90deg, ${colors.join(", ")})`,
        animationDuration: `${speed}s`,
      }}
    >
      {children}
    </span>
  );
}
