export const sampleQueries = [
  "What is the most complex system she has built?",
  "Tell me about her AI and RAG experience.",
  "Show me backend and distributed systems projects.",
  "How does she approach system design & trade-offs?",
  "What technologies does she work with?"
];

export const assistantKnowledgeBase = [
  {
    triggers: ["complex", "hardest", "most complex", "scale", "biggest project", "airline"],
    response: `**The most complex system Darshana has built is the High-Throughput IATA NDC Airline Retailing & Offers Engine** at Accelya (for major carriers including *Qantas* and *Lufthansa*), along with the **Enterprise Multi-Tenant AI Knowledge Platform**.

### Key Architectural Highlights:
- **Throughput & Latency**: Handled **12M+ daily requests** with a **p99 latency under 118ms** across global distribution channels.
- **Serverless & Microservices**: Built with **ASP.NET Core 8**, **AWS Lambda**, and **DynamoDB**, auto-scaling dynamically from 0 to 5,000 concurrent executions.
- **Zero-Allocation Optimization**: Utilized \`ReadOnlySpan<T>\` and custom \`System.Text.Json\` serializers to eliminate GC latency on 500KB+ XML/JSON payload exchanges.
- **Resilience**: Implemented Polly circuit breakers, tiered Redis caching with probabilistic expiration (XFetch), and automated fallback modes.

*Would you like to inspect the interactive architecture diagram in the [Systems section](#systems)?*`
  },
  {
    triggers: ["ai", "rag", "vector", "llm", "agent", "embedding", "artificial intelligence"],
    response: `**Darshana's AI engineering focuses on production-grade RAG, vector search pipelines, and agentic workflows:**

### Core AI Competencies:
1. **Hybrid RAG Systems**: Combines dense semantic embeddings (*BGE-large*) with sparse lexical vectors (*BM25*) using **Reciprocal Rank Fusion (RRF)** in **Qdrant** to prevent missing exact alphanumeric part codes or error numbers.
2. **Cross-Encoder Re-ranking**: Integrates FlashRank/BGE rerankers to compress 30 retrieved candidates into the top 5 most salient passages, cutting token expenditure by **42%** and boosting factuality to **94.8%**.
3. **Deterministic Guardrails**: Implements sentence-level NLI entailment checking and strict citation attribution to eliminate hallucinations in regulated contexts.
4. **Agentic Workflows**: Builds state-graph agents (LangGraph) with deterministic tool execution and evaluation checkpointing.

*Check out the live scientific experiment records in the [AI Lab section](#ailab).*`
  },
  {
    triggers: ["backend", "distributed", "c#", ".net", "api", "database", "rabbitmq", "sql"],
    response: `**Darshana brings 5+ years of enterprise backend engineering experience** specializing in high-performance distributed systems:

### Backend Stack & Patterns:
- **Languages & Frameworks**: C#, .NET Core 8, ASP.NET Core Web APIs, Minimal APIs.
- **Distributed Messaging**: RabbitMQ, MassTransit, Event-Driven Architecture, Outbox Pattern.
- **Data Layers**: SQL Server, PostgreSQL, Dapper (Micro-ORM), Entity Framework Core, DynamoDB.
- **Cloud & DevOps**: AWS (Lambda, API Gateway, DynamoDB, S3, CloudWatch), Azure Key Vault, Docker, CI/CD.
- **Architecture**: CQRS (Command Query Responsibility Segregation), Microservices, Zero-Allocation Memory Optimization, Multi-Tier Caching.

*See the breakdown in the [Systems section](#systems) and [Experience section](#experience).*`
  },
  {
    triggers: ["system design", "trade-offs", "approach", "think", "architecture", "scalability"],
    response: `**Darshana approaches system design through rigorous first-principles engineering and explicit trade-off analysis:**

### Core Design Principles:
1. **Identify the Core Bottleneck First**: Is the system CPU-bound (serialization), I/O-bound (network/database), or memory-bound (GC pauses)?
2. **Explicit Trade-Offs**: Never claim a solution has 'no downsides'. For instance:
   - *Accuracy vs Latency*: Hybrid dense+sparse RAG adds ~235ms but guarantees exact keyword recall.
   - *Eventual vs Strong Consistency*: CQRS with asynchronous RabbitMQ projections chosen for field billing to eliminate database lockups.
3. **Design for Graceful Degradation**: Always design circuit breakers and fallback responses for third-party or legacy core outages.

*Read full architectural analyses in the [Thinking section](#thinking).*`
  },
  {
    triggers: ["technologies", "tech stack", "skills", "tools", "stack"],
    response: `**Darshana's Core Technology Matrix:**

- **Backend**: .NET Core 8, C#, ASP.NET Core, REST/gRPC APIs, SQL Server, PostgreSQL, Entity Framework, Dapper.
- **AI & Retrieval**: LLMs, Hybrid RAG (Dense + BM25), Qdrant Vector DB, Cross-Encoder Re-ranking, LangGraph, Guardrails AI.
- **Cloud & Distributed**: AWS (Lambda, API Gateway, DynamoDB), Azure, RabbitMQ, Redis, Microservices, CQRS.
- **Frontend**: React.js, TypeScript, Next.js, Design Systems, Tailwind CSS.

*Click on any technology in the [Tech Constellation](#tech-stack) to highlight where it was used.*`
  }
];

export const getAssistantResponse = async (query) => {
  // Simulate natural AI thinking latency (400-700ms)
  await new Promise(resolve => setTimeout(resolve, 550));

  const lower = query.toLowerCase();
  for (const item of assistantKnowledgeBase) {
    if (item.triggers.some(t => lower.includes(t))) {
      return item.response;
    }
  }

  return `I analyzed your query: **"${query}"**.

Here is what you should know about Darshana's engineering background:
- **Core Focus**: High-performance backend systems (.NET / C# / AWS), distributed event architectures (RabbitMQ / CQRS), and AI-native systems (Hybrid RAG, Qdrant vector indexing, Agentic workflows).
- **Track Record**: 5+ years building mission-critical platforms handling millions of daily requests for global airlines (*Qantas*, *Lufthansa*), enterprise field services (*Xplor*), and international healthcare (*WHO*).

*Feel free to select one of the suggested prompts or explore the [Systems](#systems), [AI Lab](#ailab), or [Thinking](#thinking) sections directly.*`;
};
