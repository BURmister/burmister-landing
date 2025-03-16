import Section from '@widgets/home/Section';
import List from './List';

import styles from './styles.module.scss';
import { PortfolioData } from './mock';

const Header = () => {
   return (
      <div className={`content-wrapper ${styles.header} flex flex-col`}>
         <h2 className={`caption-96 ${styles.title}`}>Недавние проекты</h2>
         <p className={`text-24 ${styles.description}`}>Работы, созданные со страстью</p>
      </div>
   );
};

const Portfolio = () => {
   return (
      <Section className={`${styles.section}`} header={<Header />}>
         <List data={PortfolioData} />
      </Section>
   );
};

export default Portfolio;
