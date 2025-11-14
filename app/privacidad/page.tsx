export const metadata = {
  title: 'Política de Privacidad | EntradasDeporte',
  description: 'Política de privacidad de EntradasDeporte España. Información sobre el tratamiento de datos personales.',
}

export default function PrivacidadPage() {
  return (
    <div className="pt-20">
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4 text-center">
            Política de Privacidad
          </h1>
          <p className="text-center text-muted-foreground">
            Última actualización: {new Date().toLocaleDateString('es-ES')}
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-heading font-bold mb-4">1. Información que Recopilamos</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              En EntradasDeporte España recopilamos información personal que usted nos proporciona
              voluntariamente cuando solicita entradas a través de nuestro formulario de contacto,
              incluyendo nombre, apellido, email, teléfono y preferencias deportivas.
            </p>

            <h2 className="text-2xl font-heading font-bold mb-4">2. Uso de la Información</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Utilizamos la información recopilada para:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>Procesar sus solicitudes de entradas deportivas</li>
              <li>Comunicarnos con usted sobre su solicitud</li>
              <li>Mejorar nuestros servicios</li>
              <li>Enviar información relevante sobre eventos deportivos (solo si ha dado su consentimiento)</li>
            </ul>

            <h2 className="text-2xl font-heading font-bold mb-4">3. Protección de Datos</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos
              personales contra acceso no autorizado, pérdida, destrucción o alteración. Cumplimos
              con el Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica de Protección
              de Datos Personales y garantía de los derechos digitales (LOPDGDD).
            </p>

            <h2 className="text-2xl font-heading font-bold mb-4">4. Sus Derechos</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Tiene derecho a acceder, rectificar, suprimir, limitar el tratamiento, oponerse al
              tratamiento y a la portabilidad de sus datos. Para ejercer estos derechos, puede
              contactarnos en info@entradasdeporte.com
            </p>

            <h2 className="text-2xl font-heading font-bold mb-4">5. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Utilizamos cookies para mejorar su experiencia en nuestro sitio web. Puede consultar
              nuestra{' '}
              <a href="/cookies" className="text-primary hover:underline font-medium">
                Política de Cookies
              </a>{' '}
              para más información.
            </p>

            <h2 className="text-2xl font-heading font-bold mb-4">6. Contacto</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Si tiene preguntas sobre esta política de privacidad, puede contactarnos en:
              <br />
              Email: info@entradasdeporte.com
              <br />
              Teléfono: +34 91 461 4982
              <br />
              Dirección: Calle Gran Vía 42, 28013 Madrid, España
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
