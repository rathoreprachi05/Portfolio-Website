import { Hero } from "@/components/home/Hero";
import { AboutBento } from "@/components/home/AboutBento";
import { Showcase } from "@/components/home/Showcase";
import { CyberLab } from "@/components/home/CyberLab";
import { Timeline } from "@/components/home/Timeline";
import { ContactFooter } from "@/components/home/ContactFooter";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden selection:bg-[#E86565]/30 selection:text-[#0F172A] dark:selection:text-[#FAF8F5]">
      <Hero />
      <AboutBento />
      <Showcase />
      <CyberLab />
      <Timeline />
      <ContactFooter />
    </main>
  );
}
