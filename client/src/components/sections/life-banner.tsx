import { motion } from "framer-motion";
import lifeBanner from "@assets/its_life_banner.png";

export function LifeBanner() {
    return (
        <section className="py-12 sm:py-16 lg:py-24 bg-black relative overflow-hidden">
            <div className="container mx-auto px-4">

                {/* Image Container with Zoom Effect */}
                <motion.div
                    initial={{ opacity: 0, scale: 1.2 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1.5,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                    className="flex justify-center items-center overflow-hidden"
                >
                    <motion.img
                        src={lifeBanner}
                        alt="It's Not Fitness. It's Life."
                        className="w-full max-w-5xl h-auto"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                    />
                </motion.div>

                {/* Animated Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="text-center text-white/50 text-sm uppercase tracking-[0.3em] mt-8 font-bold"
                >
                    A Philosophy, Not A Trend
                </motion.p>
            </div>

            {/* Decorative Elements with Animation */}
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"
            />
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"
            />

            {/* Corner Accents */}
            <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-primary/20" />
            <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-primary/20" />
            <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-primary/20" />
            <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-primary/20" />
        </section>
    );
}
