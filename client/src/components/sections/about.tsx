import image1 from "@assets/about_bg_dark.png";
import image2 from "@assets/about_bg_light.png";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function About() {
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-background relative overflow-hidden mt-4 sm:mt-6 md:mt-8 lg:mt-10" id="about">
      <div className="w-[95%] mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-24 items-center">

          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6 md:gap-8"
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="h-px w-10 sm:w-12 bg-primary"></div>
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-[10px] sm:text-xs md:text-sm">Our Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.1] tracking-tight uppercase text-white">
              Why <span className="text-primary text-stroke-1">Fit Fab</span> Exists
            </h2>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 leading-relaxed font-light">
              Fit Fab Studio wasn't built for those seeking a temporary fix. It was built for those who understand that strength is forged through repetition, discipline, and uncompromising focus.
            </p>

            <div className="space-y-4 md:space-y-6 mt-2 md:mt-4">
              {[
                { title: "Serious Training", text: "No gimmicks. No shortcuts. We provide the environment and the equipment for real, measurable progress." },
                { title: "Built for Consistency", text: "We prioritize long-term development over quick results, fostering a mindset of persistence and resilience." },
                { title: "Training Economy", text: "Every session counts. We focus on high-impact movements and structured programming to maximize your time." }
              ].map((item, i) => (
                <div key={i} className="flex gap-3 sm:gap-4">
                  <div className="mt-1.5 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-primary shrink-0 mt-2" />
                  <div>
                    <h3 className="text-sm sm:text-base md:text-lg text-white font-display font-bold uppercase tracking-wide mb-1 italic">{item.title}</h3>
                    <p className="text-xs sm:text-sm md:text-base text-white/50 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 md:pt-6">
              <a href="#contact" className="inline-flex items-center gap-2 group text-white font-bold uppercase tracking-widest text-[10px] sm:text-xs md:text-sm hover:text-primary transition-colors">
                Visit the Gym <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Imagery */}
          <div className="relative order-first lg:order-last">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] overflow-hidden bg-white/5"
            >
              <img
                src={image1}
                alt="Forged in Steel"
                className="w-full h-full object-cover transition-all duration-700"
              />

              {/* Floating Stat/Badge */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 p-3 sm:p-6 bg-primary text-black max-w-[140px] sm:max-w-[200px] hidden sm:block">
                <p className="font-display font-black text-xl sm:text-3xl leading-none uppercase mb-1 sm:mb-2 italic">100%</p>
                <p className="text-[8px] sm:text-[10px] font-bold uppercase tracking-widest leading-tight">Focus on Proper Training Mechanics</p>
              </div>
            </motion.div>

            {/* Inset Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -bottom-8 sm:-bottom-10 -right-8 sm:-right-10 w-2/3 aspect-video border-4 border-background overflow-hidden hidden md:block"
            >
              <img src={image2} alt="Gym Setup" className="w-full h-full object-cover" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

