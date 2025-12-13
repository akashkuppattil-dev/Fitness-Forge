import { motion } from "framer-motion";
import facilityImage1 from "@assets/stock_images/modern_premium_gym_i_fcf5177c.jpg";
import facilityImage2 from "@assets/stock_images/gym_weights_dumbbell_ad63a672.jpg"; 

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
              alt="Main Gym Floor"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-3xl font-display font-bold text-white mb-2">WORLD CLASS EQUIPMENT</h3>
              <p className="text-white/80">Imported biomechanically perfect machinery</p>
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
                  alt="Weights Section"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
               <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-2xl font-display font-bold text-white mb-1">FREE WEIGHTS ZONE</h3>
                  <p className="text-white/80 text-sm">Extensive range of dumbbells and plates</p>
               </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
                <motion.div
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.3 }}
                   className="bg-primary/5 border border-primary/10 p-4 flex flex-col justify-center items-center text-center relative overflow-hidden"
                >
                   <h3 className="text-3xl font-display font-black text-primary mb-1">5000+</h3>
                   <p className="text-muted-foreground text-xs font-medium uppercase tracking-widest">Sq. Ft.</p>
                </motion.div>

                <motion.div
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.4 }}
                   className="bg-white/5 border border-white/10 p-4 flex flex-col justify-center items-center text-center relative overflow-hidden"
                >
                   <h3 className="text-3xl font-display font-black text-white mb-1">AC</h3>
                   <p className="text-muted-foreground text-xs font-medium uppercase tracking-widest">Fully Air Conditioned</p>
                </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
