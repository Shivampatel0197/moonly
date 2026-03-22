"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Piano music URL (romantic instrumental)
    const audio = new Audio("https://pixabay.com/music/wedding-romantic-love-piano-valentines-day-164819/");
    audio.loop = true;
    audioRef.current = audio;

    return () => {
      audio.pause();
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log("Audio play deferred until user interaction"));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <button
      onClick={togglePlay}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-rose-500/80 text-white shadow-lg backdrop-blur hover:scale-110 active:scale-95 transition-all"
      aria-label="Toggle Music"
    >
      {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
    </button>
  );
};
