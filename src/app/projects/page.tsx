'use client';

import { projects } from '@/lib/data';
import { ProjectCard } from '@/components/project-card';
import { FadeIn } from '@/components/fade-in';
import { useMemo } from 'react';
import type { Project } from '@/lib/data';

type GroupedProjects = {
  n8n: Project[];
  make: Project[];
  zapier: Project[];
  gohighlevel: Project[];
  other: Project[];
};

export default function ProjectsPage() {
  const groupedProjects = useMemo<GroupedProjects>(() => {
    const groups: GroupedProjects = {
      n8n: [],
      make: [],
      zapier: [],
      gohighlevel: [],
      other: [],
    };

    projects.forEach(project => {
      if (project.tools.some(tool => tool.toLowerCase().includes('n8n'))) {
        groups.n8n.push(project);
      } else if (project.tools.some(tool => tool.toLowerCase().includes('make'))) {
        groups.make.push(project);
      } else if (project.tools.some(tool => tool.toLowerCase().includes('zapier'))) {
        groups.zapier.push(project);
      } else if (project.tools.some(tool => tool.toLowerCase().includes('gohighlevel'))) {
        groups.gohighlevel.push(project);
      } else {
        groups.other.push(project);
      }
    });

    return groups;
  }, []);

  const renderProjectGroup = (title: string, projects: Project[]) => {
    if (projects.length === 0 && title !== 'GoHighLevel') return null;

    return (
      <div className="mb-16">
        <h2 className="font-headline mb-8 text-3xl font-bold md:text-4xl">
          {title}
        </h2>
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p className="text-foreground/60">No projects in this category yet. Stay tuned!</p>
        )}
      </div>
    );
  };

  return (
    <div className="container mx-auto py-16 sm:py-24">
      <FadeIn>
        <div className="mb-12 text-center">
          <h1 className="font-headline text-4xl font-bold md:text-5xl">
            Project Portfolio
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/80">
            A comprehensive look at our AI-powered automation and integration solutions, grouped by platform.
          </p>
        </div>
        
        {renderProjectGroup('n8n', groupedProjects.n8n)}
        {renderProjectGroup('Make', groupedProjects.make)}
        {renderProjectGroup('Zapier', groupedProjects.zapier)}
        {renderProjectGroup('GoHighLevel', groupedProjects.gohighlevel)}
        
        {groupedProjects.other.length > 0 && 
          renderProjectGroup('Other', groupedProjects.other)
        }

      </FadeIn>
    </div>
  );
}
