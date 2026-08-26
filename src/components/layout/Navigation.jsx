import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const Navigation = ({ activeSection, setActiveSection, onOpenAskAI }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'overview', label: 'OVERVIEW' },
    { id: 'systems', label: 'EXPERIENCE' },
    { id: 'ai-lab', label: 'AI LAB' },
    { id: 'architecture', label: 'ARCHITECTURE' },
    { id: 'experience', label: 'CAREER PATH' },
    { id: 'engineering', label: 'STACK' },
    { id: 'about', label: 'ABOUT' },
    { id: 'contact', label: 'CONNECT' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = ['overview', 'systems', 'ai-lab', 'architecture', 'experience', 'engineering', 'about', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="nav-header">
        <div className="container nav-container">
          {/* Identity & Status */}
          <a href="#overview" onClick={(e) => { e.preventDefault(); handleNavClick('overview'); }} className="nav-brand">
            <div className="brand-symbol">
              <span>//</span>
            </div>
            <div className="brand-meta">
              <span className="brand-title">DARSHANA AKADKAR</span>
              <span className="brand-subtitle">SENIOR SOFTWARE ENGINEER · 6+ YRS</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="nav-links-desktop" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`nav-item-btn ${isActive ? 'active' : ''}`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="nav-actions">
            {/* Prominent Global Ask AI Button */}
            <button
              onClick={onOpenAskAI}
              className="eng-btn-primary nav-ask-btn"
            >
              <Sparkles size={13} />
              <span>ASK AI</span>
            </button>

            {/* Mobile Menu Trigger (Hidden on Desktop) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-trigger eng-btn-ghost"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Control Panel Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer animate-fade-in" style={{ zIndex: 150 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <div className="nav-brand">
              <div className="brand-symbol">
                <span>//</span>
              </div>
              <div className="brand-meta">
                <span className="brand-title">DARSHANA AKADKAR</span>
                <span className="brand-subtitle">SENIOR SOFTWARE ENGINEER</span>
              </div>
            </div>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="eng-btn-ghost"
              style={{ padding: '0.35rem' }}
            >
              <X size={22} />
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', flexGrow: 1 }}>
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.85rem 1rem',
                    borderRadius: '6px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.88rem',
                    textAlign: 'left',
                    background: isActive ? 'var(--accent-cyan-glow)' : 'var(--bg-secondary)',
                    border: `1px solid ${isActive ? 'var(--accent-cyan)' : 'var(--border-subtle)'}`,
                    color: isActive ? 'var(--accent-cyan-light)' : 'var(--text-primary)',
                    cursor: 'pointer'
                  }}
                >
                  <span>{item.label}</span>
                  <span style={{ fontSize: '0.75rem', opacity: 0.5 }}>→</span>
                </button>
              );
            })}
          </div>

          <div style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="tech-badge tech-badge-emerald">
              <span className="status-dot status-dot-emerald" />
              <span>SYS_ONLINE // 6+ YRS EXP</span>
            </div>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenAskAI(); }}
              className="eng-btn-primary"
              style={{ padding: '0.4rem 0.8rem', fontSize: '0.75rem' }}
            >
              <Sparkles size={13} />
              <span>ASK AI</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
