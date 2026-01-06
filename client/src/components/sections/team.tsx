import { motion } from "framer-motion";
import coachFaisal from "@assets/fiza_1765660702966.jpg";
import { Award, Target, Users2, Shield } from "lucide-react";

const coaches = [
  {
    id: "faisal",
    name: "Faisal Fayzi",
    role: "Head Coach & Founder",
    image: coachFaisal,
    credentials: [
      "Mr. Kerala & Mr. Calicut (55kg)",
      "2nd Dan Black Belt – Taiji Kando",
      "EREPS Level 4 & ACE Certified Coach"
    ],
    description: "Leadership that establishes authority, trust, and coaching standards across the studio.",
    quote: "Health is wealth. Fitness is not just about the body; it's about discipline, mental strength, and building a lifestyle that lasts.",
    featured: true
  },
  {
    id: "midhun",
    name: "Midhun Suresh ZGC",
    role: "Founder & Senior Trainer",
    credentials: [
      "Certified Fitness Trainer",
      "Mr. Calicut (2014, 2020, 2024)",
      "Arm Wrestling Champion",
      "Diet & Online Training Specialist"
    ],
    featured: false
  },
  {
    id: "midhul",
    name: "Midhul AJ",
    role: "Fitness Coach",
    credentials: [
      "Level 4 Certified Fitness Instructor",
      "Mr. South India 2024",
      "Mr. Kerala 2024",
      "Mr. Calicut 2024 & 2025"
    ],
    featured: false
  }
];

const teamValues = [
  {
    icon: Award,
    title: "Championship Credentials",
    desc: "State and national competition winners"
  },
  {
    icon: Target,
    title: "Precision Training",
    desc: "Technique-driven, results-focused approach"
  },
  {
    icon: Users2,
    title: "Member-Centered",
    desc: "Personalized guidance for every fitness level"
  },
  {
    icon: Shield,
    title: "Professional Standards",
    desc: "International certifications & qualifications"
  }
];

export function Team() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-background relative overflow-hidden" id="team">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-0.5 w-8 bg-primary" />
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">Leadership</span>
            <div className="h-0.5 w-8 bg-primary" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white uppercase tracking-tight mb-6">
            Our Coaching <span className="text-primary">Team</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional champions and certified experts dedicated to your transformation.
          </p>
        </motion.div>

        {/* Team Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-6 mb-24"
        >
          {teamValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-card border border-white/5 hover:border-primary/30 transition-all group"
            >
              <div className="w-14 h-14 bg-primary/10 border border-primary/20 rounded-sm flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-bold text-white text-sm uppercase mb-2 tracking-wide">{value.title}</h3>
              <p className="text-muted-foreground text-xs">{value.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Head Coach - Featured Section */}
        <div className="mb-32">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-1"
            >
              <div className="relative w-full max-w-md mx-auto">
                {/* Decorative Frame */}
                <div className="absolute -inset-4 border-2 border-primary/20 rounded-sm" />
                <div className="absolute -inset-2 bg-gradient-to-br from-primary/10 to-transparent rounded-sm" />

                {/* Image Container */}
                <div className="relative overflow-hidden rounded-sm">
                  <img
                    src={coaches[0].image}
                    alt={coaches[0].name}
                    className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />

                  {/* Bottom Badge */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/90 backdrop-blur-sm p-4 border-t border-primary/30">
                    <p className="text-primary font-display font-bold text-sm uppercase tracking-widest text-center">
                      Championship Pedigree
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2"
            >
              <div className="space-y-6">
                <div>
                  <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-2">{coaches[0].role}</p>
                  <h3 className="text-4xl md:text-6xl font-display font-bold text-white mb-4 uppercase tracking-tight">
                    {coaches[0].name}
                  </h3>
                  <p className="text-white/70 text-lg leading-relaxed">
                    {coaches[0].description}
                  </p>
                </div>

                {/* Credentials */}
                <div className="space-y-3">
                  {coaches[0].credentials.map((cred, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                      <p className="text-white/80 font-medium text-sm uppercase tracking-wide">{cred}</p>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <div className="bg-white/5 border-l-4 border-primary p-6 mt-8">
                  <p className="text-white/80 italic leading-relaxed">
                    "{coaches[0].quote}"
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Senior Trainers Section */}
        <div>
          <div className="flex items-center gap-4 mb-12 justify-center">
            <div className="h-px bg-gradient-to-r from-transparent to-white/20 w-full max-w-[150px]" />
            <h3 className="text-white font-display font-bold uppercase tracking-widest text-xl whitespace-nowrap">
              Senior Trainers
            </h3>
            <div className="h-px bg-gradient-to-l from-transparent to-white/20 w-full max-w-[150px]" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {coaches.slice(1).map((coach, index) => (
              <motion.div
                key={coach.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group bg-card border border-white/10 hover:border-primary/50 transition-all duration-500 overflow-hidden"
              >
                {/* Top Accent Bar */}
                <div className="h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                <div className="p-8">
                  <div className="text-center mb-6">
                    <h4 className="text-2xl md:text-3xl font-display font-bold text-white mb-2 uppercase tracking-tight group-hover:text-primary transition-colors">
                      {coach.name}
                    </h4>
                    <p className="text-primary/70 text-xs font-bold uppercase tracking-[0.3em]">
                      {coach.role}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {coach.credentials.map((cred, i) => (
                      <div key={i} className="flex items-start gap-3 pb-3 border-b border-white/5 last:border-0">
                        <div className="w-1 h-1 bg-primary rounded-full mt-2 shrink-0" />
                        <p className="text-white/70 text-sm">{cred}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
