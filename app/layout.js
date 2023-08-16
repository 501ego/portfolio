import './globals.css'
import { Poppins } from 'next/font/google'
import { Providers } from './providers'

const poppins = Poppins({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Portfolio',
  description: 'Designed and developed by me, using Next.js and TailwindCSS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {' '}
      <body className={poppins.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
