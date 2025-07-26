import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const About = ({settings}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2, // Trigger when 20% is visible
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0, transition: { duration: 1 } });
    } else {
      controls.start({ opacity: 0, x: -1000 }); // Slide out to the left
    }
  }, [controls, inView]);

  return (
    <section className="section" id="about" ref={ref}>
      <h2 className="sectionHeader">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          className="row-start-1 justify-self-start self-start p-6 glass rounded-2xl inline-flex items-center"
          initial={{ opacity: 0, x: -100 }}
          animate={controls}
        >
          <p className="text-xl text-gray-600 dark:text-gray-300" style={{ whiteSpace: 'pre-line' }}>
            {settings?.aboutMeOne}
          </p>
        </motion.div>

        <motion.img
          className="row-start-2 md:row-start-1 md:col-start-1 rounded-2xl"
          src={settings?.aboutMeImgTwo}
          alt="Caleb and his daughter"
          initial={{ opacity: 0, x: 100 }}
          animate={controls}
        />

        <motion.img
          className="row-start-4 md:row-start-2 rounded-2xl"
          src={settings?.aboutMeImgOne}
          alt="Caleb and his wife and daughter"
          initial={{ opacity: 0, x: -100 }}
          animate={controls}
        />

        <motion.div
          className="row-start-3 md:row-start-2 md:col-start-1 justify-self-start self-start p-6 glass rounded-2xl flex items-center"
          initial={{ opacity: 0, x: 100 }}
          animate={controls}
        >
          <p className="text-xl text-gray-600 dark:text-gray-300" style={{ whiteSpace: 'pre-line' }}>
            {settings?.aboutMeTwo}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;