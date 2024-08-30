'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const skills = [
    { name: 'AI/Machine Learning', level: 90 },
    { name: 'Web Development', level: 85 },
    { name: 'Data Analysis', level: 80 },
    { name: 'Cloud Computing', level: 75 },
    { name: 'DevOps', level: 70 },
    { name: 'UI/UX Design', level: 65 },
];

const InteractiveSkillsChart: React.FC = () => {
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

    return (
        <div className="bg-gray-800 text-white p-8 rounded-lg max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Skills & Expertise</h2>
            <div className="space-y-6">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="relative"
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                    >
                        <div className="flex justify-between mb-1">
                            <span className="font-medium">{skill.name}</span>
                            <span>{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
                            <motion.div
                                className="h-2.5 rounded-full bg-mclaren-orange"
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            />
                        </div>
                        {hoveredSkill === skill.name && (
                            <motion.div
                                className="absolute mt-2 p-3 bg-gray-900 rounded shadow-lg z-10 w-full"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                            >
                                <p className="text-sm mb-2">Projects: Project A, Project B</p>
                                <p className="text-sm">Certifications: Cert X, Cert Y</p>
                            </motion.div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InteractiveSkillsChart;