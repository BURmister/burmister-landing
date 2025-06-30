// lib/popupComponents.js
import dynamic from 'next/dynamic';

export const popupComponents = {
   ContactForm: dynamic(() => import('@shared/form').then((mod) => mod.ContactForm), {
      loading: () => <div>Загрузка...</div>,
      ssr: false,
   }),
   ContactMe: dynamic(() => import('@shared/info').then((mod) => mod.ContactMe), {
      loading: () => <div>Загрузка...</div>,
      ssr: false,
   }),
   // добавляешь сюда любые другие попапы
};
