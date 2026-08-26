import React from 'react';
import { ArrowRight, MessageSquare, Terminal, Cpu, ShieldCheck, Activity, Database, GitBranch, Layers } from 'lucide-react';

const EngineeringHero = ({ onExploreSystems, onOpenAskAI }) => {
  return (
    <section id="overview" className="hero-wrapper">
      <div className="container">
        {/* Engineering Statement Header */}
        <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center', marginBottom: '2.5rem' }}>
          {/* Status Capsule */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
            <div className="tech-badge tech-badge-cyan">
              <span className="status-dot status-dot-cyan" />
              <span>AI-NATIVE ENGINEERING COMMAND CENTER</span>
            </div>
          </div>

          {/* Primary Statement */}
          <h1 className="hero-statement">
            I build <span className="highlight">intelligent systems</span>.
          </h1>

          {/* Supporting Engineering Subtext */}
          <p className="hero-subtext" style={{ margin: '0 auto 2rem auto' }}>
            Software engineer focused on backend systems, AI workflows, and scalable architecture.
            Explore how I think, build, and solve complex distributed engineering problems.
          </p>

          {/* Two Primary Actions */}
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <button
              onClick={onExploreSystems}
              className="eng-btn eng-btn-primary"
            >
              <Layers size={16} />
              <span>EXPLORE SYSTEMS</span>
              <ArrowRight size={15} />
            </button>
            <button
              onClick={onOpenAskAI}
              className="eng-btn eng-btn-secondary"
            >
              <MessageSquare size={16} style={{ color: 'var(--accent-cyan)' }} />
              <span>ASK MY PORTFOLIO</span>
            </button>
          </div>

          {/* Live Engineering Status Bar */}
          <div 
            className="eng-card" 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-around', 
              padding: '0.85rem 1.25rem',
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--border-subtle)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              flexWrap: 'wrap',
              gap: '1rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: 'var(--text-tertiary)' }}>LOCATION:</span>
              <span style={{ color: 'var(--text-secondary)' }}>Global / Distributed</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: 'var(--text-tertiary)' }}>CORE_RUNTIME:</span>
              <span style={{ color: 'var(--accent-cyan-light)' }}>.NET 8 · AWS · Qdrant</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: 'var(--text-tertiary)' }}>ARCHITECTURE:</span>
              <span style={{ color: 'var(--text-secondary)' }}>Event-Driven · Hybrid RAG</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="status-dot status-dot-emerald" />
              <span style={{ color: '#34d399' }}>ALL_SYSTEMS_OPERATIONAL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineeringHero;
