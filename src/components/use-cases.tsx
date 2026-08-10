const useCases = [
  {
    title: "Tugasan FYP",
    desc: "Pelajar universiti menggunakan LamanRasmi untuk memaparkan projek akhir tahun mereka secara dalam talian.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    title: "Sistem Kehadiran",
    desc: "Pihak sekolah dan universiti membangunkan sistem kehadiran digital yang boleh diakses dari mana sahaja.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Skrin COVID-19",
    desc: "Semasa pandemic, ramai yang menggunakan LamanRasmi untuk membina sistem skrining kesihatan komuniti.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Sistem Pendaftaran",
    desc: "Organisasi dan NGO menggunakan platform ini untuk sistem pendaftaran acara dan keanggotaan.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "E-dagang",
    desc: "Pengecut kecil memulakan perniagaan dalam talian dengan laman web e-dagang menggunakan Softaculous.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
      </svg>
    ),
  },
  {
    title: "Laman Bisnes",
    desc: "Usaha kecil dan sederhana (SME) membina kehadiran digital profesional tanpa kos hosting.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

export function UseCases() {
  return (
    <section id="kesgunaan" className="py-24 px-6 bg-deep-teal relative overflow-hidden">
      {/* Subtle stripe pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 12px, rgba(255,255,255,0.5) 12px, rgba(255,255,255,0.5) 24px)'
      }} />

      <div className="max-w-6xl mx-auto relative">
        <div className="max-w-2xl mb-16">
          <p className="text-gold font-medium text-sm tracking-wide uppercase mb-3 font-body">
            Kesgunaan
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
            Dibina untuk pelbagai keperluan
          </h2>
          <p className="text-teal-200 text-lg leading-relaxed font-body">
            Daripada tugasan kuliah sehingga sistem kebangsaan, LamanRasmi
            menyediakan asas yang kukuh untuk setiap projek.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {useCases.map((uc, i) => (
            <div
              key={i}
              className="bg-deep-teal-700/50 border border-white/10 rounded-xl p-6 hover:border-coral/40 transition-colors"
            >
              <div className="text-coral mb-4">{uc.icon}</div>
              <h3 className="font-display text-white font-semibold text-lg mb-2 tracking-tight">
                {uc.title}
              </h3>
              <p className="text-teal-200 text-sm leading-relaxed font-body">{uc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
