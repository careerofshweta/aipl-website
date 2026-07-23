import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export type Project = {
  name: string;
  location: string;
  description: string;
  image: string;
  video: string;
};

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hover, setHover] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={(e) => {
        setHover(true);
        const v = e.currentTarget.querySelector("video");
        if (v) v.play().catch(() => {});
      }}
      onMouseLeave={(e) => {
        setHover(false);
        const v = e.currentTarget.querySelector("video");
        if (v) {
          v.pause();
          v.currentTime = 0;
        }
      }}
      className="group relative overflow-hidden rounded-2xl border border-border/60 bg-surface/60 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_oklch(0.79_0.13_78_/_0.45)] hover:border-gold/50"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          loading="lazy"
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
            hover ? "scale-110 opacity-0" : "scale-100 opacity-100"
          }`}
        />
        <video
          src={project.video}
          muted
          loop
          playsInline
          preload="none"
          poster={project.image}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            hover ? "opacity-100" : "opacity-0"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
        <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full glass px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-gold">
          <Play size={10} className="fill-gold" /> Preview
        </div>
      </div>
      <div className="relative p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
          {project.location}
        </p>
        <h3 className="mt-2 font-serif text-2xl">{project.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <button className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold transition-colors hover:text-gold-soft">
          Know More <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </motion.article>
  );
}
