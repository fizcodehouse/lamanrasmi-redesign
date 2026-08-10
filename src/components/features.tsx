const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
      </svg>
    ),
    title: "100% Tanpa Iklan",
    desc: "Laman web anda bersih tanpa sebarang iklan pihak ketiga. Pelawat anda hanya melihat kandungan anda sahaja.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
      </svg>
    ),
    title: "Domain Percuma + 1GB",
    desc: "Dapatkan subdomain percuma serta-merta dengan 1GB XtraSpace untuk laman web anda.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "PHP 8+ & MySQL",
    desc: "Stack teknologi terkini dengan sokongan PHP 8 dan pangkalan data MySQL penuh.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: "Softaculous Installer",
    desc: "Pasang WordPress, Joomla, dan 400+ aplikasi lain dengan satu klik sahaja.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Panel Mudah Digunakan",
    desc: "Panel pengurusan yang intuitif — uruskan fail, pangkalan data, dan e-mel dengan mudah.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Aplikasi Google Play",
    desc: "Urus laman web anda di mana sahaja melalui aplikasi mudah alih LamanRasmi di Google Play.",
  },
];

export function Features() {
  return (
    <section id="ciri-ciri" className="py-24 px-6 bg-cream stripe-pattern">
      {/* Decorative stripe band */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="h-1 w-20 bg-gradient-to-r from-coral to-gold rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-coral font-medium text-sm tracking-wide uppercase mb-3 font-body">
            Ciri-ciri
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-deep-teal tracking-tight mb-4">
            Semua yang anda perlukan, percuma
          </h2>
          <p className="text-charcoal-light text-lg leading-relaxed font-body">
            LamanRasmi memberikan anda semua alat asas untuk membina dan mengurus
            laman web tanpa sebarang kos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white border-l-4 border-coral rounded-r-xl p-6 hover:shadow-lg hover:shadow-deep-teal/5 transition-all duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-coral-light rounded-xl flex items-center justify-center text-coral flex-shrink-0">
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-deep-teal mb-1.5 tracking-tight">
                    {f.title}
                  </h3>
                  <p className="text-charcoal-light text-sm leading-relaxed font-body">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
