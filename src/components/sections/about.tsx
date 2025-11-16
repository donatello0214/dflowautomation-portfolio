import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '../ui/card';
import { CheckCircle } from 'lucide-react';

const expertise = [
  'Workflow Automation',
  'AI Agent Development',
  'CRM Integration & Customization',
  'Business Process Optimization',
  'API Integration',
  'Serverless Architecture',
];

export function About() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about')!;

  return (
    <section id="about" className="bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute inset-0 -m-4 rounded-full bg-accent/20 blur-2xl"></div>
            <Card className="relative overflow-hidden rounded-full border-4 border-accent/30 bg-transparent p-2 shadow-lg shadow-accent/20">
              <CardContent className="p-0">
                <Image
                  src={aboutImage.imageUrl}
                  alt='Epifanio "Don" Sufrir'
                  width={400}
                  height={400}
                  className="rounded-full object-cover"
                  data-ai-hint={aboutImage.imageHint}
                />
              </CardContent>
            </Card>
          </div>
          <div>
            <h2 className="font-headline text-4xl font-bold md:text-5xl">
              Epifanio "Don" Sufrir
            </h2>
            <p className="mt-2 text-xl font-medium text-accent">
              AI Automation Specialist
            </p>
            <p className="mt-4 text-lg text-foreground/80">
              I specialize in designing and implementing cutting-edge AI automation
              and CRM workflow solutions. My passion is to empower businesses by
              transforming complex manual processes into streamlined, intelligent
              systems that drive growth and efficiency.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {expertise.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
