import { motion } from "framer-motion";
import { Phone, MapPin, Mail, Clock, MessageSquare, ArrowRight } from "lucide-react";

export function Contact() {
    const mapLink = "https://maps.app.goo.gl/xAGwAa2nHWf7E5z3A?g_st=ic";

    return (
        <section className="py-10 bg-background relative overflow-hidden" id="contact">
            <div className="container mx-auto px-4 relative z-10">

                {/* Header */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row md:items-end justify-between gap-8"
                    >
                        <div className="max-w-3xl space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="h-px w-12 bg-primary"></div>
                                <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">Location</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-display font-black text-white uppercase tracking-tighter leading-none">
                                Visit The <span className="text-primary italic">Studio.</span>
                            </h2>
                        </div>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
                    {/* Contact Details */}
                    <div className="lg:col-span-5 space-y-12">
                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                    <MapPin className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-white font-display font-bold uppercase tracking-wider mb-2 italic">Address</h3>
                                    <p className="text-white/50 leading-relaxed">
                                        Feroke, Kozhikode<br />
                                        Kerala, India
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                    <Clock className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-white font-display font-bold uppercase tracking-wider mb-2 italic">Working Hours</h3>
                                    <div className="text-white/50 space-y-1 text-sm">
                                        <p>Monday – Saturday: 5:00 AM – 10:00 PM</p>
                                        <p>Sunday: 6:00 AM – 10:00 AM</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                    <Phone className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-white font-display font-bold uppercase tracking-wider mb-2 italic">Direct Line</h3>
                                    <p className="group">
                                        <a href="tel:+919497306050" className="text-2xl font-display font-bold text-white group-hover:text-primary transition-colors">
                                            +91 94973 06050
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-white/5 flex flex-wrap gap-4">
                            <a
                                href="https://wa.me/919497306050"
                                target="_blank"
                                className="flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 font-bold uppercase tracking-widest text-xs hover:brightness-110 transition-all"
                            >
                                <MessageSquare className="w-4 h-4" /> WhatsApp
                            </a>
                            <a
                                href="tel:+919497306050"
                                className="flex items-center gap-3 bg-white text-black px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-primary transition-all"
                            >
                                <Phone className="w-4 h-4" /> Call Now
                            </a>
                        </div>
                    </div>

                    {/* Large Map Embed */}
                    <div className="lg:col-span-7 h-[400px] lg:h-full min-h-[400px] relative group">
                        <div className="absolute inset-0 border border-white/10 group-hover:border-primary/50 transition-colors z-10 pointer-events-none" />
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15664.248383842603!2d75.83401737586676!3d11.199342988975344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65b6e6f6f6f6f%3A0x6f6f6f6f6f6f6f6f!2sFit+Fab+Family+Fitness+Studio!5e0!3m2!1sen!2sin!4v1715580000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                        <a
                            href={mapLink}
                            target="_blank"
                            className="absolute bottom-6 right-6 z-20 bg-black text-white px-6 py-3 font-bold uppercase tracking-widest text-[10px] border border-white/10 hover:bg-white hover:text-black transition-all flex items-center gap-2"
                        >
                            Get Directions <ArrowRight className="w-3 h-3" />
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}
