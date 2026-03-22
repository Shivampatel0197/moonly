import type { Metadata } from "next";
import { Inter, Playfair_Display, Dancing_Script } from "next/font/google";
import "./globals.css";
import { HeartBackground } from "@/components/HeartBackground";
import { MusicPlayer } from "@/components/MusicPlayer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const dancing = Dancing_Script({ subsets: ["latin"], variable: "--font-dancing" });

export const metadata: Metadata = {
  title: "For You, My Love ❤️",
  description: "A digital love letter, a heartfelt apology, and a reminder of my love.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} ${dancing.variable} font-sans selection:bg-rose-200 selection:text-rose-900`}>
        <div className="relative z-10">
          {children}
        </div>
        <HeartBackground />
        <MusicPlayer />
      </body>
    </html>
  );
}
