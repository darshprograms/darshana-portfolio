import React from 'react';
import { ExternalLink, Github, Globe, QrCode, Smartphone, ShoppingCart, MessageSquare, CreditCard } from 'lucide-react';

const OutsideWorkSection = () => {
  const project = {
    title: "The Aangan Cafe",
    tagline: "Digital Menu + Ordering + Reservation Platform",
    liveUrl: "https://the-aangan-cafe.vercel.app/",
    githubUrl: "https://github.com/darshprograms/the-aangan-cafe",
    techStack: ["React.js", "Vite", "Tailwind CSS", "Framer Motion", "UPI Integration", "WhatsApp Integration"],
    features: [
      "QR-code based digital menu for instant contactless access at cafe tables.",
      "Table reservation system with automated customer information collection.",
      "Full food ordering cart with real-time bill calculations.",
      "Integrated UPI payment support for seamless digital transactions.",
      "Automated order dispatch: formatted order details and customer info sent directly to owner via WhatsApp."
    ]
  };

  return (
    <section className="section-padding" style={{ background: 'linear-gradient(180deg, #0a0e17 0%, #0e1526 50%, #0a0e17 100%)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div className="section-tag">SHIPPED INDEPENDENTLY // BUILT OUTSIDE WORK</div>
          <h2 className="section-heading">
            Personal Engineering Product
          </h2>
          <p className="section-desc">
            A real-world production web application engineered and shipped independently.
          </p>
        </div>

        {/* Shipped Project Card */}
        <div className="eng-card eng-corner-accents" style={{ padding: '2rem', background: 'var(--bg-secondary)', border: '1px solid var(--border-default)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.25rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1.25rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                <span className="tech-badge tech-badge-emerald">SHIPPED & LIVE</span>
                <span className="tech-badge tech-badge-cyan">WEB APPLICATION</span>
              </div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                {project.title}
              </h3>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent-cyan-light)', margin: 0 }}>
                {project.tagline}
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="eng-btn eng-btn-primary"
              >
                <ExternalLink size={15} />
                <span>LIVE DEMO</span>
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="eng-btn eng-btn-secondary"
              >
                <Github size={15} />
                <span>VIEW SOURCE</span>
              </a>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid-2" style={{ gap: '1.25rem', marginBottom: '1.5rem' }}>
            <div style={{ background: 'var(--bg-tertiary)', padding: '1.25rem', borderRadius: '6px', border: '1px solid var(--border-subtle)' }}>
              <div className="section-tag" style={{ fontSize: '0.7rem', marginBottom: '0.6rem' }}>SHIPPED PRODUCT CAPABILITIES</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {project.features.map((feat, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--accent-cyan)' }}>›</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: 'var(--bg-tertiary)', padding: '1.25rem', borderRadius: '6px', border: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div className="section-tag" style={{ fontSize: '0.7rem', marginBottom: '0.6rem' }}>TECHNOLOGY STACK</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="tech-badge" style={{ fontSize: '0.72rem' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ background: '#05070d', padding: '0.85rem', borderRadius: '4px', border: '1px solid var(--border-subtle)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
                <span style={{ color: '#34d399' }}>● QR CODE</span> → Instant Table Menu → Cart → UPI / WhatsApp Dispatch
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutsideWorkSection;
