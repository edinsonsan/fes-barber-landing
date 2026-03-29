export function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
          © 2026 FES Core. Todos los derechos reservados.
        </p>
        
        <div className="flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
            Términos
          </a>
          <a href="#" className="text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
            Privacidad
          </a>
          <a href="#" className="text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
            Soporte
          </a>
        </div>
      </div>
    </footer>
  );
}
