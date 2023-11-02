import type { Metadata } from 'next'
import { PropsWithChildren } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'China Colors',
  description: 'A minimalist Chinese color preview site',
  keywords: ['color', 'colors', 'china', 'cn', 'preview', 'color preview', 'colorful', 'colorful preview'],
}

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/china-color.png' sizes='any' />
      </head>
      <body>{props.children}</body>
    </html>
  )
}
