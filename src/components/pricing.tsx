const plans = [
  {
    name: "Percuma",
    price: "RM0",
    period: "selamanya",
    desc: "Untuk projek peribadi, FYP, dan laman perkenalan.",
    cta: "Mula Percuma",
    ctaHref: "https://panel.lamanrasmi.com/register",
    ctaPrimary: true,
    features: [
      "1GB XtraSpace",
      "Subdomain percuma",
      "PHP 8+ & MySQL",
      "Tanpa iklan",
      "Softaculous Installer",
      "Panel pengurusan",
    ],
    badge: "Terbaik",
    accent: "gold",
  },
  {
    name: "NVMe SSD",
    price: "RM9.90",
    period: "/bulan",
    desc: "12x lebih berkuasa daripada pelan percuma. Untuk bisnes kecil.",
    cta: "Pilih NVMe SSD",
    ctaHref: "https://panel.lamanrasmi.com/register",
    ctaPrimary: false,
    features: [
      "12x kuasa pelan percuma",
      "NVMe SSD storage",
      "Resource lebih banyak",
      "SSL percuma",
      "E-mel peribadi",
      "Sokongan prioritas",
    ],
    badge: null,
    accent: "coral",
  },
  {
    name: "Enterprise SSD",
    price: "RM19.90",
    period: "/bulan",
    desc: "10x kuasa pelan percuma. Untuk laman web bersaiz sederhana.",
    cta: "Pilih Enterprise",
    ctaHref: "https://panel.lamanrasmi.com/register",
    ctaPrimary: false,
    features: [
      "10x kuasa pelan percuma",
      "SSD storage",
      "Resource optimal",
      "SSL percuma",
      "E-mel peribadi",
      "Sokongan teknikal",
    ],
    badge: null,
    accent: "sage",
  },
];

const accentBorder = {
  gold: "border-gold",
  coral: "border-coral",
  sage: "border-sage",
};

const accentBg = {
  gold: "bg-gold",
  coral: "bg-coral",
  sage: "bg-sage",
};

const accentText = {
  gold: "text-gold",
  coral: "text-coral",
  sage: "text-sage",
};

const ctaBg = {
  gold: "bg-gold hover:bg-yellow-600",
  coral: "bg-coral hover:bg-coral-dark",
  sage: "bg-sage hover:bg-green-700",
};

export function Pricing() {
  return (
    <section id="pembayaran" className="py-24 px-6 bg-cream-dark">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-coral font-medium text-sm tracking-wide uppercase mb-3 font-body">
            Pembayaran
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-deep-teal tracking-tight mb-4">
            Mulakan percuma, naik taraf bila perlu
          </h2>
          <p className="text-charcoal-light text-lg leading-relaxed font-body">
            Pelan percuma kami memberi anda semua yang asas. Naik taraf hanya
            apabila laman web anda berkembang.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl p-8 border-2 transition-all hover:shadow-lg ${
                accentBorder[plan.accent as keyof typeof accentBorder]
              }`}
            >
              {plan.badge && (
                <div className={`absolute -top-3 left-1/2 -translate-x-1/2 ${accentBg[plan.accent as keyof typeof accentBg]} text-white text-xs font-medium px-3 py-1 rounded-full font-body`}>
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-display text-lg font-semibold text-deep-teal mb-1">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl font-display font-semibold tracking-tight ${accentText[plan.accent as keyof typeof accentText]}`}>
                    {plan.price}
                  </span>
                  <span className="text-charcoal-light text-sm font-body">{plan.period}</span>
                </div>
                <p className="text-charcoal-light text-sm mt-3 leading-relaxed font-body">
                  {plan.desc}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-charcoal-light font-body">
                    <svg
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${accentText[plan.accent as keyof typeof accentText]}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>

              <a
                href={plan.ctaHref}
                target="_blank"
                className={`block w-full text-center py-3 rounded-xl font-medium text-sm transition-all font-body ${ctaBg[plan.accent as keyof typeof ctaBg]} text-white`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
