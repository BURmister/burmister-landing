import Image from 'next/image';
import Section from '@widgets/home/Section';

import Header from './Header';
import styles from './styles.module.scss';

const Footer = () => {
   return (
      <div className={`content-wrapper ${styles.footer} flex justify-center items-center`}>
         <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
            <path
               d="M26.03 18.53L17.03 27.53C16.8894 27.6705 16.6988 27.7493 16.5 27.7493C16.3013 27.7493 16.1107 27.6705 15.97 27.53L6.97003 18.53C6.83755 18.3878 6.76543 18.1998 6.76885 18.0055C6.77228 17.8112 6.85099 17.6258 6.98841 17.4884C7.12582 17.351 7.31121 17.2723 7.50551 17.2688C7.69981 17.2654 7.88785 17.3375 8.03003 17.47L15.75 25.1887V5C15.75 4.80109 15.829 4.61032 15.9697 4.46967C16.1104 4.32902 16.3011 4.25 16.5 4.25C16.6989 4.25 16.8897 4.32902 17.0304 4.46967C17.171 4.61032 17.25 4.80109 17.25 5V25.1887L24.97 17.47C25.1122 17.3375 25.3003 17.2654 25.4946 17.2688C25.6889 17.2723 25.8742 17.351 26.0117 17.4884C26.1491 17.6258 26.2278 17.8112 26.2312 18.0055C26.2346 18.1998 26.1625 18.3878 26.03 18.53Z"
               fill="#232323"
            />
         </svg>
         <p className={`text-24`}>давайте знакомиться</p>
         <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
            <path
               d="M26.03 18.53L17.03 27.53C16.8894 27.6705 16.6988 27.7493 16.5 27.7493C16.3013 27.7493 16.1107 27.6705 15.97 27.53L6.97003 18.53C6.83755 18.3878 6.76543 18.1998 6.76885 18.0055C6.77228 17.8112 6.85099 17.6258 6.98841 17.4884C7.12582 17.351 7.31121 17.2723 7.50551 17.2688C7.69981 17.2654 7.88785 17.3375 8.03003 17.47L15.75 25.1887V5C15.75 4.80109 15.829 4.61032 15.9697 4.46967C16.1104 4.32902 16.3011 4.25 16.5 4.25C16.6989 4.25 16.8897 4.32902 17.0304 4.46967C17.171 4.61032 17.25 4.80109 17.25 5V25.1887L24.97 17.47C25.1122 17.3375 25.3003 17.2654 25.4946 17.2688C25.6889 17.2723 25.8742 17.351 26.0117 17.4884C26.1491 17.6258 26.2278 17.8112 26.2312 18.0055C26.2346 18.1998 26.1625 18.3878 26.03 18.53Z"
               fill="#232323"
            />
         </svg>
      </div>
   );
};

const Preview = () => {
   return (
      <Section className={`${styles.section}`} header={<Header />} footer={<Footer />}>
         <div className={`content-wrapper ${styles.content} flex flex-col`}>
            <div className={`${styles.imageWrapper}`}>
               <Image className={`rounded-32 ${styles.image}`} src="/mock/preview.png" width={1660} height={640} alt="preview image" />
            </div>
            <div className={`flex ${styles.text}`}>
               <p className={`text-28 text-pretty ${styles.quote}`}>Мысль — это корень всего, что существует. Любое достижение начинается с мысли.</p>
               <p className={`text-28 italic whitespace-nowrap ${styles.author}`}>— Айн Рэнд</p>
            </div>
         </div>
      </Section>
   );
};

export default Preview;
