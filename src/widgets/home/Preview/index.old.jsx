import Section from '@widgets/home/Section';
import { Image } from '@shared/media';
import { AnimationFade2 } from '@shared/animation';

import Header from './Header';
import Footer from './Footer';
import styles from './styles.module.scss';

const Preview = ({ data }) => {
   return (
      <Section className={`${styles.section}`} header={<Header data={data?.Config} />} footer={<Footer legend={data?.Config?.Legend} />}>
         <div className={`content-wrapper ${styles.content} flex flex-col`}>
            <AnimationFade2 className={`relative ${styles.imageWrapper}`}>
               <Image className={`rounded-32 ${styles.image}`} src={data?.Media?.url} width={1660} height={640} alt="preview image" />
               <Image
                  className={`absolute rounded-32 ${styles.lay}`}
                  src={'/mock/image.png'}
                  width={1660}
                  height={640}
                  local={true}
                  alt="preview image"
               />
            </AnimationFade2>
         </div>
      </Section>
   );
};

export default Preview;
