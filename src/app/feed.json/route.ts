import { blogArticles } from '@/lib/data';
import { NextResponse } from 'next/server';

export async function GET() {
  const siteUrl = 'https://dflowautomation.com'; // Replace with your actual domain

  const feed = {
    version: 'https://jsonfeed.org/version/1.1',
    title: 'DFlowAI Portfolio Blog',
    home_page_url: siteUrl,
    feed_url: `${siteUrl}/feed.json`,
    description: 'Insights & Articles from DFlowAutomation',
    authors: [
      {
        name: 'Epifanio "Don" Sufrir',
        url: siteUrl,
      },
    ],
    items: blogArticles.map(article => ({
      id: `${siteUrl}/blog/${article.id}`,
      url: `${siteUrl}/#blog`,
      title: article.title,
      content_html: article.content,
      summary: article.excerpt,
      date_published: new Date(article.date).toISOString(),
      image: article.image.imageUrl,
    })),
  };

  return NextResponse.json(feed, {
    headers: {
      'Content-Type': 'application/feed+json',
    },
  });
}

    