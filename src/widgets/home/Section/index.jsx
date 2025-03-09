import styles from './styles.module.scss';

const Section = ({ header, children, footer, legend, className }) => {
   return (
      <section className={`${styles.section} ${className && className} flex flex-col`}>
         {header && header}
         {children}
         {footer ? (
            footer
         ) : (
            <div className={`content-wrapper ${styles.footer} flex justify-center`}>
               <p className={`text-24 w-fit`}>{legend}</p>
            </div>
         )}
      </section>
   );
};

export default Section;
