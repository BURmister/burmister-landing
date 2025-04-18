'use client';
import { useEffect, useRef } from 'react';
import parse from 'html-react-parser';
import SplitType from 'split-type';

import { createAnimation, gsapFrom } from '@hooks/gsap';
import './styles.scss';

const Item = ({ data }) => {
   const text = useRef(null);

   useEffect(() => {
      const _text = text.current;
      if (!_text) return;

      const split = new SplitType(_text, {
         types: 'lines, words, chars',
         tagName: 'span',
      });

      createAnimation(() => {
         gsapFrom({
            target: split.words,
            trigger: _text,
            options: { from: { yPercent: 110, rotationZ: 10, duration: 0.52, ease: 'power1.out', stagger: 0.16 } },
         });
      });
   }, []);

   return (
      <p ref={text} className={`caption-64 text-pretty StatisticTextItem`}>
         {parse(data)}
      </p>
   );
};

export default Item;
