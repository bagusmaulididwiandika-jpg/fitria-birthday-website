import React, { useState, useEffect } from 'react';
import { OpeningScreen } from './components/OpeningScreen';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SakuraHarukaCorner } from './components/SakuraHarukaCorner';
import { CatLoverCorner } from './components/CatLoverCorner';
import { WritersRoom } from './components/WritersRoom';
import { DreamLetterSection } from './components/DreamLetterSection';
import { BirthdayWishesSection } from './components/BirthdayWishesSection';
import { CakeSection } from './components/CakeSection';
import { FinalScene } from './components/FinalScene';

export default function App() {
  const [isLetterOpened, setIsLetterOpened] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track window scroll progress for narrative progress indicator
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentScroll = window.scrollY;
        setScrollProgress((currentScroll / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenLetter = () => {
    setIsLetterOpened(true);
    // Smooth scroll down slightly to focus on the story
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-stone-800 font-body flex flex-col selection:bg-rose-200 selection:text-stone-900">
      {/* Fullscreen Initial Opening Screen Curtain */}
      <OpeningScreen isOpen={isLetterOpened} onOpen={handleOpenLetter} />

      {/* Top Navbar with reading progress and music toggle */}
      <Navbar scrollProgress={scrollProgress} />

      {/* Main Story Narrative Flow */}
      <main className="flex-1">
        {/* Section 1: Hero Celebration */}
        <HeroSection />

        {/* Section 2: Sakura Haruka / Wind Breaker Corner */}
        <SakuraHarukaCorner />

        {/* Section 3: Cat Lover Corner */}
        <CatLoverCorner />

        {/* Section 4: The Writer's Room */}
        <WritersRoom />

        {/* Section 5: The Emotional Core - Letter About Her Dream */}
        <DreamLetterSection />

        {/* Section 6: Six Birthday Wishes */}
        <BirthdayWishesSection />

        {/* Section 7: Make a Wish & Interactive Birthday Cake */}
        <CakeSection />
      </main>

      {/* Section 8: Final Scene - To Be Continued */}
      <FinalScene />
    </div>
  );
}
