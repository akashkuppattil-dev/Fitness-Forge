import { motion } from "framer-motion";
import { Dumbbell, Shield, Target, Users, Check } from "lucide-react";
import machineImg from "@assets/stock_images/gym_equipment_dumbbe_2f4d4039.jpg";

const features = [
    {
        icon: Dumbbell,
        title: "Plate-Loaded Strength",
        desc: "Natural movement patterns and progressive overload. Build strength with joint-friendly control."
    },
    {
        icon: Shield,
        title: "Selectorized Machines",
        desc: "Smooth, precise resistance with easy adjustment—perfect for focused training progression."
    },
    {
        icon: Target,
        title: "Upper-Body Systems",
        desc: "Chest, back, shoulders, and arms trained with consistent resistance and posture support."
    },
    {
        icon: Users,
        title: "Lower-Body Power",
        desc: "Leg press, extension, and curl systems engineered for stability and powerful development."
    }
];

const benefits = [
    { title: "Correct Technique", desc: "Guided movement patterns ensure proper form" },
    { title: "Injury Prevention", desc: "Controlled resistance reduces risk" },
    { title: "Consistent Progress", desc: "Track and measure every workout" },
    { title: "All Levels Welcome", desc: "Beginner to advanced athletes" }
];

export function Machines() {
    return (
        <section className="py-16 sm:py-24 lg:py-32 bg-background relative overflow-hidden">
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
                        <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">Section 1</span>
                        <div className="h-0.5 w-8 bg-primary" />
                    </div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white uppercase tracking-tight mb-6">
                        Professional Gym <span className="text-primary">Machines</span>
                    </h2>
                    <p className="text-xl md:text-2xl font-display font-bold text-white/70 uppercase tracking-wide mb-4">
                        Engineered for precision. Built for results.
                    </p>
                    <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
                        Our gym is equipped with professionally selected strength machines designed to support correct biomechanics,
                        controlled movement, and long-term progress. Every machine is chosen to help members train safely, efficiently,
                        and consistently—from beginners to advanced athletes.
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">

                    {/* Left: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[300px] sm:h-[400px] lg:h-[600px] overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
                        <img
                            src={machineImg}
                            alt="Professional Gym Equipment"
                            className="w-full h-full object-cover grayscale"
                        />
                        <div className="absolute bottom-8 left-8 z-20">
                            <p className="text-white font-display font-bold text-xl uppercase tracking-wider border-l-4 border-primary pl-4">
                                Quality machines<br />create disciplined<br />training.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right: Features Grid */}
                    <div className="space-y-8">
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-white uppercase mb-8">
                            What Our Machine Floor Offers
                        </h3>

                        <div className="space-y-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex gap-4 items-start group"
                                >
                                    <div className="bg-primary/10 p-3 rounded-sm border border-primary/20 group-hover:bg-primary/20 transition-colors shrink-0">
                                        <feature.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-display font-bold text-white text-lg uppercase mb-2">{feature.title}</h4>
                                        <p className="text-muted-foreground">{feature.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Why It Matters - Redesigned */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-primary/10 to-transparent border-l-4 border-primary p-8 lg:p-12"
                >
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white uppercase mb-8">
                        Why Machine Training Matters
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex gap-4 items-start bg-black/30 p-4 border border-white/5"
                            >
                                <div className="bg-primary/20 p-2 rounded-full shrink-0">
                                    <Check className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-display font-bold text-white uppercase text-sm mb-1">{benefit.title}</h4>
                                    <p className="text-white/60 text-xs">{benefit.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
