'use client';
import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './styles.module.scss';

const animationVariants = {
   hidden: { y: '10%', opacity: 0, scale: 0.98, originY: 1 },
   visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.64, ease: 'easeInOut' },
   },
};

const Video = ({ className, src, type, ...props }) => {
   const videoRef = useRef(null);
   const isInView = useInView(videoRef, { amount: 0.5 }); // 50% видимости

   useEffect(() => {
      if (videoRef.current) {
         if (isInView) {
            videoRef.current.play();
         } else {
            videoRef.current.pause();
         }
      }
   }, [isInView]);

   return (
      <motion.div variants={animationVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
         <video
            ref={videoRef}
            className={`rounded-24 ${styles.video} ${className && className}`}
            loop={true}
            muted={true}
            playsInline={true}
            width={680}
            height={420}
            {...props}
            loading="lazy">
            <source src={src} type={type} />
         </video>
      </motion.div>
   );
};

export default Video;
