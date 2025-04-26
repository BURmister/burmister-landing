import { Fragment } from 'react';
import Item from './Item';
import styles from './styles.module.scss';

const List = ({ data }) => {
   return (
      <>
         {data?.length && (
            <>
               {data?.map((item, index) => (
                  <Fragment key={index}>
                     <Item data={item.Text} />
                  </Fragment>
               ))}
            </>
         )}
      </>
   );
};

export default List;
