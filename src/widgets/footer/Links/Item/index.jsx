'use client';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

import { createAnimation, gsapFrom } from '@hooks/gsap';

const Item = ({ href, children }) => {
   const text = useRef(null);

   useEffect(() => {
      const _text = text.current;
      if (!_text) return;

      createAnimation(() => {
         console.log('link: ', _text);
         gsapFrom({
            target: _text,
            trigger: _text,
            options: { from: { yPercent: 110, rotationZ: 10, duration: 0.52, ease: 'power1.out' } },
         });
      });
   }, []);

   return (
      <div className={`overflow-hidden`}>
         <div ref={text}>
            <Link href={href} className={`text-32 will-blue will-underline whitespace-nowrap w-fit`}>
               {children}
            </Link>
         </div>
      </div>
   );
};

export default Item;
