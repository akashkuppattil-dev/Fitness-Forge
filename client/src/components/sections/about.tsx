import { motion } from "framer-motion";
import image1 from "@assets/about_bg_dark.png";
import image2 from "@assets/about_bg_light.png";

export function About() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-black relative" id="about">
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
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">About Fit Fab</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold leading-[0.9] tracking-tight uppercase text-white">
              Discipline.<br />
              Consistency.<br />
              <span className="text-primary">Transformation.</span>
            </h2>

            <p className="text-lg text-white/80 leading-relaxed font-light">
              Fit Fab Family Fitness Studio is a premium, family-focused fitness center located in Feroke, Kozhikode.
              We are built for individuals and families who value structured training, measurable progress, and long-term health.
            </p>

            {/* Philosophy Grid */}
            <div className="grid sm:grid-cols-1 gap-6 mt-4">
              <div className="bg-white/5 border border-white/10 p-6 hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-display font-bold uppercase text-white mb-2">Our Philosophy</h3>
                <ul className="space-y-3">
                  {[
                    { title: "Discipline", text: "Training correctly." },
                    { title: "Consistency", text: "Routine over shortcuts." },
                    { title: "Transformation", text: "Lifestyle change." }
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span><strong className="text-white uppercase">{item.title}</strong> – {item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Core Values - Replacing Stats */}
            <div className="grid grid-cols-2 gap-4 mt-6 pt-8 border-t border-white/10">
              <div className="bg-white/5 p-4 border-l-2 border-primary">
                <h4 className="font-display font-bold text-sm text-white uppercase mb-1">Results-Driven</h4>
                <p className="text-xs text-white/60">Measurable progress</p>
              </div>
              <div className="bg-white/5 p-4 border-l-2 border-primary">
                <h4 className="font-display font-bold text-sm text-white uppercase mb-1">Family-Friendly</h4>
                <p className="text-xs text-white/60">All ages welcome</p>
              </div>
              <div className="bg-white/5 p-4 border-l-2 border-primary">
                <h4 className="font-display font-bold text-sm text-white uppercase mb-1">Expert Coaching</h4>
                <p className="text-xs text-white/60">Champion-trained</p>
              </div>
              <div className="bg-white/5 p-4 border-l-2 border-primary">
                <h4 className="font-display font-bold text-sm text-white uppercase mb-1">Premium Equipment</h4>
                <p className="text-xs text-white/60">Professional-grade</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Dual Images Composition */}
          <div className="relative h-[600px] w-full hidden lg:block">
            {/* Main Back Image (Tuf Nut/Dark) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute top-0 right-0 w-[85%] h-[70%] z-10"
            >
              <img
                src={image1}
                alt="Functional Training Area"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 border border-white/10"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay pointer-events-none" />
            </motion.div>

            {/* Overlapping Front Image (Rig/Light) */}
            <motion.div
              initial={{ opacity: 0, y: 50, x: -50 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute bottom-0 left-0 w-[70%] h-[55%] z-20 shadow-2xl"
            >
              <img
                src={image2}
                alt="Gym Rig Setup"
                className="w-full h-full object-cover border-4 border-black"
              />

              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-primary text-black p-6 w-48 shadow-xl hidden xl:block">
                <p className="font-display font-bold text-lg leading-none uppercase">Premium<br />Equipment</p>
              </div>
            </motion.div>
          </div>

          {/* Mobile Stacked Images */}
          <div className="flex flex-col gap-4 lg:hidden">
            <img src={image1} alt="Gym Interior" className="w-full h-64 sm:h-80 object-cover rounded-md" />
            <img src={image2} alt="Gym Equipment" className="w-full h-64 sm:h-80 object-cover rounded-md" />
          </div>

        </div>
      </div>
    </section>
  );
}
