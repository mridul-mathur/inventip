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
    <html lang="en">
      <body className="mx-auto max-w-screen-2xl bg-primary font-suisse">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
