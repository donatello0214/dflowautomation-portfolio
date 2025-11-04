'use client';
import { Icons } from '../icons';
import { useEffect, useRef } from 'react';

const techLogos = [
  { name: 'OpenAI', icon: Icons.OpenAI },
  { name: 'Firebase', icon: Icons.Firebase },
  { name: 'Make.com', icon: Icons.Make },
  { name: 'n8n', icon: Icons.n8n },
  { name: 'Zapier', icon: Icons.Zapier },
  { name: 'Notion', icon: Icons.Notion },
  { name: 'Airtable', icon: Icons.Airtable },
  { name: 'Slack', icon: Icons.Slack },
  { name: 'Pipedrive', icon: Icons.Pipedrive },
  { name: 'Google Cloud', icon: Icons.GoogleCloud },
];

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
          <div className="tech-scroller-inner flex gap-12">
            {techLogos.map((tech, index) => (
              <div key={index} className="flex flex-col items-center gap-2 text-foreground/60 transition-colors hover:text-accent">
                <tech.icon className="h-12 w-12" />
                <span className="text-sm font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
