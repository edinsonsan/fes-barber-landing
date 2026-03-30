"use client";

import { motion } from "framer-motion";
import { CalendarDays, TrendingUp, FileText } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <CalendarDays className="h-10 w-10 text-amber-500" />,
      title: "Agenda Inteligente",
      description: "Registra servicios, métodos de pago y clientes en segundos. Dile adiós a los cuadernos perdidos.",
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-amber-500" />,
      title: "Estadísticas Reales",
      description: "Conoce tu ticket promedio, tu mejor día de trabajo y qué servicios te dejan más dinero.",
    },
    {
      icon: <FileText className="h-10 w-10 text-amber-500" />,
      title: "Reportes en PDF",
      description: "Exporta tu historial mensual con un clic. Ideal para cuadrar tu caja o enviar a tu contador.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Todo lo que necesitas para escalar tu negocio
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 hover:shadow-2xl hover:shadow-amber-500/5 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="bg-amber-100 dark:bg-amber-500/10 w-20 h-20 rounded-2xl flex items-center justify-center mb-8">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
