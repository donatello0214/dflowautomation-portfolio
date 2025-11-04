
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
    details: 'This project involved developing a sophisticated AI agent that integrates deeply with the Pipedrive CRM API. The system was architected to handle a high volume of incoming leads from various marketing channels. Using a custom-trained model on OpenAI, the agent performs real-time lead analysis, scoring each lead based on over 50 data points, including engagement history, firmographic data, and behavioral patterns. A key feature is the dynamic segmentation engine, which automatically assigns contacts to specific, targeted marketing campaigns within Pipedrive, significantly improving personalization. The implementation of this system led to a verifiable 40% increase in lead conversion rates and reduced manual lead processing time by over 95%.',
    tools: ['OpenAI', 'Pipedrive API', 'n8n', 'Firebase'],
    image: PlaceHolderImages.find(p => p.id === 'project1')!,
    link: '#',
  },
  {
    id: '2',
    title: 'Autonomous Slack Responder',
    description: 'A smart AI agent for handling customer queries in Slack channels.',
    details: 'For this project, I built a fully autonomous AI agent designed to function as a first-line support specialist within a busy Slack workspace. The agent uses advanced Natural Language Processing (NLP) to understand the intent and sentiment of customer queries in real-time. It seamlessly integrates with a Notion knowledge base, structured as a vector database, to fetch and deliver accurate, context-aware responses instantly. A critical feature is its intelligent escalation protocol; when the agent determines a query is too complex or emotionally charged, it automatically summarizes the conversation, gathers relevant user data, and triages it to the appropriate human support tier, ensuring a smooth handoff and efficient resolution.',
    tools: ['Slack API', 'Notion API', 'OpenAI', 'Make.com'],
    image: PlaceHolderImages.find(p => p.id === 'project2')!,
    link: '#',
  },
  {
    id: '3',
    title: 'Automated Content Pipeline',
    description: 'Streamlined content creation from Airtable to Webflow.',
    details: 'I designed and implemented a complete end-to-end content creation and publishing pipeline. The workflow begins in Airtable, where content strategists outline ideas and keywords. A Zapier workflow triggers an AI content generation service (powered by OpenAI) to create detailed article drafts. These drafts are then placed in a designated "review" state in Airtable. Once an editor approves the content, the workflow automatically selects a relevant stock image using an AI service, optimizes the article for SEO with meta tags and descriptions, and publishes the final piece directly to the company\'s Webflow blog via the Webflow API. This system reduced the average content lifecycle from two weeks to just two days.',
    tools: ['Airtable', 'OpenAI', 'Zapier', 'Webflow API'],
    image: PlaceHolderImages.find(p => p.id === 'project3')!,
    link: '#',
  },
    {
    id: '4' ,
    title: 'GCP Data Processing Workflow',
    description: 'Serverless data processing and integration on Google Cloud.',
    details: 'I architected a highly scalable, serverless data processing workflow on Google Cloud Platform. The system is designed to handle terabytes of incoming data from IoT devices. Using Google Cloud Functions, new data uploaded to a Cloud Storage bucket triggers a processing pipeline. This pipeline involves data validation, cleaning, normalization, and enrichment using BigQuery for complex analytical queries. Finally, the processed, structured data is pushed to external partner APIs and internal real-time analytics dashboards, providing immediate business intelligence. The entire architecture is event-driven, ensuring efficiency and cost-effectiveness by only using resources when data is actively being processed.',
    tools: ['Google Cloud', 'Firebase', 'BigQuery', 'Python'],
    image: PlaceHolderImages.find(p => p.id === 'project4')!,
    link: '#',
  },
];

export const blogArticles: BlogArticle[] = [
  {
    id: 'blog1',
    title: 'How AI Agents Are Changing Workflow Automation',
    date: 'October 7, 2025',
    excerpt: 'Explore the rise of autonomous AI agents and their revolutionary impact on business process automation, from simple tasks to complex decision-making.',
    content: `
      <p>The world of workflow automation is undergoing a seismic shift, thanks to the advent of sophisticated AI agents. For decades, automation was synonymous with rigid, rule-based systems executing predefined tasks. While effective, these systems lacked the flexibility to handle ambiguity, context, or unforeseen exceptions. Today, AI agents are dismantling these limitations, ushering in an era of intelligent, autonomous automation.</p>
      
      <h4>From "If-This-Then-That" to "Understand-Reason-Act"</h4>
      <p>Unlike their predecessors, AI agents operate on a more sophisticated paradigm. Powered by Large Language Models (LLMs), natural language processing (NLP), and machine learning, these agents can:</p>
      <ul>
        <li><strong>Understand Intent:</strong> They can interpret natural language requests, whether from an email, a chat message, or a project management tool, discerning the user's underlying goal.</li>
        <li><strong>Reason and Plan:</strong> An AI agent can break down a complex request into a series of smaller, executable steps. It can select the appropriate tools, access different data sources, and formulate a multi-step plan to achieve the objective.</li>
        <li><strong>Act and Adapt:</strong> Agents can interact with various software applications via APIs, execute code, and perform actions. Crucially, if they encounter an error or an unexpected result, they can analyze the problem, adapt their plan, and attempt a different approach—all without human intervention.</li>
      </ul>
      
      <h4>Real-World Impact Across Industries</h4>
      <p>The applications are vast and transformative. In customer support, AI agents can manage initial triage, answer common questions by referencing a knowledge base, and intelligently escalate only the most complex cases to human agents, complete with a summary of the issue. In finance, they can automate invoice processing, cross-reference purchase orders, and flag anomalies for review, drastically reducing manual data entry and errors.</p>
      
      <p>As we move forward, the distinction between software and workforce will continue to blur. AI agents are not just tools; they are becoming digital team members, capable of taking ownership of entire processes. The future is not just automated; it's autonomous, and businesses that embrace this shift will be poised to lead in efficiency, innovation, and scalability.</p>
    `,
    image: PlaceHolderImages.find(p => p.id === 'blog1')!,
  },
  {
    id: 'blog2',
    title: 'The Future of CRM: Smarter, Faster, Fully Automated',
    date: 'October 14, 2025',
    excerpt: 'Customer Relationship Management is evolving. Discover how AI is making CRMs predictive, proactive, and deeply integrated into every facet of your business.',
    content: `
      <p>For years, Customer Relationship Management (CRM) platforms have served as digital rolodexes—reliable, yet passive, systems of record. The infusion of Artificial Intelligence is fundamentally changing this dynamic, transforming CRMs into proactive, intelligent engines for business growth. The CRM of tomorrow doesn't just store information; it anticipates needs, drives action, and uncovers hidden opportunities.</p>
      
      <h4>The Predictive Power of AI in CRM</h4>
      <p>The most significant leap forward is in predictive analytics. By analyzing historical data, AI algorithms can now provide shockingly accurate forecasts and recommendations:</p>
      <ul>
        <li><strong>Predictive Lead Scoring:</strong> Instead of relying on static criteria, AI models analyze thousands of data points—from email engagement to firmographic data—to identify which leads are most likely to convert. This allows sales teams to focus their efforts where they will have the most impact.</li>
        <li><strong>Churn Prediction:</strong> AI can monitor customer behavior, support ticket history, and product usage to flag accounts at risk of churning. This enables proactive intervention from customer success teams to save the relationship.</li>
        <li><strong>Lifetime Value (LTV) Forecasting:</strong> By understanding the characteristics of high-value customers, AI can predict the potential LTV of new clients, helping businesses prioritize long-term, profitable relationships.</li>
      </ul>
      
      <h4>Automation on Autopilot</h4>
      <p>AI-driven automation goes far beyond simple email templates. Modern CRMs can now automate complex communication and data management tasks. Imagine a system that analyzes an incoming support email, understands its sentiment and urgency, and automatically drafts a personalized, empathetic response for the support agent to review and send. Or a system that automatically enriches new contact records by scraping public data from LinkedIn and company websites, ensuring your data is always up-to-date without manual entry.</p>
      
      <p>This "system of engagement" approach means the CRM becomes the central nervous system of the business, intelligently orchestrating interactions across sales, marketing, and customer service. The result is a more personalized customer experience, a more efficient sales process, and a dramatic reduction in the administrative burden on your team.</p>
    `,
    image: PlaceHolderImages.find(p => p.id === 'blog2')!,
  },
  {
    id: 'blog3',
    title: 'Building Autonomous Systems with AI Workflows',
    date: 'October 21, 2025',
    excerpt: 'A technical deep-dive into the architecture and tools required to build robust, scalable, and autonomous systems using modern AI workflow platforms.',
    content: `
      <p>The concept of an "autonomous system" has moved from the realm of science fiction to a practical business objective. But building one requires more than just access to a powerful AI model. It demands a thoughtful approach to architecture, a solid understanding of workflow tools, and a strategy for creating systems that are not only intelligent but also reliable and scalable.</p>
      
      <h4>The Core Components of an Autonomous Workflow</h4>
      <p>At its heart, an autonomous system consists of several key layers:</p>
      <ul>
        <li><strong>Trigger Layer:</strong> This is the event that initiates the workflow. It could be a new email, a webhook from another application, a scheduled time, or a new entry in a database.</li>
        <li><strong>Cognitive Layer:</strong> This is where the "thinking" happens. An AI model, typically a Large Language Model (LLM), analyzes the input from the trigger, determines the goal, and formulates a plan. This may involve deciding which tools to use or what information to gather.</li>
        <li><strong>Action/Tool Layer:</strong> This layer consists of the tools the AI can use to interact with the outside world. This could include sending an email, querying a database, calling a third-party API, or even executing a custom script.</li>
        <li><strong>Feedback Loop:</strong> This is arguably the most critical component for true autonomy. The system must be able to analyze the result of its actions. Did the API call succeed? Was the information retrieved useful? Based on this feedback, the cognitive layer can adjust its plan and try a new course of action.</li>
      </ul>
      
      <h4>Choosing Your Workflow Stack</h4>
      <p>Several platforms have emerged as leaders in this space. Tools like <strong>n8n</strong> and <strong>Make.com</strong> offer visual, node-based interfaces that are excellent for orchestrating complex, multi-step workflows involving numerous applications. They provide robust error handling and conditional logic, which are essential for building resilient systems. For developers who prefer a code-first approach, frameworks like <strong>Genkit</strong> or <strong>LangChain</strong> offer powerful abstractions for chaining together LLM calls, managing state, and defining custom tools in languages like TypeScript or Python.</p>
      
      <h4>Best Practices for Robustness</h4>
      <p>Building for autonomy means planning for failure. Your system must include comprehensive logging to understand its decision-making process. Implement retry mechanisms with exponential backoff for API calls. And most importantly, define clear escalation paths. When an agent is truly stuck, it must have a way to flag the problem and hand it off to a human for review. By combining intelligent design with robust engineering, you can move beyond simple automation and start building truly autonomous systems that create value around the clock.</p>
    `,
    image: PlaceHolderImages.find(p => p.id === 'blog3')!,
  },
];
