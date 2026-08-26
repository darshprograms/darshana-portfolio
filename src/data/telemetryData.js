export const telemetryData = {
  systemStatus: {
    state: "ONLINE",
    version: "v2.4.0-prod",
    uptime: "99.99%",
    avgLatency: "24ms",
    activeNodes: 12,
    location: "Global Edge / Multi-Region"
  },
  quadrants: [
    {
      id: "currently-building",
      tag: "ACTIVE PIPELINE",
      title: "Agentic AI Orchestration & Evaluation",
      description: "Engineering multi-step autonomous agent workflows with deterministic tool calling, state graph checkpointing, and synthetic evaluation benchmarks.",
      status: "IN_PROGRESS",
      statusColor: "cyan",
      meta: ["LangGraph", "Semantic Cache", "DSPy", "Eval Frameworks"]
    },
    {
      id: "exploring",
      tag: "RESEARCH & LAB",
      title: "RAG · Distributed Consensus · LLMs",
      description: "Investigating hybrid sparse/dense vector scoring, speculative decoding, Raft consensus in edge microservices, and cross-model reasoning latency.",
      status: "EXPERIMENTAL",
      statusColor: "indigo",
      meta: ["Qdrant", "Speculative Sampling", "Raft", "BM25"]
    },
    {
      id: "engineering",
      tag: "CORE EXPERTISE",
      title: "Backend · Distributed Systems · APIs",
      description: "Architecting zero-allocation .NET 8 services, RabbitMQ event pipelines, low-latency AWS Lambda microservices, and high-concurrency SQL/NoSQL stores.",
      status: "PRODUCTION_READY",
      statusColor: "emerald",
      meta: [".NET Core 8", "C#", "AWS Serverless", "RabbitMQ", "PostgreSQL"]
    },
    {
      id: "ai-lab",
      tag: "EXPERIMENTS",
      title: "Self-Correction & Autonomous Agents",
      description: "Benchmarking reflection loops, structured hallucination guardrails, and tool-augmented generation across multi-domain knowledge retrieval.",
      status: "ITERATING",
      statusColor: "amber",
      meta: ["Guardrails AI", "Vector Reranking", "Tool Agents"]
    }
  ],
  liveLogs: [
    { id: 1, time: "19:38:12", source: "RAG_RETRIEVER", msg: "Hybrid RRF query executed across 4 shards (14ms)" },
    { id: 2, time: "19:38:10", source: "ORCHESTRATOR", msg: "Token stream generated with citation validation grounded [OK]" },
    { id: 3, time: "19:38:04", source: "EVENT_BUS", msg: "RabbitMQ ack received on invoice.dispatch.settled [Queue Depth: 0]" },
    { id: 4, time: "19:37:55", source: "API_GATEWAY", msg: "AWS Lambda cold-start avoided via provisioned concurrency" }
  ]
};
