import { Hero } from "@/components/Hero";
import { LoveLetter } from "@/components/LoveLetter";
import { HeartCards } from "@/components/HeartCards";
import { PickupLines } from "@/components/PickupLines";
import { Gallery } from "@/components/Gallery";
import { ForgiveMe } from "@/components/ForgiveMe";
import { SecretMessage } from "@/components/SecretMessage";
import { ReplyForm } from "@/components/ReplyForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-rose-50/20">
      <Hero />
      <div className="space-y-32">
        <LoveLetter />
        <HeartCards />
        <PickupLines />
        <Gallery />
        <ForgiveMe />
        <SecretMessage />
        <ReplyForm />
      </div>

      <footer className="py-24 text-center border-t border-rose-100 bg-white/20 backdrop-blur-sm space-y-6">
        <div className="flex items-center justify-center gap-4 text-rose-500 font-dancing text-4xl mb-4">
          <span className="animate-pulse">❤️</span>
          Forever Yours
          <span className="animate-pulse">❤️</span>
        </div>
        <p className="text-xl font-playfair text-rose-800 italic opacity-80 max-w-lg mx-auto leading-relaxed shadow-sm">
          "I hope this made you smile. Every line, every animation, every word was coded with you in mind."
        </p>
        <p className="text-rose-400 font-inter text-sm pt-8">
          Made with Love & Code &hearts; 2026
        </p>
      </footer>
    </main>
  );
}
