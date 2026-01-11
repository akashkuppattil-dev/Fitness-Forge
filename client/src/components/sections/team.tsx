import coachFaisal from "@assets/coach_faisal.jpg";
import coachMidhul from "@assets/coach_midhul.jpg";
import coachMidhun from "@assets/coach_midhun.jpg";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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
    <section className="py-8 md:py-12 lg:py-16 bg-background relative overflow-hidden mt-4 sm:mt-6 md:mt-8 lg:mt-10" id="team">
      <div className="w-[95%] mx-auto px-2 sm:px-4 md:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="mb-12 md:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8"
          >
            <div className="max-w-3xl space-y-4 md:space-y-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="h-px w-10 sm:w-12 bg-primary"></div>
                <span className="text-primary font-bold tracking-[0.2em] uppercase text-[10px] sm:text-xs md:text-sm">Expertise</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black text-white uppercase tracking-tighter leading-[1.1]">
                Coaches Who Define <br /><span className="text-primary italic">The Standard.</span>
              </h2>
            </div>
          </motion.div>
        </div>

        {/* Coaches Carousel - Mobile & Grid - Desktop */}
        <div className="relative z-10">
          {/* Mobile Carousel */}
          <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 -mx-4 px-4 pb-4" style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch' }}>
            {coaches.map((coach, index) => (
              <motion.div
                key={coach.id}
                initial={{ opacity: 1 }}
                className="group flex flex-col bg-card border border-white/5 overflow-hidden flex-shrink-0 snap-start"
                style={{ width: 'calc(100vw - 80px)', maxWidth: '320px' }}
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
                  <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-4 h-4 text-primary" />
                  </div>
                </div>

                {/* Info Area - Compact Padding */}
                <div className="p-3 sm:p-4 flex flex-col gap-2 sm:gap-3">
                  <div>
                    <p className="text-primary font-bold uppercase tracking-widest text-[7px] xs:text-[8px] sm:text-[9px] mb-0.5 line-clamp-1">
                      {coach.title}
                    </p>
                    <h3 className="text-base xs:text-lg sm:text-xl font-display font-bold text-white uppercase tracking-tight italic line-clamp-1">
                      {coach.name}
                    </h3>
                  </div>

                  <div className="space-y-0.5 sm:space-y-1">
                    {coach.achievements.slice(0, 2).map((item, i) => (
                      <div key={i} className="flex items-start gap-1">
                        <div className="text-white/40 text-[8px] xs:text-[9px] sm:text-[10px] leading-tight font-medium line-clamp-1">
                          {item}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="h-px w-full bg-white/5 group-hover:bg-primary transition-colors duration-500 mt-1 sm:mt-2" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
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
                  <div className="absolute top-0 right-0 p-2 sm:p-3 md:p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                </div>

                {/* Info Area - Compact Padding */}
                <div className="p-4 sm:p-5 md:p-6 flex flex-col gap-3 sm:gap-4">
                  <div>
                    <p className="text-primary font-bold uppercase tracking-widest text-[8px] sm:text-[9px] md:text-[9px] mb-0.5 sm:mb-1">
                      {coach.title}
                    </p>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-white uppercase tracking-tight italic">
                      {coach.name}
                    </h3>
                  </div>

                  <div className="space-y-1 sm:space-y-1.5 md:space-y-2">
                    {coach.achievements.map((item, i) => (
                      <div key={i} className="flex items-start gap-1.5 sm:gap-2">
                        <div className="text-white/40 text-[9px] xs:text-[10px] sm:text-[11px] md:text-[11px] leading-tight font-medium">
                          {item}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="h-px w-full bg-white/5 group-hover:bg-primary transition-colors duration-500 mt-2 md:mt-3" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Authority Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 lg:mt-24 border-t border-white/5 pt-8 md:pt-10 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8"
        >
          <p className="text-white/30 text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-center md:text-left order-2 md:order-1">
            Vetted Championship Pedigree & Professional Certifications
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 opacity-20 filter grayscale invert dark:invert-0 order-1 md:order-2">
            <span className="text-white font-display font-black text-base sm:text-lg md:text-xl lg:text-2xl uppercase italic">EREPS</span>
            <span className="text-white font-display font-black text-base sm:text-lg md:text-xl lg:text-2xl uppercase italic">ACE</span>
            <span className="text-white font-display font-black text-base sm:text-lg md:text-xl lg:text-2xl uppercase italic">REPS</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

