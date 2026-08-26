import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Terminal, Send, X, CornerDownLeft, ArrowRight, RefreshCw, Cpu, Layers } from 'lucide-react';
import { suggestedQuestions, queryPortfolioAI } from '../../data/askAiKnowledge';

const AskPortfolioModal = ({ isOpen, onClose, onSelectSection }) => {
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      role: 'assistant',
      content: `Hello! I am Darshana's **Portfolio AI Assistant**. 

I am strictly grounded in her verified 6+ years of engineering experience across **.NET Core, C#, AWS Serverless, Microservices, React, and Generative AI**.

Click any suggested question below or enter your technical inquiry:`
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 80);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSend = async (queryText) => {
    const q = queryText || inputValue;
    if (!q.trim() || isLoading) return;

    const userMsg = {
      id: Date.now().toString(),
      role: 'user',
      content: q
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const responseText = await queryPortfolioAI(q);
      
      const assistantMsg = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: responseText
      };

      setMessages(prev => [...prev, assistantMsg]);
    } catch (err) {
      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: 'An error occurred while evaluating this query. Please retry.'
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const renderFormattedContent = (content) => {
    const lines = content.split('\n');
    return lines.map((line, idx) => {
      if (line.startsWith('### ')) {
        return (
          <h4 key={idx} style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-primary)', margin: '0.75rem 0 0.35rem 0' }}>
            {line.replace('### ', '')}
          </h4>
        );
      }
      if (line.startsWith('- ')) {
        return (
          <div key={idx} style={{ display: 'flex', alignItems: 'baseline', gap: '0.45rem', margin: '0.2rem 0', fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
            <span style={{ color: 'var(--accent-cyan)' }}>›</span>
            <span>{formatInlineMarkdown(line.substring(2))}</span>
          </div>
        );
      }
      if (line.match(/^\d+\.\s/)) {
        const num = line.match(/^\d+\./)[0];
        return (
          <div key={idx} style={{ display: 'flex', alignItems: 'baseline', gap: '0.45rem', margin: '0.25rem 0', fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
            <span style={{ color: 'var(--accent-cyan-light)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>{num}</span>
            <span>{formatInlineMarkdown(line.replace(/^\d+\.\s/, ''))}</span>
          </div>
        );
      }
      if (!line.trim()) {
        return <div key={idx} style={{ height: '0.4rem' }} />;
      }
      return (
        <p key={idx} style={{ margin: '0.3rem 0', fontSize: '0.86rem', lineHeight: 1.55, color: 'var(--text-secondary)' }}>
          {formatInlineMarkdown(line)}
        </p>
      );
    });
  };

  const formatInlineMarkdown = (text) => {
    const parts = text.split(/(\*\*.*?\*\*|\*.*?\*|`.*?`)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith('*') && part.endsWith('*')) {
        return <em key={i} style={{ color: 'var(--accent-cyan-light)', fontStyle: 'italic' }}>{part.slice(1, -1)}</em>;
      }
      if (part.startsWith('`') && part.endsWith('`')) {
        return <code key={i} style={{ background: 'rgba(255,255,255,0.06)', padding: '0.1rem 0.35rem', borderRadius: '3px', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#67e8f9' }}>{part.slice(1, -1)}</code>;
      }
      return part;
    });
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div 
        className="modal-window eng-corner-accents" 
        onClick={e => e.stopPropagation()}
        style={{ 
          maxWidth: '740px', 
          height: '82vh', 
          background: 'var(--bg-secondary)', 
          border: '1px solid var(--border-default)',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Terminal Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 1.25rem', borderBottom: '1px solid var(--border-subtle)', background: 'var(--bg-secondary)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div className="brand-symbol" style={{ width: '22px', height: '22px', fontSize: '0.75rem' }}>
              <Sparkles size={12} />
            </div>
            <div>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                ASK MY PORTFOLIO
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--accent-cyan)', marginLeft: '0.5rem' }}>
                // GROUNDED_AI_ASSISTANT
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div className="tech-badge tech-badge-emerald" style={{ fontSize: '0.65rem' }}>
              <span className="status-dot status-dot-emerald" />
              <span>STRICT_CV_GROUNDED</span>
            </div>
            <button
              onClick={onClose}
              style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', display: 'flex' }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Suggested Queries Scroll Bar */}
        <div style={{ padding: '0.75rem 1.25rem', borderBottom: '1px solid var(--border-subtle)', background: 'rgba(255,255,255,0.015)', overflowX: 'auto', display: 'flex', gap: '0.5rem', whiteSpace: 'nowrap' }}>
          {suggestedQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              disabled={isLoading}
              style={{
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '4px',
                padding: '0.3rem 0.65rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                flexShrink: 0
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent-cyan)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
            >
              {q}
            </button>
          ))}
        </div>

        {/* Chat Stream History */}
        <div style={{ flexGrow: 1, overflowY: 'auto', padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {messages.map((msg) => {
            const isAssistant = msg.role === 'assistant';
            return (
              <div 
                key={msg.id} 
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column',
                  alignItems: isAssistant ? 'flex-start' : 'flex-end'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.25rem', fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: isAssistant ? 'var(--accent-cyan)' : 'var(--text-tertiary)' }}>
                  <span>{isAssistant ? 'PORTFOLIO_AI' : 'YOU'}</span>
                </div>

                <div 
                  style={{ 
                    maxWidth: '88%',
                    background: isAssistant ? 'var(--bg-tertiary)' : 'var(--bg-elevated)',
                    border: `1px solid ${isAssistant ? 'var(--border-subtle)' : 'rgba(6, 182, 212, 0.4)'}`,
                    borderRadius: '8px',
                    padding: '1rem 1.15rem'
                  }}
                >
                  {isAssistant ? renderFormattedContent(msg.content) : (
                    <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
                      {msg.content}
                    </p>
                  )}
                </div>
              </div>
            );
          })}

          {isLoading && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent-cyan-light)' }}>
              <span className="status-dot status-dot-cyan" />
              <span>Analyzing Darshana's verified experience data...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Query Input */}
        <div style={{ padding: '1rem 1.25rem', borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-secondary)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'var(--bg-tertiary)', border: '1px solid var(--border-default)', borderRadius: '6px', padding: '0.5rem 0.85rem' }}>
            <Terminal size={16} style={{ color: 'var(--accent-cyan)' }} />
            <input
              ref={inputRef}
              type="text"
              placeholder="Ask about .NET, AWS, airline systems, AI automation, or impact metrics..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isLoading}
              style={{
                flexGrow: 1,
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem'
              }}
            />
            <button
              onClick={() => handleSend()}
              disabled={isLoading || !inputValue.trim()}
              className="eng-btn-primary"
              style={{
                padding: '0.35rem 0.75rem',
                fontSize: '0.75rem',
                borderRadius: '4px',
                cursor: inputValue.trim() ? 'pointer' : 'default',
                opacity: inputValue.trim() ? 1 : 0.4
              }}
            >
              <Send size={13} />
              <span>Send</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskPortfolioModal;
