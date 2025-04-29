'use client';
import { useEffect, useRef } from 'react';
import { createAnimation, gsapFromto, gsapFrom, rotateAnimation } from '@hooks/gsap';

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
            gsapFrom({ target: _second, options: { from: { yPercent: 100, delay: 0.05 } } });
            gsapFromto({ target: _first, options: { set: { x: 64 }, from: { yPercent: 100 }, to: { x: 0 } } });
         } else {
            rotateAnimation({ target: _first });
            rotateAnimation({ target: _second, options: { from: { delay: 0.05 } } });
         }
      });
   }, []);

   return (
      <div className={`content-wrapper ${styles.header} flex flex-col`}>
         <div className={`${styles.titleWrapper} overflow-hidden`}>
            <h2 ref={first} className={`caption-96 ${styles.title} ${styles.first}`}>
               От смелых идей
            </h2>
         </div>
         <div className={`${styles.titleWrapper} overflow-hidden`}>
            <h2 ref={second} className={`caption-96 italic1 ${styles.title} ${styles.second}`}>
               к достижениям
            </h2>
         </div>
      </div>
   );
};

export default Header;
