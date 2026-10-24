import React, { useState, useEffect } from 'react';
import { PenTool, BookOpen, Lightbulb, Save, Download, Trash2, CheckCircle2 } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

export const WritersRoom: React.FC = () => {
  const [lampOn, setLampOn] = useState(true);
  const [showNotebook, setShowNotebook] = useState(false);
  const [writerText, setWriterText] = useState('');
  const [savedNotification, setSavedNotification] = useState(false);

  // Load any previously saved draft from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('fitria_cerpen_draft');
    if (saved) {
      setWriterText(saved);
    }
  }, []);

  const handleSaveDraft = () => {
    localStorage.setItem('fitria_cerpen_draft', writerText);
    audioEngine.playSparkle();
    setSavedNotification(true);
    setTimeout(() => setSavedNotification(false), 2500);
  };

  const handleDownload = () => {
    audioEngine.playSparkle();
    const element = document.createElement('a');
    const file = new Blob([writerText || 'Setiap penulis pernah memulai dari satu kalimat.\n\n- Fitria Salsa Bela'], {
      type: 'text/plain;charset=utf-8',
    });
    element.href = URL.createObjectURL(file);
    element.download = 'cerita_fitria_salsa_bela.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setWriterText(e.target.value);
    audioEngine.playTypewriterKey();
  };

  return (
    <section
      id="penulis"
      className={`py-20 sm:py-28 px-4 sm:px-6 transition-colors duration-700 relative overflow-hidden ${
        lampOn ? 'bg-[#F5EFE6]' : 'bg-[#1C1917] text-stone-200'
      }`}
    >
      {/* Warm Ambient Desk Lamp Glow */}
      {lampOn && (
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[40rem] h-[30rem] bg-amber-200/40 rounded-full blur-3xl pointer-events-none" />
      )}

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-6 border-b border-stone-300/80">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-amber-800/80 mb-2">
              <PenTool className="w-3.5 h-3.5 text-amber-700" />
              <span>THE WRITER'S ROOM · DUNIA KECIL SEORANG PENULIS</span>
            </div>
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-serif-display font-medium tracking-tight ${
                lampOn ? 'text-stone-900' : 'text-amber-50'
              }`}
            >
              Untuk Cerita-Cerita yang Belum Selesai Ditulis.
            </h2>
          </div>

          {/* Desk Lamp Light Switch */}
          <button
            onClick={() => {
              audioEngine.playTypewriterKey();
              setLampOn(!lampOn);
            }}
            className={`self-start sm:self-auto inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono transition-all border ${
              lampOn
                ? 'bg-amber-100/90 text-amber-900 border-amber-300 shadow-xs hover:bg-amber-200'
                : 'bg-stone-800 text-stone-300 border-stone-700 hover:bg-stone-700'
            }`}
            title="Sakelar lampu meja penulis"
          >
            <Lightbulb className={`w-3.5 h-3.5 ${lampOn ? 'text-amber-600 fill-amber-500' : 'text-stone-500'}`} />
            <span>{lampOn ? 'Lampu Meja: Menyala' : 'Lampu Meja: Meredup'}</span>
          </button>
        </div>

        {/* The Writer's Room Core Prose */}
        <div
          className={`p-6 sm:p-10 rounded-2xl border transition-all duration-300 shadow-md mb-10 ${
            lampOn
              ? 'bg-[#FAF6EE] border-stone-300/80 text-stone-800 paper-texture'
              : 'bg-[#292524] border-stone-700 text-stone-200'
          }`}
        >
          {/* Vintage Manuscript Header Bar */}
          <div className="flex items-center justify-between text-xs font-mono text-stone-600 pb-4 mb-6 border-b border-stone-300/60">
            <span>CATATAN SASTRA · HALAMAN 01</span>
            <span>30 OKTOBER 2008</span>
          </div>

          {/* Inspirational paragraphs */}
          <div className="space-y-6 font-literary text-base sm:text-lg leading-relaxed">
            <p>
              Fitria, kamu punya sesuatu yang indah: <strong className="font-semibold text-rose-900 dark:text-rose-400">keinginan untuk menciptakan cerita</strong>. Dari kata-kata yang sederhana, kamu bisa membangun dunia, menghidupkan tokoh, dan membuat orang lain merasakan sesuatu melalui tulisanmu.
            </p>

            <p>
              Jangan pernah menganggap hobi menulis sebagai sesuatu yang kecil. Bisa jadi, cerita yang sekarang kamu tulis hanya di halaman buku atau catatan pribadi suatu hari nanti akan menjadi sesuatu yang berarti bagi orang lain.
            </p>

            <p className="italic text-stone-700 dark:text-stone-300 border-l-2 border-amber-600/60 pl-4 py-1">
              &ldquo;Tidak semua cerita harus langsung menjadi sempurna. Tidak semua mimpi harus segera menemukan jalannya. Kadang, yang terpenting adalah tetap menulis, terus belajar, dan tidak kehilangan alasan mengapa kamu memulainya.&rdquo;
            </p>
          </div>

          {/* Trigger to Open Digital Notebook */}
          <div className="mt-8 pt-6 border-t border-stone-300/60 flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={() => {
                audioEngine.playSparkle();
                setShowNotebook(!showNotebook);
              }}
              className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-stone-900 text-amber-50 hover:bg-stone-800 active:scale-95 text-sm font-medium transition-all shadow-sm cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>{showNotebook ? 'Tutup Buku Catatan' : 'Buka Halaman Kosong'}</span>
            </button>

            <span className="text-xs font-handwriting text-2xl text-stone-600">
              ~ Setiap kata adalah langkah perjalanan ~
            </span>
          </div>
        </div>

        {/* Interactive Virtual Notebook Modal / Expansion */}
        {showNotebook && (
          <div className="bg-[#FFFDF9] rounded-2xl border-2 border-amber-800/20 p-6 sm:p-8 shadow-2xl animate-fadeIn text-stone-900">
            {/* Notebook Ring Binder Header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b-2 border-stone-200">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                <span className="ml-2 font-serif-display font-semibold text-sm text-stone-800">
                  Buku Catatan Digital Fitria
                </span>
              </div>

              <div className="text-xs font-mono text-stone-600">
                Penyimpanan Lokal Aman (Browser)
              </div>
            </div>

            {/* Quote Prompt */}
            <div className="bg-amber-50/70 border-l-4 border-amber-500 p-4 rounded-r-md mb-4 text-sm font-literary italic text-amber-900">
              &ldquo;Setiap penulis pernah memulai dari satu kalimat.&rdquo;
            </div>

            {/* Virtual Lined Paper Textarea */}
            <div className="relative">
              <textarea
                value={writerText}
                onChange={handleTextChange}
                placeholder="Tulis satu kalimat pembuka cerpenmu, bait puisi, ide karakter, atau harapan kecilmu di sini..."
                rows={7}
                className="w-full p-4 rounded-lg bg-[#FAF8F5] border border-stone-300 font-literary text-base sm:text-lg text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent leading-relaxed resize-y"
              />
            </div>

            {/* Word count & Actions */}
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-xs font-mono text-stone-600">
                <span>{writerText.trim() ? writerText.trim().split(/\s+/).length : 0} Kata</span>
                <span>·</span>
                <span>{writerText.length} Karakter</span>
                {savedNotification && (
                  <span className="flex items-center gap-1 text-emerald-700 font-semibold animate-pulse">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Tersimpan!
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                {writerText && (
                  <button
                    onClick={() => {
                      if (window.confirm('Hapus draf tulisan saat ini?')) {
                        setWriterText('');
                        localStorage.removeItem('fitria_cerpen_draft');
                      }
                    }}
                    className="p-2 rounded-lg text-stone-600 hover:text-rose-700 hover:bg-stone-100 transition-colors"
                    title="Kosongkan Halaman"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}

                <button
                  onClick={handleSaveDraft}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-stone-900 text-stone-100 hover:bg-stone-800 text-xs font-medium transition-colors shadow-xs"
                >
                  <Save className="w-3.5 h-3.5 text-amber-400" />
                  <span>Simpan Catatan</span>
                </button>

                <button
                  onClick={handleDownload}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-600 text-white hover:bg-amber-700 text-xs font-medium transition-colors shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Unduh (.txt)</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
