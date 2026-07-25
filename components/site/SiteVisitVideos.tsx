"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import { FadeUp, SectionHeader } from "./ui";

export type SiteVisit = {
  title: string;
  description: string;
  thumbnail: string;
  video: string;
};

const visits: SiteVisit[] = [
  {
    title: "DreamCity Walk-through — English",
    description: "Explore AIPL DreamCity through our complete English walk-through.",
    thumbnail: "/assets/g6.jpg",
    video: "/videos/aipl-english.mp4",
  },
  {
    title: "DreamCity Walk-through — Punjabi",
    description: "Discover the project in detail with our Punjabi walk-through.",
    thumbnail: "/assets/g1.jpg",
    video: "/videos/aipl-punjabi.mp4",
  },
  {
    title: "The DreamCity Experience",
    description: "Take a closer look at the vision, lifestyle and spaces of DreamCity.",
    thumbnail: "/assets/g8.jpg",
    video: "/videos/aipl-dreamcity.mp4",
  },
];

export function SiteVisitVideos() {
  const [active, setActive] = useState<SiteVisit | null>(null);

  useEffect(() => {
    if (!active) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [active]);

  return (
    <section id="site-visits" className="light-section relative section-y">
      <div className="container-x mx-auto max-w-7xl">
        <SectionHeader
          kicker="Site Visit Videos"
          title={
            <>
              Experience <span className="italic text-gold">DreamCity</span> from home
            </>
          }
          subtitle="Watch curated walk-throughs of the township, plots and lifestyle amenities before booking your on-site visit."
        />
        <div className="mt-10 grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visits.map((v, i) => (
            <FadeUp key={v.title} delay={i * 0.08} className="h-full">
              <button
                onClick={() => setActive(v)}
                aria-label={`Play ${v.title}`}
                className="premium-card group relative flex h-full w-full flex-col overflow-hidden rounded-3xl border border-border/60 bg-surface/65 text-left transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              >
                <div className="relative aspect-video w-full shrink-0 overflow-hidden bg-black">
                  <video
                    src={v.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    aria-hidden="true"
                    tabIndex={-1}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/5" />
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="grid h-16 w-16 place-items-center rounded-full gradient-gold text-primary-foreground shadow-xl transition-all group-hover:scale-110 group-hover:opacity-90">
                      <Play size={22} className="translate-x-0.5 fill-primary-foreground" />
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-xl">{v.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{v.description}</p>
                </div>
              </button>
            </FadeUp>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
            className="fixed inset-0 z-[70] grid place-items-center bg-black/88 p-4 backdrop-blur-md"
            onClick={() => setActive(null)}
          >
            <button
              aria-label="Close"
              onClick={() => setActive(null)}
              className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full border border-gold/50 text-gold"
            >
              <X size={18} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl overflow-hidden rounded-2xl border border-border/60 bg-black"
            >
              <video
                key={active.video}
                src={active.video}
                poster={active.thumbnail}
                controls
                autoPlay
                playsInline
                preload="auto"
                className="aspect-video w-full bg-black object-contain"
              />
              <div className="p-5">
                <h4 className="font-serif text-xl">{active.title}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{active.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
