import { Link } from "wouter";
import { Menu, X, Instagram, Facebook, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

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
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-display font-bold text-primary italic tracking-tighter" data-testid="link-logo">
            PREMIUM FITNESS
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
    <footer className="bg-card border-t border-white/10 py-12" id="contact" data-testid="footer">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Premium Fitness Centre</h3>
            <p className="text-muted-foreground">
              Calicut's premier destination for fitness enthusiasts. 
              Train hard, stay disciplined.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Calicut, Kerala</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 123 456 7890</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-black transition-colors" data-testid="link-instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-black transition-colors" data-testid="link-facebook">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Premium Fitness Centre. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
