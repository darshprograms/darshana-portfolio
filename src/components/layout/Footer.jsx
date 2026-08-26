import React from 'react';
import { Terminal, ShieldCheck, Activity, Github, Linkedin, Mail } from 'lucide-react';

const Footer = ({ onOpenAskAI, onReplayBoot }) => {
  return (
    <footer className="footer-bar">
      <div className="container footer-content">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div className="brand-symbol" style={{ width: '22px', height: '22px', fontSize: '0.75rem' }}>
            //
          </div>
          <div>
            <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>DARSHANA AKADKAR</span>
            <span style={{ margin: '0 0.5rem', opacity: 0.4 }}>|</span>
            <span style={{ color: 'var(--text-tertiary)' }}>DEVELOPER CONTROL PANEL</span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <div className="tech-badge tech-badge-emerald">
            <span className="status-dot status-dot-emerald" />
            <span>SYS_ONLINE // 6+ YRS</span>
          </div>
          {onReplayBoot && (
            <button
              onClick={onReplayBoot}
              className="tech-badge tech-badge-cyan"
              style={{ cursor: 'pointer', background: 'rgba(6, 182, 212, 0.1)' }}
              title="Replay futuristic system boot animation"
            >
              <span>⚡ REPLAY BOOT</span>
            </button>
          )}
          <button
            onClick={onOpenAskAI}
            className="tech-badge"
            style={{ cursor: 'pointer', background: 'transparent' }}
          >
            <span>ASK PORTFOLIO AI</span>
          </button>
        </div>

        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <a
            href="https://github.com/darshprograms"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text-secondary)', transition: 'color 0.15s' }}
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="https://linkedin.com/in/darshana-akadkar"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text-secondary)', transition: 'color 0.15s' }}
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:darshana.akadkar@gmail.com"
            style={{ color: 'var(--text-secondary)', transition: 'color 0.15s' }}
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
