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
        <main className='flex max-w-screen-md mx-auto' style={{ height: 'calc(100vh - 59px)' }}>
          <div className='px-[5%] mt-8 w-full'>
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
