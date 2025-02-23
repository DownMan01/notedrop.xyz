import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NoteDrop',
  description: 'A collection of well-researched airdrop projects in WEB3.',
  icons: {
    icon: '/favicon.ico', // /public/favicon.ico
    shortcut: '/favicon.ico', // /public/favicon.ico
    favico: '/favico.png', // /public/apple-touch-icon.png
    other: {
      rel: 'favico',
      url: '/favico.png'
    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
