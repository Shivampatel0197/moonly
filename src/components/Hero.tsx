"use client";

import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-6 text-center space-y-8 animate-fade-in relative overflow-hidden">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="space-y-4"
      >
        <h1 className="text-5xl md:text-7xl font-dancing text-rose-600 drop-shadow-sm">
          I'm Sorry ❤️
        </h1>
        <div className="text-xl md:text-2xl font-playfair text-rose-800 md:max-w-2xl mx-auto min-h-[4rem]">
          <Typewriter
            options={{
              strings: [
                "Every second without you is a lifetime...",
                "You are the light in my life, always.",
                "I miss your laugh, your smile, and us.",
                "For You, My Love 💕",
              ],
              autoStart: true,
              loop: true,
              delay: 75,
            }}
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      >
        <button
          onClick={() => document.getElementById('love-letter')?.scrollIntoView({ behavior: 'smooth' })}
          className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-rose-500 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-900 shadow-lg hover:shadow-rose-500/50 hover:scale-105 active:scale-95"
        >
          Click if you still love me 🥺
          <motion.span 
            className="ml-2"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ❤️
          </motion.span>
        </button>
      </motion.div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-rose-400 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-rose-500 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};
