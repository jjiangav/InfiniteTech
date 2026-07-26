import { business } from "@/lib/business";

export function Mark({ className = "", size = 32 }) {
  const height = Math.round((size * 92) / 120);
  return (
    <svg
      width={size}
      height={height}
      viewBox="0 0 120 92"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect x="20" y="7" width="80" height="56" rx="4" stroke="#EEE32C" strokeWidth="7" />
      <circle cx="60" cy="11.5" r="2.4" fill="#1A77DE" />
      <rect x="6" y="70" width="108" height="12" rx="3" fill="#1A77DE" />
      <rect x="50" y="66" width="20" height="5" rx="2.5" fill="#0D47A1" />
    </svg>
  );
}

export default function Logo({ className = "", markSize = 30, dark = false }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Mark size={markSize} />
      <span
        className={`text-lg font-extrabold tracking-tight ${dark ? "text-white" : "text-ink"}`}
      >
        {business.name}
      </span>
    </span>
  );
}
