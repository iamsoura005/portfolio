import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sourasanta Dutta - Developer & Designer',
  description: 'Portfolio website of Sourasanta Dutta - A passionate web developer with expertise in machine learning and UI/UX design.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen bg-white dark:bg-black">
          {children}
        </main>
      </body>
    </html>
  )
} 