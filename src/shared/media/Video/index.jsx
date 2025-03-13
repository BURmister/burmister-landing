'use client';
import { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';
import styles from './styles.module.scss';

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
   );
};

export default Video;
