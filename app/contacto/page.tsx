import { Suspense } from 'react'
import { ContactForm } from '@/components/contact-form'
import { Card } from '@/components/ui/card'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export const metadata = {
  title: 'Contacto - Solicita tus Entradas | EntradasDeporte',
  description: 'Contáctanos para solicitar entradas deportivas. Nuestro equipo te ayudará a encontrar las mejores opciones.',
}

export default function ContactoPage() {
  const faqs = [
    {
      question: '¿Cómo puedo solicitar entradas?',
      answer: 'Simplemente rellena el formulario de contacto con tu información y el evento de tu interés. Nuestro equipo se pondrá en contacto contigo en menos de 24 horas con las opciones disponibles.',
    },
    {
      question: '¿Cuánto tiempo tarda la respuesta?',
      answer: 'Respondemos a todas las solicitudes en un plazo máximo de 24 horas laborables. Normalmente podrás tener una respuesta en pocas horas.',
    },
    {
      question: '¿Puedo solicitar entradas para grupos grandes?',
      answer: 'Sí, trabajamos con grupos de todos los tamaños, desde entradas individuales hasta reservas para empresas y eventos corporativos.',
    },
    {
      question: '¿Qué deportes están disponibles?',
      answer: 'Ofrecemos entradas para fútbol, baloncesto, tenis, MotoGP, Fórmula 1, balonmano, voleibol y ciclismo. Si buscas otro deporte, contáctanos igualmente.',
    },
    {
      question: '¿Tienen todas las competiciones?',
      answer: 'Trabajamos para ofrecer acceso a las principales ligas y torneos de España. Si no encuentras lo que buscas, ponte en contacto con nosotros.',
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6 text-balance">
            Contáctanos
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Estamos aquí para ayudarte a conseguir las mejores entradas deportivas
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <h2 className="text-2xl font-heading font-bold mb-6">Solicita tus Entradas</h2>
                <Suspense fallback={<div>Cargando formulario...</div>}>
                  <ContactForm />
                </Suspense>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-heading font-bold mb-4">Información de Contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Dirección</p>
                      <p className="text-sm text-muted-foreground">
                        Calle Gran Vía 42<br />
                        28013 Madrid, España
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Teléfono</p>
                      <a
                        href="tel:+34914614982"
                        className="text-sm text-muted-foreground hover:text-primary"
                      >
                        +34 91 461 4982
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href="mailto:info@entradasdeporte.com"
                        className="text-sm text-muted-foreground hover:text-primary"
                      >
                        info@entradasdeporte.com
                      </a>
                      <br />
                      <a
                        href="mailto:soporte@entradasdeporte.com"
                        className="text-sm text-muted-foreground hover:text-primary"
                      >
                        soporte@entradasdeporte.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Horario</p>
                      <p className="text-sm text-muted-foreground">
                        Lunes a Viernes: 9:00 - 20:00<br />
                        Sábado: 10:00 - 14:00<br />
                        Domingo: Cerrado
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-8 text-center">
              Preguntas Frecuentes
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  )
}
