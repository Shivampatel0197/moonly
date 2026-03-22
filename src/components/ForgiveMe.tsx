"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import confetti from "canvas-confetti";
import { Heart, Sparkles, Smile, MessageCircleHeart } from "lucide-react";

export const ForgiveMe = () => {
  const [forgiven, setForgiven] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const noButtonRef = useRef<HTMLButtonElement | null>(null);

  const handleYes = () => {
    setForgiven(true);
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#f43f5e", "#fb7185", "#ff8a9b", "#ffc1cc"],
      shapes: ["circle", "square"],
    });

    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  };

  const moveNoButton = () => {
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;
    setNoButtonPos({ x: randomX, y: randomY });
  };

  return (
    <section className="py-32 px-6 flex flex-col items-center justify-center bg-rose-50 relative overflow-hidden">
      <AnimatePresence mode="wait">
        {!forgiven ? (
          <motion.div
            key="question"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2, rotate: 10 }}
            className="text-center space-y-12 max-w-2xl relative z-10"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Heart size={80} className="text-rose-500 mx-auto fill-rose-500/20" />
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-dancing text-rose-600">Forgive me? 🥺</h2>
            <p className="text-xl md:text-2xl font-playfair text-rose-800 italic">
              I pwomise to make it up to you with unlimited hugs and your favorite snacks!
            </p>

            <div className="flex flex-wrap items-center justify-center gap-8 pt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleYes}
                className="px-12 py-5 bg-rose-500 text-white rounded-2xl font-pj font-bold text-2xl shadow-xl hover:shadow-rose-400/50 flex items-center gap-3 transition-all"
              >
                Yes ❤️
              </motion.button>

              <motion.button
                ref={noButtonRef}
                animate={{ x: noButtonPos.x, y: noButtonPos.y }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onHoverStart={moveNoButton}
                onClick={moveNoButton}
                className="px-8 py-4 border-2 border-rose-400 text-rose-700 rounded-2xl font-pj font-bold text-xl hover:bg-rose-100 transition-colors"
              >
                No 😢
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-12 max-w-2xl relative z-10"
          >
            <Sparkles size={80} className="text-yellow-400 mx-auto animate-pulse" />
            <h2 className="text-6xl md:text-8xl font-dancing text-rose-600">YAYYY! ❤️</h2>
            <p className="text-2xl md:text-4xl font-playfair text-rose-800 italic leading-relaxed">
              You just made me the happiest person alive! I love you so much!
            </p>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Smile size={100} className="text-yellow-500 mx-auto" />
            </motion.div>
            <div className="flex items-center justify-center gap-4 text-rose-500 font-dancing text-3xl">
              <Heart className="fill-rose-500" />
              Forever & Always
              <Heart className="fill-rose-500" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
