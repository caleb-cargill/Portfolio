import { useSocialMetadata } from '../utils/Socials';

const SocialLinks = () => {  
  const socials = useSocialMetadata();

  return (
    <div className="fixed left-2 lg:left-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-6 z-50">
      {socials.map((link, index) => (
        <div className="flex group" key={index}>
          <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-600 dark:text-gray-400 group-hover:text-primary-600 transition-colors duration-200"
          title={link.name}
        >
          {link.icon} 
          <p className='opacity-0 group-hover:opacity-100 ml-2 text-primary-600 transition-colors duration-200'>{link.name}</p>
        </a>
        </div>
      ))}
    </div>
  );
};

export default SocialLinks; 