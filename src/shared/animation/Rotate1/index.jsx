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
            options: { from: { yPercent: 110, rotationZ: 10, duration: 0.52, ease: 'power1.out' } },
         });
      });
   }, []);

   return (
      <div className={`overflow-hidden`}>
         <div ref={target} className={`${className && className}`}>
            {children}
         </div>
      </div>
   );
};

export default Animation;
