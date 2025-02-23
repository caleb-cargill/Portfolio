import { useState, useEffect } from 'react';
import '../styles/style.css';
import axios from 'axios';
import { motion } from "framer-motion";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/projects")
        .then(response => {
            setProjects(response.data);
        })
        .catch(error => console.error(error));
    }, []);

    const Card = ({ children, className = "" }) => (
        <div className={`bg-white shadow-lg rounded-xl p-4 ${className}`}>{children}</div>
      );
      
    const Grid = ({ children, className = "" }) => (
      <div className={`grid grid-cols-3 gap-4 p-4 ${className}`}>{children}</div>
    );
    
    const GridItem = ({ children, className = "" }) => (
      <div className={`relative ${className}`}>{children}</div>
    );

    const ProjectTile = ({ project }) => {
        const [flipped, setFlipped] = useState(false);
      
        return (
          <motion.div
            className={`relative w-full h-full cursor-pointer perspective-1000 ${
              project.size === "large" ? "col-span-2 row-span-2" : ""
            }`}
            onClick={() => window.open(project.sourceCodeLink, "_blank")}
          >
            <motion.div
              className="absolute w-full h-full" 
              initial={false}
              animate={{ rotateY: flipped ? 180 : 0 }}
              transition={{ duration: 0.5 }}
              onMouseEnter={() => setFlipped(true)}
              onMouseLeave={() => setFlipped(false)}
            >
              <Card className="absolute w-full h-full backface-hidden">
                <img src={project.imageName} alt={project.title} className="w-full h-full object-cover rounded-xl" />
                <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white p-2 rounded">
                  {project.title}
                </div>
              </Card>
              <Card className="absolute w-full h-full flex items-center justify-center p-4 text-center bg-blue-500 text-white rounded-xl rotate-y-180 backface-hidden">
                {project.description}
              </Card>
            </motion.div>
          </motion.div>
        );
    };

      
    return (
      <div>
        <h2 className="accentHeader">Projects</h2>
        <Grid className="grid grid-cols-3 gap-4 p-4">
          {projects.map((project, index) => (
            <GridItem key={index}>
              <ProjectTile project={project} />
              </GridItem>
          ))}
        </Grid>
      </div>
    );
};

export default Projects;