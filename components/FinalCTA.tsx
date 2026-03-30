"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 bg-amber-500 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-amber-400 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-amber-600 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-950 tracking-tight mb-8">
            ¿Listo para llevar tu barbería al siguiente nivel?
          </h2>
          <p className="text-xl md:text-2xl text-slate-900/80 mb-10 font-medium">
            Únete a miles de barberos que ya están maximizando sus ganancias y ahorrando horas de trabajo diario.
          </p>
          
          <a
            href="https://play.google.com/store/apps/details?id=com.fescore.barber"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-slate-950 text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-slate-900 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/30 transition-all active:scale-95 w-full sm:w-auto"
          >
            <Play className="h-7 w-7 fill-current" />
            Descargar Gratis Ahora
          </a>
        </motion.div>
      </div>
    </section>
  );
}
