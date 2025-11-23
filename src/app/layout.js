import { Inter } from 'next/font/google';
import Header from '@/components/header/Header';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Clínica Médica - Maria & João',
  description: 'Sistema de gestão para clínica médica',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}