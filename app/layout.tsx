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
