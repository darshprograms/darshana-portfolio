import React, { useState } from 'react';
import { Layers, Server, Cpu, Database, ArrowRight, ShieldCheck, HelpCircle, CheckCircle2, ChevronRight, ChevronDown, ChevronUp, Activity, Sparkles } from 'lucide-react';
import { architecturePatterns } from '../../data/architecturePatterns';

const ArchitectureSection = () => {
  const [expandedPatternId, setExpandedPatternId] = useState(architecturePatterns[0].id);
  const [selectedNodeMap, setSelectedNodeMap] = useState({});

  const toggleExpandPattern = (id) => {
    setExpandedPatternId(prev => prev === id ? null : id);
  };

  const handleSelectNode = (patternId, nodeId) => {
    setSelectedNodeMap(prev => ({
      ...prev,
      [patternId]: nodeId
    }));
  };

  return (
    <section id="architecture" className="section-padding" style={{ background: 'linear-gradient(180deg, #0a0e17 0%, #0e1526 50%, #0a0e17 100%)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div className="section-tag">SYSTEM ARCHITECTURE // PRODUCTION PATTERNS</div>
          <h2 className="section-heading">
            Enterprise Architecture & Data Flows
          </h2>
          <p className="section-desc">
            Verified architectural patterns implemented across production systems. Click any pattern box to expand its subsystem pipeline and inspect node purpose, technology, and production usage.
          </p>
        </div>

        {/* Architecture Pattern Boxes (Each self-contained with its own pipeline & inspector inside) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {architecturePatterns.map((pat) => {
            const isExpanded = expandedPatternId === pat.id;
            const activeNodeId = selectedNodeMap[pat.id] || pat.nodes[0]?.id;
            const activeNode = pat.nodes.find(n => n.id === activeNodeId) || pat.nodes[0];

            return (
              <div
                key={pat.id}
                className={`eng-card ${isExpanded ? 'eng-corner-accents' : ''}`}
                style={{
                  background: isExpanded ? '#0a0d14' : 'var(--bg-secondary)',
                  border: `1px solid ${isExpanded ? 'var(--accent-cyan)' : 'var(--border-subtle)'}`,
                  boxShadow: isExpanded ? '0 0 25px rgba(6, 182, 212, 0.2)' : 'none',
                  transition: 'all 0.2s ease',
                  overflow: 'hidden'
                }}
              >
                {/* Header (Click to Expand / Collapse) */}
                <div
                  onClick={() => toggleExpandPattern(pat.id)}
                  style={{
                    padding: '1.35rem 1.5rem',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem',
                    flexWrap: 'wrap'
                  }}
                >
                  <div style={{ flexGrow: 1, maxWidth: '820px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
                      <span className="tech-badge tech-badge-cyan" style={{ fontSize: '0.68rem', fontWeight: 600 }}>
                        {pat.nodes.length} SUBSYSTEM NODES
                      </span>
                      {isExpanded && (
                        <span className="tech-badge tech-badge-emerald" style={{ fontSize: '0.65rem' }}>
                          <span className="status-dot status-dot-emerald" />
                          <span>ACTIVE PIPELINE</span>
                        </span>
                      )}
                    </div>

                    <h3 style={{ fontSize: '1.12rem', fontWeight: 700, color: isExpanded ? 'var(--text-primary)' : 'var(--text-secondary)', marginBottom: '0.35rem', lineHeight: 1.3 }}>
                      {pat.title}
                    </h3>

                    <p style={{ fontSize: '0.82rem', color: 'var(--text-tertiary)', lineHeight: 1.45, margin: 0 }}>
                      {pat.description}
                    </p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: isExpanded ? 'var(--accent-cyan-light)' : 'var(--text-tertiary)', whiteSpace: 'nowrap' }}>
                      {isExpanded ? 'COLLAPSE' : 'EXPAND ARCHITECTURE'}
                    </span>
                    {isExpanded ? (
                      <ChevronUp size={18} style={{ color: 'var(--accent-cyan)' }} />
                    ) : (
                      <ChevronDown size={18} style={{ color: 'var(--text-tertiary)' }} />
                    )}
                  </div>
                </div>

                {/* Expanded Inside: Subsystem Nodes Flow Pipeline & Node Inspector */}
                {isExpanded && (
                  <div style={{ borderTop: '1px solid var(--border-subtle)', padding: '1.5rem', background: 'var(--bg-tertiary)', animation: 'archFadeIn 0.22s ease-out' }}>
                    {/* Pipeline Subheader */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Layers size={15} style={{ color: 'var(--accent-cyan)' }} />
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent-cyan-light)', fontWeight: 600 }}>
                          INTERACTIVE DATA FLOW // SELECT ANY NODE TO INSPECT
                        </span>
                      </div>
                      <div className="tech-badge tech-badge-emerald" style={{ fontSize: '0.65rem' }}>
                        <span className="status-dot status-dot-emerald" />
                        <span>CV ATTRIBUTION VERIFIED</span>
                      </div>
                    </div>

                    {/* Nodes Pipeline Flow */}
                    <div className="arch-nodes-grid" style={{ display: 'grid', gap: '0.75rem', marginBottom: '1.25rem' }}>
                      {pat.nodes.map((node, index) => {
                        const isNodeSelected = activeNode?.id === node.id;
                        return (
                          <div
                            key={node.id}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSelectNode(pat.id, node.id);
                            }}
                            className={`arch-node ${isNodeSelected ? 'selected' : ''}`}
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'space-between',
                              padding: '0.85rem',
                              minHeight: '85px',
                              cursor: 'pointer',
                              background: isNodeSelected ? 'rgba(6, 182, 212, 0.16)' : 'var(--bg-secondary)',
                              border: `1px solid ${isNodeSelected ? 'var(--accent-cyan)' : 'var(--border-subtle)'}`,
                              borderRadius: '6px',
                              boxShadow: isNodeSelected ? '0 0 15px rgba(6, 182, 212, 0.25)' : 'none',
                              transition: 'all 0.15s ease'
                            }}
                          >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-tertiary)' }}>
                                0{index + 1}
                              </span>
                              {isNodeSelected && (
                                <span className="status-dot status-dot-cyan" />
                              )}
                            </div>

                            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.84rem', color: isNodeSelected ? 'var(--accent-cyan-light)' : 'var(--text-primary)', lineHeight: 1.25, marginBottom: '0.3rem' }}>
                              {node.label}
                            </div>

                            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-tertiary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                              {node.tech}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Node Inspector Details Panel (Displayed directly inside this box) */}
                    {activeNode && (
                      <div className="inspector-panel" style={{ background: 'var(--bg-secondary)', border: '1px solid rgba(6, 182, 212, 0.35)', padding: '1.25rem', borderRadius: '6px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.85rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.65rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                          <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem', flexWrap: 'wrap' }}>
                              <span className="tech-badge tech-badge-cyan" style={{ fontSize: '0.68rem', fontWeight: 600 }}>
                                NODE_INSPECTOR
                              </span>
                              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                                {activeNode.label}
                              </span>
                            </div>
                            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--accent-cyan-light)' }}>
                              TECH: {activeNode.tech}
                            </div>
                          </div>

                          <div className="tech-badge tech-badge-emerald" style={{ fontSize: '0.68rem' }}>
                            VERIFIED IN CV
                          </div>
                        </div>

                        <div className="arch-details-grid" style={{ display: 'grid', gap: '0.85rem' }}>
                          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '0.85rem', borderRadius: '6px', border: '1px solid var(--border-subtle)' }}>
                            <div className="section-tag" style={{ fontSize: '0.68rem', marginBottom: '0.35rem' }}>SUBSYSTEM PURPOSE</div>
                            <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                              {activeNode.purpose}
                            </p>
                          </div>

                          <div style={{ background: 'rgba(6, 182, 212, 0.03)', padding: '0.85rem', borderRadius: '6px', border: '1px solid rgba(6, 182, 212, 0.2)' }}>
                            <div className="section-tag" style={{ fontSize: '0.68rem', color: 'var(--accent-cyan-light)', marginBottom: '0.35rem' }}>PRODUCTION IMPLEMENTATION</div>
                            <p style={{ fontSize: '0.84rem', color: 'var(--text-primary)', fontWeight: 500, lineHeight: 1.5, marginBottom: '0.25rem' }}>
                              {activeNode.whereUsed}
                            </p>
                            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-tertiary)' }}>
                              Project: {activeNode.relevantProject}
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

      <style>{`
        .arch-nodes-grid {
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        }

        .arch-details-grid {
          grid-template-columns: repeat(2, 1fr);
        }

        @media (max-width: 640px) {
          .arch-nodes-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .arch-details-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 420px) {
          .arch-nodes-grid {
            grid-template-columns: 1fr;
          }
        }

        @keyframes archFadeIn {
          from {
            opacity: 0;
            transform: translateY(-6px);
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

export default ArchitectureSection;
