import { useState, useEffect } from 'react';
import '../styles/style.css';
import axios from 'axios';

const Experience = () => {
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/experiences')
        .then(response => setExperiences(response.data))
        .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h2 className="accentHeader">Experience</h2>
            <div className="gallery">
                <div className="block">
                    <table>
                        <thead>
                            <tr>
                                <th>Company</th>
                                <th>Title</th>
                                <th>Start</th>
                                <th>End</th>
                            </tr>
                        </thead>
                        <tbody>
                            {experiences.map(experience => (
                                <tr key={experience._id}>
                                    <td>{experience.company}</td>
                                    <td>{experience.title}</td>
                                    <td>{new Date(experience.start).toISOString().split('T')[0]}</td>
                                    <td>{new Date(experience.end).toISOString().split('T')[0]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Experience;