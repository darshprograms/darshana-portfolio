import React, { useState } from 'react';
import { Layers, Server, Cpu, Database, ArrowRight, ShieldCheck, HelpCircle, CheckCircle2, ChevronRight, Activity } from 'lucide-react';
import { architecturePatterns } from '../../data/architecturePatterns';

const ArchitectureSection = () => {
  const [activePatternId, setActivePatternId] = useState(architecturePatterns[0].id);
  const [selectedNodeMap, setSelectedNodeMap] = useState({});

  const activePattern = architecturePatterns.find(p => p.id === activePatternId) || architecturePatterns[0];
  const selectedNodeId = selectedNodeMap[activePattern.id] || activePattern.nodes[0]?.id;
  const selectedNode = activePattern.nodes.find(n => n.id === selectedNodeId) || activePattern.nodes[0];

  const handleSelectNode = (patternId, nodeId) => {
    setSelectedNodeMap(prev => ({ ...prev, [patternId]: nodeId }));
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
            Verified architectural patterns implemented across production systems. Click any subsystem node to inspect its purpose, technology, and project usage.
          </p>
        </div>

        {/* Pattern Selector Tabs */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '1rem', 
          marginBottom: '2rem' 
        }}>
          {architecturePatterns.map((pat) => {
            const isSelected = activePattern.id === pat.id;
            return (
              <div
                key={pat.id}
                onClick={() => setActivePatternId(pat.id)}
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
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                  <span className="tech-badge tech-badge-cyan" style={{ fontSize: '0.65rem' }}>
                    {pat.nodes.length} SUBSYSTEM NODES
                  </span>
                  {isSelected && (
                    <span className="status-dot status-dot-cyan" />
                  )}
                </div>

                <h3 style={{ fontSize: '0.98rem', fontWeight: 600, color: isSelected ? 'var(--text-primary)' : 'var(--text-secondary)', marginBottom: '0.35rem', lineHeight: 1.3 }}>
                  {pat.title}
                </h3>

                <p style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)', lineHeight: 1.4, margin: 0 }}>
                  {pat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Interactive Visualizer Canvas */}
        <div className="eng-card" style={{ padding: '1.75rem', background: 'var(--bg-secondary)', border: '1px solid var(--border-default)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Layers size={16} style={{ color: 'var(--accent-cyan)' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                {activePattern.title}
              </span>
            </div>

            <div className="tech-badge tech-badge-emerald">
              <span className="status-dot status-dot-emerald" />
              <span>CLICK NODE TO INSPECT CV ATTRIBUTION</span>
            </div>
          </div>

          {/* Sequential Nodes Flow Pipeline */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', 
            gap: '0.75rem', 
            marginBottom: '1.5rem' 
          }}>
            {activePattern.nodes.map((node, index) => {
              const isNodeSelected = selectedNode?.id === node.id;
              return (
                <div
                  key={node.id}
                  onClick={() => handleSelectNode(activePattern.id, node.id)}
                  className={`arch-node ${isNodeSelected ? 'selected' : ''}`}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '0.85rem',
                    minHeight: '90px',
                    cursor: 'pointer',
                    background: isNodeSelected ? 'rgba(6, 182, 212, 0.16)' : 'var(--bg-tertiary)',
                    borderColor: isNodeSelected ? 'var(--accent-cyan)' : 'var(--border-subtle)',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-tertiary)' }}>
                      0{index + 1}
                    </span>
                    {isNodeSelected && (
                      <span className="status-dot status-dot-cyan" />
                    )}
                  </div>

                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.84rem', color: isNodeSelected ? 'var(--accent-cyan-light)' : 'var(--text-primary)', lineHeight: 1.25, marginBottom: '0.35rem' }}>
                    {node.label}
                  </div>

                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-tertiary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {node.tech}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Node Inspector Panel */}
          {selectedNode && (
            <div className="inspector-panel" style={{ background: 'var(--bg-tertiary)', border: '1px solid rgba(6, 182, 212, 0.35)', padding: '1.25rem', borderRadius: '6px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <span className="tech-badge tech-badge-cyan" style={{ fontSize: '0.68rem' }}>
                      NODE_INSPECTOR
                    </span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      {selectedNode.label}
                    </span>
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-cyan-light)' }}>
                    TECH: {selectedNode.tech}
                  </div>
                </div>

                <div className="tech-badge tech-badge-emerald" style={{ fontSize: '0.68rem' }}>
                  VERIFIED IN CV
                </div>
              </div>

              <div className="grid-2" style={{ gap: '1rem' }}>
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '0.85rem', borderRadius: '6px', border: '1px solid var(--border-subtle)' }}>
                  <div className="section-tag" style={{ fontSize: '0.68rem', marginBottom: '0.35rem' }}>SUBSYSTEM PURPOSE</div>
                  <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    {selectedNode.purpose}
                  </p>
                </div>

                <div style={{ background: 'rgba(6, 182, 212, 0.03)', padding: '0.85rem', borderRadius: '6px', border: '1px solid rgba(6, 182, 212, 0.2)' }}>
                  <div className="section-tag" style={{ fontSize: '0.68rem', color: 'var(--accent-cyan-light)', marginBottom: '0.35rem' }}>PRODUCTION IMPLEMENTATION</div>
                  <p style={{ fontSize: '0.84rem', color: 'var(--text-primary)', fontWeight: 500, lineHeight: 1.5, marginBottom: '0.25rem' }}>
                    {selectedNode.whereUsed}
                  </p>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-tertiary)' }}>
                    Project: {selectedNode.relevantProject}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
