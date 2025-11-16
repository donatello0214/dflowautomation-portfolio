'use client';

import type { Project } from '@/lib/data';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';
import Image from 'next/image';
import { Button } from './ui/button';
import {
  ArrowUpRight,
  MessageCircle,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Badge } from './ui/badge';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ScrollArea, ScrollBar } from './ui/scroll-area';

export function ProjectCard({ project }: { project: Project }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = Array.isArray(project.image) ? project.image : [project.image];
  const currentImage = images[currentImageIndex];

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const onModalOpenChange = (open: boolean) => {
    setIsModalOpen(open);
    if (!open) {
      setCurrentImageIndex(0);
    }
  };

  const onZoomOpenChange = (open: boolean) => {
    setIsZoomed(open);
    // Keep the main modal open when closing the zoom view
    if (!open) {
      setIsModalOpen(true);
    }
  }

  return (
    <>
      <Dialog open={isModalOpen} onOpenChange={onModalOpenChange}>
        <DialogTrigger asChild onClick={() => setIsModalOpen(true)}>
          <div className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-lg bg-gray-800 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-accent/30 hover:shadow-xl">
            <div className="relative z-20 flex h-full flex-col justify-between p-6">
              <div>
                <div className="mb-4 aspect-video w-full overflow-hidden rounded-md">
                  <Image
                    src={images[0].imageUrl}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover"
                    data-ai-hint={images[0].imageHint}
                  />
                </div>
                <h3 className="mb-2 font-headline text-2xl font-bold text-blue-500">
                  {project.title}
                </h3>
                <p className="text-sm text-white/80">{project.description}</p>
              </div>
            </div>
            <div className="absolute top-4 right-4 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <Button size="icon" variant="secondary" className="rounded-full">
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-3xl border-accent/20 bg-background/80 shadow-lg shadow-accent/20 backdrop-blur-lg sm:rounded-lg max-h-[90vh] flex flex-col">
          <DialogHeader>
            <ScrollArea className="w-full whitespace-nowrap rounded-lg border">
              <div
                className="relative mb-4 aspect-video w-full overflow-hidden rounded-lg"
              >
                <DialogTrigger asChild onClick={() => setIsZoomed(true)}>
                  <div
                    className="w-full h-full cursor-zoom-in"
                  >
                    <Image
                      src={currentImage.imageUrl}
                      alt={project.title}
                      width={1200}
                      height={675}
                      className="h-full w-full object-contain transition-opacity duration-300"
                      data-ai-hint={currentImage.imageHint}
                    />
                  </div>
                </DialogTrigger>

                {images.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 text-white hover:bg-black/50 hover:text-white"
                      onClick={handlePrevImage}
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 text-white hover:bg-black/50 hover:text-white"
                      onClick={handleNextImage}
                    >
                      <ChevronRight className="h-6 w-6" />
                    </Button>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
                      {images.map((_, index) => (
                        <button
                          key={index}
                          className={cn(
                            'h-2 w-2 rounded-full bg-white/50 transition-colors',
                            index === currentImageIndex && 'bg-white'
                          )}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex(index);
                          }}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
            <DialogTitle className="font-headline text-3xl font-bold text-blue-500">
              {project.title}
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-6 overflow-y-auto pr-4 flex-1">
            <div>
              <h4 className="mb-2 font-semibold text-foreground">Overview</h4>
              <p className="text-foreground/80">{project.overview}</p>
            </div>
            <div>
              <h4 className="mb-2 font-semibold text-foreground">Problem</h4>
              <p className="text-foreground/80">{project.problem}</p>
            </div>
            <div>
              <h4 className="mb-2 font-semibold text-foreground">Solution</h4>
              <p className="text-foreground/80">{project.solution}</p>
            </div>
            <div>
              <h4 className="mb-2 font-semibold text-foreground">Impact</h4>
              <p className="text-foreground/80">{project.impact}</p>
            </div>

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
          </div>
          <div className="mt-4 flex justify-end">
            <DialogClose asChild>
              <Button asChild className="text-blue-500">
                <a href="/#contact">
                  Get in Touch <MessageCircle className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
      
      <Dialog open={isZoomed} onOpenChange={onZoomOpenChange}>
        <DialogContent 
          className="bg-black/80 p-0 border-0 max-w-none w-screen h-screen rounded-none flex items-center justify-center backdrop-blur-sm"
          hideCloseButton={true}
        >
          <button
            onClick={() => setIsZoomed(false)}
            className="absolute top-4 right-4 z-20 text-white hover:text-accent transition-colors"
          >
            <X className="h-8 w-8" />
            <span className="sr-only">Close</span>
          </button>
          
          <div 
            className="relative h-full w-full flex items-center justify-center"
          >
            <Image
              src={currentImage.imageUrl}
              alt={project.title}
              width={1920}
              height={1080}
              className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
            />
          </div>
          
          {images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 text-white hover:bg-black/50 hover:text-white z-20"
                onClick={handlePrevImage}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 text-white hover:bg-black/50 hover:text-white z-20"
                onClick={handleNextImage}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}