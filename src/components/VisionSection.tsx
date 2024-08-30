'use client';

import React from 'react';
import { motion } from 'framer-motion';
import F1Background from './F1Background';

const visionPoints = [
    { title: 'Healthcare Revolution', description: 'AI-powered diagnostics and personalized treatment plans' },
    { title: 'Education Transformation', description: 'Adaptive learning systems tailored to individual needs' },
    { title: 'Sustainable Future', description: 'AI optimizing resource usage and environmental protection' },
    { title: 'Financial Inclusion', description: 'AI-driven solutions for accessible financial services' },
];

const VisionSection: React.FC = () => {
    return (
        <F1Background>
            <div className="container mx-auto px-4 py-16 bg-gray-800">
                <motion.h2
                    className="text-4xl font-bold mb-8 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    My Vision for AI
                </motion.h2>
                <motion.p
                    className="text-lg mb-12 max-w-3xl mx-auto text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    I believe AI has the potential to revolutionize every industry, creating a more efficient, sustainable, and equitable world. Here's how I see AI shaping our future:
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {visionPoints.map((point, index) => (
                        <motion.div
                            key={point.title}
                            className="bg-gray-700 p-6 rounded-lg shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <h3 className="text-xl font-bold mb-2 text-mclaren-orange">{point.title}</h3>
                            <p>{point.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="mt-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <p className="text-lg font-bold mb-4">Together, we can harness the power of AI to create a brighter future for all.</p>
                    <button className="bg-mclaren-orange text-white px-6 py-3 rounded-full hover:bg-opacity-80 transition-colors">
                        Let's Connect
                    </button>
                </motion.div>
            </div>
        </F1Background>
    );
};

export default VisionSection;