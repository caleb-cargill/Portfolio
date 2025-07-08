import { useEffect, useState } from 'react';

const CursorHalo = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {    
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div 
        className="fixed pointer-events-none w-[500px] h-[500px] rounded-full bg-gradient-to-r from-primary-100/20 to-primary-200/20 dark:from-primary-900/20 dark:to-primary-800/20 blur-3xl transition-transform duration-100"
        style={{
          transform: `translate(${mousePosition.x - 250}px, ${mousePosition.y - 250}px)`,
        }}
      />
    );
};

export default CursorHalo;