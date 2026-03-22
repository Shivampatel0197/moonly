"use client";

import { motion } from "framer-motion";

export const LoveLetter = () => {
  const letters = "I may not be perfect, but my love for you is. Even my worst days are better because you exist. I'm sorry for my mistakes; you deserve the world. I know I'm not the best but I'll try my best for you. I love you so much. I'm sorry for not being the best boyfriend but I'll try my best for you. I love you so much. Sometimes I make mistakes, but I never wanted to hurt you even a little. Please forgive me. I promise to be a better boyfriend to you.".split(" ");

  return (
    <section id="love-letter" className="min-h-screen py-24 flex items-center justify-center p-6 bg-rose-50/50">
      <div className="max-w-3xl w-full glass p-8 md:p-16 rounded-3xl shadow-2xl space-y-8 relative overflow-hidden">
        {/* Heart background for letter */}
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            ❤️
          </motion.div>
        </div>

        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-dancing text-rose-600 mb-8 border-b border-rose-200 pb-4"
        >
          My Heartfelt Apology...
        </motion.h2>

        <div className="flex flex-wrap gap-2 text-xl md:text-3xl font-playfair leading-relaxed text-rose-900">
          {letters.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="hover:text-rose-500 transition-colors"
            >
              {word}
            </motion.span>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 2, duration: 1 }}
          className="pt-8 text-rose-700 italic font-dancing text-2xl md:text-3xl"
        >
          - Forever Yours ❤️
        </motion.div>
      </div>
    </section>
  );
};
