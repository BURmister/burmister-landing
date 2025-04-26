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

const textVariants = {
   hidden: { y: '110%', rotateZ: '23deg', originX: 0 }, // Стартовое состояние (скрыт, внизу)
   visible: {
      y: 0,
      rotateZ: 0,
      transition: { duration: 0.64, ease: 'easeInOut' }, // Плавное появление
   },
};

const Header = ({ data }) => {
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
               variants={textVariants}
               initial={textVariants.hidden}
               whileInView={textVariants.visible}
               viewport={{ once: true }}>
               {data?.TitleFirst}
            </motion.h2>
         </motion.div>

         {/* p c появлением снизу (через 0.1s после h2) */}
         <motion.div className="overflow-hidden">
            <motion.p
               className={`text-24 ${styles.title}`}
               variants={textVariants}
               initial={textVariants.hidden}
               whileInView={textVariants.visible}
               viewport={{ once: true }}>
               {data?.TitleSecond}
            </motion.p>
         </motion.div>
      </motion.div>
   );
};

export default Header;
