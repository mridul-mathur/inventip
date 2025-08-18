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
        {children}
        <Footer />
      </body>
    </html>
  );
}
