import { Montserrat, Poppins, Lato, Open_Sans } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-poppins' })
const lato = Lato({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-lato' })
const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' })

export const metadata = {
  title: 'Crumbl Gift Card',
  description: 'Get a $100 Crumbl Gift Card',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${poppins.variable} ${lato.variable} ${openSans.variable}`}>{children}</body>
    </html>
  )
}