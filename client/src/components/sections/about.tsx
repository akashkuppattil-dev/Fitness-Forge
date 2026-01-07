import { motion } from "framer-motion";
import image1 from "@assets/about_bg_dark.png";
import image2 from "@assets/about_bg_light.png";
import { ArrowRight } from "lucide-react";

export function About() {
  return (
    <section className="py-10 bg-background relative overflow-hidden" id="about">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-primary"></div>
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">Our Philosophy</span>
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1] tracking-tight uppercase text-white">
              Why <span className="text-primary text-stroke-1">Fit Fab</span> Exists
            </h2>

            <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light">
              Fit Fab Studio wasn't built for those seeking a temporary fix. It was built for those who understand that strength is forged through repetition, discipline, and uncompromising focus.
            </p>

            <div className="space-y-6 mt-4">
              {[
                { title: "Serious Training", text: "No gimmicks. No shortcuts. We provide the environment and the equipment for real, measurable progress." },
                { title: "Built for Consistency", text: "We prioritize long-term development over quick results, fostering a mindset of persistence and resilience." },
                { title: "Training Economy", text: "Every session counts. We focus on high-impact movements and structured programming to maximize your time." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1.5 w-2 h-2 bg-primary shrink-0" />
                  <div>
                    <h3 className="text-white font-display font-bold uppercase tracking-wide mb-1 italic">{item.title}</h3>
                    <p className="text-sm text-white/50">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <a href="#contact" className="inline-flex items-center gap-2 group text-white font-bold uppercase tracking-widest text-sm hover:text-primary transition-colors">
                Visit the Gym <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Imagery */}
          <div className="relative">
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
              <div className="absolute bottom-10 left-10 p-6 bg-primary text-black max-w-[200px] hidden sm:block">
                <p className="font-display font-black text-3xl leading-none uppercase mb-2 italic">100%</p>
                <p className="text-[10px] font-bold uppercase tracking-widest leading-tight">Focus on Proper Training Mechanics</p>
              </div>
            </motion.div>

            {/* Inset Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -bottom-10 -right-10 w-2/3 aspect-video border-4 border-background overflow-hidden hidden md:block"
            >
              <img src={image2} alt="Gym Setup" className="w-full h-full object-cover" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

