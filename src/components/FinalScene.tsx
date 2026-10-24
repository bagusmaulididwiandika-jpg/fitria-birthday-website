import React from 'react';
import { BookOpen, Sparkles, Heart } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

export const FinalScene: React.FC = () => {
  const handleReadAgain = () => {
    audioEngine.playSparkle();
    const suratElement = document.getElementById('surat');
    if (suratElement) {
      suratElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-24 sm:py-32 px-4 sm:px-6 bg-[#181615] text-stone-200 text-center relative overflow-hidden border-t border-stone-800">
      {/* Dim ambient stars */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        {[...Array(24)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-amber-100 animate-twinkle"
            style={{
              top: `${(i * 17 + 5) % 95}%`,
              left: `${(i * 23 + 11) % 95}%`,
              width: `${(i % 3) + 1.5}px`,
              height: `${(i % 3) + 1.5}px`,
              animationDelay: `${(i * 0.3) % 4}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Book Bookmark and Sleeping Cat Illustration */}
        <div className="mb-8 flex flex-col items-center justify-center">
          {/* Closed Vintage Book with Sleeping Cat on Top */}
          <div className="relative w-48 h-36 flex items-center justify-center">
            {/* Vintage Book SVG */}
            <svg viewBox="0 0 180 120" className="w-full h-full drop-shadow-xl">
              {/* Closed Leather Book Cover */}
              <rect x="25" y="45" width="130" height="60" rx="8" fill="#3E2723" stroke="#271C19" strokeWidth="3" />
              {/* Gold Spine Trim */}
              <rect x="25" y="45" width="16" height="60" rx="4" fill="#D4AF37" />
              {/* Paper Edges */}
              <rect x="41" y="50" width="110" height="50" fill="#FFF8E7" />
              <line x1="41" y1="62" x2="151" y2="62" stroke="#D7CCC8" strokeWidth="1" />
              <line x1="41" y1="74" x2="151" y2="74" stroke="#D7CCC8" strokeWidth="1" />
              <line x1="41" y1="86" x2="151" y2="86" stroke="#D7CCC8" strokeWidth="1" />
              {/* Red Silk Ribbon Bookmark Hanging Out */}
              <path d="M 100 50 L 100 115 L 108 108 L 116 115 L 116 50 Z" fill="#E11D48" />

              {/* Sleeping Cat Curled Up on the Book */}
              <ellipse cx="90" cy="40" rx="28" ry="18" fill="#F59E0B" />
              {/* Sleeping Cat Head */}
              <circle cx="68" cy="38" r="14" fill="#F59E0B" />
              {/* Sleeping Ears */}
              <polygon points="60,28 64,18 72,26" fill="#D97706" />
              <polygon points="72,28 78,18 82,26" fill="#D97706" />
              {/* Sleeping Closed Eyes (curved lines) */}
              <path d="M 62 38 Q 66 42, 70 38" fill="none" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" />
              {/* Curled Tail */}
              <path d="M 115 42 Q 125 36, 120 28 Q 112 28, 108 34" fill="none" stroke="#F59E0B" strokeWidth="6" strokeLinecap="round" />
              {/* Soft "Zzz" sleeping indicator */}
              <text x="50" y="22" fill="#FDE68A" fontSize="9" fontFamily="monospace">z</text>
              <text x="44" y="14" fill="#FDE68A" fontSize="11" fontFamily="monospace">Z</text>
            </svg>
          </div>
        </div>

        {/* Closing Narrative Header */}
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400/80 mb-4 border-b border-amber-400/20 pb-1">
          <Sparkles className="w-3.5 h-3.5" />
          <span>TO BE CONTINUED...</span>
        </div>

        <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif-display font-medium text-amber-50 mb-3 tracking-tight">
          Happy Birthday, Fitria Salsa Bela.
        </h3>

        <p className="text-xs sm:text-sm font-mono text-stone-400 mb-6">
          30 Oktober 2008 — dan masih banyak halaman yang menunggu untuk ditulis.
        </p>

        {/* Emotional Closing Sentence */}
        <p className="font-literary text-base sm:text-lg text-stone-300 leading-relaxed max-w-xl mx-auto mb-10 italic">
          &ldquo;Semoga kamu tidak hanya menjadi penulis bagi cerita-cerita yang kamu ciptakan, tetapi juga menemukan kebahagiaan dalam cerita yang sedang kamu jalani.&rdquo;
        </p>

        {/* Read Again Button */}
        <div>
          <button
            onClick={handleReadAgain}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-stone-800 hover:bg-stone-700 active:scale-95 text-amber-100 border border-stone-600 text-sm font-medium transition-all shadow-md cursor-pointer hover:border-amber-400"
          >
            <BookOpen className="w-4 h-4 text-amber-400" />
            <span>Baca Suratnya Lagi</span>
          </button>
        </div>

        {/* Footer Credit & Love */}
        <div className="mt-16 pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 font-mono gap-3">
          <span>A Little Universe · 30 Oktober 2008</span>
          <span className="flex items-center gap-1">
            Dibuat dengan cinta & apresiasi tulus <Heart className="w-3 h-3 text-rose-500 fill-rose-500 inline" /> untuk Fitria
          </span>
        </div>
      </div>
    </footer>
  );
};
