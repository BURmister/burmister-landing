import { Section, Preview } from '@widgets/home';

export default function Home() {
   return (
      <div className={`page flex flex-col`}>
         <Preview />
         <div className="h-[1000px]"></div>
      </div>
   );
}
