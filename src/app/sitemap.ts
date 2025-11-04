import { MetadataRoute } from 'next';
import { blogArticles, projects } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://dflowautomation,elementfx.com'; // Replace with your actual domain

  const mainRoutes = ['/', '#about', '#projects', '#blog', '#contact'].map(route => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date(),
  }));

  const blogRoutes = blogArticles.map(article => ({
    url: `${siteUrl}/blog/${article.id}`, // Assuming modals could be separate pages in the future
    lastModified: new Date(article.date),
  }));

  const projectRoutes = projects.map(project => ({
    url: `${siteUrl}/projects/${project.id}`, // Assuming modals could be separate pages in the future
    lastModified: new Date(),
  }));


  return [...mainRoutes]; // Sticking to main routes as modals are not separate pages
}
