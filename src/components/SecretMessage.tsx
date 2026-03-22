"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Lock, Unlock, Key, Heart } from "lucide-react";

export const SecretMessage = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  const checkPassword = (e: React.FormEvent) => {
    e.preventDefault();
    // Assuming nickname is "nick" for demonstration, but user can change it
    if (password.toLowerCase() === "nick" || password.toLowerCase() === "baby" || password.toLowerCase() === "love") {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <section className="py-32 px-6 flex flex-col items-center justify-center bg-rose-200/40 relative overflow-hidden backdrop-blur-md">
      <div className="max-w-4xl w-full glass p-8 md:p-16 rounded-[3rem] shadow-2xl relative z-10 space-y-12 text-center border-4 border-rose-300">
        <AnimatePresence mode="wait">
          {!unlocked ? (
            <motion.div
              key="locked"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, scale: 0.8 }}
              className="space-y-8"
            >
              <div className="relative inline-block">
                <div className="p-6 bg-rose-50 rounded-full border-4 border-rose-300 shadow-lg">
                  <Lock size={60} className="text-rose-500" />
                </div>
                <motion.div 
                  className="absolute -top-4 -right-4 p-3 bg-white rounded-full text-rose-500 shadow-md"
                  animate={{ rotate: [0, 20, -20, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Key size={24} />
                </motion.div>
              </div>

              <h2 className="text-4xl md:text-6xl font-dancing text-rose-700">Enter a Secret Word...</h2>
              <p className="text-lg md:text-xl font-playfair text-rose-900 italic opacity-80">
                (Hint: Your special nickname only I call you...)
              </p>

              <form onSubmit={checkPassword} className="space-y-6">
                <motion.input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="The secret word..."
                  className={`max-w-md w-full px-8 py-4 text-2xl font-playfair bg-white/50 border-2 rounded-2xl outline-none transition-all text-center placeholder:text-rose-300/50 ${error ? 'border-red-500 ring-4 ring-red-100' : 'border-rose-300 focus:border-rose-500 focus:ring-4 focus:ring-rose-200'}`}
                  animate={error ? { x: [0, -10, 10, -10, 10, 0] } : {}}
                />
                <button
                  type="submit"
                  className="block mx-auto px-12 py-4 bg-rose-600 text-white rounded-2xl font-pj font-bold text-xl shadow-xl hover:bg-rose-700 transition-all hover:scale-105 active:scale-95"
                >
                  Unlock Memory ✨
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="unlocked"
              initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              className="space-y-8"
            >
              <div className="p-6 bg-rose-100 rounded-full border-4 border-rose-400 shadow-lg inline-block">
                <Unlock size={60} className="text-rose-600 animate-pulse" />
              </div>

              <h2 className="text-5xl md:text-7xl font-dancing text-rose-700 border-b-2 border-rose-200 pb-6">My Deepest Thought...</h2>

              <div className="space-y-8 text-2xl md:text-4xl font-playfair text-rose-900 leading-relaxed italic">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  "I want you to know that you are my home. No matter what happened, you are the one I want to wake up to every single morning for the rest of my life."
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 }}
                >
                  "I promise to listen more, love deeper, and never let go of what we have. You are my forever."
                </motion.p>
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                className="flex items-center justify-center gap-4 text-4xl text-rose-600 font-dancing pt-12"
              >
                <Heart className="fill-rose-600" />
                I Love You Multiplied By infinity
                <Heart className="fill-rose-600" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
