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
              title="Home"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path d="M4 12l8-8 8 8v8a2 2 0 01-2 2h-3a1 1 0 01-1-1v-4h-4v4a1 1 0 01-1 1H6a2 2 0 01-2-2v-8z" />
              </svg>              
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