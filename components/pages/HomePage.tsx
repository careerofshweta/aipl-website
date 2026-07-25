"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  MapPin,
  Building2,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Leaf,
  Route as RouteIcon,
  Trees,
  Users,
  Camera,
  X,
  Phone,
} from "lucide-react";
import { useState } from "react";

import { projects } from "@/components/site/projects-data";
import { ProjectCard } from "@/components/site/ProjectCard";
import { ContactForm } from "@/components/site/ContactForm";
import { FadeUp, SectionHeader, Counter } from "@/components/site/ui";
import { SiteVisitVideos } from "@/components/site/SiteVisitVideos";
import { TestimonialsMarquee } from "@/components/site/TestimonialsMarquee";

const hero = "/assets/hero.jpg";
const about = "/assets/about.jpg";
const g1 = "/assets/g1.jpg";
const g2 = "/assets/g2.jpg";
const g3 = "/assets/g3.jpg";
const g4 = "/assets/g4.jpg";
const g5 = "/assets/g5.jpg";
const g6 = "/assets/g6.jpg";
const g7 = "/assets/g7.jpg";
const g8 = "/assets/g8.jpg";
const g9 = "/assets/g9.jpg";
const g10 = "/assets/g10.jpg";
const g11 = "/assets/g11.jpg";
const g12 = "/assets/g12.jpg";

export function HomePage() {
  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <Hero />
      <About />
      <Projects />
      <WhyChooseUs />
      <Gallery />
      <SiteVisitVideos />
      <Investment />
      <TestimonialsMarquee />
      <Contact />
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      <img
        src={hero}
        alt="AIPL DreamCity Ludhiana township at dusk"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/68 via-background/48 to-background" />
      <div className="absolute inset-0 gradient-radial-hero" />

      <div className="container-x relative z-10 mx-auto max-w-7xl pt-24 text-center md:pt-0">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-block rounded-full border border-gold/45 bg-background/35 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-gold backdrop-blur"
        >
          Integrated Township · Ludhiana
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mx-auto mt-6 max-w-5xl font-serif text-5xl leading-[1.02] tracking-tight sm:text-7xl md:text-[5.5rem]"
        >
          AIPL <span className="italic text-gold">DreamCity</span> <br />
          Ludhiana
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mx-auto mt-6 max-w-xl text-base text-foreground/80 sm:text-lg"
        >
          Premium residential & commercial plots in a master-planned integrated township — where
          modern lifestyle meets long-term investment value.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full gradient-gold px-7 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_18px_38px_-24px_var(--gold)]"
          >
            Explore Projects
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-gold/60 bg-background/45 px-7 py-3 text-sm font-semibold text-foreground backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold/10 hover:text-gold"
          >
            Book Site Visit
          </Link>
          <a
            href="tel:+919915163030"
            className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/45 px-7 py-3 text-sm font-semibold text-foreground backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold"
          >
            <Phone size={14} /> +91 99151 63030
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            <span>Scroll</span>
            <motion.span
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.8 }}
              className="grid h-9 w-9 place-items-center rounded-full border border-gold/40 text-gold"
            >
              <ChevronDown size={16} />
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
const aboutBlocks = [
  {
    icon: Building2,
    title: "About the Developer",
    body: "AIPL is a respected real estate name known for master-planned townships, retail destinations and residential communities across North India, delivering thoughtfully engineered projects with a focus on livability.",
  },
  {
    icon: Sparkles,
    title: "Project Vision",
    body: "DreamCity Ludhiana is envisioned as a self-sufficient integrated township — a harmonious blend of elegant homes, retail, workspaces and open green landscapes.",
  },
  {
    icon: Trees,
    title: "Township Features",
    body: "Wide internal avenues, landscaped central greens, dedicated pedestrian promenades and a resort-style clubhouse anchor the community experience.",
  },
  {
    icon: MapPin,
    title: "Location Benefits",
    body: "Positioned on Chandigarh Road, one of Ludhiana's fastest-appreciating growth corridors — with quick access to the city core, highways and social infrastructure.",
  },
  {
    icon: Users,
    title: "Lifestyle",
    body: "A vibrant, low-density neighborhood with curated amenities that make everyday living feel effortless — from wellness to leisure to community events.",
  },
  {
    icon: RouteIcon,
    title: "Infrastructure",
    body: "Underground utilities, wide RCC roads, storm-water management, dedicated power backup and 24×7 security create a future-ready foundation.",
  },
  {
    icon: TrendingUp,
    title: "Why Invest",
    body: "Strong developer credibility, a proven micro-market, and a limited inventory of premium plots make DreamCity a compelling long-term hold.",
  },
  {
    icon: ShieldCheck,
    title: "RERA Compliant",
    body: "Every plot on offer is transparent, RERA-registered and comes with clean documentation — invest with total peace of mind.",
  },
];

function About() {
  return (
    <section id="about" className="light-section relative section-y">
      <div className="container-x mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeUp>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              About the Township
            </span>
            <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">
              A landmark address on
              <span className="italic text-gold"> Chandigarh Road</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              AIPL DreamCity Ludhiana is designed as a modern integrated township that brings
              together premium residential plots, commercial spaces and open green landscapes within
              a single master plan. Every avenue, green pocket and amenity is composed to elevate
              the daily experience of its residents — quiet, secure, and unmistakably premium.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { k: "Acres", v: 120, s: "+" },
                { k: "Amenities", v: 40, s: "+" },
                { k: "Green Cover", v: 60, s: "%" },
              ].map((s) => (
                <div
                  key={s.k}
                  className="premium-card rounded-xl border border-border/60 bg-surface/60 p-4 text-center"
                >
                  <div className="font-serif text-3xl text-gold">
                    <Counter to={s.v} suffix={s.s} />
                  </div>
                  <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">
                    {s.k}
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div className="premium-card relative overflow-hidden rounded-2xl border border-border/60">
              <img
                src={about}
                alt="Aerial view of AIPL DreamCity township at dusk"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/55 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-xl glass p-4">
                <p className="text-xs uppercase tracking-widest text-gold">Master-planned</p>
                <p className="mt-1 font-serif text-lg">Integrated Township · Ludhiana</p>
              </div>
            </div>
          </FadeUp>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {aboutBlocks.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="premium-card group rounded-2xl border border-border/60 bg-surface/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:bg-surface"
              >
                <div className="grid h-11 w-11 place-items-center rounded-lg gradient-gold text-primary-foreground">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 font-serif text-xl">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROJECTS ---------------- */
function Projects() {
  return (
    <section id="projects" className="light-section cream-band relative section-y">
      <div className="container-x mx-auto max-w-7xl">
        <SectionHeader
          kicker="Curated Offerings"
          title={
            <>
              Projects within <span className="italic text-gold">DreamCity</span>
            </>
          }
          subtitle="From residential plots to commercial spaces and high street retail — each offering is designed to hold long-term value."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHY CHOOSE US ---------------- */
const whys = [
  {
    icon: MapPin,
    title: "Prime Location",
    body: "Positioned on Chandigarh Road — Ludhiana's fastest growing corridor.",
  },
  {
    icon: TrendingUp,
    title: "Smart Investment",
    body: "Strong appreciation potential backed by a proven developer track record.",
  },
  {
    icon: Building2,
    title: "Modern Infrastructure",
    body: "Wide roads, underground utilities and premium civic engineering.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Community",
    body: "24×7 gated security, CCTV surveillance and controlled access.",
  },
  {
    icon: Leaf,
    title: "Green Spaces",
    body: "Expansive landscaped parks, tree-lined avenues and quiet walking trails.",
  },
  {
    icon: RouteIcon,
    title: "Excellent Connectivity",
    body: "Minutes from highways, business hubs, schools and medical care.",
  },
];

const stats = [
  { v: 120, s: "+", k: "Acres Planned" },
  { v: 40, s: "+", k: "Premium Amenities" },
  { v: 1500, s: "+", k: "Happy Families" },
  { v: 25, s: "Y", k: "Developer Legacy" },
];

function WhyChooseUs() {
  return (
    <section className="light-section relative section-y">
      <div className="pointer-events-none absolute inset-0 opacity-45 gradient-radial-hero" />
      <div className="container-x relative mx-auto max-w-7xl">
        <SectionHeader
          kicker="Why Choose Us"
          title={
            <>
              Reasons discerning buyers <br className="hidden sm:block" /> choose{" "}
              <span className="italic text-gold">DreamCity</span>
            </>
          }
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whys.map((w, i) => {
            const Icon = w.icon;
            return (
              <FadeUp
                key={w.title}
                delay={i * 0.05}
                className="premium-card group rounded-2xl border border-border/60 bg-surface/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:bg-surface"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl border border-gold/40 text-gold transition group-hover:gradient-gold group-hover:text-primary-foreground">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 font-serif text-2xl">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
              </FadeUp>
            );
          })}
        </div>

        <div className="premium-card mt-12 grid grid-cols-2 gap-4 rounded-2xl border border-border/60 bg-surface/65 p-6 md:grid-cols-4 md:p-8">
          {stats.map((s) => (
            <div key={s.k} className="text-center">
              <div className="font-serif text-4xl text-gold sm:text-5xl">
                <Counter to={s.v} suffix={s.s} />
              </div>
              <div className="mt-2 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                {s.k}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- GALLERY ---------------- */
const galleryItems = [
  {
    src: "/assets/dreamcity-gallery-entrance.webp",
    alt: "AIPL DreamCity Ludhiana illuminated grand entrance",
    tall: true,
    wide: true,
  },
  {
    src: "/assets/dreamcity-gallery-lake.jpg",
    alt: "The scenic lake at AIPL DreamCity Ludhiana",
  },
  {
    src: "/assets/dreamcity-gallery-roads.webp",
    alt: "Wide landscaped roads within AIPL DreamCity",
  },
  {
    src: "/assets/dreamcity-gallery-greens.webp",
    alt: "Green open spaces and residences at AIPL DreamCity",
  },
  {
    src: "/assets/dreamcity-gallery-security.webp",
    alt: "Gated community security at AIPL DreamCity",
  },
];

function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  return (
    <section id="gallery" className="light-section cream-band relative section-y">
      <div className="container-x mx-auto max-w-7xl">
        <SectionHeader
          kicker="Plot Gallery"
          title={
            <>
              A glimpse into <span className="italic text-gold">DreamCity</span>
            </>
          }
          subtitle="Curated visuals of plots, roads, greenery, amenities and infrastructure."
        />
        <div className="mt-10 grid auto-rows-[170px] grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:auto-rows-[190px] lg:auto-rows-[210px]">
          {galleryItems.map((g, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.04 }}
              onClick={() => setLightbox(g.src)}
              className={`premium-card group relative overflow-hidden rounded-2xl border border-border/60 transition-all duration-300 hover:-translate-y-1 hover:border-gold/45 ${
                g.tall ? "row-span-2" : ""
              } ${g.wide ? "md:col-span-2" : ""}`}
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-90" />
              <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full glass px-3 py-1.5 text-[10px] uppercase tracking-widest text-gold opacity-0 transition-opacity group-hover:opacity-100">
                <Camera size={12} /> View
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-black/88 p-4 backdrop-blur-md"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full border border-gold/50 text-gold"
            aria-label="Close"
          >
            <X size={18} />
          </button>
          <motion.img
            key={lightbox}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            src={lightbox}
            alt=""
            className="max-h-[85vh] max-w-[92vw] rounded-2xl border border-border/60 object-contain"
          />
        </div>
      )}
    </section>
  );
}

/* ---------------- INVESTMENT TIMELINE ---------------- */
const investPoints = [
  {
    title: "High Appreciation Potential",
    body: "Ludhiana's Chandigarh Road corridor has consistently outperformed on price growth.",
  },
  {
    title: "Trusted Developer",
    body: "AIPL's track record spans townships, retail centres and residential communities.",
  },
  {
    title: "Excellent Connectivity",
    body: "Direct road access to highways, airport and inter-city transit.",
  },
  {
    title: "Premium Lifestyle",
    body: "Amenities and community design that keep every day elevated.",
  },
  {
    title: "Growing Infrastructure",
    body: "New schools, hospitals and workplaces are steadily maturing around the corridor.",
  },
  {
    title: "Future Growth Opportunities",
    body: "Planned commercial and institutional zones support long-term value creation.",
  },
];

function Investment() {
  return (
    <section className="light-section relative section-y">
      <div className="container-x mx-auto max-w-7xl">
        <SectionHeader
          kicker="Investment Benefits"
          title={
            <>
              Why <span className="italic text-gold">DreamCity</span> is a smart hold
            </>
          }
        />
        <div className="relative mt-12">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent md:left-1/2" />
          <ul className="space-y-10">
            {investPoints.map((p, i) => {
              const right = i % 2 === 1;
              return (
                <motion.li
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className={`relative pl-12 md:grid md:grid-cols-2 md:gap-16 md:pl-0`}
                >
                  <span className="absolute left-2 top-2 grid h-6 w-6 place-items-center rounded-full gradient-gold text-[10px] font-bold text-primary-foreground md:left-1/2 md:-translate-x-1/2">
                    {i + 1}
                  </span>
                  <div
                    className={`premium-card rounded-2xl border border-border/60 bg-surface/65 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-gold/45 ${
                      right ? "md:col-start-2" : "md:text-right"
                    }`}
                  >
                    <h3 className="font-serif text-2xl">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  return (
    <section id="contact" className="light-section cream-band relative section-y">
      <div className="container-x mx-auto max-w-7xl">
        <SectionHeader
          kicker="Contact"
          title={
            <>
              Request a <span className="italic text-gold">callback</span>
            </>
          }
          subtitle="Share your requirements and our advisory team will curate the best options for you at DreamCity Ludhiana."
        />
        <div className="premium-card mt-10 grid gap-6 overflow-hidden rounded-3xl border border-border/60 bg-surface/65 backdrop-blur-md md:grid-cols-2">
          <div className="relative flex min-h-[380px] flex-col">
            <iframe
              title="Zavira Realty office map"
              src="https://www.google.com/maps?q=Omaxe+The+Lake+Commercial+New+Chandigarh&output=embed"
              loading="lazy"
              className="h-full min-h-[380px] w-full flex-1 border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="grid gap-3 border-t border-border/60 p-6 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-gold shrink-0" />
                <span className="text-muted-foreground">
                  Shop 11, 1st Floor, Omaxe The Lake Commercial, New Chandigarh – 140901
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-gold shrink-0" />
                <a href="tel:+919915163030" className="text-foreground hover:text-gold">
                  +91 99151 63030
                </a>
              </div>
            </div>
          </div>
          <div className="p-8 md:p-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
