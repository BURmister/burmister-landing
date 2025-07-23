import Section from '@widgets/home/Section';

import { Text } from '@shared/text';
import { Image } from '@shared/media';
import { ActionCallback } from '@shared/action';
import { AnimationFade2, AnimationSplitText1 } from '@shared/animation';

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

const PreviewNew = ({ data }) => {
   return (
      <Section className={`${styles.section}`} footer={<Footer legend={data?.Config?.Legend} />}>
         <div className={`content-wrapper ${styles.contentWrapper} flex flex-col`}>
            <div className={`${styles.content} flex flex-col`}>
               <div className={`relative ${styles.titles} flex flex-col`}>
                  <AnimationSplitText1>
                     <Text data={'Привет, я Бурмистров Олег'} className={`caption-96nn`} />
                  </AnimationSplitText1>
                  <div className={`flex items-center ${styles.secondLine}`}>
                     <AnimationFade2 className={`relative ${styles.imageWrapper} overflow-hidden`}>
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
                     <AnimationSplitText1>
                        <Text data={'— разработчик.'} className={`caption-96nn`} />
                     </AnimationSplitText1>
                  </div>
               </div>
               <div className={`flex items-center ${styles.description}`}>
                  <AnimationFade2>
                     <Text data={data?.Config?.TitleFirst} isHtml={true} className={`text-32`} />
                  </AnimationFade2>
                  <AnimationFade2 className={`${styles.actionWrapper}`}>
                     <ActionCallback title={'Напишите привет'} color="grey" />
                  </AnimationFade2>
               </div>
            </div>
         </div>
      </Section>
   );
};

export default PreviewNew;
