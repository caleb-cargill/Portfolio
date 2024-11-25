import { useState, useEffect } from 'react';
import '../styles/style.css';
import axios from 'axios';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/projects")
        .then(response => {
            setProjects(response.data);
        })
        .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Featured</th>
                        <th>Priority</th>
                        <th>Tags</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map(proj => (
                        <tr key={proj.title}>
                            <td>{proj.title}</td>
                            <td>{proj.description}</td>
                            <td>{proj.isFeatured ? "True" : "False"}</td>
                            <td>{proj.priority}</td>
                            <td>{proj.tags.join(', ')}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>        
    );
};

export default Projects;