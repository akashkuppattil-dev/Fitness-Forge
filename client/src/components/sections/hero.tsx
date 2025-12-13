import { motion } from "framer-motion";
import heroImage from "@assets/image_1765661463397.png";
import { Link } from "wouter";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center text-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Athlete wrapping hands"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <h1 className="text-7xl md:text-[10rem] font-display font-black text-white leading-[0.8] mb-8 tracking-tighter">
            TRAIN
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/60">HARD</span>
          </h1>
          
          <div className="h-1 w-24 bg-primary mb-8" />
          
          <p className="text-xl md:text-3xl text-white font-light tracking-[0.2em] mb-12 uppercase">
            Perfect Your Body.
            <br />
            <span className="font-bold text-primary">Define Your Future.</span>
          </p>
          
          <Link href="#contact">
            <a className="text-lg font-bold tracking-[0.3em] text-white border-b-2 border-primary pb-1 hover:text-primary transition-colors uppercase">
              Start Your Journey
            </a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
