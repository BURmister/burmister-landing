import { Fragment } from 'react';

import { ButtonBlack } from '@shared/button';
import { PortfolioCard } from '@shared/card';

import styles from './styles.module.scss';

const List = ({ data }) => {
   return (
      <div className={`content-wrapper ${styles.wrapper} flex flex-col`}>
         <div className={`${styles.list}`}>
            {data?.map((item, index) => (
               <Fragment key={index}>
                  <PortfolioCard data={item} />
               </Fragment>
            ))}
         </div>
         <ButtonBlack className={`${styles.action}`} type="button">
            другие работы
         </ButtonBlack>
      </div>
   );
};

export default List;
