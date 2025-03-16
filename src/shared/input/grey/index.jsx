'use client';
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

export const TextareaGrey = ({ title, className, ...props }) => {
   return (
      <textarea
         className={`w-full flex text-24 background-grey rounded-16 input-normal ${styles.input} ${styles.textarea} ${className && className}`}
         placeholder={title}
         {...props}
      />
   );
};
