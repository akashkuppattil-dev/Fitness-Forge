import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import gymImg from "@assets/program_gym.png";
import crossfitImg from "@assets/program_crossfit.png";
import zumbaImg from "@assets/program_zumba.png";
import aerobicsImg from "@assets/program_aerobics.png";

const programs = [
  {
    title: "CrossFit / Functional",
    short: "Train like an athlete.",
    desc: "High-intensity functional training that challenges the body through constantly varied movements. Ideal for members seeking full-body performance and conditioning.",
    bullets: ["Endurance", "Stamina", "Explosive power"],
    image: crossfitImg
  },
  {
    title: "Zumba",
    short: "Fitness like celebration.",
    desc: "A high-energy, dance-based workout combining cardio training and rhythmic movement. Perfect for those who enjoy fun, music-driven workouts.",
    bullets: ["Improved cardiovascular health", "High calorie burn", "Stress relief"],
    image: zumbaImg
  },
  {
    title: "Aerobics",
    short: "Move better. Feel stronger.",
    desc: "Structured group workouts designed to improve flexibility and coordination. An excellent choice for balanced, full-body conditioning in a guided group setting.",
    bullets: ["Cardiovascular fitness", "Muscular endurance", "Flexibility & coordination"],
    image: aerobicsImg
  },
  {
    title: "Gym (Strength Training)",
    short: "Precision. Power. Progress.",
    desc: "A state-of-the-art strength training facility equipped with premium, biomechanically advanced machines. Focused on strength development, muscle hypertrophy, and overall conditioning.",
    bullets: ["Strength development", "Muscle hypertrophy", "Overall conditioning"],
    image: gymImg
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Services() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-background relative" id="services">
      <div className="container mx-auto px-4">

        {/* Header Section */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-white uppercase tracking-tighter">
              Premium <span className="text-primary">Programs</span>
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto" />
            <h3 className="text-xl md:text-2xl font-display font-bold text-white uppercase tracking-widest">
              Train with purpose. Perform with confidence.
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed font-light">
              Experience a complete fitness ecosystem designed to build strength, endurance, and total-body performance—guided by structure, discipline, and professional coaching.
            </p>
          </motion.div>
        </div>

        {/* Programs Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {programs.map((program) => (
            <motion.div
              key={program.title}
              variants={item}
              className="group bg-card border border-white/5 overflow-hidden flex flex-col h-full hover:border-primary/50 transition-all duration-300"
            >
              {/* Image Header */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

                {/* Overlay Text */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-bold text-primary uppercase tracking-widest mb-1 block">
                    {program.short}
                  </span>
                  <h3 className="text-xl font-display font-bold text-white uppercase leading-none">
                    {program.title}
                  </h3>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {program.desc}
                </p>

                <ul className="space-y-2 mt-auto">
                  {program.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-white/80 uppercase font-bold tracking-wider">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Optional CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-white/50 text-sm font-bold uppercase tracking-widest mb-6">Ready to start training the right way?</p>
          <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-primary text-black px-6 sm:px-8 py-3 sm:py-4 font-bold text-base sm:text-lg uppercase tracking-wider hover:bg-white transition-colors w-full sm:w-auto rounded-md">
            Join Now <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
