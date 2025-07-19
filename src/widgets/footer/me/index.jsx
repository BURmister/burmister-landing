'use client';
import { useEffect, useRef } from 'react';

import { createAnimation, fadeAnimation } from '@hooks/gsap';

const Me = ({ className }) => {
   const text = useRef(null);

   useEffect(() => {
      createAnimation(() => {
         const _text = text.current;
         if (_text) {
            fadeAnimation({ target: _text, options: { from: { y: 64 } } });
         }
      });
   }, []);
   return (
      <div ref={text} className={`${className && className} flex flex-col`}>
         <h3 className={`text-32 whitespace-nowrap`}>
            Олег Бурмистров. <br />
            Разработчик.
         </h3>
      </div>
   );
};

export default Me;
