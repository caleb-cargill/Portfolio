import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from "framer-motion";
import { endpoints } from '../api/endpoints';

const Spotlight = () => {
    const [spotlightProject, setSpotlightProject] = useState(null);

    useEffect(() => {
        axios.get(endpoints.spotlightProject)
            .then(response => {
                setSpotlightProject(response.data);
            })
            .catch(error => console.error(error));
    }, []);

    if (!spotlightProject) return null;

    return (
        <section>
            <motion.div 
                className="glass"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="relative aspect-video lg:aspect-auto">
                        <img 
                            src={spotlightProject.imageUrl} 
                            alt={spotlightProject.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    
                    <div className="p-8 lg:p-12">
                        <h3 className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-4">
                            {spotlightProject.title}
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                            {spotlightProject.description}
                        </p>

                        <div>
                        {spotlightProject.tags && spotlightProject.tags.map((tag) => {
                            return (
                                <span key={tag} className="inline-block text-md text-primary-400 font-semibold mr-4 mb-4">
                                    {tag}
                                </span>
                            );
                        })}
                        </div>

                        <div>
                            {spotlightProject.languages && spotlightProject.languages.map((tag) => {
                                return (
                                    <span key={tag} className="inline-block px-2 py-2 bg-primary-100 dark:bg-primary-700 rounded-lg text-md mr-4 mb-4 text-gray-600 dark:text-gray-300">
                                        {tag}
                                    </span>
                                );
                            })}
                        </div>
                        
                        <div className="flex flex-wrap gap-4">
                            {spotlightProject.sourceCodeLink && (
                            <a
                                href={spotlightProject.sourceCodeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 mt-4 bg-gray-700 text-white rounded-lg hover:bg-primary-700 transition-colors"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                                Source Code
                            </a>
                            )}
                            {spotlightProject.demoLink && (
                                <a
                                    href={spotlightProject.demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 mt-4 bg-gray-700 text-white rounded-lg hover:bg-primary-700 transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                                    </svg>
                                    Demo
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Spotlight; 