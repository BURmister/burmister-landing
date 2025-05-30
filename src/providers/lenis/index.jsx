'use client';
import { useEffect } from 'react';
import { initLenis } from '@hooks/lenis';

const LenisProvider = () => {
   useEffect(() => {
      const lenis = initLenis({
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

   return null;
};

export default LenisProvider;
