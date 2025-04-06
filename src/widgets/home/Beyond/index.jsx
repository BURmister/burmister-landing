import { ButtonBlack } from '@/src/shared/button';
import { Video } from '@/src/shared/media';

import Section from '@widgets/home/Section';
import Header from './Header';

import styles from './styles.module.scss';

const Beyond = () => {
   return (
      <Section className={`${styles.section}`} header={<Header />} legend={'кто такой burmister?'}>
         <div className={`content-wrapper ${styles.content} flex`}>
            <div className={`${styles.mediaWrapper}`}>
               <Video className={styles.media} src="/mock/gt3rs.mp4" type="video/mp4" />
            </div>
            <div className={`flex flex-col ${styles.textWrapper}`}>
               <div className={`flex flex-col ${styles.text}`}>
                  <p className={`text-24 text-pretty`}>
                     Я создаю решения, где идея — не просто вдохновение, а отправная точка для технологии, продукта и результата. Запускаю проекты,
                     управляю командой, веду переговоры и внедряю новое. <br />
                     Всё, что я делаю, подчинено одной цели — росту вашего бизнеса.
                  </p>
                  <p className={`text-24 text-pretty`}>
                     Объединяю стратегию и творчество. Вижу продукт с высоты бизнеса и с глубины разработки. И да, иногда думаю
                     о&nbsp;911'ом&nbsp;GT3&nbsp;RS, но сначала — о&nbsp;том, как закрыть цели по вашему проекту.
                  </p>
               </div>
               <ButtonBlack type="button">на связи</ButtonBlack>
            </div>
         </div>
      </Section>
   );
};

export default Beyond;
