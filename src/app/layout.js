import '@config/styles/index.css';
import '@config/styles/global.scss';

import Header from '@widgets/header';
import Footer from '@widgets/footer';
import ScrollIndicator from '@widgets/indicator';
import { PopupProvider } from '@widgets/popup';
import { LenisProvider } from '@/src/providers/';

export const metadata = {
   title: 'burmister',
   description: 'Generated by create next app',
};

export const viewport = {
   width: 'device-width',
   initialScale: 1,
   maximumScale: 1,
   userScalable: false,
};

export default function RootLayout({ children }) {
   return (
      <html lang="ru">
         <body>
            <LenisProvider />
            <Header />
            <ScrollIndicator />
            <main>{children}</main>
            <PopupProvider />
            <Footer />
         </body>
      </html>
   );
}
