import { Image } from '@shared/media';
import styles from './styles.module.scss';

const ContactMe = ({ className }) => {
   return (
      <div className={`${className && className} ${styles.wrapper} flex flex-col`}>
         {/* <div className={``}>
            <p className={`text-32 text-pretty`}>Просто: один клик — и мы на связи</p>
         </div> */}
         <div className={`flex`}>
            <div className={`${styles.other}`}></div>
            <div className={`${styles.qr}`}>
               <Image src={'/mock/qr-code.svg'} local={true} width={500} height={500} alt={'QR-code with link on telegram profile'} />
            </div>
         </div>
      </div>
   );
};

export default ContactMe;
