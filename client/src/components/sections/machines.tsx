import machineImg from "@assets/stock_images/gym_equipment_dumbbe_2f4d4039.jpg";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const features = [
    {
        title: "Plate-Loaded Strength",
        desc: "Natural movement patterns and progressive overload. Pure resistance without mechanical friction."
    },
    {
        title: "Selectorized Precision",
        desc: "Smooth, precise resistance with rapid adjustment. Engineered for isolation and intensity."
    },
    {
        title: "Performance Racks",
        desc: "Structural integrity for compound movements. Built to handle elite-level output."
    }
];

export function Machines() {
    return (
        <section className="py-8 md:py-12 lg:py-16 bg-background relative mt-4 sm:mt-6 md:mt-8 lg:mt-10" id="machines">
            <div className="w-[95%] mx-auto px-2 sm:px-4 md:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-12 md:mb-16 lg:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8"
                    >
                        <div className="max-w-3xl space-y-4 md:space-y-6">
                            <div className="flex items-center gap-3 sm:gap-4">
                                <div className="h-px w-10 sm:w-12 bg-primary"></div>
                                <span className="text-primary font-bold tracking-[0.2em] uppercase text-[10px] sm:text-xs md:text-sm">The Arsenal</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black text-white uppercase tracking-tighter leading-[1.1]">
                                Tools of <span className="text-primary italic">Performance.</span>
                            </h2>
                        </div>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-24 items-center">

                    {/* Visual side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative aspect-square lg:aspect-[4/5] overflow-hidden group border border-white/5 bg-white/5"
                    >
                        <img
                            src={machineImg}
                            alt="Professional Gym Equipment"
                            className="w-full h-full object-cover transition-all duration-1000"
                        />
                        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 md:p-8 lg:p-12 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                            <span className="text-[8px] xs:text-[9px] sm:text-[10px] text-primary font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-2 sm:mb-3 md:mb-4 block">Hardware Integrity</span>
                            <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white uppercase tracking-tighter italic">
                                Built to Endure. <br className="hidden xs:block" />Designed to Evolve.
                            </p>
                        </div>
                    </motion.div>

                    {/* Content side */}
                    <div className="space-y-8 md:space-y-10 lg:space-y-12">
                        <div className="space-y-3 sm:space-y-4 md:space-y-6">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-display font-bold text-white uppercase tracking-tight">
                                Professional Grade Biomechanics.
                            </h3>
                            <p className="text-sm sm:text-base md:text-lg text-white/50 leading-relaxed">
                                We select equipment based on joint-friendly leverage and consistent resistance curves. Every rep counts more when the machine works with you, not against you.
                            </p>
                        </div>

                        <div className="grid gap-5 sm:gap-6 md:gap-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex gap-3 sm:gap-4 md:gap-6 items-start pb-5 sm:pb-6 md:pb-8 border-b border-white/5 last:border-0"
                                >
                                    <div className="bg-primary/10 p-1.5 sm:p-2 border border-primary/20 shrink-0 mt-1">
                                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                                    </div>
                                    <div className="space-y-1 sm:space-y-2">
                                        <h4 className="font-display font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-wide italic">{feature.title}</h4>
                                        <p className="text-white/40 text-xs sm:text-sm md:text-base leading-relaxed">{feature.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="pt-4 md:pt-8">
                            <div className="p-5 sm:p-6 md:p-8 bg-card border border-white/5 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <h4 className="text-white font-display font-bold uppercase tracking-widest text-[9px] xs:text-[10px] sm:text-xs mb-2 sm:mb-3 md:mb-4">The Standard</h4>
                                <p className="text-white/60 text-xs sm:text-sm md:text-base italic leading-relaxed">
                                    "Training with precision tools ensures you build strength that stays, without the attrition of poorly designed mechanics."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

