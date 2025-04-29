import { Fragment } from 'react';
import { superFetch } from '@hooks/fetch';
import { Preview, Beyond, Credits, Experience, Statistics, LetsDoIt, Portfolio, Value } from '@widgets/home';

const componentMap = {
   Preview,
   Beyond,
   Credits,
   Value,
   Experience,
   Portfolio,
   Statistics,
   LetsDoIt,
};

export const revalidate = 600;

export default async function Home() {
   const response = await superFetch('glavnaya?populate[Content][populate]=*&populate[Page]=*');

   return (
      <div className={`page flex flex-col`}>
         {response?.data?.Content?.map((item, index) => {
            const Component = componentMap[item?.Config?.Name];
            return Component ? (
               <Fragment key={index}>
                  <Component data={item} />
               </Fragment>
            ) : null;
         })}
      </div>
   );
}
