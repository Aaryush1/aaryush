'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import Image from 'next/image';

interface Project {
    title: string;
    shortDescription: string;
    longDescription: string;
    keyFeatures: string[];
    technologies: string[];
    image: string;
}

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [query, setQuery] = useState('');
    const [aiResponse, setAiResponse] = useState('');

    const handleFlip = () => setIsFlipped(!isFlipped);

    const handleAskAI = async () => {
        setAiResponse('AI is thinking...');
        try {
            const response = await fetch('/api/ask-ai', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ project: project.title, query })
            });
            const data = await response.json();
            setAiResponse(data.response);
        } catch (error) {
            setAiResponse('Sorry, I couldn\'t process that request.');
        }
    };

    return (
        <div className="perspective-1000 w-full h-[600px]">
            <motion.div
                className={`relative w-full h-full transition-transform duration-500 ${isFlipped ? 'rotate-y-180' : ''}`}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
            >
                <div className="absolute w-full h-full bg-gray-800 rounded-lg shadow-lg p-6 backface-hidden">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="mb-4">{project.shortDescription}</p>
                    <div className="relative w-full h-40 mb-4">
                        <Image
                            src={project.image}
                            alt={project.title}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-md"
                        />
                    </div>
                    <button
                        onClick={handleFlip}
                        className="bg-mclaren-orange text-white px-4 py-2 rounded hover:bg-opacity-80 transition-colors"
                    >
                        Learn More
                    </button>
                </div>
                <div className="absolute w-full h-full bg-gray-800 rounded-lg shadow-lg p-6 backface-hidden rotate-y-180">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="mb-4">{project.longDescription}</p>
                    <div className="mb-4">
                        <h4 className="text-lg font-semibold mb-2">Key Features:</h4>
                        <ul className="list-disc pl-5">
                            {project.keyFeatures.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h4 className="text-lg font-semibold mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="bg-gray-700 text-white text-xs font-medium px-2.5 py-0.5 rounded">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="mt-4">
                        <h4 className="text-lg font-semibold mb-2">Ask AI Assistant:</h4>
                        <div className="flex items-center space-x-2">
                            <input
                                type="text"
                                placeholder="Ask about this project..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="flex-grow px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-mclaren-orange"
                            />
                            <button
                                onClick={handleAskAI}
                                className="bg-mclaren-orange text-white px-4 py-2 rounded hover:bg-opacity-80 transition-colors flex items-center"
                            >
                                <MessageSquare className="h-4 w-4 mr-2" />
                                Ask
                            </button>
                        </div>
                        {aiResponse && (
                            <div className="mt-2 p-2 bg-gray-700 rounded">
                                <p>{aiResponse}</p>
                            </div>
                        )}
                    </div>
                    <button
                        onClick={handleFlip}
                        className="mt-4 bg-mclaren-orange text-white px-4 py-2 rounded hover:bg-opacity-80 transition-colors"
                    >
                        Back to Overview
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectCard;