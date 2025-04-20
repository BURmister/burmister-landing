import { Video } from '@shared/media';
import Section from '@widgets/home/Section';

import Header from './Header';
import List from './List';
import styles from './styles.module.scss';

const Values = [
   {
      Title: 'Стратегическое видение',
      Description: 'Не просто решаю задачи — вижу направление роста и&nbsp;помогаю&nbsp;выстроить&nbsp;путь к&nbsp;долгосрочным результатам',
   },
   // {
   //    Title: 'Нестандартные решения',
   //    Description: 'Нахожу неожиданные, но рабочие пути реализации идей, когда&nbsp;стандартные методы не&nbsp;работают',
   // },
   {
      Title: 'Широкий спектр услуг',
      Description: 'Проектируем, дизайним и продвигаем - через партнёрства с&nbsp;сильными командами превращаем идею в работающий продукт ',
   },
   {
      Title: 'Проект не&nbsp;буксует',
      Description: 'Настраиваю ритм, синхронизацию и ясность. <br />Работы&nbsp;двигаются, а&nbsp;не&nbsp;замирают',
   },
   {
      Title: 'Умею договариваться',
      Description: 'С любым стейкхолдером. Чтобы идеи становились делом — а&nbsp;дело&nbsp;приносило результат',
   },
];

const Value = () => {
   return (
      <Section className={`${styles.section}`} header={<Header />}>
         <div className={`relative content-wrapper ${styles.content} flex`}>
            <List data={Values} />
            <div className={`${styles.mediaWrapper}`}>
               <Video className={`${styles.media}`} src="/mock/race.mp4" type="video/mp4" />
            </div>
         </div>
      </Section>
   );
};

export default Value;
