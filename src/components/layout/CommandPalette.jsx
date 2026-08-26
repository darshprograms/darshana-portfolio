import React, { useState, useEffect, useRef } from 'react';
import { Search, Terminal, Cpu, Layers, Sparkles, BookOpen, Briefcase, ExternalLink, X, ArrowRight, CornerDownLeft } from 'lucide-react';
import { systemsData } from '../../data/systemsData';
import { aiLabData } from '../../data/aiLabData';
import { thinkingData } from '../../data/thinkingData';

const CommandPalette = ({ isOpen, onClose, onSelectSection, onOpenAskAI }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Global keybinding listener (Cmd+K / Ctrl+K & Escape)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open handled by parent, or toggle
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Build searchable items list
  const baseItems = [
    { type: 'ACTION', title: 'Ask My Portfolio (AI Assistant)', sub: 'Query systems, experience & architecture', icon: Sparkles, action: () => { onClose(); onOpenAskAI(); } },
    { type: 'NAV', title: 'Overview & Command Center', sub: 'System telemetry, live streams', icon: Cpu, action: () => { onClose(); onSelectSection('overview'); } },
    { type: 'NAV', title: 'Systems & Architecture Case Studies', sub: 'Interactive node diagrams & trade-offs', icon: Layers, action: () => { onClose(); onSelectSection('systems'); } },
    { type: 'NAV', title: 'AI Laboratory & Experiments', sub: 'RAG, Vector search, Agentic workflows', icon: Sparkles, action: () => { onClose(); onSelectSection('ailab'); } },
    { type: 'NAV', title: 'How I Think (System Design Deep Dives)', sub: 'Engineering thought frameworks & constraints', icon: BookOpen, action: () => { onClose(); onSelectSection('thinking'); } },
    { type: 'NAV', title: 'Experience & Outcomes', sub: 'Problems solved, systems built, impact', icon: Briefcase, action: () => { onClose(); onSelectSection('experience'); } },
    { type: 'SYSTEM', title: 'Enterprise Multi-Tenant AI Knowledge Platform', sub: 'Hybrid RAG, Qdrant, Cross-Encoder Reranker', icon: Layers, action: () => { onClose(); onSelectSection('systems'); } },
    { type: 'SYSTEM', title: 'High-Throughput NDC Airline Retailing Engine', sub: '.NET Core 8, AWS Lambda, DynamoDB, p99 <120ms', icon: Layers, action: () => { onClose(); onSelectSection('systems'); } },
    { type: 'SYSTEM', title: 'Event-Driven Field Service & Invoicing Platform', sub: 'RabbitMQ, CQRS, Microservices, SQL Server', icon: Layers, action: () => { onClose(); onSelectSection('systems'); } },
    { type: 'EXP', title: 'EXP-01: Hybrid RAG + Reciprocal Rank Fusion', sub: 'Dense + BM25 Lexical vector scoring', icon: Sparkles, action: () => { onClose(); onSelectSection('ailab'); } },
    { type: 'THINK', title: 'Designing High-Concurrency Systems for 10M+ Users', sub: 'Bottlenecks, Caching, and Eventual Consistency', icon: BookOpen, action: () => { onClose(); onSelectSection('thinking'); } }
  ];

  const filteredItems = baseItems.filter(item => {
    const text = `${item.title} ${item.sub} ${item.type}`.toLowerCase();
    return text.includes(query.toLowerCase());
  });

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % (filteredItems.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].action();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div 
        className="modal-window eng-corner-accents" 
        onClick={e => e.stopPropagation()}
        style={{ maxWidth: '640px', background: '#0a0d14', border: '1px solid var(--border-default)' }}
      >
        {/* Search Header */}
        <div style={{ display: 'flex', alignItems: 'center', padding: '1rem 1.25rem', borderBottom: '1px solid var(--border-subtle)', gap: '0.75rem' }}>
          <Search size={18} className="text-secondary" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search systems, AI experiments, architectural thoughts... or type a command"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setSelectedIndex(0); }}
            onKeyDown={handleKeyDown}
            style={{
              flexGrow: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.9rem'
            }}
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              style={{ background: 'transparent', border: 'none', color: 'var(--text-tertiary)', cursor: 'pointer' }}
            >
              <X size={16} />
            </button>
          )}
          <kbd style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid var(--border-subtle)', borderRadius: '3px', padding: '0.1rem 0.35rem', fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: 'var(--text-tertiary)' }}>
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div style={{ maxHeight: '380px', overflowY: 'auto', padding: '0.5rem' }}>
          {filteredItems.length === 0 ? (
            <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
              NO_MATCHES_FOUND for "{query}"
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = selectedIndex === idx;
              return (
                <div
                  key={idx}
                  onClick={item.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.65rem 0.85rem',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    background: isSelected ? 'var(--accent-cyan-glow)' : 'transparent',
                    border: `1px solid ${isSelected ? 'rgba(6, 182, 212, 0.3)' : 'transparent'}`,
                    transition: 'all 0.1s ease',
                    marginBottom: '0.25rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                      padding: '0.4rem',
                      borderRadius: '4px',
                      background: isSelected ? 'rgba(6, 182, 212, 0.2)' : 'var(--bg-tertiary)',
                      color: isSelected ? 'var(--accent-cyan-light)' : 'var(--text-secondary)'
                    }}>
                      <Icon size={16} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 500, color: isSelected ? 'var(--text-primary)' : 'var(--text-primary)' }}>
                        {item.title}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)' }}>
                        {item.sub}
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span className={`tech-badge ${item.type === 'ACTION' ? 'tech-badge-cyan' : item.type === 'SYSTEM' ? 'tech-badge-emerald' : 'tech-badge'}`} style={{ fontSize: '0.65rem' }}>
                      {item.type}
                    </span>
                    {isSelected && (
                      <CornerDownLeft size={14} style={{ color: 'var(--accent-cyan)' }} />
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.6rem 1rem', background: 'rgba(0,0,0,0.3)', borderTop: '1px solid var(--border-subtle)', fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-tertiary)' }}>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>Esc Close</span>
          </div>
          <div style={{ color: 'var(--accent-cyan)' }}>
            COMMAND_CENTER // READY
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
