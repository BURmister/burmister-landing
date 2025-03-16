import Link from 'next/link';
import Image from 'next/image';

import styles from './styles.module.scss';

const PortfolioCard = ({ data }) => {
   return (
      <Link className={`${styles.card} flex flex-col will-blue`} href="#">
         <Image className={`rounded-24 ${styles.image}`} src={data.Image} width={790} height={385} alt={data.Name} />
         <p className={`text-32 ${styles.title}`}>{data.Name}</p>
      </Link>
   );
};

export default PortfolioCard;
