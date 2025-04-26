'use client';

import { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/all';

import Section from '@widgets/home/Section';
import styles from './styles.module.scss';

const Credits = ({ data }) => {
   const sectionRef = useRef(null);

   // useEffect(() => {
   //    gsap.registerPlugin(ScrollTrigger);
   //    const section = sectionRef.current;
   //    if (!section) return;

   //    ScrollTrigger.create({
   //       trigger: section,
   //       start: 'top 80%',
   //       end: 'bottom top',
   //       scrub: true,
   //       snap: {
   //          snapTo: 1,
   //          duration: 16,
   //          delay: 1,
   //       },
   //    });
   // }, []);

   return (
      <Section ref={sectionRef} className={`relative ${styles.section}`}>
         <div className={`content-wrapper ${styles.wrapper} flex flex-col`}>
            <div className={`sticky ${styles.background} background-grey rounded-32`}></div>
            <div className={`${styles.content} flex flex-col`}>
               {data?.Roles?.length && (
                  <div className={`${styles.sublist} flex flex-col`}>
                     {data?.Roles?.map((item, index) => (
                        <p key={index} className={`caption-64 text-center`}>
                           {item.Text}
                        </p>
                     ))}
                     {/* <p className={`caption-64 text-center`}>Предприниматель</p> */}
                     {/* <p className={`caption-64 text-center`}>Проектный стратег</p> */}
                     {/* <p className={`caption-64 text-center`}>Основатель Qretex</p> */}
                  </div>
               )}
               {data?.Goal && (
                  <p className={`caption-64 text-center`}>
                     <span className={`caption-44 text-blue`}>{data?.Goal?.Description}</span>
                     <br />
                     {data?.Goal?.Title}
                  </p>
               )}
               {data?.Mission && (
                  <p className={`caption-64 text-center`}>
                     <span className={`caption-44 text-blue`}>{data?.Mission?.Description}</span>
                     <br />
                     {data?.Mission?.Title}
                  </p>
               )}
            </div>
         </div>
      </Section>
   );
};

export default Credits;
