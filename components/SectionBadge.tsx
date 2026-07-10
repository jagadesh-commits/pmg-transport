import type { ReactNode } from "react";

type SectionBadgeProps = {
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function SectionBadge({
  icon,
  children,
  className = "",
}: SectionBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-pmg-border bg-pmg-badge px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-pmg-text backdrop-blur-sm sm:text-sm ${className}`}
    >
      {icon && (
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-pmg-red shadow-sm">
          {icon}
        </span>
      )}
      {children}
    </span>
  );
}
