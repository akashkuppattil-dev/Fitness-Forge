import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import ronnieImg from "@assets/mennn_1765662827159.avif";
import dorianImg from "@assets/group_1765662852138.avif";
import chrisImg from "@assets/midu_1765660822078.jpg";

const legends = [
    {
        name: "Ronnie Coleman",
        title: "8x Mr. Olympia",
        principle: "Power, intensity, and unmatched work ethic.",
        image: ronnieImg
    },
    {
        name: "Dorian Yates",
        title: "6x Mr. Olympia",
        principle: "Discipline, structure, and precision-based training.",
        image: dorianImg
    },
    {
        name: "Chris Bumstead",
        title: "Classic Physique Champion",
        principle: "Balance, symmetry, and sustainable development.",
        image: chrisImg
    }
];

const mindsetPrinciples = [
    "Discipline over motivation",
    "Consistency over shortcuts",
    "Respect for technique and recovery"
];

export function Legends() {
    return (
        <section className="py-16 sm:py-24 lg:py-32 bg-black relative overflow-hidden">
            <div className="container mx-auto px-4">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 mb-4">
                        <div className="h-0.5 w-8 bg-primary" />
                        <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">Section 2</span>
                        <div className="h-0.5 w-8 bg-primary" />
                    </div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white uppercase tracking-tight mb-6">
                        The Mindset & <span className="text-primary">The Legends</span>
                    </h2>
                    <p className="text-xl md:text-2xl font-display font-bold text-white/80 mb-8">
                        Great equipment builds the body.<br />
                        <span className="text-primary">Great mindset builds the athlete.</span>
                    </p>
                </motion.div>

                {/* Arnold Quote Banner */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-primary/10 to-transparent border-l-4 border-primary p-8 lg:p-12 mb-20"
                >
                    <p className="text-xl md:text-2xl text-white/90 italic leading-relaxed mb-4">
                        "The resistance that you fight physically in the gym and the resistance that you fight in life can only build a strong character."
                    </p>
                    <p className="text-primary font-bold uppercase tracking-widest text-sm">— Arnold Schwarzenegger</p>
                </motion.div>

                {/* Simple 3-Column Legends Grid */}
                <div className="mb-20">
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-white uppercase mb-12 text-center">
                        Legends Who Defined the Standard
                    </h3>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {legends.map((legend, index) => (
                            <motion.div
                                key={legend.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-card border border-white/10 overflow-hidden group hover:border-primary/50 transition-all"
                            >
                                {/* Legend Image */}
                                <div className="relative h-80 overflow-hidden bg-white/5">
                                    <img
                                        src={legend.image}
                                        alt={legend.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                                    {/* Badge Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <h4 className="text-2xl font-display font-bold text-white uppercase mb-1">{legend.name}</h4>
                                        <p className="text-primary text-xs font-bold uppercase tracking-wider">{legend.title}</p>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <p className="text-white/80 leading-relaxed">{legend.principle}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Core Principles - Simple Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white/5 border border-white/10 p-8 lg:p-12 mb-12"
                >
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white uppercase mb-8 text-center">
                        What They All Represent
                    </h3>

                    <div className="grid md:grid-cols-3 gap-6">
                        {mindsetPrinciples.map((principle, index) => (
                            <div
                                key={principle}
                                className="text-center p-6 bg-black/30 border border-white/5"
                            >
                                <div className="w-12 h-12 bg-primary/10 border-2 border-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-primary font-bold text-xl">{index + 1}</span>
                                </div>
                                <p className="text-white font-bold uppercase tracking-wide text-sm">{principle}</p>
                            </div>
                        ))}
                    </div>

                    <p className="text-center text-white/60 mt-8 text-lg italic">
                        These principles guide how we train—every day, on every machine.
                    </p>
                </motion.div>

                {/* Simple CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="text-white/50 text-sm font-bold uppercase tracking-widest mb-6">
                        Train in an environment built on proven standards.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
                        <Link href="#contact">
                            <a className="inline-flex items-center justify-center gap-2 bg-primary text-black px-6 sm:px-8 py-3 sm:py-4 font-bold text-base sm:text-lg uppercase tracking-wider hover:bg-white transition-colors w-full sm:w-auto rounded-md">
                                Start Training <ArrowRight className="w-4 h-4" />
                            </a>
                        </Link>
                        <Link href="#facility">
                            <a className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 font-bold text-base sm:text-lg uppercase tracking-wider hover:border-primary hover:text-primary transition-colors w-full sm:w-auto rounded-md">
                                Visit the Gym <ArrowRight className="w-4 h-4" />
                            </a>
                        </Link>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
