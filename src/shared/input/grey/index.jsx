'use client';
import { useState, useEffect } from 'react';
import styles from './styles.module.scss';

export const InputGrey = ({ title, className, ...props }) => {
   return (
      <input
         className={`w-full flex text-24 background-grey rounded-16 input-normal ${styles.input} ${className && className}`}
         placeholder={title}
         {...props}
      />
   );
};

export const InputGreyPhone = ({ title, className, value = '', onChange, ...props }) => {
   const fixedPart = '+7 (9';
   const [phone, setPhone] = useState('');

   // Синхронизация внешнего значения с внутренним
   useEffect(() => {
      setPhone(value || '');
   }, [value]);

   const handleFocus = () => {
      if (!phone.startsWith(fixedPart)) {
         setPhone(fixedPart);
         onChange?.(fixedPart);
      }
   };

   const handleBlur = () => {
      if (phone === fixedPart) {
         setPhone('');
         onChange?.('');
      }
   };

   const handleInput = (e) => {
      let val = e.target.value;

      if (!val.startsWith(fixedPart)) {
         val = fixedPart;
      }

      // Удаляем всё, кроме цифр после фиксированной части
      let numberPart = val.slice(fixedPart.length).replace(/\D/g, '').slice(0, 10);

      // Форматируем номер
      let formatted = '';
      if (numberPart.length > 0) formatted += numberPart.slice(0, 2);
      if (numberPart.length > 2) formatted += ') ' + numberPart.slice(2, 5);
      if (numberPart.length > 5) formatted += '-' + numberPart.slice(5, 7);
      if (numberPart.length > 7) formatted += '-' + numberPart.slice(7);

      const full = fixedPart + formatted;
      setPhone(full);
      onChange?.(full);
   };

   return (
      <input
         className={`w-full flex text-24 background-grey rounded-16 input-normal ${styles.input} ${className && className}`}
         type="tel"
         value={phone}
         onFocus={handleFocus}
         onBlur={handleBlur}
         onInput={handleInput}
         placeholder={title}
         {...props}
      />
   );
};

export const TextareaGrey = ({ title, className, ...props }) => {
   return (
      <textarea
         className={`w-full flex text-24 background-grey rounded-16 input-normal ${styles.input} ${styles.textarea} ${className && className}`}
         placeholder={title}
         {...props}
      />
   );
};
