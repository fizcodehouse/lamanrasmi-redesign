export function Hero() {
  return (
    <section className="relative pt-28 pb-20 px-6 overflow-hidden bg-cream stripe-pattern">
      {/* Diagonal stripe accent band — signature element */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-coral via-gold to-coral opacity-80" />

      {/* Large decorative "PERCUMA" watermark */}
      <div className="absolute top-32 right-0 pointer-events-none select-none opacity-[0.04]">
        <span className="font-display text-[200px] md:text-[320px] font-bold text-deep-teal leading-none tracking-tighter">
          PERCUMA
        </span>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left — oversized typographic hero */}
          <div className="text-center md:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-coral-light border border-coral/20 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 bg-coral rounded-full animate-pulse" />
              <span className="text-coral-dark text-sm font-medium font-body">
                100% Percuma &mdash; Tanpa Iklan Selamanya
              </span>
            </div>

            {/* Headline — "PERCUMA" repeated as visual */}
            <h1 className="font-display font-bold leading-[0.9] tracking-tight mb-6">
              <span className="block text-deep-teal text-6xl md:text-7xl lg:text-8xl">
                Asia&apos;s
              </span>
              <span className="block text-coral text-6xl md:text-7xl lg:text-8xl">
                Top FREE
              </span>
              <span className="block text-deep-teal text-6xl md:text-7xl lg:text-8xl">
                Web Hosting
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-charcoal-light max-w-lg mx-auto md:mx-0 leading-relaxed mb-10 font-body">
              LamanRasmi.com menyediakan hosting percuma yang dipercayai oleh
              ribuan pengguna Malaysia sejak 2015. Tiada iklan, tiada caj
              tersembunyi. Hanya laman web anda.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a
                href="https://panel.lamanrasmi.com/register"
                target="_blank"
                className="bg-coral text-white font-medium px-8 py-3.5 rounded-xl hover:bg-coral-dark transition-all hover:shadow-lg hover:shadow-coral/25 text-base font-body"
              >
                Daftar Percuma Sekarang
              </a>
              <a
                href="#ciri-ciri"
                className="border-2 border-deep-teal/20 text-deep-teal font-medium px-8 py-3.5 rounded-xl hover:border-coral hover:text-coral transition-all text-base font-body"
              >
                Kenali Ciri-ciri
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-14 flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm text-charcoal-light font-body">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-coral" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Sejak 2015</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-coral" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>100% Tanpa Iklan</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-coral" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>PHP 8+ &amp; MySQL</span>
              </div>
            </div>
          </div>

          {/* Right — subdomain preview card */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-6 shadow-lg shadow-deep-teal/5 border border-deep-teal/5">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-deep-teal/5">
                <div className="w-3 h-3 rounded-full bg-coral/60" />
                <div className="w-3 h-3 rounded-full bg-gold/60" />
                <div className="w-3 h-3 rounded-full bg-sage/60" />
                <div className="flex-1 bg-cream-dark rounded-md h-6 mx-2" />
              </div>
              {/* URL bar */}
              <div className="mb-4">
                <p className="text-xs text-charcoal-light font-body mb-1">Nama subdomain anda:</p>
                <div className="flex items-center gap-2 bg-cream rounded-lg px-4 py-3">
                  <span className="text-charcoal-light font-body text-sm">https://</span>
                  <span className="text-coral font-display font-bold text-lg">namalaman</span>
                  <span className="text-charcoal-light font-body text-sm">.lamanrasmi.com</span>
                </div>
              </div>
              {/* Status */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-2 bg-sage-light px-3 py-1.5 rounded-full">
                  <span className="w-2 h-2 bg-sage rounded-full" />
                  <span className="text-xs font-medium text-sage font-body">Tersedia!</span>
                </div>
                <div className="flex items-center gap-2 bg-gold-light px-3 py-1.5 rounded-full">
                  <span className="w-2 h-2 bg-gold rounded-full" />
                  <span className="text-xs font-medium text-gold font-body">Percuma</span>
                </div>
              </div>
              <p className="text-sm text-charcoal-light font-body leading-relaxed">
                Daftar sekarang dan dapatkan subdomain percuma serta-merta.
                Tiada kad kredit diperlukan.
              </p>
            </div>
            {/* Decorative stripe behind card */}
            <div className="absolute -z-10 top-4 -right-4 w-full h-full bg-gradient-to-br from-coral/10 to-gold/10 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
