import { ContactForm } from '@shared/form';

import Copyright from './copyright';
import Whos from './whos';
import Links from './Links';

import styles from './styles.module.scss';

const Footer = () => {
   return (
      <footer className={`${styles.footer} flex flex-col`}>
         <div className={`content-wrapper ${styles.top} flex `}>
            <div className={`${styles.contacts} flex`}>
               <div className={`${styles.logo} flex flex-col`}>
                  <h3 className={`text-32 whitespace-nowrap`}>Олег Бурмистров</h3>
               </div>
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
