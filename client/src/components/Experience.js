import { useState, useEffect } from 'react';
import '../styles/style.css';
import axios from 'axios';

const Experience = () => {
    const [experiences, setExperiences] = useState([]);
    const [selectedCompany, setSelectedCompany] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/api/experiences')
        .then(response => {
            setExperiences(response.data);
            if (response.data.length > 0) {
                setSelectedCompany(response.data[0].company);
            }
        })
        .catch(error => console.error(error));
    }, []);    

    return (
        <div>
            <h2 className="accentHeader">Experience</h2>
            <div name="experiences">
                <div name="companies">
                    <div className="radio-group">
                        {experiences.map(exp => (
                            <label className="radio-label">
                                <input name={exp.company} type='radio' id={exp.company} checked={selectedCompany === exp.company} onChange={() => setSelectedCompany(exp.company)} />
                                <span className='inner-label'>{exp.company}</span>
                            </label>
                        ))}
                    </div>
                </div>                
                <div name="descriptions">
                    {selectedCompany && experiences.filter(e => e.company === selectedCompany).map(exp => (  
                        <>
                            <h3>{exp.title}</h3> 
                            <p>{`${new Date(exp.start).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} to ${new Date(exp.end).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}`}</p>                    
                            <ul key={exp.title}>
                                {exp?.descriptions?.map((d, index) => (
                                    <li key={index}>{d}</li>
                                ))}
                            </ul>
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;