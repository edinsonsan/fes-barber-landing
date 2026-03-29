"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      quote: "Desde que uso FES Barber, sé exactamente cuánto gano por semana. El reporte en PDF me salvó la vida.",
      author: "Carlos",
      role: "Dueño de Barbería en Piura",
    },
    {
      quote: "Súper fácil de usar. Ya no pierdo tiempo sumando tickets al final del día, la app hace la estadística sola.",
      author: "Miguel",
      role: "Barbero Independiente",
    },
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Lo que dicen nuestros expertos
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl p-10 shadow-sm hover:shadow-lg transition-shadow duration-300 relative"
            >
              <div className="flex items-center gap-1.5 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-xl md:text-2xl font-medium italic text-slate-700 dark:text-slate-300 mb-10 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-100 dark:bg-amber-500/20 rounded-full flex items-center justify-center">
                  <span className="text-amber-600 dark:text-amber-500 font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white text-lg">
                    {testimonial.author}
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mt-0.5">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
