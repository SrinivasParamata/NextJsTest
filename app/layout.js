import './globals.css';

import MainHeader from '@/Components/main-header/main-header';
import MainHeaderBackground from '@/Components/main-header/main-headerbackground';

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeaderBackground/>
        <MainHeader/>
        {children}
      </body>
    </html>
  );
}
