import { Video } from '@shared/media';
import Section from '@widgets/home/Section';
import Header from './Header';
import styles from './styles.module.scss';

const Value = () => {
   return (
      <Section className={`${styles.section}`} header={<Header />}>
         <div className={`relative content-wrapper ${styles.content} flex`}>
            <div className={`flex flex-col ${styles.textWrapper}`}>
               <div className={`flex flex-col ${styles.text}`}>
                  <h3 className={`caption-64 text-pretty`}>Стратегическое видение</h3>
                  <p className={`text-24 text-pretty`}>
                     Не просто решаю задачи — вижу направление роста и&nbsp;помогаю&nbsp;выстроить&nbsp;путь к&nbsp;долгосрочным результатам
                  </p>
               </div>
               <div className={`flex flex-col ${styles.text}`}>
                  <h3 className={`caption-64 text-pretty`}>Нестандартные решения</h3>
                  <p className={`text-24 text-pretty`}>
                     Нахожу неожиданные, но рабочие пути реализации идей, когда&nbsp;стандартные методы не&nbsp;работают
                  </p>
               </div>
               <div className={`flex flex-col ${styles.text}`}>
                  <h3 className={`caption-64 text-pretty`}>Команда не&nbsp;буксует</h3>
                  <p className={`text-24 text-pretty`}>
                     Настраиваю ритм, синхронизацию и ясность. <br />
                     Проекты&nbsp;двигаются, а&nbsp;не&nbsp;замирают
                  </p>
               </div>
               <div className={`flex flex-col ${styles.text}`}>
                  <h3 className={`caption-64 text-pretty`}>Умею договариваться</h3>
                  <p className={`text-24 text-pretty`}>С любым стейкхолдером. Чтобы идеи становились делом — а&nbsp;дело&nbsp;приносило результат</p>
               </div>
            </div>
            <div className={`${styles.mediaWrapper}`}>
               <Video className={`${styles.media}`} src="/mock/race.mp4" type="video/mp4" />
            </div>
         </div>
      </Section>
   );
};

export default Value;
