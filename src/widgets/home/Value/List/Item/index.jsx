'use client';
import { useEffect, useRef } from 'react';
import parse from 'html-react-parser';

import { createAnimation, fadeAnimation, rotateAnimation } from '@hooks/gsap';
import styles from './styles.module.scss';

const Item = ({ data }) => {
   const title = useRef(null);
   const description = useRef(null);

   useEffect(() => {
      createAnimation(() => {
         const _title = title.current;
         if (_title) rotateAnimation({ target: _title });

         const _description = description.current;
         if (_description) fadeAnimation({ target: _description, options: { from: { y: 64 } } });
      });
   }, []);

   return (
      <div className={`flex flex-col ${styles.text}`}>
         <div className={`overflow-hidden`}>
            <h3 ref={title} className={`caption-64 text-pretty`}>
               {parse(data.Title)}
            </h3>
         </div>
         <p ref={description} className={`text-24 text-pretty`}>
            {parse(data.Description)}
         </p>
      </div>
   );
};

export default Item;
