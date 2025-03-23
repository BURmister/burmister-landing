'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import styles from './styles.module.scss';

const animationVariants = {
   hidden: { y: '10%', opacity: 0, rotateZ: '6deg', scale: 0.4, originX: 1, originY: 1, originZ: 1 }, // Стартовое состояние (скрыт, внизу)
   visible: {
      y: 0,
      opacity: 1,
      rotateZ: 0,
      scale: 1,
      transition: { duration: 0.64, ease: 'easeInOut' }, // Плавное появление
   },
};

const getAnimationVariants = (index) => {
   return {
      hidden: {
         ...animationVariants.hidden,
         originX: index % 2 === 0 ? 1 : 0, // Четные - справа, нечетные - слева
         rotateZ: index % 2 === 0 ? '-6deg' : '6deg',
      },
      visible: animationVariants.visible,
   };
};

const PortfolioCard = ({ data, index }) => {
   return (
      <Link className={`${styles.card} flex flex-col will-blue`} href="#">
         <motion.div variants={getAnimationVariants(index)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Image className={`rounded-24 ${styles.image}`} src={data.Image} width={790} height={385} alt={data.Name} />
         </motion.div>
         <p className={`text-32 ${styles.title}`}>{data.Name}</p>
      </Link>
   );
};

export default PortfolioCard;
