'use client';
import { useEffect, useRef } from 'react';
import parse from 'html-react-parser';

import { createAnimation, fadeAnimation } from '@hooks/gsap';

const TextFade = ({ children, data, className, isHtml }) => {
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
      <p ref={text} className={`text-pretty ${className && className}`}>
         {data ? (isHtml ? parse(data) : data) : children}
      </p>
   );
};

export default TextFade;
