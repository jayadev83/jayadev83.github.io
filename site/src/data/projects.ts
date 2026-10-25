// Case studies. Keep them generic: no client names, internal system names,
// code or screenshots from work. Use "a major insurer" and synthetic examples.

export type Project = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  problem: string;
  approach: string[];
  role: string;
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: 'realtime-data-apis-for-ai',
    title: 'Real-time data APIs for AI agents',
    summary:
      'Python Lambda services that read Snowflake and Oracle on demand, so LLM agents and enterprise systems get fresh data through one API layer.',
    stack: ['AWS Lambda', 'ALB', 'GCP Apigee', 'Snowflake', 'Oracle', 'DynamoDB', 'BigQuery', 'Splunk'],
    problem:
      'Generative AI use cases at a major insurer needed current policy and claims data from Snowflake and Oracle, and several other systems needed the same data. Batch extracts were too slow and every consumer was building its own connection.',
    approach: [
      'Built Python AWS Lambda functions that query Snowflake and Oracle in real time, exposed behind an Application Load Balancer.',
      'Published and managed the APIs on GCP Apigee so consumers, including Vertex AI (now Gemini Enterprise Agent Platform) agents, call one governed endpoint.',
      'Logged every invocation and its metadata to DynamoDB, and kept pipeline metadata and logs in BigQuery.',
      'Added Splunk logging and error alerts, and tuned Lambda performance.',
    ],
    role: 'Lead data engineer: design, build, performance tuning and production support.',
    outcome:
      'In progress: one reusable data API layer for several consuming systems and the GenAI use cases, with full call-level logging for support and audit.',
  },
  {
    slug: 'snowflake-data-products',
    title: 'Snowflake data domains and data products',
    summary:
      'An ingestion pipeline that turns source and vendor feeds into governed Snowflake data products using streams, tasks and dynamic tables.',
    stack: ['Snowflake', 'Streams & tasks', 'Dynamic tables', 'Snowpipe', 'Informatica IDMC (IICS)', 'Python', 'PySpark'],
    problem:
      'Data arrived from many source systems and external vendors in different formats, and downstream teams needed consistent, trusted datasets organised by business domain.',
    approach: [
      'Loaded files with Snowpipe and COPY INTO, and wrote Python and PySpark modules to automate ingestion.',
      'Built data domains and data products with streams, tasks, views, dynamic tables and stored procedures.',
      'Orchestrated loads and transformations with Informatica IDMC (IICS) jobs, and migrated workloads from Oracle to Snowflake.',
      'Tuned slow queries using the query profile, and used Time Travel to debug and recover from failures.',
      'Delivered outbound CSV and XML extracts to vendors.',
    ],
    role: 'Lead data engineer: pipeline design, Snowflake modelling and performance tuning.',
    outcome:
      'A ~22 TB, ~400B-row claims data platform with 18K+ tables, ingesting ~6B rows (~2.4 TB) a month through 1,800+ Snowpipe pipes, serving 15M+ queries a month to 170+ users at a ~0.3 s median, with a 99.97% task success rate. I was also part of a 2025 build-out that added 13K+ objects, ~5,000 of them in a single month.',
  },
  {
    slug: 'claims-insights-genai',
    title: 'GenAI claims insights for handlers (hackathon)',
    summary:
      'Hackathon enhancements to claims handler chatbots that surface insights from claims data in real time.',
    stack: ['Generative AI', 'LLMs', 'Snowflake', 'Python'],
    problem:
      'Claims handlers spend time searching across claims data to answer questions while they work a claim.',
    approach: [
      'With my team, built multiple AI enhancements for claims handler chatbots.',
      'Pulled insights from claims data and returned them to handlers in real time inside the chat experience.',
    ],
    role: 'Team member: data and pipeline side of the AI enhancements.',
    outcome: 'Working prototypes that showed how GenAI can shorten claims handling work.',
  },
  {
    slug: 'copilot-developer-productivity',
    title: 'GitHub Copilot skills and agents for developers',
    summary:
      'Custom Copilot skills, instructions and agents in VS Code that speed up everyday data engineering work.',
    stack: ['GitHub Copilot', 'Visual Studio Code', 'Prompt engineering', 'AI agents'],
    problem:
      'Developers repeated the same setup, coding patterns and checks across data pipelines.',
    approach: [
      'Built several GitHub Copilot skills, custom instructions and agents that encode our team standards.',
      'Shared them across the team so new and existing developers get consistent, faster results.',
    ],
    role: 'Creator and maintainer.',
    outcome: 'Faster, more consistent development across the team.',
  },
];
