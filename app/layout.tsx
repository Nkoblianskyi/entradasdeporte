import type { Metadata } from 'next'
import { Montserrat, Source_Sans_3 } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-heading',
  display: 'swap',
});

const sourceSans = Source_Sans_3({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'EntradasDeporte.com - Entradas para Eventos Deportivos en España',
  description: 'Consigue entradas para fútbol, baloncesto, tenis y más en EntradasDeporte.com. Accede a La Liga, ACB, MotoGP y todos los grandes eventos deportivos de España.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${sourceSans.variable}`}>
      <body className="font-sans antialiased">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  )
}
