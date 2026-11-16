import { Architecture } from "@/components/architecture/Architecture";
import { Collection } from "@/components/collection/Collection";
import { Contact } from "@/components/contact/Contact";
import { Faq } from "@/components/faq/Faq";
import { Hero } from "@/components/hero/Hero";
import { Lifestyle } from "@/components/lifestyle/Lifestyle";
import { Philosophy } from "@/components/philosophy/Philosophy";
import { Process } from "@/components/process/Process";
import { Stats } from "@/components/stats/Stats";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Stats />
      <Philosophy />
      <Collection />
      <Architecture />
      <Process />
      <Lifestyle />
      <Faq />
      <Contact />
    </main>
  );
}
