export const aiLabData = {
  professionalAI: [
    {
      id: "prof-01",
      title: "Natural Language Automation Agent",
      company: "Xplor Technologies (Service Autopilot)",
      role: "Senior Software Engineer",
      status: "PRODUCTION_DEPLOYED",
      scope: "PROFESSIONAL_EXPERIENCE",
      description: "Engineered an AI agent on the Service Autopilot automation page that replaces complex manual trigger-and-condition dropdown rules with a natural-language prompt interface.",
      architecture: "Natural Language Prompt → Intent & Parameter Parser → Deterministic Workflow Schema → Microservice Automation Pipeline",
      technologies: ["AI Agent Integration", "C#", ".NET", "RabbitMQ", "SQL Server"],
      impact: "Allowed field service business owners to configure end-to-end multi-step automations (e.g. 'When job completed → invoice → SMS notification') via simple conversational commands."
    },
    {
      id: "prof-02",
      title: "Pliable AI Customer Report & Query Analysis",
      company: "Xplor Technologies (Service Autopilot)",
      role: "Senior Software Engineer",
      status: "PRODUCTION_DEPLOYED",
      scope: "PROFESSIONAL_EXPERIENCE",
      description: "Integrated Pliable AI for automated customer report analysis and intelligent handling of customer service queries across field business operations.",
      architecture: "Customer Query / Operational Report → Pliable AI Analysis Layer → Structured Insights & Action Trigger",
      technologies: ["Pliable AI Integration", "REST APIs", "C#", "Microservices"],
      impact: "Streamlined operational customer reporting and reduced manual triage effort for field dispatchers."
    }
  ],
  personalLabExperiments: [
    {
      id: "lab-01",
      title: "Hybrid RAG Pipeline & Vector Retrieval",
      scope: "PERSONAL_EXPERIMENTATION",
      status: "ACTIVE_LAB",
      objective: "Build a high-precision document question-answering pipeline combining semantic vector search with keyword filtering.",
      technologies: ["Python", "FastAPI", "Qdrant Vector DB", "Embeddings", "RAG"],
      architecture: "Document Stream → Chunking & Embedding → Qdrant Vector Index → Top-K Dense Retrieval → LLM Context Augmentation",
      findings: "Dense embeddings excel at conceptual semantic queries while requiring lexical filters for strict technical codes."
    },
    {
      id: "lab-02",
      title: "Conversational AI & Chatbot Engine",
      scope: "PERSONAL_EXPERIMENTATION",
      status: "ACTIVE_LAB",
      objective: "Develop a low-latency conversational backend with streaming token responses and session memory.",
      technologies: ["Python", "FastAPI", "Conversational AI", "Prompt Engineering"],
      architecture: "Client Webhook → FastAPI Asynchronous Router → Context Window Manager → Streaming LLM Response",
      findings: "Asynchronous generator streams deliver instantaneous perceived latency compared to batch JSON responses."
    },
    {
      id: "lab-03",
      title: "Agentic Tool-Calling Workflows",
      scope: "PERSONAL_EXPERIMENTATION",
      status: "ACTIVE_LAB",
      objective: "Explore multi-step agent execution loops with deterministic tool validation and structured output schemas.",
      technologies: ["Agentic AI", "Python", "Tool Use", "Schema Validation"],
      architecture: "User Goal → Planning Engine → Tool Calling (APIs/Databases) → Result Validation → Final Output",
      findings: "Constraining agent outputs to strict JSON schemas drastically reduces drift and failure modes."
    }
  ]
};
