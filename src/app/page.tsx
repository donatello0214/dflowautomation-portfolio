import { About } from '@/components/sections/about';
import { Blog } from '@/components/sections/blog';
import { Contact } from '@/components/sections/contact';
import { Hero } from '@/components/sections/hero';
import { Projects } from '@/components/sections/projects';
import { TechStack } from '@/components/sections/tech-stack';
import { Testimonials } from '@/components/sections/testimonials';
import { FadeIn } from '@/components/fade-in';

export default function Home() {
  return (
    <>
      <Hero />
      <FadeIn>
        <About />
      </FadeIn>
      <FadeIn>
        <Projects />
      </FadeIn>
       <FadeIn>
        <Testimonials />
      </FadeIn>
      <FadeIn>
        <Blog />
      </FadeIn>
      <FadeIn>
        <TechStack />
      </FadeIn>
      <FadeIn>
        <Contact />
      </FadeIn>
    </>
  );
}
