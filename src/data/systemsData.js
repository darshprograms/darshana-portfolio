export const systemsData = [
  {
    id: "ai-knowledge-engine",
    title: "Enterprise Multi-Tenant AI Knowledge Platform",
    tagline: "High-precision Hybrid RAG & Vector Retrieval Engine",
    status: "PRODUCTION_ACTIVE",
    category: "AI & Distributed Systems",
    metrics: {
      latency: "280ms p95",
      retrievalPrecision: "94.8%",
      tokenCostReduction: "42%",
      throughput: "1.4k req/sec"
    },
    summary: "A production-grade semantic search and question-answering architecture designed to process hundreds of thousands of multi-format enterprise documents with sub-second retrieval, hybrid dense-sparse vector scoring, and zero-hallucination guardrails.",
    problem: {
      context: "Enterprise users needed instantaneous, contextually accurate answers across vast heterogeneous document stores (PDFs, technical specs, policy docs, internal wikis) without hallucinations, privacy leakage across tenants, or multi-second LLM latency.",
      challenges: [
        "Standard dense embeddings failed on exact keyword searches (e.g. part numbers, acronyms, error codes).",
        "Large document contexts caused attention degradation ('lost in the middle') and bloated token bills.",
        "Strict multi-tenant security required document-level access filtering at vector search time.",
        "Stale document versions produced conflicting, obsolete answers."
      ]
    },
    nodes: [
      {
        id: "ingestion",
        label: "Document Ingestion & Parsing",
        sublabel: "Multi-format OCR / PDF stream",
        tech: "Python / Apache Tika / Unstructured",
        purpose: "Extracts clean unstructured text, tables, and document metadata from PDFs, DOCX, and markdown files asynchronously.",
        whyExists: "Raw enterprise documents contain nested tables, multi-column layouts, and images that corrupt simple raw string extraction.",
        bottleneck: "Large scanned PDFs requiring intensive OCR CPU compute.",
        scalingStrategy: "Decoupled via RabbitMQ worker queue pool with auto-scaling worker nodes based on queue backlog depth.",
        type: "source",
        position: { x: 10, y: 50 }
      },
      {
        id: "chunking",
        label: "Semantic Chunking & Metadata",
        sublabel: "Hierarchical 512-token overlap",
        tech: "LangChain / Tiktoken / Custom Tokenizer",
        purpose: "Splits continuous text into semantic units with structural header preservation, document lineage, and security ACL tags.",
        whyExists: "Fixed-size character chunking splits mid-sentence and destroys semantic coherence across logical sections.",
        bottleneck: "Token calculation overhead and context preservation at chunk boundaries.",
        scalingStrategy: "Sliding window with structural Markdown header hierarchy metadata injected into each chunk payload.",
        type: "processing",
        position: { x: 25, y: 50 }
      },
      {
        id: "embeddings",
        label: "Dual Embedding Engine",
        sublabel: "Dense (bge-large) + Sparse (BM25)",
        tech: "FastEmbed / BGE-Large-EN-v1.5 / BM25",
        purpose: "Generates 1024-dimension dense semantic vectors and sparse lexical keyword vectors simultaneously.",
        whyExists: "Dense embeddings capture conceptual meaning; sparse vectors guarantee exact matching of technical IDs and names.",
        bottleneck: "Embedding API rate limits and GPU batch vectorization latency.",
        scalingStrategy: "Local quantized ONNX runtime embeddings with asynchronous batching up to 256 chunks per batch.",
        type: "processing",
        position: { x: 40, y: 50 }
      },
      {
        id: "vectordb",
        label: "Vector Store & Index",
        sublabel: "HNSW index with payload filtering",
        tech: "Qdrant / PostgreSQL (pgvector)",
        purpose: "Provides sub-15ms cosine similarity and sparse keyword search with tenant-isolated payload filtering.",
        whyExists: "Relational database full-text search lacks semantic understanding; standalone vector DB provides HNSW graph indexing.",
        bottleneck: "Memory consumption scaling with millions of high-dimensional vectors.",
        scalingStrategy: "Scalar quantization (int8) saving 75% RAM with <1% recall degradation, sharded across read replicas.",
        type: "storage",
        position: { x: 55, y: 50 }
      },
      {
        id: "reranker",
        label: "Cross-Encoder Re-ranker",
        sublabel: "Top-50 -> Top-5 Compression",
        tech: "FlashRank / Cohere Re-rank / BGE-Reranker",
        purpose: "Scores retrieved candidates jointly against the user query to eliminate false positives before LLM context generation.",
        whyExists: "Bi-encoder vector search is fast but coarse; cross-encoders produce accurate relevance scoring.",
        bottleneck: "Inference compute cost per retrieved passage.",
        scalingStrategy: "Lightweight 2-stage filtering: vector top-30 filtered down to top-5 using quantized cross-encoder in <30ms.",
        type: "processing",
        position: { x: 70, y: 50 }
      },
      {
        id: "orchestrator",
        label: "LLM Orchestrator & Guardrails",
        sublabel: "Prompt synthesis & citation enforcement",
        tech: "Claude 3.5 / GPT-4o / Guardrails AI",
        purpose: "Synthesizes final answer constrained strictly to retrieved context, producing verbatim inline citations.",
        whyExists: "Prevents hallucinations by enforcing fact-grounding, refusal triggers, and output schema validation.",
        bottleneck: "Time to First Token (TTFT) and generation latency.",
        scalingStrategy: "Server-Sent Events (SSE) streaming with speculative response validation and semantic output caching.",
        type: "engine",
        position: { x: 88, y: 50 }
      }
    ],
    keyDecisions: [
      {
        title: "Why Hybrid Retrieval (Dense + Sparse) instead of Vector-Only?",
        rationale: "Pure vector similarity frequently failed on exact keywords like 'Error code 0x80070005' or product part numbers 'XZ-409'. Combining dense cosine distance with BM25 sparse lexical search via Reciprocal Rank Fusion (RRF) improved overall retrieval precision by 28% across domain-specific test sets."
      },
      {
        title: "Why Dynamic Cross-Encoder Re-ranking?",
        rationale: "LLM context size is expensive and introduces attention degradation ('lost in the middle'). By retrieving 30 candidates cheaply and re-ranking down to the top 5 most salient chunks, token ingestion costs dropped by 42% while improving answer accuracy from 78% to 94.8%."
      },
      {
        title: "Why Tenant-Isolated Payload Filtering at Vector Index Level?",
        rationale: "Post-filtering vector search results for permissions risks returning zero results if top matches belong to other tenants. Pre-filtering inside Qdrant's HNSW index guarantees valid results while maintaining strict tenant data segregation."
      }
    ],
    tradeoffs: [
      {
        dimension: "Retrieval Accuracy vs Query Latency",
        chosen: "Hybrid Dense+Sparse + Cross-Encoder (~280ms)",
        alternative: "Single Dense Bi-encoder search (~45ms)",
        reasoning: "In enterprise compliance and technical support, incorrect answers carry heavy liability. The additional 235ms latency penalty is negligible for human reading experience but critical for correctness."
      },
      {
        dimension: "Cost vs Context Size",
        chosen: "Top-5 Reranked Chunks (~2k tokens)",
        alternative: "Full Document Context Ingestion (~32k tokens)",
        reasoning: "Stuffing 32k tokens per query into the LLM increased API cost 8x and caused hallucinations when conflicting paragraphs existed in the same document."
      },
      {
        dimension: "Vector Storage: In-Memory vs Quantized Disk",
        chosen: "Scalar Quantized Int8 in Qdrant",
        alternative: "Float32 in RAM",
        reasoning: "Reduced infrastructure memory footprint by 72% allowing deployment on cost-effective instances with <0.8% drop in recall accuracy."
      }
    ],
    failureModes: [
      {
        failure: "Retrieval Confidence Below Threshold (<0.65 similarity)",
        mitigation: "System refuses to guess and triggers explicit fallback: 'I cannot verify this information within current documentation. Here are the closest related topics...'",
        status: "HANDLED"
      },
      {
        failure: "Conflicting or Outdated Document Versions",
        mitigation: "Metadata timestamp weighting where newer revisions receive a decay multiplier over superseded documentation.",
        status: "HANDLED"
      },
      {
        failure: "LLM Hallucination / Unsupported Assertion",
        mitigation: "Deterministic citation validation step: every claim must cite chunk paragraph ID; ungrounded assertions are stripped before client streaming.",
        status: "HANDLED"
      }
    ],
    results: [
      { label: "p95 Query Latency", value: "280ms", change: "-64%" },
      { label: "Answer Factuality Score", value: "94.8%", change: "+21%" },
      { label: "Monthly Token Expenditure", value: "-42%", change: "Optimized" },
      { label: "Concurrent Queries Handled", value: "1.4k/s", change: "Tested" }
    ]
  },
  {
    id: "airline-retailing-ndc",
    title: "High-Throughput NDC Airline Retailing & Offers Engine",
    tagline: "Microservices Architecture with Sub-120ms Latency for Major Carriers",
    status: "PRODUCTION_ACTIVE",
    category: "Cloud-Native & Distributed Systems",
    metrics: {
      latency: "118ms p99",
      availability: "99.99%",
      dailyRequests: "12M+",
      costOptimization: "35%"
    },
    summary: "An enterprise IATA NDC (New Distribution Capability) airline retailing wrapper and microservices platform built for global airlines (Qantas, Lufthansa, Aegean) handling millions of real-time flight offers, seat reservations, and dynamic pricing queries.",
    problem: {
      context: "Legacy airline reservation engines were sluggish, monolithic, and unable to support modern IATA NDC retailing channels. The system needed to deliver real-time seat availability, dynamic ancillary baggage pricing, and order creation under extreme query bursts.",
      challenges: [
        "Downstream airline mainframe NDC servers took >800ms to respond.",
        "Traffic spikes during fare promotions exceeded normal baseline by 30x.",
        "Complex domain models with strict transactional guarantees for ticketing."
      ]
    },
    nodes: [
      {
        id: "api-gw",
        label: "API Gateway & Edge Routing",
        sublabel: "Rate limiting & JWT authentication",
        tech: "AWS API Gateway / CloudFront",
        purpose: "Authenticates travel agency requests, enforces rate limits, and routes to appropriate airline microservices.",
        whyExists: "Protects internal microservices from DDoS and unauthenticated traffic.",
        bottleneck: "TLS termination and payload inspection at peak bursts.",
        scalingStrategy: "Distributed across AWS CloudFront edge locations with auto-scaled throttling.",
        type: "source",
        position: { x: 15, y: 50 }
      },
      {
        id: "offers-service",
        label: "Offers & Catalogue Microservice",
        sublabel: ".NET Core 8 High-Performance API",
        tech: "ASP.NET Core 8 / C# / Linux Containers",
        purpose: "Calculates flight itineraries, ancillary bundle options, and fare family rules.",
        whyExists: "Decouples pricing and offer aggregation from legacy reservation systems.",
        bottleneck: "High CPU serialization of large IATA XML/JSON payloads.",
        scalingStrategy: "Optimized System.Text.Json zero-allocation parsers running in AWS Lambda / ECS.",
        type: "processing",
        position: { x: 45, y: 50 }
      },
      {
        id: "redis-cache",
        label: "Distributed Multi-Level Cache",
        sublabel: "Pre-computed fare matrix (Redis)",
        tech: "Redis Enterprise / ElastiCache",
        purpose: "Serves 80% of read-heavy shopping requests without hitting slow legacy airline mainframes.",
        whyExists: "Flight schedules and static pricing rules change infrequently relative to search volume.",
        bottleneck: "Cache invalidation on sudden fare changes.",
        scalingStrategy: "Tiered TTLs with probabilistic early expiration (XFetch algorithm) to prevent cache stampedes.",
        type: "storage",
        position: { x: 75, y: 50 }
      }
    ],
    keyDecisions: [
      {
        title: "Why Asynchronous Serverless (.NET 8 AWS Lambda) for Offer Aggregation?",
        rationale: "Airline flight shopping is notoriously spiky (100x search-to-book ratio). Serverless architecture auto-scaled from 0 to 5,000 concurrent executions in seconds without paying for idle EC2 clusters."
      },
      {
        title: "Why Zero-Allocation Serialization in .NET 8?",
        rationale: "IATA NDC XML/JSON payloads frequently exceed 500KB per response. Replacing standard serializers with Utf8JsonReader and Memory<T> reduced GC pauses from 140ms to under 4ms."
      }
    ],
    tradeoffs: [
      {
        dimension: "Data Freshness vs Latency",
        chosen: "120-second cache with probabilistic invalidation",
        alternative: "Direct real-time query to airline core for every search",
        reasoning: "Legacy core was limited to 150 QPS. Caching allowed 12,000 QPS with fare re-validation only during checkout step."
      }
    ],
    failureModes: [
      {
        failure: "Legacy Mainframe Outage",
        mitigation: "Circuit breaker pattern (Polly) with graceful degradation to cached last-known good flight schedules and clear UI status.",
        status: "HANDLED"
      }
    ],
    results: [
      { label: "p99 Response Latency", value: "118ms", change: "-78%" },
      { label: "Peak Query Handling", value: "15,000 req/s", change: "Tested" },
      { label: "Infrastructure Cloud Cost", value: "-35%", change: "Optimized" }
    ]
  },
  {
    id: "field-service-dispatch",
    title: "Event-Driven Field Service & Invoicing Platform",
    tagline: "Distributed Microservices with RabbitMQ & CQRS",
    status: "PRODUCTION_ACTIVE",
    category: "Backend & Event Architecture",
    metrics: {
      invoicesProcessed: "$45M+/mo",
      eventLatency: "<15ms",
      uptime: "99.98%",
      concurrency: "50k users"
    },
    summary: "A mission-critical enterprise dispatching, scheduling, and billing platform built with .NET Core, RabbitMQ, and SQL Server serving thousands of service businesses nationwide.",
    problem: {
      context: "Large service dispatchers experienced locking and deadlocks when hundreds of technicians synced work orders, parts inventory, and dynamic route invoicing simultaneously at end-of-day.",
      challenges: [
        "Monolithic database contention during peak 5 PM billing settlement windows.",
        "Need for guaranteed at-least-once message delivery for invoicing transactions.",
        "Real-time GPS routing and dynamic crew rescheduling."
      ]
    },
    nodes: [
      {
        id: "event-bus",
        label: "RabbitMQ Message Broker",
        sublabel: "Topic exchanges & dead-letter queues",
        tech: "RabbitMQ / MassTransit / AMQP",
        purpose: "Buffers and routes asynchronous business events (e.g. JobCompleted, InvoiceGenerated, PaymentProcessed).",
        whyExists: "Decouples field mobile sync from heavy financial ledger transactions.",
        bottleneck: "Unacknowledged message queues during downstream outages.",
        scalingStrategy: "Clustered quorum queues with dead-letter exchange retries and exponential backoff.",
        type: "processing",
        position: { x: 30, y: 50 }
      },
      {
        id: "cqrs-engine",
        label: "CQRS Billing & Ledger Engine",
        sublabel: "Segregated Read/Write models",
        tech: ".NET Core / Dapper / Entity Framework Core",
        purpose: "Handles high-speed write commands while serving instantaneous customer balance lookups from optimized read replicas.",
        whyExists: "Eliminates database table locking between reporting dashboards and field transactions.",
        bottleneck: "Eventual consistency lag between command write and read replica sync.",
        scalingStrategy: "Read model projections optimized via SQL Server in-memory tables and Dapper micro-ORM.",
        type: "engine",
        position: { x: 70, y: 50 }
      }
    ],
    keyDecisions: [
      {
        title: "Why CQRS (Command Query Responsibility Segregation)?",
        rationale: "Separating write commands (scheduling & billing transactions) from high-volume read queries (dashboards and mobile apps) eliminated 99% of SQL Server deadlocks."
      },
      {
        title: "Why RabbitMQ with Outbox Pattern?",
        rationale: "Guaranteed transactional consistency between SQL database updates and distributed events without two-phase commits (2PC)."
      }
    ],
    tradeoffs: [
      {
        dimension: "Eventual Consistency vs Immediate Consistency",
        chosen: "Eventual Consistency (<100ms sync) for reports",
        alternative: "Distributed ACID transactions",
        reasoning: "Strict immediate consistency ground the database to a halt under 5,000 concurrent mobile synchronizations."
      }
    ],
    failureModes: [
      {
        failure: "Payment Gateway Timeout",
        mitigation: "Idempotent payment retry worker with transactional outbox state ensuring customers are never double-charged.",
        status: "HANDLED"
      }
    ],
    results: [
      { label: "End-of-day Sync Time", value: "3.2s", change: "-85%" },
      { label: "SQL Lock Contention", value: "0.01%", change: "Eliminated" },
      { label: "Monthly Transaction Volume", value: "$45M+", change: "Processed" }
    ]
  }
];
