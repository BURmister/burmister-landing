import { ButtonBlack } from '@/src/shared/button';
import { Video } from '@/src/shared/media';

import Section from '@widgets/home/Section';

import styles from './styles.module.scss';

const Header = () => {
   return (
      <div className={`content-wrapper ${styles.header} flex flex-col`}>
         <p className={`caption-96 ${styles.title}`}>Рамки исчезают с началом</p>
         <p className={`caption-96 italic ${styles.title}`}>настоящего мышления</p>
      </div>
   );
};

const Beyond = () => {
   return (
      <Section className={`${styles.section}`} header={<Header />} legend={'кто такой burmister?'}>
         <div className={`content-wrapper ${styles.content} flex`}>
            <div className={`${styles.mediaWrapper}`}>
               <Video className={styles.media} src="/mock/gt3rs.mp4" type="video/mp4" />
            </div>
            <div className={`flex flex-col ${styles.textWrapper}`}>
               <p className={`text-24 text-pretty ${styles.text}`}>
                  Создаю решения, которые выходят за пределы возможного, объединяя креативные идеи и современные технологии. <br />
                  Всё это работает на рост бизнеса и достижение поставленных целей. Мой опыт — это веб- и мобильная разработка, управление командами,
                  стратегическое планирование и переговоры
               </p>
               <ButtonBlack type="button">на связи</ButtonBlack>
            </div>
         </div>
      </Section>
   );
};

export default Beyond;
