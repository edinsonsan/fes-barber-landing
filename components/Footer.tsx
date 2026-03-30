import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-8">

        {/* Branding & Info */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
            <Image
              src="/logo.png"
              alt="FES Barber"
              width={40}
              height={40}
            />
            <span className="font-bold text-2xl tracking-tight text-white">
              FES Barber
            </span>
          </div>
          <p className="text-slate-400 text-sm mb-4">
            Digitalizando la industria en Latam.
          </p>
          <p className="text-slate-500 text-sm font-medium">
            © 2026 FES Core. Todos los derechos reservados.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-10 sm:gap-16">
          {/* Contacto */}
          <div className="flex flex-col items-center sm:items-start gap-3">
            <span className="text-white font-semibold mb-1">Contacto</span>
            <a
              href="https://wa.me/51927306862"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-amber-500 hover:text-amber-400 transition-colors text-center sm:text-left"
            >
              Soporte vía WhatsApp
              <br />
              <span className="text-slate-300 hover:text-white mt-1 block">
                +51 927 306 862
              </span>
            </a>
          </div>

          {/* Legal */}
          <div className="flex flex-col items-center sm:items-start gap-4">
            <span className="text-white font-semibold mb-1">Legal</span>
            <a
              href="https://edinsonsan.github.io/fesgo-docs/terminos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              Términos de Servicio
            </a>
            <a
              href="https://edinsonsan.github.io/fesgo-docs/privacidad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              Política de Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
