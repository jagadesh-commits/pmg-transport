import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { AboutStrip } from "@/components/AboutStrip";
import { Process } from "@/components/Process";
import { CTABand } from "@/components/CTABand";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <AboutStrip />
      <Process />
      <CTABand />
      <FAQ />
      <Contact />
    </main>
  );
}
