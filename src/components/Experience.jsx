import React from 'react';
import { Calendar, Briefcase } from 'lucide-react';

const Experience = () => {
    const jobs = [
        {
            role: "Senior Software Engineer",
            company: "Xplor technologies",
            period: "Apr 2026 - Present",
            projects: [
                {
                    title: "Service Autopilot",
                    domain: ".NET , C#, SQL Server, RabbitMq , React JS , Azure , MicroServices",
                    desc: [
                        "Developed a platform for field service businesses like lawn care and snow removal",
                        "Implemented modules for companies to manage clients, employees, vendors, and services",
                        "Built a complete workflow to create, track, and manage service invoices",
                        "Designed robust backend architecture as Microservices using .NET and C#",
                        "Integrated RabbitMQ for reliable asynchronous inter-service communication"
                    ]
                }
            ]
        },
        {
            role: "Senior Associate Technology L1",
            company: "Publicis Sapient",
            period: "Aug 2025 - Mar 2026",
            projects: [
                {
                    title: "Clinic Appointment & Patient Management System",
                    domain: ".NET Core 8, C#, SQL Server, Entity Framework",
                    desc: [
                        "Developed a healthcare web application using ASP.NET Core and C#",
                        "Implemented patient registration and appointment booking modules",
                        "Designed SQL Server database and integrated using Entity Framework",
                        "Built role-based access for admin and doctors",
                        "Generated basic operational reports for clinic management"
                    ]
                }
            ]
        },
        {
            role: "SDE 2",
            company: "Accelya Solutions Pvt. Ltd",
            period: "Oct 2023 - Aug 2025",
            projects: [
                {
                    title: "FLX - Direct Project",
                    client: "Qantas, Aegean Airlines",
                    domain: ".NET Core 8, AWS (Lambda, API Gateway, DynamoDB), Microservices",
                    desc: [
                        "Contributed to the incubation unit's innovation mission in airline retailing.",
                        "Built a direct channel product acting as a wrapper over existing NDC servers.",
                        "Implemented microservices for offers, orders, and locations tailored to individual airlines."
                    ]
                },
                {
                    title: "Product Catalogue Development",
                    client: "Lufthansa, Qantas",
                    domain: ".NET Core 8, React JS, Next.js, AWS Lambda, DynamoDB",
                    desc: [
                        "Developed a new Product Catalogue replacing outdated FLX formats.",
                        "Played a key role in MVP development for both backend and frontend.",
                        "Enhanced service visibility and streamlined airline operations."
                    ]
                },
                {
                    title: "Falcon Design System (FDS)",
                    domain: "React JS, HTML, CSS, Next.js",
                    desc: [
                        "Built reusable React components reducing development time by 30%.",
                        "Standardized UI components ensuring consistent design language across all products."
                    ]
                }
            ]
        },
        {
            role: "Software Engineer",
            company: "E-Zest Solutions Pvt. Ltd",
            period: "Feb 2022 - Oct 2023",
            projects: [
                {
                    title: "WHO Representative Portal",
                    client: "World Health Organization",
                    domain: ".NET Core 3.1, Azure Key Vault, MS SQL Server",
                    desc: [
                        "Developed a role-based portal for documentation and user management.",
                        "Achieved a 25% reduction in response latency by optimizing Entity Framework queries."
                    ]
                },
                {
                    title: "WHO Data Portal",
                    client: "World Health Organization",
                    domain: ".NET Core, D3.js, C#",
                    desc: [
                        "Developed an application for accessing country-specific disease data.",
                        "Implemented various chart formats and multi-language support."
                    ]
                }
            ]
        },
        {
            role: "Software Developer",
            company: "Excellon Solutions Pvt. Ltd",
            period: "Sep 2018 - Dec 2019",
            projects: [
                {
                    title: "Bajaj Automobiles (Global)",
                    domain: ".NET Core, Web API, MS SQL Server",
                    desc: [
                        "Designed & deployed a B2B client-server application for global dealer networks.",
                        "Automated sales & service processes for Motorbike, KTM, and 3-wheeler units."
                    ]
                },
                {
                    title: "Excellon Framework Expansion",
                    domain: ".NET Core, Entity Framework",
                    desc: [
                        "Designed to expand the previous Excellon 5 Framework for overseas business sectors."
                    ]
                }
            ]
        }
    ];

    return (
        <section id="experience" className="section-experience">
            <div className="container">
                <h2 className="section-title">
                    Professional <span className="gradient-text">Journey</span>
                </h2>

                <div className="timeline">
                    <div className="timeline-line" />

                    {jobs.map((job, index) => (
                        <div key={index} className="timeline-item right">
                            <div className="timeline-dot" />
                            <div className="timeline-content-wrapper">
                                <div className="glass-card timeline-card">
                                    <div className="card-header">
                                        <Briefcase size={16} />
                                        <span>{job.company}</span>
                                    </div>
                                    <h3 className="role-title">{job.role}</h3>
                                    <div className="card-meta">
                                        <Calendar size={16} />
                                        <span>{job.period}</span>
                                    </div>

                                    <div className="projects-list">
                                        {job.projects.map((project, pIndex) => (
                                            <div key={pIndex} className="project-item" style={{ marginTop: '1.5rem' }}>
                                                <h4 style={{ color: 'var(--text-primary)', fontSize: '1.1rem', marginBottom: '0.25rem' }}>
                                                    {project.title}
                                                </h4>
                                                {project.client && (
                                                    <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--accent-secondary)', marginBottom: '0.25rem' }}>
                                                        Client: {project.client}
                                                    </span>
                                                )}
                                                <p style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', marginBottom: '0.5rem', fontStyle: 'italic' }}>
                                                    {project.domain}
                                                </p>
                                                <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                                                    {project.desc.map((point, i) => (
                                                        <li key={i} className="job-desc" style={{ marginBottom: '0.25rem', paddingLeft: '1rem', position: 'relative' }}>
                                                            <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>•</span>
                                                            {point}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
