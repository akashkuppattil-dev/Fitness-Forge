import { motion } from "framer-motion";
import facilityMain from "@assets/about_bg_light.png";
import gridImg1 from "@assets/bixing_1765663123180.png";
import gridImg2 from "@assets/dummbel_1765662969002.avif";
import gridImg3 from "@assets/about_bg_light.png";

export function Facility() {
  const gallery = [gridImg1, gridImg2, gridImg3];

  return (
    <section className="py-10 bg-background relative overflow-hidden" id="facility">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="mb-20 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-8"
          >
            <div className="max-w-3xl space-y-6">
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <div className="h-px w-12 bg-primary"></div>
                <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">Industrial Scale</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-black text-white uppercase tracking-tighter leading-none">
                A Space Built For <br /><span className="text-primary italic">Performance.</span>
              </h2>
            </div>
            <p className="text-white/40 text-lg max-w-sm uppercase font-bold tracking-widest leading-tight text-center lg:text-right">
              5000+ Square Feet of Uncompromising Training Territory.
            </p>
          </motion.div>
        </div>

        <div className="space-y-8">
          {/* Main Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full relative overflow-hidden group border border-white/5 h-[400px] md:h-[600px]"
          >
            <img
              src={facilityMain}
              alt="The Studio Main Area"
              className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            <div className="absolute inset-x-0 bottom-0 p-8 lg:p-12 flex flex-col lg:flex-row lg:items-end justify-between gap-8 z-10">
              <div className="space-y-2">
                <h3 className="text-3xl font-display font-bold text-white uppercase tracking-tighter italic">The Main Deck</h3>
                <p className="text-white/60 max-w-md text-sm uppercase tracking-widest">Structural strength & high-performance territory.</p>
              </div>
            </div>
          </motion.div>

          {/* New 3-Photo Grid */}
          <div className="grid md:grid-cols-3 gap-6">
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

          <div className="lg:col-span-12 grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-white/5 p-10 space-y-6 group hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-px bg-primary" />
              <h4 className="text-2xl font-display font-bold text-white uppercase tracking-tight italic">Precision Zoned</h4>
              <p className="text-white/40 text-sm leading-relaxed">Dedicated blocks for Strength, Conditioning, and Mobility—ensuring no overlaps and maximum focus.</p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-white/5 p-10 space-y-6 group hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-px bg-primary" />
              <h4 className="text-2xl font-display font-bold text-white uppercase tracking-tight italic">Climate Control</h4>
              <p className="text-white/40 text-sm leading-relaxed">Fully air-conditioned environment to maintain peak performance output across all seasons.</p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-card border border-white/5 p-10 space-y-6 group hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-px bg-primary" />
              <h4 className="text-2xl font-display font-bold text-white uppercase tracking-tight italic">Modern Hygenic</h4>
              <p className="text-white/40 text-sm leading-relaxed">Sanitized locker rooms and high-frequency cleaning cycles to uphold the standard of professional training.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

