import { Instagram, Facebook, Phone, MapPin, Mail, ArrowRight } from "lucide-react";
import logoImage from "@assets/fitfab_1765661344893.jpg";

export function Footer() {
    const mapLink = "https://maps.app.goo.gl/xAGwAa2nHWf7E5z3A?g_st=ic";

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Fit Fab Fitness Studio',
                    text: 'Check out Fit Fab Fitness Studio in Feroke!',
                    url: mapLink,
                });
            } catch (err) {
                console.log('Error sharing:', err);
            }
        } else {
            navigator.clipboard.writeText(mapLink);
            alert("Location link copied to clipboard!");
        }
    };

    return (
        <footer className="bg-black border-t border-white/5 pt-24 pb-10 relative overflow-hidden" id="contact" data-testid="footer">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">

                {/* Contact Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <div className="h-0.5 w-8 bg-primary" />
                        <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">Contact Us</span>
                        <div className="h-0.5 w-8 bg-primary" />
                    </div>
                    <h2 className="text-5xl md:text-7xl font-display font-bold text-white uppercase tracking-tight mb-4">
                        Get In <span className="text-primary">Touch</span>
                    </h2>
                    <p className="text-white/60 text-lg">Ready to start your fitness journey?</p>
                </div>

                <div className="grid md:grid-cols-12 gap-12 lg:gap-16 mb-20">

                    {/* Brand Column */}
                    <div className="md:col-span-12 lg:col-span-4">
                        <div className="flex items-center gap-3 mb-8">
                            <img src={logoImage} alt="Fit Fab Logo" className="h-16 w-16 rounded-full border-2 border-primary/30" />
                            <div className="flex flex-col">
                                <span className="text-4xl font-display font-bold text-white tracking-tighter">FIT FAB</span>
                                <span className="text-[10px] text-primary font-bold uppercase tracking-[0.3em]">Fitness Studio</span>
                            </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed text-base mb-8 max-w-sm">
                            Premium family-focused fitness center in Feroke, Kozhikode. Dedicated to disciplined training, measurable results, and long-term health transformation.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="https://www.instagram.com/fitfab.fitness?igsh=MzdseWhmYjJ0dHR0" target="_blank" className="h-12 w-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-primary hover:border-primary hover:text-black text-white transition-all">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="h-12 w-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-primary hover:border-primary hover:text-black text-white transition-all">
                                <Facebook className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Contact Info Column */}
                    <div className="md:col-span-6 lg:col-span-4">
                        <h3 className="text-lg font-display font-bold text-white uppercase mb-8 border-b border-white/10 pb-4">Contact Information</h3>
                        <ul className="space-y-6">
                            <li>
                                <div className="bg-white/5 border border-white/10 p-4 hover:border-primary/50 transition-colors group">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary/10 p-2 rounded-sm shrink-0">
                                            <MapPin className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-primary font-bold uppercase tracking-wider mb-1">Visit Us</p>
                                            <p className="text-white/80 leading-relaxed">Feroke, Kozhikode<br />Kerala, India</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="mailto:fitfabfit nessstudio@gmail.com" className="block bg-white/5 border border-white/10 p-4 hover:border-primary/50 transition-colors group">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary/10 p-2 rounded-sm shrink-0">
                                            <Mail className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-primary font-bold uppercase tracking-wider mb-1">Email</p>
                                            <p className="text-white/80 break-all text-sm">fitfabfitnessstudio@gmail.com</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/919497306050" target="_blank" className="block bg-white/5 border border-white/10 p-4 hover:border-primary/50 transition-colors group">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary/10 p-2 rounded-sm shrink-0">
                                            <Phone className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-primary font-bold uppercase tracking-wider mb-1">Call / WhatsApp</p>
                                            <p className="text-white/80 font-bold text-lg">+91 94973 06050</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Map Column */}
                    <div className="md:col-span-6 lg:col-span-4">
                        <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                            <h3 className="text-lg font-display font-bold text-white uppercase">Find Us</h3>
                            <button onClick={handleShare} className="text-[10px] uppercase font-bold tracking-widest text-white/50 hover:text-primary transition-colors flex items-center gap-2">
                                Share <ArrowRight className="w-3 h-3" />
                            </button>
                        </div>
                        <a href={mapLink} target="_blank" rel="noopener noreferrer" className="block w-full h-[280px] rounded-sm overflow-hidden bg-white/5 grayscale hover:grayscale-0 transition-all duration-500 relative group cursor-pointer border-2 border-white/10 hover:border-primary/50">
                            <div className="absolute inset-0 z-10 bg-transparent group-hover:bg-primary/10 transition-colors pointer-events-none" />
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15664.248383842603!2d75.83401737586676!3d11.199342988975344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65b6e6f6f6f6f%3A0x6f6f6f6f6f6f6f6f!2sFit+Fab+Family+Fitness+Studio!5e0!3m2!1sen!2sin!4v1715580000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, pointerEvents: "none" }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                                <div className="bg-primary text-black px-6 py-3 text-xs font-bold uppercase tracking-widest shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                    Open on Google Maps
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-white/30 text-xs tracking-wider uppercase">
                    <p>&copy; {new Date().getFullYear()} Fit Fab Family Fitness Studio. All rights reserved.</p>
                    <p className="text-primary/50">Designed for Performance</p>
                </div>
            </div>
        </footer>
    );
}
