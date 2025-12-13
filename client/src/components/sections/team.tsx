import { motion } from "framer-motion";
import coachFaisal from "@assets/fiza_1765660702966.jpg";
import { Quote } from "lucide-react";

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
    description: "His leadership establishes authority, trust, and coaching standards across the studio.",
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

export function Team() {
  return (
    <section className="py-24 bg-background" id="team">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 pt-16 md:pt-0"
        >
          <span className="text-primary font-bold tracking-widest uppercase mb-2 block">Leadership</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold relative z-10 bg-background/50 inline-block px-4 backdrop-blur-sm rounded-sm">OUR COACHING TEAM</h2>
        </motion.div>

        <div className="space-y-24">
          {/* Head Coach Section */}
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mb-8 relative"
            >
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary p-1">
                <img
                  src={coaches[0].image}
                  alt={coaches[0].name}
                  className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary text-black font-bold px-6 py-1 uppercase tracking-wider text-sm whitespace-nowrap">
                Head Coach
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-5xl font-display font-bold mb-2">{coaches[0].name}</h3>
              <p className="text-xl text-white/60 mb-8 font-medium">{coaches[0].role}</p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                {coaches[0].credentials.map((cred, i) => (
                  <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                    {cred}
                  </span>
                ))}
              </div>
              
              <div className="relative bg-card p-8 md:p-12 border border-white/5 rounded-lg">
                <Quote className="absolute top-8 left-8 w-8 h-8 text-primary/20" />
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed italic relative z-10">
                  "Health is wealth. Fitness is not just about the body; it's about discipline, mental strength, and building a lifestyle that lasts. My goal is to guide you through a journey of transformation that goes beyond the gym walls."
                </p>
              </div>
            </motion.div>
          </div>

          {/* Senior Team Grid */}
          <div>
            <div className="flex items-center gap-4 mb-12 justify-center">
              <div className="h-px bg-white/10 w-24" />
              <span className="text-white/40 font-bold uppercase tracking-widest">Senior Coaching Team</span>
              <div className="h-px bg-white/10 w-24" />
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {coaches.slice(1).map((coach, index) => (
                <motion.div
                  key={coach.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-card border border-white/5 p-8 hover:border-primary/30 transition-colors group text-center"
                >
                  <h3 className="text-2xl font-display font-bold mb-2 text-white group-hover:text-primary transition-colors">{coach.name}</h3>
                  <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-6">{coach.role}</p>
                  
                  <div className="h-px w-12 bg-white/10 mx-auto mb-6" />
                  
                  <ul className="space-y-3">
                    {coach.credentials.map((cred, i) => (
                      <li key={i} className="text-sm text-gray-400">
                        {cred}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
