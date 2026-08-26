import React, { useState, useEffect } from 'react';
import { Layers, Sparkles, ChevronDown, ChevronUp, ArrowRight, ShieldCheck, Cpu, Terminal, CheckCircle2, Bot, ArrowUpRight, Building2, Briefcase } from 'lucide-react';
import { cvSystemsData } from '../../data/cvSystemsData';

const SystemsSection = () => {
  const [expandedSystemId, setExpandedSystemId] = useState(cvSystemsData[0].id);
  const [activeTabMap, setActiveTabMap] = useState({});

  const toggleExpand = (id) => {
    setExpandedSystemId(prev => prev === id ? null : id);
  };

  const setSystemTab = (systemId, tab) => {
    setActiveTabMap(prev => ({ ...prev, [systemId]: tab }));
  };

  return (
    <section id="systems" className="section-padding">
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div className="section-tag">PROFESSIONAL CAREER EXPERIENCE // PRODUCTION SYSTEMS</div>
          <h2 className="section-heading">
            Career Experience & Production Systems
          </h2>
          <p className="section-desc">
            Production engineering track record across Xplor Technologies, Accelya Solutions, E-Zest Solutions, and Excellon Solutions.
          </p>
        </div>

        {/* Systems List with Expandable Deep Dives */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {cvSystemsData.map((sys) => {
            const isExpanded = expandedSystemId === sys.id;
            const currentTab = activeTabMap[sys.id] || 'overview';

            return (
              <div 
                key={sys.id}
                className={`eng-card ${isExpanded ? 'eng-corner-accents' : ''}`}
                style={{
                  background: isExpanded ? '#0a0d14' : 'var(--bg-secondary)',
                  border: `1px solid ${isExpanded ? 'var(--accent-cyan)' : 'var(--border-subtle)'}`,
                  transition: 'all 0.2s ease'
                }}
              >
                {/* Header Bar (Clickable) */}
                <div 
                  onClick={() => toggleExpand(sys.id)}
                  style={{
                    padding: '1.5rem',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: '1rem'
                  }}
                >
                  <div style={{ flexGrow: 1, maxWidth: '850px' }}>
                    {/* Prominently Highlighted Company Name & Metadata */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.65rem', flexWrap: 'wrap' }}>
                      <div 
                        className="tech-badge tech-badge-cyan" 
                        style={{ 
                          fontSize: '0.82rem', 
                          fontWeight: 700, 
                          padding: '0.3rem 0.75rem', 
                          letterSpacing: '0.04em',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          background: 'rgba(6, 182, 212, 0.15)',
                          borderColor: 'rgba(6, 182, 212, 0.4)'
                        }}
                      >
                        <Building2 size={13} style={{ color: 'var(--accent-cyan-light)' }} />
                        <span>{sys.company.toUpperCase()}</span>
                      </div>

                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent-cyan-light)', fontWeight: 600 }}>
                        {sys.role}
                      </span>

                      <span className="tech-badge" style={{ color: 'var(--text-tertiary)' }}>{sys.period}</span>
                      
                      <span className="tech-badge tech-badge-indigo" style={{ fontSize: '0.68rem' }}>
                        {sys.domain}
                      </span>

                      {sys.impactMetric && (
                        <span className="tech-badge tech-badge-emerald">
                          {sys.impactMetric.value} {sys.impactMetric.label}
                        </span>
                      )}
                    </div>

                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                      {sys.title}
                    </h3>

                    <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '0.75rem' }}>
                      {sys.summary}
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {sys.techStack.map((tech, tIdx) => (
                        <span 
                          key={tIdx} 
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
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', alignSelf: 'center' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: isExpanded ? 'var(--accent-cyan-light)' : 'var(--text-tertiary)' }}>
                      {isExpanded ? 'COLLAPSE' : 'EXPAND SYSTEM'}
                    </span>
                    {isExpanded ? <ChevronUp size={18} style={{ color: 'var(--accent-cyan)' }} /> : <ChevronDown size={18} />}
                  </div>
                </div>

                {/* Expanded Deep Dive Panel */}
                {isExpanded && (
                  <div style={{ borderTop: '1px solid var(--border-subtle)', padding: '1.5rem', background: 'var(--bg-tertiary)' }}>
                    {/* Navigation Tabs within Project: Overview, Architecture, Key Contributions, Decisions */}
                    <div style={{ display: 'flex', gap: '0.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem', marginBottom: '1.5rem', overflowX: 'auto' }}>
                      {['overview', 'contributions', 'decisions', ...(sys.naturalLanguageAutomation ? ['nl-automation'] : [])].map((tabKey) => {
                        const label = 
                          tabKey === 'overview' ? 'PROBLEM & SOLUTION' :
                          tabKey === 'contributions' ? 'KEY CONTRIBUTIONS' :
                          tabKey === 'decisions' ? 'TECHNICAL DECISIONS' : '★ NATURAL LANGUAGE AUTOMATION';
                        
                        const isTabActive = currentTab === tabKey;
                        return (
                          <button
                            key={tabKey}
                            onClick={() => setSystemTab(sys.id, tabKey)}
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.75rem',
                              padding: '0.4rem 0.8rem',
                              borderRadius: '4px',
                              cursor: 'pointer',
                              background: isTabActive ? 'var(--accent-cyan-glow)' : 'transparent',
                              color: isTabActive ? 'var(--accent-cyan-light)' : 'var(--text-secondary)',
                              border: isTabActive ? '1px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                              whiteSpace: 'nowrap'
                            }}
                          >
                            {label}
                          </button>
                        );
                      })}
                    </div>

                    {/* Tab 1: Problem & Solution */}
                    {currentTab === 'overview' && (
                      <div className="grid-2" style={{ gap: '1.25rem' }}>
                        <div style={{ background: 'var(--bg-tertiary)', padding: '1.25rem', borderRadius: '6px', border: '1px solid var(--border-subtle)' }}>
                          <div className="section-tag" style={{ fontSize: '0.7rem', marginBottom: '0.35rem' }}>PROBLEM & CHALLENGE</div>
                          <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                            {sys.problem.statement}
                          </p>
                        </div>
                        <div style={{ background: 'var(--bg-tertiary)', padding: '1.25rem', borderRadius: '6px', border: '1px solid var(--border-subtle)' }}>
                          <div className="section-tag" style={{ fontSize: '0.7rem', color: 'var(--accent-cyan-light)', marginBottom: '0.35rem' }}>ENGINEERING SOLUTION</div>
                          <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                            {sys.solution?.description || sys.summary}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Tab 2: Key Contributions */}
                    {currentTab === 'contributions' && (
                      <div style={{ background: 'var(--bg-tertiary)', padding: '1.25rem', borderRadius: '6px', border: '1px solid var(--border-subtle)' }}>
                        <div className="section-tag" style={{ fontSize: '0.7rem', marginBottom: '0.75rem' }}>CORE ENGINEERING CONTRIBUTIONS</div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                          {sys.keyContributions.map((contrib, cIdx) => (
                            <div key={cIdx} style={{ display: 'flex', alignItems: 'baseline', gap: '0.6rem', fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                              <span style={{ color: 'var(--accent-cyan)' }}>›</span>
                              <span>{contrib}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tab 3: Technical Decisions */}
                    {currentTab === 'decisions' && (
                      <div className="grid-2" style={{ gap: '1.25rem' }}>
                        {sys.technicalDecisions.map((dec, dIdx) => (
                          <div key={dIdx} style={{ background: 'var(--bg-tertiary)', padding: '1.25rem', borderRadius: '6px', border: '1px solid var(--border-subtle)' }}>
                            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent-cyan-light)', fontWeight: 600, marginBottom: '0.35rem' }}>
                              DECISION: {dec.decision}
                            </div>
                            <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                              <strong style={{ color: 'var(--text-primary)' }}>Rationale: </strong>
                              {dec.reason}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tab 4: Natural Language Automation Case Study (Service Autopilot Highlight) */}
                    {currentTab === 'nl-automation' && sys.naturalLanguageAutomation && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ background: 'rgba(6, 182, 212, 0.04)', padding: '1.25rem', borderRadius: '6px', border: '1px solid rgba(6, 182, 212, 0.25)' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                            <Sparkles size={16} style={{ color: 'var(--accent-cyan)' }} />
                            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                              {sys.naturalLanguageAutomation.title}
                            </h4>
                          </div>
                          <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', margin: 0 }}>
                            {sys.naturalLanguageAutomation.sublabel}
                          </p>
                        </div>

                        <div className="grid-2" style={{ gap: '1.25rem' }}>
                          {/* BEFORE */}
                          <div style={{ background: 'rgba(245, 158, 11, 0.03)', padding: '1.25rem', borderRadius: '6px', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#fbbf24', fontWeight: 600, marginBottom: '0.75rem' }}>
                              <span>[BEFORE] MANUAL TRIGGER WORKFLOW</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '0.75rem' }}>
                              {sys.naturalLanguageAutomation.before.steps.map((step, sIdx) => (
                                <div key={sIdx} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                                  {step}
                                </div>
                              ))}
                            </div>
                            <div style={{ fontSize: '0.78rem', color: 'var(--accent-amber)', borderTop: '1px solid rgba(245, 158, 11, 0.15)', paddingTop: '0.5rem' }}>
                              <strong>Friction: </strong> {sys.naturalLanguageAutomation.before.painPoint}
                            </div>
                          </div>

                          {/* AFTER */}
                          <div style={{ background: 'rgba(16, 185, 129, 0.03)', padding: '1.25rem', borderRadius: '6px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#34d399', fontWeight: 600, marginBottom: '0.75rem' }}>
                              <Bot size={14} />
                              <span>[AFTER] AI NATURAL LANGUAGE INTERPRETATION</span>
                            </div>
                            <div style={{ background: 'var(--bg-secondary)', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--border-subtle)', marginBottom: '0.75rem' }}>
                              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-tertiary)', marginBottom: '0.2rem' }}>USER PROMPT:</div>
                              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-cyan-light)', fontWeight: 600 }}>
                                "{sys.naturalLanguageAutomation.after.userPrompt}"
                              </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', marginBottom: '0.75rem' }}>
                              {sys.naturalLanguageAutomation.after.aiInterpretation.actionsGenerated.map((action, aIdx) => (
                                <div key={aIdx} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#a7f3d0' }}>
                                  ✓ {action}
                                </div>
                              ))}
                            </div>
                            <div style={{ fontSize: '0.78rem', color: '#34d399', borderTop: '1px solid rgba(16, 185, 129, 0.15)', paddingTop: '0.5rem' }}>
                              <strong>Benefit: </strong> {sys.naturalLanguageAutomation.after.benefit}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SystemsSection;
