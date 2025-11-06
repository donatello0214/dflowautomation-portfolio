'use client';

import type { BlogArticle } from '@/lib/data';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';
import Image from 'next/image';
import { Button } from './ui/button';
import { ArrowUpRight, MessageCircle } from 'lucide-react';

export function BlogCard({ article }: { article: BlogArticle }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="group relative cursor-pointer overflow-hidden rounded-lg bg-card shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-accent/30 hover:shadow-xl">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/0 to-black/0 transition-all group-hover:from-black/90" />
          <div className="absolute inset-0 z-0 scale-100 transition-transform duration-500 group-hover:scale-105">
            <Image
              src={article.image.imageUrl}
              alt={article.title}
              fill
              className="object-cover"
              data-ai-hint={article.image.imageHint}
            />
          </div>
          <div className="relative z-20 flex h-full flex-col justify-end p-6 text-white">
            <h3 className="mb-2 font-headline text-2xl font-bold text-white">
              {article.title}
            </h3>
            <p className="text-sm text-white/80">{article.excerpt}</p>
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
          <div className="mb-4 aspect-video w-full overflow-hidden rounded-lg">
            <Image
              src={article.image.imageUrl}
              alt={article.title}
              width={600}
              height={400}
              className="h-full w-full object-cover"
              data-ai-hint={article.image.imageHint}
            />
          </div>
          <DialogTitle className="font-headline text-3xl font-bold text-foreground">
            {article.title}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Published on {article.date}
          </DialogDescription>
        </DialogHeader>
        <div className="overflow-y-auto pr-4 flex-1">
          <div
            className="prose prose-sm dark:prose-invert text-foreground/80"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
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
  );
}
