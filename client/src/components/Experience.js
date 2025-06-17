import { useState, useEffect } from 'react';
import '../styles/custom.css';
import axios from 'axios';
import { motion } from "framer-motion";

const Experience = () => {
    const [experiences, setExperiences] = useState([]);
    const [selected, setSelected] = useState(0);
    const [selectedCompany, setSelectedCompany] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/api/experiences')
            .then(response => {
                const sortedExperiences = response.data.sort((a, b) => 
                    new Date(b.start) - new Date(a.start)
                );
                setExperiences(sortedExperiences);
                if (sortedExperiences.length > 0) {
                    setSelectedCompany(sortedExperiences[0].company);
                }
            })
            .catch(error => console.error(error));
    }, []);

    const uniqueCompanies = [...new Set(experiences.map(exp => exp.company))];
    const filteredExperiences = experiences.filter(exp => exp.company === selectedCompany);

    const getFormattedDate = (date) => {
        if (date === null) return "Present";
        const parsed = new Date(date); // Ensures it's a Date object
        if (isNaN(parsed)) return "Invalid Date";
        
        return parsed.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long"
                });
    };

    const getYearMonthDiff = (startDate, endDate) => {
        if (endDate === null) endDate = new Date();

        const start = new Date(startDate);
        const end = new Date(endDate);
      
        if (isNaN(start) || isNaN(end)) {
          return "Invalid Date";
        }
      
        let years = end.getFullYear() - start.getFullYear();
        let months = end.getMonth() - start.getMonth();
      
        if (months < 0) {
          years -= 1;
          months += 12;
        }
      
        const parts = [];
        if (years > 0) parts.push(`${years} Year${years > 1 ? "s" : ""}`);
        if (months > 0) parts.push(`${months} Month${months > 1 ? "s" : ""}`);
      
        return parts.length > 0 ? parts.join(", ") : "0 Months";
      };

    const getTimeAtCompany = (company, experiences) => {
        var companyExperiences = 
            experiences
            .filter(e => e.company === company)
            .sort((a, b) => 
                new Date(b.start) - new Date(a.start)
            );
        
        return getYearMonthDiff(companyExperiences[companyExperiences.length - 1].start, companyExperiences[0].end);
    };

    return (
        <div className="grid grid-cols-3 gap-6">
            <div className="glass p-6">
                <h2 className="text-2xl font-bold mb-4">Companies</h2>
                <div className="space-y-2">
                    {uniqueCompanies.map((company, index) => (
                        <div key={index}>
                            <label className="relative">
                                <input 
                                    type="radio" 
                                    name="company" 
                                    className="peer hidden" 
                                    checked={selectedCompany === company} 
                                    onChange={() => {
                                        setSelectedCompany(company);
                                        setSelected(0);
                                    }}
                                />
                                <div className="toggle">
                                    <div>
                                    <p>{company}</p>
                                    <p class="text-sm text-gray-300">{getTimeAtCompany(company, experiences)}</p>
                                    </div>
                                </div>
                            </label>
                        </div>
                    ))}
                </div>
            </div>

            <div className="col-span-2 glass p-6">
                <h1 className="text-2xl font-bold mb-4">{selectedCompany}</h1>

                <div className="flex space-x-4 mb-6">                 
                    {filteredExperiences.map((role, index) => (
                        <div key={index}>
                            <label className="relative">
                                <input 
                                    type="radio" 
                                    name="role" 
                                    className="peer hidden" 
                                    checked={selected === index} 
                                    onChange={() => setSelected(index)}
                                />
                                <div className="toggle">
                                    <div>
                                    <p>{role.title}</p>
                                    <p class="text-sm text-gray-300">{getYearMonthDiff(role.start, role.end)}</p>
                                    </div>
                                </div>
                            </label>
                        </div>
                    ))}
                </div>

                <motion.div                    
                    key={selected}>
                    <div>
                        <div>                            
                            <p className="text-xl font-semibold">{filteredExperiences[selected]?.title}</p>
                            <span className="text-sm text-muted-foreground">
                                    ({getFormattedDate(filteredExperiences[selected]?.start)} - {getFormattedDate(filteredExperiences[selected]?.end)})
                            </span>
                            <ul className="mt-4 list-disc list-inside text-gray-600 dark:text-gray-300">
                                {filteredExperiences[selected]?.descriptions.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Experience;