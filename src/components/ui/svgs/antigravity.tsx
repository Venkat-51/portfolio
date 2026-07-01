import type { SVGProps } from "react";

const Antigravity = (props: SVGProps<SVGSVGElement>) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    {...props}
  >
    <title>Antigravity</title>
    <defs>
      <linearGradient id="antigravity-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8B5CF6" />
        <stop offset="100%" stopColor="#06B6D4" />
      </linearGradient>
    </defs>
    <path
      fill="url(#antigravity-grad)"
      d="M12 0L1.5 15h6.5l4-6 4 6h6.5z M12 17c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"
    />
  </svg>
);

export { Antigravity };
