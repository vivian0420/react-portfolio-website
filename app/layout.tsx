import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active-section-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vivian Personal Portfolio',
  description: 'Vivian is a new graduate in Computer Science and loves Full Stack Web Development.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative] pt-24 sm:pt-28`}>
        <div className='bg-[#f7d5d6] absolute -z-10 top-[-6rem] right-[5rem]
        h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]'>
        
        </div>
        <div className='bg-[#cfebf4] absolute -z-10 top-[-1rem] left-[-30rem]
        h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem]
        md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'>
        </div>
        <ActiveSectionContextProvider>
        <Header />
        {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  )
}
