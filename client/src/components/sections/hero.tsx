import { motion, useScroll, useTransform } from "framer-motion";
import heroImage from "@assets/image_1765661463397.png";
import sideImage1 from "@assets/mennn_1765662827159.avif";
import sideImage2 from "@assets/dummbel_1765662969002.avif";
import { Link } from "wouter";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  // Side image transforms
  const yLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const yRight = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[800px] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image - Better view */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background z-10" />
        <div className="absolute inset-0 bg-black/20 z-10" />
        <motion.img
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src={heroImage}
          alt="Athlete wrapping hands"
          className="w-full h-full object-cover object-[center_55%]"
        />
      </motion.div>

      {/* Left Image - Muscle Flex - NORMAL COLOR */}
      <motion.div
        style={{ y: yLeft }}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute left-0 lg:left-8 bottom-0 w-56 h-80 lg:w-80 lg:h-[500px] xl:w-96 xl:h-[600px] border-4 border-primary/40 hidden md:block z-10 transition-all duration-500 bg-black shadow-2xl"
      >
        <img src={sideImage1} alt="Muscle Flex" className="w-full h-full object-cover object-center opacity-95" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </motion.div>

      {/* Right Image - Dumbbells - NORMAL COLOR - Same level as left */}
      <motion.div
        style={{ y: yRight }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute right-0 lg:right-8 bottom-0 w-64 h-80 lg:w-96 lg:h-[500px] xl:w-[450px] xl:h-[600px] border-4 border-white/30 hidden md:block z-10 transition-all duration-500 bg-black shadow-2xl"
      >
        <img src={sideImage2} alt="Dumbbells" className="w-full h-full object-cover object-center opacity-95" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-20 flex flex-col items-center text-center">
        <div className="max-w-6xl mx-auto mb-8">
          <h1 className="flex flex-col items-center justify-center text-5xl sm:text-6xl md:text-8xl lg:text-[11rem] font-display font-black text-white leading-[0.8] tracking-tighter uppercase mb-6 sm:mb-8">
            <motion.div className="flex overflow-hidden">
              {["T", "R", "A", "I", "N"].map((l, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="block"
                >
                  {l}
                </motion.span>
              ))}
            </motion.div>

            <motion.div className="flex overflow-hidden text-transparent text-stroke-2">
              {["H", "A", "R", "D", "."].map((l, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="block text-primary"
                >
                  {l}
                </motion.span>
              ))}
            </motion.div>
          </h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-base md:text-xl text-white/90 font-light leading-relaxed tracking-[0.2em] mb-8 sm:mb-10 uppercase max-w-full mx-4 sm:mx-auto"
        >
          Redefine Your Limits
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex flex-col md:flex-row gap-6 items-center"
        >
          <Link href="#contact">
            <a className="group relative overflow-hidden flex items-center justify-center gap-4 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-bold text-base sm:text-lg uppercase tracking-wider hover:bg-primary transition-colors duration-300 rounded-md">
              <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-1">Join The Club</span>
              <ArrowDown className="w-5 h-5 -rotate-90 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
