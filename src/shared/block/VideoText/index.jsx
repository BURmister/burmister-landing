import { Fragment } from 'react';

import { TextFade } from '@shared/text';
import { ButtonBlack } from '@shared/button';
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
                           <TextFade className="text-24" data={item} isHtml={true} />
                        </Fragment>
                     ))
                  ) : (
                     <TextFade className="text-24" data={text} isHtml={true} />
                  )}
               </div>
            )}
            <ButtonBlack type="button">на связи</ButtonBlack>
         </div>
      </div>
   );
};

export default VideoText;
