"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { SectionBadge } from "@/components/SectionBadge";
import { PillButton } from "@/components/PillButton";

const pillars = [
  {
    title: "Safety First",
    text: "Every steel load is secured to prevent shifting, coil roll, or edge damage in transit — because steel cargo demands handling precision, not guesswork.",
  },
  {
    title: "Transparent Ops",
    text: "Live dispatch updates, LR documentation, and milestone tracking keep your procurement and site teams aligned from Manali pickup to delivery sign-off.",
  },
  {
    title: "Local Coverage",
    text: "Chennai, Thiruvallur, and Kanchipuram — local steel transport and logistics with vetted partners.",
  },
];

const leaders = [
  {
    photo: "/leadership/arumugam.png",
    name: "M. Arumugam",
    designation: "FOUNDER & CHAIRPERSON",
    bio: "With over four decades in the steel trade, Arumugam built the foundation this group stands on. His deep understanding of steel supply chains across Tamil Nadu shapes how PMG Transports approaches every movement — with reliability and relationships at the core.",
    alt: "M. Arumugam, Founder and Chairperson, PMG Transports",
  },
  {
    photo: "/leadership/jagan.png",
    name: "A. Jagan",
    designation: "MANAGING DIRECTOR",
    bio: "Jagan leads PMG Transports' operations and growth, bringing modern logistics practice to traditional steel transport. He focuses on dispatch discipline, fleet expansion, and building systems that keep customers informed at every stage of the move.",
    alt: "A. Jagan, Managing Director, PMG Transports",
  },
] as const;

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      ease: "easeOut",
    },
  }),
};

function TeamIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" aria-hidden>
      <path
        d="M16 11a4 4 0 10-8 0 4 4 0 008 0zM4 20a8 8 0 0116 0M20 20v-2a4 4 0 00-3-3.87"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LeadershipIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" aria-hidden>
      <path
        d="M12 12a4 4 0 100-8 4 4 0 000 8zM6 20v-1a6 6 0 0112 0v1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <main className="bg-pmg-bg pt-36 sm:pt-28 md:pt-[72px]">
      <section className="border-b border-pmg-border py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionBadge icon={<TeamIcon />}>About PMG</SectionBadge>
          <h1 className="font-heading mt-6 text-4xl font-extrabold uppercase tracking-tight text-pmg-text sm:text-5xl md:text-6xl">
            Built to Move Steel
          </h1>
          <div className="mt-10 max-w-3xl space-y-6 text-lg leading-relaxed text-pmg-muted">
            <p>
              PMG Transports is a Chennai-based steel transport and logistics company
              operating from the Sathangadu Iron &amp; Steel Market in Manali.
              Established in 2026, we are the transport arm of a group with over four
              decades of experience in the steel trade — giving us an operational
              understanding of steel cargo that few new transport companies can match.
            </p>
            <p>
              Our fleet of 11 vehicles — ranging from Bolero pickups to 24-ton Taurus
              trailers — moves steel coils, TMT bars, sheets, plates, and pipes across
              Chennai, Thiruvallur, and Kanchipuram. We handle mill-to-fabricator
              movement with the dispatch discipline that time-sensitive steel supply
              chains demand.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <div className="w-full rounded-xl border border-pmg-border bg-white px-8 py-6 text-center shadow-[0_4px_24px_rgba(0,0,0,0.06)] sm:w-auto sm:text-left">
              <p className="font-heading text-5xl font-black text-pmg-red">11+</p>
              <p className="mt-1 text-sm font-bold uppercase tracking-wider text-pmg-text">
                Fleet Strength
              </p>
            </div>
            <div className="w-full rounded-xl border border-pmg-border bg-white px-8 py-6 text-center shadow-[0_4px_24px_rgba(0,0,0,0.06)] sm:w-auto sm:text-left">
              <p className="font-heading text-5xl font-black text-pmg-red">3</p>
              <p className="mt-1 text-sm font-bold uppercase tracking-wider text-pmg-text">
                Districts Served
              </p>
            </div>
          </div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="bg-pmg-surface py-16 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-extrabold uppercase tracking-tight text-pmg-text sm:text-4xl">
            What We Stand For
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title}>
                <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-pmg-red">
                  {p.title}
                </h3>
                <p className="mt-3 text-pmg-muted">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <section className="py-16 sm:py-24" style={{ backgroundColor: "#F5F5F5" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionBadge icon={<LeadershipIcon />}>Leadership</SectionBadge>
          <h2 className="font-heading mt-6 text-3xl font-extrabold uppercase tracking-tight text-[#111111] sm:text-4xl">
            The People Behind PMG
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {leaders.map((leader, i) => (
              <motion.article
                key={leader.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={cardVariants}
                className="overflow-hidden rounded-xl border border-[#E0E0E0] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
                style={{ borderTop: "3px solid #CC1A1A" }}
              >
                <div className="p-6">
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg">
                    <Image
                      src={leader.photo}
                      alt={leader.alt}
                      width={400}
                      height={533}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3
                    className="mt-5 font-bold text-[#111111]"
                    style={{ fontSize: "20px" }}
                  >
                    {leader.name}
                  </h3>
                  <p
                    className="mt-1 font-semibold uppercase text-[#CC1A1A]"
                    style={{ fontSize: "13px", letterSpacing: "1px" }}
                  >
                    {leader.designation}
                  </p>
                  <p
                    className="mt-4 text-[#666666]"
                    style={{ fontSize: "15px", lineHeight: 1.7 }}
                  >
                    {leader.bio}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-pmg-border bg-pmg-bg py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-stretch justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <p className="text-center text-lg font-medium text-pmg-text sm:text-left">
            See how we plan and execute every steel delivery.
          </p>
          <PillButton href="/#process" variant="outline" className="w-full justify-center sm:w-auto">
            View Our Process
          </PillButton>
        </div>
      </section>
    </main>
  );
}
