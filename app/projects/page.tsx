import type { Metadata } from "next";
import { ProjectsPage } from "@/components/pages/ProjectsPage";

export const metadata: Metadata = {
  title: "Projects - AIPL DreamCity Ludhiana",
  description:
    "Explore projects within AIPL DreamCity Ludhiana - luxury villas, premium residential plots, commercial spaces, high-street retail and upcoming phases.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects at AIPL DreamCity Ludhiana",
    description:
      "Luxury villas, residential plots, commercial spaces and high-street retail within the DreamCity master plan.",
    url: "/projects",
  },
};

export default ProjectsPage;
