import Link from './Item';
import { Text } from '@shared/text';
import { AnimationFade } from '@shared/animation';
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
            {/* <Link href="#" className={`text-32 will-blue will-underline whitespace-nowrap w-fit`}>
               Linkedin
            </Link> */}
            {/* <Link href="#" className={`text-32 will-blue will-underline whitespace-nowrap w-fit`}>
               Habr
            </Link> */}
         </div>
         <div className={`${styles.sublist} flex flex-col`}>
            <AnimationFade>
               <Text className={`text-20`}>по вопросам сотрудничества</Text>
            </AnimationFade>
            <Link href="#" className={`text-32 will-blue will-underline whitespace-nowrap w-fit`}>
               hello@burmister.pro
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
