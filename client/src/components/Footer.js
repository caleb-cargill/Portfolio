import { useSocialMetadata } from "../utils/Socials";

const Footer = () => {
  const socials = useSocialMetadata();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-300">
              Developed by Caleb Cargill
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="#home"
              className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            >
              Home
            </a>
            {socials.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                title={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>          
        </div>
      </div>
    </footer>
  );
};

export default Footer; 