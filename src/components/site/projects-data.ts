import type { Project } from "@/components/site/ProjectCard";
import villa from "@/assets/villa.jpg";
import plots from "@/assets/plots.jpg";
import commercial from "@/assets/commercial.jpg";
import retail from "@/assets/retail.jpg";
import apartments from "@/assets/apartments.jpg";
import future from "@/assets/future.jpg";

// Sample muted background videos (public domain, small, autoplay-friendly).
const VIDEO_A = "https://cdn.coverr.co/videos/coverr-luxury-modern-mansion-4517/1080p.mp4";
const VIDEO_B = "https://cdn.coverr.co/videos/coverr-an-aerial-view-of-a-golf-course-2633/1080p.mp4";
const VIDEO_C = "https://cdn.coverr.co/videos/coverr-a-modern-office-building-1571/1080p.mp4";
const VIDEO_D = "https://cdn.coverr.co/videos/coverr-shopping-street-at-night-8637/1080p.mp4";
const VIDEO_E = "https://cdn.coverr.co/videos/coverr-luxury-apartment-building-4525/1080p.mp4";
const VIDEO_F = "https://cdn.coverr.co/videos/coverr-aerial-view-of-a-city-1573/1080p.mp4";

export const projects: Project[] = [
  {
    name: "Signature Villas",
    location: "AIPL DreamCity · Phase 1",
    description:
      "Architecturally distinctive 4 & 5 BHK villas with private lawns, double-height living, and thoughtfully oriented facades for natural light.",
    image: villa,
    video: VIDEO_A,
  },
  {
    name: "Premium Residential Plots",
    location: "AIPL DreamCity · Core",
    description:
      "Freehold plots on wide tree-lined avenues with full underground utilities — a canvas for your dream home in a master-planned township.",
    image: plots,
    video: VIDEO_B,
  },
  {
    name: "Business Boulevard",
    location: "Commercial Spine",
    description:
      "Grade-A commercial spaces along the primary township artery — perfect for offices, showrooms and lifestyle brands with high visibility.",
    image: commercial,
    video: VIDEO_C,
  },
  {
    name: "High Street Retail",
    location: "Central Promenade",
    description:
      "A walkable retail promenade of boutique shops, cafés and experience stores, anchored by daily-needs and premium dining.",
    image: retail,
    video: VIDEO_D,
  },
  {
    name: "Skyline Apartments",
    location: "Residential Enclave",
    description:
      "Contemporary 3 & 4 BHK apartments with skyline views, resort-style clubhouse and layouts optimized for cross-ventilation.",
    image: apartments,
    video: VIDEO_E,
  },
  {
    name: "Future Developments",
    location: "Upcoming Phases",
    description:
      "Institutional-grade schools, wellness zones, sports arenas and mixed-use plots that will shape the next chapter of DreamCity.",
    image: future,
    video: VIDEO_F,
  },
];
