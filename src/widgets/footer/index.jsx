import Link from 'next/link';
import styles from './styles.module.scss';

const Footer = () => {
   return (
      <footer className={`${styles.footer} flex flex-col`}>
         <div className={`content-wrapper ${styles.wrapper} ${styles.top} flex `}>
            <div className={`${styles.contacts} flex`}>
               <div className={`${styles.logo} flex flex-col`}>
                  <h3 className={`text-32 whitespace-nowrap`}>Олег Бурмистров</h3>
               </div>
               <div className={`${styles.network} flex flex-col`}>
                  <div className={`${styles.sublist} flex flex-col`}>
                     <Link href="#" className={`text-32 will-blue will-underline whitespace-nowrap w-fit`}>
                        Github
                     </Link>
                     <Link href="#" className={`text-32 will-blue will-underline whitespace-nowrap w-fit`}>
                        Codepen
                     </Link>
                     <Link href="#" className={`text-32 will-blue will-underline whitespace-nowrap w-fit`}>
                        Linkedin
                     </Link>
                     <Link href="#" className={`text-32 will-blue will-underline whitespace-nowrap w-fit`}>
                        Habr
                     </Link>
                  </div>
                  <div className={`${styles.sublist} flex flex-col`}>
                     <p className={`text-20`}>по любым вопросам</p>
                     <Link href="#" className={`text-32 will-blue will-underline whitespace-nowrap w-fit`}>
                        burmister@qretex.com
                     </Link>
                  </div>
                  <div className={`${styles.sublist} flex flex-col`}>
                     <Link href="#" className={`text-32 will-blue will-underline whitespace-nowrap w-fit`}>
                        Qretex
                     </Link>
                  </div>
               </div>
            </div>
            <div className={`${styles.form} flex`}>form</div>
         </div>
         <div className={`content-wrapper ${styles.wrapper} ${styles.bottom} flex flex-col`}>
            <div className={`${styles.copyrightWrapper} flex`}>
               <p className={`text-24`}>© c 2004 года</p>
               <p className={`text-24`}>construit per burmister avec amour ❤️</p>
            </div>
            <div className={`${styles.whosWrapper}`}>
               <p className={`text-20`}>Кто такой burmister? Человек, который берет на себя ответственность за создание невозможного</p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
