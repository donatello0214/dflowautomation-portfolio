import { projects } from '@/lib/data';
import { ProjectCard } from '../project-card';

export function Projects() {
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
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
