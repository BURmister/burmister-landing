'use client';

import { motion } from 'framer-motion';
import styles from './styles.module.scss';

const containerVariants = {
   hidden: {},
   visible: {
      transition: {
         staggerChildren: 0.1, // p появляется через 0.1s после h2
      },
   },
};

const pVariants = {
   hidden: { opacity: 0, y: 50 },
   visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeIn' }, // Плавный выход
   },
};

const h2Variants = {
   hidden: { opacity: 0, y: 50 }, // Стартовое состояние (скрыт, внизу)
   visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeIn' }, // Плавное появление
   },
};

const HeaderBlock = () => {
   return (
      <motion.div
         className={`content-wrapper ${styles.header} flex flex-col`}
         variants={containerVariants}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}>
         {/* h2 c появлением и последующим смещением вправо */}
         <motion.div className="overflow-hidden">
            <motion.h2
               className={`caption-96 ${styles.title}`}
               variants={h2Variants}
               initial="hidden"
               whileInView={['visible', 'shifted']}
               viewport={{ once: true }}>
               Идеи реализуются действиями
            </motion.h2>
         </motion.div>

         {/* p c появлением снизу (через 0.1s после h2) */}
         <motion.div className="overflow-hidden">
            <motion.p
               className={`text-24 ${styles.title}`}
               variants={pVariants}
               initial={pVariants.hidden}
               whileInView={pVariants.visible}
               viewport={{ once: true }}>
               Что получит ваш бизнес?
            </motion.p>
         </motion.div>
      </motion.div>
   );
};

export default HeaderBlock;
