import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { AboutStrip } from "@/components/AboutStrip";
import { Process } from "@/components/Process";
import { CTABand } from "@/components/CTABand";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Services />
      <WhyChooseUs />
      <AboutStrip />
      <Process />
      <CTABand />
      <Contact />
    </main>
  );
}
