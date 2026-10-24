import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Flame, RotateCcw } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

export const CakeSection: React.FC = () => {
  const [candleLit, setCandleLit] = useState(true);
  const [wishMade, setWishMade] = useState(false);

  const handleBlowCandle = () => {
    if (!candleLit) return;

    audioEngine.playCandleBlow();
    setCandleLit(false);
    setWishMade(true);

    // Particle celebration burst
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#F59E0B', '#FBBF24', '#F43F5E', '#FDA4AF', '#FFFBEB'],
    });

    setTimeout(() => {
      audioEngine.playSparkle();
    }, 400);
  };

  const handleRelight = () => {
    audioEngine.playSparkle();
    setCandleLit(true);
    setWishMade(false);
  };

  return (
    <section id="kue" className="py-20 sm:py-28 px-4 sm:px-6 bg-[#FAF4EB] relative overflow-hidden text-center">
      <div className="max-w-2xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-amber-800/80 mb-2 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>MOMEN SPESIAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-medium text-stone-900 tracking-tight mb-2">
            Make a Wish, Fitria!
          </h2>
          <p className="font-literary text-stone-600 text-sm sm:text-base">
            Tutup matamu sejenak, pikirkan satu harapan terindah untuk tahun ini, lalu tiup lilinnya.
          </p>
        </div>

        {/* Illustrated Birthday Cake Container */}
        <div className="relative py-8 flex flex-col items-center justify-center">
          {/* Custom SVG Cake with Animated Flame */}
          <div className="relative w-64 sm:w-72 h-64 sm:h-72 flex items-center justify-center select-none">
            <svg viewBox="0 0 240 240" className="w-full h-full drop-shadow-xl">
              {/* Cake Stand */}
              <ellipse cx="120" cy="215" rx="90" ry="14" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2.5" />
              <path d="M 105 215 L 105 228 L 135 228 L 135 215 Z" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="2" />
              <ellipse cx="120" cy="228" rx="40" ry="6" fill="#94A3B8" />

              {/* Bottom Tier (Strawberries & Cream) */}
              <rect x="50" y="145" width="140" height="60" rx="8" fill="#FDFBF7" stroke="#D6D3D1" strokeWidth="2.5" />
              <path d="M 50 165 C 70 175, 90 160, 120 170 C 150 160, 170 175, 190 165 L 190 150 L 50 150 Z" fill="#FDA4AF" opacity="0.6" />
              
              {/* Tier 1 decorative chocolate/berries */}
              <circle cx="75" cy="180" r="5" fill="#E11D48" />
              <circle cx="120" cy="182" r="5" fill="#E11D48" />
              <circle cx="165" cy="180" r="5" fill="#E11D48" />

              {/* Top Tier */}
              <rect x="75" y="100" width="90" height="48" rx="6" fill="#FFFDF8" stroke="#D6D3D1" strokeWidth="2.5" />
              <path d="M 75 116 C 90 124, 105 112, 120 120 C 135 112, 150 124, 165 116 L 165 102 L 75 102 Z" fill="#FDE68A" opacity="0.8" />
              
              {/* Berries on top */}
              <circle cx="90" cy="98" r="6" fill="#E11D48" />
              <circle cx="150" cy="98" r="6" fill="#E11D48" />

              {/* Birthday Candle */}
              <rect x="116" y="55" width="8" height="45" rx="3" fill="#FB7185" stroke="#E11D48" strokeWidth="1.5" />
              {/* Candle spiral stripes */}
              <line x1="116" y1="65" x2="124" y2="70" stroke="#FFF" strokeWidth="2" />
              <line x1="116" y1="78" x2="124" y2="83" stroke="#FFF" strokeWidth="2" />
              <line x1="116" y1="90" x2="124" y2="95" stroke="#FFF" strokeWidth="2" />

              {/* Candle Wick */}
              <line x1="120" y1="55" x2="120" y2="47" stroke="#44403C" strokeWidth="2" strokeLinecap="round" />

              {/* Candle Flame or Smoke */}
              {candleLit ? (
                <g className="animate-flame origin-bottom">
                  {/* Outer glow */}
                  <ellipse cx="120" cy="34" rx="10" ry="15" fill="#F59E0B" opacity="0.9" />
                  {/* Inner flame */}
                  <ellipse cx="120" cy="36" rx="5" ry="10" fill="#FEF08A" />
                  <circle cx="120" cy="40" r="2.5" fill="#38BDF8" opacity="0.7" />
                </g>
              ) : (
                /* Smoke curls */
                <g className="opacity-60 transition-opacity duration-1000">
                  <path
                    d="M 120 45 Q 115 35, 122 25 Q 128 15, 122 8"
                    fill="none"
                    stroke="#94A3B8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="4 2"
                    className="animate-pulse"
                  />
                </g>
              )}
            </svg>
          </div>

          {/* Action Buttons */}
          <div className="mt-4">
            {candleLit ? (
              <button
                onClick={handleBlowCandle}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 active:scale-95 text-white font-medium text-base rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                <Flame className="w-5 h-5 text-amber-200" />
                <span>Tiup Lilinnya 🎂</span>
              </button>
            ) : (
              <button
                onClick={handleRelight}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-stone-700 hover:text-stone-900 border border-stone-300 rounded-full text-xs font-mono transition-colors shadow-xs hover:bg-stone-50"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Nyalakan Lilin Kembali</span>
              </button>
            )}
          </div>

          {/* Wish Blessing Message Card */}
          {wishMade && (
            <div className="mt-8 p-6 bg-white/95 rounded-2xl border-2 border-amber-300 shadow-xl max-w-lg mx-auto animate-fadeIn">
              <Sparkles className="w-6 h-6 text-amber-500 mx-auto mb-2 animate-bounce" />
              <p className="font-serif-display text-lg sm:text-xl font-medium text-stone-900 mb-2">
                &ldquo;Semoga ada banyak hal baik yang menantimu di halaman berikutnya.&rdquo;
              </p>
              <p className="text-xs text-stone-600 font-mono">
                Doa baikmu telah terkirim ke semesta kecil ini ✨
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
