import styles from './styles.module.scss';

const Whos = () => {
   return (
      <div className={`relative ${styles.wrapper} inline-block`}>
         <p className={`absolute ${styles.text} ${styles.hidden} text-20`}>Кто такой Джон Голт?</p>
         <p className={`${styles.text} ${styles.visible} text-20`}>
            Кто такой burmister? Человек, который берет на себя ответственность за создание невозможного.
         </p>
      </div>
   );
};

export default Whos;
