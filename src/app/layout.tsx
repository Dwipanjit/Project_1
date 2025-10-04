import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dwipanjit Handique - Finance Professional & Tech Builder',
  description: 'Finance professional turned quantitative trading enthusiast and tech builder. Building AI-assisted trading tools and full-stack applications with modern technologies.',
  keywords: 'Dwipanjit Handique, Finance Professional, Quantitative Trading, Tech Builder, Full Stack Developer, Next.js, React, Python, Trading APIs',
  authors: [{ name: 'Dwipanjit Handique' }],
  openGraph: {
    title: 'Dwipanjit Handique - Finance Professional & Tech Builder',
    description: 'Finance professional turned quantitative trading enthusiast and tech builder.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dwipanjit Handique - Finance Professional & Tech Builder',
    description: 'Finance professional turned quantitative trading enthusiast and tech builder.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
