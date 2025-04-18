import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

export const scrollAnimationProvider = () => {
   gsap.registerPlugin(ScrollTrigger);
};

export const scrollTriggerBounderis = (trigger) => {
   if (!trigger) return {};

   return {
      scrollTrigger: {
         trigger,
         start: '0% 90%',
      },
   };
};

export const createAnimation = (callback) => {
   if (!callback) return;
   scrollAnimationProvider();

   callback();
   // if (window?.innerWidth >= 992)
   // else rotateAnimation();
};

export const gsapFromto = ({ target, trigger, options }) => {
   if (options?.set) gsap.set(target, options?.set);

   const timeline = gsap.timeline({
      ...scrollTriggerBounderis(trigger || target),
   });

   timeline
      .from(target, {
         duration: 0.6,
         ease: 'power4.out',
         ...options?.from,
      })
      .to(target, {
         duration: 0.8,
         ease: 'power1.inOut',
         ...options?.to,
      });
};

export const gsapFrom = ({ target, trigger, options }) => {
   gsap.from(target, {
      ...scrollTriggerBounderis(trigger || target),
      duration: 0.8,
      ease: 'power4.out',
      ...options?.from,
   });
};

export const fadeAnimation = ({ target, trigger, options }) => {
   gsapFrom({ target, trigger, options: { ...options, from: { opacity: 0, y: 24, ...options?.from } } });
};

export const rotateAnimation = ({ target, trigger, options }) => {
   gsapFrom({ target, trigger, options: { ...options, from: { rotateZ: 23, yPercent: 100, transformOrigin: '0% 50%', ...options?.from } } });
};
