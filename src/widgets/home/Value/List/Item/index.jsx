'use client';
import { useEffect, useRef } from 'react';
import parse from 'html-react-parser';

import { createAnimation, fadeAnimation, rotateAnimation } from '@hooks/gsap';
import styles from './styles.module.scss';

const Item = ({ data }) => {
   const title = useRef(null);
   const description = useRef(null);
   const icon = useRef(null);

   useEffect(() => {
      createAnimation(() => {
         const _title = title.current;
         if (_title) rotateAnimation({ target: _title });

         const _description = description.current;
         if (_description) fadeAnimation({ target: _description, options: { from: { y: 64 } } });

         const _icon = icon.current;
         // console.log(_icon);
         if (_icon) fadeAnimation({ target: _icon, options: { from: { y: 8, opacity: 0, delay: 0.4 } } });
      });
   }, []);

   return (
      <div className={`flex flex-col ${styles.Item}`}>
         <div className={`overflow-hidden flex items-center ${styles.Title}`}>
            {data?.Icon && (
               <div ref={icon} className={`${styles.Icon}`}>
                  {parse(data?.Icon)}
               </div>
            )}
            <h3 ref={title} className={`caption-64 text-pretty`}>
               {parse(data.Title)}
            </h3>
         </div>
         <p ref={description} className={`text-24 text-pretty ${data?.Icon && styles.IconMargin}`}>
            {parse(data.Description)}
         </p>
      </div>
   );
};

export default Item;
