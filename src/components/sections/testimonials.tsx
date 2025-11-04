'use client';

import { testimonials } from '@/lib/data';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Quote } from 'lucide-react';

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-4xl font-bold md:text-5xl">
            What Clients Are Saying
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/80">
            Real feedback from businesses transformed by automation.
          </p>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="mx-auto w-full max-w-4xl"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="border-accent/20 bg-card/50 shadow-lg shadow-accent/10">
                    <CardContent className="flex flex-col items-center justify-center p-6 text-center sm:flex-row sm:p-8 sm:text-left">
                       <div className="relative mb-6 flex-shrink-0 sm:mb-0 sm:mr-8">
                        <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-accent/50 to-primary/50 blur-lg"></div>
                        <Image
                          src={testimonial.image.imageUrl}
                          alt={testimonial.name}
                          width={100}
                          height={100}
                          className="relative h-24 w-24 rounded-full border-4 border-background object-cover shadow-md"
                          data-ai-hint={testimonial.image.imageHint}
                        />
                      </div>
                      <div className="relative">
                        <Quote className="absolute -top-4 -left-6 h-10 w-10 text-accent/20 sm:-left-8" />
                        <blockquote className="text-lg text-foreground/90">
                          {testimonial.quote}
                        </blockquote>
                        <footer className="mt-4">
                          <p className="font-bold text-foreground">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-accent">
                            {testimonial.title}
                          </p>
                        </footer>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:inline-flex" />
          <CarouselNext className="hidden sm:inline-flex" />
        </Carousel>
      </div>
    </section>
  );
}
