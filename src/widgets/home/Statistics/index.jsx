import Section from '@widgets/home/Section';
import styles from './styles.module.scss';

const Header = () => {
   return (
      <div className={`content-wrapper ${styles.header} flex flex-col`}>
         <h2 className={`caption-96 ${styles.title}`}>Уникальный подход — </h2>
         <h2 className={`caption-96 italic ${styles.title}`}>уникальный результат</h2>
      </div>
   );
};

const Statistics = () => {
   return (
      <Section className={`${styles.section}`} header={<Header />} legend={'следующий проект может быть вашим'}>
         <div className={`content-wrapper ${styles.content} flex`}>
            <div className={`flex flex-col ${styles.textWrapper}`}>
               <p className={`caption-64 text-pretty`}>
                  <span className={`text-blue`}>4+</span> года опыта в создании цифровых продуктов
               </p>
               <p className={`caption-64 text-pretty`}>
                  <span className={`text-blue`}>15+</span> постоянных клиентов, доверивших свои идеи
               </p>
               <p className={`caption-64 text-pretty`}>
                  <span className={`text-blue`}>20+</span> успешных проектов в разных индустриях
               </p>
               <p className={`caption-64 text-pretty`}>
                  <span className={`text-blue`}>CO-Founder</span> и <span className={`text-blue`}>CEO</span> студии Qretex
               </p>
               <p className={`text-32 text-pretty`}>
                  Сильные проекты — это не просто выполнение задачи
                  <br />
                  Это создание ценности для клиента и бизнеса
               </p>
            </div>
         </div>
      </Section>
   );
};

export default Statistics;
