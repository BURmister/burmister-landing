import Section from '@widgets/home/Section';

import Header from './Header';
import List from './List';
import Text from './Text';
import styles from './styles.module.scss';

const data = {
   List: [
      '<span class="text-blue">4+</span> года опыта в создании цифровых продуктов',
      '<span class="text-blue">15+</span> клиентов, доверивших развитие своих идей',
      '<span class="text-blue">20+</span> успешных проектов в разных индустриях',
      // '<span class="text-blue">Сооснователь</span> и&nbsp;<span class="text-blue">CEO</span> студии&nbsp;Qretex',
      '<span class="text-blue">Руководитель</span> отдела в ББ',
   ],
   Description: 'Сильные проекты — это не просто задачи<br />Это создание ценности для клиента и бизнеса',
};

const Statistics = () => {
   return (
      <Section className={`${styles.section}`} header={<Header />} legend={'следующий проект может быть вашим'}>
         <div className={`content-wrapper ${styles.content} flex`}>
            <div className={`flex flex-col ${styles.textWrapper}`}>
               <List data={data.List} />
               <Text data={data.Description} />
            </div>
         </div>
      </Section>
   );
};

export default Statistics;
