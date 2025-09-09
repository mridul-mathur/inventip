import type { Metadata } from 'next';
import './globals.css';
import Nav from './nav';
import Footer from './footer';

export const metadata: Metadata = {
  title: 'Invent IP',
  description: 'Invent IP',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='font-suisse bg-primary'>
        <Nav />
        <div className='max-w-screen-2xl relative overflow-x-hidden flex flex-col items-center justify-center'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
