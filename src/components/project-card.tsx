'use client';

import type { Project } from '@/lib/data';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from '@/components/ui/dialog';
import Image from 'next/image';
import { Button } from './ui/button';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { Badge } from './ui/badge';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="group relative cursor-pointer overflow-hidden rounded-lg bg-card shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-accent/30 hover:shadow-xl">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/0 to-black/0 transition-all group-hover:from-black/90" />
          <div className="absolute inset-0 z-0 scale-100 transition-transform duration-500 group-hover:scale-105">
            <Image
              src={project.image.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
              data-ai-hint={project.image.imageHint}
            />
          </div>
          <div className="relative z-20 flex h-full flex-col justify-end p-6 text-white">
            <h3 className="mb-2 font-headline text-2xl font-bold">
              {project.title}
            </h3>
            <p className="text-sm text-primary-foreground/80">{project.description}</p>
          </div>
          <div className="absolute top-4 right-4 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <Button size="icon" variant="secondary" className="rounded-full">
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-3xl border-accent/20 bg-background/80 shadow-lg shadow-accent/20 backdrop-blur-lg sm:rounded-lg">
        <DialogHeader>
          <div className="mb-4 aspect-video w-full overflow-hidden rounded-lg">
            <Image
              src={project.image.imageUrl}
              alt={project.title}
              width={600}
              height={400}
              className="h-full w-full object-cover"
              data-ai-hint={project.image.imageHint}
            />
          </div>
          <DialogTitle className="font-headline text-3xl font-bold text-foreground">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {project.description}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <p className="text-foreground/80">{project.details}</p>
          <div>
            <h4 className="mb-2 font-semibold text-foreground">Tools Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <Badge key={tool} variant="secondary">
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
          <Button asChild>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
