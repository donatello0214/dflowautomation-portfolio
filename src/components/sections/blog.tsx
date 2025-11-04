import { blogArticles } from '@/lib/data';
import { BlogCard } from '../blog-card';

export function Blog() {
  return (
    <section id="blog" className="bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-4xl font-bold md:text-5xl">
            Insights & Articles
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/80">
            Exploring the frontiers of AI, automation, and intelligent systems.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogArticles.map((article) => (
            <BlogCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
