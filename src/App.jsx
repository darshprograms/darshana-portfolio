import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
    const [showContact, setShowContact] = useState(false);

    return (
        <div className="app-container">
            <Navbar onContact={() => setShowContact(true)} />
            <main>
                <Hero onContact={() => setShowContact(true)} />
                <Skills />
                <Experience />
                <Projects />
                <Contact isOpen={showContact} onClose={() => setShowContact(false)} />
                <footer className="footer">
                    <p>© {new Date().getFullYear()} Built by Darshana</p>
                </footer>
            </main>
        </div>
    )
}

export default App
