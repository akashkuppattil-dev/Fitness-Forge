import { motion } from "framer-motion";
import coachFaisal from "@assets/coach_faisal.jpg";
import coachMidhun from "@assets/coach_midhun.jpg";
import coachMidhul from "@assets/coach_midhul.jpg";
import { ArrowUpRight, Trophy, Award, GraduationCap } from "lucide-react";

const coaches = [
  {
    id: "faisal",
    name: "Faisal Fayzi",
    title: "Founder & Fitness Coach",
    image: coachFaisal,
    achievements: [
      "🏆 Mr. Kerala & Mr. Calicut (55kg)",
      "🥋 2nd Dan Black Belt – Taiji Kando",
      "🏋️‍♂️ EREPS Level 4 & ACE Certified Coach"
    ]
  },
  {
    id: "midhun",
    name: "Midhun Suresh",
    title: "Founder & Certified Fitness Trainer",
    image: coachMidhun,
    achievements: [
      "🏅 Mr. Calicut – 2014, 2020, 2024",
      "🏆 Arm Wrestling Champion",
      "🎓 Certified Fitness Trainer"
    ]
  },
  {
    id: "midhul",
    name: "Midhul AJ",
    title: "Personal Fitness Coach",
    image: coachMidhul,
    achievements: [
      "🏆 Mr. South India 2024",
      "🏆 Mr. Kerala 2024",
      "🏆 Mr. Calicut 2024 & 2025",
      "🥉 Jr. Mr. Kerala 2019",
      "🎓 Level 4 Certified Fitness Instructor"
    ]
  }
];

export function Team() {
  return (
    <section className="py-10 bg-background relative overflow-hidden" id="team">
      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div className="max-w-3xl space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-primary"></div>
                <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">Expertise</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-black text-white uppercase tracking-tighter leading-none">
                Coaches Who Define <br /><span className="text-primary italic">The Standard.</span>
              </h2>
            </div>
          </motion.div>
        </div>

        {/* Coaches Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {coaches.map((coach, index) => (
            <motion.div
              key={coach.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group flex flex-col bg-card border border-white/5 overflow-hidden"
            >
              {/* Image Container - Height Reduced to Square Aspect */}
              <div className="relative aspect-square overflow-hidden bg-white/5">
                <img
                  src={coach.image}
                  alt={coach.name}
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${coach.id === 'faisal' ? 'object-top' : 'object-center'
                    }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-6 h-6 text-primary" />
                </div>
              </div>

              {/* Info Area - Compact Padding */}
              <div className="p-6 flex flex-col gap-4">
                <div>
                  <p className="text-primary font-bold uppercase tracking-widest text-[9px] mb-1">
                    {coach.title}
                  </p>
                  <h3 className="text-2xl font-display font-bold text-white uppercase tracking-tight italic">
                    {coach.name}
                  </h3>
                </div>

                <div className="space-y-2">
                  {coach.achievements.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="text-white/40 text-[11px] leading-snug font-medium">
                        {item}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="h-px w-full bg-white/5 group-hover:bg-primary transition-colors duration-500 mt-2" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Authority Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 lg:mt-24 border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <p className="text-white/30 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-center md:text-left">
            Vetted Championship Pedigree & Professional Certifications
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 opacity-20 filter grayscale invert dark:invert-0">
            <span className="text-white font-display font-black text-xl md:text-2xl uppercase italic">EREPS</span>
            <span className="text-white font-display font-black text-xl md:text-2xl uppercase italic">ACE</span>
            <span className="text-white font-display font-black text-xl md:text-2xl uppercase italic">REPS</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

