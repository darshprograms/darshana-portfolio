import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="navbar"
        >
            <div className="container navbar-content">
                <div className="logo">
                    <Code2 className="logo-icon" />
                    <span className="logo-text">Darshana Akadkar</span>
                </div>

                <div className="nav-links">
                    {['About', 'Skills', 'Experience', 'Projects'].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
                            {item}
                            <span className="nav-line" />
                        </a>
                    ))}
                </div>

                <div className="social-links">
                    <SocialIcon Icon={Github} href="#" />
                    <SocialIcon Icon={Linkedin} href="https://linkedin.com/in/darshana-akadkar-691a73181" />
                   
                </div>
            </div>
        </motion.nav>
    );
};

const SocialIcon = ({ Icon, href }) => (
    <a href={href} className="social-icon">
        <Icon size={20} />
    </a>
);

export default Navbar;
