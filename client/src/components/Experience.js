import { useState, useEffect } from 'react';
import '../styles/custom.css';
import axios from 'axios';

const Experience = () => {
    const [experiences, setExperiences] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/api/experiences')
            .then(response => {
                const sortedExperiences = response.data.sort((a, b) => 
                    new Date(b.start) - new Date(a.start)
                );
                setExperiences(sortedExperiences);
            })
            .catch(error => console.error(error));
    }, []);

    const filteredExperiences = experiences.filter(exp => 
        exp.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        exp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        exp.skills?.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const currentExperience = filteredExperiences[currentIndex];

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('en-US', { 
            month: 'short', 
            year: 'numeric' 
        });
    };

    const nextExperience = () => {
        setCurrentIndex((prev) => 
            prev < filteredExperiences.length - 1 ? prev + 1 : prev
        );
    };

    const prevExperience = () => {
        setCurrentIndex((prev) => prev > 0 ? prev - 1 : prev);
    };

    return (
        <div>
            
            {/* Search Bar */}
            <div className="mb-8">
                <input
                    type="text"
                    placeholder="Search by company, role, or skills..."
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                             bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                             focus:outline-none focus:ring-2 focus:ring-primary-500"
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setCurrentIndex(0);
                    }}
                />
            </div>

            {currentExperience && (
                <div className="relative">
                    {/* Navigation Timeline */}
                    <div className="flex items-center justify-between mb-8">
                        <button
                            onClick={prevExperience}
                            disabled={currentIndex === 0}
                            className={`p-2 rounded-full transition-colors duration-200
                                     ${currentIndex === 0 
                                        ? 'text-gray-400 cursor-not-allowed' 
                                        : 'text-primary-600 hover:bg-primary-100 dark:hover:bg-primary-900/30'}`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <div className="flex-1 mx-4">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                                </div>
                                <div className="relative flex justify-between">
                                    {filteredExperiences.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentIndex(index)}
                                            className={`w-3 h-3 rounded-full transition-colors duration-200
                                                     ${index === currentIndex 
                                                        ? 'bg-primary-600 dark:bg-primary-400' 
                                                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-primary-400 dark:hover:bg-primary-500'}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={nextExperience}
                            disabled={currentIndex === filteredExperiences.length - 1}
                            className={`p-2 rounded-full transition-colors duration-200
                                     ${currentIndex === filteredExperiences.length - 1 
                                        ? 'text-gray-400 cursor-not-allowed' 
                                        : 'text-primary-600 hover:bg-primary-100 dark:hover:bg-primary-900/30'}`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Experience Content */}
                    <div className="space-y-6">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                                    {currentExperience.title}
                                </h3>
                                <p className="text-primary-600 dark:text-primary-400 font-medium text-lg">
                                    {currentExperience.company}
                                </p>
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                {formatDate(currentExperience.start)} - {currentExperience.end ? formatDate(currentExperience.end) : 'Present'}
                            </div>
                        </div>

                        {/* Skills Tags */}
                        {currentExperience.skills && currentExperience.skills.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                                {currentExperience.skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 text-sm rounded-full bg-primary-100 dark:bg-primary-900/30
                                                 text-primary-700 dark:text-primary-300 hover:bg-primary-200
                                                 dark:hover:bg-primary-900/50 transition-colors duration-200"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Description */}
                        <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                            {currentExperience.descriptions?.map((desc, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="text-primary-500 mr-2 mt-1">•</span>
                                    <span>{desc}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Experience;