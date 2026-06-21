import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const SITE_URL = 'https://galaxy.oscardaly.tech'
const TITLE = 'R3F Galaxy — Interactive WebGL Solar System'
const DESCRIPTION =
  'An interactive, real-time solar system built with React Three Fiber and WebGL — orbiting planets, bloom-lit glow and a starfield, right in the browser. By Oscar Daly.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: 'R3F Galaxy',
  authors: [{ name: 'Oscar Daly', url: 'https://oscardaly.tech' }],
  creator: 'Oscar Daly',
  keywords: [
    'React Three Fiber',
    'WebGL',
    'Three.js',
    'interactive 3D',
    'solar system',
    'galaxy',
    'creative coding',
    'Oscar Daly',
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'R3F Galaxy',
    title: TITLE,
    description: DESCRIPTION,
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
