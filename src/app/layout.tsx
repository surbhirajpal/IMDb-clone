import './globals.css';
import { Inter } from 'next/font/google';

import Header from './components/Header';
import Navbar from './components/Navbar';

import Provider from './Provider';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IMDb Clone',
  description: 'IMDb clone using Next.js and typescript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          {/* Header */}
          <Header />

          {/* Navbar */}
          <Navbar/>
          {/* Searchbox */}

          {children}
        </Provider>
      </body>
    </html>
  )
}
