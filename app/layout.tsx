import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'JamFlow',
  description: 'Build, deploy, and scale intelligent chatbots with JamFlow.ai advanced AI platform.',
  generator: 'JamFlow.ai',
  icons: {
    icon: '/Favicon.ico',
    apple: '/logo192.png',
  },
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
