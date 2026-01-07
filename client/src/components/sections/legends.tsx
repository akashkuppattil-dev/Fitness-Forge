import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Trophy } from "lucide-react";
import ronnieImg from "@assets/ronnie_legend.png";
import arnoldImg from "@assets/arnold_legend.png";
import chrisImg from "@assets/cbum_legend.png";

const legends = [
    {
        name: "Ronnie Coleman",
        title: "The Standard of Power",
        desc: "Unmatched strength. Relentless intensity. A symbol of raw power built through discipline and decades of consistency.",
        image: ronnieImg
    },
    {
        name: "Arnold Schwarzenegger",
        title: "The Standard of Legacy",
        desc: "Vision. Charisma. Timeless greatness. Arnold set the foundation for modern bodybuilding by proving that strength, aesthetics, and mindset together create true legacy.",
        image: arnoldImg
    },
    {
        name: "Chris Bumstead",
        title: "The Standard of Aesthetic",
        desc: "Balance. Proportion. Precision. Chris Bumstead represents modern classic excellence — proving that aesthetics are earned through structure, patience, and discipline.",
        image: chrisImg
    }
];

export function Legends() {
    return (
        <section className="py-10 bg-black relative overflow-hidden" id="legends">
            <div className="container mx-auto px-4">

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
                                <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">Legacy</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-display font-black text-white uppercase tracking-tighter leading-none">
                                Legends of <br /><span className="text-primary italic">The Standard.</span>
                            </h2>
                        </div>
                    </motion.div>
                </div>

                {/* Legends Grid */}
                <div className="grid md:grid-cols-3 gap-6 relative z-10">
                    {legends.map((legend, index) => (
                        <motion.div
                            key={legend.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            className="group relative flex flex-col bg-card border border-white/5 overflow-hidden"
                        >
                            <div className="relative aspect-[3/4] overflow-hidden">
                                <img
                                    src={legend.image}
                                    alt={legend.name}
                                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                            </div>

                            {/* Overlay Info */}
                            <div className="p-8 space-y-4">
                                <div className="flex items-center gap-3">
                                    <Trophy className="w-5 h-5 text-primary" />
                                    <span className="text-primary font-bold uppercase tracking-[0.2em] text-[10px]">
                                        {legend.title}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-display font-bold text-white uppercase tracking-tight italic">
                                    {legend.name}
                                </h3>
                                <p className="text-sm text-white/50 leading-relaxed font-light">
                                    {legend.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Philosophy Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 md:mt-20 text-center max-w-4xl mx-auto space-y-6 md:space-y-8"
                >
                    <p className="text-xl sm:text-2xl md:text-4xl font-display font-bold text-white/80 leading-snug uppercase px-4">
                        "The resistance that you fight physically in the gym and the resistance that you fight in life can only build a strong character."
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        <div className="h-px w-8 bg-white/20" />
                        <span className="text-primary font-bold uppercase tracking-widest text-xs">Arnold Schwarzenegger</span>
                        <div className="h-px w-8 bg-white/20" />
                    </div>
                </motion.div>

                <div className="mt-20 flex justify-center">
                    <Link href="#contact">
                        <a className="inline-flex items-center gap-4 group bg-white text-black px-10 py-5 font-bold uppercase tracking-widest text-sm hover:bg-primary transition-colors">
                            Start Your Legacy <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </Link>
                </div>
            </div>
        </section>
    );
}

