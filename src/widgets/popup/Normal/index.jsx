'use client';
import { usePopupStore } from '@stores/popup';
import { PopupWrapper } from '@widgets/popup';
import styles from './styles.module.scss';

const Popup = ({ className = {}, closeOnClickOutside = true }) => {
   const { isOpen, content, setClose } = usePopupStore((store) => store);

   const handleOverlayClick = () => {
      if (closeOnClickOutside) setClose();
   };

   return (
      <PopupWrapper className={{ content: styles.contentWrapper }} isOpen={isOpen} handleOverlayClick={() => handleOverlayClick()}>
         <div className={`relative w-full background-grey-bg rounded-16 ${styles.popup} ${className.popup}`}>{content}</div>
      </PopupWrapper>
   );
};

export default Popup;
