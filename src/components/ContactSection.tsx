'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Download } from 'lucide-react';
import ContactPreviewModal from './ContactPreviewModal';

const ContactSection: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="container mx-auto px-4 py-16">
            <motion.h2
                className="text-4xl font-bold mb-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Let's Connect
            </motion.h2>

            <div className="max-w-3xl mx-auto">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <a href="mailto:aaryush@outlook.com" className="flex flex-col items-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                        <Mail size={32} className="mb-4 text-mclaren-orange" />
                        <span className="text-lg font-semibold">Email</span>
                    </a>
                    <a href="https://linkedin.com/in/aaryush" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                        <Linkedin size={32} className="mb-4 text-mclaren-orange" />
                        <span className="text-lg font-semibold">LinkedIn</span>
                    </a>
                    <a href="https://github.com/Aaryush1" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                        <Github size={32} className="mb-4 text-mclaren-orange" />
                        <span className="text-lg font-semibold">GitHub</span>
                    </a>
                </motion.div>

                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="inline-flex items-center px-6 py-3 bg-mclaren-orange text-white rounded-full hover:bg-opacity-80 transition-colors"
                    >
                        <Download size={20} className="mr-2" />
                        View and Download Contact Card
                    </button>
                </motion.div>
            </div>

            <ContactPreviewModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default ContactSection;