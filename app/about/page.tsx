import type { Metadata } from "next";
import { AboutPage } from "@/components/pages/AboutPage";

export const metadata: Metadata = {
  title: "About - AIPL DreamCity Ludhiana",
  description:
    "Learn about AIPL DreamCity Ludhiana - vision, township features, location benefits, lifestyle and infrastructure of this master-planned luxury development.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About AIPL DreamCity Ludhiana",
    description:
      "The story, vision and master plan behind AIPL DreamCity Ludhiana - an integrated luxury township on Chandigarh Road.",
    url: "/about",
  },
};

export default AboutPage;
