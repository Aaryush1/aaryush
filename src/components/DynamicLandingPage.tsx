import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Menu } from 'lucide-react';
import { useParallax } from 'react-scroll-parallax';

interface DynamicLandingPageProps {
    currentSection: string;
}

const DynamicLandingPage: React.FC<DynamicLandingPageProps> = ({ currentSection }) => {
    const [scrollY, setScrollY] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    const parallax = useParallax<HTMLDivElement>({ speed: -10 });

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = ['About', 'Projects', 'Skills', 'Vision', 'Contact'];

    return (
        <div className="h-screen bg-gray-900 text-white overflow-hidden relative">
            <div ref={parallax.ref} className="absolute inset-0">
                {/* Particle Background */}
                <div className="absolute inset-0 opacity-20">
                    {[...Array(100)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute h-2 w-2 bg-blue-400 rounded-full"
                            animate={{
                                x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
                                y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
                            }}
                            transition={{
                                duration: Math.random() * 10 + 10,
                                repeat: Infinity,
                                repeatType: "reverse",
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full z-50 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <motion.div
                        className="text-2xl font-bold"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Aaryush Gupta
                    </motion.div>
                    <div className="hidden md:flex space-x-4">
                        {navItems.map((item, index) => (
                            <motion.a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className={`hover:text-mclaren-orange transition-colors ${currentSection === item.toLowerCase() ? 'text-mclaren-orange' : ''
                                    }`}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {item}
                            </motion.a>
                        ))}
                    </div>
                    <div className="md:hidden">
                        <Menu onClick={() => setMenuOpen(!menuOpen)} className="cursor-pointer" />
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <motion.div
                    className="fixed inset-0 bg-gray-900 z-40 flex flex-col items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {navItems.map((item, index) => (
                        <motion.a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className={`text-2xl my-2 hover:text-mclaren-orange transition-colors ${currentSection === item.toLowerCase() ? 'text-mclaren-orange' : ''
                                }`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            onClick={() => setMenuOpen(false)}
                        >
                            {item}
                        </motion.a>
                    ))}
                </motion.div>
            )}

            {/* Main Content */}
            <div className="container mx-auto h-full flex flex-col justify-center items-center">
                <motion.h1
                    className="text-5xl md:text-7xl font-bold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Aaryush Gupta
                </motion.h1>
                <motion.p
                    className="text-xl md:text-2xl mb-8 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    AI Engineer | Innovator | Visionary
                </motion.p>
                <motion.button
                    className="bg-mclaren-orange text-white px-6 py-3 rounded-full flex items-center hover:bg-opacity-80 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Download className="mr-2" /> Download VCF
                </motion.button>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{
                    y: [0, 10, 0],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                }}
            >
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                    <motion.div
                        className="w-2 h-2 bg-white rounded-full"
                        animate={{
                            y: [0, 16, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                        }}
                    />
                </div>
            </motion.div>

            {/* Dynamic Background Color */}
            <div
                className="absolute inset-0 -z-10 transition-colors duration-1000"
                style={{
                    backgroundColor: `hsl(${200 + scrollY * 0.1}, 70%, 10%)`,
                }}
            />
        </div>
    );
};

export default DynamicLandingPage;