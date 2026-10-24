import React, { useState } from 'react';
import { Heart, Smile, Sparkles, Compass, BookOpen, Sun } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

interface WishCard {
  id: number;
  number: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
  text: string;
}

const WISHES: WishCard[] = [
  {
    id: 1,
    number: '01',
    icon: Heart,
    tag: 'KESEHATAN & DAMAI',
    text: 'Semoga kesehatan dan kebahagiaan selalu menemanimu.',
  },
  {
    id: 2,
    number: '02',
    icon: Smile,
    tag: 'SENYUMAN SETIAP HARI',
    text: 'Semoga kamu menemukan banyak alasan baru untuk tersenyum.',
  },
  {
    id: 3,
    number: '03',
    icon: BookOpen,
    tag: 'KARYA & CERITA',
    text: 'Semoga cerita-cerita yang kamu tulis semakin berkembang.',
  },
  {
    id: 4,
    number: '04',
    icon: Sparkles,
    tag: 'APRESIASI SEJATI',
    text: 'Semoga kamu bertemu orang-orang yang menghargai karya dan dirimu.',
  },
  {
    id: 5,
    number: '05',
    icon: Compass,
    tag: 'RUANG BERJUANG',
    text: 'Semoga kamu diberi kesempatan untuk mengenal dan memperjuangkan cita-citamu.',
  },
  {
    id: 6,
    number: '06',
    icon: Sun,
    tag: 'HALAMAN BARU',
    text: 'Semoga kamu selalu punya keberanian untuk memulai halaman baru, bahkan ketika masa depan terasa belum jelas.',
  },
];

export const BirthdayWishesSection: React.FC = () => {
  const [openedCards, setOpenedCards] = useState<{ [key: number]: boolean }>({
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
  });

  const toggleCard = (id: number) => {
    audioEngine.playSparkle();
    setOpenedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="harapan" className="py-20 sm:py-28 px-4 sm:px-6 bg-[#FAF7F0] relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-rose-800/80 mb-2 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
            <Sparkles className="w-3.5 h-3.5 text-rose-500" />
            <span>ENAM DOA & HARAPAN BAIK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-medium text-stone-900 tracking-tight mb-3">
            30 Oktober yang Spesial.
          </h2>
          <p className="font-literary text-stone-600 text-sm sm:text-base">
            Enam lembar doa yang disimpan dengan tulus untuk menemani setiap langkah dan tahun barumu.
          </p>
        </div>

        {/* 6 Cards Grid (3 columns on desktop, responsive on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WISHES.map((wish) => {
            const Icon = wish.icon;
            const isOpen = openedCards[wish.id];

            return (
              <div
                key={wish.id}
                onClick={() => toggleCard(wish.id)}
                className={`group cursor-pointer rounded-xl p-6 sm:p-7 border transition-all duration-300 relative flex flex-col justify-between select-none ${
                  isOpen
                    ? 'bg-white border-stone-300 shadow-md hover:shadow-lg hover:-translate-y-1'
                    : 'bg-[#F2ECE1] border-stone-300/80 hover:bg-[#EBE3D6]'
                }`}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-stone-200">
                    <span className="font-mono text-xs text-stone-400 font-semibold tracking-wider">
                      {wish.number} · {wish.tag}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-rose-50 text-rose-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Card Message Body */}
                  <p className="font-literary text-stone-800 text-base sm:text-lg leading-relaxed pt-2">
                    {wish.text}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="pt-6 mt-4 border-t border-stone-100 flex items-center justify-between text-xs font-mono text-stone-400">
                  <span>Untuk Fitria</span>
                  <span className="text-rose-600 font-serif-display text-sm">✨</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
