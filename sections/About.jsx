'use client';


import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeInIn, staggerContainer, textVariant } from '../utils/motion';

import { TypingText } from '../components';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className='gradient-02 z-0'>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount:0.25}}
        className={`${styles.innerWidth} max-auto ${styles.flexCenter} flex-col`}
      >
        <TypingText 
          title="| About Drone Delivery" 
          textStyle="text-center"
          />
      </motion.div>
    </div>
    About section
  </section>
);

export default About;
