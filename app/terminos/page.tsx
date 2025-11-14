export const metadata = {
  title: 'Términos y Condiciones | EntradasDeporte',
  description: 'Términos y condiciones de uso de EntradasDeporte España.',
}

export default function TerminosPage() {
  return (
    <div className="pt-20">
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4 text-center">
            Términos y Condiciones
          </h1>
          <p className="text-center text-muted-foreground">
            Última actualización: {new Date().toLocaleDateString('es-ES')}
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-heading font-bold mb-4">1. Aceptación de los Términos</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Al acceder y utilizar el sitio web de EntradasDeporte España, usted acepta cumplir con
              estos términos y condiciones de uso. Si no está de acuerdo con alguno de estos términos,
              no debe utilizar este sitio web.
            </p>

            <h2 className="text-2xl font-heading font-bold mb-4">2. Servicios Ofrecidos</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              EntradasDeporte ofrece un servicio de gestión y solicitud de entradas para eventos
              deportivos en España. Actuamos como intermediarios entre los aficionados y los
              proveedores de entradas. No garantizamos la disponibilidad de entradas para todos los
              eventos.
            </p>

            <h2 className="text-2xl font-heading font-bold mb-4">3. Proceso de Solicitud</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              El proceso de solicitud de entradas no constituye una compra directa. Al enviar una
              solicitud, nos comprometemos a buscar las mejores opciones disponibles y contactar con
              usted en un plazo de 24 horas con información sobre disponibilidad y precios.
            </p>

            <h2 className="text-2xl font-heading font-bold mb-4">4. Uso del Sitio Web</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Usted se compromete a utilizar este sitio web solo para fines legales y de manera que
              no infrinja los derechos de terceros ni restrinja o inhiba el uso del sitio por parte
              de otros usuarios.
            </p>

            <h2 className="text-2xl font-heading font-bold mb-4">5. Propiedad Intelectual</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Todo el contenido del sitio web, incluyendo textos, gráficos, logos, imágenes y software,
              es propiedad de EntradasDeporte o de sus proveedores de contenido y está protegido por
              las leyes de propiedad intelectual.
            </p>

            <h2 className="text-2xl font-heading font-bold mb-4">6. Limitación de Responsabilidad</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              EntradasDeporte no se hace responsable de la cancelación, reprogramación o modificación
              de eventos deportivos por parte de los organizadores. Tampoco nos responsabilizamos de
              errores u omisiones en la información proporcionada por terceros.
            </p>

            <h2 className="text-2xl font-heading font-bold mb-4">7. Modificaciones</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento.
              Las modificaciones entrarán en vigor inmediatamente después de su publicación en el sitio
              web.
            </p>

            <h2 className="text-2xl font-heading font-bold mb-4">8. Ley Aplicable</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Estos términos y condiciones se rigen por las leyes de España. Cualquier disputa será
              resuelta por los tribunales de Madrid.
            </p>

            <h2 className="text-2xl font-heading font-bold mb-4">9. Contacto</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Para cualquier pregunta sobre estos términos y condiciones:
              <br />
              Email: info@entradasdeporte.es
              <br />
              Teléfono: +34 91 456 7890
              <br />
              Dirección: Calle Gran Vía 42, 28013 Madrid, España
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
