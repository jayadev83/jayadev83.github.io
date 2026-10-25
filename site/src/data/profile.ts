// Single source of truth for the site's personal details.
// Edit here; every page reads from this file.

export const profile = {
  name: 'Jayadev Suresh Kumar',
  initials: 'JSK',
  title: 'Lead Data Engineer · AI-ready data platforms',
  tagline:
    'I build the data, API and agent layers that make enterprise generative AI work, on Snowflake, AWS and GCP.',
  location: 'Ellington, CT · open to remote and hybrid',
  linkedin: 'https://www.linkedin.com/in/jayadev-suresh-kumar-96705537',
  github: 'https://github.com/jayadev83',
  email: '', // add the address you want public, or leave blank to hide
  resumeUrl: '', // e.g. '/resume.pdf' after you add the file to site/public
};

export const intro = [
  "I'm a Lead Data Engineer at Cognizant, working for a major insurance client in Hartford, CT. I have 20+ years in IT and have been in data engineering since 2020. Snowflake is my main platform: I'm a lead engineer on a ~22 TB, ~400B-row claims data platform serving 15M+ queries a month.",
  'Right now I build AI data pipelines. We take Snowflake and Oracle data and make it available to Google Vertex AI (now Gemini Enterprise Agent Platform) agents and LLMs for generative AI use cases, through real-time APIs on AWS and GCP.',
  'Before data engineering I worked in QA and test automation on data warehouse and data migration projects, so data quality is part of how I design.',
];

export const skills: { group: string; items: string[] }[] = [
  { group: 'Data platform', items: ['Snowflake', 'Oracle', 'SQL', 'Python', 'PySpark', 'Informatica IDMC (IICS)', 'ETL'] },
  { group: 'Snowflake', items: ['Streams & tasks', 'Dynamic tables', 'Stored procedures', 'Snowpipe', 'COPY INTO', 'Time Travel', 'Query profile tuning'] },
  { group: 'AWS', items: ['Lambda', 'ALB', 'S3', 'DynamoDB', 'CodePipeline'] },
  { group: 'GCP', items: ['Vertex AI / Gemini Enterprise Agent Platform', 'Apigee', 'BigQuery', 'Datastore'] },
  { group: 'AI', items: ['GenAI / LLMs', 'AI agents', 'GitHub Copilot skills & agents'] },
  { group: 'CI/CD & ops', items: ['GitHub', 'Jenkins', 'UrbanCode Deploy', 'Harness', 'Terraform', 'Splunk'] },
];

export const certifications = [
  { name: 'Generative AI Leader', issuer: 'Google Cloud', date: 'Dec 2025' },
  { name: 'AWS Certified AI Practitioner', issuer: 'Amazon Web Services', date: '2025' },
  { name: 'SnowPro Core', issuer: 'Snowflake', date: 'Apr 2021' },
];

export const experience = [
  { role: 'Lead Data Engineer', org: 'Cognizant', dates: 'Feb 2020 – Present' },
  { role: 'Technology Lead', org: 'Cognizant', dates: 'Feb 2014 – Feb 2020' },
  { role: 'Test Lead / Analyst / Engineer', org: 'Infosys', dates: 'Mar 2007 – Feb 2014' },
];
