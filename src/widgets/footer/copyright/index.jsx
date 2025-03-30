import styles from './styles.module.scss';

const Copyright = () => {
   return (
      <div className={`${styles.wrapper} flex`}>
         <p className={`text-24nn whitespace-nowrap`}>© c 2004 года</p>
         <p className={`text-24nn whitespace-nowrap`}>construit per burmister avec amour ❤️</p>
      </div>
   );
};

export default Copyright;
