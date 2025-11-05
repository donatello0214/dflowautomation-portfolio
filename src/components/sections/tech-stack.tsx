'use client';
import { useEffect, useRef } from 'react';
import { techLogos } from '@/lib/data';
import Image from 'next/image';

export function TechStack() {
    const scrollerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scroller = scrollerRef.current;
        if (scroller) {
            scroller.setAttribute("data-animated", "true");

            const scrollerInner = scroller.querySelector(".tech-scroller-inner");
            if(scrollerInner) {
                const scrollerContent = Array.from(scrollerInner.children);
                scrollerContent.forEach(item => {
                    const duplicatedItem = item.cloneNode(true) as HTMLElement;
                    duplicatedItem.setAttribute("aria-hidden", "true");
                    scrollerInner.appendChild(duplicatedItem);
                })
            }
        }
    }, [])

  return (
    <section id="tech-stack" className="py-16 bg-background/50">
      <div className="container mx-auto text-center">
        <h2 className="mb-8 font-headline text-3xl font-bold">
          Core Technologies
        </h2>
        <div className="tech-scroller" ref={scrollerRef}>
          <div className="tech-scroller-inner flex items-center gap-12">
            {techLogos.map((tech) => {
              if (!tech.imageUrl) return null;
              return (
                <div key={tech.id} className="flex flex-col items-center gap-2 text-foreground/60 transition-colors hover:text-accent">
                  <div className="relative h-12 w-12">
                    <Image 
                      src={tech.imageUrl} 
                      alt={`${tech.name} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
