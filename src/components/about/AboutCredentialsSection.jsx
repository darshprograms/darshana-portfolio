import React from 'react';
import { User, GraduationCap, Award, ShieldCheck, Cpu, ArrowRight } from 'lucide-react';
import { credentialsData } from '../../data/credentialsData';

const AboutCredentialsSection = () => {
  return (
    <section id="about" className="section-padding" style={{ background: 'linear-gradient(180deg, #0a0e17 0%, #0e1526 50%, #0a0e17 100%)', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div className="section-tag">ENGINEER PROFILE & CREDENTIALS // ABOUT</div>
          <h2 className="section-heading">
            Background, Education & Certifications
          </h2>
          <p className="section-desc">
            Senior Software Engineer with 6+ years of enterprise experience building resilient backend, cloud, and AI systems.
          </p>
        </div>

        <div className="grid-2" style={{ gap: '1.5rem', marginBottom: '2rem' }}>
          {/* About Summary Card */}
          <div className="eng-card" style={{ padding: '1.75rem', background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div className="section-tag" style={{ fontSize: '0.7rem', marginBottom: '0.5rem' }}>POSITIONING & CORE IDENTITY</div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1rem' }}>
                Senior Software Engineer with <strong>6+ years of experience</strong> building enterprise-grade applications across <strong>Airlines</strong>, <strong>Healthcare</strong>, <strong>Automotive</strong>, <strong>Field Service</strong>, <strong>Renewable Energy</strong>, and <strong>Internal Tools</strong>.
              </p>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1rem' }}>
                Core technical focus includes <strong>backend engineering (.NET Core & C#)</strong>, <strong>microservices</strong>, <strong>AWS cloud systems</strong>, <strong>system architecture</strong>, <strong>React</strong>, and <strong>Generative AI integration</strong>.
              </p>
              <p style={{ fontSize: '0.92rem', color: 'var(--accent-cyan-light)', lineHeight: 1.65, margin: 0, fontFamily: 'var(--font-mono)' }}>
                "Currently exploring Generative AI, RAG, embeddings, conversational AI and agentic workflows."
              </p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
              {["Backend (.NET/C#)", "AWS Serverless", "Microservices", "System Design", "React.js", "Generative AI"].map((tag, idx) => (
                <span key={idx} className="tech-badge" style={{ fontSize: '0.7rem' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Education & Certifications Card */}
          <div className="eng-card" style={{ padding: '1.75rem', background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Education */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <GraduationCap size={16} style={{ color: 'var(--accent-cyan)' }} />
                <span className="section-tag" style={{ fontSize: '0.7rem', margin: 0 }}>EDUCATION</span>
              </div>

              {credentialsData.education.map((edu, idx) => (
                <div key={idx} style={{ background: 'var(--bg-tertiary)', padding: '1rem', borderRadius: '6px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.2rem' }}>
                    <h4 style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      {edu.degree} — {edu.major}
                    </h4>
                    <span className="tech-badge tech-badge-cyan" style={{ fontSize: '0.65rem' }}>
                      {edu.year}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0 }}>
                    {edu.institution}
                  </p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <Award size={16} style={{ color: '#34d399' }} />
                <span className="section-tag" style={{ fontSize: '0.7rem', color: '#34d399', margin: 0 }}>CERTIFICATIONS</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {credentialsData.certifications.map((cert, idx) => (
                  <div 
                    key={idx} 
                    style={{ 
                      background: 'var(--bg-tertiary)', 
                      padding: '0.85rem 1rem', 
                      borderRadius: '6px', 
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      gap: '0.5rem'
                    }}
                  >
                    <div>
                      <h4 style={{ fontSize: '0.86rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.15rem' }}>
                        {cert.title}
                      </h4>
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', margin: 0, fontFamily: 'var(--font-mono)' }}>
                        {cert.issuer} · {cert.date}
                      </p>
                    </div>
                    <span className="tech-badge tech-badge-emerald" style={{ fontSize: '0.65rem' }}>
                      {cert.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCredentialsSection;
