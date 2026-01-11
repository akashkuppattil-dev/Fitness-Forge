import { motion } from "framer-motion";
import { ArrowRight, Clock, MapPin, MessageSquare, Phone } from "lucide-react";

export function Contact() {
    const mapLink = "https://maps.app.goo.gl/xAGwAa2nHWf7E5z3A?g_st=ic";

    return (
        <section className="py-8 md:py-12 lg:py-16 bg-background relative overflow-hidden mt-4 sm:mt-6 md:mt-8 lg:mt-10" id="contact">
            <div className="w-[95%] mx-auto px-2 sm:px-4 md:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="mb-12 md:mb-16 lg:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8"
                    >
                        <div className="max-w-3xl space-y-4 md:space-y-6">
                            <div className="flex items-center gap-3 sm:gap-4">
                                <div className="h-px w-10 sm:w-12 bg-primary"></div>
                                <span className="text-primary font-bold tracking-[0.2em] uppercase text-[10px] sm:text-xs md:text-sm">Location</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black text-white uppercase tracking-tighter leading-[1.1]">
                                Visit The <span className="text-primary italic">Studio.</span>
                            </h2>
                        </div>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 xl:gap-20">
                    {/* Contact Details */}
                    <div className="lg:col-span-5 space-y-8 md:space-y-10 lg:space-y-12">
                        <div className="space-y-6 md:space-y-8">
                            <div className="flex gap-4 sm:gap-6">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-white font-display font-bold uppercase tracking-wider mb-1 sm:mb-2 italic text-sm sm:text-base">Address</h3>
                                    <p className="text-white/50 leading-relaxed text-xs sm:text-sm">
                                        Feroke, Kozhikode<br />
                                        Kerala, India
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 sm:gap-6">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-white font-display font-bold uppercase tracking-wider mb-1 sm:mb-2 italic text-sm sm:text-base">Working Hours</h3>
                                    <div className="text-white/50 space-y-0.5 sm:space-y-1 text-[11px] xs:text-xs sm:text-sm leading-tight">
                                        <p>Monday – Saturday: 5:00 AM – 10:00 PM</p>
                                        <p>Sunday: 6:00 AM – 10:00 AM</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4 sm:gap-6">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-white font-display font-bold uppercase tracking-wider mb-1 sm:mb-2 italic text-sm sm:text-base">Direct Line</h3>
                                    <p className="group">
                                        <a href="tel:+919497306050" className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-primary transition-colors">
                                            +91 94973 06050
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 md:pt-8 border-t border-white/5 flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4">
                            <a
                                href="https://wa.me/919497306050"
                                target="_blank"
                                className="flex items-center justify-center xs:justify-start gap-2 sm:gap-3 bg-[#25D366] text-white px-4 sm:px-8 py-3 sm:py-4 font-bold uppercase tracking-widest text-[9px] xs:text-[10px] sm:text-xs hover:brightness-110 transition-all flex-1 xs:flex-initial"
                            >
                                <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> WhatsApp
                            </a>
                            <a
                                href="tel:+919497306050"
                                className="flex items-center justify-center xs:justify-start gap-2 sm:gap-3 bg-white text-black px-4 sm:px-8 py-3 sm:py-4 font-bold uppercase tracking-widest text-[9px] xs:text-[10px] sm:text-xs hover:bg-primary transition-all flex-1 xs:flex-initial"
                            >
                                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Call Now
                            </a>
                        </div>
                    </div>

                    {/* Large Map Embed */}
                    <div className="lg:col-span-7 h-[250px] xs:h-[300px] sm:h-[400px] lg:h-full min-h-[300px] lg:min-h-[500px] relative group">
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
                            className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 bg-black text-white px-4 sm:px-6 py-2 sm:py-3 font-bold uppercase tracking-widest text-[8px] xs:text-[9px] sm:text-[10px] border border-white/10 hover:bg-white hover:text-black transition-all flex items-center gap-1 sm:gap-2"
                        >
                            Get Directions <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}
