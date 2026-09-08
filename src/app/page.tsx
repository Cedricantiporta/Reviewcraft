import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Problem } from "@/components/Problem";
import { Process } from "@/components/Process";
import { Pricing } from "@/components/Pricing";
import { Benefits } from "@/components/Benefits";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Problem />
        <Process />
        <Pricing />
        <Benefits />
        <Testimonials />
        <Faq />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
