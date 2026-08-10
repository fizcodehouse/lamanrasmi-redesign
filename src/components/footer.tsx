export function Footer() {
  return (
    <footer className="bg-deep-teal text-teal-200 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-coral rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold font-display">L</span>
              </div>
              <span className="font-display font-semibold text-white text-lg tracking-tight">
                LamanRasmi
              </span>
            </div>
            <p className="text-sm leading-relaxed font-body">
              Penyedia hosting percuma nombor satu Malaysia sejak 2015.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-medium text-sm mb-4 font-body">Produk</h4>
            <ul className="space-y-2.5 text-sm font-body">
              <li>
                <a
                  href="https://panel.lamanrasmi.com/register"
                  target="_blank"
                  className="hover:text-gold transition-colors"
                >
                  Hosting Percuma
                </a>
              </li>
              <li>
                <a
                  href="https://panel.lamanrasmi.com/register"
                  target="_blank"
                  className="hover:text-gold transition-colors"
                >
                  NVMe SSD Hosting
                </a>
              </li>
              <li>
                <a
                  href="https://panel.lamanrasmi.com/register"
                  target="_blank"
                  className="hover:text-gold transition-colors"
                >
                  Enterprise SSD Hosting
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium text-sm mb-4 font-body">Sumber</h4>
            <ul className="space-y-2.5 text-sm font-body">
              <li>
                <a
                  href="https://hub.lamanrasmi.com"
                  target="_blank"
                  className="hover:text-gold transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="https://panel.lamanrasmi.com"
                  target="_blank"
                  className="hover:text-gold transition-colors"
                >
                  Pelanggan Portal
                </a>
              </li>
              <li>
                <a
                  href="https://play.google.com/store/apps"
                  target="_blank"
                  className="hover:text-gold transition-colors"
                >
                  Aplikasi Google Play
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium text-sm mb-4 font-body">Maklumat</h4>
            <ul className="space-y-2.5 text-sm font-body">
              <li>
                <span className="hover:text-white transition-colors">
                  Powered by iFastnet
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors">
                  Direka oleh SME Web Designs
                </span>
              </li>
              <li>
                <a
                  href="https://ewallzsolutions.com"
                  target="_blank"
                  className="hover:text-gold transition-colors"
                >
                  ewallzsolutions.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Decorative stripe */}
        <div className="h-1 w-full bg-gradient-to-r from-coral via-gold to-coral rounded-full opacity-60 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-teal-300 font-body">
          <p>&copy; 2026 LamanRasmi.com. Hak cipta terpelihara.</p>
          <p>Penyedia hosting percuma Malaysia sejak 2015</p>
        </div>
      </div>
    </footer>
  );
}
