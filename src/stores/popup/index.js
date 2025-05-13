import { create } from 'zustand';

export const usePopupStore = create((set) => ({
   isOpen: false,
   setOpen: () =>
      set(() => {
         document.documentElement.style.overflow = 'hidden';
         console.log('open popup');
         return { isOpen: true };
      }),
   setClose: () =>
      set(() => {
         document.documentElement.style.overflow = 'auto';
         return { isOpen: false };
      }),
}));
