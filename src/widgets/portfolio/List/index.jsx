import { Fragment } from 'react';

import { AnimationRotate2 } from '@shared/animation';
import { ButtonBlack } from '@shared/button';
import { PortfolioCard } from '@shared/card';

import styles from './styles.module.scss';

const List = ({ data }) => {
   return (
      <div className={`content-wrapper ${styles.wrapper} flex flex-col`}>
         <div className={`${styles.list}`}>
            {data?.map((item, index) => (
               <Fragment key={index}>
                  <PortfolioCard data={item} index={index} />
               </Fragment>
            ))}
         </div>
         {/* <AnimationRotate2 className={`w-fit ${styles.action}`}>
            <ButtonBlack type="button">другие работы</ButtonBlack>
         </AnimationRotate2> */}
      </div>
   );
};

export default List;
