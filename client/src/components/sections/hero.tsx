import { motion } from "framer-motion";
import heroImage from "@assets/stock_images/athletic_woman_fitne_b18176e5.jpg";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Athlete training"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-7xl md:text-9xl font-display font-black text-white leading-[0.9] mb-6 italic">
            TRAIN
            <br />
            <span className="text-primary text-outline">HARD</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide mb-8 max-w-lg border-l-4 border-primary pl-6">
            PERFECT YOUR BODY.
            <br />
            DEFINE YOUR FUTURE.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary text-black hover:bg-white hover:text-black font-bold uppercase text-lg px-8 py-6 rounded-none">
              Start Journey
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black font-bold uppercase text-lg px-8 py-6 rounded-none">
              View Schedule
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-2 bg-primary" />
    </section>
  );
}
