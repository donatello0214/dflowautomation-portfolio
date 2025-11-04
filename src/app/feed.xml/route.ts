import { blogArticles } from '@/lib/data';

export async function GET() {
  const siteUrl = 'https://dflowautomation.com'; // Replace with your actual domain

  const feedItems = blogArticles.map(article => `
    <item>
      <title>${article.title}</title>
      <link>${siteUrl}/#blog</link>
      <description>${article.excerpt}</description>
      <pubDate>${new Date(article.date).toUTCString()}</pubDate>
      <guid>${siteUrl}/blog/${article.id}</guid>
    </item>
  `).join('');

  const rssFeed = `
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <title>DFlowAI Portfolio Blog</title>
        <link>${siteUrl}</link>
        <description>Insights & Articles from DFlowAutomation</description>
        <language>en-us</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml" />
        ${feedItems}
      </channel>
    </rss>
  `;

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
