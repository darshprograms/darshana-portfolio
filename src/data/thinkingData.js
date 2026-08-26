export const thinkingData = [
  {
    id: "think-01",
    title: "Designing High-Concurrency Distributed Systems for 10M+ Users",
    category: "System Design & Scalability",
    summary: "Architectural blueprint for transitioning from monolith to resilient event-driven microservices under extreme traffic surges.",
    requirements: [
      "100,000 read QPS / 10,000 write QPS peak capacity.",
      "p99 latency < 150ms globally.",
      "Zero data loss on transactional state changes (financial/ticketing/invoicing)."
    ],
    constraints: [
      "Legacy core databases with connection limits.",
      "Geographically dispersed user base.",
      "Cost efficiency during non-peak hours."
    ],
    architectureSteps: [
      "Edge Layer: Geo-DNS routing + CloudFront CDN + API Gateway with token bucket rate limiting.",
      "Stateless Compute: Containerized .NET / Node microservices with auto-scaling groups based on CPU & queue depth.",
      "Caching Tier: Multi-layer caching (Local L1 memory cache + Distributed L2 Redis Cluster with probabilistic TTL).",
      "Asynchronous Buffer: RabbitMQ / Kafka event streams for non-blocking write reconciliation.",
      "Data Store: Partitioned SQL databases with Read Replicas + DynamoDB for high-throughput session/state."
    ],
    bottlenecks: [
      "Database connection pool exhaustion on sudden traffic spikes.",
      "Cache stampede / thundering herd when popular keys expire.",
      "Cross-region data replication lag."
    ],
    tradeoffs: [
      "Eventual consistency chosen for read replicas to protect write throughput.",
      "Pre-computed cache matrices increase memory costs by 20% to save 80% on compute."
    ],
    scalingStrategy: "Horizontal partitioning, database read/write splitting, and circuit breakers (Polly) with graceful degradation to last-known good states."
  },
  {
    id: "think-02",
    title: "RAG vs. Fine-Tuning: Architectural Selection Framework",
    category: "AI Architecture & Strategy",
    summary: "How to evaluate whether an enterprise problem requires Retrieval-Augmented Generation, Fine-Tuning, or Hybrid Orchestration.",
    requirements: [
      "Dynamic data freshness (documents changing daily).",
      "Strict data privacy, access control (ACLs), and auditability.",
      "Verbatim source attribution for compliance."
    ],
    constraints: [
      "Training budget limits and lack of labeled synthetic datasets.",
      "Low tolerance for hallucinations in regulatory answers."
    ],
    architectureSteps: [
      "Use RAG when: Facts change frequently, source documents must be cited, data permissions vary per user, or knowledge exceeds model training cutoff.",
      "Use Fine-Tuning when: Teaching specialized output styles, domain dialects, specific JSON schemas, or compact edge model distillation.",
      "Use Hybrid when: Fine-tuned compact bi-encoder for custom domain embeddings combined with a RAG pipeline and frontier reasoning model."
    ],
    bottlenecks: [
      "RAG chunking boundaries splitting vital semantic context.",
      "Embedding model blind spots on numerical / code tokens."
    ],
    tradeoffs: [
      "RAG adds ~150ms retrieval latency overhead but provides 100% auditable citation lineage.",
      "Fine-tuning bakes knowledge into weights where it cannot be dynamically permissioned or deleted."
    ],
    scalingStrategy: "Hierarchical chunking, hybrid dense+sparse vector scoring, and quantized cross-encoder re-ranking."
  },
  {
    id: "think-03",
    title: "Zero-Allocation Backend Optimization in .NET & C#",
    category: "Performance & Low-Latency",
    summary: "Engineering sub-millisecond execution pipelines by eliminating GC pressure and memory copies.",
    requirements: [
      "Sustain 25,000 RPS on standard compute instances.",
      "Keep Garbage Collector Gen-2 collections to zero during steady state.",
      "p99 payload serialization under 2ms."
    ],
    constraints: [
      "High volume of complex nested XML/JSON payload exchanges."
    ],
    architectureSteps: [
      "Replace string splits and allocations with `ReadOnlySpan<T>` and `Memory<T>`.",
      "Utilize `ArrayPool<T>` for temporary buffer management across HTTP pipeline handlers.",
      "Leverage source-generated `System.Text.Json` parsers with zero reflection runtime overhead.",
      "Implement struct-based value tasks (`ValueTask<T>`) for asynchronous methods completing synchronously."
    ],
    bottlenecks: [
      "LOH (Large Object Heap) fragmentation when payloads exceed 85,000 bytes.",
      "Boxing/unboxing overhead in logging formatters."
    ],
    tradeoffs: [
      "Span-based code requires meticulous safety and lifetime management compared to simple LINQ queries."
    ],
    scalingStrategy: "Profile with BenchmarkDotNet and memory profilers; eliminate memory churn before throwing more CPU cores at the problem."
  }
];
