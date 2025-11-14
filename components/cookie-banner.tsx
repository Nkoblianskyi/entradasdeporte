'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setIsVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background border-t border-border shadow-lg">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-foreground leading-relaxed">
              Utilizamos cookies para mejorar tu experiencia. Al continuar navegando, aceptas nuestra{' '}
              <Link href="/cookies" className="text-primary hover:underline font-medium">
                política de cookies
              </Link>
              {' y '}
              <Link href="/privacidad" className="text-primary hover:underline font-medium">
                política de privacidad
              </Link>
              .
            </p>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <Button
              variant="outline"
              size="sm"
              onClick={handleReject}
              className="flex-1 md:flex-none"
            >
              Rechazar
            </Button>
            <Button
              size="sm"
              onClick={handleAccept}
              className="flex-1 md:flex-none"
            >
              Aceptar todo
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleReject}
              className="hidden md:flex"
              aria-label="Cerrar"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
