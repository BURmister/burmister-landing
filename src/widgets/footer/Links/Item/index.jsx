'use client';
import Link from 'next/link';
import { AnimationRotate1 } from '@shared/animation';

const Item = ({ href, children }) => {
   return (
      <AnimationRotate1>
         <Link href={href} className={`text-32 will-blue will-underline whitespace-nowrap w-fit`}>
            {children}
         </Link>
      </AnimationRotate1>
   );
};

export default Item;
