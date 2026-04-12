import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Server, Database, Layout, Download } from 'lucide-react';

import profileImage from '../assets/profile.png';

const Hero = ({ onContact }) => {
    const traits = ["Problem Solver", "An Explorer", "AI Enthusiast", "Software Engineer", "Learner For Life"];
    const [traitIndex, setTraitIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const handleTyping = () => {
            const currentTrait = traits[traitIndex];

            if (isDeleting) {
                setCurrentText(prev => prev.substring(0, prev.length - 1));
                setTypingSpeed(50);
            } else {
                setCurrentText(prev => currentTrait.substring(0, prev.length + 1));
                setTypingSpeed(150);
            }

            if (!isDeleting && currentText === currentTrait) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && currentText === "") {
                setIsDeleting(false);
                setTraitIndex((prev) => (prev + 1) % traits.length);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [currentText, isDeleting, traitIndex, traits, typingSpeed]);

    return (
        <section id="about" className="hero">
            {/* Background Elements */}
            <div className="blob blob-purple" />
            <div className="blob blob-blue" />

            <div className="container">
                <div className="hero-grid">
                    {/* Left Side: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="hero-image-container"
                    >

                        <span className="hero-image-label bottom">
                            {currentText}
                            <span className="typing-cursor">|</span>
                        </span>
                        <div className="image-wrapper">
                            <div className="image-glow" />
                            <img src="/passportpic.jpg" alt="Darshana" className="hero-image" />
                        </div>
                        <p className="hero-image-tagline">
                            A problem solver, builder, and lifelong learner dedicated to creating impactful products that contribute to a better tomorrow.
                        </p>
                    </motion.div>

                    {/* Right Side: Content */}
                    <motion.div
                        className="hero-content"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="badge">
                            5+ Years Experience • Cloud & Web Applications
                        </span>

                        <h1 className="hero-title">
                            <span className="hero-greeting"> Hi, I'm <span className="gradient-text">Darshana</span></span>
                            Software Engineer
                        </h1>

                        <p className="hero-subtitle">
                            Combining 5+ years of enterprise .NET & C# experience with 2+ years of React ,Microservice architecture and AWS Serverless development, I design and build scalable, cloud-native applications using AWS Lambda, API Gateway, S3, and CloudWatch. I turn complex business problems into elegant technical solutions, collaborate closely with cross-functional teams in Agile environments, and actively contribute through code reviews and technical discussions to deliver secure, high-performance systems end to end.
                        </p>

                        <div className="cta-group">
                            <button className="btn btn-primary btn-multiline">
                                <div className="btn-text-col">
                                    <span>view</span>
                                    <span>my work</span>
                                </div>
                                <ArrowRight size={18} />
                            </button>
                            <button onClick={onContact} className="btn btn-secondary">
                                Contact Me
                            </button>
                            <a href="/resume.pdf" download="Darshana_Resume.pdf" className="btn btn-accent">
                                Resume
                                <Download size={18} />
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Hero Stats Section - Fills the Bottom Space */}
                <motion.div
                    className="hero-stats-container"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="hero-stat-item">
                        <span className="stat-number">5+</span>
                        <span className="stat-label">Years of Industry Exp.</span>
                    </div>
                    <div className="hero-stat-divider" />
                    <div className="hero-stat-item">
                        <span className="stat-number">8+</span>
                        <span className="stat-label">Enterprise Applications</span>
                    </div>
                    <div className="hero-stat-divider" />
                    <div className="hero-stat-item">
                        <span className="stat-number">2+</span>
                        <span className="stat-label">Years of React/AWS</span>
                    </div>
                </motion.div>


            </div>
        </section>
    );
};

const FeatureCard = ({ icon, title, desc }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="glass-card feature-card"
    >
        <div className="card-icon-wrapper">
            {icon}
        </div>
        <h3>{title}</h3>
        <p>{desc}</p>
    </motion.div>
);

export default Hero;
