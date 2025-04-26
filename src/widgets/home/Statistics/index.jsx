import Section from '@widgets/home/Section';
import { TextFade } from '@shared/text';

import Header from './Header';
import List from './List';
import styles from './styles.module.scss';

const data = {
   List: [
      '<span class="text-blue">4+</span> года опыта в создании цифровых продуктов',
      '<span class="text-blue">15+</span> клиентов, доверивших развитие своих идей',
      '<span class="text-blue">20+</span> успешных проектов в&nbsp;разных индустриях',
      // '<span class="text-blue">Сооснователь</span> и&nbsp;<span class="text-blue">CEO</span> студии&nbsp;Qretex',
      '<span class="text-blue">Руководитель</span> отдела в ББ',
   ],
   Description: 'Сильные проекты — это не просто задачи<br />Это создание ценности для клиента и бизнеса',
};

const Statistics = ({ data }) => {
   return (
      <Section className={`${styles.section}`} header={<Header data={data?.Config} />} legend={data?.Config?.Legend}>
         <div className={`content-wrapper ${styles.content} flex`}>
            <div className={`flex flex-col ${styles.textWrapper}`}>
               <List data={data?.Text} />
               <TextFade className={`text-32`} data={data?.Description} isHtml={true} />
            </div>
         </div>
      </Section>
   );
};

export default Statistics;
