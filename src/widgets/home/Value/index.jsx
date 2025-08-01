import Section from '@widgets/home/Section';

import Header from './Header';
import List from './List';
import styles from './styles.module.scss';

const Value = ({ data }) => {
   return (
      <Section className={`${styles.section}`} header={<Header data={data?.Config} />}>
         <div className={`relative content-wrapper ${styles.content} flex`}>
            <List data={data?.List} />
         </div>
      </Section>
   );
};

export default Value;
