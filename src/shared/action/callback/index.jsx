'use client';
import { ButtonBlack } from '@shared/button';
import { usePopupStore } from '@stores/popup';

const ActionCallback = () => {
   const setOpenComponent = usePopupStore((store) => store.setOpenComponent);
   const handleClick = () => {
      setOpenComponent('ContactForm');
      setOpenComponent('ContactMe');
   };

   return (
      <ButtonBlack type="button" callback={() => handleClick()}>
         На связи
      </ButtonBlack>
   );
};

export default ActionCallback;
