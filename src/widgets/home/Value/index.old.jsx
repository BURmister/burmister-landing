import { Video } from '@shared/media';
import Section from '@widgets/home/Section';

import Header from './Header';
import List from './List';
import styles from './styles.module.scss';

const Value = ({ data }) => {
   return (
      <Section className={`${styles.section}`} header={<Header data={data?.Config} />}>
         <div className={`relative content-wrapper ${styles.content} flex`}>
            <List data={data?.List} />
            {data?.Media?.url && (
               <div className={`${styles.mediaWrapper}`}>
                  <Video className={`${styles.media}`} src={data?.Media?.url} type={data?.Media?.mime} />
               </div>
            )}
         </div>
      </Section>
   );
};

export default Value;
