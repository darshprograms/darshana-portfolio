export const cvSystemsData = [
  {
    id: "service-autopilot",
    title: "Service Autopilot — Field Service & AI Automation Platform",
    company: "Xplor Technologies",
    role: "Senior Software Engineer",
    period: "Mar 2026 - Present",
    domain: "Field Service",
    techStack: ["C#", ".NET 4.5", "Microservices", "SQL Server", "AI Integration", "Pliable AI", "Twilio", "RabbitMQ", "CDN", "TeamCity", "Octopus Deploy"],
    isFeatured: true,
    summary: "A comprehensive field service management platform enabling companies to register clients and employees, schedule field jobs, automate invoicing, and trigger natural-language AI automations.",
    problem: {
      statement: "Field service businesses required end-to-end operational workflows (estimates, job dispatch, time tracking, invoicing, payments) but struggled with complex manual trigger-based automation setup and delayed customer query resolution."
    },
    solution: {
      description: "Architected core job workflows with automated invoicing upon job completion, integrated RabbitMQ messaging and Twilio SMS, embedded Pliable for AI-driven customer report analysis, and built an AI Agent for natural-language automation configuration."
    },
    naturalLanguageAutomation: {
      title: "Natural Language Automation Engine",
      sublabel: "Featured Case Study: Eliminating Complex Manual Trigger Rules",
      before: {
        title: "BEFORE: Manual Multi-Step Rule Configuration",
        steps: [
          "1. User navigates through multiple automation configuration wizards.",
          "2. Selects manual trigger event: 'Job Status Changed'.",
          "3. Configures nested conditions: 'Status == Completed' AND 'Balance > 0'.",
          "4. Manually links action: 'Generate Invoice' + 'Trigger Payment Gateway'.",
          "5. Sets up separate email & Twilio SMS notification templates."
        ],
        painPoint: "High configuration friction, error-prone rule chaining, and non-technical user frustration."
      },
      after: {
        title: "AFTER: Natural-Language AI Intent Interpretation",
        userPrompt: "Whenever a job is completed, generate an invoice and notify the client via SMS.",
        aiInterpretation: {
          intent: "TRIGGER_JOB_COMPLETION_PIPELINE",
          actionsGenerated: [
            "Trigger: OnJobCompleted(jobId)",
            "Action 1: InvoiceService.GenerateFromJob(jobId)",
            "Action 2: PaymentGateway.PrepareCharge(invoiceId)",
            "Action 3: TwilioService.SendSMS(clientPhone, template: 'InvoiceReady')"
          ],
          status: "AUTOMATION_CONFIGURED_SUCCESSFULLY"
        },
        benefit: "Zero manual trigger configuration; natural language prompt instantly converted into a deterministic microservice automation workflow."
      }
    },
    keyContributions: [
      "Built the core job workflow: Companies generate estimates for clients → approved estimates become jobs → completed jobs automatically generate invoices.",
      "Integrated payment processing through integrated payment gateways upon job completion.",
      "Integrated Twilio for instant customer SMS updates and RabbitMQ for resilient asynchronous messaging across services.",
      "Automated customer lifecycle emails across estimate creation, dispatch, and final settlement.",
      "Integrated Pliable for AI-based customer report analysis and intelligent customer query handling.",
      "Developed an AI agent for the automation page, replacing manual trigger configurations with natural-language AI interaction.",
      "Used SQL Server for persistence, CDN for optimized content delivery, and TeamCity / Octopus Deploy for CI/CD automation."
    ],
    technicalDecisions: [
      {
        decision: "RabbitMQ Message Broker Integration",
        reason: "Decoupled job completion events from downstream invoice generation and Twilio SMS dispatches, ensuring zero job data loss during third-party API spikes."
      },
      {
        decision: "Natural Language AI Automation Agent",
        reason: "Replaced complex nested dropdown UI workflows with an intent-parser agent, dramatically reducing setup time for field business owners."
      }
    ],
    integrations: ["Twilio SMS", "RabbitMQ", "Pliable AI", "Payment Gateways", "CDN", "TeamCity", "Octopus Deploy"]
  },
  {
    id: "flx-direct-airline",
    title: "FLX - Direct Project (Airline Retailing Channel)",
    company: "Accelya Solutions",
    role: "SDE 2",
    period: "Oct 2023 - Aug 2025",
    domain: "Airlines (Qantas, Aegean)",
    techStack: [".NET Core 8", "C#", "AWS API Gateway", "AWS Lambda", "DynamoDB", "Microservices", "CloudWatch"],
    isFeatured: true,
    summary: "A high-performance direct channel retailing wrapper built over existing airline NDC (New Distribution Capability) servers for global airline carriers.",
    problem: {
      statement: "Legacy airline reservation NDC servers were sluggish and lacked modern RESTful microservices for external travel agents to dynamically fetch flight offers, handle carts, and create orders."
    },
    solution: {
      description: "Contributed from inception to build an AWS serverless microservices wrapper using .NET Core 8 Lambda functions, API Gateway, and DynamoDB for low-latency offer and order aggregation."
    },
    keyContributions: [
      "Contributed to the MVP from inception, establishing the microservice foundation.",
      "Implemented critical microservices for Offers, Carts, Orders, Locations, and Carrier Configuration.",
      "Engineered low-latency AWS Lambda execution routines handling complex airline fare rules."
    ],
    technicalDecisions: [
      {
        decision: "AWS Serverless (.NET Core 8 Lambda + DynamoDB)",
        reason: "Auto-scaled seamlessly during intense flight shopping traffic bursts without paying for idle server instances."
      }
    ],
    integrations: ["IATA NDC Servers", "AWS API Gateway", "DynamoDB", "CloudWatch"]
  },
  {
    id: "product-catalogue-airline",
    title: "Airline Product Catalogue Modernization",
    company: "Accelya Solutions",
    role: "SDE 2",
    period: "Oct 2023 - Aug 2025",
    domain: "Airlines (Qantas, Aegean, Lufthansa)",
    techStack: [".NET Core 8", "C#", "AWS API Gateway", "AWS Lambda", "DynamoDB", "Microservices", "Next.js", "React.js"],
    isFeatured: false,
    summary: "A modern airline product catalogue replacing outdated legacy FLX formats to display seats, baggage options, and ancillary booking services.",
    problem: {
      statement: "Legacy FLX formats made it difficult for major international airlines to display dynamic ancillary products like premium seats and baggage bundles."
    },
    solution: {
      description: "Built the new Product Catalogue MVP from the ground up, contributing across both backend .NET Core microservices and Next.js / React.js frontends."
    },
    keyContributions: [
      "Played a key role in building the MVP from the ground up across backend and frontend.",
      "Developed high-performance ancillary catalogue services replacing outdated FLX formats.",
      "Supported multi-carrier catalogs for Qantas, Aegean, and Lufthansa."
    ],
    technicalDecisions: [
      {
        decision: "Next.js & React.js Frontend Integration",
        reason: "Provided modern server-rendered and responsive catalogue viewing for airline retailing operations."
      }
    ],
    integrations: ["AWS Lambda", "DynamoDB", "Airline Core Retailing Systems"]
  },
  {
    id: "falcon-design-system",
    title: "Falcon Design System (FDS)",
    company: "Accelya Solutions",
    role: "SDE 2",
    period: "Oct 2023 - Aug 2025",
    domain: "Internal Tools & Design Systems",
    techStack: ["React.js", "HTML", "CSS", "Next.js"],
    isFeatured: true,
    summary: "Standardized UI component library ensuring consistent design language and rapid frontend delivery across company products.",
    problem: {
      statement: "Fragmented UI development across multiple airline product teams caused duplicated development effort and inconsistent user experiences."
    },
    solution: {
      description: "Engineered a centralized, reusable React.js component library with strict design tokens, accessibility, and documentation."
    },
    keyContributions: [
      "Built reusable, modular React components across forms, data tables, modals, and navigation.",
      "Standardized UI components ensuring consistent design language across all products.",
      "Streamlined frontend engineering workflow and enhanced brand consistency."
    ],
    impactMetric: {
      value: "30%",
      label: "REDUCTION IN DEVELOPMENT TIME",
      highlight: true
    },
    technicalDecisions: [
      {
        decision: "Modular Component Architecture",
        reason: "Decoupled component logic from airline-specific styling, enabling 30% faster feature delivery across product lines."
      }
    ],
    integrations: ["Next.js", "React.js"]
  },
  {
    id: "who-representative-portal",
    title: "WHO Representative Portal",
    company: "E-Zest Solutions",
    role: "Software Engineer",
    period: "Feb 2022 - Oct 2023",
    domain: "World Health Organization (Healthcare)",
    techStack: [".NET Core 3.1", "C#", "Entity Framework", "Web API", "MS SQL Server", "Azure Key Vault"],
    isFeatured: true,
    summary: "A secure, role-based portal for WHO representatives providing documentation, user management, and automated notifications.",
    problem: {
      statement: "Global WHO representatives required secure, low-latency access to international health documentation, role-based workflows, and automated alerts."
    },
    solution: {
      description: "Engineered a .NET Core 3.1 Web API backend with Entity Framework Core, MS SQL Server, and Azure Key Vault for zero-trust security."
    },
    keyContributions: [
      "Developed a role-based portal for documentation and user management.",
      "Implemented notification pipelines for urgent health advisories.",
      "Optimized Entity Framework queries and LINQ expressions to eliminate database bottlenecks."
    ],
    impactMetric: {
      value: "25%",
      label: "REDUCTION IN RESPONSE LATENCY",
      highlight: true
    },
    technicalDecisions: [
      {
        decision: "EF Core & LINQ Query Optimization",
        reason: "Restructured unoptimized joins, added compiled queries, and tuned indexing on MS SQL Server to cut response latency by 25%."
      },
      {
        decision: "Azure Key Vault Integration",
        reason: "Protected confidential healthcare credentials and automated secrets rotation."
      }
    ],
    integrations: ["Azure Key Vault", "MS SQL Server", "SMTP Notifications"]
  },
  {
    id: "who-data-portal",
    title: "WHO Data Portal (Epidemiological Visualizer)",
    company: "E-Zest Solutions",
    role: "Software Engineer",
    period: "Feb 2022 - Oct 2023",
    domain: "World Health Organization (Healthcare)",
    techStack: [".NET Core Framework", "Web API", "D3.js", "C#"],
    isFeatured: false,
    summary: "An epidemiological data access portal for WHO representatives to analyze country-specific disease data organized by year.",
    problem: {
      statement: "Health representatives needed interactive chart visualizations to analyze disease statistics across international regions and languages."
    },
    solution: {
      description: "Developed .NET Core Web API services powering dynamic D3.js interactive chart visualizations with multi-language localization."
    },
    keyContributions: [
      "Built backend data services for accessing disease statistics organized by year and geography.",
      "Implemented dynamic interactive chart formats with D3.js.",
      "Integrated multi-language support for international health delegates."
    ],
    technicalDecisions: [
      {
        decision: "D3.js Data Visualization Layer",
        reason: "Enabled high-performance vector rendering of complex epidemiological time-series data."
      }
    ],
    integrations: ["D3.js", "Web API", "MS SQL Server"]
  },
  {
    id: "bajaj-application",
    title: "Bajaj Global Dealer Network Application",
    company: "Excellon Solutions",
    role: "Software Developer",
    period: "Sep 2018 - Dec 2019",
    domain: "Automotive (Bajaj Automobiles - Global)",
    techStack: [".NET Core", "C#", "Entity Framework", "Web API", "MS SQL Server"],
    isFeatured: false,
    summary: "A B2B client-server application for Bajaj's global dealer network across Motorbike, KTM (Pro-bike), 3-Wheeler, and Urbanite vehicle divisions.",
    problem: {
      statement: "Bajaj needed to automate vehicle sales, spare parts ordering, and service station processes across international dealer networks."
    },
    solution: {
      description: "Developed .NET Core and Entity Framework services deployed across Bajaj's global dealer ecosystem."
    },
    keyContributions: [
      "Designed and deployed B2B modules across Motorbike, Pro-bike (KTM), 3-Wheeler, and Urbanite divisions.",
      "Automated global sales, inventory replenishment, and service desk operations."
    ],
    technicalDecisions: [
      {
        decision: "Multi-Division Domain Segregation",
        reason: "Separated sales and service workflows tailored for different vehicle lines within a single unified architecture."
      }
    ],
    integrations: ["MS SQL Server", "Dealer ERP Systems"]
  }
];
