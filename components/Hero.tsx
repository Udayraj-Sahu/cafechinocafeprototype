"use client";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen grid grid-cols-12 gap-4 p-8 md:p-12 lg:p-16">
      {/* Left Column - Main Headline */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="col-span-12 lg:col-span-7 flex flex-col justify-center"
      >
        <small className="text-[var(--color-sage)] mb-6">JEHAN NUMA PALACE, BHOPAL</small>
        <h1 className="mb-8">Cafechino</h1>
        <p className="max-w-md mb-12 opacity-70">
          Where colonial architecture meets contemporary café culture. 
          Refined pastries and specialty coffee in a garden setting.
        </p>
        
        <motion.button
          whileHover={{ x: 8 }}
          transition={{ duration: 0.2, ease: "linear" }}
          className="flex items-center gap-3 border border-[var(--color-charcoal)] px-8 py-4 w-fit hover:bg-[var(--color-charcoal)] hover:text-[var(--color-marble)] transition-colors duration-200"
        >
          <span>EXPLORE MENU</span>
          <ArrowRight size={16} />
        </motion.button>
      </motion.div>

      {/* Right Column - Grid Accent */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="col-span-12 lg:col-span-5 relative"
      >
        <div className="h-full min-h-[400px] lg:min-h-full border border-[var(--color-charcoal)] border-opacity-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-sage)] via-[var(--color-marble)] to-[var(--color-gold)] opacity-20"></div>
          
          {/* Geometric Grid Overlay */}
          <div className="absolute inset-0 grid grid-cols-3 grid-rows-3">
            {[...Array(9)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.05 }}
                transition={{ duration: 0.6, delay: 0.5 + (i * 0.1) }}
                className="border border-[var(--color-charcoal)]"
              />
            ))}
          </div>

          {/* Time & Location */}
          <div className="absolute bottom-8 right-8 text-right">
            <h4 className="mb-2">HOURS</h4>
            <small className="block opacity-60">08:00 — 22:00</small>
            <small className="block opacity-60">DAILY</small>
          </div>
        </div>
      </motion.div>

      {/* Bottom Info Strip */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="col-span-12 flex flex-wrap gap-12 pt-16 border-t border-[var(--color-charcoal)] border-opacity-10 mt-12"
      >
        <div>
          <h4 className="mb-2">SPECIALTY</h4>
          <small className="opacity-60">Artisanal Pastries</small>
        </div>
        <div>
          <h4 className="mb-2">AMBIENCE</h4>
          <small className="opacity-60">Garden Terrace</small>
        </div>
        <div>
          <h4 className="mb-2">STYLE</h4>
          <small className="opacity-60">Colonial Modern</small>
        </div>
      </motion.div>
    </section>
  );
}
