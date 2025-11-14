export const metadata = {
  title: 'Política de Cookies | EntradasDeporte',
  description: 'Política de cookies de EntradasDeporte España. Información sobre el uso de cookies en nuestro sitio web.',
}

export default function CookiesPage() {
  return (
    <div className="pt-20">
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4 text-center">
            Política de Cookies
          </h1>
          <p className="text-center text-muted-foreground">
            Última actualización: {new Date().toLocaleDateString('es-ES')}
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-heading font-bold mb-4">¿Qué son las Cookies?</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando
              visita nuestro sitio web. Nos ayudan a mejorar su experiencia, recordar sus preferencias
              y entender cómo utiliza nuestro sitio.
            </p>

            <h2 className="text-2xl font-heading font-bold mb-4">Tipos de Cookies que Utilizamos</h2>

            <h3 className="text-xl font-heading font-semibold mb-3 mt-6">Cookies Necesarias</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Estas cookies son esenciales para el funcionamiento del sitio web y no pueden ser
              desactivadas. Incluyen cookies que permiten recordar sus preferencias de cookies y
              mantener la seguridad del sitio.
            </p>

            <h3 className="text-xl font-heading font-semibold mb-3">Cookies Analíticas</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Utilizamos cookies analíticas para entender cómo los visitantes interactúan con nuestro
              sitio web. Esta información nos ayuda a mejorar nuestros servicios. Estas cookies
              recopilan información de forma anónima.
            </p>

            <h3 className="text-xl font-heading font-semibold mb-3">Cookies de Funcionalidad</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Estas cookies permiten que el sitio web recuerde las elecciones que hace (como su idioma
              o región) y proporcionan características mejoradas y más personales.
            </p>

            <h2 className="text-2xl font-heading font-bold mb-4">Gestión de Cookies</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Puede gestionar sus preferencias de cookies a través del banner que aparece en su primera
              visita al sitio. También puede configurar su navegador para rechazar cookies, aunque esto
              puede afectar a la funcionalidad del sitio web.
            </p>

            <h2 className="text-2xl font-heading font-bold mb-4">Cookies de Terceros</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Utilizamos servicios de terceros como Google Analytics para analizar el uso del sitio.
              Estos servicios pueden colocar sus propias cookies en su dispositivo. Para más información,
              consulte las políticas de privacidad de estos servicios.
            </p>

            <h2 className="text-2xl font-heading font-bold mb-4">Contacto</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Si tiene preguntas sobre nuestra política de cookies, puede contactarnos en:
              <br />
              Email: info@entradasdeporte.com
              <br />
              Teléfono: +34 91 461 4982
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
