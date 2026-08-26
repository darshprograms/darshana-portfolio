import React, { useState } from 'react';
import { Layers, ChevronRight, Sparkles, Server, Cpu, Database } from 'lucide-react';
import { systemsData } from '../../data/systemsData';
import SystemCaseStudy from './SystemCaseStudy';

const SystemsOverview = ({ activeSystemId, setActiveSystemId }) => {
  const [selectedId, setSelectedId] = useState(activeSystemId || systemsData[0].id);

  const currentSystem = systemsData.find(s => s.id === (activeSystemId || selectedId)) || systemsData[0];

  const handleSelect = (id) => {
    setSelectedId(id);
    if (setActiveSystemId) setActiveSystemId(id);
  };

  return (
    <section id="systems" className="section-padding">
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div className="section-tag">SYSTEMS & ARCHITECTURE CASE STUDIES</div>
          <h2 className="section-heading">
            Production Systems & Engineering Architecture
          </h2>
          <p className="section-desc">
            Deep architectural case studies demonstrating system design, key trade-offs, failure modes, and measurable results.
          </p>
        </div>

        {/* System Selector Tabs */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '1rem', 
          marginBottom: '2.5rem' 
        }}>
          {systemsData.map((sys) => {
            const isSelected = currentSystem.id === sys.id;
            return (
              <div
                key={sys.id}
                onClick={() => handleSelect(sys.id)}
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
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span className="tech-badge tech-badge-cyan" style={{ fontSize: '0.65rem' }}>
                    {sys.category.split('&')[0]}
                  </span>
                  {isSelected && (
                    <span className="status-dot status-dot-cyan" />
                  )}
                </div>

                <h3 style={{ fontSize: '1rem', fontWeight: 600, color: isSelected ? 'var(--text-primary)' : 'var(--text-secondary)', marginBottom: '0.35rem', lineHeight: 1.3 }}>
                  {sys.title}
                </h3>

                <p style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)', lineHeight: 1.4, marginBottom: '0.75rem' }}>
                  {sys.tagline}
                </p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: isSelected ? 'var(--accent-cyan-light)' : 'var(--text-tertiary)' }}>
                  <span>{sys.nodes.length} SUBSYSTEM NODES</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                    <span>VIEW CASE STUDY</span>
                    <ChevronRight size={14} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Render Active Full Case Study */}
        <SystemCaseStudy system={currentSystem} />
      </div>
    </section>
  );
};

export default SystemsOverview;
