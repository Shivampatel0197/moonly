"use client";

import { motion } from "framer-motion";
import { Heart, Star, Smile, Flame, Moon, Cloud } from "lucide-react";

const reasons = [
  { icon: <Smile className="text-yellow-400" />, title: "Your Smile", text: "Your smile fixes everything, it's my favorite view." },
  { icon: <Heart className="text-red-400" />, title: "Favorite Person", text: "You’re my favorite person to talk to, and my favorite person to be with." },
  { icon: <Star className="text-blue-400" />, title: "Magical Moments", text: "You make ordinary moments magical by just being there." },
  { icon: <Flame className="text-orange-500" />, title: "Your Spark", text: "Even your spark lights up my darkest days." },
  { icon: <Moon className="text-indigo-400" />, title: "Night Presence", text: "I love dreaming of you and our future together." },
  { icon: <Cloud className="text-sky-300" />, title: "Soft Pure Love", text: "Your kindness is like a soft cloud that protects me." },
];

export const HeartCards = () => {
  return (
    <section className="py-24 p-6 bg-white/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto space-y-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-dancing text-rose-600 mb-4">Reasons I Love You</h2>
          <p className="text-lg md:text-xl font-playfair text-rose-800 italic opacity-80">(There are millions, but here are a few...)</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="glass p-8 rounded-2xl flex flex-col items-center text-center space-y-4 hover:shadow-rose-100 hover:shadow-2xl transition-all cursor-default"
            >
              <div className="p-4 bg-rose-50 rounded-full mb-4">
                {reason.icon}
              </div>
              <h3 className="text-2xl font-playfair text-rose-700 font-bold">{reason.title}</h3>
              <p className="text-rose-900/80 leading-relaxed font-inter">{reason.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
