import { Footer } from "@/components/footer";
import { Navbar } from "@/components/layout";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Facility } from "@/components/sections/facility";
import { Hero } from "@/components/sections/hero";
import { Legends } from "@/components/sections/legends";
import { LifeBanner } from "@/components/sections/life-banner";
import { Machines } from "@/components/sections/machines";
import { Services } from "@/components/sections/services";
import { Team } from "@/components/sections/team";
import { WhatsAppBot } from "@/components/whatsapp-bot";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />
      <main>
        <Hero />
        <LifeBanner />
        <About />
        <Services />
        <Facility />
        <Machines />
        <Legends />
        <Team />
        <Contact />
      </main>
      <Footer />
      <WhatsAppBot />
    </div>
  );
}
