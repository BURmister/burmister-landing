import styles from './styles.module.scss';

const ContactForm = () => {
   const onSubmit = (event) => {
      event.preventDefault();
   };

   return (
      <form onSubmit={onSubmit} className={`${styles.form} flex fex-col`}>
         <div className={`${styles.row} flex`}></div>
      </form>
   );
};

export default ContactForm;
