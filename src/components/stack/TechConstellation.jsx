import React, { useState } from 'react';
import { Cpu, Terminal, ArrowRight, Layers, CheckCircle2, Sparkles } from 'lucide-react';
import { techStackData } from '../../data/techStackData';
import { systemsData } from '../../data/systemsData';

const TechConstellation = ({ onSelectSystem }) => {
  const [selectedTech, setSelectedTech] = useState(null);

  const handleTechClick = (tech) => {
    if (selectedTech?.name === tech.name) {
      setSelectedTech(null);
    } else {
      setSelectedTech(tech);
    }
  };

  const associatedSystems = selectedTech 
    ? systemsData.filter(s => selectedTech.systemIds.includes(s.id))
    : [];

  return (
    <section id="tech-stack" className="section-padding" style={{ background: '#06080d' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div className="section-tag">TECHNOLOGY CONSTELLATION</div>
          <h2 className="section-heading">
            Technical Stack & Engineering Primitives
          </h2>
          <p className="section-desc">
            Grouped engineering capability matrix. Click any technology to inspect where and how it was implemented in production systems.
          </p>
        </div>

        {/* Grouped Grid */}
        <div className="grid-2" style={{ gap: '1.5rem', marginBottom: '2rem' }}>
          {techStackData.map((group, idx) => (
            <div 
              key={idx} 
              className="eng-card"
              style={{ padding: '1.5rem', background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-cyan)' }}>
                  0{idx + 1} //
                </span>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)', letterSpacing: '0.04em' }}>
                  {group.category}
                </h3>
              </div>

              <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', marginBottom: '1.25rem', lineHeight: 1.4 }}>
                {group.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {group.items.map((tech, tIdx) => {
                  const isSelected = selectedTech?.name === tech.name;
                  return (
                    <button
                      key={tIdx}
                      onClick={() => handleTechClick(tech)}
                      className={`tech-pill ${isSelected ? 'active' : ''}`}
                    >
                      <span>{tech.name}</span>
                      {isSelected && (
                        <span className="status-dot status-dot-cyan" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Project Linkage Drawer */}
        {selectedTech && (
          <div className="inspector-panel eng-corner-accents" style={{ background: '#0c1018', border: '1px solid var(--accent-cyan)', padding: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span className="tech-badge tech-badge-cyan">ACTIVE_FILTER</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  {selectedTech.name}
                </span>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
                USED IN {associatedSystems.length} PRODUCTION SYSTEM(S)
              </div>
            </div>

            <div className="grid-3" style={{ gap: '1rem' }}>
              {associatedSystems.map((sys) => (
                <div 
                  key={sys.id} 
                  style={{ 
                    background: 'var(--bg-tertiary)', 
                    border: '1px solid var(--border-subtle)', 
                    borderRadius: '6px', 
                    padding: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <span className="tech-badge tech-badge-emerald" style={{ fontSize: '0.65rem', marginBottom: '0.4rem' }}>
                      {sys.category}
                    </span>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                      {sys.title}
                    </h4>
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.4, marginBottom: '0.75rem' }}>
                      {sys.tagline}
                    </p>
                  </div>

                  <button
                    onClick={() => onSelectSystem(sys.id)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--accent-cyan-light)',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0
                    }}
                  >
                    <span>JUMP TO ARCHITECTURE</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TechConstellation;
