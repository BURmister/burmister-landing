'use client';

import { motion } from 'framer-motion';
import styles from './styles.module.scss';

const containerVariants = {
   hidden: {},
   visible: {
      transition: {
         staggerChildren: 0.4, // p появляется через 0.1s после h2
      },
   },
};

const pVariants = {
   hidden: { opacity: 0, x: 123 },
   visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: 'easeOut' }, // Плавный выход
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
               className={`caption-96 ${styles.title} ${styles.first}`}
               variants={pVariants}
               initial={pVariants.hidden}
               whileInView={pVariants.visible}
               viewport={{ once: true }}>
               Уникальный подход —
            </motion.h2>
         </motion.div>
         <motion.div className={`${styles.titleWrapper} overflow-hidden`}>
            <motion.h2
               className={`caption-96 italic ${styles.title} ${styles.second}`}
               variants={pVariants}
               initial={pVariants.hidden}
               whileInView={pVariants.visible}
               viewport={{ once: true }}>
               уникальный результат
            </motion.h2>
         </motion.div>
      </motion.div>
   );
};

export default Header;
