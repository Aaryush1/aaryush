import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Skill {
    name: string;
    level: number;
}

const skills: Skill[] = [
    { name: 'Machine Learning', level: 90 },
    { name: 'Data Analysis', level: 85 },
    { name: 'Python', level: 95 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 75 },
    { name: 'TensorFlow', level: 85 },
];

const InteractiveSkillsChart: React.FC = () => {
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

    return (
        <div className="h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
            <div className="max-w-3xl mx-auto p-8 bg-black bg-opacity-50 rounded-lg shadow-lg">
                <h2 className="text-4xl font-bold mb-6 text-mclaren-orange">Skills</h2>
                <div className="space-y-4">
                    {skills.map((skill) => (
                        <div key={skill.name} className="relative">
                            <motion.div
                                className="h-8 bg-mclaren-orange rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                onHoverStart={() => setHoveredSkill(skill.name)}
                                onHoverEnd={() => setHoveredSkill(null)}
                            />
                            <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-black font-bold">
                                {skill.name}
                            </span>
                            {hoveredSkill === skill.name && (
                                <motion.div
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-black px-2 py-1 rounded"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    {skill.level}%
                                </motion.div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InteractiveSkillsChart;