import NextImage from 'next/image';
import styles from './styles.module.scss';

const Video = ({ className, ...props }) => {
   return (
      <NextImage
         className={`rounded-24 object-cover ${styles.image} ${className && className}`}
         width={680}
         height={420}
         {...props}
         loading="lazy"
         style={{ objectFit: 'cover' }}
      />
   );
};

export default Video;
