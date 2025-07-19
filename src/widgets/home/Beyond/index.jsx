import { BlockTextAction } from '@shared/block';

import Section from '@widgets/home/Section';
import Header from './Header';

import styles from './styles.module.scss';

const Beyond = ({ data }) => {
   return (
      <Section className={`${styles.section}`} header={<Header data={data?.Config} />} legend={data?.Config?.Legend}>
         <BlockTextAction text={data?.Text} />
      </Section>
   );
};

export default Beyond;
