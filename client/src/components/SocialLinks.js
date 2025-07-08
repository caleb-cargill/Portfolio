import { useSocialMetadata } from '../utils/Socials';

const SocialLinks = () => {  
  const socials = useSocialMetadata();

  return (
    <div className="fixed left-2 lg:left-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-6 z-50">
      {socials.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
          title={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks; 