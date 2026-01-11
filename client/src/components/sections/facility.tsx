import { default as facilityMain, default as gridImg3 } from "@assets/about_bg_light.png";
import gridImg1 from "@assets/bixing_1765663123180.png";
import gridImg2 from "@assets/dummbel_1765662969002.avif";
import { motion } from "framer-motion";

export function Facility() {
  const gallery = [gridImg1, gridImg2, gridImg3];

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-background relative overflow-hidden mt-4 sm:mt-6 md:mt-8 lg:mt-10" id="facility">
      <div className="w-[95%] mx-auto px-2 sm:px-4 md:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 md:mb-16 lg:mb-20 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 md:gap-8"
          >
            <div className="max-w-3xl space-y-4 md:space-y-6">
              <div className="flex items-center gap-3 sm:gap-4 justify-center lg:justify-start">
                <div className="h-px w-10 sm:w-12 bg-primary"></div>
                <span className="text-primary font-bold tracking-[0.2em] uppercase text-[10px] sm:text-xs md:text-sm">Industrial Scale</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black text-white uppercase tracking-tighter leading-[1.1]">
                A Space Built For <br /><span className="text-primary italic">Performance.</span>
              </h2>
            </div>
            <p className="text-white/40 text-xs sm:text-sm md:text-base lg:text-lg max-w-sm uppercase font-bold tracking-widest leading-tight text-center lg:text-right">
              5000+ Square Feet of Uncompromising Training Territory.
            </p>
          </motion.div>
        </div>

        <div className="space-y-6 md:space-y-8">
          {/* Main Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full relative overflow-hidden group border border-white/5 h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px]"
          >
            <img
              src={facilityMain}
              alt="The Studio Main Area"
              className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col lg:flex-row lg:items-end justify-between gap-4 md:gap-8 z-10">
              <div className="space-y-1 sm:space-y-2">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white uppercase tracking-tighter italic">The Main Deck</h3>
                <p className="text-white/60 max-w-md text-[10px] sm:text-xs md:text-sm lg:text-base uppercase tracking-widest">Structural strength & high-performance territory.</p>
              </div>
            </div>
          </motion.div>

          {/* New 3-Photo Grid */}
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {gallery.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="aspect-square overflow-hidden border border-white/5 relative group"
              >
                <img
                  src={img}
                  alt={`Facility Detail ${index + 1}`}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-overlay" />
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-white/5 p-5 sm:p-6 md:p-8 lg:p-10 space-y-4 md:space-y-6 group hover:border-primary/50 transition-colors"
            >
              <div className="w-10 sm:w-12 h-px bg-primary" />
              <h4 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-white uppercase tracking-tight italic">Precision Zoned</h4>
              <p className="text-white/40 text-xs sm:text-sm md:text-base leading-relaxed">Dedicated blocks for Strength, Conditioning, and Mobility—ensuring no overlaps and maximum focus.</p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-white/5 p-5 sm:p-6 md:p-8 lg:p-10 space-y-4 md:space-y-6 group hover:border-primary/50 transition-colors"
            >
              <div className="w-10 sm:w-12 h-px bg-primary" />
              <h4 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-white uppercase tracking-tight italic">Climate Control</h4>
              <p className="text-white/40 text-xs sm:text-sm md:text-base leading-relaxed">Fully air-conditioned environment to maintain peak performance output across all seasons.</p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-card border border-white/5 p-5 sm:p-6 md:p-8 lg:p-10 space-y-4 md:space-y-6 group hover:border-primary/50 transition-colors"
            >
              <div className="w-10 sm:w-12 h-px bg-primary" />
              <h4 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-white uppercase tracking-tight italic">Modern Hygenic</h4>
              <p className="text-white/40 text-xs sm:text-sm md:text-base leading-relaxed">Sanitized locker rooms and high-frequency cleaning cycles to uphold the standard of professional training.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

