export const architecturePatterns = [
  {
    id: "serverless-airline",
    title: "AWS Serverless NDC Retailing Architecture",
    description: "Cloud-native microservices wrapper deployed for Qantas, Lufthansa, and Aegean Airlines.",
    nodes: [
      {
        id: "client-req",
        label: "Client / Travel Agency",
        sublabel: "HTTPS / REST Request",
        tech: "HTTPS / JSON",
        purpose: "Initiates shopping requests for flight itineraries, seat availability, and baggage ancillaries.",
        whereUsed: "Accelya Solutions (FLX Direct & Product Catalogue)",
        relevantProject: "FLX - Direct Project & Product Catalogue",
        type: "source"
      },
      {
        id: "aws-apigw",
        label: "AWS API Gateway",
        sublabel: "Edge Routing & Auth",
        tech: "AWS API Gateway",
        purpose: "Handles TLS termination, JWT authentication, rate limiting, and routes requests to serverless Lambda endpoints.",
        whereUsed: "Accelya Solutions & Publicis Sapient",
        relevantProject: "FLX Direct Project & Employee Portal",
        type: "gateway"
      },
      {
        id: "lambda-microservice",
        label: ".NET Core 8 Lambda",
        sublabel: "Offers & Orders Microservice",
        tech: "AWS Lambda / C# / .NET Core 8",
        purpose: "Executes business logic for offers calculation, shopping carts, orders, and ancillary service aggregation.",
        whereUsed: "Accelya Solutions",
        relevantProject: "FLX Direct Project (Qantas, Aegean)",
        type: "compute"
      },
      {
        id: "dynamodb-store",
        label: "Amazon DynamoDB",
        sublabel: "Low-Latency NoSQL Store",
        tech: "Amazon DynamoDB",
        purpose: "Stores active shopping sessions, flight cart states, and airline location configurations with single-digit millisecond latency.",
        whereUsed: "Accelya Solutions & Publicis Sapient",
        relevantProject: "FLX Direct & Product Catalogue",
        type: "storage"
      },
      {
        id: "cloudwatch-telemetry",
        label: "AWS CloudWatch",
        sublabel: "Monitoring & Observability",
        tech: "AWS CloudWatch / Logs / Alarms",
        purpose: "Monitors Lambda execution durations, error rates, and API Gateway traffic metrics.",
        whereUsed: "Accelya Solutions & Publicis Sapient",
        relevantProject: "FLX Direct Project & Employee Portal",
        type: "monitoring"
      }
    ]
  },
  {
    id: "event-driven-field-service",
    title: "Event-Driven Messaging & AI Automation Architecture",
    description: "Asynchronous job lifecycle, invoicing, and natural language automation pipeline at Xplor Technologies.",
    nodes: [
      {
        id: "field-mobile",
        label: "Field App / Technician",
        sublabel: "Job Completed Event",
        tech: "Web / Mobile Client",
        purpose: "Technician submits job completion and hours worked from the field.",
        whereUsed: "Xplor Technologies (Service Autopilot)",
        relevantProject: "Service Autopilot",
        type: "source"
      },
      {
        id: "rabbitmq-broker",
        label: "RabbitMQ Message Broker",
        sublabel: "Decoupled Event Bus",
        tech: "RabbitMQ / MassTransit",
        purpose: "Buffers asynchronous events (JobCompletedEvent, EstimateApprovedEvent) to guarantee zero message loss during traffic bursts.",
        whereUsed: "Xplor Technologies",
        relevantProject: "Service Autopilot",
        type: "messaging"
      },
      {
        id: "microservice-consumer",
        label: "Invoicing & Billing Microservice",
        sublabel: ".NET / C# Consumer",
        tech: "C# / .NET 4.5 / Microservices",
        purpose: "Consumes job completion events, generates invoices, and triggers payment processing via integrated payment gateways.",
        whereUsed: "Xplor Technologies",
        relevantProject: "Service Autopilot",
        type: "compute"
      },
      {
        id: "ai-agent-engine",
        label: "AI Automation Agent (Pliable)",
        sublabel: "Natural Language Intent Parser",
        tech: "Pliable AI / AI Integration",
        purpose: "Interprets natural-language automation requests and analyzes customer query reports without manual trigger setup.",
        whereUsed: "Xplor Technologies",
        relevantProject: "Service Autopilot (AI Integration)",
        type: "ai"
      },
      {
        id: "twilio-sms-sql",
        label: "Twilio SMS & SQL Server",
        sublabel: "Notification & Persistence",
        tech: "Twilio API / MS SQL Server",
        purpose: "Dispatches automated customer SMS alerts and persists invoice & ledger transactions.",
        whereUsed: "Xplor Technologies",
        relevantProject: "Service Autopilot",
        type: "storage"
      }
    ]
  },
  {
    id: "optimized-ef-healthcare",
    title: "High-Performance Role-Based Web API Architecture",
    description: "Optimized Entity Framework Core & MS SQL Server data pipeline at E-Zest for the World Health Organization.",
    nodes: [
      {
        id: "who-client",
        label: "WHO Representative",
        sublabel: "Role-Based Web Client",
        tech: "Browser / D3.js",
        purpose: "Delegates request country-specific epidemiological documentation and annual disease trends.",
        whereUsed: "E-Zest Solutions (WHO Portals)",
        relevantProject: "WHO Representative Portal & Data Portal",
        type: "source"
      },
      {
        id: "web-api-backend",
        label: "ASP.NET Core Web API",
        sublabel: ".NET Core 3.1",
        tech: ".NET Core 3.1 / C#",
        purpose: "Enforces role-based access control, authenticates delegates, and processes epidemiological reporting queries.",
        whereUsed: "E-Zest Solutions",
        relevantProject: "WHO Representative Portal",
        type: "compute"
      },
      {
        id: "ef-linq-layer",
        label: "Optimized EF & LINQ Engine",
        sublabel: "25% Latency Reduction",
        tech: "Entity Framework Core / LINQ",
        purpose: "Executes compiled queries and optimized SQL expressions that eliminated 25% of query latency overhead.",
        whereUsed: "E-Zest Solutions",
        relevantProject: "WHO Representative Portal",
        type: "optimization"
      },
      {
        id: "azure-keyvault",
        label: "Azure Key Vault",
        sublabel: "Zero-Trust Security",
        tech: "Azure Key Vault",
        purpose: "Manages confidential connection strings, encryption keys, and secrets with automated rotation.",
        whereUsed: "E-Zest Solutions",
        relevantProject: "WHO Representative Portal",
        type: "security"
      },
      {
        id: "sql-server-db",
        label: "MS SQL Server",
        sublabel: "Relational Healthcare Store",
        tech: "MS SQL Server",
        purpose: "Stores role-based user management records, audit logs, and annual disease statistics.",
        whereUsed: "E-Zest Solutions",
        relevantProject: "WHO Representative Portal",
        type: "storage"
      }
    ]
  }
];
