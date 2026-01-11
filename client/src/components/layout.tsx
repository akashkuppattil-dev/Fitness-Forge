import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show header when scrolling up, hide when scrolling down (after 100px)
      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else if (currentScrollY > 100) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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
    <nav className={`fixed top-0 w-full z-50 bg-black/80 backdrop-blur-lg transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`} data-testid="navbar">
      <div className="w-[95%] mx-auto px-2 sm:px-4 md:px-6 h-16 xs:h-18 sm:h-20 md:h-24 lg:h-24 flex items-center justify-between">
        <a href="#home" className="flex items-center" data-testid="link-logo">
          <span className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black text-white tracking-tighter uppercase transition-colors hover:text-primary">
            FIT <span className="text-primary italic">FAB</span>
          </span>
        </a>

        <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 lg:gap-6">
          <Button
            onClick={scrollToContact}
            className="hidden lg:flex bg-primary text-black font-bold uppercase tracking-widest rounded-none px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-3 text-[10px] md:text-xs lg:text-sm hover:bg-white transition-all transform hover:scale-105"
          >
            Join Us
          </Button>

          {/* Mobile Join Now Button */}
          <Button
            onClick={scrollToContact}
            className="md:hidden bg-primary text-black font-bold uppercase tracking-widest rounded-none px-3 xs:px-4 sm:px-5 py-2 text-[9px] xs:text-[10px] sm:text-xs hover:bg-white transition-all transform hover:scale-105"
          >
            Join
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10 xs:h-11 xs:w-11 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 text-white hover:text-primary transition-colors group" data-testid="button-menu">
                <Menu className="h-6 w-6 xs:h-7 xs:w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 transition-transform group-hover:scale-110" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px] bg-black/95 backdrop-blur-xl border-l border-white/10 flex flex-col justify-center p-6 sm:p-8 md:p-10 lg:p-12">
              <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-14">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-display font-black text-white hover:text-primary transition-all uppercase tracking-tighter leading-none"
                    onClick={() => setIsOpen(false)}
                    data-testid={`link-mobile-${link.label}`}
                  >
                    {link.label}
                  </a>
                ))}

                <div className="mt-8 sm:mt-10 md:mt-12 pt-8 sm:pt-10 md:pt-12 border-t border-white/10">
                  <Button
                    className="w-full px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-base sm:text-lg md:text-xl font-black uppercase tracking-widest rounded-none"
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
