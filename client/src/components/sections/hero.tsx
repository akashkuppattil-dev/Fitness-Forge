import heroLeft from "@assets/hero_left.jpg";
import heroRight from "@assets/hero_right.jpg";
import heroImage from "@assets/image_1765661463397.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { useRef } from "react";
import { Link } from "wouter";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen h-[70vh] md:h-[80vh] lg:h-[95vh] min-h-[400px] w-[95%] mx-auto overflow-hidden flex items-center justify-center bg-black rounded-lg">
      {/* Three-Image Background Layout with Fixed Zoom */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 flex items-center justify-center bg-black px-1 sm:px-2 md:px-4 gap-1 rounded-lg"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-10 rounded-lg" />

        {/* Left Side Image - Visible on tablet+ */}
        <div className="hidden md:flex w-[18%] lg:w-[25%] h-[40%] lg:h-[70%] opacity-50 lg:opacity-70 transform -rotate-1 translate-x-1 md:translate-x-6 lg:translate-x-12 z-0 items-end pb-4 md:pb-8 lg:pb-10">
          <img
            src={heroLeft}
            alt="Training Left"
            className="w-full h-full object-cover rounded-lg md:rounded-lg lg:rounded-xl border border-white/20 shadow-2xl"
          />
        </div>

        {/* Center Main Image - Responsive sizing */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeOut", delay: 0.2 }}
          className="w-full md:w-[64%] lg:w-[60%] h-full flex items-center justify-center z-20 overflow-visible pt-16 sm:pt-20 md:pt-20 lg:pt-20"
        >
          <img
            src={heroImage}
            alt="Focused Athlete"
            className="w-full h-[75%] sm:h-[80%] md:h-[85%] lg:h-[90%] object-contain object-bottom scale-120 sm:scale-110 md:scale-105 lg:scale-100 drop-shadow-[0_0_40px_rgba(255,183,15,0.2)] sm:drop-shadow-[0_0_60px_rgba(255,183,15,0.25)] md:drop-shadow-[0_0_80px_rgba(255,183,15,0.3)] lg:drop-shadow-[0_0_100px_rgba(255,183,15,0.4)]"
          />
        </motion.div>

        {/* Right Side Image - Visible on tablet+ */}
        <div className="hidden md:flex w-[18%] lg:w-[25%] h-[40%] lg:h-[70%] opacity-50 lg:opacity-70 transform rotate-1 -translate-x-1 md:-translate-x-6 lg:-translate-x-12 z-0 items-end pb-4 md:pb-8 lg:pb-10">
          <img
            src={heroRight}
            alt="Training Right"
            className="w-full h-full object-cover rounded-lg md:rounded-lg lg:rounded-xl border border-white/20 shadow-2xl"
          />
        </div>
      </motion.div>

      {/* Content Container - Centered */}
      <div className="w-full px-2 sm:px-4 md:px-6 relative z-30 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8"
          >
            {/* Tagline */}
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <div className="h-px w-4 sm:w-6 md:w-8 bg-primary" />
              <span className="text-primary font-bold tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] uppercase text-[9px] sm:text-xs md:text-sm">
                The Standard of Training
              </span>
              <div className="h-px w-4 sm:w-6 md:w-8 bg-primary" />
            </div>

            {/* Main Headline - Responsive Scaling */}
            <h1 className="text-2xl xs:text-2.5xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-black text-white leading-[1.15] sm:leading-[1.1] tracking-tighter uppercase italic">
              Build <span className="text-primary">Strength.</span><br className="block" />
              Train with <span className="text-stroke-1 text-transparent font-black">Purpose.</span>
            </h1>

            {/* Subtext - Simplified for mobile */}
            <p className="text-[11px] xs:text-xs sm:text-sm md:text-lg text-white/60 max-w-sm xs:max-w-lg sm:max-w-xl mx-auto font-medium leading-relaxed xs:leading-relaxed sm:leading-relaxed uppercase tracking-wider">
              A premium training space <br className="xs:hidden" /> built for results.<br className="hidden xs:block" />
              No distractions—just performance.
            </p>

            {/* CTAs - Mobile Responsive Stack */}
            <div className="flex flex-col xs:flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4 pt-2 sm:pt-4 md:pt-8 px-2 sm:px-0">
              <Link href="#contact">
                <a className="w-full xs:w-auto group flex items-center justify-center gap-2 sm:gap-3 px-4 xs:px-6 sm:px-8 py-2.5 xs:py-3 sm:py-4 bg-primary text-black font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 text-[10px] xs:text-xs sm:text-sm">
                  Join The Club <ArrowRight className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Link>

              <a href="tel:+919497306050" className="w-full xs:w-auto flex items-center justify-center gap-2 sm:gap-3 px-4 xs:px-6 sm:px-8 py-2.5 xs:py-3 sm:py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-primary transition-all duration-300 text-[10px] xs:text-xs sm:text-sm">
                <Phone className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5" /> Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Info Bar - Desktop Only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-0 w-full hidden lg:block"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end border-t border-white/10 pt-8">
            <div className="flex gap-12 text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              <div className="space-y-1">
                <p className="text-primary/60">Location</p>
                <p className="text-white">Feroke, Kozhikode</p>
              </div>
              <div className="space-y-1">
                <p className="text-primary/60">Hours</p>
                <p className="text-white">5:00 AM - 10:00 PM</p>
              </div>
            </div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-white/20">
              Est. 2024
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
