import { Navbar, Footer } from "@/components/layout";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Facility } from "@/components/sections/facility";
import { Team } from "@/components/sections/team";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Facility />
        <Team />
      </main>
      <Footer />
    </div>
  );
}
