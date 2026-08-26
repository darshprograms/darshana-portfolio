import React, { useState } from 'react';
import Navigation from './components/layout/Navigation';
import SystemBootScreen from './components/boot/SystemBootScreen';
import ControlPanelHero from './components/home/ControlPanelHero';
import ControlPanelGrid from './components/home/ControlPanelGrid';
import SystemsSection from './components/systems/SystemsSection';
import ArchitectureSection from './components/architecture/ArchitectureSection';
import AILabSection from './components/ai-lab/AILabSection';
import TechMapSection from './components/stack/TechMapSection';
import DomainMapSection from './components/domains/DomainMapSection';
import CareerPathSection from './components/experience/CareerPathSection';
import OutsideWorkSection from './components/projects/OutsideWorkSection';
import AboutCredentialsSection from './components/about/AboutCredentialsSection';
import ContactSection from './components/contact/ContactSection';
import AskPortfolioModal from './components/assistant/AskPortfolioModal';
import Footer from './components/layout/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('overview');
  const [isAskAIOpen, setIsAskAIOpen] = useState(false);
  const [showBootScreen, setShowBootScreen] = useState(true);

  const handleSelectSection = (sectionId) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-layout" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Interactive Futuristic Boot Sequence & Voice Welcome */}
      {showBootScreen && (
        <SystemBootScreen onComplete={() => setShowBootScreen(false)} />
      )}

      {/* 1. Persistent Developer Control Panel Navigation */}
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenAskAI={() => setIsAskAIOpen(true)}
      />

      <main style={{ flexGrow: 1 }}>
        {/* 2. Identity & Hero Statement */}
        <ControlPanelHero
          onExploreSystems={() => handleSelectSection('systems')}
          onOpenAskAI={() => setIsAskAIOpen(true)}
        />

        {/* 3. Developer Control Panel Grid & Impact Dashboard */}
        <ControlPanelGrid
          onSelectSection={handleSelectSection}
        />

        {/* 4. Career Experience & Production Systems */}
        <SystemsSection />

        {/* 5. Interactive Architecture Visualizer */}
        <ArchitectureSection />

        {/* 6. AI Engineering Laboratory (Professional vs Personal Lab) */}
        <AILabSection />

        {/* 7. Technical Arsenal Map */}
        <TechMapSection />

        {/* 8. Client Ecosystem & Domain Map */}
        <DomainMapSection
          onSelectSystem={(id) => handleSelectSection('systems')}
        />

        {/* 9. Career Progression Pathway */}
        <CareerPathSection />

        {/* 10. Shipped Personal Product (The Aangan Cafe) */}
        <OutsideWorkSection />

        {/* 11. Profile, Education & Certifications */}
        <AboutCredentialsSection />

        {/* 12. Engineering Contact Panel */}
        <ContactSection />
      </main>

      {/* 13. Telemetry Footer */}
      <Footer 
        onOpenAskAI={() => setIsAskAIOpen(true)}
        onReplayBoot={() => setShowBootScreen(true)}
      />

      {/* 14. Ask My Portfolio Grounded AI Assistant Modal */}
      <AskPortfolioModal
        isOpen={isAskAIOpen}
        onClose={() => setIsAskAIOpen(false)}
        onSelectSection={handleSelectSection}
      />
    </div>
  );
}

export default App;
