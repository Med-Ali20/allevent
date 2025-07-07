// app/fonts.ts
import { Outfit, Montserrat } from 'next/font/google'

export const outfit = Outfit({
  subsets: ['latin'],
  weight: ['200','300', '400', '700'],
  variable: '--font-outfit',
  display: 'swap',
})

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['200','300', '400', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})
