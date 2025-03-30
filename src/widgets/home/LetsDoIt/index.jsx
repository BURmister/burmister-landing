'use client';

import { motion } from 'framer-motion';
import Section from '@widgets/home/Section';
import styles from './styles.module.scss';

const containerVariants = {
   hidden: {},
   visible: {
      transition: {
         staggerChildren: 0.2, // p появляется через 0.1s после h2
      },
   },
};

const textVariants = {
   hidden: { y: '100%' }, // Стартовое состояние (скрыт, внизу)
   visible: {
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }, // Плавное появление
   },
};

const LetsDoIt = () => {
   return (
      <Section className={`${styles.section}`}>
         <motion.div
            className={`content-wrapper ${styles.content} flex flex-col`}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}>
            <motion.div className={`${styles.titleWrapper} overflow-hidden`}>
               <motion.p className={`text-32 text-center`} variants={textVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  Ваши идеи готовы к воплощению?
               </motion.p>
            </motion.div>
            <motion.div className={`${styles.titleWrapper} overflow-hidden`}>
               <motion.p
                  className={`caption-96 text-center`}
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}>
                  Сделаем это вместе!
               </motion.p>
            </motion.div>
         </motion.div>
      </Section>
   );
};

export default LetsDoIt;
