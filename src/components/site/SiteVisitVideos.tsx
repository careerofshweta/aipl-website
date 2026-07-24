import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import { FadeUp, SectionHeader } from "./ui";
import g1 from "@/assets/g1.jpg";
import g6 from "@/assets/g6.jpg";
import g8 from "@/assets/g8.jpg";

export type SiteVisit = {
  title: string;
  description: string;
  thumbnail: string;
  video: string;
};

const visits: SiteVisit[] = [
  {
    title: "Township Walk-through",
    description: "Take a guided tour through the master-planned avenues.",
    thumbnail: g6,
    video: "https://videos.pexels.com/video-files/2022395/2022395-hd_1920_1080_30fps.mp4",
  },
  {
    title: "Plot Site Visit",
    description: "See marked residential plots and boundary demarcations.",
    thumbnail: g1,
    video: "https://videos.pexels.com/video-files/2611250/2611250-hd_1920_1080_25fps.mp4",
  },
  {
    title: "Entrance & Clubhouse",
    description: "A closer look at the grand entrance and lifestyle amenities.",
    thumbnail: g8,
    video: "https://videos.pexels.com/video-files/3129576/3129576-hd_1920_1080_25fps.mp4",
  },
];

export function SiteVisitVideos() {
  const [active, setActive] = useState<SiteVisit | null>(null);

  return (
    <section id="site-visits" className="relative py-24 md:py-32">
      <div className="container-x mx-auto max-w-7xl">
        <SectionHeader
          kicker="Site Visit Videos"
          title={<>Experience <span className="italic text-gold">DreamCity</span> from home</>}
          subtitle="Watch curated walk-throughs of the township, plots and lifestyle amenities before booking your on-site visit."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visits.map((v, i) => (
            <FadeUp key={v.title} delay={i * 0.08}>
              <button
                onClick={() => setActive(v)}
                className="group relative w-full overflow-hidden rounded-3xl border border-border/60 bg-surface/60 text-left shadow-[0_20px_60px_-30px_oklch(0.79_0.13_78_/_0.35)] transition hover:-translate-y-1 hover:border-gold/60"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={v.thumbnail}
                    alt={v.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="grid h-16 w-16 place-items-center rounded-full gradient-gold text-primary-foreground shadow-xl transition-transform group-hover:scale-110">
                      <Play size={22} className="translate-x-0.5 fill-primary-foreground" />
                    </span>
                  </div>
                </div>
                <div className="p-6">
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
            className="fixed inset-0 z-[70] grid place-items-center bg-background/90 p-4 backdrop-blur-md"
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
                src={active.video}
                poster={active.thumbnail}
                controls
                autoPlay
                playsInline
                className="aspect-video w-full"
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
