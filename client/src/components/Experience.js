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

    return 
    (
        <table>
            <thead>
                <th>Company</th>
                <th>Title</th>
                <th>Start</th>
                <th>End</th>
            </thead>
            <tbody>
                {experiences.map(experience => (
                    <tr key={experience._id}>
                        <td>{experience.Company}</td>
                        <td>{experience.Title}</td>
                        <td>{new Date(experience.Start).toISOString().split('T')[0]}</td>
                        <td>{new Date(experience.End).toISOString().split('T')[0]}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Experience;