'use client';
import Link from 'next/link';
import styles from './styles.module.scss';

const LinkBlack = ({ children, className, href, ...props }) => {
   return (
      <Link className={`w-fit text-20 text-white background-black rounded-90 ${styles.link} ${className && className}`} href={href} {...props}>
         {children}
      </Link>
   );
};

export default LinkBlack;
