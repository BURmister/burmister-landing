import { Fragment } from 'react';

import { Text } from '@shared/text';
import { ActionCallback } from '@shared/action';
import { AnimationFade, AnimationRotate2 } from '@shared/animation';
import { Video } from '@shared/media';

import styles from './styles.module.scss';

const VideoText = ({ video, text }) => {
   return (
      <div className={`content-wrapper ${styles.content} flex`}>
         <div className={`${styles.mediaWrapper}`}>
            {video && <Video className={`${styles.media} ${video.className && video.className}`} src={video.src} type={video.type} />}
         </div>
         <div className={`flex flex-col ${styles.textWrapper}`}>
            {text && (
               <div className={`flex flex-col ${styles.text}`}>
                  {Array.isArray(text) ? (
                     text.map((item, index) => (
                        <Fragment key={index}>
                           <AnimationFade>
                              <Text className="text-24" data={item?.Text ? item?.Text : item} isHtml={true} />
                           </AnimationFade>
                        </Fragment>
                     ))
                  ) : (
                     <AnimationFade>
                        <Text className="text-24" data={text} isHtml={true} />
                     </AnimationFade>
                  )}
               </div>
            )}
            <AnimationRotate2>
               <ActionCallback />
            </AnimationRotate2>
         </div>
      </div>
   );
};

export default VideoText;
