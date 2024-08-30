'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download } from 'lucide-react';

interface ContactPreviewModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactPreviewModal: React.FC<ContactPreviewModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                onClick={onClose}
            >
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    className="bg-gray-800 p-8 rounded-lg max-w-md w-full m-4"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-2xl font-bold">Contact Information</h3>
                        <button onClick={onClose} className="text-gray-400 hover:text-white">
                            <X size={24} />
                        </button>
                    </div>
                    <div className="space-y-4">
                        <p><strong>Name:</strong> Your Full Name</p>
                        <p><strong>Title:</strong> AI Engineer & Innovator</p>
                        <p><strong>Email:</strong> your.email@example.com</p>
                        <p><strong>Phone:</strong> +1234567890</p>
                        <p><strong>Website:</strong> www.yourwebsite.com</p>
                        <p><strong>LinkedIn:</strong> linkedin.com/in/yourprofile</p>
                        <p><strong>GitHub:</strong> github.com/yourusername</p>
                    </div>
                    <div className="mt-8 flex justify-center">
                        <a
                            href="/your_name.vcf"
                            download
                            className="inline-flex items-center px-6 py-3 bg-mclaren-orange text-white rounded-full hover:bg-opacity-80 transition-colors"
                            onClick={onClose}
                        >
                            <Download size={20} className="mr-2" />
                            Download Contact Card
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ContactPreviewModal;