import { ContactForm } from '@shared/form';

import Logo from './me';
import Copyright from './copyright';
import Whos from './whos';
import Links from './Links';

import styles from './styles.module.scss';

const Footer = () => {
   return (
      <footer className={`${styles.footer} flex flex-col`}>
         <div className={`content-wrapper ${styles.top} flex `}>
            <div className={`${styles.contacts} flex`}>
               <Logo />
               <Links />
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
