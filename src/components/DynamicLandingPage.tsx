import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import ContactPreviewModal from './ContactPreviewModal';

interface DynamicLandingPageProps {
    currentSection: string;
    scrollToSection: (index: number) => void;
}

const DynamicLandingPage: React.FC<DynamicLandingPageProps> = ({ currentSection, scrollToSection }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const navItems = ['home', 'about', 'projects', 'skills', 'vision', 'contact'];

    const handleNavigation = (index: number) => {
        scrollToSection(index);
        setMenuOpen(false);
    };

    const openModal = () => {
        setIsModalOpen(true);
        console.log("Modal opened");
    };

    const closeModal = () => {
        setIsModalOpen(false);
        console.log("Modal closed");
    };

    return (
        <>
            <div className="fixed top-0 left-0 w-full z-50">
                <nav className="p-4">
                    <div className="container mx-auto flex justify-between items-center">
                        <motion.div
                            className="text-2xl font-bold"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Your Name
                        </motion.div>
                        <div className="hidden md:flex space-x-4 items-center">
                            {navItems.map((item, index) => (
                                <motion.button
                                    key={item}
                                    onClick={() => handleNavigation(index)}
                                    className={`cursor-pointer hover:text-mclaren-orange transition-colors ${currentSection === item ? 'text-mclaren-orange' : ''
                                        }`}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                </motion.button>
                            ))}
                            <motion.button
                                onClick={openModal}
                                className="flex items-center justify-center px-4 py-2 bg-mclaren-orange text-white rounded-full hover:bg-opacity-80 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Download size={20} className="mr-2" />
                                Contact Card
                            </motion.button>
                        </div>
                        <motion.div
                            className="md:hidden"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {menuOpen ? (
                                <X onClick={() => setMenuOpen(false)} className="cursor-pointer" />
                            ) : (
                                <Menu onClick={() => setMenuOpen(true)} className="cursor-pointer" />
                            )}
                        </motion.div>
                    </div>
                </nav>

                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            className="fixed inset-0 bg-gray-900 z-40 flex flex-col items-center justify-center"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {navItems.map((item, index) => (
                                <motion.button
                                    key={item}
                                    onClick={() => handleNavigation(index)}
                                    className={`text-2xl my-2 hover:text-mclaren-orange transition-colors ${currentSection === item ? 'text-mclaren-orange' : ''
                                        }`}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                </motion.button>
                            ))}
                            <motion.button
                                onClick={() => {
                                    openModal();
                                    setMenuOpen(false);
                                }}
                                className="flex items-center justify-center px-4 py-2 bg-mclaren-orange text-white rounded-full hover:bg-opacity-80 transition-colors mt-4"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Download size={20} className="mr-2" />
                                Contact Card
                            </motion.button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Home page content */}
            <div className="h-screen flex flex-col items-center justify-center">
                <h1 className="text-5xl font-bold mb-6">Welcome to My AI & Tech Portfolio</h1>
                <p className="text-xl mb-8">Innovating at the intersection of AI and technology</p>
                <motion.button
                    onClick={openModal}
                    className="flex items-center justify-center px-6 py-3 bg-mclaren-orange text-white rounded-full hover:bg-opacity-80 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Download size={24} className="mr-2" />
                    Download Contact Card
                </motion.button>
            </div>

            <ContactPreviewModal isOpen={isModalOpen} onClose={closeModal} />
        </>
    );
};

export default DynamicLandingPage;