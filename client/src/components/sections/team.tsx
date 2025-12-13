import { motion } from "framer-motion";
import coachFaisal from "@assets/fiza_1765660702966.jpg";
import coachMidhun from "@assets/min_sur_1765660788360.jpg";
import coachMidhul from "@assets/midu_1765660822078.jpg";
import { Badge } from "@/components/ui/badge";

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
    image: coachMidhun,
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
    image: coachMidhul,
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
          className="text-center mb-20"
        >
          <span className="text-primary font-bold tracking-widest uppercase mb-2 block">Leadership</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold">OUR COACHING TEAM</h2>
        </motion.div>

        <div className="space-y-24">
          {/* Head Coach Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-sm overflow-hidden border border-primary/20 bg-card">
                <img
                  src={coaches[0].image}
                  alt={coaches[0].name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 border border-primary/20 -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px bg-primary w-12" />
                <span className="text-primary font-bold uppercase tracking-widest">Head Coach Leadership</span>
              </div>
              <h3 className="text-5xl font-display font-bold mb-2">{coaches[0].name}</h3>
              <p className="text-xl text-white/60 mb-8 font-medium">{coaches[0].role}</p>
              
              <ul className="space-y-4 mb-8">
                {coaches[0].credentials.map((cred, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span className="text-lg text-gray-300">{cred}</span>
                  </li>
                ))}
              </ul>
              
              <p className="text-muted-foreground text-lg leading-relaxed border-l-2 border-white/10 pl-6 italic">
                "{coaches[0].description}"
              </p>
            </motion.div>
          </div>

          {/* Senior Team Grid */}
          <div>
            <div className="flex items-center gap-4 mb-12 justify-center">
              <div className="h-px bg-white/10 w-24" />
              <span className="text-white/40 font-bold uppercase tracking-widest">Senior Coaching Team</span>
              <div className="h-px bg-white/10 w-24" />
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {coaches.slice(1).map((coach, index) => (
                <motion.div
                  key={coach.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-card border border-white/5 p-8 hover:border-primary/30 transition-colors group"
                >
                  <div className="flex flex-col sm:flex-row gap-8 items-start">
                    <div className="w-32 h-32 shrink-0 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary transition-colors">
                      <img
                        src={coach.image}
                        alt={coach.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-bold mb-1">{coach.name}</h3>
                      <p className="text-primary text-sm font-bold uppercase tracking-wider mb-4">{coach.role}</p>
                      
                      <ul className="space-y-2">
                        {coach.credentials.map((cred, i) => (
                          <li key={i} className="text-sm text-gray-400 flex items-center gap-2">
                            <span className="w-1 h-1 bg-white/20 rounded-full" />
                            {cred}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
