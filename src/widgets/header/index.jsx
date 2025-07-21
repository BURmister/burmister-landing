import Logo from '@shared/logo';
import { ActionCallback } from '@shared/action';
// import { ButtonGrey } from '@shared/button';

import styles from './styles.module.scss';

const Header = () => {
   return (
      <header className={`${styles.header} pointer-events-none`}>
         <div className={`content-wrapper ${styles.wrapper} flex `}>
            <Logo className={`pointer-events-auto`} />
            <div className={`pointer-events-auto ${styles.actions} flex`}>
               <ActionCallback title="Обсудить проект" />
               {/* <ButtonGrey type="button">меню</ButtonGrey> */}
            </div>
         </div>
      </header>
   );
};

export default Header;
