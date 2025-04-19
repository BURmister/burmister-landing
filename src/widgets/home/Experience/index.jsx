import { BlockVideoText } from '@shared/block';

import Section from '@widgets/home/Section';
import Header from './Header';
import styles from './styles.module.scss';

const data = {
   Video: {
      src: '/mock/gt3rs-2.mp4',
      type: 'video/mp4',
   },
   Text: [
      // `На моём пути — десятки разноплановых проектов: от веб-приложений до масштабных бизнес-решений. Я создал стартап-студию Qretex,
      //    запустил нишевый e-commerce OnlyFunko, выстраивал команды, которые брались за сложное — и доводили до результата.`,
      `На моём пути — десятки разноплановых проектов: от веб-приложений до масштабных бизнес-решений. Я создал русскую локализацию
         платформы LLV, запустил нишевый e-commerce OnlyFunko, выстраивал команды, которые брались за сложное — и доводили до результата.`,
      `Моё участие — это не просто код или контроль, это движение от идеи до работающего решения. Каждый проект для меня — вызов. 
         И каждый результат — доказательство того, что невозможное возможно, если подходить с умом, страстью и без страха перед нестандартом.`,
   ],
};

const Experience = () => {
   return (
      <Section className={`${styles.section}`} header={<Header />} legend={'мои проекты — материализованная мысль'}>
         <BlockVideoText video={data.Video} text={data.Text} />
      </Section>
   );
};

export default Experience;
