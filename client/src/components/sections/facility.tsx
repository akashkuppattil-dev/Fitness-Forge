import { motion } from "framer-motion";
import facilityImage1 from "@assets/stock_images/energetic_group_work_53ab01ee.jpg";
import facilityImage2 from "@assets/stock_images/energetic_group_work_460b0d90.jpg";
import sqFtImage from "@assets/500_1765664280276.jpg";
import acImage from "@assets/ac_1765664233826.avif";

export function Facility() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-card border-y border-white/5" id="facility">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-0.5 w-8 bg-primary" />
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">The Studio</span>
            <div className="h-0.5 w-8 bg-primary" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white uppercase tracking-tight">
            Premium <span className="text-primary">Facility</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 h-auto md:h-[600px] lg:h-[700px]">
          {/* Large Featured Image - Left Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-80 md:h-full overflow-hidden group row-span-2 border border-white/5"
          >
            <img
              src={facilityImage1}
              alt="Group Workout"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
            <div className="absolute bottom-0 left-0 p-8 lg:p-12 w-full bg-gradient-to-t from-black/90 to-transparent">
              <h3 className="text-3xl lg:text-4xl font-display font-bold text-white mb-2 uppercase tracking-wide">High Energy Atmosphere</h3>
              <p className="text-white/80 font-light tracking-wide">Train with passion in a motivating environment</p>
            </div>
          </motion.div>

          {/* Right Column - 3 Images Grid */}
          <div className="grid grid-rows-2 gap-4 h-full">
            {/* Top Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative h-64 md:h-full overflow-hidden group border border-white/5"
            >
              <img
                src={facilityImage2}
                alt="Strength Training"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/90 to-transparent">
                <h3 className="text-2xl lg:text-3xl font-display font-bold text-white mb-1 uppercase tracking-wide">Dedicated Zones</h3>
                <p className="text-white/80 text-sm font-light tracking-wide">Specialized areas for every discipline</p>
              </div>
            </motion.div>

            {/* Bottom Two Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* 5000+ Sq Ft Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative h-48 sm:h-auto overflow-hidden group border border-white/5"
              >
                <img
                  src={sqFtImage}
                  alt="Gym Equipment"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/90 mix-blend-multiply transition-colors duration-500" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
                  <h3 className="text-4xl lg:text-5xl font-display font-black text-white mb-2">5000+</h3>
                  <p className="text-white font-bold text-xs uppercase tracking-[0.2em] border-b-2 border-white/30 pb-1">Sq. Ft.</p>
                  <p className="text-white/90 text-[10px] uppercase mt-2 font-bold tracking-wide">Gym Equipment</p>
                </div>
              </motion.div>

              {/* AC Fully Conditioned Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="relative h-48 sm:h-auto overflow-hidden group border border-white/5"
              >
                <img
                  src={acImage}
                  alt="AC Gym"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
                  <h3 className="text-4xl lg:text-5xl font-display font-black text-white mb-2 drop-shadow-lg">AC</h3>
                  <p className="text-primary font-bold text-xs uppercase tracking-[0.2em] bg-black/60 px-2 py-1 rounded-sm">Fully Conditioned</p>
                  <p className="text-white/80 text-[10px] uppercase mt-2 font-medium tracking-wide">Premium Comfort</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
