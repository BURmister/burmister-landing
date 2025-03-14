import { Preview, Beyond, Credits, Experience, Statistics } from '@widgets/home';

export default function Home() {
   return (
      <div className={`page flex flex-col`}>
         <Preview />
         <Beyond />
         <Credits />
         <Experience />
         <Statistics />
      </div>
   );
}
