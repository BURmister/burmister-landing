import qs from 'qs';
import { superFetch } from '@hooks/fetch';
import Section from '@widgets/home/Section';
import List from '@widgets/portfolio/List';

import Header from './Header';
import styles from './styles.module.scss';

const Portfolio = async ({ data }) => {
   const PorfolioFilter = data?.portfolios?.map((item) => item.id);

   const queryParams = qs.stringify(
      {
         filters: {
            id: {
               $in: PorfolioFilter,
            },
         },
         sort: ['Sort:desc'],
      },
      {
         encodeValuesOnly: true,
      },
   );
   const response = await superFetch(`portfolios?populate=*&${queryParams}`);

   return (
      <Section className={`${styles.section}`} header={<Header data={data?.Config} />}>
         <List data={response?.data} />
      </Section>
   );
};

export default Portfolio;
