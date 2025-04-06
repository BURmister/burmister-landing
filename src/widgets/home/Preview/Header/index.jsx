'use client';

import { motion } from 'framer-motion';
import styles from './styles.module.scss';

const pVariants = {
   // hidden: { y: '100%' }, // Стартовое состояние (скрыт, внизу)
   // visible: {
   //    y: 0,
   //    transition: { duration: 0.5, ease: 'easeOut' }, // Плавное появление
   // },
};

const Header = () => {
   return (
      <motion.div className={`content-wrapper ${styles.header} flex flex-col`} initial="hidden" whileInView="visible" viewport={{ once: true }}>
         <motion.div className={`${styles.titleWrapper} overflow-hidden`}>
            <motion.h2 className={`caption-44 ${styles.title}`} variants={pVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
               {/* Создаю решения, которые
               <br /> двигают ваш бизнес вперёд */}
               Соединяю творчество, <br />
               технологии и бизнес-цели <br />
               для роста брендов
            </motion.h2>
         </motion.div>
      </motion.div>
   );
};

export default Header;
