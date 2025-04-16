import Section from '@widgets/home/Section';
import Header from './Header';
import styles from './styles.module.scss';

const Statistics = () => {
   return (
      <Section className={`${styles.section}`} header={<Header />} legend={'следующий проект может быть вашим'}>
         <div className={`content-wrapper ${styles.content} flex`}>
            <div className={`flex flex-col ${styles.textWrapper}`}>
               <p className={`caption-64 text-pretty`}>
                  <span className={`text-blue`}>4+</span> года опыта в создании цифровых продуктов
               </p>
               <p className={`caption-64 text-pretty`}>
                  <span className={`text-blue`}>15+</span> клиентов, доверивших развитие своих идей
               </p>
               <p className={`caption-64 text-pretty`}>
                  <span className={`text-blue`}>20+</span> успешных проектов в разных индустриях
               </p>
               {/* <p className={`caption-64 text-pretty`}>
                  <span className={`text-blue`}>Сооснователь</span> и&nbsp;<span className={`text-blue`}>CEO</span> студии&nbsp;Qretex
               </p> */}
               <p className={`caption-64 text-pretty`}>
                  <span className={`text-blue`}>Руководитель</span> отдела в ББ
               </p>
               <p className={`text-32 text-pretty`}>
                  Сильные проекты — это не просто задачи
                  <br />
                  Это создание ценности для клиента и бизнеса
               </p>
            </div>
         </div>
      </Section>
   );
};

export default Statistics;
