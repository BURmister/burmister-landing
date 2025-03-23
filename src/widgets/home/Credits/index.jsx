'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import Section from '@widgets/home/Section';
import styles from './styles.module.scss';

const Credits = () => {
   const sectionRef = useRef(null);

   useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
      const section = sectionRef.current;
      if (!section) return;

      ScrollTrigger.create({
         trigger: section,
         start: 'top 80%',
         end: 'bottom top',
         scrub: true,
         snap: {
            snapTo: 1,
            duration: 16,
            delay: 1,
         },
      });

      // ScrollTrigger.create({
      //    trigger: section,
      //    start: 'top 80%',
      //    end: 'bottom 20%',
      //    scrub: true,
      //    snap: {
      //       snapTo: (progress) => (progress > 0.5 ? 1 : 0), // Если прокрутили больше половины → докручиваем
      //       duration: (progress, direction) => calculateDuration(direction),
      //       delay: 0.3, // Задержка перед авто-скроллом
      //    },
      // });

      // function calculateDuration(direction) {
      //    const rect = section.getBoundingClientRect();
      //    const distance =
      //       direction > 0
      //          ? window.innerHeight - rect.top // До конца блока
      //          : -rect.top; // До начала блока
      //    return Math.abs(distance / window.innerHeight) * 0.5; // Авто-длительность
      // }
   }, []);

   return (
      <Section ref={sectionRef} className={`relative ${styles.section}`}>
         <div className={`content-wrapper ${styles.wrapper} flex flex-col`}>
            <div className={`sticky ${styles.background} background-grey rounded-32`}></div>
            <div className={`${styles.content} flex flex-col`}>
               <div className={`${styles.sublist} flex flex-col`}>
                  <p className={`caption-64 text-center`}>Основатель Qretex</p>
                  <p className={`caption-64 text-center`}>Лидер команды</p>
                  <p className={`caption-64 text-center`}>Проектный стратег</p>
                  <p className={`caption-64 text-center`}>Переговорщик</p>
               </div>
               <p className={`caption-64 text-center`}>
                  <span className={`caption-44 text-blue`}>моя цель</span>
                  <br />
                  Делать лучше, чем это возможно
               </p>
               <p className={`caption-64 text-center`}>
                  <span className={`caption-44 text-blue`}>моя миссия</span>
                  <br />
                  Воплощать невозможное
               </p>
            </div>
         </div>
      </Section>
   );
};

export default Credits;
