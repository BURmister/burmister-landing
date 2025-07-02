import { Image } from '@shared/media';
import Link from 'next/link';

import styles from './styles.module.scss';

const Item = ({ data, disabled, onMouseEnter, onMouseLeave }) => {
   return (
      <Link
         key={data.name}
         href={data.href}
         target="_blank"
         className={`
            ${styles.item} 
            ${disabled && styles.disabled}
            will-blue will-underline rounded-16 flex items-center justify-between background-grey
         `}
         onMouseEnter={() => onMouseEnter()}
         onMouseLeave={() => onMouseLeave()}>
         <p className={`text-32`}>{data.name}</p>
         <Image className={`${styles.qr}`} src={data.qr} local={true} width={80} height={80} alt={data.alt} />
      </Link>
   );
};

export default Item;
