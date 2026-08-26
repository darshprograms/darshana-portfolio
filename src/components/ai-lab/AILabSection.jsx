import React, { useState } from 'react';
import { Sparkles, Terminal, CheckCircle2, ChevronRight, Cpu, Bot, Award, FlaskConical } from 'lucide-react';
import { aiLabData } from '../../data/aiLabData';

const AILabSection = () => {
  const [activeScope, setActiveScope] = useState('all');

  return (
    <section id="ai-lab" className="section-padding" style={{ background: 'linear-gradient(180deg, #0a0e17 0%, #0f1629 50%, #0a0e17 100%)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div className="section-tag">AI LAB // GENERATIVE AI & AGENTS</div>
          <h2 className="section-heading">
            AI Engineering & Laboratory Experiments
          </h2>
          <p className="section-desc">
            Clearly distinguishing production-deployed AI integrations from personal RAG & agentic experimentation.
          </p>
        </div>

        {/* Scope Filter Buttons */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <button
            onClick={() => setActiveScope('all')}
            style={{
              padding: '0.4rem 0.85rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              borderRadius: '5px',
              cursor: 'pointer',
              background: activeScope === 'all' ? 'var(--accent-cyan-glow)' : 'var(--bg-tertiary)',
              color: activeScope === 'all' ? 'var(--accent-cyan-light)' : 'var(--text-secondary)',
              border: `1px solid ${activeScope === 'all' ? 'var(--accent-cyan)' : 'var(--border-subtle)'}`
            }}
          >
            ALL AI WORK
          </button>
          <button
            onClick={() => setActiveScope('professional')}
            style={{
              padding: '0.4rem 0.85rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              borderRadius: '5px',
              cursor: 'pointer',
              background: activeScope === 'professional' ? 'rgba(16, 185, 129, 0.15)' : 'var(--bg-tertiary)',
              color: activeScope === 'professional' ? '#34d399' : 'var(--text-secondary)',
              border: `1px solid ${activeScope === 'professional' ? 'var(--accent-emerald)' : 'var(--border-subtle)'}`
            }}
          >
            PROFESSIONAL AI EXPERIENCE (PRODUCTION)
          </button>
          <button
            onClick={() => setActiveScope('personal')}
            style={{
              padding: '0.4rem 0.85rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              borderRadius: '5px',
              cursor: 'pointer',
              background: activeScope === 'personal' ? 'rgba(129, 140, 248, 0.15)' : 'var(--bg-tertiary)',
              color: activeScope === 'personal' ? '#a5b4fc' : 'var(--text-secondary)',
              border: `1px solid ${activeScope === 'personal' ? 'var(--accent-indigo)' : 'var(--border-subtle)'}`
            }}
          >
            PERSONAL AI LAB & EXPERIMENTS
          </button>
        </div>

        {/* Section 1: Professional AI Experience */}
        {(activeScope === 'all' || activeScope === 'professional') && (
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
              <span className="tech-badge tech-badge-emerald">PROFESSIONAL PRODUCTION AI</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-tertiary)' }}>
                XPLOR TECHNOLOGIES (SERVICE AUTOPILOT)
              </span>
            </div>

            <div className="grid-2" style={{ gap: '1.25rem' }}>
              {aiLabData.professionalAI.map((item) => (
                <div 
                  key={item.id} 
                  className="eng-card eng-corner-accents"
                  style={{ padding: '1.5rem', background: 'var(--bg-secondary)', border: '1px solid rgba(16, 185, 129, 0.35)' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Bot size={15} style={{ color: '#34d399' }} />
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#34d399', fontWeight: 600 }}>
                        {item.status}
                      </span>
                    </div>
                    <span className="tech-badge" style={{ fontSize: '0.65rem' }}>
                      {item.role}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                    {item.title}
                  </h3>

                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '1rem' }}>
                    {item.description}
                  </p>

                  <div style={{ background: 'var(--bg-tertiary)', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--border-subtle)', marginBottom: '1rem' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-tertiary)', marginBottom: '0.2rem' }}>
                      FLOW ARCHITECTURE:
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent-cyan-light)' }}>
                      {item.architecture}
                    </div>
                  </div>

                  <div style={{ fontSize: '0.82rem', color: 'var(--text-primary)', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.75rem' }}>
                    <strong style={{ color: '#34d399' }}>Production Impact: </strong>
                    {item.impact}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 2: Personal AI Experiments & Learning */}
        {(activeScope === 'all' || activeScope === 'personal') && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
              <span className="tech-badge tech-badge-indigo">PERSONAL AI LAB EXPERIMENTS</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-tertiary)' }}>
                RAG · VECTOR EMBEDDINGS · FASTAPI · AGENTS
              </span>
            </div>

            <div className="grid-3" style={{ gap: '1.25rem' }}>
              {aiLabData.personalLabExperiments.map((exp) => (
                <div 
                  key={exp.id} 
                  className="eng-card"
                  style={{ padding: '1.5rem', background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span className="tech-badge tech-badge-indigo" style={{ fontSize: '0.65rem' }}>
                      {exp.status}
                    </span>
                    <FlaskConical size={14} style={{ color: 'var(--accent-indigo)' }} />
                  </div>

                  <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                    {exp.title}
                  </h3>

                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '0.75rem' }}>
                    {exp.objective}
                  </p>

                  <div style={{ background: 'var(--bg-tertiary)', padding: '0.65rem', borderRadius: '4px', border: '1px solid var(--border-subtle)', marginBottom: '0.75rem' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-tertiary)', marginBottom: '0.2rem' }}>
                      TOPOLOGY:
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#a5b4fc', lineHeight: 1.4 }}>
                      {exp.architecture}
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '0.75rem' }}>
                    {exp.technologies.map((t, idx) => (
                      <span key={idx} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', padding: '0.1rem 0.4rem', background: 'rgba(255,255,255,0.03)', borderRadius: '3px', color: 'var(--text-tertiary)' }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.5rem' }}>
                    <strong style={{ color: 'var(--text-primary)' }}>Key Finding: </strong> {exp.findings}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AILabSection;
