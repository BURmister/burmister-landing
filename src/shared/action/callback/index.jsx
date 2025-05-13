'use client';
import { ButtonBlack } from '@shared/button';
// import { usePopupStore } from '@stores/popup';

const ActionCallback = () => {
   // const { setOpen } = usePopupStore((store) => store);
   const handleClick = () => {
      document.getElementById('FormWrapper')?.scrollIntoView({ behavior: 'smooth' });
   };

   return (
      // <ButtonBlack type="button" callback={() => setOpen()}>
      <ButtonBlack type="button" callback={() => handleClick()}>
         на связи
      </ButtonBlack>
   );
};

export default ActionCallback;
