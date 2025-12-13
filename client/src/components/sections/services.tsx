import { motion } from "framer-motion";
import serviceImage from "@assets/stock_images/group_fitness_class__b2f66543.jpg";
import { Dumbbell, Users, Music, Activity } from "lucide-react";

const services = [
  { icon: Dumbbell, label: "Gym" },
  { icon: Activity, label: "Cross Fit" },
  { icon: Music, label: "Zumba" },
  { icon: Users, label: "Aerobics" },
];

export function Services() {
  return (
    <section className="py-24 bg-background relative overflow-hidden" id="services">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 leading-none">
              PREMIUM FITNESS
              <br />
              <span className="text-primary">CENTRE @CALICUT</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-12">
              Experience the ultimate fitness destination. We offer a comprehensive range of disciplines designed to push your limits and achieve your goals.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div 
                  key={service.label} 
                  className="flex items-center gap-4 p-4 border border-white/10 hover:border-primary/50 transition-colors group bg-card/50"
                  data-testid={`service-${service.label}`}
                >
                  <div className="p-3 bg-primary/10 text-primary rounded-sm group-hover:bg-primary group-hover:text-black transition-colors">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <span className="font-display font-bold text-xl tracking-wider uppercase">{service.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 border-2 border-primary/20 z-0 translate-x-4 translate-y-4" />
            <div className="relative z-10 aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <img
                src={serviceImage}
                alt="Fitness Class"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="font-display font-bold text-3xl">JOIN THE MOVEMENT</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
