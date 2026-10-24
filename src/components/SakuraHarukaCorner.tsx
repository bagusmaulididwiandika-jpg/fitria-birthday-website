import React, { useState } from 'react';
import { Sparkles, Shield, Compass, Flame } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

export const SakuraHarukaCorner: React.FC = () => {
  const [activePanel, setActivePanel] = useState<'intro' | 'manga' | 'message'>('intro');

  return (
    <section id="sakura" className="py-20 sm:py-28 px-4 sm:px-6 bg-[#18181B] text-stone-100 relative overflow-hidden">
      {/* Background Manga Screentone & Speedlines overlay */}
      <div className="absolute inset-0 manga-dots opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-stone-700/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Japanese Wind Breaker / Manga Kicker */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono tracking-widest uppercase text-red-400 border border-red-500/30 px-3 py-1 rounded">
            WIND BREAKER INSPIRED
          </span>
          <span className="text-stone-500 text-xs tracking-wider font-mono">
            風 · 防風鈴 · 桜
          </span>
        </div>

        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-medium text-white tracking-tight mb-4">
            Untuk Seseorang yang Punya Favorit Istimewa.
          </h2>
          <div className="w-16 h-1 bg-red-500 mb-6" />
          <p className="font-literary text-base sm:text-lg text-stone-300 leading-relaxed">
            Katanya, setiap orang punya karakter favorit yang entah bagaimana terasa istimewa. Dan untukmu, ada <span className="text-red-400 font-semibold">Sakura Haruka</span>—karakter yang menjadi bagian dari dunia anime yang kamu sukai.
          </p>
        </div>

        {/* Manga Panel Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Main Visual Panel: Stylized Manga Art Vector representing Wind Breaker Energy */}
          <div className="md:col-span-7 bg-[#232328] border-2 border-stone-700/80 rounded-xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between shadow-2xl">
            {/* Speedline Dynamic Triangle Accent */}
            <div
              className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-red-600/20 to-transparent pointer-events-none"
              style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
            />

            {/* Top Corner Japanese Calligraphy Badge */}
            <div className="flex justify-between items-start mb-6">
              <div className="space-y-1">
                <span className="text-xs text-red-400 font-mono tracking-widest block">
                  CHARACTER SPOTLIGHT
                </span>
                <span className="text-2xl font-serif-display font-bold text-white tracking-wide">
                  SAKURA HARUKA
                </span>
              </div>
              <div className="w-10 h-10 rounded-full border border-red-500/40 flex items-center justify-center bg-red-950/40 text-red-400">
                <Flame className="w-5 h-5 text-red-500" />
              </div>
            </div>

            {/* Stylized Manga Silhouette & Emblem Illustration */}
            <div className="my-6 py-6 border-y border-stone-700/60 flex flex-col sm:flex-row items-center justify-around gap-6">
              {/* Dual-tone hair motif SVG (representing Haruka's iconic half black, half white hair) */}
              <div className="relative w-36 h-36 rounded-full bg-stone-900 border-2 border-stone-600 flex items-center justify-center shadow-inner overflow-hidden group">
                {/* Left half black, right half crisp silver/white */}
                <div className="absolute inset-y-0 left-0 w-1/2 bg-[#101012] border-r border-stone-700" />
                <div className="absolute inset-y-0 right-0 w-1/2 bg-[#E4E4E7]" />
                
                {/* Stylized Manga Eye / Sparkle emblem */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-stone-950/80 backdrop-blur-xs border border-red-500/50 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-red-500 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>

              {/* Editorial Notes */}
              <div className="space-y-3 text-stone-300 text-sm font-literary max-w-xs">
                <div className="flex items-center gap-2 text-xs font-mono text-stone-400">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  <span>Dunia Wind Breaker · Bofurin</span>
                </div>
                <p className="leading-relaxed">
                  Sebuah dunia tentang keberanian berdiri di garis depan, melindungi orang lain, dan menemukan arti dari rumah dan persahabatan sejati.
                </p>
              </div>
            </div>

            {/* Bottom Card Footer */}
            <div className="pt-2">
              <p className="text-stone-300 font-literary italic text-sm sm:text-base leading-relaxed">
                &ldquo;Semoga kamu selalu menemukan alasan untuk menyukai hal-hal kecil yang membuat harimu terasa lebih menyenangkan.&rdquo;
              </p>
            </div>
          </div>

          {/* Side Editorial Panels */}
          <div className="md:col-span-5 flex flex-col gap-6">
            {/* Panel 1: Courage & Passion */}
            <div className="bg-[#232328] border-2 border-stone-700/80 rounded-xl p-6 relative overflow-hidden flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-stone-400">BAGIAN DARI DUNIA KECILMU</span>
                  <Compass className="w-4 h-4 text-red-400" />
                </div>
                <h3 className="text-lg font-serif-display font-semibold text-white mb-2">
                  Energi dari Kisah Favorit
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-literary">
                  Karakter fiksi favorit sering kali memberi kita semangat saat lelah, memberi senyuman saat membaca atau menonton, dan menjadi ruang pelarian yang menyenangkan di sela-sela rutinitas.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-700/50 flex items-center justify-between text-xs font-mono text-stone-400">
                <span>Anime Favorit</span>
                <span className="text-red-400 font-semibold">Wind Breaker</span>
              </div>
            </div>

            {/* Panel 2: Interactive Cheer */}
            <div className="bg-gradient-to-br from-red-950/40 via-[#232328] to-[#1f1f23] border-2 border-red-900/40 rounded-xl p-6 relative flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-red-400 text-xs font-mono mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>CATATAN SPESIAL 30 OKTOBER</span>
                </div>
                <p className="text-sm text-stone-200 leading-relaxed font-literary">
                  Tetaplah menyukai hal-hal yang membuat matamu berbinar, mulai dari anime kesukaan hingga lembaran cerita yang kamu tulis dengan tanganmu sendiri.
                </p>
              </div>

              <button
                onClick={() => {
                  audioEngine.playSparkle();
                  setActivePanel(activePanel === 'message' ? 'intro' : 'message');
                }}
                className="mt-4 inline-flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-red-600/80 hover:bg-red-600 active:scale-95 text-white text-xs font-medium transition-colors cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{activePanel === 'message' ? 'Tutup Catatan' : 'Kirim Semangat Sakura ⚡'}</span>
              </button>

              {activePanel === 'message' && (
                <div className="mt-3 p-3 bg-black/60 rounded border border-red-500/30 text-xs text-amber-200 font-mono animate-fadeIn">
                  ✨ Semangat selalu untuk Fitria Salsa Bela di usia barunya!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
