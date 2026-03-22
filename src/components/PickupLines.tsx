"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Quote, Sparkles } from "lucide-react";

const lines = [
  "Are you made of copper and tellurium? Because you're Cu-Te 😉",
  "Are you Google? Because you have everything I’ve been searching for ❤️",
  "Do you believe in love at first sight, or should I walk by again? 😄",
  "Are you a camera? Because every time I look at you, I smile.",
  "If you were a triangle, you'd be acute one.",
  "You're like a dictionary... you add meaning to my life.",
  "Are you a 90-degree angle? Because you're lookin' right!",
];

export const PickupLines = () => {
  const [index, setIndex] = useState(0);

  const nextLine = () => {
    setIndex((prev) => (prev + 1) % lines.length);
  };

  return (
    <section className="py-24 px-6 bg-rose-100/50 backdrop-blur-sm overflow-hidden relative">
      {/* Background elements */}
      <Sparkles className="absolute top-10 left-10 text-rose-300 opacity-20 w-32 h-32" />
      <Quote className="absolute bottom-10 right-10 text-rose-300 opacity-20 w-32 h-32 transform rotate-180" />

      <div className="max-w-4xl mx-auto text-center space-y-12">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-dancing text-rose-700 mb-8"
        >
          Just a little something to make you smile...
        </motion.h2>

        <div className="min-h-[12rem] flex items-center justify-center p-8 bg-white/40 glass rounded-3xl shadow-xl border-dashed border-2 border-rose-300">
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-4xl font-playfair italic text-rose-900 leading-snug"
            >
              "{lines[index]}"
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.button
          onClick={nextLine}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-rose-600 text-white rounded-full font-pj font-bold text-lg shadow-lg hover:shadow-rose-400/50 transition-all flex items-center gap-2 mx-auto"
        >
          Tell me another! <Sparkles size={20} className="animate-pulse" />
        </motion.button>
      </div>
    </section>
  );
};
