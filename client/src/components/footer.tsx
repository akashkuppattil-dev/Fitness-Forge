import { Instagram, Facebook, Phone, MapPin, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-background border-t border-white/5 pt-16 pb-10 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-6">
                        <div className="flex flex-col">
                            <span className="text-3xl font-display font-black text-white tracking-tighter uppercase italic">Fit Fab Studio</span>
                            <span className="text-[10px] text-primary font-bold uppercase tracking-[0.4em]">The Standard of Training</span>
                        </div>
                        <p className="text-white/40 text-sm leading-relaxed max-w-xs">
                            A focused training space built for consistency and results. No distractions—just the tools you need to perform.
                        </p>
                    </div>

                    {/* Quick Access */}
                    <div className="space-y-6">
                        <h4 className="text-white font-display font-bold uppercase tracking-widest text-xs">Quick Access</h4>
                        <ul className="space-y-3 text-white/40 text-xs font-bold uppercase tracking-widest">
                            <li><a href="#about" className="hover:text-primary transition-colors">Philosophy</a></li>
                            <li><a href="#services" className="hover:text-primary transition-colors">Training</a></li>
                            <li><a href="#legends" className="hover:text-primary transition-colors">Legacy</a></li>
                            <li><a href="#team" className="hover:text-primary transition-colors">Coaches</a></li>
                        </ul>
                    </div>

                    {/* Contact Snippet */}
                    <div className="space-y-6">
                        <h4 className="text-white font-display font-bold uppercase tracking-widest text-xs">Contact</h4>
                        <ul className="space-y-4 text-white/40 text-xs font-bold uppercase tracking-widest">
                            <li className="flex items-center gap-3">
                                <MapPin className="w-4 h-4 text-primary" />
                                <span>Feroke, Kozhikode</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-primary" />
                                <span>+91 94973 06050</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-primary" />
                                <span className="lowercase">fitfabfitnessstudio@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div className="space-y-6">
                        <h4 className="text-white font-display font-bold uppercase tracking-widest text-xs">Follow the Standard</h4>
                        <div className="flex items-center gap-4">
                            <a href="https://www.instagram.com/fitfab.fitness?igsh=MzdseWhmYjJ0dHR0" target="_blank" className="h-10 w-10 flex items-center justify-center bg-white/5 border border-white/10 hover:border-primary hover:text-primary transition-all">
                                <Instagram className="h-4 w-4" />
                            </a>
                            <a href="#" className="h-10 w-10 flex items-center justify-center bg-white/5 border border-white/10 hover:border-primary hover:text-primary transition-all">
                                <Facebook className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-white/20 text-[9px] font-bold uppercase tracking-[0.3em]">
                    <p>&copy; {new Date().getFullYear()} Fit Fab Studio. All rights reserved.</p>
                    <p className="text-primary/50">Disciplined Training. Measurable Results.</p>
                </div>
            </div>
        </footer>
    );
}
