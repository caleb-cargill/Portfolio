import { useState, useEffect } from 'react';
import axios from 'axios';
import { endpoints } from '../api/endpoints'

const FixedEmail = () => {    
    const [settings, setSettings] = useState(null);

    useEffect(() => {
      axios.get(endpoints.settings)
      .then(response => {
        setSettings(response.data);
      })
      .catch(error => console.error('Error fetching settings:', error));
    }, []);

  return (
    <div className="transform rotate-90 origin-right fixed right-2 lg:right-8 top-1/2 -translate-y-1/2 translate-y-[250%] hidden md:flex flex-col z-50">
        <a href={'mailto:' + (settings?.socialLinks.email || '')}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors duration-200">
            {settings?.socialLinks.email}
          </a>
    </div>
  );
};

export default FixedEmail; 