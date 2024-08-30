import React from 'react';
import { motion } from 'framer-motion';

const VisionSection: React.FC = () => {
    return (
        <div className="h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
            <motion.div
                className="max-w-3xl mx-auto p-8 bg-black bg-opacity-50 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-4xl font-bold mb-6 text-mclaren-orange">My AI Vision</h2>
                <p className="text-lg mb-4">
                    I envision a future where AI seamlessly integrates into our daily lives, enhancing human capabilities
                    rather than replacing them. My goal is to develop AI systems that are not only powerful and efficient
                    but also ethical and transparent.
                </p>
                <p className="text-lg mb-4">
                    I'm particularly excited about the potential of AI in:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-2">
                    <li>Personalized healthcare and early disease detection</li>
                    <li>Sustainable energy management and climate change mitigation</li>
                    <li>Enhanced education through adaptive learning systems</li>
                    <li>Improved decision-making in complex scenarios</li>
                </ul>
                <p className="text-lg">
                    By pushing the boundaries of what's possible with AI, I believe we can create a more efficient,
                    sustainable, and equitable world for everyone.
                </p>
            </motion.div>
        </div>
    );
};

export default VisionSection;