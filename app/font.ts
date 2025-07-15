// app/fonts.ts
import { Outfit, Montserrat, Zain } from 'next/font/google';
import localFont from 'next/font/local'

export const zain = localFont({
  src: [
    {
      path: '../public/fonts/Zain/Zain-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Zain/Zain-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Zain/Zain-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/Zain/Zain-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../public/fonts/Zain/Zain-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/Zain/Zain-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/fonts/Zain/Zain-ExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../public/fonts/Zain/Zain-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-zain',
  display: 'swap',
})


export const outfit = Outfit({
  subsets: ['latin'],
  weight: ['200', '300', '400', '700'],
  variable: '--font-outfit',
  display: 'swap',
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['200', '300', '400', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

// export const zain = Zain({
//   subsets: ['latin', 'arabic'],
//   weight: ['200', '300', '400', '700', '800', '900'],
//   variable: '--font-zain',
//   display: 'swap',
// });
