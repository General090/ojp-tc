import './globals.css';
import Header from './component/header'
import Footer from './component/footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'OJP Technologies.Ltd',
};

export default function RootLayout({ children }: { children: React.ReactNode })  {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}