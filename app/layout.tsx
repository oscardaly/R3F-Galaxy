import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'R3F Galaxy Example',
  description: 'Try out my React Three Fiber example of the Milky Way Galaxy! This webapp showcases interactive 3D web components rendered in the browser!',
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
