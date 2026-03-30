"use client";

import { Scissors, Menu, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Inicio", href: "#home" },
    { name: "Características", href: "#features" },
    { name: "Testimonios", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    {
      name: "Contacto",
      href: "https://wa.me/51927306862?text=Hola,%20te%20escribo%20desde%20la%20web%20de%20FES%20Barber%20y%20quiero%20información.",
      external: true
    },
  ];

  const appLink = "https://play.google.com/store/apps/details?id=com.fescore.barber";

  return (
    <nav className="fixed top-0 z-50 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer relative z-50">
            {/* <Scissors className="h-7 w-7 text-amber-500" /> */}
            <Image
              src="/logo.png"
              alt="FES Barber"
              width={50}
              height={50}
            />
            <span className="font-bold text-2xl tracking-tight text-white">
              FES Barber
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-amber-500 transition-colors"
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 relative z-50">
            <a
              href={appLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2.5 px-6 rounded-full transition-all shadow-lg shadow-amber-500/30 active:scale-95 text-sm"
            >
              Descargar App
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-white"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-0 w-full bg-slate-950 border-b border-slate-800 shadow-xl md:hidden overflow-hidden"
          >
            <div className="py-4 px-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-white hover:text-amber-500 block py-3 border-b border-slate-800 last:border-0"
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {link.name}
                </a>
              ))}
              <a
                href={appLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-2 w-full bg-amber-500 text-white font-bold py-3.5 px-6 rounded-xl text-center shadow-lg active:scale-95 transition-transform"
              >
                Descargar Gratis
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
