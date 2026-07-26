"use client";

import { Star } from "lucide-react";
import { SectionCarousel } from "./SectionCarousel";
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
    avatar: "/assets/t1.jpg",
  },
  {
    name: "Ananya Kapoor",
    role: "Investor",
    body: "The township genuinely feels curated — wide roads, lush landscaping and clear demarcation. Buying at DreamCity was one of our best long-term decisions.",
    rating: 5,
    avatar: "/assets/t2.jpg",
  },
  {
    name: "Harmanpreet Singh",
    role: "Commercial Plot Investor",
    body: "Clear paperwork, straight communication, and visible progress on site. Everything a serious investor looks for in a real-estate purchase.",
    rating: 5,
    avatar: "/assets/t3.jpg",
  },
  {
    name: "Mr. & Mrs. Sharma",
    role: "Villa Plot Owners",
    body: "From site visit to registration, the Zavira team was patient and professional. We highly recommend them for anyone considering AIPL DreamCity.",
    rating: 5,
    avatar: "/assets/t4.jpg",
  },
  {
    name: "Priya Malhotra",
    role: "NRI Investor",
    body: "As an NRI, I needed a trustworthy partner. Zavira Realty made the entire process remote-friendly and hassle-free. Impeccable service.",
    rating: 5,
    avatar: "/assets/t5.jpg",
  },
];

function Card({ t }: { t: Testimonial }) {
  return (
    <article className="premium-card h-full rounded-2xl border border-border/60 bg-surface/75 p-6 backdrop-blur-md transition-colors duration-300 hover:border-gold/45">
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
    </article>
  );
}

export function TestimonialsMarquee() {
  return (
    <section className="light-section cream-band relative section-y">
      <div className="pointer-events-none absolute inset-0 opacity-35 gradient-radial-hero" />
      <div className="container-x relative mx-auto max-w-7xl">
        <SectionHeader
          kicker="Testimonials"
          title={
            <>
              What our clients <span className="italic text-gold">say</span>
            </>
          }
          subtitle="Real experiences from families and investors who have trusted Zavira Realty."
        />
        <SectionCarousel
          label="Client testimonials"
          autoPlayMs={5000}
          itemClassName="basis-[92%] md:basis-1/2"
          className="mt-10"
        >
          {testimonials.map((t) => (
            <Card key={t.name} t={t} />
          ))}
        </SectionCarousel>
      </div>
    </section>
  );
}
