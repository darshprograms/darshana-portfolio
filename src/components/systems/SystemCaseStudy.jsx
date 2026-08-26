import React from 'react';
import { Layers, ShieldAlert, CheckCircle2, TrendingUp, Cpu, Server, Activity, ArrowUpRight } from 'lucide-react';
import ArchitectureDiagram from './ArchitectureDiagram';

const SystemCaseStudy = ({ system }) => {
  if (!system) return null;

  return (
    <div className="eng-card" style={{ padding: '2rem', background: '#090c13', border: '1px solid var(--border-default)', marginBottom: '2.5rem' }}>
      {/* Case Study Header */}
      <div style={{ marginBottom: '2rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '0.75rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <span className="tech-badge tech-badge-cyan">{system.category}</span>
              <span className="tech-badge tech-badge-emerald">
                <span className="status-dot status-dot-emerald" />
                <span>{system.status}</span>
              </span>
            </div>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
              {system.title}
            </h3>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent-cyan-light)' }}>
              {system.tagline}
            </p>
          </div>

          {/* Quick Metrics Strip */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {Object.entries(system.metrics).map(([key, val]) => (
              <div 
                key={key} 
                style={{ 
                  background: 'var(--bg-tertiary)', 
                  border: '1px solid var(--border-subtle)', 
                  padding: '0.5rem 0.85rem', 
                  borderRadius: '6px',
                  textAlign: 'center'
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-tertiary)', textTransform: 'uppercase' }}>
                  {key}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {val}
                </div>
              </div>
            ))}
          </div>
        </div>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '900px' }}>
          {system.summary}
        </p>
      </div>

      {/* Problem & Context */}
      <div style={{ marginBottom: '2rem' }}>
        <div className="section-tag">PROBLEM & TECHNICAL CONSTRAINTS</div>
        <div style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-subtle)', borderRadius: '8px', padding: '1.25rem', marginBottom: '1rem' }}>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '0.75rem', lineHeight: 1.6 }}>
            {system.problem.context}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            {system.problem.challenges.map((challenge, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                <span style={{ color: 'var(--accent-cyan)' }}>›</span>
                <span>{challenge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Architecture Visualizer */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div className="section-tag">SYSTEM ARCHITECTURE // INTERACTIVE</div>
        <ArchitectureDiagram nodes={system.nodes} systemTitle={system.title} />
      </div>

      {/* Key Architectural Decisions */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div className="section-tag">KEY ENGINEERING DECISIONS</div>
        <div className="grid-3" style={{ gap: '1rem' }}>
          {system.keyDecisions.map((decision, idx) => (
            <div 
              key={idx} 
              style={{ 
                background: 'var(--bg-tertiary)', 
                border: '1px solid var(--border-subtle)', 
                borderRadius: '8px', 
                padding: '1.1rem',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-cyan)' }}>0{idx + 1}.</span>
                <h4 style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.3 }}>
                  {decision.title}
                </h4>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                {decision.rationale}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Engineering Trade-offs */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div className="section-tag">ENGINEERING TRADE-OFFS & CONSTRAINTS</div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>
            <thead>
              <tr style={{ background: 'var(--bg-tertiary)', borderBottom: '1px solid var(--border-default)', textAlign: 'left' }}>
                <th style={{ padding: '0.75rem 1rem', color: 'var(--text-tertiary)' }}>DIMENSION</th>
                <th style={{ padding: '0.75rem 1rem', color: 'var(--accent-cyan-light)' }}>CHOSEN ARCHITECTURE</th>
                <th style={{ padding: '0.75rem 1rem', color: 'var(--text-tertiary)' }}>DISCARDED ALTERNATIVE</th>
                <th style={{ padding: '0.75rem 1rem', color: 'var(--text-secondary)' }}>TECHNICAL RATIONALE</th>
              </tr>
            </thead>
            <tbody>
              {system.tradeoffs.map((trade, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid var(--border-subtle)', background: idx % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)' }}>
                  <td style={{ padding: '0.85rem 1rem', color: 'var(--text-primary)', fontWeight: 600 }}>{trade.dimension}</td>
                  <td style={{ padding: '0.85rem 1rem', color: '#34d399' }}>{trade.chosen}</td>
                  <td style={{ padding: '0.85rem 1rem', color: 'var(--text-muted)' }}>{trade.alternative}</td>
                  <td style={{ padding: '0.85rem 1rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-sans)', fontSize: '0.82rem' }}>{trade.reasoning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Failure Modes & Mitigations */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div className="section-tag">FAILURE MODES & RESILIENCE</div>
        <div className="grid-3" style={{ gap: '1rem' }}>
          {system.failureModes.map((failure, idx) => (
            <div 
              key={idx} 
              style={{ 
                background: 'rgba(245, 158, 11, 0.03)', 
                border: '1px solid rgba(245, 158, 11, 0.2)', 
                borderRadius: '8px', 
                padding: '1.1rem' 
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-amber)', fontWeight: 600 }}>
                  FAILURE_SCENARIO
                </span>
                <span className="tech-badge tech-badge-emerald" style={{ fontSize: '0.65rem' }}>
                  {failure.status}
                </span>
              </div>
              <h5 style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                {failure.failure}
              </h5>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                <strong style={{ color: 'var(--text-primary)' }}>Mitigation: </strong>
                {failure.mitigation}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Measurable Results */}
      <div>
        <div className="section-tag">MEASURABLE PRODUCTION RESULTS</div>
        <div className="grid-4" style={{ gap: '1rem' }}>
          {system.results.map((res, idx) => (
            <div 
              key={idx} 
              style={{ 
                background: 'rgba(6, 182, 212, 0.04)', 
                border: '1px solid rgba(6, 182, 212, 0.2)', 
                borderRadius: '8px', 
                padding: '1rem',
                textAlign: 'center'
              }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-tertiary)', marginBottom: '0.25rem' }}>
                {res.label}
              </div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--accent-cyan-light)', marginBottom: '0.25rem' }}>
                {res.value}
              </div>
              <div className="tech-badge tech-badge-emerald" style={{ fontSize: '0.65rem' }}>
                {res.change}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SystemCaseStudy;
