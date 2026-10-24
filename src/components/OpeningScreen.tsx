import React, { useState } from 'react';
import { Mail, Sparkles, Heart } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

interface OpeningScreenProps {
  onOpen: () => void;
  isOpen: boolean;
}

export const OpeningScreen: React.FC<OpeningScreenProps> = ({ onOpen, isOpen }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpeningAnim, setIsOpeningAnim] = useState(false);

  const handleOpenClick = () => {
    setIsOpeningAnim(true);
    audioEngine.playSparkle();
    audioEngine.startBGM();

    setTimeout(() => {
      onOpen();
    }, 900);
  };

  if (isOpen) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-1000 ${
        isOpeningAnim ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      } bg-[#181615]/95 backdrop-blur-md text-stone-100`}
    >
      {/* Ambient background particles & stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-72 h-72 rounded-full bg-amber-500/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 rounded-full bg-rose-500/10 blur-3xl animate-pulse delay-700" />
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-amber-200/60 animate-twinkle"
            style={{
              top: `${(i * 19 + 7) % 95}%`,
              left: `${(i * 29 + 13) % 95}%`,
              width: `${(i % 3) + 2}px`,
              height: `${(i % 3) + 2}px`,
              animationDelay: `${(i * 0.4) % 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-lg w-full text-center px-4 py-8">
        {/* Date Kicker */}
        <div className="inline-flex items-center gap-2 px-3 py-1 text-xs tracking-widest uppercase text-amber-300/80 mb-6 font-mono border-b border-amber-300/20">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>30 Oktober — Sebuah Hari yang Istimewa</span>
        </div>

        {/* Recipient Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-medium tracking-tight text-amber-50 mb-4 leading-tight">
          Untuk Fitria Salsa Bela.
        </h1>

        {/* Narrative Subtext */}
        <p className="font-literary text-sm sm:text-base text-stone-300/90 leading-relaxed max-w-md mx-auto mb-10 italic">
          &ldquo;Di antara begitu banyak cerita di dunia, hari ini adalah tentang seseorang yang punya cerita dan dunia kecilnya sendiri.&rdquo;
        </p>

        {/* Visual Envelope */}
        <div className="relative w-44 sm:w-52 h-32 sm:h-36 mx-auto mb-10 group cursor-pointer"
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
             onClick={handleOpenClick}
        >
          {/* Envelope Body */}
          <div className="absolute inset-0 bg-[#EFE9DF] rounded-md shadow-2xl border border-stone-300/60 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
            {/* Envelope flap folded look */}
            <div className="absolute top-0 inset-x-0 h-16 bg-[#E3DCcf] border-b border-stone-400/30"
                 style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
            />
            {/* Wax Seal */}
            <div className="relative z-10 w-12 h-12 rounded-full bg-rose-800 shadow-md flex items-center justify-center border-2 border-rose-900/40 text-amber-100 font-serif-display text-lg font-bold">
              F
            </div>
            {/* Subtle paper lines */}
            <div className="absolute bottom-3 inset-x-6 h-[1px] bg-stone-300/70" />
            <div className="absolute bottom-5 inset-x-10 h-[1px] bg-stone-300/40" />
          </div>

          {/* Floating heart icon on hover */}
          <div className={`absolute -top-3 right-4 transition-all duration-300 ${isHovered ? 'opacity-100 -translate-y-2' : 'opacity-0'}`}>
            <Heart className="w-5 h-5 text-rose-400 fill-rose-400 animate-bounce" />
          </div>
        </div>

        {/* Open Button */}
        <div>
          <button
            onClick={handleOpenClick}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-amber-600 via-rose-600 to-amber-700 hover:from-amber-500 hover:via-rose-500 hover:to-amber-600 text-white font-medium text-sm sm:text-base rounded-full shadow-lg hover:shadow-rose-900/30 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-[#181615]"
          >
            <Mail className="w-4 h-4" />
            <span>Buka Surat Spesialmu</span>
            <Sparkles className="w-4 h-4 text-amber-200" />
          </button>
          <p className="text-xs text-stone-400/80 mt-3 font-mono">
            Ketuk untuk memulai melodi lembut & membuka cerita
          </p>
        </div>
      </div>
    </div>
  );
};
