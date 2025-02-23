import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NoteDrop',
  description: 'A collection of well-researched airdrop project in WEB3.',
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
