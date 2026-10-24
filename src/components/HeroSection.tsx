import React from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, BookOpen, Star, Heart } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

export const HeroSection: React.FC = () => {
  const triggerCelebration = () => {
    audioEngine.playSparkle();

    // Multiphase elegant confetti: golden stars, soft dusty pinks, warm cream
    const count = 200;
    const defaults = {
      origin: { y: 0.68 },
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
      colors: ['#D4AF37', '#F43F5E', '#FB7185', '#FBBF24'],
    });
    fire(0.2, {
      spread: 60,
      colors: ['#FFE4E6', '#FDE68A', '#E11D48'],
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
      colors: ['#D4AF37', '#E2E8F0', '#FDA4AF'],
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
      colors: ['#F59E0B', '#F43F5E'],
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
      colors: ['#D4AF37', '#FB7185'],
    });
  };

  return (
    <section
      id="beranda"
      className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-[#FAF7F0] via-[#F8F3EA] to-[#FAF6EE]"
    >
      {/* Decorative ambient background glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[34rem] h-[34rem] rounded-full bg-rose-200/25 blur-3xl pointer-events-none" />
      <div className="absolute -top-10 right-10 w-80 h-80 rounded-full bg-amber-200/20 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Editorial Date Badge without generic pills */}
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono tracking-wider text-rose-800/80 mb-6 bg-rose-50/80 px-4 py-1.5 rounded-full border border-rose-200/60 shadow-xs">
          <Sparkles className="w-4 h-4 text-rose-500 animate-spin" style={{ animationDuration: '8s' }} />
          <span>30 Oktober 2008 · Hari Ketika Satu Cerita Baru Dimulai</span>
        </div>

        {/* Hero Title with balanced typography */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif-display font-medium text-stone-900 tracking-tight leading-[1.12] mb-6 text-balance">
          Happy Birthday, <br />
          <span className="italic font-normal text-rose-900 decoration-rose-300 underline decoration-2 underline-offset-8">
            Fitria Salsa Bela!
          </span>
        </h1>

        {/* Subtitle / Narrative intro */}
        <p className="font-literary text-base sm:text-lg md:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed mb-10 text-balance">
          &ldquo;Semoga halaman-halaman berikutnya dalam hidupmu dipenuhi hal-hal yang layak untuk dikenang.&rdquo;
        </p>

        {/* Action Button & Floating Embellishments */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={triggerCelebration}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-stone-900 hover:bg-stone-800 active:scale-95 text-amber-50 font-medium text-sm sm:text-base rounded-full shadow-md hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-stone-400"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Rayakan Hari Ini ✨</span>
          </button>

          <a
            href="#surat"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/80 hover:bg-white text-stone-700 hover:text-stone-950 font-medium text-sm sm:text-base rounded-full border border-stone-300/80 transition-all shadow-xs"
          >
            <BookOpen className="w-4 h-4 text-stone-500" />
            <span>Baca Surat Khusus</span>
          </a>
        </div>

        {/* Minimalist Scrapbook Details Row */}
        <div className="mt-16 pt-8 border-t border-stone-200/80 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-2xl mx-auto text-left">
          <div className="space-y-1">
            <span className="text-xs text-stone-600 block uppercase tracking-wider font-mono">
              Tanggal Lahir
            </span>
            <span className="font-serif-display text-sm sm:text-base font-semibold text-stone-900">
              30 Oktober 2008
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-xs text-stone-600 block uppercase tracking-wider font-mono">
              Dunia Favorit
            </span>
            <span className="font-serif-display text-sm sm:text-base font-semibold text-stone-900">
              Cerpen & Sastra
            </span>
          </div>

          <div className="col-span-2 sm:col-span-1 space-y-1">
            <span className="text-xs text-stone-600 block uppercase tracking-wider font-mono">
              Ikon Inspirasi
            </span>
            <span className="font-serif-display text-sm sm:text-base font-semibold text-stone-900 flex items-center gap-1.5">
              <span>Sakura Haruka</span>
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
