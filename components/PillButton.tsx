import Link from "next/link";
import type { ReactNode } from "react";

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type PillButtonProps = {
  children: ReactNode;
  href?: string;
  variant: "primary" | "outline" | "onDark";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

export function PillButton({
  children,
  href,
  variant,
  className = "",
  type = "button",
  onClick,
}: PillButtonProps) {
  const base =
    "group inline-flex items-center gap-3 rounded-full py-2 pl-2 pr-7 text-sm font-semibold tracking-wide transition-all duration-300 ease-in-out hover:scale-[1.02] active:scale-[0.98] sm:text-base sm:pr-8";

  const styles =
    variant === "primary"
      ? "bg-[#CC1A1A] text-white shadow-lg shadow-black/15 hover:bg-[#1A5FCC] active:bg-[#1A5FCC]"
      : variant === "onDark"
        ? "bg-white text-pmg-text shadow-lg shadow-black/20"
        : "border-2 border-[#111111] bg-transparent text-[#111111] shadow-sm hover:border-[#1A5FCC] hover:bg-[#1A5FCC] hover:text-white active:border-[#1A5FCC] active:bg-[#1A5FCC] active:text-white";

  const circle =
    variant === "primary" || variant === "outline"
      ? "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#111111]"
      : variant === "onDark"
        ? "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black/5 text-pmg-text"
        : "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pmg-surface text-pmg-text";

  const inner = (
    <>
      <span className={circle}>
        <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </span>
      <span>{children}</span>
    </>
  );

  const cls = `${base} ${styles} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={type} className={cls} onClick={onClick}>
      {inner}
    </button>
  );
}
