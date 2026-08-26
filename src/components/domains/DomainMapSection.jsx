import React, { useState } from 'react';
import { Compass, Plane, HeartPulse, Car, Wrench, Sun, Layers, ArrowRight } from 'lucide-react';
import { domainMapData } from '../../data/domainMapData';

const DomainMapSection = ({ onSelectSystem }) => {
  const [selectedDomainId, setSelectedDomainId] = useState(domainMapData[0].id);

  const selectedDomain = domainMapData.find(d => d.id === selectedDomainId) || domainMapData[0];

  const getDomainIcon = (id) => {
    switch (id) {
      case 'airlines': return Plane;
      case 'healthcare': return HeartPulse;
      case 'automotive': return Car;
      case 'field-service': return Wrench;
      case 'renewable-energy': return Sun;
      default: return Layers;
    }
  };

  return (
    <section id="domains" className="section-padding">
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div className="section-tag">ENTERPRISE CLIENT & DOMAIN MAP</div>
          <h2 className="section-heading">
            Domain Expertise & Client Ecosystem
          </h2>
          <p className="section-desc">
            Production software engineered across 6 global enterprise domains. Click any domain to inspect the clients and systems delivered.
          </p>
        </div>

        {/* Domain Cards Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
          gap: '1rem', 
          marginBottom: '2rem' 
        }}>
          {domainMapData.map((dom) => {
            const isSelected = selectedDomain.id === dom.id;
            const Icon = getDomainIcon(dom.id);
            return (
              <div
                key={dom.id}
                onClick={() => setSelectedDomainId(dom.id)}
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
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
                  <Icon size={20} style={{ color: isSelected ? 'var(--accent-cyan)' : 'var(--text-secondary)' }} />
                  {isSelected && (
                    <span className="status-dot status-dot-cyan" />
                  )}
                </div>

                <h3 style={{ fontSize: '0.86rem', fontWeight: 600, color: isSelected ? 'var(--text-primary)' : 'var(--text-secondary)', marginBottom: '0.35rem', lineHeight: 1.25 }}>
                  {dom.name}
                </h3>

                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-tertiary)' }}>
                  {dom.clients.slice(0, 2).join(', ')}
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Domain Deep Dive Drawer */}
        {selectedDomain && (
          <div className="inspector-panel eng-corner-accents" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-default)', padding: '1.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                  <span className="tech-badge tech-badge-cyan">SELECTED_DOMAIN</span>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {selectedDomain.name}
                  </h3>
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-cyan-light)' }}>
                  CLIENTS / BRANDS: {selectedDomain.clients.join(' · ')}
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {selectedDomain.techHighlights.map((tech, idx) => (
                  <span key={idx} className="tech-badge" style={{ fontSize: '0.7rem' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Systems in this Domain */}
            <div>
              <div className="section-tag" style={{ fontSize: '0.7rem', marginBottom: '0.75rem' }}>SYSTEMS & CASE STUDIES IN THIS DOMAIN</div>
              <div className="grid-2" style={{ gap: '1rem' }}>
                {selectedDomain.systems.map((sys, idx) => (
                  <div 
                    key={idx} 
                    style={{ 
                      background: 'var(--bg-tertiary)', 
                      border: '1px solid var(--border-subtle)', 
                      borderRadius: '6px', 
                      padding: '1.25rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                        <h4 style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                          {sys.title}
                        </h4>
                        <span className="tech-badge" style={{ fontSize: '0.65rem' }}>
                          {sys.company}
                        </span>
                      </div>
                      <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '0.75rem' }}>
                        {sys.description}
                      </p>
                    </div>

                    <a
                      href="#systems"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        color: 'var(--accent-cyan-light)',
                        textDecoration: 'none'
                      }}
                    >
                      <span>VIEW SYSTEM DETAILS</span>
                      <ArrowRight size={13} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DomainMapSection;
