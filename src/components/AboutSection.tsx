import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
    return (
        <div className="h-full flex items-center justify-center">
            <motion.div
                className="max-w-3xl mx-auto p-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-4xl font-bold mb-6 text-mclaren-orange">About Me</h2>
                <p className="text-lg mb-4">
                    I'm a passionate AI and technology professional with a keen interest in pushing the boundaries of what's possible.
                    With a background in computer science and a focus on machine learning, I've been at the forefront of developing
                    innovative solutions that blend cutting-edge technology with practical applications.
                </p>
                <p className="text-lg mb-4">
                    My experience spans from developing AI-powered recommendation systems to creating advanced analytics platforms
                    for sports technology. I'm constantly driven by the challenge of solving complex problems and the thrill of
                    bringing new ideas to life.
                </p>
            </motion.div>
        </div>
    );
};

export default AboutSection;