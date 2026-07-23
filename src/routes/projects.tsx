import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/components/site/projects-data";
import { ProjectCard } from "@/components/site/ProjectCard";
import { SectionHeader } from "@/components/site/ui";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — AIPL DreamCity Ludhiana" },
      {
        name: "description",
        content:
          "Explore projects within AIPL DreamCity Ludhiana — luxury villas, premium residential plots, commercial spaces, high-street retail and upcoming phases.",
      },
      { property: "og:title", content: "Projects at AIPL DreamCity Ludhiana" },
      {
        property: "og:description",
        content:
          "Luxury villas, residential plots, commercial spaces and high-street retail within the DreamCity master plan.",
      },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="pt-28 md:pt-32">
      <section className="container-x mx-auto max-w-7xl pb-24">
        <SectionHeader
          kicker="Portfolio"
          title={<>Projects within <span className="italic text-gold">DreamCity</span></>}
          subtitle="Hover any card to preview the space in motion."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
