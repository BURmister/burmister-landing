'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';

const LenisProvider = () => {
   useEffect(() => {
      const lenis = new Lenis({
         lerp: 0.08,
         duration: 1.5,
         smoothWheel: true,
      });

      function raf(time) {
         lenis.raf(time);
         requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
         lenis.destroy();
      };
   }, []);

   return null; // Ничего не рендерим, компонент просто добавляет плавную прокрутку
};

export default LenisProvider;
