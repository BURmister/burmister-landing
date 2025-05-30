import { create } from 'zustand';
import { getLenis } from '@hooks/lenis';
import { popupComponents } from '@hooks/popup';

export const usePopupStore = create((set, get) => ({
   isOpen: false,
   content: null,

   setOpenComponent: (key) => {
      const Component = popupComponents[key];
      if (!Component) return console.warn(`Нет попапа с ключом: ${key}`);
      get().setOpen(<Component />);
   },

   setOpen: (element) => {
      const lenis = getLenis();
      lenis?.stop(); // ← теперь работает
      set({ isOpen: true, content: element });
   },

   setClose: () => {
      const lenis = getLenis();
      lenis?.start(); // ← и это тоже
      set({ isOpen: false, content: null });
   },
}));
