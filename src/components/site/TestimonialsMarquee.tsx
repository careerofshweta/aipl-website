import { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import t1 from "@/assets/t1.jpg";
import t2 from "@/assets/t2.jpg";
import t3 from "@/assets/t3.jpg";
import t4 from "@/assets/t4.jpg";
import t5 from "@/assets/t5.jpg";
import { SectionHeader } from "./ui";

type Testimonial = {
  name: string;
  role: string;
  body: string;
  rating: number;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Rajiv Bansal",
    role: "Plot Owner",
    body: "Zavira Realty's team walked us through every plot option at DreamCity with complete transparency. The paperwork was seamless and the location is incredibly promising.",
    rating: 5,
    avatar: t1,
  },
  {
    name: "Ananya Kapoor",
    role: "Investor",
    body: "The township genuinely feels curated — wide roads, lush landscaping and clear demarcation. Buying at DreamCity was one of our best long-term decisions.",
    rating: 5,
    avatar: t2,
  },
  {
    name: "Harmanpreet Singh",
    role: "Commercial Plot Investor",
    body: "Clear paperwork, straight communication, and visible progress on site. Everything a serious investor looks for in a real-estate purchase.",
    rating: 5,
    avatar: t3,
  },
  {
    name: "Mr. & Mrs. Sharma",
    role: "Villa Plot Owners",
    body: "From site visit to registration, the Zavira team was patient and professional. We highly recommend them for anyone considering AIPL DreamCity.",
    rating: 5,
    avatar: t4,
  },
  {
    name: "Priya Malhotra",
    role: "NRI Investor",
    body: "As an NRI, I needed a trustworthy partner. Zavira Realty made the entire process remote-friendly and hassle-free. Impeccable service.",
    rating: 5,
    avatar: t5,
  },
];

function Card({ t }: { t: Testimonial }) {
  return (
    <div className="mx-3 w-[320px] shrink-0 rounded-2xl border border-border/60 bg-surface/70 p-6 backdrop-blur-md sm:w-[380px]">
      <div className="flex items-center gap-3">
        <img
          src={t.avatar}
          alt={t.name}
          width={48}
          height={48}
          loading="lazy"
          className="h-12 w-12 rounded-full object-cover ring-2 ring-gold/40"
        />
        <div>
          <p className="text-sm font-semibold text-foreground">{t.name}</p>
          <p className="text-[11px] uppercase tracking-widest text-muted-foreground">{t.role}</p>
        </div>
      </div>
      <div className="mt-4 flex gap-0.5 text-gold">
        {Array.from({ length: t.rating }).map((_, k) => (
          <Star key={k} size={14} className="fill-gold" />
        ))}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">"{t.body}"</p>
    </div>
  );
}

export function TestimonialsMarquee() {
  const [paused, setPaused] = useState(false);
  const loop = [...testimonials, ...testimonials];

  return (
    <section className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 gradient-radial-hero" />
      <div className="container-x relative mx-auto max-w-7xl">
        <SectionHeader
          kicker="Testimonials"
          title={<>What our clients <span className="italic text-gold">say</span></>}
          subtitle="Real experiences from families and investors who have trusted Zavira Realty."
        />
      </div>
      <div
        className="relative mt-14 overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <motion.div
          className="flex"
          animate={{ x: paused ? undefined : ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {loop.map((t, i) => (
            <Card key={i} t={t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
