import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectModal({ isOpen, onClose, projectTitle, projectDesc, projectImg, projectLink, projectStack }) {
    if (!isOpen) return null;

    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        >
            <motion.div 
                initial={{ scale: 0.8 }} 
                animate={{ scale: 1 }} 
                className="bg-custom-gradient max-w-screen mobile-L:max-w-3xl w-full max-h-[60vh] flex flex-col"
            >
                <div className="flex justify-end p-2 bg-custom-gradient sticky top-0 z-10">
                    <button 
                        onClick={onClose}
                        className="text-neutral-50 font-bold hover:text-sky-500"
                    >
                        ✕
                    </button>
                </div>
                
                <div className="overflow-y-auto flex-1">
                    <div className="flex flex-col">
                        <img 
                            src={projectImg} 
                            alt={projectTitle}
                            className="w-full h-64 object-cover"
                        />
                        <div className="mx-4 flex-1 flex flex-col pb-4" style={{backgroundColor: "rgba(0, 0, 0, 0.30)"}}>
                            <div className="mx-4">
                                <h2 className="text-3xl font-semibold my-4">{projectTitle}</h2>
                                <p className="mb-2 font-semibold text-sky-500">Description: <span className="text-white font-normal">{projectDesc}</span></p>
                                <p className="mb-2 font-semibold text-sky-500">Languages and frameworks: <span className="text-white font-normal">{projectStack.join(", ")}</span></p>
                            
                                {projectLink && (
                                    <a 
                                        href={projectLink}   
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sky-500 font-semibold hover:underline"
                                    >
                                        View more
                                    </a>
                                )}  
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            <div 
                className="absolute inset-0 -z-10" 
                onClick={onClose}
            />
        </motion.div>
    );
}

