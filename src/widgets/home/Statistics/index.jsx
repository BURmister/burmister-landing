import Section from '@widgets/home/Section';
import { Text } from '@shared/text';
import { AnimationFade } from '@shared/animation';

import Header from './Header';
import List from './List';
import styles from './styles.module.scss';

const Statistics = ({ data }) => {
   return (
      <Section className={`${styles.section}`} header={<Header data={data?.Config} />} legend={data?.Config?.Legend}>
         <div className={`content-wrapper ${styles.content} flex`}>
            <div className={`flex flex-col ${styles.textWrapper}`}>
               <List data={data?.Text} />
               <AnimationFade>
                  <Text className={`text-32`} data={data?.Description} isHtml={true} />
               </AnimationFade>
            </div>
         </div>
      </Section>
   );
};

export default Statistics;
