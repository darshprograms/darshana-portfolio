import React, { useState } from 'react';
import { Briefcase, ArrowRight, ChevronRight, CheckCircle2, TrendingUp, Calendar } from 'lucide-react';
import { careerProgressionData } from '../../data/careerProgressionData';

const CareerPathSection = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const selectedCareer = careerProgressionData[selectedIdx] || careerProgressionData[0];

  return (
    <section id="experience" className="section-padding" style={{ background: 'linear-gradient(180deg, #0a0e17 0%, #0e1526 50%, #0a0e17 100%)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div className="section-tag">ENGINEERING CAREER PATH // 6+ YEARS</div>
          <h2 className="section-heading">
            Professional Progression & Roles
          </h2>
          <p className="section-desc">
            Continuous engineering advancement from Software Developer to Senior Software Engineer across high-scale enterprise environments.
          </p>
        </div>

        {/* Prominent Title Progression Flow */}
        <div 
          className="eng-card" 
          style={{ 
            padding: '1.25rem 1.5rem', 
            background: 'var(--bg-tertiary)', 
            border: '1px solid var(--border-subtle)', 
            marginBottom: '2rem',
            overflowX: 'auto'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', minWidth: '700px', gap: '0.75rem' }}>
            {[
              { year: '2018', title: 'Software Developer', co: 'Excellon' },
              { year: '2022', title: 'Software Engineer', co: 'E-Zest' },
              { year: '2023', title: 'SDE 2', co: 'Accelya' },
              { year: '2025', title: 'Senior Associate L1', co: 'Publicis Sapient' },
              { year: '2026', title: 'Senior Software Engineer', co: 'Xplor' }
            ].map((p, idx, arr) => (
              <React.Fragment key={idx}>
                <div style={{ textAlign: 'center', padding: '0.25rem 0.5rem' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--accent-cyan)' }}>
                    {p.year}
                  </div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', whiteSpace: 'nowrap' }}>
                    {p.title}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)' }}>
                    {p.co}
                  </div>
                </div>
                {idx < arr.length - 1 && (
                  <span style={{ color: 'var(--border-default)', fontSize: '0.9rem' }}>→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Career Milestone Nodes Selector */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
          gap: '1rem', 
          marginBottom: '2rem' 
        }}>
          {careerProgressionData.map((item, idx) => {
            const isSelected = selectedIdx === idx;
            return (
              <div
                key={idx}
                onClick={() => setSelectedIdx(idx)}
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
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                  <span className="tech-badge tech-badge-cyan" style={{ fontSize: '0.65rem' }}>
                    {item.year}
                  </span>
                </div>

                <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: isSelected ? 'var(--text-primary)' : 'var(--text-secondary)', marginBottom: '0.2rem' }}>
                  {item.company}
                </h3>

                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-cyan-light)' }}>
                  {item.role}
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Career Node Breakdown */}
        {selectedCareer && (
          <div className="eng-card" style={{ padding: '2rem', background: 'var(--bg-secondary)', border: '1px solid var(--border-default)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                  <span className="tech-badge tech-badge-emerald">{selectedCareer.year}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
                    {selectedCareer.domain}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                  {selectedCareer.role}
                </h3>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', color: 'var(--accent-cyan-light)', fontWeight: 600 }}>
                  {selectedCareer.company}
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {selectedCareer.tech.map((t, idx) => (
                  <span key={idx} className="tech-badge" style={{ fontSize: '0.7rem' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ background: 'var(--bg-tertiary)', padding: '1.25rem', borderRadius: '6px', border: '1px solid var(--border-subtle)' }}>
              <div className="section-tag" style={{ fontSize: '0.7rem', marginBottom: '0.35rem' }}>KEY SYSTEMS & DELIVERABLES</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.6, margin: 0 }}>
                {selectedCareer.highlights}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CareerPathSection;
