import type { Metadata } from "next";
import Link from "next/link";
import { PmgTruckAnimation } from "@/components/PmgTruckAnimation";
import { PillButton } from "@/components/PillButton";

export const metadata: Metadata = {
  title: "Page Not Found | PMG Transport",
};

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col bg-pmg-bg pt-36 sm:pt-28 md:pt-[72px]">
      <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto w-72 md:w-96">
          <PmgTruckAnimation className="h-auto w-full" />
        </div>

        <h1 className="font-heading mt-10 text-[clamp(72px,18vw,120px)] font-black uppercase leading-none tracking-tight text-pmg-text">
          40<span className="text-pmg-red">4</span>
        </h1>

        <h2 className="font-heading mt-6 text-2xl font-extrabold uppercase tracking-tight text-pmg-text sm:text-3xl md:text-4xl">
          Looks Like This Route Doesn&apos;t Exist
        </h2>

        <p className="mt-4 max-w-lg text-base leading-relaxed text-pmg-muted sm:text-lg">
          The page you&apos;re looking for isn&apos;t on our delivery map. But
          our trucks are still running — let&apos;s get you back on track.
        </p>

        <div className="mt-10 flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <PillButton href="/" variant="primary" className="w-full justify-center sm:w-auto">
            Back to Home
          </PillButton>
          <PillButton
            href="/contact"
            variant="outline"
            className="w-full justify-center sm:w-auto"
          >
            Get a Quote
          </PillButton>
        </div>

        <Link
          href="/#calculator"
          className="mt-8 text-sm font-medium text-pmg-muted transition-colors hover:text-pmg-red"
        >
          Or check truck fares →
        </Link>
      </div>
    </main>
  );
}
