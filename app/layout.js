import Script from 'next/script'
import Navbar from './components/Nav/Navbar'
import './globals.css'
import { Inter, Montserrat } from 'next/font/google'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <Script src="https://kit.fontawesome.com/dc459df8b4.js" crossorigin="anonymous"></Script>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
