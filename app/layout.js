import './globals.css'
import { Poppins } from 'next/font/google'
import { Providers } from './providers'
import { Analytics } from '@vercel/analytics/react'

const poppins = Poppins({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Portfolio',
  description:
    'Designed and developed by Diego Ormazábal, using Next.js and TailwindCSS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  )
}
