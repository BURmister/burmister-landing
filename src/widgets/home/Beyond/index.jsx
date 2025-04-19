import { BlockVideoText } from '@shared/block';

import Section from '@widgets/home/Section';
import Header from './Header';

import styles from './styles.module.scss';

const data = {
   Video: {
      src: '/mock/gt3rs.mp4',
      type: 'video/mp4',
   },
   Text: [
      `Я создаю решения, где идея — не просто вдохновение, а отправная точка для технологии, продукта и результата. Запускаю проекты,
         управляю командой, веду переговоры и внедряю новое. <br />
         Всё, что я делаю, подчинено одной цели — росту вашего бизнеса.`,
      `Объединяю стратегию и творчество. Вижу продукт с высоты бизнеса и с глубины разработки. И да, иногда думаю
                     о&nbsp;911'ом&nbsp;GT3&nbsp;RS, но сначала — о&nbsp;том, как закрыть цели по вашему проекту.`,
   ],
};

const Beyond = () => {
   return (
      <Section className={`${styles.section}`} header={<Header />} legend={'кто такой burmister?'}>
         <BlockVideoText video={data.Video} text={data.Text} />
      </Section>
   );
};

export default Beyond;
