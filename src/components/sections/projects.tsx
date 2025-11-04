import { projects, Project } from '@/lib/data';
import { ProjectCard } from '../project-card';
import { Button } from '../ui/button';
import Link from 'next/link';

export function Projects() {
  const featuredProjects: Project[] = [];
  const categories = ['n8n', 'make', 'zapier', 'gohighlevel'];
  const includedCategories = new Set<string>();

  projects.forEach(project => {
    const projectCategory = categories.find(cat => 
      project.tools.some(tool => tool.toLowerCase().includes(cat))
    );

    if (projectCategory && !includedCategories.has(projectCategory)) {
      featuredProjects.push(project);
      includedCategories.add(projectCategory);
    }
  });

  // Ensure we have 4 projects, if some categories were missing
  const otherProjects = projects.filter(p => !featuredProjects.includes(p));
  let i = 0;
  while (featuredProjects.length < 4 && otherProjects[i]) {
    featuredProjects.push(otherProjects[i]);
    i++;
  }


  return (
    <section id="projects" className="bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-4xl font-bold md:text-5xl">
            Featured Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/80">
            A selection of AI-powered automation and integration solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
