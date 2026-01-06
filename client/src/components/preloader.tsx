import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
                >
                    <div className="text-center">
                        {/* FIT FAB Text Animation */}
                        <motion.div
                            className="overflow-hidden mb-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <motion.h1
                                className="text-6xl md:text-8xl font-display font-black text-white uppercase tracking-tighter"
                                initial={{ y: 100 }}
                                animate={{ y: 0 }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.2,
                                    ease: [0.22, 1, 0.36, 1]
                                }}
                            >
                                FIT <span className="text-primary">FAB</span>
                            </motion.h1>
                        </motion.div>

                        {/* Tagline */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className="text-white/50 text-sm uppercase tracking-[0.3em] font-bold mb-12"
                        >
                            Family Fitness Studio
                        </motion.p>

                        {/* Loading Bar */}
                        <div className="w-64 h-1 bg-white/10 mx-auto overflow-hidden rounded-full">
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "100%" }}
                                transition={{
                                    duration: 2,
                                    ease: "easeInOut",
                                    repeat: Infinity,
                                }}
                                className="h-full w-1/3 bg-gradient-to-r from-transparent via-primary to-transparent"
                            />
                        </div>
                    </div>

                    {/* Decorative Corner Elements */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-primary/30"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-primary/30"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                        className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-primary/30"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-primary/30"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
