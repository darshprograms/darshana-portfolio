import React from 'react';
import { Cpu, Terminal, ArrowRight, Layers, Sparkles, Activity, ShieldCheck, CheckCircle2, TrendingUp, Compass } from 'lucide-react';
import { controlPanelData } from '../../data/controlPanelData';

const ControlPanelGrid = ({ onSelectSection }) => {
  return (
    <section className="section-padding" style={{ paddingTop: '2.5rem', paddingBottom: '3.5rem', background: 'linear-gradient(180deg, #0a0e17 0%, #0e1526 50%, #0a0e17 100%)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1.75rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div className="section-tag">ENGINEERING CONTROL PANEL</div>
            <h2 className="section-heading" style={{ fontSize: '1.75rem', marginBottom: '0.25rem' }}>
              Developer Control Interface
            </h2>
            <p className="section-desc" style={{ fontSize: '0.9rem' }}>
              Interactive command center mapping production systems, architectural domains, enterprise clients, and AI laboratory streams.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div className="tech-badge tech-badge-emerald">
              <span className="status-dot status-dot-emerald" />
              <span>STATUS: ONLINE</span>
            </div>
            <div className="tech-badge tech-badge-cyan">
              <span>CTRL_PANEL v2.4</span>
            </div>
          </div>
        </div>

        {/* 6 Clickable Control Panel Interactive Modules */}
        <div className="grid-3" style={{ gap: '1.25rem', marginBottom: '2.5rem' }}>
          {controlPanelData.modules.map((mod) => {
            const badgeClass = 
              mod.accent === 'cyan' ? 'tech-badge-cyan' :
              mod.accent === 'emerald' ? 'tech-badge-emerald' :
              mod.accent === 'amber' ? 'tech-badge-amber' :
              mod.accent === 'indigo' ? 'tech-badge-indigo' : 'tech-badge';

            return (
              <div
                key={mod.id}
                onClick={() => onSelectSection(mod.targetSection)}
                className="telemetry-card eng-corner-accents"
                style={{
                  cursor: 'pointer',
                  padding: '1.35rem',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-subtle)',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                <div className="telemetry-header" style={{ marginBottom: '0.75rem' }}>
                  <span className="telemetry-label" style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                    {mod.label}
                  </span>
                  <span className={`tech-badge ${badgeClass}`} style={{ fontSize: '0.65rem' }}>
                    {mod.tag}
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  {mod.items.map((item, idx) => (
                    <div 
                      key={idx} 
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '0.5rem', 
                        fontFamily: 'var(--font-mono)', 
                        fontSize: '0.82rem', 
                        color: 'var(--text-secondary)' 
                      }}
                    >
                      <span style={{ color: 'var(--accent-cyan)' }}>›</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent-cyan-light)', marginTop: 'auto', paddingTop: '0.5rem', borderTop: '1px solid var(--border-subtle)' }}>
                  <span>EXPLORE MODULE</span>
                  <ArrowRight size={13} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Verified Impact Dashboard */}
        <div>
          <div className="section-tag" style={{ marginBottom: '0.75rem' }}>VERIFIED ENGINEERING IMPACT</div>
          <div className="grid-4" style={{ gap: '1rem' }}>
            {controlPanelData.impactMetrics.map((metric, idx) => (
              <div
                key={idx}
                className={`eng-card ${metric.highlight ? 'eng-corner-accents' : ''}`}
                style={{
                  padding: '1.25rem',
                  textAlign: 'center',
                  background: metric.highlight ? 'rgba(6, 182, 212, 0.04)' : 'var(--bg-secondary)',
                  border: `1px solid ${metric.highlight ? 'rgba(6, 182, 212, 0.3)' : 'var(--border-subtle)'}`
                }}
              >
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 700, color: metric.highlight ? 'var(--accent-cyan-light)' : '#34d399', lineHeight: 1, marginBottom: '0.35rem' }}>
                  {metric.value}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 600, color: 'var(--text-primary)', textTransform: 'uppercase', marginBottom: '0.4rem', letterSpacing: '0.04em' }}>
                  {metric.label}
                </div>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)', lineHeight: 1.4, margin: 0 }}>
                  {metric.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ControlPanelGrid;
