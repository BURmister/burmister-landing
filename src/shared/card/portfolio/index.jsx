'use client';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { createAnimation, fadeAnimation } from '@hooks/gsap';

import { Image } from '@shared/media';
import styles from './styles.module.scss';

const PortfolioCard = ({ data, index }) => {
   const cardRef = useRef(null);
   const imageRef = useRef(null);
   const nameRef = useRef(null);
   const descriptionRef = useRef(null);

   useEffect(() => {
      createAnimation(() => {
         const card = cardRef.current;
         const image = imageRef.current;
         const name = nameRef.current;
         if (!card || !image || !name) return;

         gsap.from(image, {
            scrollTrigger: {
               trigger: card,
               start: '0% 100%',
            },
            opacity: 0,
            y: 'random(30, 50, 10)',
            duration: 0.8,
            scale: 0.98,
            transformOrigin: 'center bottom',
            ease: 'power4.out',
         });

         gsap.from(name, {
            scrollTrigger: {
               trigger: image,
               start: '100% 100%',
            },
            rotateZ: 23,
            yPercent: 100,
            duration: 0.8,
            transformOrigin: '0% 50%',
            ease: 'power4.out',
         });

         const description = descriptionRef.current;
         if (description) {
            gsap.from(description, {
               scrollTrigger: {
                  trigger: image,
                  start: '100% 100%',
               },
               opacity: 0,
               yPercent: 50,
               duration: 0.6,
               ease: 'power4.out',
            });
         }
      });
   }, []);

   return (
      <Link ref={cardRef} className={`${styles.card} flex flex-col will-blue`} href="#">
         <Image ref={imageRef} className={`rounded-24 ${styles.image}`} src={data?.Preview?.url} width={790} height={385} alt={data?.Name} />
         <div className={`flex flex-col`}>
            {data?.Description && (
               <p ref={descriptionRef} className={`text-pretty text-20`}>
                  {data?.Description}
               </p>
            )}
            <div className="flex-1 overflow-hidden">
               <p ref={nameRef} className={`text-32 ${styles.title}`}>
                  {data?.Name}
               </p>
            </div>
         </div>
      </Link>
   );
};

export default PortfolioCard;
