'use client';

import { motion } from 'framer-motion';
import styles from './styles.module.scss';

const containerVariants = {
   hidden: {},
   visible: {
      transition: {
         staggerChildren: 0.3,
      },
   },
};

const pVariants = {
   hidden: { y: '100%' },
   visible: {
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
   },
};

const h2Variants = {
   hidden: { y: '100%', x: -64 },
   visible: {
      y: 0,
      x: -64,
      transition: { duration: 0.5, ease: 'easeOut' },
   },
   shifted: {
      x: 0,
      transition: { duration: 0.6, ease: 'easeInOut', delay: 0.5 },
   },
};

const Header = () => {
   return (
      <motion.div
         className={`content-wrapper ${styles.header} flex flex-col`}
         variants={containerVariants}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}>
         <motion.div className={`${styles.titleWrapper} overflow-hidden`}>
            <motion.h2
               className={`caption-96 ${styles.title} ${styles.first} text-pretty`}
               variants={h2Variants}
               initial="hidden"
               whileInView={['visible', 'shifted']}
               viewport={{ once: true }}>
               {/* Рамки исчезают с началом */}
               Креативное мышление,
            </motion.h2>
         </motion.div>
         <motion.div className={`${styles.titleWrapper} overflow-hidden`}>
            <motion.h2
               className={`caption-96 italic ${styles.title} ${styles.second} text-pretty`}
               variants={pVariants}
               initial={pVariants.hidden}
               whileInView={pVariants.visible}
               viewport={{ once: true }}>
               {/* настоящего мышления */}
               ведущее к результату
            </motion.h2>
         </motion.div>
      </motion.div>
   );
};

export default Header;
