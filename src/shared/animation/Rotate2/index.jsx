'use client';
import { useEffect, useRef } from 'react';
import { createAnimation, gsapFrom } from '@hooks/gsap';

const Animation = ({ className, children }) => {
   const target = useRef(null);

   useEffect(() => {
      const _target = target.current;
      if (!_target) return;

      createAnimation(() => {
         gsapFrom({
            target: _target,
            trigger: _target,
            options: { from: { yPercent: 120, rotationZ: 8, duration: 0.48, ease: 'power1.out' } },
         });
      });
   }, []);

   return (
      <div ref={target} className={`${className && className}`}>
         {children}
      </div>
   );
};

export default Animation;
