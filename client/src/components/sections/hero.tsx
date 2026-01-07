import { motion, useScroll, useTransform } from "framer-motion";
import heroImage from "@assets/image_1765661463397.png";
import heroLeft from "@assets/hero_left.jpg";
import heroRight from "@assets/hero_right.jpg";
import { Link } from "wouter";
import { ArrowRight, Phone } from "lucide-react";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <section id="home" ref={containerRef} className="relative h-[85vh] min-h-[600px] w-full overflow-hidden flex items-center justify-center bg-black">
      {/* Three-Image Background Layout with Fixed Zoom */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 flex items-center justify-center bg-black px-4 md:px-6 gap-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-10" />

        {/* Left Side Image - Visible on all screens for cinematic feel */}
        <div className="flex w-[22%] lg:w-[30%] h-[45%] lg:h-[75%] opacity-40 lg:opacity-60 transform -rotate-1 translate-x-12 lg:translate-x-24 z-0 items-end pb-12">
          <img
            src={heroLeft}
            alt="Training Left"
            className="w-full h-full object-cover rounded-xl lg:rounded-2xl border border-white/20 shadow-2xl"
          />
        </div>

        {/* Center Main Image - Increased header clearance with Zoom Effect */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeOut", delay: 0.2 }}
          className="w-full lg:w-[55%] h-full flex items-center justify-center z-20 overflow-visible pt-24"
        >
          <img
            src={heroImage}
            alt="Focused Athlete"
            className="w-full h-[85%] lg:h-[92%] object-contain object-bottom scale-110 lg:scale-100 drop-shadow-[0_0_80px_rgba(255,183,15,0.3)] lg:drop-shadow-[0_0_100px_rgba(255,183,15,0.4)]"
          />
        </motion.div>

        {/* Right Side Image - Visible on all screens for cinematic feel */}
        <div className="flex w-[22%] lg:w-[30%] h-[45%] lg:h-[75%] opacity-40 lg:opacity-60 transform rotate-1 -translate-x-12 lg:-translate-x-24 z-0 items-end pb-12">
          <img
            src={heroRight}
            alt="Training Right"
            className="w-full h-full object-cover rounded-xl lg:rounded-2xl border border-white/20 shadow-2xl"
          />
        </div>
      </motion.div>

      {/* Content Container - Centered */}
      <div className="container mx-auto px-4 relative z-30 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-4 md:space-y-8"
          >
            {/* Tagline */}
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-6 md:w-8 bg-primary" />
              <span className="text-primary font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase text-[10px] md:text-sm">
                The Standard of Training
              </span>
              <div className="h-px w-6 md:w-8 bg-primary" />
            </div>

            {/* Main Headline - Responsive Scaling */}
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-display font-black text-white leading-[1.1] tracking-tighter uppercase italic">
              Build <span className="text-primary">Strength.</span><br />
              Train with <span className="text-stroke-1 text-transparent font-black">Purpose.</span>
            </h1>

            {/* Subtext - Simplified for mobile */}
            <p className="text-sm md:text-lg text-white/60 max-w-xl mx-auto font-medium leading-relaxed uppercase tracking-wider">
              A premium training space built for results.<br className="md:hidden" />
              No distractions—just performance.
            </p>

            {/* CTAs - Mobile Responsive Stack */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 pt-4 md:pt-8 px-4 sm:px-0">
              <Link href="#contact">
                <a className="w-full sm:w-auto group flex items-center justify-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-primary text-black font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 text-xs md:text-sm">
                  Join The Club <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Link>

              <a href="tel:+919497306050" className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-primary transition-all duration-300 text-xs md:text-sm">
                <Phone className="w-4 h-4 md:w-5 md:h-5" /> Call Now
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
