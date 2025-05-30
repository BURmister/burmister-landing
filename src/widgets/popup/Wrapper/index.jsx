// components/Popup/index.jsx
'use client';
import { usePopupStore } from '@stores/popup';
import { ButtonIcon } from '@shared/button';
import styles from './styles.module.scss';

const Popup = ({ className = {}, closeOnClickOutside = true }) => {
   const { isOpen, content, setClose } = usePopupStore((store) => store);

   if (!isOpen) return null;

   const handleOverlayClick = () => {
      if (closeOnClickOutside) setClose();
   };

   return (
      <div className={`fixed flex  ${styles.wrapper} ${className.wrapper} ${isOpen && 'active'}`}>
         <div className={`fixed ${styles.overlay}`} onClick={handleOverlayClick}></div>
         <div className={`relative background-white rounded-16 ${styles.popup} ${className.popup}`}>
            <ButtonIcon className={`absolute ${styles.close}`} callback={() => setClose()}>
               <svg
                  className={`${styles.closeIcon}`}
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="20px"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                     fill="none"
                     strokeMiterlimit="10"
                     strokeWidth="32"
                     d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"></path>
                  <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M320 320 192 192m0 128 128-128"></path>
               </svg>
            </ButtonIcon>
            {content}
         </div>
      </div>
   );
};

export default Popup;
