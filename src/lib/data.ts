import { PlaceHolderImages } from './placeholder-images';

export type Project = {
  id: string;
  title: string;
  description: string;
  details: string;
  tools: string[];
  image: (typeof PlaceHolderImages)[0];
  link: string;
};

export type BlogArticle = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image: (typeof PlaceHolderImages)[0];
};

export const projects: Project[] = [
  {
    id: '1',
    title: 'AI-Powered CRM Automation',
    description: 'Automated lead scoring and contact segmentation for Pipedrive.',
    details: 'Developed a custom AI agent that integrates with Pipedrive CRM. The system analyzes incoming leads, scores them based on custom criteria, and automatically segments contacts for targeted marketing campaigns. This resulted in a 40% increase in lead conversion rates.',
    tools: ['OpenAI', 'Pipedrive API', 'n8n', 'Firebase'],
    image: PlaceHolderImages.find(p => p.id === 'project1')!,
    link: '#',
  },
  {
    id: '2',
    title: 'Autonomous Slack Responder',
    description: 'A smart AI agent for handling customer queries in Slack channels.',
    details: 'Built an autonomous AI agent that monitors specific Slack channels, understands customer queries using natural language processing, and provides instant, accurate responses by pulling data from a Notion knowledge base. The agent can also escalate complex issues to human support.',
    tools: ['Slack API', 'Notion API', 'OpenAI', 'Make.com'],
    image: PlaceHolderImages.find(p => p.id === 'project2')!,
    link: '#',
  },
  {
    id: '3',
    title: 'Automated Content Pipeline',
    description: 'Streamlined content creation from Airtable to Webflow.',
    details: 'Designed a fully automated workflow that takes content ideas from an Airtable base, uses AI to generate draft articles, awaits approval, and then automatically publishes the final content to a Webflow blog. The system also handles image selection and SEO optimization.',
    tools: ['Airtable', 'OpenAI', 'Zapier', 'Webflow API'],
    image: PlaceHolderImages.find(p => p.id === 'project3')!,
    link: '#',
  },
    {
    id: '4',
    title: 'GCP Data Processing Workflow',
    description: 'Serverless data processing and integration on Google Cloud.',
    details: 'Architected a serverless workflow on Google Cloud Platform to process large datasets. The system uses Cloud Functions to trigger on new data uploads, performs complex transformations, and integrates the processed data with external analytics services for real-time dashboarding.',
    tools: ['Google Cloud', 'Firebase', 'BigQuery', 'Python'],
    image: PlaceHolderImages.find(p => p.id === 'project4')!,
    link: '#',
  },
];

export const blogArticles: BlogArticle[] = [
  {
    id: 'blog1',
    title: 'How AI Agents Are Changing Workflow Automation',
    date: 'August 5, 2024',
    excerpt: 'Explore the rise of autonomous AI agents and their revolutionary impact on business process automation, from simple tasks to complex decision-making.',
    content: '<p>The world of workflow automation is undergoing a seismic shift, thanks to the advent of sophisticated AI agents. No longer are we limited to simple, rule-based automations. Today, AI agents can understand context, make decisions, and even learn from their interactions. This article delves into how these intelligent agents are dismantling traditional workflow barriers, enabling businesses to achieve unprecedented levels of efficiency and innovation.</p><p>We will cover the core technologies powering these agents, including Large Language Models (LLMs) and machine learning frameworks. Furthermore, we will showcase real-world examples of AI agents in action, from managing complex customer service inquiries to orchestrating multi-step data analysis pipelines. The future is not just automated; it\'s autonomous.</p>',
    image: PlaceHolderImages.find(p => p.id === 'blog1')!,
  },
  {
    id: 'blog2',
    title: 'The Future of CRM: Smarter, Faster, Fully Automated',
    date: 'August 12, 2024',
    excerpt: 'Customer Relationship Management is evolving. Discover how AI is making CRMs predictive, proactive, and deeply integrated into every facet of your business.',
    content: '<p>For years, CRMs have been reliable systems of record. Now, with the infusion of AI, they are transforming into intelligent systems of engagement. Imagine a CRM that not only stores customer data but also predicts their next move, suggests the perfect time to reach out, and even drafts personalized communication for your sales team. This is not science fiction; it\'s the new reality of AI-driven CRM.</p><p>This post explores the key AI features being integrated into modern CRM platforms, such as predictive lead scoring, sentiment analysis of customer communication, and automated data enrichment. We\'ll discuss how these capabilities empower sales and marketing teams to build stronger, more profitable customer relationships with less manual effort.</p>',
    image: PlaceHolderImages.find(p => p.id === 'blog2')!,
  },
  {
    id: 'blog3',
    title: 'Building Autonomous Systems with AI Workflows',
    date: 'August 19, 2024',
    excerpt: 'A technical deep-dive into the architecture and tools required to build robust, scalable, and autonomous systems using modern AI workflow platforms.',
    content: '<p>Building an autonomous system is more than just writing code; it\'s about designing an intelligent workflow that can operate independently and adapt to changing conditions. This article provides a practical guide for developers and automation specialists looking to construct these systems from the ground up.</p><p>We will compare and contrast leading workflow automation tools like n8n, Make.com, and Zapier, focusing on their capabilities for integrating AI models. The discussion will cover essential architectural patterns, error handling strategies, and best practices for creating feedback loops that allow your autonomous systems to learn and improve over time. Get ready to move beyond simple automation and start building truly intelligent systems.</p>',
    image: PlaceHolderImages.find(p => p.id === 'blog3')!,
  },
];
