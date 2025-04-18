import { Fragment } from 'react';
import Item from './Item';
import styles from './styles.module.scss';

const List = ({ data }) => {
   return (
      <>
         {data?.length && (
            <div className={`flex flex-col ${styles.textWrapper}`}>
               {data?.map((item, index) => (
                  <Fragment key={index}>
                     <Item data={item} />
                  </Fragment>
               ))}
            </div>
         )}
      </>
   );
};

export default List;
