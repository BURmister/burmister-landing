'use client';
import { useRef, useState } from 'react';

import { InputGrey, TextareaGrey, InputGreyPhone } from '@shared/input';
import { ButtonBlack } from '@shared/button';
import { Text } from '@shared/text';
import { localFetch } from '@hooks/fetch';

import styles from './styles.module.scss';

const ContactForm = ({ className }) => {
   const [error, setError] = useState({ name: '', message: '' });
   const [loading, setLoading] = useState(false);
   const [success, setSuccess] = useState(false);
   const form = useRef();

   const onSubmit = async (event) => {
      if (event && event.preventDefault) event.preventDefault();
      return;
      const formData = new FormData(form.current);

      if (!formData || loading || success) return;
      setLoading(() => true);
      setError({ name: '', message: '' });

      const data = {
         Name: formData.get('NAME'),
         Contact: formData.get('PHONE'),
         Comment: formData.get('COMMENT'),
      };

      if (!data.Name) {
         setLoading(() => false);
         setError({
            name: 'NAME',
            message: 'Заполните поле',
         });
         return;
      }

      if (!data.Contact || data.Contact.trim().length !== 18) {
         setLoading(() => false);
         setError({
            name: 'PHONE',
            message: 'Заполните поле',
         });
         return;
      }

      const response = await localFetch(`request`, { method: 'POST', body: { data } }, true);
      console.log(response);
      setLoading(() => false);

      if (response?.error) {
         setError({
            name: '',
            message: 'Ошибка',
         });
         return;
      }
      setSuccess(() => true);
   };

   return (
      <form ref={form} onSubmit={onSubmit} className={`${styles.form} ${className && className} flex flex-col`}>
         <div className={`${styles.row} flex`}>
            <InputGrey type="text" name="NAME" id="name" title="Имя" required />
            <InputGreyPhone name="PHONE" id="phone" title="Телефон" required />
         </div>
         <TextareaGrey className={`${styles.textarea}`} type="text" name="COMMENT" id="comment" title="Комментарий" />
         <Text className={`text-grey2 text-18`}>Отправляя форму, вы соглашаетесь с политикой конфиденциальности</Text>
         <ButtonBlack type="submit">отправить</ButtonBlack>
         <div className={`${styles.stub} flex items-center justify-center rounded-16`}>
            <p className="text-16 text-center text-pretty">Форма пока не работает, чтобы не&nbsp;собирать персональные данные</p>
         </div>
      </form>
   );
};

export default ContactForm;
