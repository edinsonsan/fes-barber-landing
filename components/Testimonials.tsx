"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      quote: "Desde que uso FES Barber, sé exactamente cuánto gano por semana. El reporte en PDF me salvó la vida.",
      author: "Carlos Gómez",
      role: "Dueño de Barbería en Piura",
    },
    {
      quote: "Súper fácil de usar. Ya no pierdo tiempo sumando tickets al final del día, la app hace la estadística sola.",
      author: "Miguel",
      role: "Barbero Independiente",
    },
    {
      quote: "Por fin dejé mi cuaderno manchado. Llevo el control de mis cortes y de mi equipo de trabajo sin complicaciones.",
      author: "Roberto Silva",
      role: "Propietario de Urban Cuts",
    },
    {
      quote: "Lo mejor es poder ver qué días gano más dinero para organizar mejor mis horarios. ¡Recomendadísimo para todo barbero!",
      author: "Daniel Paredes",
      role: "Barbero",
    },
    {
      quote: "Mi contador me pidió el reporte de ingresos mensuales, con FES Barber solo presioné un botón y se lo envié. Increíble la facilidad.",
      author: "Jorge L.",
      role: "Dueño de Barber Shop",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-50 dark:bg-slate-900/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 px-0 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16 px-4"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Lo que dicen nuestros expertos
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-4 text-lg max-w-2xl mx-auto">
            Únete a la nueva generación de barberos que ya digitalizan sus ingresos.
          </p>
        </motion.div>

        {/* Horizontal Scrollable Carousel */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 px-4 sm:px-6 hide-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-lg transition-shadow duration-300 relative shrink-0 snap-center min-w-[320px] w-[85vw] sm:w-[400px] flex flex-col"
            >
              <div className="flex items-center gap-1.5 mb-6 md:mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-lg md:text-xl font-medium italic text-slate-700 dark:text-slate-300 mb-8 leading-relaxed flex-1">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4 mt-auto border-t border-slate-100 dark:border-slate-800 pt-6">
                <div className="w-12 h-12 bg-amber-100 dark:bg-amber-500/20 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-amber-600 dark:text-amber-500 font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white text-base md:text-lg">
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
