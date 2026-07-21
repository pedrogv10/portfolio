import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { ProjectCase } from "@/components/ProjectCase";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main id="main">
      <Hero />
      <About />
      <Experience />
      <ProjectCase />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
