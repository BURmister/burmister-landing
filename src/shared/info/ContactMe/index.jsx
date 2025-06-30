'use client';
import Link from 'next/link';
import { useState } from 'react';

import { Image } from '@shared/media';

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
               <Link
                  key={contact.name}
                  href={contact.href}
                  target="_blank"
                  className={`${styles.item} will-blue will-underline rounded-16 flex items-center justify-between background-grey`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}>
                  <p className={`text-32`}>{contact.name}</p>
                  <Image
                     className={`${styles.qr} ${hoveredIndex !== null && hoveredIndex !== index && styles.disabled}`}
                     src={contact.qr}
                     local={true}
                     width={80}
                     height={80}
                     alt={contact.alt}
                  />
               </Link>
            ))}
         </div>
      </div>
   );
};

export default ContactMe;
