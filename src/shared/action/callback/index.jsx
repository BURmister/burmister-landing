'use client';
import dynamic from 'next/dynamic';

import { ButtonBlack } from '@shared/button';
import { usePopupStore } from '@stores/popup';

const ContactForm = dynamic(() =>
   import('@shared/form').then((mod) => mod.ContactForm),
   {
      loading: () => <div>Загрузка...</div>,
      ssr: false,
   }
);


const ActionCallback = () => {
   const setOpenComponent = usePopupStore((store) => store.setOpenComponent);
   const handleClick = () => {
      // document.getElementById('FormWrapper')?.scrollIntoView({ behavior: 'smooth' });
      setOpenComponent('ContactForm');
   };

   return (
      // <ButtonBlack type="button" callback={() => setOpen()}>
      <ButtonBlack type="button" callback={() => handleClick()}>
         на связи
      </ButtonBlack>
   );
};

export default ActionCallback;
