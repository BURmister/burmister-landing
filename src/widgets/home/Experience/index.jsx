import { BlockVideoText } from '@shared/block';

import Section from '@widgets/home/Section';
import Header from './Header';
import styles from './styles.module.scss';

const Experience = ({ data }) => {
   return (
      <Section className={`${styles.section}`} header={<Header data={data?.Config} />} legend={data?.Config?.Legend}>
         <BlockVideoText video={{ src: data?.Media?.url, type: data?.Media?.mime }} text={data?.Text} />
      </Section>
   );
};

export default Experience;
