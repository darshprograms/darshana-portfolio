import React, { useState } from 'react';
import { Briefcase, ChevronRight, CheckCircle2, Cpu, ArrowUpRight, TrendingUp } from 'lucide-react';
import { experienceData } from '../../data/experienceData';

const ExperienceSection = () => {
  const [selectedRoleIdx, setSelectedRoleIdx] = useState(0);

  const currentRole = experienceData[selectedRoleIdx] || experienceData[0];

  return (
    <section id="experience" className="section-padding">
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div className="section-tag">ENGINEERING TRACK RECORD // OUTCOMES</div>
          <h2 className="section-heading">
            Problems Solved & Production Impact
          </h2>
          <p className="section-desc">
            Outcome-focused engineering history highlighting systems architected, performance gains, and critical technical trade-offs across enterprise domains.
          </p>
        </div>

        {/* Roles Selector */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
          gap: '1rem', 
          marginBottom: '2rem' 
        }}>
          {experienceData.map((exp, idx) => {
            const isSelected = selectedRoleIdx === idx;
            return (
              <div
                key={idx}
                onClick={() => setSelectedRoleIdx(idx)}
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
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                  <span className="tech-badge tech-badge-cyan" style={{ fontSize: '0.65rem' }}>
                    {exp.period}
                  </span>
                  {isSelected && (
                    <span className="status-dot status-dot-cyan" />
                  )}
                </div>

                <h3 style={{ fontSize: '1rem', fontWeight: 600, color: isSelected ? 'var(--text-primary)' : 'var(--text-secondary)', marginBottom: '0.2rem' }}>
                  {exp.role}
                </h3>

                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.85rem', color: 'var(--accent-cyan-light)', marginBottom: '0.5rem' }}>
                  {exp.company}
                </div>

                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-tertiary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {exp.domain}
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Role Engineering Breakdown (ROLE -> PROBLEMS SOLVED -> SYSTEMS BUILT -> IMPACT -> TECHNICAL DECISIONS) */}
        {currentRole && (
          <div className="eng-card" style={{ padding: '2rem', background: '#090c14', border: '1px solid var(--border-default)' }}>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.75rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1.25rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  <span className="tech-badge tech-badge-emerald">{currentRole.period}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
                    DOMAIN: {currentRole.domain}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                  {currentRole.role}
                </h3>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', color: 'var(--accent-cyan-light)', fontWeight: 600 }}>
                  {currentRole.company}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Problem Solved */}
              <div style={{ background: 'var(--bg-tertiary)', padding: '1.25rem', borderRadius: '6px', border: '1px solid var(--border-subtle)' }}>
                <div className="section-tag" style={{ fontSize: '0.7rem', marginBottom: '0.35rem' }}>CORE PROBLEMS SOLVED</div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.6 }}>
                  {currentRole.problemsSolved}
                </p>
              </div>

              {/* Systems Built & Impact */}
              <div className="grid-2" style={{ gap: '1.25rem' }}>
                {/* Systems Built */}
                <div style={{ background: '#06080e', padding: '1.25rem', borderRadius: '6px', border: '1px solid var(--border-subtle)' }}>
                  <div className="section-tag" style={{ fontSize: '0.7rem', marginBottom: '0.5rem' }}>SYSTEMS & ARCHITECTURE BUILT</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {currentRole.systemsBuilt.map((sys, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                        <span style={{ color: 'var(--accent-cyan)' }}>›</span>
                        <span>{sys}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Measurable Impact */}
                <div style={{ background: 'rgba(16, 185, 129, 0.03)', padding: '1.25rem', borderRadius: '6px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                  <div className="section-tag" style={{ fontSize: '0.7rem', color: '#34d399', marginBottom: '0.5rem' }}>MEASURABLE PRODUCTION IMPACT</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {currentRole.impact.map((imp, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', fontSize: '0.84rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                        <span style={{ color: '#34d399' }}>✓</span>
                        <span>{imp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technical Decisions */}
              <div style={{ background: 'rgba(6, 182, 212, 0.03)', padding: '1.25rem', borderRadius: '6px', border: '1px solid rgba(6, 182, 212, 0.2)' }}>
                <div className="section-tag" style={{ fontSize: '0.7rem', color: 'var(--accent-cyan-light)', marginBottom: '0.5rem' }}>CRITICAL TECHNICAL DECISIONS</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {currentRole.technicalDecisions.map((dec, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                      <span style={{ color: 'var(--accent-cyan)' }}>⬡</span>
                      <span>{dec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExperienceSection;
