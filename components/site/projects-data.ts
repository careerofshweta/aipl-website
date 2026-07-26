import type { Project } from "@/components/site/ProjectCard";

// Royalty-free background videos. If a URL fails, the poster image is shown.
const VIDEO_A = "https://videos.pexels.com/video-files/2022395/2022395-hd_1920_1080_30fps.mp4";
const VIDEO_B = "https://videos.pexels.com/video-files/2611250/2611250-hd_1920_1080_25fps.mp4";
const VIDEO_C = "https://videos.pexels.com/video-files/3129576/3129576-hd_1920_1080_25fps.mp4";
const VIDEO_D = "https://videos.pexels.com/video-files/1918465/1918465-hd_1920_1080_30fps.mp4";
const VIDEO_E = "https://videos.pexels.com/video-files/6474933/6474933-hd_1920_1080_30fps.mp4";
const VIDEO_F = "https://videos.pexels.com/video-files/5495844/5495844-hd_1920_1080_30fps.mp4";

export const projects: Project[] = [
  {
    name: "Premium Residential Plots",
    location: "AIPL DreamCity · Core",
    description:
      "Freehold residential plots on wide tree-lined avenues with fully underground utilities — a canvas for your dream home in a master-planned township.",
    image: "/assets/dreamcity-real/12.webp",
    video: VIDEO_B,
  },
  {
    name: "Commercial Plots",
    location: "Business Spine",
    description:
      "Strategically located commercial plots along the primary township artery — ideal for offices, showrooms and lifestyle brands seeking high visibility.",
    image: "/assets/dreamcity-real/05.webp",
    video: VIDEO_C,
  },
  {
    name: "High Street Retail",
    location: "Central Promenade",
    description:
      "A walkable retail promenade of boutique shops, cafés and experience stores, anchored by daily-needs and premium dining destinations.",
    image: "/assets/dreamcity-real/06.webp",
    video: VIDEO_D,
  },
  {
    name: "Signature Villas",
    location: "AIPL DreamCity · Phase 1",
    description:
      "Architecturally distinctive villa plots with private lawns and thoughtfully oriented facades — build a residence tailored to your lifestyle.",
    image: "/assets/dreamcity-real/07.webp",
    video: VIDEO_A,
  },
  {
    name: "Skyline Apartments",
    location: "Residential Enclave",
    description:
      "Contemporary apartment plots with skyline views and layouts optimized for cross-ventilation and modern family living.",
    image: "/assets/dreamcity-real/09.webp",
    video: VIDEO_E,
  },
  {
    name: "Future Developments",
    location: "Upcoming Phases",
    description:
      "Institutional-grade schools, wellness zones, sports arenas and mixed-use plots that will shape the next chapter of DreamCity.",
    image: "/assets/dreamcity-real/18.webp",
    video: VIDEO_F,
  },
];
