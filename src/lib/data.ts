

import { PlaceHolderImages } from './placeholder-images';
import { techStack } from './tech-stack';

export type Project = {
  id: string;
  title: string;
  description: string; // This remains for the card view
  overview: string;
  problem: string;
  solution: string;
  impact: string;
  tools: string[];
  image: (typeof PlaceHolderImages)[0] | (typeof PlaceHolderImages);
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

export type Testimonial = {
  name: string;
  title: string;
  quote: string;
  image: (typeof PlaceHolderImages)[0];
};

export type TechLogo = {
  id: string;
  name: string;
  imageUrl?: string;
};


export const projects: Project[] = [
  {
    id: '1',
    title: 'FB Page AI Chatbot',
    description: 'AI-powered Messenger chatbot automating responses, tasks, and customer engagement.',
    overview: 'An n8n-powered AI chatbot for Facebook Messenger that automates customer communication. It handles inquiries and sales conversations 24/7, providing instant, intelligent responses and streamlining daily workflows without human intervention.',
    problem: 'Clients struggled with managing high volumes of customer inquiries and sales conversations on Facebook, leading to slow response times, missed opportunities, and high operational costs due to manual effort.',
    solution: 'An AI chatbot was developed to automate responses, handle FAQs, book appointments, and recommend products. It intelligently manages conversations, minimizing the need for constant human supervision and freeing up staff.',
    impact: 'The chatbot increased sales by up to 40%, significantly reduced labor costs, and improved customer engagement with faster response times, leading to stronger lead nurturing and greater customer loyalty.',
    tools: ['n8n', 'Google Gemini API', 'FB Messenger API', 'Google Sheets'],
    image: PlaceHolderImages.find(p => p.id === 'project1')!,
    link: '#',
  },
  {
    id: '2',
    title: 'Auto Sort Gmail Attachments on Google Drive',
    description: 'Auto Sort Gmail Attachments on Google Drive automates fetching unread email attachments, renames files with AI, uploads to Google Drive, logs info in Sheets, and sends summary notifications.',
    overview: 'This workflow automates retrieving unread email attachments, using AI to generate concise filenames. It uploads files to Google Drive, logs details in Sheets, and sends notification emails to clients.',
    problem: 'The client faced challenges with managing and organizing a high volume of email attachments, leading to disorganized files, manual data entry, and wasted time searching for important documents.',
    solution: 'An automated system was created to fetch attachments, rename them intelligently, upload to Google Drive, log information in Google Sheets, and notify users, ensuring a streamlined and organized process.',
    impact: 'The automation significantly reduced manual effort, minimized errors, and improved document organization. This resulted in quicker access to important files, enhancing overall operational efficiency and productivity for the client.',
    tools: ['Google Drive', 'Google Sheets', 'Google Docs', 'Gemini', 'Make.com'],
    image: PlaceHolderImages.find(p => p.id === 'project2')!,
    link: '#',
  },
  {
    id: '3',
    title: 'Zapier + Asana CRM Automation',
    description: 'A central Zapier automation connecting Asana, Google Drive, and Gmail to automate project setup, client follow-ups, and post-service engagement.',
    overview: 'This comprehensive automation transforms Asana into a fully functional CRM. It utilizes multi-step Zapier Paths to trigger stage-specific actions—from folder creation to targeted email campaigns—based on pipeline movements.',
    problem: 'The client struggled with manual CRM management in Asana, leading to inconsistent communication, missed follow-ups, and significant time wasted on repetitive administrative tasks like folder creation and drafting emails.',
    solution: 'I engineered a robust multi-path Zapier workflow that monitors Asana columns. It automatically executes administrative tasks and sends AI-personalized emails specific to the lead\'s current stage and service package.',
    impact: 'The automation standardized the client experience, ensuring no lead is left behind. It reduced administrative overhead by automating file organization and dramatically increased engagement through timely, personalized communication for every sales stage.',
    tools: ['Asana', 'Zapier', 'Google Drive', 'Gmail'],
    image: PlaceHolderImages.find(p => p.id === 'project3')!,
    link: '#',
  },
    {
    id: '4' ,
    title: 'GCP Data Processing Workflow',
    description: 'Serverless data processing and integration on Google Cloud.',
    overview: 'A scalable, serverless data processing workflow on Google Cloud to handle large volumes of IoT data, using Cloud Functions and BigQuery for real-time analytics and partner API integration.',
    problem: 'The client needed an efficient way to process terabytes of incoming data from IoT devices without managing complex server infrastructure, ensuring the data was validated, enriched, and quickly available.',
    solution: 'An event-driven architecture was designed using Google Cloud Functions. Data uploaded to Cloud Storage triggers a pipeline for validation, normalization, and enrichment with BigQuery, before being sent to external APIs.',
    impact: 'The serverless architecture provided a highly efficient, cost-effective solution that scales automatically. It enabled immediate business intelligence, providing real-time insights for internal dashboards and external partners without infrastructure overhead.',
    tools: ['Google Cloud', 'Firebase', 'BigQuery', 'Python'],
    image: PlaceHolderImages.find(p => p.id === 'project4')!,
    link: '#',
  },
  {
    id: '5',
    title: 'AI Math Solver & Web Researcher on Messenger',
    description: 'Text based, Chatgpt-like Math solver for both basic and complex problems and web research.',
    overview: 'This n8n workflow integrates Facebook Messenger with advanced AI to solve math problems and perform real-time web research, providing users with instant, interactive, and context-aware assistance directly in chat.',
    problem: 'Users lacked a quick, convenient tool to get immediate help with math problems or web research directly within a familiar messaging app, often having to switch between different applications.',
    solution: 'An n8n workflow was created to connect Messenger to an AI that interprets user questions, computes math solutions, gathers web references, and delivers concise, multi-lingual answers in a conversational format.',
    impact: 'The solution provides on-demand academic and informational support, enhancing user engagement and accessibility. It offers a seamless, interactive experience, making information retrieval and problem-solving faster and more intuitive.',
    tools: ['n8n', 'Google Gemini API', 'FB Messenger API', 'Google Sheets'],
    image: PlaceHolderImages.find(p => p.id === 'project5')!,
    link: '#',
  },
  {
    id: '6',
    title: 'Asana Sync with Xero Automation',
    description: 'The automation workflow syncs Asana completed tasks with Xero and Google Sheets, updates records, and uploads data attachments automatically.',
    overview: 'A Make.com scenario that seamlessly integrates Asana, Xero, and Google Sheets. It automates financial tracking and reporting by syncing completed tasks with transactions and updating records in real-time.',
    problem: 'The client manually reconciled completed project tasks in Asana with financial records in Xero, a time-consuming process prone to errors that delayed financial reporting and decision-making.',
    solution: 'An automated workflow was developed to track completed Asana tasks, sync financial data to Xero, and populate Google Sheets with updated records, including automated attachment uploads for reconciliation.',
    impact: 'The integration saved significant time, improved data accuracy, and enabled real-time financial oversight. This boosted operational efficiency, enhanced data reliability, and allowed for smarter, faster business decisions.',
    tools: ['Make.com', 'Asana API', 'Xero API', 'Google Sheets'],
    image: PlaceHolderImages.find(p => p.id === 'project6')!,
    link: '#',
  },
  {
    id: '7',
    title: 'Perspective Lead Routing - Klaviyo & Superchat for Black Friday Sale',
    description: 'A smart lead routing system using Zapier Paths to direct Perspective funnel leads to either Klaviyo (Email) or Superchat (WhatsApp/SMS) based on contact data.',
    overview: 'This automation connects a "Perspective" mobile funnel to marketing platforms via Zapier. It utilizes conditional logic (Paths) to intelligently route leads: email-only leads go to Klaviyo, while mobile-number leads trigger WhatsApp flows in Superchat.',
    problem: 'The clients Black Friday funnel captured mixed data points (emails vs. phone numbers), causing fragmentation. Without routing, leads were getting lost or sent to the wrong platform, resulting in missed engagement opportunities during a high-stakes sale.',
    solution: 'I built a "Traffic Cop" automation in Zapier using Paths. It evaluates every incoming leads data availability (Email vs. Phone) and instantly routes them to the correct nurture sequence in either Klaviyo or Superchat.',
    impact: 'This ensured 100% of leads received immediate, channel-appropriate follow-up. It maximized Black Friday waitlist engagement by meeting customers on their preferred platform (Inbox vs. WhatsApp), significantly boosting open rates and potential revenue.',
    tools: ['Zapier', 'Klaviyo', 'Superchat', 'Perspective', 'Gmail', 'Whatsapp'],
    image: [
      PlaceHolderImages.find(p => p.id === 'project7-1')!,
      PlaceHolderImages.find(p => p.id === 'project7-2')!,
      PlaceHolderImages.find(p => p.id === 'project7-3')!,
    ],
    link: '#',
  },
  {
    id: '8',
    title: 'Facebook 3 Steps Funnel Automation',
    description: 'A comprehensive HighLevel ecosystem automating the sales funnel from Facebook lead capture to closing. It streamlines nurturing, manages appointment lifecycles, and dynamically updates pipeline stages to maximize conversion efficiency.',
    overview: 'A comprehensive HighLevel (GHL) automation ecosystem designed to capture Facebook leads, automate multi-channel follow-ups (SMS/Email), manage appointment lifecycles, and streamline pipeline stages from initial inquiry to closed deal.',
    problem: 'Manual lead management caused delayed responses, resulting in lost opportunities and high appointment no-show rates. The business lacked a cohesive system to track lead status, manage cancellations, or re-engage unresponsive prospects effectively.',
    solution: 'I engineered an end-to-end workflow that automates immediate nurture, halts sequences upon response, enforces appointment reminders to reduce no-shows, and dynamically updates pipeline stages based on real-time lead behavior and booking status.',
    impact: 'The system drastically reduced manual workload while increasing lead conversion rates. It ensured 24/7 responsiveness, minimized appointment no-shows through automated reminders, and provided the client with clear, automated visibility into sales performance.',
    tools: ['GoHighLevel', 'Facebook Ads API', 'Google', 'Google Calendar'],
    image: [
        PlaceHolderImages.find(p => p.id === 'project8-1')!,
        PlaceHolderImages.find(p => p.id === 'project8-2')!,
        PlaceHolderImages.find(p => p.id === 'project8-3')!,
        PlaceHolderImages.find(p => p.id === 'project8-4')!,
        PlaceHolderImages.find(p => p.id === 'project8-5')!,
        PlaceHolderImages.find(p => p.id === 'project8-6')!,
        PlaceHolderImages.find(p => p.id === 'project8-7')!,
        PlaceHolderImages.find(p => p.id === 'project8-8')!,
    ],
    link: '#',
  },
  {
    id: '9',
    title: 'Zendesk Customer Support Ticketing System',
    description: 'Automates ticket creation and assignment from emails.',
    overview: 'This workflow automates customer support by monitoring an inbox, creating tickets in a helpdesk system, categorizing requests with AI, and assigning them to the appropriate agents based on predefined rules.',
    problem: 'The support team spent significant time manually triaging incoming emails, creating tickets, and assigning them to agents. This led to slower response times and inefficient workload distribution.',
    solution: 'An n8n workflow was developed to watch a support inbox. It uses AI to parse emails, create tickets in Zendesk, categorize the issue, and assign it to the correct agent automatically.',
    impact: 'The automation drastically reduced manual triage time and improved initial response times. It ensured a more balanced workload distribution and allowed support agents to focus on resolving customer issues faster.',
    tools: ['n8n', 'Gmail API', 'Zendesk API', 'Google Gemini API', 'Perplexity.ai API'],
    image: PlaceHolderImages.find(p => p.id === 'project9')!,
    link: '#',
  },
  {
    id: '10',
    title: 'Lead Qualifier + Research + Voice Agent with Proposal Generator',
    description: 'An autonomous sales agent that researches leads, performs voice qualification via VAPI, and instantly generates proposals or follow-up communications.',
    overview: 'This Make.com scenario integrates Airtable, Perplexity AI, and VAPI to autonomously research and call new leads. It intelligently routes outcomes to generate PandaDoc proposals or send email follow-ups via Gmail.',
    problem: 'Sales teams often struggle to instantly research and contact incoming leads. Delayed responses and manual proposal drafting processes result in missed opportunities and a slow, inefficient sales pipeline.',
    solution: 'I created a fully automated workflow that uses AI to research and call leads, then dynamically generates custom PandaDoc proposals or sends follow-up emails based on the call outcome.',
    impact: 'This system ensures immediate lead engagement and consistent follow-up. It drastically reduces administrative overhead, allowing the sales team to focus purely on closing pre-qualified, high-intent opportunities.',
    tools: ['Make.com', 'VAPI', 'Slack API', 'Airtable API', 'Gmail API', 'Perplexity AI API', 'Pandadoc'],
    image: PlaceHolderImages.find(p => p.id === 'project10')!,
    link: '#',
  },
  {
    id: '11',
    title: 'Conversational AI for FB Messenger Appointment Booking Chatbot',
    description: 'An intelligent HighLevel (GHL) chatbot that engages Facebook Messenger leads, handles appointment booking conversations, and automates follow-up for unresponsive users.',
    overview: 'This HighLevel workflow utilizes "Conversation AI" to converse with leads directly in Messenger. It features complex branching logic to handle booking requests, timeouts, and successful appointment scheduling without human intervention.',
    problem: 'Managing Facebook Messenger inquiries manually is time-consuming and prone to delays. Leads often go cold if they don\'t receive immediate replies, and scheduling appointments requires constant back-and-forth communication.',
    solution: 'I deployed an AI-driven workflow that instantly engages Messenger leads. It automatically attempts to book appointments, detects when a user stops responding (timeouts), and triggers re-engagement attempts or notifications accordingly.',
    impact: 'The chatbot ensures 24/7 instant engagement for all Messenger inquiries, significantly increasing lead-to-appointment conversion rates while removing the need for a human support agent to handle routine scheduling tasks.',
    tools: ['GoHighLevel', 'Gmail API', 'OpenAI'],
    image: PlaceHolderImages.find(p => p.id === 'project11')!,
    link: '#',
  }
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

export const testimonials: Testimonial[] = [
  {
    name: 'Olivette Valdez',
    title: 'Entrepreneur, Acquapurro WRS',
    quote: 'The AI Chatbot that I commisioned DFlowAutomation to create for my Facebook Page is a life-saver! It handles customer messages automatically, saves so much time, and boosted my sales by around 40%. The setup was seamless, professional, and truly transformed my daily operations with less effort.',
    image: PlaceHolderImages.find(p => p.id === 'testimonial1')!,
  },
  {
    name: 'Ezekiel V.',
    title: 'Content Creator, AskMeAnything',
    quote: 'DFlowAutomation built an incredible ChatGPT-style automation for my Messenger page! It’s fast, intelligent, and engages my audience like never before. The setup was smooth, fully customized to my content, and has boosted my interaction and productivity tremendously. Highly recommended!',
    image: PlaceHolderImages.find(p => p.id === 'testimonial2')!,
  }
];

export const techLogos: TechLogo[] = techStack;


    

    

    

    
