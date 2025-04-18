'use client';
import { useEffect, useRef } from 'react';
import parse from 'html-react-parser';

import { createAnimation, fadeAnimation } from '@hooks/gsap';

const Text = ({ data }) => {
   const text = useRef(null);

   useEffect(() => {
      createAnimation(() => {
         const _text = text.current;
         if (_text) fadeAnimation({ target: _text, options: { from: { y: 64 } } });
      });
   }, []);

   return (
      <p ref={text} className={`text-32 text-pretty`}>
         {parse(data)}
      </p>
   );
};

export default Text;
