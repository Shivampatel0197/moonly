"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { X, Heart, Maximize2 } from "lucide-react";

// Mock memories data (since we'll connect Supabase later)
const memories = [
  { id: 1, url: "https://images.unsplash.com/photo-1516589174184-c6852b514b48", caption: "The day we met...", color: "bg-rose-100" },
  { id: 2, url: "https://images.unsplash.com/photo-1518199266791-5375a02c9b24", caption: "Our first sunset trip", color: "bg-pink-100" },
  { id: 3, url: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3", caption: "Making memories together", color: "bg-lavender-100" },
  { id: 4, url: "https://images.unsplash.com/photo-1522673607200-1648832cee98", caption: "Those little moments", color: "bg-rose-50" },
  { id: 5, url: "https://images.unsplash.com/photo-1516589174184-c6852b514b48", caption: "Forever to go", color: "bg-pink-50" },
  { id: 6, url: "https://images.unsplash.com/photo-1518199266791-5375a02c9b24", caption: "My everything", color: "bg-lavender-50" },
];

export const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<any>(null);

  return (
    <section className="py-24 px-6 bg-white/20 backdrop-blur-md">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-dancing text-rose-600"
          >
            Memories Gallery
          </motion.h2>
          <p className="text-lg md:text-xl font-playfair text-rose-800 italic opacity-80">(Our precious moments caught on camera...)</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {memories.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative cursor-pointer overflow-hidden rounded-3xl shadow-xl aspect-square"
            >
              <Image 
                src={photo.url} 
                alt={photo.caption} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-6 text-white">
                <p className="text-lg font-playfair italic mb-4">{photo.caption}</p>
                <Maximize2 size={24} className="mb-2" />
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-6"
              onClick={() => setSelectedPhoto(null)}
            >
              <button 
                className="absolute top-10 right-10 text-white hover:rotate-90 transition-transform p-2 bg-white/10 rounded-full"
                onClick={() => setSelectedPhoto(null)}
              >
                <X size={32} />
              </button>
              
              <motion.div 
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 50 }}
                className="relative max-w-5xl w-full h-[80vh] bg-rose-50 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative flex-1 bg-black">
                  <Image 
                    src={selectedPhoto.url} 
                    alt={selectedPhoto.caption} 
                    fill 
                    className="object-contain"
                  />
                </div>
                <div className="w-full md:w-80 p-8 flex flex-col justify-center space-y-6 bg-rose-50 border-l border-rose-100">
                  <Heart className="text-rose-500 animate-pulse fill-rose-500 w-12 h-12" />
                  <h3 className="text-3xl font-dancing text-rose-700">A special moment...</h3>
                  <p className="text-xl font-playfair text-rose-900 italic leading-relaxed">
                    {selectedPhoto.caption}
                  </p>
                  <p className="text-rose-700 font-inter text-sm md:absolute bottom-8 right-8">
                    Forever in my heart.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
