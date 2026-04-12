import React from 'react';
import { ExternalLink, Github, Globe, Monitor, Code2, Rocket, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
    const personalProjects = [

        {
            title: "Professional Portfolio Website",
            tech: ["React.js", "Vite", "Framer Motion", "CSS3"],
            description: "A premium, high-performance portfolio featuring glassmorphism design, fluid animations, and a dynamic typewriter effect. Designed to showcase a unique blend of .NET backend expertise and modern React frontend skills.",
            link: "https://darshanaakadkar.com",
            github: "https://github.com",
            category: "Web Development",
            featured: true
        },
        {
            title: "The Aangan Cafe - Digital Menu",
            tech: ["React.js", "Vite", "Tailwind CSS", "Framer Motion", "UPI Integration", "WhatsApp Integration"],
            description: "A comprehensive QR code-based digital menu and reservation system. Features include instant menu access via QR scanning, table booking with payment integration, a full-featured cart for food ordering, UPI payment support, and the ability for users to send order details and customer info to the owner via WhatsApp for seamless management.",
            link: "https://the-aangan-cafe.vercel.app/",
            github: "https://github.com/darshprograms/the-aangan-cafe",
            category: "Web Application",
            featured: true
        }
    ];

    return (
        <section id="projects" className="section-projects">
            <div className="container">
                <h2 className="section-title">
                    Key <span className="gradient-text">Projects</span>
                </h2>

                <div className="projects-container">
                    <div className="projects-grid">
                        {personalProjects.map((project, index) => (
                            <motion.div
                                key={index}
                                className="glass-card project-card"
                                whileHover={{ y: -10 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="project-content-padding">
                                    <div className="project-header">
                                        <div className="badge-group">
                                            <span className="category-badge">{project.category}</span>
                                            {project.featured && <span className="featured-badge">Featured</span>}
                                        </div>
                                        <div className="project-icons">
                                            <Globe size={20} className="icon-purple" />
                                        </div>
                                    </div>

                                    <h3 className="project-card-title">{project.title}</h3>
                                    <p className="project-card-desc">{project.description}</p>

                                    <div className="project-tags">
                                        {project.tech.map((tag, i) => (
                                            <span key={i} className="tech-tag">{tag}</span>
                                        ))}
                                    </div>

                                    <div className="project-footer">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-btn primary">
                                            <ExternalLink size={16} />
                                            Live Demo
                                        </a>
                                        <a href={project.github} className="project-btn secondary">
                                            <Github size={16} />
                                            Source
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>


                </div>
            </div>
        </section>
    );
};

export default Projects;
