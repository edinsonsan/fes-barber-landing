"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Decorative background glass elements */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-amber-500/20 dark:bg-amber-500/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
        {/* Titular Impactante */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-slate-900 dark:text-white leading-tight">
            Digitaliza tu Barbería. <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-300">
              Despídete del papel.
            </span>
          </h1>
        </motion.div>

        {/* Subtítulo de Beneficios */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <p className="mt-6 text-lg md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Agenda citas fácilmente, lleva el control exacto de tus cortes diarios y fideliza a tus clientes. Todo desde una sola aplicación diseñada exclusivamente para barberos.
          </p>
        </motion.div>

        {/* Botones de Acción */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col items-center gap-4 mt-8"
        >
          <button className="flex items-center justify-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-full text-lg font-bold hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/20 dark:hover:shadow-white/20 transition-all w-full sm:w-auto active:scale-95">
            <Play className="h-6 w-6 fill-current" />
            Disponible en Google Play
          </button>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
            Próximamente para iOS
          </p>
        </motion.div>

        {/* Indicador de Confianza / Stats Animados */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="mt-16 inline-flex flex-col sm:flex-row items-center justify-center gap-2 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-2xl py-4 px-8 shadow-sm"
        >
          <span className="text-amber-500 font-extrabold text-3xl">
            +<CountUp end={500} duration={3} separator="," />
          </span>
          <p className="text-lg font-medium text-slate-700 dark:text-slate-200">
            cortes registrados este mes
          </p>
        </motion.div>
      </div>
    </section>
  );
}
