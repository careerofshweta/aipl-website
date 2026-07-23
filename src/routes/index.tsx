import { createFileRoute, Link } from "@tanstack/react-router";
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
  Star,
  Trees,
  Users,
  Camera,
  X,
} from "lucide-react";
import { useState } from "react";
import hero from "@/assets/hero.jpg";
import about from "@/assets/about.jpg";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import villa from "@/assets/villa.jpg";
import { projects } from "@/components/site/projects-data";
import { ProjectCard } from "@/components/site/ProjectCard";
import { ContactForm } from "@/components/site/ContactForm";
import { FadeUp, SectionHeader, Counter } from "@/components/site/ui";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AIPL DreamCity Ludhiana — Luxury Township & Premium Plots" },
      {
        name: "description",
        content:
          "Discover AIPL DreamCity Ludhiana — a master-planned luxury township with premium residential plots, villas, commercial spaces and world-class amenities on Chandigarh Road.",
      },
      { property: "og:title", content: "AIPL DreamCity Ludhiana — Luxury Living, Modern Lifestyle" },
      {
        property: "og:description",
        content:
          "A landmark integrated township in Ludhiana offering plots, villas, apartments and commercial spaces with premium amenities and excellent connectivity.",
      },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: "AIPL DreamCity Ludhiana" },
      {
        name: "twitter:description",
        content: "Luxury master-planned township on Chandigarh Road, Ludhiana.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          name: "AIPL DreamCity Ludhiana",
          description:
            "Master-planned luxury township in Ludhiana offering premium plots, villas, apartments and commercial spaces.",
          areaServed: "Ludhiana, Punjab, India",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Ludhiana",
            addressRegion: "Punjab",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="overflow-x-clip">
      <Hero />
      <About />
      <Projects />
      <WhyChooseUs />
      <Gallery />
      <Investment />
      <Testimonials />
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
        alt="AIPL DreamCity Ludhiana luxury township at dusk"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      <div className="absolute inset-0 gradient-radial-hero" />

      <div className="container-x relative z-10 mx-auto max-w-7xl pt-24 text-center md:pt-0">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-block rounded-full border border-gold/40 bg-background/40 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-gold backdrop-blur"
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
          Luxury living with a modern lifestyle — a master-planned township of plots, villas,
          apartments and thoughtful commercial spaces.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full gradient-gold px-7 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.04]"
          >
            Explore Projects
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/40 px-7 py-3 text-sm font-semibold text-foreground backdrop-blur transition hover:border-gold hover:text-gold"
          >
            Contact Us
          </Link>
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
  { icon: Building2, title: "About the Developer", body: "AIPL is a respected real estate name known for master-planned townships, retail destinations and residential communities across North India, delivering thoughtfully engineered projects with a focus on livability." },
  { icon: Sparkles, title: "Project Vision", body: "DreamCity Ludhiana is envisioned as a self-sufficient integrated township — a harmonious blend of elegant homes, retail, workspaces and open green landscapes." },
  { icon: Trees, title: "Township Features", body: "Wide internal avenues, landscaped central greens, dedicated pedestrian promenades and a resort-style clubhouse anchor the community experience." },
  { icon: MapPin, title: "Location Benefits", body: "Positioned on Chandigarh Road, one of Ludhiana's fastest-appreciating growth corridors — with quick access to the city core, highways and social infrastructure." },
  { icon: Users, title: "Lifestyle", body: "A vibrant, low-density neighborhood with curated amenities that make everyday living feel effortless — from wellness to leisure to community events." },
  { icon: RouteIcon, title: "Infrastructure", body: "Underground utilities, wide RCC roads, storm-water management, dedicated power backup and 24×7 security create a future-ready foundation." },
  { icon: TrendingUp, title: "Why Invest", body: "Strong developer credibility, a proven micro-market, and a limited inventory of premium plots and villas make DreamCity a compelling long-term hold." },
  { icon: Star, title: "Premium Amenities", body: "Clubhouse, swimming pool, fitness zones, sports courts, kids' play areas and landscaped parks — everything you need, right within the township." },
];

function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
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
              together homes, retail and open spaces within a single master plan. Every avenue,
              green pocket and amenity is composed to elevate the daily experience of its residents
              — quiet, secure, and unmistakably premium.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { k: "Acres", v: 120, s: "+" },
                { k: "Amenities", v: 40, s: "+" },
                { k: "Green Cover", v: 60, s: "%" },
              ].map((s) => (
                <div key={s.k} className="rounded-xl border border-border/60 bg-surface/50 p-4 text-center">
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
            <div className="relative overflow-hidden rounded-2xl border border-border/60">
              <img
                src={about}
                alt="Aerial view of AIPL DreamCity township at dusk"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-xl glass p-4">
                <p className="text-xs uppercase tracking-widest text-gold">Master-planned</p>
                <p className="mt-1 font-serif text-lg">Integrated Township · Ludhiana</p>
              </div>
            </div>
          </FadeUp>
        </div>

        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {aboutBlocks.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group rounded-2xl border border-border/60 bg-surface/50 p-6 transition hover:border-gold/50 hover:bg-surface"
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
    <section id="projects" className="relative py-24 md:py-32">
      <div className="container-x mx-auto max-w-7xl">
        <SectionHeader
          kicker="Curated Offerings"
          title={<>Projects within <span className="italic text-gold">DreamCity</span></>}
          subtitle="From freehold plots to signature villas and premium commercial addresses — each offering is designed to hold long-term value."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
  { icon: MapPin, title: "Prime Location", body: "Positioned on Chandigarh Road — Ludhiana's fastest growing corridor." },
  { icon: TrendingUp, title: "Smart Investment", body: "Strong appreciation potential backed by a proven developer track record." },
  { icon: Building2, title: "Modern Infrastructure", body: "Wide roads, underground utilities and premium civic engineering." },
  { icon: ShieldCheck, title: "Secure Community", body: "24×7 gated security, CCTV surveillance and controlled access." },
  { icon: Leaf, title: "Green Spaces", body: "Expansive landscaped parks, tree-lined avenues and quiet walking trails." },
  { icon: RouteIcon, title: "Excellent Connectivity", body: "Minutes from highways, business hubs, schools and medical care." },
];

const stats = [
  { v: 120, s: "+", k: "Acres Planned" },
  { v: 40, s: "+", k: "Premium Amenities" },
  { v: 1500, s: "+", k: "Happy Families" },
  { v: 25, s: "Y", k: "Developer Legacy" },
];

function WhyChooseUs() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 gradient-radial-hero" />
      <div className="container-x relative mx-auto max-w-7xl">
        <SectionHeader
          kicker="Why Choose Us"
          title={<>Reasons discerning buyers <br className="hidden sm:block" /> choose <span className="italic text-gold">DreamCity</span></>}
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whys.map((w, i) => {
            const Icon = w.icon;
            return (
              <FadeUp
                key={w.title}
                delay={i * 0.05}
                className="group rounded-2xl border border-border/60 bg-surface/50 p-7 transition hover:-translate-y-1 hover:border-gold/50"
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

        <div className="mt-16 grid grid-cols-2 gap-4 rounded-2xl border border-border/60 bg-surface/60 p-8 md:grid-cols-4">
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
  { src: g1, alt: "Clubhouse swimming pool", tall: true },
  { src: g2, alt: "Grand clubhouse lobby" },
  { src: g3, alt: "Landscaped township walkway" },
  { src: g4, alt: "Premium villa interior" },
  { src: g5, alt: "Township grand entrance", tall: true },
];

function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  return (
    <section id="gallery" className="relative py-24 md:py-32">
      <div className="container-x mx-auto max-w-7xl">
        <SectionHeader
          kicker="Gallery"
          title={<>A glimpse into <span className="italic text-gold">DreamCity</span></>}
          subtitle="Curated visuals of amenities, landscapes and living spaces."
        />
        <div className="mt-14 grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[240px]">
          {galleryItems.map((g, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              onClick={() => setLightbox(g.src)}
              className={`group relative overflow-hidden rounded-2xl border border-border/60 ${
                g.tall ? "row-span-2" : ""
              } ${i === 0 ? "md:col-span-2" : ""}`}
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-90" />
              <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full glass px-3 py-1.5 text-[10px] uppercase tracking-widest text-gold opacity-0 transition-opacity group-hover:opacity-100">
                <Camera size={12} /> View
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-background/90 p-4 backdrop-blur-md"
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
  { title: "High Appreciation Potential", body: "Ludhiana's Chandigarh Road corridor has consistently outperformed on price growth." },
  { title: "Trusted Developer", body: "AIPL's track record spans townships, retail centres and residential communities." },
  { title: "Excellent Connectivity", body: "Direct road access to highways, airport and inter-city transit." },
  { title: "Premium Lifestyle", body: "Amenities and community design that keep every day elevated." },
  { title: "Growing Infrastructure", body: "New schools, hospitals and workplaces are steadily maturing around the corridor." },
  { title: "Future Growth Opportunities", body: "Planned commercial and institutional zones support long-term value creation." },
];

function Investment() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-x mx-auto max-w-7xl">
        <SectionHeader
          kicker="Investment Benefits"
          title={<>Why <span className="italic text-gold">DreamCity</span> is a smart hold</>}
        />
        <div className="relative mt-16">
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
                    className={`rounded-2xl border border-border/60 bg-surface/60 p-6 backdrop-blur-md ${
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

/* ---------------- TESTIMONIALS ---------------- */
const testimonials = [
  {
    name: "Rajiv & Neha Bansal",
    role: "Villa Owners",
    body: "The township genuinely feels curated — from the wide roads to the landscaping. Buying at DreamCity was one of our best long-term calls.",
    rating: 5,
  },
  {
    name: "Harmanpreet Singh",
    role: "Plot Investor",
    body: "Clear paperwork, straight communication, and visible progress on site. Everything a serious investor looks for in a real-estate purchase.",
    rating: 5,
  },
  {
    name: "Ananya Kapoor",
    role: "Apartment Owner",
    body: "The clubhouse, the green pockets, the sense of quiet — my family moved in six months ago and we don't miss the city noise at all.",
    rating: 5,
  },
];

function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  return (
    <section className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 gradient-radial-hero" />
      <div className="container-x relative mx-auto max-w-4xl text-center">
        <SectionHeader
          kicker="Testimonials"
          title={<>What our residents <span className="italic text-gold">say</span></>}
        />
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-14 rounded-3xl border border-border/60 bg-surface/60 p-10 backdrop-blur-md"
        >
          <div className="flex justify-center gap-1 text-gold">
            {Array.from({ length: t.rating }).map((_, k) => (
              <Star key={k} size={16} className="fill-gold" />
            ))}
          </div>
          <p className="mt-6 font-serif text-2xl leading-relaxed text-foreground/90 sm:text-3xl">
            “{t.body}”
          </p>
          <div className="mt-6">
            <p className="font-semibold text-foreground">{t.name}</p>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">{t.role}</p>
          </div>
        </motion.div>
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              aria-label={`Testimonial ${k + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === k ? "w-8 bg-gold" : "w-2 bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container-x mx-auto max-w-7xl">
        <SectionHeader
          kicker="Contact"
          title={<>Request a <span className="italic text-gold">callback</span></>}
          subtitle="Share your requirements and our advisory team will curate the best options for you at DreamCity Ludhiana."
        />
        <div className="mt-14 grid gap-6 overflow-hidden rounded-3xl border border-border/60 bg-surface/60 backdrop-blur-md md:grid-cols-2">
          <div className="relative min-h-[380px]">
            <iframe
              title="AIPL DreamCity Ludhiana map"
              src="https://www.google.com/maps?q=Chandigarh%20Road%20Ludhiana&output=embed"
              loading="lazy"
              className="h-full min-h-[380px] w-full border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent to-background/30" />
          </div>
          <div className="p-8 md:p-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
