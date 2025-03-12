'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useWindowSize } from 'react-use';

export default function ScrollIndicator() {
   const { scrollYProgress } = useScroll();
   const { height: windowHeight } = useWindowSize(); // Следим за высотой окна

   const [isVisible, setIsVisible] = useState(false);
   const [indicatorHeight, setIndicatorHeight] = useState(20); // Начальная высота индикатора
   const scrollContainerRef = useRef(null);
   const timeoutRef = useRef(null);

   const scrollbarHeight = 50 * (windowHeight / 100); // 50dvh в пикселях
   const maxTranslateY = scrollbarHeight - indicatorHeight;

   const translateY = useTransform(scrollYProgress, [0, 1], ['0px', `${maxTranslateY}px`]);

   const updateIndicatorHeight = useCallback(() => {
      if (!scrollContainerRef.current) return;

      const documentHeight = document.documentElement.scrollHeight; // Полная высота страницы
      const newHeight = (scrollbarHeight * windowHeight) / documentHeight;

      setIndicatorHeight(Math.max(newHeight, 20)); // Минимальный размер индикатора — 20px
   }, [windowHeight, scrollbarHeight]);

   useEffect(() => {
      updateIndicatorHeight();
   }, [updateIndicatorHeight]);

   useMotionValueEvent(scrollYProgress, 'change', (latest) => {
      setIsVisible(latest > 0.02 && latest < 0.98);

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
         setIsVisible(false);
      }, 1000);
   });

   return (
      <motion.div
         className="fixed rounded-90 overflow-hidden right-4 top-[25dvh] h-[50dvh] w-[6px] background-grey"
         ref={scrollContainerRef}
         initial={{ opacity: 0 }}
         animate={{ opacity: isVisible ? 1 : 0 }}
         transition={{ duration: 0.3, ease: 'easeInOut' }}>
         <motion.div className="w-full rounded-90 background-black" style={{ translateY, height: `${indicatorHeight}px` }} />
      </motion.div>
   );
}
