import { motion } from "framer-motion";
import heroImage from "@assets/image_1765661463397.png";
import leftImage from "@assets/mennn_1765662827159.avif";
import rightImage from "@assets/group_1765662852138.avif";
import { Link } from "wouter";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center justify-center text-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Athlete wrapping hands"
          className="w-full h-full object-cover object-center lg:object-[center_30%]"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Left Side Image */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[25%] h-[60%] hidden xl:block z-10 rounded-r-3xl overflow-hidden border-y-2 border-r-2 border-primary/20">
        <img
          src={leftImage}
          alt="Male Athlete"
          className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-50" />
      </div>

      {/* Right Side Image */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[25%] h-[60%] hidden xl:block z-10 rounded-l-3xl overflow-hidden border-y-2 border-l-2 border-primary/20">
        <img
          src={rightImage}
          alt="Group Training"
          className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black via-transparent to-transparent opacity-50" />
      </div>

      <div className="container mx-auto px-4 relative z-20 pt-20">
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
