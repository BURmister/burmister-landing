'use client';
import { ButtonBlack } from '@shared/button';
import { usePopupStore } from '@stores/popup';

const ActionCallback = ({ title }) => {
   const setOpenComponent = usePopupStore((store) => store.setOpenComponent);
   const handleClick = () => {
      setOpenComponent('ContactForm');
      setOpenComponent('ContactMe');
   };

   return (
      <ButtonBlack type="button" callback={() => handleClick()}>
         {title || 'На связи'}
      </ButtonBlack>
   );
};

export default ActionCallback;
