import React, { useState } from 'react';
import { Cpu, Terminal, Sparkles, BookOpen, Layers, Activity, ArrowRight, ShieldCheck, Database, RefreshCw } from 'lucide-react';
import { telemetryData } from '../../data/telemetryData';

const CommandCenter = ({ onSelectSection, onOpenAskAI }) => {
  const [activeTab, setActiveTab] = useState('telemetry');

  return (
    <section className="section-padding" style={{ paddingTop: '0.5rem', paddingBottom: '3.5rem' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1.75rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div className="section-tag">ENGINEERING COMMAND CENTER</div>
            <h2 className="section-heading" style={{ fontSize: '1.75rem', marginBottom: '0.25rem' }}>
              Live Telemetry & Architecture Stream
            </h2>
            <p className="section-desc" style={{ fontSize: '0.9rem' }}>
              Real-time snapshot of active engineering focuses, research pipelines, and backend primitives.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <div className="tech-badge tech-badge-emerald">
              <span className="status-dot status-dot-emerald" />
              <span>UPTIME: 99.99%</span>
            </div>
            <div className="tech-badge">
              <span>LATENCY: 24ms</span>
            </div>
          </div>
        </div>

        {/* 4 Quadrants: Currently Building, Exploring, Engineering, AI Lab */}
        <div className="grid-4" style={{ marginBottom: '2rem' }}>
          {telemetryData.quadrants.map((quadrant) => {
            const badgeClass = 
              quadrant.statusColor === 'cyan' ? 'tech-badge-cyan' :
              quadrant.statusColor === 'emerald' ? 'tech-badge-emerald' :
              quadrant.statusColor === 'amber' ? 'tech-badge-amber' : 'tech-badge-indigo';

            return (
              <div 
                key={quadrant.id} 
                className="telemetry-card eng-corner-accents"
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  if (quadrant.id === 'ai-lab') onSelectSection('ailab');
                  else if (quadrant.id === 'exploring') onSelectSection('thinking');
                  else onSelectSection('systems');
                }}
              >
                <div className="telemetry-header">
                  <span className="telemetry-label">{quadrant.tag}</span>
                  <span className={`tech-badge ${badgeClass}`} style={{ fontSize: '0.65rem' }}>
                    {quadrant.status}
                  </span>
                </div>

                <h3 className="telemetry-title">{quadrant.title}</h3>
                <p className="telemetry-desc">{quadrant.description}</p>

                <div className="telemetry-meta">
                  {quadrant.meta.map((tag, idx) => (
                    <span 
                      key={idx} 
                      style={{ 
                        fontFamily: 'var(--font-mono)', 
                        fontSize: '0.7rem', 
                        padding: '0.15rem 0.45rem', 
                        background: 'rgba(255,255,255,0.03)', 
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '3px',
                        color: 'var(--text-secondary)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Real-time Event Stream / System Log Window */}
        <div className="eng-card" style={{ padding: '1.25rem', background: '#07090e' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Terminal size={15} style={{ color: 'var(--accent-cyan)' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                SYSTEM_ACTIVITY_STREAM // LIVE_EVENTS
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-tertiary)' }}>
              <span className="status-dot status-dot-cyan" />
              <span>STREAMING</span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {telemetryData.liveLogs.map((log) => (
              <div 
                key={log.id} 
                style={{ 
                  display: 'flex', 
                  alignItems: 'baseline', 
                  gap: '0.85rem', 
                  fontFamily: 'var(--font-mono)', 
                  fontSize: '0.78rem',
                  lineHeight: 1.5,
                  padding: '0.3rem 0.5rem',
                  borderRadius: '4px',
                  background: 'rgba(255, 255, 255, 0.015)'
                }}
              >
                <span style={{ color: 'var(--text-tertiary)', minWidth: '60px' }}>[{log.time}]</span>
                <span className="tech-badge tech-badge-cyan" style={{ fontSize: '0.65rem', padding: '0.1rem 0.4rem' }}>
                  {log.source}
                </span>
                <span style={{ color: 'var(--text-secondary)' }}>{log.msg}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommandCenter;
