import React from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
    title: string;
    description: string;
    image?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image }) => {
    return (
        <motion.div
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
        >
            {image && (
                <img src={image} alt={title} className="w-full h-48 object-cover" />
            )}
            <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-mclaren-orange">{title}</h3>
                <p className="text-gray-300">{description}</p>
                <motion.button
                    className="mt-4 bg-mclaren-orange text-black font-bold py-2 px-4 rounded-full hover:bg-opacity-80 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Learn More
                </motion.button>
            </div>
        </motion.div>
    );
};

export default ProjectCard;