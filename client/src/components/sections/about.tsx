import { motion } from "framer-motion";

const aboutPoints = [
  { title: "Brand Philosophy", desc: "Built on discipline, consistency, and transformation. Fitness is a structured lifestyle, not temporary motivation." },
  { title: "Coaching Excellence", desc: "Highly qualified team led by certified professionals with national and regional championship credentials." },
  { title: "Training Culture", desc: "Punctuality, consistency, and correct technique. We guide members to build habits, not shortcuts." },
  { title: "Environment", desc: "Clean, professional, family-friendly environment suitable for beginners and competitive athletes." }
];

export function About() {
  return (
    <section className="py-24 bg-background relative" id="about">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold tracking-widest uppercase mb-2 block">About Us</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              DISCIPLINE. <br />
              CONSISTENCY. <br />
              <span className="text-primary">TRANSFORMATION.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Fit Fab Family Fitness Studio is a premium, family-focused fitness center located in Feroke, Kozhikode. 
              We are dedicated to disciplined training, measurable results, and long-term health. Our professional coaching approach focuses on strength, conditioning, functional fitness, and overall wellness for individuals of all fitness levels.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {aboutPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-white/5 p-6 hover:bg-white/5 transition-colors"
              >
                <h3 className="font-display font-bold text-xl mb-3 text-white">{point.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {point.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
