import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
  description: 'Designed and developed by me, using Next.js and TailwindCSS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {' '}
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
