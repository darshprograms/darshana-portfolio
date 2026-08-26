import React from 'react';
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding" style={{ background: 'linear-gradient(180deg, #0a0e17 0%, #0e1526 100%)', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <div 
          className="eng-card eng-corner-accents" 
          style={{ 
            padding: '2.5rem', 
            background: 'var(--bg-secondary)', 
            border: '1px solid var(--border-default)',
            maxWidth: '960px',
            margin: '0 auto'
          }}
        >
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div className="section-tag" style={{ justifyContent: 'center', marginBottom: '0.5rem' }}>
              GET IN TOUCH // ENGINEERING COLLABORATION
            </div>
            <h2 className="section-heading" style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>
              BUILD SOMETHING USEFUL.
            </h2>
            <p className="section-desc" style={{ margin: '0 auto', fontSize: '0.95rem' }}>
              Open for senior backend engineering roles, AI system architecture discussions, and scalable product engineering.
            </p>
          </div>

          {/* Contact Details Grid (Email, LinkedIn, GitHub) */}
          <div className="grid-3" style={{ gap: '1rem', marginBottom: '2.5rem' }}>
            <a
              href="mailto:darshana.akadkar@gmail.com"
              className="eng-card"
              style={{
                padding: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                textDecoration: 'none',
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border-subtle)',
                transition: 'all 0.15s ease'
              }}
            >
              <div style={{ padding: '0.6rem', borderRadius: '6px', background: 'var(--accent-cyan-glow)', color: 'var(--accent-cyan)', flexShrink: 0 }}>
                <Mail size={20} />
              </div>
              <div style={{ flexGrow: 1, minWidth: 0 }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-tertiary)' }}>
                  EMAIL DIRECT
                </div>
                <div style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  darshana.akadkar@gmail.com
                </div>
              </div>
              <ArrowUpRight size={15} style={{ color: 'var(--text-tertiary)', flexShrink: 0 }} />
            </a>

            <a
              href="https://linkedin.com/in/darshana-akadkar"
              target="_blank"
              rel="noopener noreferrer"
              className="eng-card"
              style={{
                padding: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                textDecoration: 'none',
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border-subtle)',
                transition: 'all 0.15s ease'
              }}
            >
              <div style={{ padding: '0.6rem', borderRadius: '6px', background: 'rgba(56, 189, 248, 0.15)', color: 'var(--accent-blue)', flexShrink: 0 }}>
                <Linkedin size={20} />
              </div>
              <div style={{ flexGrow: 1, minWidth: 0 }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-tertiary)' }}>
                  LINKEDIN
                </div>
                <div style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  darshana-akadkar
                </div>
              </div>
              <ArrowUpRight size={15} style={{ color: 'var(--text-tertiary)', flexShrink: 0 }} />
            </a>

            <a
              href="https://github.com/darshprograms"
              target="_blank"
              rel="noopener noreferrer"
              className="eng-card"
              style={{
                padding: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                textDecoration: 'none',
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border-subtle)',
                transition: 'all 0.15s ease'
              }}
            >
              <div style={{ padding: '0.6rem', borderRadius: '6px', background: 'rgba(255, 255, 255, 0.06)', color: 'var(--text-primary)', flexShrink: 0 }}>
                <Github size={20} />
              </div>
              <div style={{ flexGrow: 1, minWidth: 0 }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-tertiary)' }}>
                  GITHUB
                </div>
                <div style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  darshprograms
                </div>
              </div>
              <ArrowUpRight size={15} style={{ color: 'var(--text-tertiary)', flexShrink: 0 }} />
            </a>
          </div>

          {/* Action CTAs */}
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="mailto:darshana.akadkar@gmail.com"
              className="eng-btn eng-btn-primary"
            >
              <Mail size={15} />
              <span>EMAIL ME</span>
            </a>
            <a
              href="https://linkedin.com/in/darshana-akadkar"
              target="_blank"
              rel="noopener noreferrer"
              className="eng-btn eng-btn-secondary"
            >
              <Linkedin size={15} />
              <span>LINKEDIN</span>
            </a>
            <a
              href="https://github.com/darshprograms"
              target="_blank"
              rel="noopener noreferrer"
              className="eng-btn eng-btn-secondary"
            >
              <Github size={15} />
              <span>GITHUB</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
