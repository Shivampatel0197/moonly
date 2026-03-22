"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Heart = ({ delay, duration, startX }: { delay: number; duration: number; startX: string }) => (
  <motion.div
    initial={{ y: "100vh", opacity: 0, scale: 0.5 }}
    animate={{ 
      y: "-10vh", 
      opacity: [0, 1, 1, 0],
      x: ["0%", "50%", "-50%", "0%"],
      scale: [0.5, 1, 0.8, 1.2],
      rotate: [0, 45, -45, 0],
    }}
    transition={{ 
      duration, 
      delay, 
      repeat: Infinity, 
      ease: "easeInOut" 
    }}
    className="absolute text-pink-400 opacity-30 select-none pointer-events-none text-2xl"
    style={{ left: startX }}
  >
    ❤️
  </motion.div>
);

export const HeartBackground = () => {
  const [hearts, setHearts] = useState<any[]>([]);

  useEffect(() => {
    const newHearts = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10,
      startX: `${Math.random() * 100}%`,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {hearts.map((heart) => (
        <Heart key={heart.id} {...heart} />
      ))}
    </div>
  );
};
