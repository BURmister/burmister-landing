'use client';
import { useState, Fragment } from 'react';
import Item from './Item';

import styles from './styles.module.scss';

const CONTACTS = [
   {
      name: 'Telegram',
      href: 'https://t.me/bur_mister',
      qr: '/mock/qr-tg.svg',
      alt: 'QR-code with link on telegram profile',
   },
   {
      name: 'WhatsApp',
      href: 'https://wa.me/+79015200302',
      qr: '/mock/qr-wa.svg',
      alt: 'QR-code with link on whatsapp profile',
   },
   // можно добавлять сколько угодно
];

const ContactMe = ({ className }) => {
   const [hoveredIndex, setHoveredIndex] = useState(null);

   return (
      <div className={`${className && className} ${styles.wrapper} flex flex-col`}>
         <p className={`caption-40 text-pretty`}>Один клик — и мы на связи</p>
         <div className={`${styles.list} flex flex-col`}>
            {CONTACTS.map((contact, index) => (
               <Fragment key={index}>
                  <Item
                     data={contact}
                     disabled={hoveredIndex !== null && hoveredIndex !== index}
                     onMouseEnter={() => setHoveredIndex(index)}
                     onMouseLeave={() => setHoveredIndex(null)}
                  />
               </Fragment>
            ))}
         </div>
      </div>
   );
};

export default ContactMe;
