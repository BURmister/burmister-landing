import Link from 'next/link';
import { ContactForm } from '@shared/form';

import Copyright from './copyright';
import Whos from './whos';

import styles from './styles.module.scss';

const Footer = () => {
   return (
      <footer className={`${styles.footer} flex flex-col`}>
         <div className={`content-wrapper ${styles.top} flex `}>
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
                        Telegram
                     </Link>
                     <Link href="#" className={`text-32 will-blue will-underline whitespace-nowrap w-fit`}>
                        Linkedin
                     </Link>
                     <Link href="#" className={`text-32 will-blue will-underline whitespace-nowrap w-fit`}>
                        Habr
                     </Link>
                  </div>
                  <div className={`${styles.sublist} flex flex-col`}>
                     <p className={`text-20`}>по вопросам сотрудничества</p>
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
            <ContactForm className={`${styles.form} flex`} />
         </div>
         <div className={`content-wrapper ${styles.bottom} flex flex-col`}>
            <Copyright />
            <Whos />
         </div>
      </footer>
   );
};

export default Footer;
