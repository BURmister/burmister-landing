import Logo from '@shared/logo';
import { ButtonBlack, ButtonGrey } from '@shared/button';

import styles from './styles.module.scss';

const Header = () => {
   return (
      <header className={`${styles.header}`}>
         <div className={`content-wrapper ${styles.wrapper} flex `}>
            <Logo />
            <div className={`${styles.actions} flex`}>
               <ButtonBlack type="button">на связи</ButtonBlack>
               <ButtonGrey type="button">меню</ButtonGrey>
            </div>
         </div>
      </header>
   );
};

export default Header;
