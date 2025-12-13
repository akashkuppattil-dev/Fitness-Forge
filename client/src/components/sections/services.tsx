import { motion } from "framer-motion";
import serviceBg from "@assets/bixing_1765663123180.png";
import { Dumbbell, Users, Music, Activity } from "lucide-react";

const services = [
  { 
    icon: Dumbbell, 
    label: "Gym",
    desc: "State-of-the-art strength training facility with premium equipment.",
    details: "Focus on strength development, hypertrophy, and conditioning using biomechanically perfect machinery."
  },
  { 
    icon: Activity, 
    label: "Cross Fit",
    desc: "High-intensity functional movements for complete athletic performance.",
    details: "Build endurance, stamina, and power through constantly varied functional movements."
  },
  { 
    icon: Music, 
    label: "Zumba",
    desc: "Dance-based fitness program that makes working out feel like a party.",
    details: "Cardiovascular conditioning set to energetic music, perfect for burning calories while having fun."
  },
  { 
    icon: Users, 
    label: "Aerobics",
    desc: "Rhythmic physical exercise for cardiovascular health.",
    details: "Group sessions designed to improve flexibility, muscular strength, and cardio-vascular fitness."
  },
];

export function Services() {
  return (
    <section className="py-24 bg-background relative" id="services">
      <div className="container mx-auto px-4">
        
        {/* Header Section with Overlay Image */}
        <div className="relative rounded-lg overflow-hidden mb-20 h-[500px] group">
          <img 
            src={serviceBg} 
            alt="Gym Interior" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/80 flex items-center justify-center p-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl"
            >
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">
                PREMIUM FITNESS
                <br />
                <span className="text-primary">CENTRE @CALICUT</span>
              </h2>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                Experience the ultimate fitness destination. We offer a comprehensive range of disciplines designed to push your limits and achieve your goals.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-white/5 p-8 hover:border-primary/30 transition-all group"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 bg-primary/10 rounded-sm text-primary group-hover:bg-primary group-hover:text-black transition-colors shrink-0">
                  <service.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold mb-3 text-white group-hover:text-primary transition-colors">
                    {service.label}
                  </h3>
                  <p className="text-white/80 mb-3 font-medium">
                    {service.desc}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed border-l-2 border-white/10 pl-3">
                    {service.details}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
