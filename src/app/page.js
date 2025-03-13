import { Preview, Beyond, Credits, Experience } from '@widgets/home';

export default function Home() {
   return (
      <div className={`page flex flex-col`}>
         <Preview />
         <Beyond />
         <Credits />
         <Experience />
      </div>
   );
}
