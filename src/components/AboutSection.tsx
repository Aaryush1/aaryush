'use client';

import React from 'react';
import { motion } from 'framer-motion';

const timelineEvents = [
    { year: 2024, event: 'Graduated from University of Wisconsin Madison' },
    { year: 2023, event: 'Launched Univise, won Best Pitch at Transcend' },
    { year: 2022, event: 'Started as AI Engineer at Cylerity' },
    // Add more events as needed
];

const AboutSection: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-16">
            <motion.h2
                className="text-4xl font-bold mb-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                About Me
            </motion.h2>
            <motion.p
                className="text-lg mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                I'm an AI enthusiast and innovator with a passion for applying artificial intelligence to solve real-world problems. My journey in AI began early in life, driven by a vision of how this technology can transform industries and improve lives.
            </motion.p>

            <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-mclaren-orange"></div>
                {timelineEvents.map((event, index) => (
                    <motion.div
                        key={event.year}
                        className={`flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                            <h3 className="text-xl font-bold mb-2">{event.year}</h3>
                            <p>{event.event}</p>
                        </div>
                        <div className="w-2 h-2 bg-white rounded-full border-4 border-mclaren-orange z-10"></div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default AboutSection;