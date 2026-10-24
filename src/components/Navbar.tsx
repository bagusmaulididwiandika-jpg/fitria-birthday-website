import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

interface NavbarProps {
  scrollProgress: number;
}

export const Navbar: React.FC<NavbarProps> = ({ scrollProgress }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    // Keep internal audio state in sync with audioEngine
    const checkState = () => {
      setIsPlaying(audioEngine.getIsPlaying());
      setIsMuted(audioEngine.getIsMuted());
    };
    const interval = setInterval(checkState, 800);
    return () => clearInterval(interval);
  }, []);

  const handlePlayToggle = () => {
    const nextState = audioEngine.toggleBGM();
    setIsPlaying(nextState);
  };

  const handleMuteToggle = () => {
    const nextMute = audioEngine.toggleMute();
    setIsMuted(nextMute);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-[#FAF7F0]/90 backdrop-blur-md border-b border-stone-200/80 transition-all">
      {/* Reading Progress Indicator */}
      <div
        className="h-[2.5px] bg-gradient-to-r from-amber-500 via-rose-500 to-amber-600 transition-all duration-150"
        style={{ width: `${Math.min(100, Math.max(0, scrollProgress))}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-4 sm:gap-8">
        {/* Zone 1: Wordmark */}
        <a
          href="#beranda"
          className="text-base sm:text-lg font-serif-display font-semibold tracking-tight text-stone-900 hover:text-rose-700 transition-colors whitespace-nowrap shrink-0"
        >
          Fitria Salsa Bela
        </a>

        {/* Zone 2: Navigation Links (single line, clean typography) */}
        <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-body font-medium text-stone-600">
          <a href="#beranda" className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0">
            Beranda
          </a>
          <a href="#sakura" className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0">
            Sakura Haruka
          </a>
          <a href="#kucing" className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0">
            Kucing
          </a>
          <a href="#penulis" className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0">
            Meja Penulis
          </a>
          <a href="#surat" className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0">
            Surat Impian
          </a>
          <a href="#harapan" className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0">
            Harapan
          </a>
          <a href="#kue" className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0">
            Tiup Lilin
          </a>
        </nav>

        {/* Zone 3: Audio Control Controls */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handlePlayToggle}
            aria-label={isPlaying ? 'Jeda Musik' : 'Putar Musik'}
            title={isPlaying ? 'Jeda Musik BGM' : 'Putar Melodi BGM'}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-medium bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-300/80 transition-colors"
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 text-rose-600" />
                <span className="hidden sm:inline">Melodi</span>
                {/* Animated wave bars */}
                <span className="flex items-end gap-0.5 h-3">
                  <span className="w-0.5 bg-rose-500 animate-pulse h-2" />
                  <span className="w-0.5 bg-rose-500 animate-pulse h-3 delay-100" />
                  <span className="w-0.5 bg-rose-500 animate-pulse h-1.5 delay-200" />
                </span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-stone-600" />
                <span className="hidden sm:inline">Musik</span>
              </>
            )}
          </button>

          <button
            onClick={handleMuteToggle}
            aria-label={isMuted ? 'Nyalakan Suara' : 'Bisukan Suara'}
            title={isMuted ? 'Nyalakan Suara' : 'Bisukan'}
            className="p-1.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 border border-stone-300/80 transition-colors"
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-stone-400" />
            ) : (
              <Volume2 className="w-4 h-4 text-stone-700" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
