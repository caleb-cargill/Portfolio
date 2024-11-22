import { useState, useEffect } from 'react';
import '../styles/style.css';
import axios from 'axios';

const Experience = () => {
    const [experiences, setExperiences] = useState([]);
    const [selectedCompany, setSelectedCompany] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/api/experiences')
        .then(response => setExperiences(response.data))
        .then(() => setSelectedCompany(experiences.at(1).company))
        .catch(error => console.error(error));
    }, []);    

    return (
        <div>
            <h2 className="accentHeader">Experience</h2>
            <div className="gallery">
                <div className="block">
                    <div className="radio-group">
                        {experiences.map(exp => (
                            <label className="radio-label">
                                <input name={exp.company} type='radio' id={exp.company} checked={selectedCompany === exp.company} onChange={() => setSelectedCompany(exp.company)} />
                                <span className='inner-label'>{exp.company}</span>
                            </label>
                        ))}
                    </div>
                </div>
                <div className="block">
                    <ul>
                        {/* {experiences.find(e => e.company === selectedCompany).descriptions.map(d => (
                            <li>{d}</li>
                        ))} */}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Experience;