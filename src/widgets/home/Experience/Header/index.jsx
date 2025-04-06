'use client';

import { motion } from 'framer-motion';
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
   hidden: { y: '100%', x: 64 }, // Стартовое состояние (скрыт, внизу)
   visible: {
      y: 0,
      x: 64,
      transition: { duration: 0.5, ease: 'easeOut' }, // Плавное появление
   },
   shifted: {
      x: 0, // Смещение вправо
      transition: { duration: 0.6, ease: 'easeInOut', delay: 0.5 }, // Ждём 1s перед сдвигом
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
               variants={textVariants}
               initial="hidden"
               whileInView={['visible', 'shifted']}
               viewport={{ once: true }}>
               От смелых идей
            </motion.h2>
         </motion.div>
         <motion.div className={`${styles.titleWrapper} overflow-hidden`}>
            <motion.h2
               className={`caption-96 italic ${styles.title} ${styles.second}`}
               variants={textVariants}
               initial="hidden"
               whileInView={['visible', 'shifted']}
               viewport={{ once: true }}>
               к достижениям
            </motion.h2>
         </motion.div>
      </motion.div>
   );
};

export default Header;
