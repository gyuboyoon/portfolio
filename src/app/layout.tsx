import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '윤규보 — Portfolio',
  description: '커뮤니케이션부터 AI·자동화까지 — 실무를 넓게 커버하는 개발자',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" data-theme="dark">
      <body>{children}</body>
    </html>
  )
}