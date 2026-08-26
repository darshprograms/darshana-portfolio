import React from 'react';
import { ArrowRight, MessageSquare, Sparkles, Layers, ShieldCheck, Activity, Terminal, ExternalLink } from 'lucide-react';

const ControlPanelHero = ({ onExploreSystems, onOpenAskAI }) => {
  return (
    <section id="overview" className="hero-wrapper" style={{ paddingBottom: '2rem' }}>
      <div className="container">
        <div style={{ maxWidth: '880px', margin: '0 auto', textAlign: 'center' }}>
          {/* Identity Capsule */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
            <div className="tech-badge tech-badge-cyan">
              <span className="status-dot status-dot-cyan" />
              <span>DARSHANA AKADKAR // SENIOR SOFTWARE ENGINEER</span>
            </div>
            <div className="tech-badge tech-badge-emerald" style={{ display: 'none' }}>
              <span>6+ YEARS EXP</span>
            </div>
          </div>

          {/* Primary Engineering Statement */}
          <h1 className="hero-statement" style={{ marginBottom: '1.25rem' }}>
            I BUILD <span className="highlight">SCALABLE SYSTEMS</span> AND <span className="highlight">INTELLIGENT SOFTWARE</span>.
          </h1>

          {/* Supporting Statement */}
          <p className="hero-subtext" style={{ margin: '0 auto 2.25rem auto' }}>
            6+ years building enterprise applications, microservices and cloud systems — now exploring Generative AI, RAG and agentic workflows.
          </p>

          {/* Primary Actions */}
          <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.75rem' }}>
            <button
              onClick={onExploreSystems}
              className="eng-btn eng-btn-primary"
            >
              <Layers size={16} />
              <span>EXPLORE EXPERIENCE</span>
              <ArrowRight size={15} />
            </button>
            <button
              onClick={onOpenAskAI}
              className="eng-btn eng-btn-secondary"
            >
              <Sparkles size={16} style={{ color: 'var(--accent-cyan)' }} />
              <span>ASK MY PORTFOLIO</span>
            </button>
          </div>

          {/* Status Metadata Bar */}
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
              <span style={{ color: 'var(--text-tertiary)' }}>STATUS:</span>
              <span style={{ color: '#34d399', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <span className="status-dot status-dot-emerald" />
                ONLINE
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: 'var(--text-tertiary)' }}>CORE_STACK:</span>
              <span style={{ color: 'var(--text-primary)' }}>.NET Core / C# · AWS · React · AI</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: 'var(--text-tertiary)' }}>ENTERPRISE_DOMAINS:</span>
              <span style={{ color: 'var(--accent-cyan-light)' }}>Airlines · Healthcare · Field Service · Auto</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ControlPanelHero;
