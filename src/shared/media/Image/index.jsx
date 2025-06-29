import NextImage from 'next/image';
import styles from './styles.module.scss';

const Image = ({ className, src, local = false, ...props }) => {
   return (
      <NextImage
         className={`rounded-24 object-cover ${styles.image} ${className && className}`}
         src={!local ? process.env.NEXT_PUBLIC_CMS_URL + src : src}
         {...props}
         loading="lazy"
         style={{ objectFit: 'cover' }}
      />
   );
};

export default Image;
