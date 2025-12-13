import { Link } from "wouter";
import { Menu, Instagram, Facebook, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logoImage from "@assets/fitfab_1765661344893.jpg";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#services", label: "Services" },
    { href: "#facility", label: "Facility" },
    { href: "#team", label: "Our Team" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10" data-testid="navbar">
      <div className="container mx-auto px-4 h-24 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-3" data-testid="link-logo">
            <img src={logoImage} alt="Fit Fab Logo" className="h-12 w-12 rounded-full border border-primary/20" />
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-display font-bold text-white tracking-tight leading-none">
                FIT FAB
              </span>
              <span className="text-[10px] md:text-xs text-primary font-bold tracking-[0.2em] uppercase">
                Family Fitness Studio
              </span>
            </div>
          </a>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest"
              data-testid={`link-desktop-${link.label}`}
            >
              {link.label}
            </a>
          ))}
          <Button variant="default" className="font-bold uppercase" data-testid="button-join-desktop">
            Join Now
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" data-testid="button-menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-card border-l border-white/10">
            <div className="flex flex-col gap-8 mt-8">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xl font-display font-bold hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                  data-testid={`link-mobile-${link.label}`}
                >
                  {link.label}
                </a>
              ))}
              <Button className="w-full font-bold uppercase" data-testid="button-join-mobile">
                Join Now
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-card border-t border-white/10 pt-16 pb-8" id="contact" data-testid="footer">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={logoImage} alt="Fit Fab Logo" className="h-10 w-10 rounded-full" />
              <span className="text-xl font-display font-bold text-white">FIT FAB</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Fit Fab Family Fitness Studio is a premium, family-focused fitness center dedicated to disciplined training, measurable results, and long-term health.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary uppercase tracking-wider">Contact Us</h3>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1 shrink-0" />
                <span>Feroke, Kozhikode, Kerala</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+919497306050" className="hover:text-white transition-colors">+91 94973 06050</a>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 flex items-center justify-center text-primary shrink-0 font-bold">@</div>
                <a href="mailto:fitfabfitnessstudio@gmail.com" className="hover:text-white transition-colors">fitfabfitnessstudio@gmail.com</a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-primary uppercase tracking-wider">Location</h3>
            <div className="aspect-video w-full rounded-sm overflow-hidden border border-white/10 bg-black/50">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.829871790484!2d75.83401737586676!3d11.199342988975344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65b6e6f6f6f6f%3A0x6f6f6f6f6f6f6f6f!2sFeroke%2C%20Kozhikode!5e0!3m2!1sen!2sin!4v1715580000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mt-4 flex gap-4">
              <a href="https://www.instagram.com/fitfab.fitness/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-black transition-colors" data-testid="link-instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-black transition-colors" data-testid="link-facebook">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Fit Fab Family Fitness Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
