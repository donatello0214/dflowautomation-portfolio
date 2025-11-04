import { projects } from '@/lib/data';
import { ProjectCard } from '@/components/project-card';
import { FadeIn } from '@/components/fade-in';

export default function ProjectsPage() {
  return (
    <div className="container mx-auto py-16 sm:py-24">
      <FadeIn>
        <div className="mb-12 text-center">
          <h1 className="font-headline text-4xl font-bold md:text-5xl">
            Our Portfolio
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/80">
            A comprehensive look at our AI-powered automation and integration solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </FadeIn>
    </div>
  );
}
