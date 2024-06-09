import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AppHeader from './components/app-header/AppHeader'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ZBlog',
  description: 'Z\'s blog'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppHeader />
        {children}
      </body>
    </html>
  )
}
