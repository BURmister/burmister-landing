'use client';
import { useEffect, useRef } from 'react';
import { createAnimation, fadeAnimation } from '@hooks/gsap';

const Animation = ({ children, className }) => {
   const target = useRef(null);

   useEffect(() => {
      createAnimation(() => {
         const _target = target.current;
         if (_target) fadeAnimation({ target: _target, options: { from: { y: 64 } } });
      });
   }, []);

   return (
      <div ref={target} className={`${className && className}`}>
         {children}
      </div>
   );
};

export default Animation;
