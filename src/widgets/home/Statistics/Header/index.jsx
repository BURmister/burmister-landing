'use client';
import { useEffect, useRef } from 'react';
import { createAnimation, gsapFromto, rotateAnimation } from '@hooks/gsap';

import styles from './styles.module.scss';

const Header = () => {
   const first = useRef(null);
   const second = useRef(null);

   useEffect(() => {
      createAnimation(() => {
         const _first = first.current;
         const _second = second.current;
         if (!_first || !_second) return;

         if (window?.innerWidth >= 992) {
            gsapFromto({ target: _first, options: { set: { x: 64 }, from: { yPercent: 100 }, to: { x: 0 } } });
            gsapFromto({ target: _second, options: { set: { x: 64 }, from: { yPercent: 100, delay: 0.05 }, to: { x: 0 } } });
         } else {
            rotateAnimation({ target: _first });
            rotateAnimation({ target: _second, options: { from: { delay: 0.05 } } });
         }
      });
   }, []);

   return (
      <div className={`content-wrapper ${styles.header} flex flex-col`}>
         <div className={`${styles.titleWrapper} overflow-hidden`}>
            <h2 ref={first} className={`caption-96 ${styles.title} ${styles.first} text-pretty`}>
               Уникальный подход —
            </h2>
         </div>
         <div className={`${styles.titleWrapper} overflow-hidden`}>
            <h2 ref={second} className={`caption-96 italic ${styles.title} ${styles.second} text-pretty`}>
               уникальный результат
            </h2>
         </div>
      </div>
   );
};

export default Header;
