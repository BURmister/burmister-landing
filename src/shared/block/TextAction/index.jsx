import { Fragment } from 'react';

import { Text } from '@shared/text';
import { ActionCallback } from '@shared/action';
import { AnimationFade, AnimationRotate2 } from '@shared/animation';

import styles from './styles.module.scss';

const TextAction = ({ text }) => {
   return (
      <div className={`content-wrapper ${styles.content} flex flex-col`}>
         <div className={`flex flex-col ${styles.actionWrapper}`}>
            <AnimationFade>
               <Text className="text-32" data={'Сделаем ваш проект лучшим.'} />
            </AnimationFade>
            <AnimationRotate2>
               <ActionCallback title={'Напишите привет'} />
            </AnimationRotate2>
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
         </div>
      </div>
   );
};

export default TextAction;
