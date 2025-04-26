import NextImage from 'next/image';
import styles from './styles.module.scss';

const Image = ({ className, src, ...props }) => {
   return (
      <NextImage
         className={`rounded-24 object-cover ${styles.image} ${className && className}`}
         src={process.env.NEXT_PUBLIC_CMS_URL + src}
         {...props}
         loading="lazy"
         style={{ objectFit: 'cover' }}
      />
   );
};

export default Image;
