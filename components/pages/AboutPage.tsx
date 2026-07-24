"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FadeUp, SectionHeader } from "@/components/site/ui";

const about = "/assets/about.jpg";

const sections = [
  {
    h: "About the Developer",
    p: "AIPL is a respected North Indian real estate name with a portfolio spanning townships, high-street retail and residential communities. The group's core promise is disciplined delivery, thoughtful master planning and long-term community stewardship.",
  },
  {
    h: "Project Vision",
    p: "DreamCity is envisioned as a self-contained integrated township — where homes, workspaces, retail and open landscape live in a single carefully composed master plan. Every avenue and amenity is designed to elevate daily living.",
  },
  {
    h: "Township Features",
    p: "Wide RCC internal roads, underground utilities, a resort-style clubhouse, dedicated pedestrian promenades and expansive central greens combine to create a modern, low-density environment.",
  },
  {
    h: "Location Benefits",
    p: "Located on Chandigarh Road — one of Ludhiana's fastest-appreciating growth corridors — DreamCity offers quick access to the city core, national highways, schools, hospitals and workplaces.",
  },
  {
    h: "Lifestyle",
    p: "A vibrant community feel with curated amenities: wellness, fitness, sports, kids' zones and quiet reading corners. The township is composed around walkability and long-term liveability.",
  },
  {
    h: "Infrastructure",
    p: "Storm-water management, dedicated power backup, controlled access, CCTV surveillance and future-ready civic engineering create a foundation that ages well.",
  },
  {
    h: "Why Invest",
    p: "A trusted developer, a proven micro-market, and limited premium inventory make DreamCity a compelling long-term hold with strong appreciation potential.",
  },
  {
    h: "Premium Amenities",
    p: "Clubhouse, swimming pool, gym, sports courts, jogging tracks, kids' play areas and landscaped parks — a full spectrum of everyday luxuries within the community.",
  },
];

export function AboutPage() {
  return (
    <div className="light-page section-top">
      <section className="container-x mx-auto max-w-7xl pb-12 md:pb-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <FadeUp>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              About DreamCity
            </span>
            <h1 className="mt-3 font-serif text-4xl leading-tight sm:text-6xl">
              An address that is <span className="italic text-gold">crafted, not built</span>
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              AIPL DreamCity Ludhiana is a landmark master-planned township on Chandigarh Road,
              designed as an integrated community of premium plots, villas, apartments and
              commercial spaces — anchored by amenities that make daily life feel elevated.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full gradient-gold px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_35px_-24px_var(--gold)]"
            >
              Talk to an advisor <ArrowRight size={16} />
            </Link>
          </FadeUp>
          <FadeUp delay={0.15}>
            <motion.img
              src={about}
              alt="Aerial view of AIPL DreamCity township"
              loading="lazy"
              className="premium-card w-full rounded-2xl border border-border/60 object-cover"
            />
          </FadeUp>
        </div>
      </section>

      <section className="container-x mx-auto max-w-7xl pb-16 md:pb-20">
        <SectionHeader
          kicker="Every Detail Considered"
          title={
            <>
              The <span className="italic text-gold">DreamCity</span> difference
            </>
          }
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {sections.map((s, i) => (
            <FadeUp
              key={s.h}
              delay={i * 0.05}
              className="premium-card rounded-2xl border border-border/60 bg-surface/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/45 hover:bg-surface"
            >
              <h3 className="font-serif text-2xl">{s.h}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.p}</p>
            </FadeUp>
          ))}
        </div>
      </section>
    </div>
  );
}
