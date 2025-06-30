import type { Metadata } from 'next'
import './globals.css'
import { Aside } from '@/app/components/Aside'

export const metadata: Metadata = {
  title: 'Code Connect',
  description:
    'A platform to connect developers with code snippets and resources.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="w-7xl max-w-[90%] mx-auto flex min-h-full my-gradient my-14 justify-center gap-7">
          <Aside />
          {children}
        </div>
      </body>
    </html>
  )
}
