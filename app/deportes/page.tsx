import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Deportes - Todos los Eventos Deportivos | EntradasDeporte',
  description: 'Explora todos los deportes disponibles: fútbol, baloncesto, tenis, MotoGP, Fórmula 1, balonmano, voleibol y ciclismo.',
}

export default function DeportesPage() {
  const sports = [
    {
      name: 'Fútbol',
      slug: 'futbol',
      description: 'El fútbol es la pasión nacional de España. Desde La Liga hasta la Champions League, ofrecemos acceso a los torneos más prestigiosos del mundo.',
      leagues: ['La Liga Santander', 'Copa del Rey', 'Champions League', 'Europa League'],
      image: '/spanish-football-stadium-red.jpg',
      featured: true,
    },
    {
      name: 'Baloncesto',
      slug: 'baloncesto',
      description: 'España es potencia mundial en baloncesto. Disfruta de la emoción de la Liga Endesa y las competiciones europeas.',
      leagues: ['Liga Endesa (ACB)', 'Copa del Rey', 'EuroLeague', 'EuroCup'],
      image: '/basketball-arena-spain.jpg',
    },
    {
      name: 'Tenis',
      slug: 'tenis',
      description: 'Los mejores torneos de tenis tienen lugar en España. Madrid Open, Barcelona Open y más.',
      leagues: ['Mutua Madrid Open', 'Barcelona Open', 'Mallorca Championships', 'Valencia Open'],
      image: '/tennis-court-spanish-tournament.jpg',
      featured: true,
    },
    {
      name: 'MotoGP',
      slug: 'motogp',
      description: 'España es la cuna de grandes campeones de MotoGP. Vive la velocidad en los circuitos más emocionantes.',
      leagues: ['GP de España', 'GP de Jerez', 'GP de Catalunya', 'GP de Aragón'],
      image: '/motogp-racing-spain.jpg',
    },
    {
      name: 'Fórmula 1',
      slug: 'formula1',
      description: 'El Gran Premio de España en el Circuit de Barcelona-Catalunya es una cita imprescindible.',
      leagues: ['Gran Premio de España', 'Circuit de Barcelona-Catalunya'],
      image: '/formula-1-barcelona-circuit.jpg',
    },
    {
      name: 'Balonmano',
      slug: 'balonmano',
      description: 'El balonmano español domina Europa. Liga ASOBAL y Champions League te esperan.',
      leagues: ['Liga ASOBAL', 'Copa del Rey', 'Supercopa ASOBAL', 'EHF Champions League'],
      image: '/handball-game-spain.jpg',
    },
    {
      name: 'Voleibol',
      slug: 'voleibol',
      description: 'La Superliga española ofrece voleibol de alto nivel con equipos competitivos.',
      leagues: ['Superliga Masculina', 'Superliga Femenina', 'Copa del Rey', 'Supercopa'],
      image: '/volleyball-match-indoor.jpg',
    },
    {
      name: 'Ciclismo',
      slug: 'ciclismo',
      description: 'La Vuelta a España y las clásicas españolas son eventos únicos para los amantes del ciclismo.',
      leagues: ['La Vuelta a España', 'Vuelta al País Vasco', 'Clásica de San Sebastián'],
      image: '/cycling-vuelta-espana-mountains.jpg',
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6 text-balance">
            Explora Todos los Deportes
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Descubre la amplia variedad de deportes y ligas disponibles para tus eventos favoritos
          </p>
        </div>
      </section>

      {/* Sports Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {sports.map((sport) => (
              <Card
                key={sport.slug}
                className={`group overflow-hidden hover:shadow-2xl transition-all duration-300 ${
                  sport.featured ? 'md:col-span-2' : ''
                }`}
              >
                <div className={`grid ${sport.featured ? 'md:grid-cols-2' : 'grid-cols-1'} gap-0`}>
                  {/* Image */}
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={sport.image || "/placeholder.svg"}
                      alt={sport.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h2 className="text-3xl font-heading font-bold mb-4 group-hover:text-primary transition-colors">
                      {sport.name}
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {sport.description}
                    </p>

                    {/* Leagues List */}
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                        Ligas y Torneos
                      </h3>
                      <ul className="space-y-2">
                        {sport.leagues.slice(0, 4).map((league) => (
                          <li key={league} className="flex items-center text-sm">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                            {league}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <Button asChild className="w-full group/btn">
                      <Link href={`/deportes/${sport.slug}`}>
                        Ver Ligas y Torneos
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
            Contáctanos y te ayudaremos a encontrar las entradas perfectas para tu evento deportivo
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
            <Link href="/contacto">Contactar Ahora</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
