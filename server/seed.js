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
        company: "TechNova Inc.",
        title: "Frontend Developer",
        start: new Date("2021-06-01"),
        end: new Date("2022-08-15"),
        descriptions: [
        "Developed and maintained the company’s main e-commerce site using React.",
        "Collaborated with UX designers to implement responsive web designs.",
        "Improved page load performance by 35% using lazy loading and code splitting."
        ]
    },
    {
        company: "InnoWorks Labs",
        title: "Full Stack Engineer",
        start: new Date("2019-03-10"),
        end: new Date("2021-04-30"),
        descriptions: [
        "Built REST APIs using Node.js and Express to support mobile applications.",
        "Led migration of legacy codebase to modern JavaScript standards.",
        "Integrated MongoDB for dynamic content management."
        ]
    },
    {
        company: "Creative Cloud Co.",
        title: "Software Intern",
        start: new Date("2018-05-15"),
        end: new Date("2018-08-15"),
        descriptions: [
        "Assisted in the development of internal tooling scripts.",
        "Created documentation for onboarding processes.",
        "Wrote unit tests and participated in code reviews."
        ]
    }
  ]);

  await Project.deleteMany(); // Clear old data
  await Project.insertMany([
    {
        title: "Personal Portfolio Website",
        description: "A responsive and animated personal portfolio website built with React and hosted on GitHub Pages.",
        imageName: "portfolio.png",
        imageUrl: "https://example.com/images/portfolio.png",
        sourceCodeLink: "https://github.com/yourusername/portfolio",
        demoLink: "https://yourusername.github.io/portfolio",
        isFeatured: true,
        priority: 1
    },
    {
        title: "Task Manager API",
        description: "A RESTful API for managing tasks and to-dos, built using Node.js, Express, and MongoDB.",
        imageName: "taskmanager.png",
        imageUrl: "https://example.com/images/taskmanager.png",
        sourceCodeLink: "https://github.com/yourusername/task-manager-api",
        isFeatured: false,
        priority: 3
    },
    {
        title: "Real-Time Chat App",
        description: "A full-stack real-time chat application using Socket.io, Express, and React.",
        imageName: "chatapp.png",
        imageUrl: "https://example.com/images/chatapp.png",
        sourceCodeLink: "https://github.com/yourusername/chat-app",
        demoLink: "https://chat-app-demo.com",
        isFeatured: true,
        priority: 2
    },
    {
        title: "E-commerce Product Page",
        description: "A single product e-commerce page designed with HTML, CSS, and JavaScript for mobile and desktop views.",
        imageName: "ecommerce.png",
        imageUrl: "https://example.com/images/ecommerce.png",
        sourceCodeLink: "https://github.com/yourusername/ecommerce-product-page",
        demoLink: "https://yourusername.github.io/ecommerce-product-page",
        isFeatured: false,
        priority: 4
    },
    {
        title: "Weather Dashboard",
        description: "A simple weather dashboard app that pulls data from the OpenWeatherMap API and displays the current forecast.",
        imageName: "weather.png",
        imageUrl: "https://example.com/images/weather.png",
        sourceCodeLink: "https://github.com/yourusername/weather-dashboard",
        isFeatured: false,
        priority: 5
    }
  ]);
  console.log('Test data inserted');
  mongoose.disconnect();
}

seed().catch(console.error);
