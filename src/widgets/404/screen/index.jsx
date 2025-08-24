import { LinkBlack } from '@shared/link';
import styles from './styles.module.scss';

const NotFoundScreen = () => {
   return (
      <div className={`content-wrapper ${styles.wrapper} flex flex-col`}>
         <h2 className={`caption-64`}>Страница не найдена</h2>
         <p className={`text-24 text-pretty`}>
            Страница не&nbsp;существует или&nbsp;была перемещена и&nbsp;теперь доступна по&nbsp;другой&nbsp;ссылке.
            <br /> Проверьте адрес страницы, он&nbsp;может&nbsp;быть некорректным.
         </p>
         <LinkBlack href="/">На главную</LinkBlack>
      </div>
   );
};

export default NotFoundScreen;
