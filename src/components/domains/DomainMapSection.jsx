import React, { useState } from 'react';
import { Compass, Plane, HeartPulse, Car, Wrench, Sun, Layers, ArrowRight, ChevronDown, ChevronRight } from 'lucide-react';
import { domainMapData } from '../../data/domainMapData';

const DomainMapSection = ({ onSelectSystem }) => {
  const [selectedDomainId, setSelectedDomainId] = useState(domainMapData[0].id);

  const selectedDomain = domainMapData.find(d => d.id === selectedDomainId) || domainMapData[0];

  const handleSelectDomain = (domainId) => {
    setSelectedDomainId(prev => prev === domainId ? null : domainId);
  };

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

  // Shared Drawer Render Function
  const renderDomainDrawer = (domain, isMobile = false) => {
    if (!domain) return null;
    return (
      <div 
        className="inspector-panel eng-corner-accents" 
        style={{ 
          background: 'var(--bg-secondary)', 
          border: '1px solid rgba(6, 182, 212, 0.4)', 
          padding: isMobile ? '1.15rem' : '1.75rem',
          borderRadius: '8px',
          boxShadow: isMobile ? '0 4px 20px rgba(0, 0, 0, 0.4), inset 0 0 15px rgba(6, 182, 212, 0.08)' : 'none'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.85rem', flexWrap: 'wrap', gap: '0.75rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
              <span className="tech-badge tech-badge-cyan" style={{ fontSize: '0.68rem', fontWeight: 600 }}>SELECTED_DOMAIN</span>
              <h3 style={{ fontSize: isMobile ? '1.1rem' : '1.3rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>
                {domain.name}
              </h3>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', color: 'var(--accent-cyan-light)' }}>
              CLIENTS / BRANDS: {domain.clients.join(' · ')}
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
            {domain.techHighlights.map((tech, idx) => (
              <span key={idx} className="tech-badge" style={{ fontSize: '0.68rem' }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Systems in this Domain */}
        <div>
          <div className="section-tag" style={{ fontSize: '0.68rem', marginBottom: '0.75rem' }}>SYSTEMS & CASE STUDIES IN THIS DOMAIN</div>
          <div className="domain-systems-grid" style={{ display: 'grid', gap: '0.85rem' }}>
            {domain.systems.map((sys, idx) => (
              <div 
                key={idx} 
                style={{ 
                  background: 'var(--bg-tertiary)', 
                  border: '1px solid var(--border-subtle)', 
                  borderRadius: '6px', 
                  padding: '1.15rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                    <h4 style={{ fontSize: '0.94rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      {sys.title}
                    </h4>
                    <span className="tech-badge" style={{ fontSize: '0.65rem' }}>
                      {sys.company}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '0.75rem' }}>
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
    );
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

        {/* Domain Cards with Responsive Mobile Inline Expansion */}
        <div className="domain-cards-container">
          {domainMapData.map((dom) => {
            const isSelected = selectedDomain?.id === dom.id;
            const Icon = getDomainIcon(dom.id);
            return (
              <div key={dom.id} className="domain-card-wrapper">
                <div
                  onClick={() => handleSelectDomain(dom.id)}
                  className={`eng-card ${isSelected ? 'eng-corner-accents' : ''}`}
                  style={{
                    padding: '1.25rem',
                    cursor: 'pointer',
                    background: isSelected ? 'var(--bg-tertiary)' : 'var(--bg-secondary)',
                    borderColor: isSelected ? 'var(--accent-cyan)' : 'var(--border-subtle)',
                    boxShadow: isSelected ? '0 0 20px rgba(6, 182, 212, 0.2)' : 'none',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
                    <Icon size={20} style={{ color: isSelected ? 'var(--accent-cyan)' : 'var(--text-secondary)' }} />
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      {isSelected && (
                        <span className="status-dot status-dot-cyan" />
                      )}
                      <div className="domain-mobile-chevron">
                        {isSelected ? (
                          <ChevronDown size={16} style={{ color: 'var(--accent-cyan)' }} />
                        ) : (
                          <ChevronRight size={16} />
                        )}
                      </div>
                    </div>
                  </div>

                  <h3 style={{ fontSize: '0.86rem', fontWeight: 600, color: isSelected ? 'var(--text-primary)' : 'var(--text-secondary)', marginBottom: '0.35rem', lineHeight: 1.25 }}>
                    {dom.name}
                  </h3>

                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-tertiary)' }}>
                    {dom.clients.slice(0, 2).join(', ')}
                  </div>
                </div>

                {/* Mobile Inline Drawer: Displayed immediately under the selected domain card on mobile */}
                {isSelected && (
                  <div className="domain-mobile-drawer-box">
                    {renderDomainDrawer(dom, true)}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Desktop-Only Deep Dive Drawer at Bottom */}
        {selectedDomain && (
          <div className="domain-desktop-drawer-box">
            {renderDomainDrawer(selectedDomain, false)}
          </div>
        )}
      </div>

      <style>{`
        .domain-cards-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .domain-card-wrapper {
          display: contents;
        }

        .domain-mobile-chevron {
          display: none;
        }

        .domain-mobile-drawer-box {
          display: none;
        }

        .domain-desktop-drawer-box {
          display: block;
        }

        .domain-systems-grid {
          grid-template-columns: repeat(2, 1fr);
        }

        @media (max-width: 767px) {
          .domain-cards-container {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            margin-bottom: 0;
          }

          .domain-card-wrapper {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }

          .domain-mobile-chevron {
            display: flex;
            align-items: center;
            color: var(--text-tertiary);
          }

          .domain-mobile-drawer-box {
            display: block;
            margin-top: -0.1rem;
            margin-bottom: 0.35rem;
            animation: domainSlideDown 0.22s cubic-bezier(0.16, 1, 0.3, 1);
          }

          .domain-desktop-drawer-box {
            display: none !important;
          }

          .domain-systems-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @keyframes domainSlideDown {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default DomainMapSection;
