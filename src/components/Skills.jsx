import React from 'react';

const Skills = () => {
    const skills = [
        {
            category: "Frontend",
            items: ["React.js", "Next.js", "CSS3", "Redux", "Framer motion"]
        },
        {
            category: "Backend",
            items: ["C#", ".NET", "REST APIs", "Microservice", "SQL", "MVC"]
        },
        {
            category: "Cloud & DevOps",
            items: ["AWS", "AWS Lambda", "API Gateway", "DynamoDB", "S3", "CloudFormation", "CI/CD Pipelines", "Git"]
        }
    ];

    return (
        <section id="skills" className="section-skills">
            <div className="container">
                <h2 className="section-title">
                    Technical <span className="gradient-text">Arsenal</span>
                </h2>

                <div className="skills-grid">
                    {skills.map((group, idx) => (
                        <div key={idx} className="glass-card skill-card">
                            <div className="glow-effect" />

                            <h3 className="card-title">{group.category}</h3>
                            <div className="tags-container">
                                {group.items.map((skill) => (
                                    <span key={skill} className="tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
