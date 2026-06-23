import Image from "next/image";
import Link from "next/link";

const quick = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/#process", label: "Process" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t-[3px] border-pmg-red bg-[#111111]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-14 sm:flex-row sm:items-start sm:justify-between sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0">
          <Image
            src="/pmg-transports-logo.png?v=3"
            alt="PMG Transports"
            width={260}
            height={140}
            className="h-16 w-auto max-w-[min(100%,260px)] object-contain sm:h-[72px]"
            style={{ width: "auto" }}
            unoptimized
          />
        </Link>
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {quick.map((q) => (
            <Link
              key={q.href}
              href={q.href}
              className="text-sm text-white/70 transition-colors hover:text-white"
            >
              {q.label}
            </Link>
          ))}
        </nav>
        <p className="max-w-xs text-center text-xs leading-relaxed text-white/55 sm:text-right">
          © 2026 PMG Transport Pvt. Ltd. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
