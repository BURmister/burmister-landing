import { ButtonBlack } from '@/src/shared/button';
import { Video } from '@/src/shared/media';

import Section from '@widgets/home/Section';
import Header from './Header';
import styles from './styles.module.scss';

const Experience = () => {
   return (
      <Section className={`${styles.section}`} header={<Header />} legend={'мои проекты — материализованная мысль'}>
         <div className={`content-wrapper ${styles.content} flex`}>
            <div className={`${styles.mediaWrapper}`}>
               <Video className={styles.media} src="/mock/gt3rs-2.mp4" type="video/mp4" />
            </div>
            <div className={`flex flex-col ${styles.textWrapper}`}>
               <div className={`flex flex-col ${styles.text}`}>
                  <p className={`text-24 text-pretty`}>
                     На моём пути — десятки разноплановых проектов: от веб-приложений до масштабных бизнес-решений. Я создал стартап-студию Qretex,
                     запустил нишевый e-commerce OnlyFunko, выстраивал команды, которые брались за сложное — и доводили до результата.
                  </p>
                  <p className={`text-24 text-pretty`}>
                     Моё участие — это не просто код или контроль, это движение от идеи до работающего решения. Каждый проект для меня — вызов. И
                     каждый результат — доказательство того, что невозможное возможно, если подходить с умом, страстью и без страха перед
                     нестандартом.
                  </p>
               </div>
               <ButtonBlack type="button">на связи</ButtonBlack>
            </div>
         </div>
      </Section>
   );
};

export default Experience;
