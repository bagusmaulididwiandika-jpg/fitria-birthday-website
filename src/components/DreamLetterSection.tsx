import React from 'react';
import { Heart, Feather, Bookmark } from 'lucide-react';

export const DreamLetterSection: React.FC = () => {
  return (
    <section id="surat" className="py-20 sm:py-28 px-4 sm:px-6 bg-[#F5EFE6] relative overflow-hidden">
      {/* Background ambient warmth */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-200/25 blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Subtle section label */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500 mb-2">
            <Feather className="w-3.5 h-3.5 text-rose-600" />
            <span>INTI CERITA · SURAT UNTUK FITRIA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-medium text-stone-900 tracking-tight">
            Untuk Mimpi yang Kamu Simpan.
          </h2>
        </div>

        {/* The Handwritten Manuscript Letter Container */}
        <div className="bg-[#FFFDF9] rounded-2xl shadow-xl border border-stone-300/80 p-7 sm:p-12 md:p-16 relative paper-texture">
          {/* Top Stamp / Wax Seal Motif */}
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-stone-200 text-stone-400 font-mono text-xs">
            <div className="flex items-center gap-2">
              <Bookmark className="w-4 h-4 text-rose-700" />
              <span>Surat Terbuka Untuk Sastrawan Masa Depan</span>
            </div>
            <span>30 Oktober 2008</span>
          </div>

          {/* Letter Content with exquisite literary typography */}
          <div className="space-y-6 font-literary text-base sm:text-lg text-stone-800 leading-[1.85]">
            <p className="font-serif-display text-xl sm:text-2xl font-semibold text-stone-900">
              Fitria,
            </p>

            <p>
              Di hari ulang tahunmu ini, ada satu hal yang ingin disampaikan kepadamu.
            </p>

            <p>
              Aku tahu kamu punya cita-cita untuk menjadi seorang sastrawan. Aku juga tahu terkadang jalan menuju sesuatu yang kita inginkan tidak selalu sederhana, terutama ketika ada harapan lain yang datang dari orang-orang yang kita sayangi.
            </p>

            <p>
              Mungkin ada saatnya kamu merasa bingung harus melangkah ke mana. Mungkin ada saatnya mimpimu terasa jauh karena jalan yang kamu bayangkan tidak sepenuhnya sama dengan jalan yang diharapkan orang lain.
            </p>

            <p className="font-medium text-stone-950 bg-amber-50/70 p-4 rounded-lg border-l-3 border-amber-600">
              Tapi, tolong ingat satu hal: <span className="text-rose-900 font-semibold">keinginanmu untuk menulis itu tetap berharga.</span>
            </p>

            <p>
              Menjadi sastrawan bukan hanya soal gelar atau pekerjaan. Itu juga tentang keberanian untuk mengamati dunia, memahami manusia, merangkai kata, dan membagikan cerita yang mungkin tidak bisa disampaikan dengan cara lain.
            </p>

            <p>
              Kamu tidak harus menyelesaikan seluruh masa depanmu hari ini. Kamu boleh belajar, berkembang, mencari kesempatan, dan membicarakan keinginanmu secara perlahan dengan orang-orang yang kamu sayangi.
            </p>

            <p className="italic text-stone-700">
              Harapan orang tuamu juga bisa datang dari kepedulian mereka terhadap masa depanmu. Perbedaan harapan tidak selalu berarti kamu harus berhenti bermimpi. Mungkin masih ada ruang untuk saling memahami dan mencari jalan yang bisa kamu perjuangkan dengan bijak.
            </p>

            <p>
              Apa pun jalan yang nantinya kamu pilih, semoga kamu tidak kehilangan bagian dirimu yang senang menulis.
            </p>

            <p>
              Teruslah menulis cerpen. Teruslah membaca. Teruslah belajar merangkai kata. Bahkan ketika tidak ada yang membaca tulisanmu, setiap halaman yang kamu selesaikan tetap menjadi bagian dari perjalananmu.
            </p>

            <p>
              Aku berharap suatu hari nanti kamu bisa melihat kembali tulisan-tulisan lamamu dan berkata, <span className="font-medium text-stone-900">&lsquo;Ternyata aku sudah berjalan sejauh ini.&rsquo;</span>
            </p>

            <div className="pt-4 space-y-4">
              <p className="font-serif-display text-xl text-rose-950 font-medium">
                Selamat ulang tahun, Fitria.
              </p>

              <p>
                Semoga kamu tumbuh menjadi seseorang yang bukan hanya mampu menuliskan cerita yang indah, tetapi juga menemukan keberanian untuk menjalani ceritamu sendiri.
              </p>

              <p>
                Dan semoga, di antara semua cerita yang kamu tulis untuk orang lain, kamu juga mendapatkan kehidupan yang membuatmu bahagia.
              </p>
            </div>

            {/* Sign-off */}
            <div className="pt-8 text-right font-handwriting text-2xl sm:text-3xl text-stone-700">
              Dengan harapan baik untuk semua halaman yang belum kamu tulis.
            </div>
          </div>

          {/* Letter Bottom Embellishment */}
          <div className="mt-10 pt-6 border-t border-stone-200/80 flex items-center justify-between text-xs text-stone-600 font-mono">
            <span>Ditulis dengan ketulusan</span>
            <div className="flex items-center gap-1.5 text-rose-700">
              <Heart className="w-3.5 h-3.5 fill-rose-600" />
              <span>30 Oktober</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
