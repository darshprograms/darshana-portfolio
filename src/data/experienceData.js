export const experienceData = [
  {
    role: "Senior Software Engineer",
    company: "Xplor Technologies",
    period: "Apr 2026 - Present",
    domain: ".NET Core 8 · C# · RabbitMQ · Microservices · SQL Server · React",
    problemsSolved: "High transaction concurrency bottlenecks during end-of-day mobile invoicing sync across field businesses.",
    systemsBuilt: [
      "Event-driven microservices architecture for field technician routing, client management, and automated invoicing.",
      "Asynchronous message processing pipelines using RabbitMQ and MassTransit for financial ledger settlement.",
      "High-throughput RESTful backend APIs integrated with React frontends."
    ],
    impact: [
      "Reduced invoice batch processing sync time by 85% across 50,000+ active field users.",
      "Eliminated 99% of database lock contention through CQRS segregation.",
      "Streamlined recurring payment workflows handling $45M+ in monthly volume."
    ],
    technicalDecisions: [
      "Adopted RabbitMQ topic exchanges with transactional outbox pattern to guarantee zero message loss during network drops.",
      "Replaced heavy ORM tracking queries with optimized Dapper micro-ORM for read-heavy operations."
    ]
  },
  {
    role: "Senior Associate Technology L1",
    company: "Publicis Sapient",
    period: "Aug 2025 - Mar 2026",
    domain: ".NET Core 8 · C# · SQL Server · Entity Framework · Security",
    problemsSolved: "Secure role-based patient records management, appointment scheduling conflicts, and regulatory audit compliance for clinical systems.",
    systemsBuilt: [
      "Healthcare patient management and dynamic appointment booking engine.",
      "Granular role-based access control (RBAC) and audit-logging layer for healthcare data.",
      "Real-time operational clinic reporting dashboards."
    ],
    impact: [
      "Delivered zero-downtime booking platform serving hundreds of clinical providers.",
      "Optimized complex relational schemas to achieve sub-100ms report generation."
    ],
    technicalDecisions: [
      "Implemented strict database indexing strategies and EF Core compiled queries to cut p95 search latency by 40%."
    ]
  },
  {
    role: "SDE 2",
    company: "Accelya Solutions Pvt. Ltd",
    period: "Oct 2023 - Aug 2025",
    domain: "AWS (Lambda, API Gateway, DynamoDB) · .NET Core 8 · Microservices · Next.js",
    problemsSolved: "Integrating modern IATA NDC retailing channels over sluggish legacy airline reservation mainframes for global carriers (Qantas, Lufthansa, Aegean).",
    systemsBuilt: [
      "Direct-channel airline retailing wrapper and microservices platform for offers, orders, and ancillary seat/baggage pricing.",
      "High-performance Product Catalogue MVP replacing legacy FLX formats for major international airlines.",
      "Falcon Design System (FDS) reusable React component library."
    ],
    impact: [
      "Achieved sub-120ms p99 response times for airline flight search across millions of daily requests.",
      "Reduced frontend feature development time by 30% through standardized Falcon UI component library.",
      "Lowered cloud compute costs by 35% using serverless auto-scaling."
    ],
    technicalDecisions: [
      "Engineered zero-allocation JSON parsers in .NET Core to eliminate Garbage Collection pauses on 500KB+ IATA flight response payloads.",
      "Implemented multi-tier caching with probabilistic cache expiration to avoid cache stampedes during fare sales."
    ]
  },
  {
    role: "Software Engineer",
    company: "E-Zest Solutions Pvt. Ltd",
    period: "Feb 2022 - Oct 2023",
    domain: ".NET Core · Azure Key Vault · MS SQL Server · D3.js · C#",
    problemsSolved: "Consolidating and visualizing international epidemiological health data across multi-language regional agencies.",
    systemsBuilt: [
      "WHO Representative Portal for role-based international health documentation.",
      "WHO Data Portal featuring dynamic interactive charts (D3.js) and multi-language support."
    ],
    impact: [
      "Achieved 25% reduction in response latency by optimizing Entity Framework Core query plans and caching.",
      "Delivered mission-critical data access portal utilized by international health officials."
    ],
    technicalDecisions: [
      "Integrated Azure Key Vault for zero-trust credential security and automated secret rotation."
    ]
  }
];
