import qs from 'qs';
import { superFetch } from '@/src/hooks/fetch';
import Section from '@widgets/home/Section';

import Header from './Header';
import List from './List';
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
      },
      {
         encodeValuesOnly: true, // важная штука, чтобы не было лишнего уродства в URL
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
