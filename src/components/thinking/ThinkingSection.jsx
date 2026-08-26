import React, { useState } from 'react';
import { BookOpen, ShieldAlert, Cpu, ArrowRight, CheckCircle2, ChevronRight, Zap, Layers } from 'lucide-react';
import { thinkingData } from '../../data/thinkingData';

const ThinkingSection = () => {
  const [activeThinkId, setActiveThinkId] = useState(thinkingData[0].id);

  const activeThink = thinkingData.find(t => t.id === activeThinkId) || thinkingData[0];

  return (
    <section id="thinking" className="section-padding" style={{ background: '#07090f' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div className="section-tag">HOW I THINK // FIRST PRINCIPLES</div>
          <h2 className="section-heading">
            System Design & Architectural Thinking
          </h2>
          <p className="section-desc">
            Deep technical breakdowns evaluating real-world system design questions, constraints, bottleneck mitigation, and explicit trade-offs.
          </p>
        </div>

        {/* Thought Selector Tabs */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '1rem', 
          marginBottom: '2rem' 
        }}>
          {thinkingData.map((item) => {
            const isSelected = activeThink.id === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setActiveThinkId(item.id)}
                className={`eng-card ${isSelected ? 'eng-corner-accents' : ''}`}
                style={{
                  padding: '1.25rem',
                  cursor: 'pointer',
                  background: isSelected ? 'var(--bg-tertiary)' : 'var(--bg-secondary)',
                  borderColor: isSelected ? 'var(--accent-cyan)' : 'var(--border-subtle)',
                  boxShadow: isSelected ? '0 0 20px rgba(6, 182, 212, 0.15)' : 'none',
                  transition: 'all 0.15s ease'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                  <span className="tech-badge tech-badge-cyan" style={{ fontSize: '0.65rem' }}>
                    {item.category}
                  </span>
                  {isSelected && (
                    <span className="status-dot status-dot-cyan" />
                  )}
                </div>

                <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: isSelected ? 'var(--text-primary)' : 'var(--text-secondary)', marginBottom: '0.35rem', lineHeight: 1.3 }}>
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Selected Thought Deep Breakdown */}
        {activeThink && (
          <div className="eng-card" style={{ padding: '2rem', background: '#090c14', border: '1px solid var(--border-default)' }}>
            {/* Header */}
            <div style={{ marginBottom: '1.75rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1.25rem' }}>
              <span className="tech-badge tech-badge-indigo" style={{ marginBottom: '0.5rem' }}>
                {activeThink.category}
              </span>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                {activeThink.title}
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                {activeThink.summary}
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Requirements & Constraints */}
              <div className="grid-2" style={{ gap: '1.25rem' }}>
                <div style={{ background: 'var(--bg-tertiary)', padding: '1.25rem', borderRadius: '6px', border: '1px solid var(--border-subtle)' }}>
                  <div className="section-tag" style={{ fontSize: '0.7rem', marginBottom: '0.5rem' }}>REQUIREMENTS & TARGET SLA</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {activeThink.requirements.map((req, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                        <span style={{ color: 'var(--accent-cyan)' }}>›</span>
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ background: 'var(--bg-tertiary)', padding: '1.25rem', borderRadius: '6px', border: '1px solid var(--border-subtle)' }}>
                  <div className="section-tag" style={{ fontSize: '0.7rem', marginBottom: '0.5rem' }}>HARD CONSTRAINTS</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {activeThink.constraints.map((c, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                        <span style={{ color: 'var(--accent-amber)' }}>›</span>
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step-by-Step Architecture */}
              <div style={{ background: '#05070d', padding: '1.25rem', borderRadius: '6px', border: '1px solid var(--border-subtle)' }}>
                <div className="section-tag" style={{ fontSize: '0.7rem', marginBottom: '0.75rem' }}>PROPOSED ARCHITECTURAL BLUEPRINT</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {activeThink.architectureSteps.map((step, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
                      <span style={{ color: 'var(--accent-cyan-light)', fontWeight: 600 }}>0{idx + 1}.</span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottlenecks & Trade-offs */}
              <div className="grid-2" style={{ gap: '1.25rem' }}>
                <div style={{ background: 'rgba(245, 158, 11, 0.03)', padding: '1.25rem', borderRadius: '6px', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
                  <div className="section-tag" style={{ fontSize: '0.7rem', color: 'var(--accent-amber)', marginBottom: '0.5rem' }}>POTENTIAL BOTTLENECKS</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {activeThink.bottlenecks.map((b, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                        <span style={{ color: 'var(--accent-amber)' }}>!</span>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ background: 'rgba(6, 182, 212, 0.03)', padding: '1.25rem', borderRadius: '6px', border: '1px solid rgba(6, 182, 212, 0.2)' }}>
                  <div className="section-tag" style={{ fontSize: '0.7rem', color: 'var(--accent-cyan-light)', marginBottom: '0.5rem' }}>TRADE-OFFS & CONCESSIONS</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {activeThink.tradeoffs.map((t, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                        <span style={{ color: 'var(--accent-cyan)' }}>⇄</span>
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Scaling Strategy */}
              <div style={{ background: 'rgba(16, 185, 129, 0.04)', padding: '1.25rem', borderRadius: '6px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                <div className="section-tag" style={{ fontSize: '0.7rem', color: '#34d399', marginBottom: '0.35rem' }}>LONG-TERM SCALING STRATEGY</div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-primary)', lineHeight: 1.55 }}>
                  {activeThink.scalingStrategy}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ThinkingSection;
