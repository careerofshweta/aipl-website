"use client";

import { projects } from "@/components/site/projects-data";
import { ProjectCard } from "@/components/site/ProjectCard";
import { SectionHeader } from "@/components/site/ui";

export function ProjectsPage() {
  return (
    <div className="pt-28 md:pt-32">
      <section className="container-x mx-auto max-w-7xl pb-24">
        <SectionHeader
          kicker="Portfolio"
          title={
            <>
              Projects within <span className="italic text-gold">DreamCity</span>
            </>
          }
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
