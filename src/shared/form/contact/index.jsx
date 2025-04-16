'use client';

import { InputGrey, TextareaGrey, InputGreyPhone } from '@shared/input';
import { ButtonBlack } from '@shared/button';

import styles from './styles.module.scss';

const ContactForm = ({ className }) => {
   const onSubmit = (event) => {
      event.preventDefault();
      console.log('submit');
   };

   return (
      <form onSubmit={onSubmit} className={`${styles.form} ${className && className} flex flex-col`}>
         <div className={`${styles.row} flex`}>
            <InputGrey type="text" name="NAME" id="name" title="Имя" />
            <InputGreyPhone name="PHONE" id="phone" title="Телефон" />
         </div>
         <TextareaGrey className={`${styles.textarea}`} type="text" name="COMMENT" id="comment" title="Комментарий" />
         <ButtonBlack type="submit">отправить</ButtonBlack>
      </form>
   );
};

export default ContactForm;
