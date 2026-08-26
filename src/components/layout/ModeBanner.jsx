import React from 'react';
import { UserCheck, Cpu, ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Layers, Terminal } from 'lucide-react';

const ModeBanner = ({ viewMode, setViewMode, onJumpTo }) => {
  return (
    <div 
      style={{ 
        background: viewMode === 'overview' ? 'rgba(6, 182, 212, 0.06)' : 'rgba(16, 185, 129, 0.06)',
        borderBottom: `1px solid ${viewMode === 'overview' ? 'rgba(6, 182, 212, 0.25)' : 'rgba(16, 185, 129, 0.25)'}`,
        padding: '0.65rem 1rem',
        transition: 'all 0.25s ease'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          {viewMode === 'overview' ? (
            <div className="tech-badge tech-badge-cyan" style={{ fontSize: '0.72rem', padding: '0.2rem 0.55rem' }}>
              <UserCheck size={13} style={{ marginRight: '0.35rem' }} />
              <span>RECRUITER OVERVIEW MODE</span>
            </div>
          ) : (
            <div className="tech-badge tech-badge-emerald" style={{ fontSize: '0.72rem', padding: '0.2rem 0.55rem' }}>
              <Cpu size={13} style={{ marginRight: '0.35rem' }} />
              <span>ENGINEER DEEP DIVE MODE</span>
            </div>
          )}

          <p style={{ margin: 0, fontSize: '0.8rem', color: viewMode === 'overview' ? 'var(--accent-cyan-light)' : '#a7f3d0', fontFamily: 'var(--font-mono)' }}>
            {viewMode === 'overview' 
              ? '30-second executive scan: 6+ yrs exp, enterprise impact metrics, clients (WHO, Qantas, Lufthansa) & core stack.' 
              : 'Full architectural data flows, system design trade-offs, natural language automation & AI lab records.'}
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          {viewMode === 'overview' ? (
            <>
              <button 
                onClick={() => onJumpTo('systems')} 
                style={{ 
                  fontFamily: 'var(--font-mono)', 
                  fontSize: '0.72rem', 
                  padding: '0.2rem 0.6rem', 
                  background: 'rgba(6, 182, 212, 0.15)', 
                  color: 'var(--accent-cyan-light)', 
                  border: '1px solid rgba(6, 182, 212, 0.3)', 
                  borderRadius: '4px',
                  cursor: 'pointer' 
                }}
              >
                View Systems
              </button>
              <button 
                onClick={() => setViewMode('deep-dive')} 
                style={{ 
                  fontFamily: 'var(--font-mono)', 
                  fontSize: '0.72rem', 
                  padding: '0.2rem 0.6rem', 
                  background: 'transparent', 
                  color: 'var(--text-secondary)', 
                  border: '1px solid var(--border-subtle)', 
                  borderRadius: '4px',
                  cursor: 'pointer' 
                }}
              >
                Switch to Deep Dive →
              </button>
            </>
          ) : (
            <>
              <button 
                onClick={() => onJumpTo('architecture')} 
                style={{ 
                  fontFamily: 'var(--font-mono)', 
                  fontSize: '0.72rem', 
                  padding: '0.2rem 0.6rem', 
                  background: 'rgba(16, 185, 129, 0.15)', 
                  color: '#34d399', 
                  border: '1px solid rgba(16, 185, 129, 0.3)', 
                  borderRadius: '4px',
                  cursor: 'pointer' 
                }}
              >
                Inspect Architecture
              </button>
              <button 
                onClick={() => setViewMode('overview')} 
                style={{ 
                  fontFamily: 'var(--font-mono)', 
                  fontSize: '0.72rem', 
                  padding: '0.2rem 0.6rem', 
                  background: 'transparent', 
                  color: 'var(--text-secondary)', 
                  border: '1px solid var(--border-subtle)', 
                  borderRadius: '4px',
                  cursor: 'pointer' 
                }}
              >
                Switch to Recruiter Scan →
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModeBanner;
