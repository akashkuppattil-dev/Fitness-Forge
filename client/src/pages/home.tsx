import { Navbar } from "@/components/layout";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { LifeBanner } from "@/components/sections/life-banner";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Facility } from "@/components/sections/facility";
import { Machines } from "@/components/sections/machines";
import { Legends } from "@/components/sections/legends";
import { Team } from "@/components/sections/team";
import { Contact } from "@/components/sections/contact";
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
