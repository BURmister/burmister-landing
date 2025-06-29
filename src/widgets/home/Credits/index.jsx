'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import { createAnimation } from '@/src/hooks/gsap';
import Section from '@widgets/home/Section';
import styles from './styles.module.scss';

const Credits = ({ data }) => {
   const backgroundRef = useRef(null);

   useEffect(() => {
      const background = backgroundRef.current;
      if (!background) return;

      createAnimation(() => {
         // gsap.to(background, {
         //    scrollTrigger: {
         //       trigger: background,
         //       start: '0% 50%',
         //       end: '100% 50%',
         //       markers: true,
         //       scrub: true,
         //    },
         //    width: '110vw',
         //    height: '110lvh',
         //    yoyo: true,
         // });
         // gsap.to(background, {
         //    scrollTrigger: {
         //       trigger: background,
         //       start: '0% 50%',
         //       end: '100% 50%',
         //       markers: true,
         //       scrub: true,
         //    },
         //    width: '100%',
         //    height: '100%',
         //    yoyo: true,
         // });
      });
   }, []);

   return (
      <Section className={`relative ${styles.section}`}>
         <div className={`content-wrapper ${styles.wrapper} flex flex-col`}>
            <div className={`sticky flex flex-col justify-center items-center ${styles.backgroundWrapper}`}>
               <div ref={backgroundRef} className={`${styles.background} background-grey rounded-32`}></div>
            </div>
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
