const mongoose = require('mongoose');
const Experience = require('./models/experience'); 
const Project = require('./models/Project');

mongoose.connect('mongodb://localhost/portfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

async function seed() {
  await Experience.deleteMany(); // Clear old data
  await Experience.insertMany([
    {
        company: "KLH Engineers",
        title: "Software Architect, Team Leader",
        start: new Date("2024-01-01"),
        descriptions: [
          "Refactored and architects a building engineering data repository, replacing a tightly coupled WCF Service with a RESTful ASP.NET API and service layer using dependency injection—enabling automated testing through Moq and NUnit.",
          "Orchestrates build pipelines and manages deployment of NuGet packages and applications across local and Azure-hosted environments.",
          "Promotes continuous learning by maintaining clear documentation of programming patterns, standards, and departmental resources.",
          "Manages multiple databases, consumed through Entity Framework, ensuring robust design and data strategy, while creating advanced MySQL and Python queries for senior engineers' data auditing needs",        
          "Cultivates strong relationships with engineers through empathy-driven development and shadowing, leading to effective backlog management in Azure DevOps, strategic task delegation, and thorough code review processes.",
          "Empowers team success through leadership of sprint planning, retrospectives, daily stand-ups, and targeted pair programming sessions to overcome development challenges.",
          "Strengthens team culture through organized events and personalized coaching, coaching team members to achieve goals and grow professionally.",
          "Created and maintains a comprehensive onboarding curriculum featuring hands-on practice with LINQ, MVVM, and Unit Testing, continuously improving based on feedback.",
          "Established bi-weekly stakeholder reporting to enhance transparency, showcasing sprint achievements, feature demonstrations, and upcoming initiatives."
        ]
    },
    {
        company: "KLH Engineers",
        title: "Software Engineer",
        start: new Date("2022-05-04"),        
        end: new Date("2024-01-01"),
        descriptions: [        
          "Developed workflow based WPF application to be used by engineers to manage building engineering data, perform calculations and equipment selections, and generate schedule deliverables.",
          "Implemented MVVM architecture to separate concerns and enhance testability, while utilizing Dependency Injection to manage dependencies and improve code maintainability.",          
        ]
    },
    {
        company: "KLH Engineers",
        title: "Software Engineering Co-op",
        start: new Date("2019-01-07"),
        end: new Date("2022-04-29"),
        descriptions: [
          "Developed custom add-ins in C# and VB.NET using Autodesk's Revit API to streamline building engineering design processes, while bridging communication between engineering users and the development team.",
          "Developed user interfaces primarily with WPF while advocating for expanded Blazor adoption to enhance front-end accessibility.",
        ]
    },
    {
        company: "Reynolds and Reynolds",
        title: "Software Development Intern",
        start: new Date("2018-05-07"),
        end: new Date("2018-08-04"),
        descriptions: [
          "Used custom versions of COBOL and Pick Basic to develop and maintain accounting software within one of the company’s products.",
          "Converted large amounts of information from text-based reports to graphical user interfaces for better readability and increased functionality of software.",
          "Learned to write and debug code efficiently while following standards already put into place by the department, such as proper version control and informative comments.",
          "Practiced tracing another developer’s code to understand its purpose and better its efficiency"
        ]
    }
  ]);

  await Project.deleteMany(); // Clear old data
  await Project.insertMany([
    {
        title: "Personal Portfolio Website",
        description: "A responsive and animated personal portfolio website built with React and hosted on GitHub Pages.",
        imageName: "Portfolio Screen Capture",
        imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1640&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        sourceCodeLink: "https://github.com/caleb-cargill/Portfolio",
        demoLink: "http://localhost:3000",
        isFeatured: false,
        priority: 3,
        tags: ["React", "MongoDB", "Express", "Node.js", "TailwindCSS"],
        languages: ["JavaScript", "HTML", "CSS"]
    },
    {
        title: "C4 Knives Showcase Website",
        description: "A store-front style React site to highlight the owner's products and facilitate custom orders.",
        imageName: "Sample Knife",
        imageUrl: "https://images.unsplash.com/photo-1588597575483-f4e43e191c94?q=80&w=1833&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        sourceCodeLink: "https://github.com/caleb-cargill/C4Knives",
        isFeatured: true,
        priority: 1,
        tags: ["React", "MongoDB", "Express", "Node.js", "TailwindCSS"],
        languages: ["JavaScript", "HTML", "CSS"]
    },
    {
        title: "What's the Move?",
        description: "A mobile application that helps users find local events and activities based on their interests.",
        imageName: "Woman Biking",
        imageUrl: "https://plus.unsplash.com/premium_photo-1683442814148-78aa260ac18e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        sourceCodeLink: "https://github.com/caleb-cargill/Whats-The-Move",        
        isFeatured: true,
        priority: 2,
        tags: ["ASP.NET Core", "Entity Framework", "SQL Server", "Xamerin"],
        languages: ["C#", "XAML", "SQL"]
    },
    {
        title: "Independence from Revit",
        description: "Acted as Technical Integration Manager for key technical strategy initiative, leading processes around QA, documentation, and roll-out.",
        imageName: "BIM Software",
        imageUrl: "https://images.unsplash.com/photo-1618385455730-2571c38966b7?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",        
        isFeatured: false,
        priority: 4,
        tags: ["Quality Assurance", "NUnit", "User Experience"],
        languages: ["C#"]
    }
  ]);
  console.log('Test data inserted');
  mongoose.disconnect();
}

seed().catch(console.error);
