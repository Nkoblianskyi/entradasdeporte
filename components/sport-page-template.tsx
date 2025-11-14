import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

interface League {
  name: string
  description: string
  image: string
}

interface SportPageTemplateProps {
  sportName: string
  description: string
  heroImage: string
  leagues: League[]
}

export function SportPageTemplate({
  sportName,
  description,
  heroImage,
  leagues,
}: SportPageTemplateProps) {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage || "/placeholder.svg"}
            alt={sportName}
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-heading font-extrabold mb-6 text-balance">
              {sportName}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Leagues Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ligas y Torneos
            </h2>
            <p className="text-muted-foreground text-lg">
              Solicita entradas para las mejores competiciones de {sportName.toLowerCase()}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {leagues.map((league) => (
              <Card key={league.name} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={league.image || "/placeholder.svg"}
                    alt={league.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">
                    {league.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {league.description}
                  </p>

                  <Button asChild className="w-full">
                    <Link href={`/contacto?deporte=${encodeURIComponent(sportName)}&liga=${encodeURIComponent(league.name)}`}>
                      Solicitar Entradas
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            ¿Necesitas ayuda para elegir?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Nuestro equipo está aquí para ayudarte a encontrar las mejores entradas
          </p>
          <Button asChild size="lg">
            <Link href="/contacto">Contactar Ahora</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
