"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import { SectionHeader } from "./ui";

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
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [active, setActive] = useState<SiteVisit | null>(null);
  const selected = visits[selectedIndex];

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
        <div className="mx-auto mt-10 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="premium-card overflow-hidden rounded-3xl border border-border/60 bg-surface/65"
          >
            <button
              type="button"
              onClick={() => setActive(selected)}
              aria-label={`Play ${selected.title}`}
              className="group relative block aspect-video w-full overflow-hidden bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold"
            >
              <video
                key={selected.video}
                src={selected.video}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-hidden="true"
                tabIndex={-1}
                className="h-full w-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/5" />
              <div className="absolute inset-0 grid place-items-center">
                <span className="grid h-16 w-16 place-items-center rounded-full gradient-gold text-primary-foreground shadow-xl transition-transform group-hover:scale-110">
                  <Play size={22} className="translate-x-0.5 fill-primary-foreground" />
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 text-left sm:p-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-gold">
                  Featured video
                </p>
                <h3 className="mt-1 font-serif text-xl text-white sm:text-2xl">{selected.title}</h3>
                <p className="mt-1 hidden max-w-2xl text-sm text-white/75 sm:block">
                  {selected.description}
                </p>
              </div>
            </button>
          </motion.div>

          <div
            className="mt-4 grid grid-cols-3 gap-2 sm:gap-4"
            role="tablist"
            aria-label="Choose a site video"
          >
            {visits.map((visit, index) => (
              <button
                key={visit.title}
                type="button"
                role="tab"
                aria-selected={selectedIndex === index}
                aria-label={`Show ${visit.title}`}
                onClick={() => setSelectedIndex(index)}
                className={`premium-card group overflow-hidden rounded-xl border text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                  selectedIndex === index
                    ? "border-gold bg-gold/10"
                    : "border-border/60 bg-surface/65 hover:border-gold/50"
                }`}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={visit.thumbnail}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 grid place-items-center bg-black/25">
                    <Play size={16} className="fill-white text-white" />
                  </div>
                </div>
                <div className="p-2.5 sm:p-4">
                  <p className="line-clamp-2 text-xs font-semibold sm:text-sm">{visit.title}</p>
                </div>
              </button>
            ))}
          </div>
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
