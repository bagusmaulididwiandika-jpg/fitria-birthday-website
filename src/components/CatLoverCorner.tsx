import React, { useState } from 'react';
import { Heart, Sparkles, Smile, Coffee } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

interface CatMessage {
  text: string;
  reaction: string;
}

const CAT_MESSAGES: CatMessage[] = [
  { text: 'Purrr... Meong! Selamat ulang tahun untuk penulis cerpen paling keren! 🐾', reaction: '😺' },
  { text: 'Kucing ini mendengkur tenang di samping tumpukan bukumu. Kamu anak hebat, Fitria!', reaction: '😸' },
  { text: 'Ngeong~ Jangan lupa istirahat dan minum air putih saat asyik merangkai cerita ya! ☕', reaction: '😽' },
  { text: 'Meow! Suatu hari nanti cerpenmu bakal dibaca banyak orang dan bikin mereka tersenyum. 📖', reaction: '🐾' },
  { text: 'Tepukan halus telapak cakar kucing mengirimkan 1000 energi baik buat hari ini!', reaction: '🐱' },
  { text: 'Muezza dan teman-temannya sepakat: 30 Oktober adalah hari yang membahagiakan!', reaction: '✨' },
];

export const CatLoverCorner: React.FC = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [petCount, setPetCount] = useState(0);
  const [isBlinking, setIsBlinking] = useState(false);
  const [recentPawPrints, setRecentPawPrints] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const handleCatPet = (e?: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>) => {
    audioEngine.playPurr();
    setPetCount((prev) => prev + 1);
    setMessageIndex((prev) => (prev + 1) % CAT_MESSAGES.length);

    // Trigger blink
    setIsBlinking(true);
    setTimeout(() => setIsBlinking(false), 300);

    if (e && e.currentTarget) {
      // Record paw print coordinates relative to bounding box
      const rect = e.currentTarget.getBoundingClientRect();
      let clientX = 0;
      let clientY = 0;

      if ('touches' in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ('clientX' in e) {
        clientX = (e as React.MouseEvent).clientX;
        clientY = (e as React.MouseEvent).clientY;
      }

      const x = Math.max(10, Math.min(rect.width - 20, clientX - rect.left));
      const y = Math.max(10, Math.min(rect.height - 20, clientY - rect.top));

      const newPaw = { id: Date.now() + Math.random(), x, y };
      setRecentPawPrints((prev) => [...prev.slice(-5), newPaw]);
    }
  };

  const currentMsg = CAT_MESSAGES[messageIndex];

  return (
    <section id="kucing" className="py-20 sm:py-28 px-4 sm:px-6 bg-[#FAF4ED] text-stone-800 relative overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-amber-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-rose-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-rose-700/80 mb-3 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
            <span>🐾 Cat Lover Corner · Dunia Kucing Kesayangan</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-medium text-stone-900 tracking-tight mb-4">
            Sedikit Bulu, Banyak Kebahagiaan.
          </h2>

          <p className="font-literary text-base sm:text-lg text-stone-600 leading-relaxed text-balance">
            &ldquo;Semoga hidupmu selalu punya ruang untuk hal-hal sederhana yang bikin senyum muncul tanpa alasan. Seperti tingkah kucing yang kadang aneh, kadang menggemaskan, tetapi selalu punya caranya sendiri untuk mencuri perhatian.&rdquo;
          </p>
        </div>

        {/* Interactive Cat Arena Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-stone-200 p-6 sm:p-10 max-w-2xl mx-auto">
          {/* Paw Prints count and hint */}
          <div className="flex items-center justify-between pb-4 border-b border-stone-100 text-xs text-stone-600 font-mono">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Ketuk kucing untuk pesan baru</span>
            </span>
            <span className="bg-amber-50 text-amber-800 px-2.5 py-1 rounded-full font-semibold">
              {petCount} kali dielus 🐾
            </span>
          </div>

          {/* Interactive Cat Canvas Area */}
          <div
            onClick={handleCatPet}
            onTouchStart={handleCatPet}
            className="relative h-64 sm:h-72 my-6 bg-gradient-to-b from-stone-50 to-[#FDFBF7] rounded-xl border border-stone-200/80 flex items-center justify-center cursor-pointer select-none overflow-hidden group hover:border-amber-300 transition-colors"
            title="Klik kucing untuk mengelus!"
          >
            {/* Transient Paw prints */}
            {recentPawPrints.map((paw) => (
              <div
                key={paw.id}
                className="absolute text-rose-300 pointer-events-none transition-all duration-700 animate-ping opacity-75"
                style={{ left: paw.x - 12, top: paw.y - 12 }}
              >
                🐾
              </div>
            ))}

            {/* Speech Bubble Above Cat */}
            <div className="absolute top-4 inset-x-4 max-w-md mx-auto bg-stone-900 text-amber-50 text-xs sm:text-sm font-literary px-4 py-2.5 rounded-xl shadow-lg border border-stone-700 text-center animate-fadeIn flex items-center justify-center gap-2">
              <span className="text-base">{currentMsg.reaction}</span>
              <span>{currentMsg.text}</span>
            </div>

            {/* Custom Interactive Illustrated Cat SVG */}
            <div className="relative mt-12 w-48 h-44 flex items-center justify-center transition-transform duration-200 group-hover:scale-105 active:scale-95">
              <svg viewBox="0 0 200 180" className="w-full h-full drop-shadow-md">
                {/* Cat Tail with natural wag animation */}
                <path
                  d="M 135 140 C 165 140, 185 110, 175 75 C 170 55, 155 58, 158 72 C 162 95, 148 115, 125 125"
                  fill="none"
                  stroke="#44403C"
                  strokeWidth="12"
                  strokeLinecap="round"
                  className="animate-tail origin-bottom-left"
                />

                {/* Cat Body (warm calico / soft ginger markings) */}
                <ellipse cx="100" cy="125" rx="52" ry="42" fill="#E7E5E4" stroke="#44403C" strokeWidth="4" />
                <path d="M 68 110 Q 85 98, 105 118 Q 90 145, 62 135 Z" fill="#F59E0B" opacity="0.8" />
                <path d="M 125 110 Q 142 98, 145 130 Q 120 145, 115 125 Z" fill="#78716C" opacity="0.8" />

                {/* Front Paws */}
                <ellipse cx="82" cy="155" rx="12" ry="8" fill="#F5F5F4" stroke="#44403C" strokeWidth="3" />
                <ellipse cx="118" cy="155" rx="12" ry="8" fill="#F5F5F4" stroke="#44403C" strokeWidth="3" />
                {/* Paw claws/creases */}
                <line x1="78" y1="154" x2="78" y2="159" stroke="#78716C" strokeWidth="2" />
                <line x1="84" y1="154" x2="84" y2="159" stroke="#78716C" strokeWidth="2" />
                <line x1="114" y1="154" x2="114" y2="159" stroke="#78716C" strokeWidth="2" />
                <line x1="120" y1="154" x2="120" y2="159" stroke="#78716C" strokeWidth="2" />

                {/* Cat Head */}
                <circle cx="100" cy="72" r="38" fill="#F5F5F4" stroke="#44403C" strokeWidth="4" />

                {/* Ears with twitch animation */}
                {/* Left Ear */}
                <polygon
                  points="68,52 64,16 92,42"
                  fill="#E7E5E4"
                  stroke="#44403C"
                  strokeWidth="4"
                  strokeLinejoin="round"
                  className="animate-ear"
                />
                <polygon points="70,48 68,24 88,42" fill="#FDA4AF" />

                {/* Right Ear */}
                <polygon
                  points="132,52 136,16 108,42"
                  fill="#E7E5E4"
                  stroke="#44403C"
                  strokeWidth="4"
                  strokeLinejoin="round"
                />
                <polygon points="130,48 132,24 112,42" fill="#FDA4AF" />

                {/* Head Calico Patches */}
                <path d="M 66 58 Q 80 48, 88 66 Q 74 80, 64 70 Z" fill="#F59E0B" opacity="0.85" />
                <path d="M 132 58 Q 120 48, 114 66 Q 126 80, 134 70 Z" fill="#78716C" opacity="0.85" />

                {/* Eyes (Blinking or smiling arcs) */}
                {isBlinking ? (
                  <>
                    <path d="M 80 72 Q 88 78, 92 72" fill="none" stroke="#44403C" strokeWidth="3" strokeLinecap="round" />
                    <path d="M 108 72 Q 112 78, 120 72" fill="none" stroke="#44403C" strokeWidth="3" strokeLinecap="round" />
                  </>
                ) : (
                  <>
                    {/* Big friendly anime cat eyes */}
                    <ellipse cx="86" cy="70" rx="6" ry="7" fill="#1C1917" />
                    <circle cx="84" cy="67" r="2.5" fill="#FFFFFF" />
                    <ellipse cx="114" cy="70" rx="6" ry="7" fill="#1C1917" />
                    <circle cx="112" cy="67" r="2.5" fill="#FFFFFF" />
                  </>
                )}

                {/* Cute Nose and Mouth */}
                <polygon points="98,78 102,78 100,81" fill="#FB7185" />
                <path d="M 100 81 Q 95 87, 89 84" fill="none" stroke="#44403C" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M 100 81 Q 105 87, 111 84" fill="none" stroke="#44403C" strokeWidth="2.5" strokeLinecap="round" />

                {/* Whiskers */}
                <line x1="76" y1="78" x2="52" y2="74" stroke="#44403C" strokeWidth="2" strokeLinecap="round" />
                <line x1="76" y1="83" x2="54" y2="84" stroke="#44403C" strokeWidth="2" strokeLinecap="round" />
                <line x1="124" y1="78" x2="148" y2="74" stroke="#44403C" strokeWidth="2" strokeLinecap="round" />
                <line x1="124" y1="83" x2="146" y2="84" stroke="#44403C" strokeWidth="2" strokeLinecap="round" />

                {/* Pink Blush on cheeks */}
                <circle cx="76" cy="80" r="5" fill="#FDA4AF" opacity="0.6" />
                <circle cx="124" cy="80" r="5" fill="#FDA4AF" opacity="0.6" />
              </svg>
            </div>
          </div>

          {/* Action Row & Petting Button */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <button
              onClick={handleCatPet}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-amber-500 hover:bg-amber-600 active:scale-95 text-stone-900 font-medium text-sm transition-all shadow-sm cursor-pointer"
            >
              <Heart className="w-4 h-4 text-rose-700 fill-rose-700" />
              <span>Elus Kucing Ini 🐾</span>
            </button>

            <span className="text-xs text-stone-600 italic font-literary">
              Kucing ini selalu siap menemani malam-malam menulismu!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
