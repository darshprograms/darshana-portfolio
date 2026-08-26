import React, { useState } from 'react';
import { Cpu, Terminal, ArrowRight, Layers, CheckCircle2, Sparkles, Database, Cloud, Wrench, ShieldCheck } from 'lucide-react';
import { techMapData } from '../../data/techMapData';

const TechMapSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <section id="engineering" className="section-padding" style={{ background: 'linear-gradient(180deg, #0a0e17 0%, #0e1526 50%, #0a0e17 100%)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div className="section-tag">ENGINEERING TECH STACK MAP</div>
          <h2 className="section-heading">
            Technical Arsenal & Core Stack Map
          </h2>
          <p className="section-desc">
            Organized capability matrix spanning backend microservices, AWS serverless cloud, relational/NoSQL stores, and AI integration. Zero arbitrary percentage bars.
          </p>
        </div>

        {/* Grouped Stack Grid */}
        <div className="grid-2" style={{ gap: '1.25rem' }}>
          {techMapData.map((group, idx) => (
            <div 
              key={idx} 
              className="eng-card"
              style={{
                padding: '1.5rem',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-cyan)' }}>
                    0{idx + 1} //
                  </span>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)', letterSpacing: '0.04em' }}>
                    {group.category}
                  </h3>
                </div>
                <span className="tech-badge" style={{ fontSize: '0.65rem' }}>
                  {group.skills.length} SKILLS
                </span>
              </div>

              <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', marginBottom: '1rem', lineHeight: 1.4 }}>
                {group.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="tech-pill"
                    style={{
                      fontSize: '0.76rem',
                      padding: '0.35rem 0.65rem'
                    }}
                  >
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechMapSection;
