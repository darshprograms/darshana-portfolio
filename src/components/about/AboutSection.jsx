import React from 'react';
import { User, Cpu, BookOpen, Terminal, Sparkles, Target, ArrowRight, Mail } from 'lucide-react';

const AboutSection = ({ onOpenAskAI }) => {
  return (
    <section id="about" className="section-padding" style={{ background: '#07090f' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div className="section-tag">ENGINEER PROFILE // ABOUT</div>
          <h2 className="section-heading">
            Engineering Background & Core Focus
          </h2>
          <p className="section-desc">
            A concise summary of my software engineering background, active learning directions, and the distributed problems I love solving.
          </p>
        </div>

        <div className="grid-2" style={{ gap: '1.5rem', marginBottom: '2rem' }}>
          {/* Left Column: Who I am & What I Build */}
          <div className="eng-card" style={{ padding: '1.75rem', background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <div className="section-tag" style={{ fontSize: '0.7rem', marginBottom: '0.35rem' }}>WHO I AM</div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                I am a systems and backend software engineer with 5+ years of enterprise experience building high-throughput microservices, asynchronous event pipelines, and cloud-native architectures in .NET Core, C#, AWS, and modern TypeScript/React.
              </p>
            </div>

            <div>
              <div className="section-tag" style={{ fontSize: '0.7rem', marginBottom: '0.35rem' }}>WHAT I BUILD</div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                I engineer resilient distributed backends, low-latency API wrappers over legacy mainframes, high-volume event brokers (RabbitMQ/CQRS), and AI-native retrieval pipelines (Hybrid RAG, Qdrant vector indexing, and deterministic guardrail evaluation).
              </p>
            </div>
          </div>

          {/* Right Column: What I Am Learning & Problems that Interest Me */}
          <div className="eng-card" style={{ padding: '1.75rem', background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <div className="section-tag" style={{ fontSize: '0.7rem', color: 'var(--accent-cyan-light)', marginBottom: '0.35rem' }}>WHAT I AM CURRENTLY LEARNING</div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Deep-diving into state-graph agent checkpointing (LangGraph), multi-agent consensus protocols, speculative decoding for sub-100ms LLM response streaming, and custom ONNX embedding runtime optimization.
              </p>
            </div>

            <div>
              <div className="section-tag" style={{ fontSize: '0.7rem', color: '#34d399', marginBottom: '0.35rem' }}>PROBLEMS THAT INTEREST ME</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem', fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                  <span style={{ color: 'var(--accent-cyan)' }}>›</span>
                  <span>Eliminating semantic search hallucinations in strict compliance & regulatory domains.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem', fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                  <span style={{ color: 'var(--accent-cyan)' }}>›</span>
                  <span>High-concurrency distributed caching with zero cache stampede during traffic spikes.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem', fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                  <span style={{ color: 'var(--accent-cyan)' }}>›</span>
                  <span>Zero-allocation memory serialization in high-throughput backend APIs.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Dialogue Prompt CTA */}
        <div className="eng-card eng-corner-accents" style={{ padding: '1.5rem 2rem', background: 'var(--bg-tertiary)', border: '1px solid var(--border-default)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.25rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
              <Terminal size={15} style={{ color: 'var(--accent-cyan)' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                TECHNICAL DISCUSSIONS & INTERVIEWS
              </span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
              Interested in discussing system architecture, trade-offs, or exploring technical roles?
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button
              onClick={onOpenAskAI}
              className="eng-btn eng-btn-primary"
            >
              <Sparkles size={15} />
              <span>ASK MY PORTFOLIO</span>
            </button>
            <a
              href="mailto:contact@darshana.dev"
              className="eng-btn eng-btn-secondary"
            >
              <Mail size={15} />
              <span>GET IN TOUCH</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
