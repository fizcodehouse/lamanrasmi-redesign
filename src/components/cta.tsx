export function CTA() {
  return (
    <section className="py-24 px-6 bg-coral relative overflow-hidden">
      {/* Diagonal stripe pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 12px, rgba(255,255,255,0.5) 12px, rgba(255,255,255,0.5) 24px)'
      }} />

      {/* Large decorative text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-5">
        <span className="font-display text-[200px] md:text-[400px] font-bold text-white leading-none tracking-tighter">
          PERCUMA
        </span>
      </div>

      <div className="max-w-3xl mx-auto text-center relative">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
          Sedia untuk memulakan laman web anda?
        </h2>
        <p className="text-white/90 text-lg leading-relaxed mb-10 font-body">
          Daftar sekarang dan dapatkan hosting percuma serta-merta. Tiada kad
          kredit, tiada tempoh percubaan — terus percuma.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://panel.lamanrasmi.com/register"
            target="_blank"
            className="bg-white text-coral font-medium px-8 py-3.5 rounded-xl hover:bg-cream transition-all hover:shadow-lg text-base font-body"
          >
            Daftar Percuma Sekarang
          </a>
          <a
            href="https://hub.lamanrasmi.com"
            target="_blank"
            className="border-2 border-white/40 text-white font-medium px-8 py-3.5 rounded-xl hover:border-white hover:bg-white/10 transition-all text-base font-body"
          >
            Baca Blog Kami
          </a>
        </div>
      </div>
    </section>
  );
}
