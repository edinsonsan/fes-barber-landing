"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Play, TrendingUp, Scissors } from "lucide-react";

export function Hero() {
  const appLink = "https://play.google.com/store/apps/details?id=com.fescore.barber";

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Decorative background glass elements */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-amber-500/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COL: Content & CTA */}
          <div className="text-center lg:text-left pt-10 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white leading-tight">
                Digitaliza tu Barbería. <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-300">
                  Despídete del papel.
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                Agenda citas fácilmente, lleva el control exacto de tus cortes diarios y fideliza a tus clientes. Todo desde una sola aplicación diseñada exclusivamente para barberos.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8"
            >
              <a
                href={appLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-full text-lg font-bold hover:-translate-y-1 hover:shadow-xl hover:shadow-white/20 transition-all w-full sm:w-auto active:scale-95"
              >
                <Play className="h-6 w-6 fill-current" />
                Disponible en Google Play
              </a>
              <p className="text-sm text-slate-400 font-medium whitespace-nowrap">
                Próximamente para iOS
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              className="mt-16 inline-flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl py-4 px-6 shadow-sm mx-auto lg:mx-0"
            >
              <span className="text-amber-500 font-extrabold text-3xl">
                <CountUp end={500} duration={3} separator="," prefix="+" />
              </span>
              <p className="text-sm md:text-base font-medium text-slate-200 text-center sm:text-left">
                cortes registrados este mes <br className="hidden sm:block" />
                <span className="text-xs md:text-sm text-slate-400 font-medium">por barberos latinoamericanos</span>
              </p>
            </motion.div>
          </div>

          {/* RIGHT COL: Animated Smartphone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex justify-center items-center pb-10 lg:pb-0 relative"
          >
            {/* Infinite floating wrapper */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-[300px] h-[600px] border-[8px] border-slate-800 rounded-[3rem] relative overflow-hidden bg-slate-950 shadow-2xl shrink-0"
            >
              {/* Hardware Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[24px] bg-slate-800 rounded-b-3xl z-20" />
              
              {/* Fake UI Inside Screen */}
              <div className="p-5 pt-12 h-full flex flex-col relative z-10 w-full overflow-hidden">
                
                {/* Simulated Header */}
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h2 className="text-[11px] text-slate-400 font-semibold mb-0.5 tracking-wider uppercase">Hola, Barbero 👋</h2>
                    <p className="text-lg font-bold text-white">Dashboard</p>
                  </div>
                  <div className="w-10 h-10 bg-amber-500/10 rounded-full flex items-center justify-center shadow-inner">
                    <TrendingUp className="h-5 w-5 text-amber-500" />
                  </div>
                </div>

                {/* Animated Chart */}
                <div className="bg-slate-900 rounded-2xl p-4 shadow-sm border border-slate-800 mb-6">
                  <p className="text-xs text-slate-400 font-semibold mb-5">Ingresos de la semana</p>
                  <div className="flex items-end justify-between h-24 gap-2">
                    {[
                      ["20%", "40%", "30%", "50%"],
                      ["30%", "60%", "40%", "70%"],
                      ["25%", "50%", "35%", "60%"],
                      ["50%", "80%", "60%", "90%"],
                      ["40%", "70%", "50%", "80%"],
                      ["70%", "100%", "80%", "100%"], // Sábado
                      ["60%", "90%", "70%", "95%"]
                    ].map((keyframes, i) => (
                      <div key={i} className="w-6 bg-slate-800 rounded-t-sm relative flex-1 h-full flex flex-col justify-end">
                        <motion.div 
                          initial={{ height: "0%" }}
                          animate={{ height: keyframes }}
                          transition={{ 
                            duration: 4, 
                            repeat: Infinity, 
                            repeatType: "reverse", 
                            ease: "easeInOut",
                            delay: i * 0.2 
                          }}
                          className={`w-full rounded-t-md ${i === 5 ? 'bg-amber-500' : 'bg-amber-500/80'}`}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-3 text-[9px] text-slate-400 font-bold uppercase tracking-widest">
                    <span>L</span><span>M</span><span>M</span><span>J</span><span>V</span><span className="text-amber-500">S</span><span>D</span>
                  </div>
                </div>

                {/* Simulated Cards List */}
                <div className="flex-1 w-full flex flex-col pt-1">
                  <p className="text-[13px] font-bold text-white mb-3">Últimos Cortes</p>
                  <div className="flex flex-col gap-2.5">
                    {[
                      { name: "Corte Clásico", price: "S/ 35", time: "10:30 AM" },
                      { name: "Fade + Barba", price: "S/ 55", time: "11:45 AM" },
                      { name: "Perfilado Niño", price: "S/ 25", time: "01:15 PM" },
                    ].map((cut, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.5 + (i * 0.2) }}
                        className="bg-slate-900 p-3 rounded-xl flex items-center justify-between border border-slate-800 shadow-sm"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center shrink-0">
                            <Scissors className="h-4 w-4 text-slate-300" />
                          </div>
                          <div>
                            <p className="text-[12px] font-bold text-white leading-tight mb-0.5">{cut.name}</p>
                            <p className="text-[10px] text-slate-500 font-medium">{cut.time}</p>
                          </div>
                        </div>
                        <span className="text-[13px] font-bold text-amber-500 whitespace-nowrap">{cut.price}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* iPhone bottom bar indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[35%] h-[4px] bg-slate-700/60 rounded-full" />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
