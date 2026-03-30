"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const faqs = [
    {
      question: "¿Tiene algún costo?",
      answer: "Puedes descargar y usar sus funciones completamente gratis. También ofrecemos un plan Premium para barberías de gran flujo que necesiten funciones analíticas avanzadas."
    },
    {
      question: "¿Mis datos están seguros?",
      answer: "Absolutamente. Usamos encriptación de grado bancario para asegurar que tu información y los datos de tus clientes estén 100% protegidos y respaldados en la nube."
    },
    {
      question: "¿Funciona sin internet?",
      answer: "Sí, FES Barber cuenta con soporte offline. Puedes seguir registrando cortes y la aplicación sincronizará los datos automáticamente cuando vuelvas a conectarte a internet."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-slate-950 overflow-hidden border-t border-slate-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="text-slate-400 mt-4 text-lg">
            Todo lo que necesitas saber sobre FES Barber.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <details className="group bg-slate-900 border border-slate-800 rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer transition-colors hover:border-amber-500/30">
                <summary className="flex items-center justify-between gap-1.5 text-white font-semibold text-lg">
                  {faq.question}
                  <ChevronDown className="h-5 w-5 shrink-0 transition-transform duration-300 group-open:-rotate-180 text-amber-500" />
                </summary>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="mt-4 leading-relaxed text-slate-400"
                >
                  {faq.answer}
                </motion.p>
              </details>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
