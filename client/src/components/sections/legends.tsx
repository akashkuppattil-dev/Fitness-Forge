import arnoldImg from "@assets/arnold_legend.png";
import chrisImg from "@assets/cbum_legend.png";
import ronnieImg from "@assets/ronnie_legend.png";
import { motion } from "framer-motion";
import { ArrowRight, Trophy } from "lucide-react";
import { Link } from "wouter";

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
        <section className="py-8 md:py-12 lg:py-16 bg-black relative overflow-hidden mt-4 sm:mt-6 md:mt-8 lg:mt-10" id="legends">
            <div className="w-[95%] mx-auto px-2 sm:px-4 md:px-6 lg:px-8">

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
                                <span className="text-primary font-bold tracking-[0.2em] uppercase text-[10px] sm:text-xs md:text-sm">Legacy</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black text-white uppercase tracking-tighter leading-[1.1]">
                                Legends of <br /><span className="text-primary italic">The Standard.</span>
                            </h2>
                        </div>
                    </motion.div>
                </div>

                {/* Legends Carousel - Mobile & Grid - Desktop */}
                <div className="relative z-10">
                    {/* Mobile Carousel */}
                    <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 -mx-4 px-4 pb-4" style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch' }}>
                        {legends.map((legend, index) => (
                            <motion.div
                                key={legend.name}
                                initial={{ opacity: 1 }}
                                className="group relative flex flex-col bg-card border border-white/5 overflow-hidden flex-shrink-0 snap-start"
                                style={{ width: 'calc(100vw - 80px)', maxWidth: '320px' }}
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
                                <div className="p-4 sm:p-5 space-y-2 sm:space-y-3">
                                    <div className="flex items-center gap-2">
                                        <Trophy className="w-4 h-4 text-primary flex-shrink-0" />
                                        <span className="text-primary font-bold uppercase tracking-[0.2em] text-[8px] xs:text-[9px] line-clamp-1">
                                            {legend.title}
                                        </span>
                                    </div>
                                    <h3 className="text-base xs:text-lg sm:text-xl font-display font-bold text-white uppercase tracking-tight italic line-clamp-1">
                                        {legend.name}
                                    </h3>
                                    <p className="text-xs text-white/50 leading-snug font-light line-clamp-3">
                                        {legend.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Desktop Grid */}
                    <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
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
                                <div className="p-4 sm:p-5 md:p-6 lg:p-8 space-y-3 sm:space-y-4">
                                    <div className="flex items-center gap-2 sm:gap-3">
                                        <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                                        <span className="text-primary font-bold uppercase tracking-[0.2em] text-[8px] xs:text-[9px] sm:text-[10px] md:text-[10px]">
                                            {legend.title}
                                        </span>
                                    </div>
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-white uppercase tracking-tight italic">
                                        {legend.name}
                                    </h3>
                                    <p className="text-xs sm:text-sm md:text-base text-white/50 leading-relaxed font-light">
                                        {legend.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Philosophy Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 md:mt-16 lg:mt-20 text-center max-w-4xl mx-auto space-y-4 md:space-y-6 lg:space-y-8"
                >
                    <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white/80 leading-snug uppercase px-3 sm:px-4">
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

