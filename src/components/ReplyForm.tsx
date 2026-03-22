"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Send, Heart, Sparkles, MessageSquareHeart } from "lucide-react";
import { supabase } from "@/lib/supabase";

export const ReplyForm = () => {
  const [text, setText] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    setStatus("loading");
    try {
      // In a real scenario, user would have Supabase set up. 
      // If no URL, we simulate a success for the demo.
      if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
        const { error } = await supabase
          .from("replies")
          .insert([{ message: text }]);
        
        if (error) throw error;
      } else {
        // Simulate loading time for demo
        await new Promise(resolve => setTimeout(resolve, 1500));
      }

      setStatus("success");
      setText("");
    } catch (err) {
      console.error(err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section className="py-32 px-6 flex flex-col items-center justify-center bg-rose-50/70 relative">
      <div className="max-w-4xl w-full glass p-8 md:p-16 rounded-[4rem] shadow-2xl space-y-12">
        <div className="text-center space-y-6">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="p-6 bg-rose-100 rounded-full border-4 border-rose-300 shadow-xl inline-block"
          >
            <MessageSquareHeart size={60} className="text-rose-500" />
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-dancing text-rose-700">A Message for Me? ❤️</h2>
          <p className="text-xl md:text-2xl font-playfair text-rose-900 italic max-w-2xl mx-auto leading-relaxed">
            "I'd love to hear from you. Tell me anything, or just say hi. I'm always here for you."
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 relative max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Write your heart out..."
              className="w-full px-8 py-8 text-xl md:text-2xl font-playfair bg-white/60 border-4 border-rose-200 rounded-[2rem] outline-none transition-all focus:border-rose-500 focus:ring-8 focus:ring-rose-100 min-h-[16rem] resize-none text-rose-900 placeholder:text-rose-300 italic shadow-inner"
              disabled={status === "loading" || status === "success"}
            />
            {text && status === "idle" && (
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute top-6 right-6 p-2 bg-rose-50 rounded-full text-rose-500"
              >
                <Heart size={24} className="fill-rose-500 animate-pulse" />
              </motion.div>
            )}
          </motion.div>

          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 bg-green-50 border-4 border-green-200 rounded-3xl text-center space-y-4"
              >
                <Sparkles size={40} className="text-green-500 mx-auto" />
                <h3 className="text-3xl font-dancing text-green-700">Message Received! ❤️</h3>
                <p className="text-xl font-playfair text-green-800 italic">"I'll read it and respond ASAP. I love you!"</p>
                <button 
                  onClick={() => setStatus("idle")} 
                  className="mt-4 text-green-600 font-bold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <motion.button
                key="idle"
                type="submit"
                disabled={status === "loading"}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-6 bg-rose-600 text-white rounded-[2rem] font-pj font-bold text-2xl shadow-xl hover:bg-rose-700 transition-all flex items-center justify-center gap-4 group disabled:opacity-50"
              >
                {status === "loading" ? (
                  <motion.div 
                    animate={{ rotate: 360 }} 
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Heart size={32} />
                  </motion.div>
                ) : (
                  <>
                    Send My Heart <Send size={28} className="translate-x-0 group-hover:translate-x-2 transition-transform" />
                  </>
                )}
              </motion.button>
            )}
          </AnimatePresence>
        </form>

        <div className="flex flex-wrap items-center justify-center gap-12 pt-12 border-t-2 border-rose-200">
          <div className="flex items-center gap-3 text-rose-500 font-dancing text-2xl">
            <Heart size={24} className="fill-rose-500" /> Always
          </div>
          <div className="flex items-center gap-3 text-rose-500 font-dancing text-2xl">
            <Heart size={24} className="fill-rose-500" /> Forever
          </div>
          <div className="flex items-center gap-3 text-rose-500 font-dancing text-2xl">
            <Heart size={24} className="fill-rose-500" /> Eternity
          </div>
        </div>
      </div>
    </section>
  );
};
