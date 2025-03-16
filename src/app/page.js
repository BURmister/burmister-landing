import { Preview, Beyond, Credits, Experience, Statistics, LetsDoIt, Portfolio, Value } from '@widgets/home';

export default function Home() {
   return (
      <div className={`page flex flex-col`}>
         <Preview />
         <Beyond />
         <Credits />
         <Value />
         <Experience />
         <Portfolio />
         <Statistics />
         <LetsDoIt />
      </div>
   );
}
