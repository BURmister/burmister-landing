import { ButtonBlack } from '@/src/shared/button';
import { Video } from '@/src/shared/media';

import Section from '@widgets/home/Section';

import styles from './styles.module.scss';

const Header = () => {
   return (
      <div className={`content-wrapper ${styles.header} flex flex-col`}>
         <p className={`caption-96 ${styles.title}`}>Материальное — </p>
         <p className={`caption-96 italic ${styles.title}`}>результат созидания</p>
      </div>
   );
};

const Experience = () => {
   return (
      <Section className={`${styles.section}`} header={<Header />} legend={'мои проекты — материализованная мысль'}>
         <div className={`content-wrapper ${styles.content} flex`}>
            <div className={`${styles.mediaWrapper}`}>
               <Video className={styles.media} src="/mock/gt3rs.mp4" type="video/mp4" />
            </div>
            <div className={`flex flex-col ${styles.textWrapper}`}>
               <div className={`flex flex-col ${styles.text}`}>
                  <p className={`text-24 text-pretty`}>
                     На моём пути — десятки проектов: от веб-приложений до бизнес-решений. Я создавал стартап-студию Qretex, запускал магазин
                     OnlyFunko, руководил командами, которые завершали сложные проекты, и воплощал идеи, которые казались невозможными.
                  </p>
                  <p className={`text-24 text-pretty`}>
                     Каждый мой проект — это вызов устоявшимся нормам и подтверждение того, что границы реальны только для тех, кто их признаёт.
                  </p>
               </div>
               <ButtonBlack type="button">на связи</ButtonBlack>
            </div>
         </div>
      </Section>
   );
};

export default Experience;
