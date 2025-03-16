import { Preview, Beyond, Credits, Experience, Statistics, LetsDoIt, Portfolio } from '@widgets/home';

export default function Home() {
   return (
      <div className={`page flex flex-col`}>
         <Preview />
         <Beyond />
         <Credits />
         <Experience />
         <Portfolio />
         <Statistics />
         <LetsDoIt />
      </div>
   );
}
