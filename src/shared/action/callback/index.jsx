'use client';
import { ButtonBlack, ButtonGrey } from '@shared/button';
import { usePopupStore } from '@stores/popup';

const ActionCallback = ({ title, color = 'black' }) => {
   const setOpenComponent = usePopupStore((store) => store.setOpenComponent);
   const handleClick = () => {
      setOpenComponent('ContactForm');
      setOpenComponent('ContactMe');
   };

   return (
      <>
         {color === 'grey' ? (
            <ButtonGrey type="button" callback={() => handleClick()}>
               {title || 'На связи'}
            </ButtonGrey>
         ) : (
            <ButtonBlack type="button" callback={() => handleClick()}>
               {title || 'На связи'}
            </ButtonBlack>
         )}
      </>
   );
};

export default ActionCallback;
