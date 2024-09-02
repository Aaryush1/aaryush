import React, { useEffect, RefObject } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download } from 'lucide-react';

interface ContactPreviewModalProps {
    isOpen: boolean;
    onClose: () => void;
    containerRef: RefObject<HTMLDivElement>;
}

const ContactPreviewModal: React.FC<ContactPreviewModalProps> = ({ isOpen, onClose, containerRef }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]"
                    style={{
                        position: 'absolute',
                        top: containerRef.current ? containerRef.current.scrollTop : 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: '100vh',
                    }}
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                        className="bg-gray-800 p-8 rounded-lg max-w-md w-full mx-4"
                        style={{
                            maxHeight: '90vh',
                            overflowY: 'auto',
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-2xl font-bold text-white">Contact Information</h3>
                            <button onClick={onClose} className="text-gray-400 hover:text-white">
                                <X size={24} />
                            </button>
                        </div>
                        <div className="space-y-4 text-white">
                            <p><strong>Name:</strong> Aaryush</p>
                            <p><strong>Title:</strong> AI Engineer & Innovator</p>
                            <p><strong>Email:</strong> aaryush@outlook.com</p>
                            <p><strong>Phone:</strong> +1(949)-331-2850</p>
                            <p><strong>Website:</strong> www.aaryush.com</p>
                            <p><strong>LinkedIn:</strong> linkedin.com/in/aaryushe</p>
                            <p><strong>GitHub:</strong> github.com/aaryush1</p>
                        </div>
                        <div className="mt-8 flex justify-center">
                            <a
                                href="/Aaryush.vcf"
                                download
                                className="inline-flex items-center px-6 py-3 bg-mclaren-orange text-white rounded-full hover:bg-opacity-80 transition-colors"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onClose();
                                }}
                            >
                                <Download size={20} className="mr-2" />
                                Download Contact Card
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ContactPreviewModal;