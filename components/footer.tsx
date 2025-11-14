import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">EntradasDeporte</h3>
            
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/deportes" className="text-muted-foreground hover:text-primary transition-colors">
                  Deportes
                </Link>
              </li>
              <li>
                <Link href="/eventos" className="text-muted-foreground hover:text-primary transition-colors">
                  Eventos
                </Link>
              </li>
              <li>
                <Link href="/sobre-nosotros" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacidad" className="text-muted-foreground hover:text-primary transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-muted-foreground hover:text-primary transition-colors">
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link href="/terminos" className="text-muted-foreground hover:text-primary transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Calle Gran Vía 42, 28013 Madrid, España</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+34914614982" className="text-sm hover:text-primary transition-colors">
                  +34 91 461 4982 
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:info@entradasdeporte.com" className="text-sm hover:text-primary transition-colors">
                  info@entradasdeporte.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} EntradasDeporte España. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
