import Logo from '@shared/logo';
import { ActionCallback } from '@shared/action';
// import { ButtonGrey } from '@shared/button';

import styles from './styles.module.scss';

const Header = () => {
   return (
      <header className={`${styles.header}`}>
         <div className={`content-wrapper ${styles.wrapper} flex `}>
            <Logo />
            <div className={`${styles.actions} flex`}>
               <ActionCallback />
               {/* <ButtonGrey type="button">меню</ButtonGrey> */}
            </div>
         </div>
      </header>
   );
};

export default Header;
