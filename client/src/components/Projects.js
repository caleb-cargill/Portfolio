import { useState, useEffect } from 'react';
import '../styles/custom.css';
import axios from 'axios';
import { motion } from "framer-motion";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5001/api/projects")
            .then(response => {
                setProjects(response.data);
            })
            .catch(error => console.error(error));
    }, []);

    const ProjectCard = ({ project }) => {
        return (
            <motion.div
                className="glass rounded-2xl">
                <div className="relative aspect-video">
                    <img 
                        src={project.imageUrl} 
                        alt={project.title}
                        className="w-full h-full object-cover "
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                
                <div className="p-6">
                    <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                        {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                        {project.description}
                    </p>

                    <div>
                        {project.tags && project.tags.map((tag) => {
                            return (
                                <span key={tag} className="inline-block text-xs text-primary-400 font-semibold m-1">
                                    {tag}
                                </span>
                            );
                        })}
                    </div>

                    <div>
                        {project.languages && project.languages.map((tag) => {
                            return (
                                <span key={tag} className="inline-block px-2 py-2 bg-primary-100 dark:bg-primary-700 rounded-lg text-xs text-gray-600 dark:text-gray-300 m-1">
                                    {tag}
                                </span>
                            );
                        })}
                    </div>

                    
                    <div className="flex gap-4">
                        {project.sourceCodeLink && (
                        <a
                            href={project.sourceCodeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center bg-gray-700 gap-2 px-4 py-2 mt-4 text-sm rounded-xl font-medium text-gray-100 hover:bg-primary-700"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            Source Code
                        </a>
                        )}
                        {project.demoLink && (
                            <a
                                href={project.demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center bg-gray-700 gap-2 px-4 py-2 mt-4 text-sm rounded-xl font-medium text-gray-100 hover:text-primary-700"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                                </svg>
                                Live Demo
                            </a>
                        )}
                    </div>
                </div>
            </motion.div>
        );
    };

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;