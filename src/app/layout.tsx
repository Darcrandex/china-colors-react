import AsideBar from '@/components/AsideBar'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'China Colors',
  description: 'A minimalist Chinese color preview site',
  keywords: ['color', 'colors', 'china', 'cn', 'preview', 'color preview', 'colorful', 'colorful preview'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/china-color.png' sizes='any' />
      </head>
      <body>
        <section className='flex h-screen'>
          <main className='flex-1'>{children}</main>
          <AsideBar className='shrink-0' />
        </section>
      </body>
    </html>
  )
}
