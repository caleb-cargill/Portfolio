import ContactMe from './components/ContactMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import NavigationMenu from './components/NavigationMenu';
import SocialLinks from './components/SocialLinks';
import Spotlight from './components/Spotlight';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import './styles/custom.css';
import axios from 'axios';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5001/api/settings')
    .then(response => {
      setSettings(response.data);
    })
    .catch(error => console.error('Error fetching settings:', error));

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Cursor Halo */}
      <div 
        className="fixed pointer-events-none w-[500px] h-[500px] rounded-full bg-gradient-to-r from-primary-100/20 to-primary-200/20 dark:from-primary-900/20 dark:to-primary-800/20 blur-3xl transition-transform duration-100"
        style={{
          transform: `translate(${mousePosition.x - 250}px, ${mousePosition.y - 250}px)`,
        }}
      />

      <NavigationMenu />

      <SocialLinks />

      {/* Hero Section */}
      <section id="home" className="relative min-h-[80vh] flex items-center justify-center glass">          
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-100/20 to-transparent dark:from-primary-900/20"></div>
        </div>
        <div className="relative z-10 text-center px-4 md:px-8 max-w-7xl mx-auto">          
            <img 
              src={settings?.headshotImageUrl} 
              alt="Caleb Cargill Headshot" 
              class="w-48 h-48 mb-8 mx-auto md:w-64 md:h-64 object-cover rounded-full shadow-lg transition duration-300 transform hover:scale-105 hover:opacity-25 hover:-translate-y-1"
            />          
          <h1 className="text-5xl md:text-7xl font-bold text-primary-600 dark:text-primary-400 mb-6">
            Caleb Cargill
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8">
            {settings?.missionStatement}
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
              {settings?.impactStatement}
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#contact" className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200">
              Get in Touch
            </a>
            <a href="#spotlight" className="px-8 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-200">
              View My Work
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section" id="about">
        <h2 className="sectionHeader">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 glass rounded-2xl">
            <p className="text-gray-600 dark:text-gray-300">
              {settings?.aboutMeOne}
            </p>
          </div>
          <div className="p-6 glass rounded-2xl">
            <p className="text-gray-600 dark:text-gray-300">
              {settings?.aboutMeTwo}
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <h2 className="sectionHeader">
            Experience
        </h2>
        <Experience />
      </section>

      {/* Spotlight Section */}
      <section id="spotlight" className="section">
        <h2 className="sectionHeader">
            Spotlight
        </h2>
        <Spotlight />
      </section>

      {/* Other Projects Section */}
      <section className="section" id="projects">
        <h2 className="sectionHeader">
            Projects
        </h2>
        <Projects/>
      </section>

      {/* Contact Section */}
      <section className="section" id="contact">
        <h2 className="sectionHeader">
            Contact Me
        </h2>
        <ContactMe/>
      </section>

      <Footer />
    </div>
  );
}

export default App;
