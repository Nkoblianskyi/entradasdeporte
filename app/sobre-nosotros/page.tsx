import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Target, Heart, Users, Award } from 'lucide-react'

export const metadata = {
  title: 'Sobre Nosotros - Conectando Aficionados | EntradasDeporte',
  description: 'Conoce nuestra historia y misión. Más de 15 años conectando aficionados con sus deportes favoritos en España.',
}

export default function SobreNosotrosPage() {
  const values = [
    {
      icon: Heart,
      title: 'Pasión por el Deporte',
      description: 'Amamos el deporte tanto como tú. Trabajamos para que vivas experiencias inolvidables.',
    },
    {
      icon: Users,
      title: 'Atención Personalizada',
      description: 'Cada cliente es único. Ofrecemos un servicio cercano y adaptado a tus necesidades.',
    },
    {
      icon: Award,
      title: 'Excelencia',
      description: 'Nos esforzamos por ofrecer el mejor servicio y las mejores opciones disponibles.',
    },
    {
      icon: Target,
      title: 'Compromiso',
      description: 'Tu satisfacción es nuestra prioridad. Trabajamos para superar tus expectativas.',
    },
  ]

  const stats = [
    { value: '15+', label: 'Años de Experiencia' },
    { value: '50,000+', label: 'Clientes Satisfechos' },
    { value: '98%', label: 'Satisfacción' },
    { value: '24h', label: 'Tiempo de Respuesta' },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/10 via-background to-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6 text-balance">
            Sobre Nosotros
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Conectando aficionados con sus deportes favoritos desde 2010
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Nuestra Historia
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 leading-relaxed">
              <p>
                EntradasDeporte nació en 2010 con una visión clara: hacer que el deporte de élite sea
                accesible para todos los aficionados españoles. Lo que comenzó como un pequeño proyecto
                entre amigos apasionados del deporte se ha convertido en una de las plataformas de
                referencia para la gestión de entradas deportivas en España.
              </p>
              <p>
                Durante más de 15 años, hemos ayudado a más de 50,000 aficionados a vivir experiencias
                deportivas únicas. Desde emocionantes partidos de La Liga hasta la adrenalina de MotoGP,
                pasando por los torneos de tenis más prestigiosos del país.
              </p>
              <p>
                Nuestro equipo está formado por profesionales apasionados que entienden la emoción de
                asistir a un evento deportivo en vivo. Trabajamos incansablemente para ofrecerte el
                mejor servicio y ayudarte a crear recuerdos inolvidables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Nuestra Misión
            </h2>
            <p className="text-xl leading-relaxed opacity-90">
              Conectar aficionados con sus deportes favoritos, facilitando el acceso a los mejores
              eventos deportivos de España y creando experiencias memorables que unan a las personas
              a través de su pasión compartida por el deporte.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Nuestros Valores
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Los principios que guían nuestro trabajo cada día
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {values.map((value) => (
              <Card key={value.title} className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-heading font-extrabold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            ¿Listo para vivir la emoción?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Únete a miles de aficionados que confían en nosotros para sus eventos deportivos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/deportes">Explorar Deportes</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contacto">Contáctanos</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
