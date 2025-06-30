import Link from './Item';
import { Text } from '@shared/text';
import { AnimationFade } from '@shared/animation';
import styles from './styles.module.scss';

const Links = () => {
   return (
      <div className={`${styles.network} flex flex-col`}>
         <div className={`${styles.sublist} flex flex-col`}>
            <Link target="_blank" href="https://habr.com/ru/users/bur_mister/" className={`text-32 will-blue will-underline whitespace-nowrap w-fit`}>
               Habr
            </Link>
            <Link target="_blank" href="https://github.com/burmister" className={`text-32 will-blue will-underline whitespace-nowrap w-fit`}>
               GitHub
            </Link>
         </div>
         <div className={`${styles.sublist} flex flex-col`}>
            <AnimationFade>
               <Text className={`text-20`}>по вопросам сотрудничества</Text>
            </AnimationFade>
            {/* <Link target="_blank" href="https://t.me/bur_mister" className={`text-32 will-blue will-underline whitespace-nowrap w-fit`}>
               Telegram
            </Link>
            <Link target="_blank" href="https://wa.me/+79015200302" className={`text-32 will-blue will-underline whitespace-nowrap w-fit`}>
               WhatsApp
            </Link> */}
            <Link href="mailto:burmister.pro@gmail.com" className={`text-32 will-blue will-underline whitespace-nowrap w-fit`}>
               hello@burmister.pro
            </Link>
         </div>
         {/* <div className={`${styles.sublist} flex flex-col`}>
            <Link href="#" className={`text-32 will-blue will-underline whitespace-nowrap w-fit`}>
               Бюро Буракова
            </Link>
            <Link href="#" className={`text-32 will-blue will-underline whitespace-nowrap w-fit`}>
               Qretex
            </Link>
         </div> */}
      </div>
   );
};

export default Links;
