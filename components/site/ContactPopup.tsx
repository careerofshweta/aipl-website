"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin, Phone, X } from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm";

export function ContactPopup() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] grid place-items-center bg-black/62 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-popup-title"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.97 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="light-section premium-card relative max-h-[92svh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-border/70"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close contact form"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-border/70 bg-surface/90 text-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold"
            >
              <X size={18} />
            </button>

            <div className="grid md:grid-cols-[0.9fr_1.1fr]">
              <div className="relative hidden min-h-[520px] overflow-hidden rounded-l-3xl md:block">
                <img
                  src="/assets/hero.jpg"
                  alt="AIPL DreamCity Ludhiana"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/38 to-black/18" />
                <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-soft">
                    Book Site Visit
                  </p>
                  <h2 className="mt-3 font-serif text-4xl leading-tight">
                    Explore DreamCity with our advisor
                  </h2>
                  <div className="mt-6 grid gap-3 text-sm text-white/82">
                    <p className="flex items-start gap-2">
                      <MapPin size={16} className="mt-0.5 shrink-0 text-gold-soft" />
                      AIPL DreamCity, Chandigarh Road, Ludhiana
                    </p>
                    <a
                      href="tel:+919915163030"
                      className="flex items-center gap-2 hover:text-gold-soft"
                    >
                      <Phone size={16} className="shrink-0 text-gold-soft" />
                      +91 99151 63030
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-16 sm:p-8 sm:pt-16 md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                  Contact Us
                </p>
                <h2
                  id="contact-popup-title"
                  className="mt-2 font-serif text-3xl leading-tight sm:text-4xl"
                >
                  Get project details & pricing
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Share your requirements and our team will call you back with curated plot and
                  investment options.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
