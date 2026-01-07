import { Link } from "wouter";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Training" },
    { href: "#team", label: "Coaches" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent" data-testid="navbar">
      <div className="container mx-auto px-4 h-20 lg:h-24 flex items-center justify-between">
        <a href="#home" className="flex items-center" data-testid="link-logo">
          <span className="text-2xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-tighter uppercase transition-colors hover:text-primary">
            FIT <span className="text-primary italic">FAB</span>
          </span>
        </a>

        <div className="flex items-center gap-4 lg:gap-6">
          <Button
            onClick={scrollToContact}
            className="hidden lg:flex bg-primary text-black font-bold uppercase tracking-widest rounded-none px-6 py-3 text-xs hover:bg-white transition-all transform hover:scale-105"
          >
            Join Us
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-12 w-12 lg:h-16 lg:w-16 text-white hover:text-primary transition-colors group" data-testid="button-menu">
                <Menu className="h-8 w-8 lg:h-12 lg:w-12 transition-transform group-hover:scale-110" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px] bg-black/95 backdrop-blur-xl border-l border-white/10 flex flex-col justify-center p-12">
              <div className="flex flex-col gap-10">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-4xl sm:text-5xl font-display font-black text-white hover:text-primary transition-all uppercase tracking-tighter leading-none"
                    onClick={() => setIsOpen(false)}
                    data-testid={`link-mobile-${link.label}`}
                  >
                    {link.label}
                  </a>
                ))}

                <div className="mt-8 pt-8 border-t border-white/10">
                  <Button
                    className="w-full sm:w-auto px-10 py-6 text-lg font-black uppercase tracking-widest rounded-none"
                    data-testid="button-join-mobile"
                    onClick={() => { setIsOpen(false); scrollToContact(); }}
                  >
                    Join The Studio
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
