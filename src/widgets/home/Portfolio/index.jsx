import Section from '@widgets/home/Section';

import Header from './Header';
import List from './List';
import styles from './styles.module.scss';
import { PortfolioData } from './mock';

const Portfolio = () => {
   return (
      <Section className={`${styles.section}`} header={<Header />}>
         <List data={PortfolioData} />
      </Section>
   );
};

export default Portfolio;
