import Section from '@widgets/home/Section';
import styles from './styles.module.scss';

const LetsDoIt = () => {
   return (
      <Section className={`${styles.section}`}>
         <div className={`content-wrapper ${styles.content} flex flex-col`}>
            <p className={`text-32 text-center`}>Ваши идеи готовы выйти за рамки?</p>
            <p className={`caption-96 text-center`}>Сделаем это вместе!</p>
         </div>
      </Section>
   );
};

export default LetsDoIt;
