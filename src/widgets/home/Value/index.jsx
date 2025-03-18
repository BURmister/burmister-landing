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
                  <h3 className={`caption-64`}>Стратегическое видение</h3>
                  <p className={`text-24 text-pretty`}>Помогаю проекту не просто решать текущие задачи, а строить долгосрочную стратегию развития</p>
               </div>
               <div className={`flex flex-col ${styles.text}`}>
                  <h3 className={`caption-64`}>Креатив и нестандартные решения</h3>
                  <p className={`text-24 text-pretty`}>Нахожу неожиданные, но рабочие пути реализации идей, когда стандартные методы не работают</p>
               </div>
               <div className={`flex flex-col ${styles.text}`}>
                  <h3 className={`caption-64`}>Эффективность команды</h3>
                  <p className={`text-24 text-pretty`}>
                     Выстраиваю процессы так, чтобы команда работала слаженно, а проект двигался быстрее и без хаоса
                  </p>
               </div>
               <div className={`flex flex-col ${styles.text}`}>
                  <h3 className={`caption-64`}>Переговоры и партнерства</h3>
                  <p className={`text-24 text-pretty`}>
                     Умею находить общий язык с клиентами, инвесторами и партнерами, превращая идеи в реальные сделки
                  </p>
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
