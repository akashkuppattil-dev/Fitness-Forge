import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import gymImg from "@assets/program_gym.png";
import crossfitImg from "@assets/program_crossfit.png";
import zumbaImg from "@assets/program_zumba.png";
import aerobicsImg from "@assets/program_aerobics.png";

const services = [
  {
    title: "Strength & Conditioning",
    benefit: "Build explosive power and elite-level durability.",
    desc: "Our methodology focuses on compound movements and progressive overload, ensuring you build a foundation that lasts.",
    features: ["Heavy Compound Lifting", "Performance Conditioning", "Olympic Lifting Platform"],
    image: crossfitImg,
    align: "left"
  },
  {
    title: "Fat Loss & Conditioning",
    benefit: "High-intensity output for metabolic efficiency.",
    desc: "A systematic approach to body composition. We combine resistance training with energy system development.",
    features: ["Metabolic Circuitry", "Sprinting & HIIT", "Nutrition Foundations"],
    image: gymImg,
    align: "right"
  },
  {
    title: "Mobility & Movement",
    benefit: "Unlock range of motion and joint health.",
    desc: "Strength is useless without the ability to move freely. Focus on longevity and preventing injury through better mechanics.",
    features: ["Functional Range Conditioning", "Postural Realignment", "Corrective Exercise"],
    image: aerobicsImg,
    align: "left"
  },
  {
    title: "Personal Coaching Support",
    benefit: "Professional guidance for every rep.",
    desc: "No member is left to figure it out alone. Our coaches ensure technique is prioritized over ego.",
    features: ["Form Correction", "Program Design", "Progress Tracking"],
    image: zumbaImg,
    align: "right"
  }
];

export function Services() {
  return (
    <section className="py-10 bg-background relative" id="services">
      <div className="container mx-auto px-4">

        {/* Header Section */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div className="max-w-3xl space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-primary"></div>
                <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">Our Expertise</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-black text-white uppercase tracking-tighter leading-none">
                Training That <span className="text-primary italic">Delivers.</span>
              </h2>
              <p className="text-xl text-white/50 font-light leading-relaxed">
                We don't just provide space; we provide a methodology. Every program is designed for maximum efficiency and real-world performance.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Services List */}
        <div className="space-y-20 md:space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${service.align === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-video lg:aspect-square overflow-hidden bg-white/5 group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  />
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 text-center lg:text-left">
                <div className="space-y-2 md:space-y-4">
                  <h3 className="text-3xl md:text-5xl font-display font-bold text-white uppercase tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-primary font-display font-bold text-lg md:text-xl uppercase italic tracking-wide">
                    {service.benefit}
                  </p>
                </div>

                <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  {service.desc}
                </p>

                <ul className="grid sm:grid-cols-2 gap-4 pt-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-white/80 font-medium tracking-wide">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-6">
                  <Link href="#contact">
                    <a className="inline-flex items-center gap-4 group text-white font-bold uppercase tracking-widest text-sm py-4 px-8 border border-white/10 hover:border-primary hover:text-primary transition-all">
                      Learn Methodology <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 lg:mt-32 p-8 lg:p-20 bg-card border border-white/5 text-center space-y-6 md:space-y-8"
        >
          <h3 className="text-2xl md:text-5xl font-display font-black text-white uppercase tracking-tighter">
            Choose Discipline Over <span className="text-primary">Shortcuts.</span>
          </h3>
          <p className="text-sm md:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            Our facility is built for those who value proper form and consistent progress. If you're ready to train with purpose, we're ready to guide you.
          </p>
          <div className="pt-4 px-4">
            <a href="tel:+919497306050" className="inline-block w-full sm:w-auto bg-primary text-black px-12 py-5 font-bold uppercase tracking-widest text-base md:text-lg hover:bg-white transition-colors">
              Request Training Detail
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

