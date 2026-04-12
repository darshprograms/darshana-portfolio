import React from 'react';
import { Mail, Linkedin, Github, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="modal-overlay"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="modal-content glass-card"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="close-btn" onClick={onClose}>
                            <X size={24} />
                        </button>

                        <h2 className="section-title" style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>Get In <span className="gradient-text">Touch</span></h2>
                        <p className="contact-text">
                            I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
                            my inbox is always open!
                        </p>

                        <div className="contact-actions">
                            <a href="mailto:darshanakadkar@gmail.com" className="btn btn-primary">
                                <Mail size={20} />
                                Say Hello
                            </a>

                            <div className="social-links-large">
                                <a href="https://linkedin.com/in/darshana-akadkar-691a73181" target="_blank" rel="noopener noreferrer" className="social-btn">
                                    <Linkedin size={24} />
                                </a>
                            
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Contact;
