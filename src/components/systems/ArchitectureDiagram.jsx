import React, { useState } from 'react';
import { Cpu, Server, Database, Layers, ArrowRight, ShieldAlert, Zap, HelpCircle, CheckCircle2, ChevronRight, Info } from 'lucide-react';

const ArchitectureDiagram = ({ nodes, systemTitle }) => {
  const [selectedNodeId, setSelectedNodeId] = useState(nodes[0]?.id || null);

  const selectedNode = nodes.find(n => n.id === selectedNodeId) || nodes[0];

  return (
    <div className="arch-container eng-corner-accents" style={{ background: '#0a0d15', padding: '1.5rem', border: '1px solid var(--border-default)' }}>
      {/* Visualizer Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <Layers size={16} style={{ color: 'var(--accent-cyan)' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-primary)' }}>
            INTERACTIVE SYSTEM ARCHITECTURE // {systemTitle}
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-tertiary)' }}>
          <span className="status-dot status-dot-cyan" />
          <span>CLICK NODE TO INSPECT SUBSYSTEM</span>
        </div>
      </div>

      {/* Nodes Flow Pipeline (Responsive Flow) */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
        gap: '0.75rem', 
        marginBottom: '1.5rem',
        position: 'relative'
      }}>
        {nodes.map((node, index) => {
          const isSelected = selectedNode?.id === node.id;
          return (
            <div
              key={node.id}
              onClick={() => setSelectedNodeId(node.id)}
              className={`arch-node ${isSelected ? 'selected' : ''}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '0.85rem',
                minHeight: '90px',
                cursor: 'pointer',
                background: isSelected ? 'rgba(6, 182, 212, 0.12)' : 'var(--bg-tertiary)',
                borderColor: isSelected ? 'var(--accent-cyan)' : 'var(--border-subtle)',
                transition: 'all 0.15s ease'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-tertiary)' }}>
                  0{index + 1}
                </span>
                {isSelected && (
                  <span className="status-dot status-dot-cyan" />
                )}
              </div>

              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.82rem', color: isSelected ? 'var(--accent-cyan-light)' : 'var(--text-primary)', lineHeight: 1.25, marginBottom: '0.35rem' }}>
                {node.label}
              </div>

              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-tertiary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {node.tech.split('/')[0]}
              </div>
            </div>
          );
        })}
      </div>

      {/* Node Deep Inspection Panel */}
      {selectedNode && (
        <div className="inspector-panel" style={{ background: '#0e121b', border: '1px solid rgba(6, 182, 212, 0.3)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                <span className="tech-badge tech-badge-cyan" style={{ fontSize: '0.7rem' }}>
                  NODE_INSPECTOR
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  {selectedNode.label}
                </span>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-cyan-light)' }}>
                TECH: {selectedNode.tech}
              </div>
            </div>

            <div className="tech-badge" style={{ fontSize: '0.68rem' }}>
              TYPE: {selectedNode.type.toUpperCase()}
            </div>
          </div>

          <div className="grid-2" style={{ gap: '1rem' }}>
            {/* Purpose & Why Exists */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '0.85rem', borderRadius: '6px', border: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-secondary)', marginBottom: '0.35rem', fontWeight: 600 }}>
                  <Info size={13} style={{ color: 'var(--accent-blue)' }} />
                  <span>PURPOSE & SUBSYSTEM ROLE</span>
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {selectedNode.purpose}
                </p>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '0.85rem', borderRadius: '6px', border: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-secondary)', marginBottom: '0.35rem', fontWeight: 600 }}>
                  <HelpCircle size={13} style={{ color: 'var(--accent-cyan)' }} />
                  <span>WHY THIS EXISTS</span>
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {selectedNode.whyExists}
                </p>
              </div>
            </div>

            {/* Bottlenecks & Scaling Strategy */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ background: 'rgba(245, 158, 11, 0.04)', padding: '0.85rem', borderRadius: '6px', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#fbbf24', marginBottom: '0.35rem', fontWeight: 600 }}>
                  <ShieldAlert size={13} style={{ color: 'var(--accent-amber)' }} />
                  <span>POTENTIAL BOTTLENECK</span>
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {selectedNode.bottleneck}
                </p>
              </div>

              <div style={{ background: 'rgba(16, 185, 129, 0.04)', padding: '0.85rem', borderRadius: '6px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#34d399', marginBottom: '0.35rem', fontWeight: 600 }}>
                  <Zap size={13} style={{ color: 'var(--accent-emerald)' }} />
                  <span>SCALING STRATEGY</span>
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {selectedNode.scalingStrategy}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArchitectureDiagram;
