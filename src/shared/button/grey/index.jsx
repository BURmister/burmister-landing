'use client';
import styles from './styles.module.scss';

const ButtonGrey = ({ children, callback, ...props }) => {
   const onClick = async () => {
      if (callback) await callback();
   };

   return (
      <button className={`w-fit text-20 background-grey rounded-90 ${styles.button}`} {...props} onClick={() => onClick()}>
         {children}
      </button>
   );
};

export default ButtonGrey;
