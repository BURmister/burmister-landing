'use client';
import { useEffect, useRef } from 'react';
import SplitType from 'split-type';

import { createAnimation, gsapFromto } from '@hooks/gsap';
import './styles.scss';

const AnimationSplitText = ({ className, children }) => {
   const target = useRef(null);

   useEffect(() => {
      const _text = target.current;
      if (!_text) return;

      const split = new SplitType(_text, {
         types: 'lines, words',
         tagName: 'span',
      });

      createAnimation(() => {
         gsapFromto({
            target: split.words,
            trigger: _text,
            options: { from: { yPercent: 110, opacity: 1, rotationZ: 10, duration: 0.52, ease: 'power1.out', stagger: 0.16 }, to: { opacity: 1 } },
         });
         _text.style.opacity = 1;
      });
   }, []);

   return (
      <div ref={target} className={`AnimationSplitText1 ${className && className}`} style={{ opacity: 0 }}>
         {children}
      </div>
   );
};

export default AnimationSplitText;
