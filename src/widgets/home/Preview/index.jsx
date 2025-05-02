import Section from '@widgets/home/Section';
import { Image } from '@shared/media';

import Header from './Header';
import Footer from './Footer';
import styles from './styles.module.scss';

const Preview = ({ data }) => {
   return (
      <Section className={`${styles.section}`} header={<Header data={data?.Config} />} footer={<Footer legend={data?.Config?.Legend} />}>
         <div className={`content-wrapper ${styles.content} flex flex-col`}>
            <div className={`${styles.imageWrapper}`}>
               <Image className={`rounded-32 ${styles.image}`} src={data?.Media?.url} width={1660} height={640} alt="preview image" />
            </div>
            {/* <div className={`flex ${styles.text}`}>
               <Text className={`text-28 text-pretty ${styles.quote}`}>
                  Мысль — это корень всего, что существует. Любое достижение начинается с мысли.
               </Text>
               <Text className={`text-28 italic1 whitespace-nowrap ${styles.author}`}>— Айн Рэнд</Text>
            </div> */}
         </div>
      </Section>
   );
};

export default Preview;
