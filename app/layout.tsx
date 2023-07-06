import { Martian_Mono } from 'next/font/google'
import './globals.css'

const martianMono = Martian_Mono({ subsets: ['latin'] })

export const metadata = {
  title: 'Hyphen Site',
  description: 'Mint a hyphen.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={martianMono.className}>{children}</body>
    </html>
  )
}
