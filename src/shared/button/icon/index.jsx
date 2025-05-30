'use client';
import styles from './styles.module.scss';

const ButtonIcon = ({ children, className, callback, ...props }) => {
   const onClick = async () => {
      if (callback) await callback();
   };

   return (
      <button className={`w-fit ${styles.button} ${className && className}`} {...props} onClick={() => onClick()}>
         {children}
      </button>
   );
};

export default ButtonIcon;
