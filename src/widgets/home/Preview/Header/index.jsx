'use client';
import { useEffect, useRef } from 'react';
import parse from 'html-react-parser';
import SplitType from 'split-type';

import { createAnimation, gsapFromto } from '@hooks/gsap';
import { preprocessHTML } from '@hooks/html';
import styles from './styles.module.scss';
import './styles.scss';

const Header = () => {
   const text = useRef(null);

   useEffect(() => {
      const _text = text.current;
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
      <div className={`content-wrapper ${styles.header} PreviewHeader flex flex-col`}>
         <div className={`${styles.titleWrapper} overflow-hidden`}>
            <h2 ref={text} className={`caption-40 text-pretty ${styles.title}`} style={{ opacity: 0 }}>
               {/* {parse(preprocessHTML('Соединяю творчество, технологии и&nbsp;бизнес-цели для&nbsp;роста брендов'))} */}
               {parse(preprocessHTML('Помогаю брендам расти и&nbsp;развиваться в&nbsp;интернете'))}
            </h2>
         </div>
      </div>
   );
};

export default Header;
