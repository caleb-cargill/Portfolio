import ContactMe from './components/ContactMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import NavigationMenu from './components/NavigationMenu';
import SocialLinks from './components/SocialLinks';
import Spotlight from './components/Spotlight';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200 relative overflow-hidden">
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
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-100/20 to-transparent dark:from-primary-900/20"></div>
        </div>
        <div className="relative z-10 text-center px-4 md:px-8 max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-600 dark:text-primary-400 mb-6">
            Caleb Cargill
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8">
            Software Engineer passionate about helping others
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
              I build innovative solutions that make a difference. With expertise in full-stack development and a passion for creating meaningful user experiences, I'm dedicated to crafting software that solves real-world problems.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#contact" className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200">
              Get in Touch
            </a>
            <a href="#projects" className="px-8 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-200">
              View My Work
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-600 dark:text-primary-400 mb-8">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <p className="text-gray-600 dark:text-gray-300">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <p className="text-gray-600 dark:text-gray-300">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-600 dark:text-primary-400 mb-8">
                Experience
            </h2>
        <Experience />
      </section>

      {/* Spotlight Section */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-600 dark:text-primary-400 mb-8">
            Project Spotlight
        </h2>
        <Spotlight />
      </section>

      {/* Other Projects Section */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-600 dark:text-primary-400 mb-8">
            Other Projects
        </h2>
        <Projects/>
      </section>

      {/* Contact Section */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-600 dark:text-primary-400 mb-8">
            Contact Me
        </h2>
        <ContactMe/>
      </section>

      <Footer />
    </div>
  );
}

export default App;
