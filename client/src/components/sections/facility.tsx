import { motion } from "framer-motion";
import facilityImage1 from "@assets/stock_images/energetic_group_work_53ab01ee.jpg";
import facilityImage2 from "@assets/stock_images/energetic_group_work_460b0d90.jpg"; 
import sqFtImage from "@assets/500ooooooo_1765664298612.avif";
import acImage from "@assets/ac_1765664233826.avif";

export function Facility() {
  return (
    <section className="py-24 bg-card border-y border-white/5" id="facility">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">PREMIUM FACILITY</h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 h-[600px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-full overflow-hidden group row-span-2"
          >
            <img
              src={facilityImage1}
              alt="Group Workout"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-3xl font-display font-bold text-white mb-2">HIGH ENERGY ATMOSPHERE</h3>
              <p className="text-white/80">Train with passion in a motivating environment</p>
            </div>
          </motion.div>

          <div className="grid grid-rows-2 gap-4 h-full">
            <motion.div
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="relative overflow-hidden group"
            >
               <img
                  src={facilityImage2}
                  alt="Strength Training"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
               <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-2xl font-display font-bold text-white mb-1">DEDICATED ZONES</h3>
                  <p className="text-white/80 text-sm">Specialized areas for every discipline</p>
               </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
                <motion.div
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.3 }}
                   className="bg-primary/5 border border-primary/10 p-4 flex flex-col justify-center items-center text-center relative overflow-hidden group"
                >
                   <img src={sqFtImage} alt="Gym Equipment" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity" />
                   <h3 className="text-3xl font-display font-black text-primary mb-1 relative z-10">5000+</h3>
                   <p className="text-muted-foreground text-xs font-medium uppercase tracking-widest relative z-10">Sq. Ft.</p>
                   <p className="text-white/50 text-[10px] uppercase mt-1 relative z-10">Gym Equipment</p>
                </motion.div>

                <motion.div
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.4 }}
                   className="bg-white/5 border border-white/10 p-4 flex flex-col justify-center items-center text-center relative overflow-hidden group"
                >
                   <img src={acImage} alt="AC Gym" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity" />
                   <h3 className="text-3xl font-display font-black text-white mb-1 relative z-10">AC</h3>
                   <p className="text-muted-foreground text-xs font-medium uppercase tracking-widest relative z-10">Fully Air Conditioned</p>
                   <p className="text-white/50 text-[10px] uppercase mt-1 relative z-10">Premium Comfort</p>
                </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
