"use client";

import { useTheme } from "next-themes";
import { Scissors, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Evitar problemas de hidratación
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/70 dark:bg-slate-950/70 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <Scissors className="h-7 w-7 text-amber-500" />
            <span className="font-bold text-2xl tracking-tight text-slate-900 dark:text-white">
              FES Barber
            </span>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Alternar modo oscuro"
            >
              {mounted ? (
                theme === "dark" ? (
                  <Sun className="h-5 w-5 text-amber-500" />
                ) : (
                  <Moon className="h-5 w-5 text-slate-700" />
                )
              ) : (
                <div className="h-5 w-5" /> // Placeholder del mismo tamaño
              )}
            </button>
            <button className="hidden sm:block bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2.5 px-6 rounded-full transition-all shadow-lg shadow-amber-500/30 active:scale-95">
              Descargar App
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
