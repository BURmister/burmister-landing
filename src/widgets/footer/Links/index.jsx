import Link from './Item';
import { TextFade } from '@/src/shared/text';
import styles from './styles.module.scss';

const Links = () => {
   return (
      <div className={`${styles.network} flex flex-col`}>
         <div className={`${styles.sublist} flex flex-col`}>
            <Link href="#" className={`text-32 will-blue will-underline whitespace-nowrap w-fit`}>
               Github
            </Link>
            <Link href="#" className={`text-32 will-blue will-underline whitespace-nowrap w-fit`}>
               Telegram
            </Link>
            <Link href="#" className={`text-32 will-blue will-underline whitespace-nowrap w-fit`}>
               Linkedin
            </Link>
            <Link href="#" className={`text-32 will-blue will-underline whitespace-nowrap w-fit`}>
               Habr
            </Link>
         </div>
         <div className={`${styles.sublist} flex flex-col`}>
            <TextFade className={`text-20`}>по вопросам сотрудничества</TextFade>
            <Link href="#" className={`text-32 will-blue will-underline whitespace-nowrap w-fit`}>
               hello@burmister.ru
            </Link>
         </div>
         {/* <div className={`${styles.sublist} flex flex-col`}>
            <Link href="#" className={`text-32 will-blue will-underline whitespace-nowrap w-fit`}>
               Qretex
            </Link>
         </div> */}
      </div>
   );
};

export default Links;
