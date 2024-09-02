import React from 'react';
import { motion } from 'framer-motion';

interface NavigationProps {
    currentSection: number;
    scrollToSection: (index: number) => void;
    openModal: () => void
}

const Navigation: React.FC<NavigationProps> = ({ currentSection, scrollToSection }) => {
    const sections = ['home', 'about', 'projects', 'skills', 'vision', 'contact'];

    return (
        <nav className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50">
            <ul className="flex flex-col space-y-4">
                {sections.map((section, index) => (
                    <li key={section}>
                        <button
                            onClick={() => scrollToSection(index)}
                            className="relative w-3 h-3 rounded-full bg-gray-400 focus:outline-none"
                        >
                            {currentSection === index && (
                                <motion.div
                                    className="absolute inset-0 bg-white rounded-full"
                                    layoutId="activeSection"
                                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                />
                            )}
                            <span className="sr-only">{section}</span>
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;