import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, Award, Users, Headphones, Star, Calendar, MapPin, TrendingUp, Trophy, Bike, Car, Dumbbell, ReplyAll as Volleyball } from 'lucide-react'

export default function HomePage() {
  const featuredSports = [
    {
      name: 'Fútbol',
      description: 'La Liga, Copa del Rey, Champions League',
      image: '/spanish-football-stadium-red.jpg',
      href: '/deportes/futbol',
      accent: 'from-spanish-red/90 to-spanish-red/70',
      stats: '500+ partidos al año'
    },
    {
      name: 'MotoGP',
      description: 'Gran Premio de España, Jerez',
      image: '/motogp-racing-spain.jpg',
      href: '/deportes/motogp',
      accent: 'from-spanish-blue/90 to-spanish-blue/70',
      stats: 'Carreras emocionantes'
    },
    {
      name: 'Baloncesto',
      description: 'Liga Endesa, EuroLeague',
      image: '/basketball-arena-spain.jpg',
      href: '/deportes/baloncesto',
      accent: 'from-spanish-gold/90 to-amber-600/70',
      stats: 'Ligas nacionales'
    },
    {
      name: 'Tenis',
      description: 'Mutua Madrid Open, Barcelona Open',
      image: '/tennis-court-spanish-tournament.jpg',
      href: '/deportes/tenis',
      accent: 'from-emerald-600/90 to-teal-600/70',
      stats: 'Torneos ATP y WTA'
    },
    {
      name: 'Fórmula 1',
      description: 'Gran Premio de España, Circuit de Barcelona',
      image: '/formula-1-barcelona-circuit.jpg',
      href: '/deportes/formula1',
      accent: 'from-red-600/90 to-rose-600/70',
      stats: 'Velocidad máxima'
    },
    {
      name: 'Balonmano',
      description: 'Liga ASOBAL, Copa del Rey',
      image: '/handball-game-spain.jpg',
      href: '/deportes/balonmano',
      accent: 'from-blue-600/90 to-indigo-600/70',
      stats: 'Ligas y copas'
    },
    {
      name: 'Voleibol',
      description: 'Superliga, Copa del Rey',
      image: '/volleyball-match-indoor.jpg',
      href: '/deportes/voleibol',
      accent: 'from-purple-600/90 to-violet-600/70',
      stats: 'Partidos nacionales'
    },
    {
      name: 'Ciclismo',
      description: 'Vuelta a España, Clásicas',
      image: '/cycling-vuelta-espana-mountains.jpg',
      href: '/deportes/ciclismo',
      accent: 'from-amber-600/90 to-yellow-600/70',
      stats: 'Etapas épicas'
    },
  ]

  const testimonials = [
    {
      name: 'Carlos M.',
      location: 'Madrid',
      rating: 5,
      comment: 'Increíble experiencia. Conseguí entradas para el Clásico en minutos.',
    },
    {
      name: 'Laura P.',
      location: 'Barcelona',
      rating: 5,
      comment: 'Servicio excepcional. El equipo me ayudó a encontrar las mejores ubicaciones.',
    },
    {
      name: 'Miguel R.',
      location: 'Valencia',
      rating: 5,
      comment: 'Llevo años usando EntradasDeporte. Siempre confiables y profesionales.',
    },
  ]

  return (
    <div className="pt-20">
      <section className="relative min-h-[650px] flex items-center overflow-hidden bg-gradient-to-br from-spanish-red/5 via-background to-spanish-blue/5">
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <div className="relative w-full h-full clip-diagonal">
            <Image
              src="/spanish-stadium-crowd-atmosphere-sunset.jpg"
              alt="Spanish stadium"
              fill
              className="object-cover brightness-75"
              priority
            />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-block bg-spanish-red text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🎉 Más de 50,000 clientes satisfechos
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-balance mb-6 leading-tight">
              Tu Pasión Deportiva Empieza Aquí
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed text-pretty">
              Accede a los eventos más emocionantes de España. Fútbol, baloncesto, tenis y más.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg px-8 py-6 font-semibold shadow-lg hover:shadow-xl transition-shadow">
                <Link href="/deportes">
                  Explorar Deportes
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 font-semibold border-2">
                <Link href="/eventos">Ver Eventos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Todos Nuestros Deportes</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Explora Todas las Opciones
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              8 deportes diferentes con las mejores ligas y torneos de España
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {featuredSports.map((sport) => (
              <Link
                key={sport.name}
                href={sport.href}
                className="group relative"
              >
                <Card className="overflow-hidden border-2 hover:border-primary transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 h-[400px] flex flex-col">
                  <div className="relative h-48 flex-shrink-0">
                    <Image
                      src={sport.image || "/placeholder.svg"}
                      alt={sport.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${sport.accent} to-transparent opacity-60`} />
                    
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-xs font-bold text-foreground">{sport.stats}</span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1 bg-card">
                    <h3 className="text-2xl font-heading font-bold mb-3 h-8 overflow-hidden">
                      {sport.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4 h-12 overflow-hidden">
                      {sport.description}
                    </p>
                    <div className="flex items-center text-primary font-semibold mt-auto pt-2">
                      <span>Ver más</span>
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div>
              <div className="inline-flex items-center gap-2 bg-spanish-gold/20 px-4 py-2 rounded-full mb-6">
                <Award className="w-4 h-4 text-spanish-gold" />
                <span className="text-sm font-semibold text-spanish-gold">Desde 2008</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                ¿Por Qué Somos Tu Mejor Opción?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Más de 15 años de experiencia conectando a los aficionados con sus deportes favoritos en toda España.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-spanish-red/10 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-spanish-red" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold mb-2">Amplia Selección</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Acceso a todas las ligas y torneos principales de España
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-spanish-blue/10 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-spanish-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold mb-2">Proceso Sencillo</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Solicita tus entradas en minutos con nuestro formulario fácil
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-spanish-gold/10 rounded-xl flex items-center justify-center">
                    <Headphones className="w-6 h-6 text-spanish-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold mb-2">Atención Personalizada</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Nuestro equipo te ayuda a encontrar las mejores opciones
                    </p>
                  </div>
                </div>
              </div>

              <Button asChild size="lg" className="mt-8 font-semibold">
                <Link href="/sobre-nosotros">
                  Conoce Más Sobre Nosotros
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <Card className="p-6 bg-spanish-red text-white">
                    <div className="text-4xl font-bold mb-2">15+</div>
                    <div className="text-sm opacity-90">Años de Experiencia</div>
                  </Card>
                  <Card className="p-6 bg-spanish-blue text-white">
                    <div className="text-4xl font-bold mb-2">50K+</div>
                    <div className="text-sm opacity-90">Clientes Felices</div>
                  </Card>
                </div>
                <div className="space-y-4 pt-8">
                  <Card className="p-6 bg-spanish-gold text-white">
                    <div className="text-4xl font-bold mb-2">8</div>
                    <div className="text-sm opacity-90">Deportes Diferentes</div>
                  </Card>
                  <Card className="p-6 border-2 border-primary">
                    <div className="text-4xl font-bold mb-2 text-primary">24/7</div>
                    <div className="text-sm text-muted-foreground">Soporte al Cliente</div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-spanish-gold/20 px-4 py-2 rounded-full mb-4">
              <Star className="w-4 h-4 text-spanish-gold fill-spanish-gold" />
              <span className="text-sm font-semibold text-spanish-gold">Reseñas 5 Estrellas</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Lo Que Dicen Nuestros Clientes
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Miles de aficionados confían en nosotros para sus experiencias deportivas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.comment}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
              <div>
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-2">
                  Próximos Eventos
                </h2>
                <p className="text-muted-foreground text-lg">
                  Los eventos más esperados de este mes
                </p>
              </div>
              <Button asChild variant="outline" size="lg" className="font-semibold border-2">
                <Link href="/eventos">
                  Ver Todos los Eventos
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="overflow-hidden border-2 hover:border-primary transition-all hover:shadow-xl group cursor-pointer">
                <div className="flex flex-col md:flex-row h-full">
                  <div className="relative w-full md:w-2/5 h-48 md:h-auto">
                    <Image
                      src="/la-liga-spanish-football-stadium-match.jpg"
                      alt="La Liga"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex-1">
                    <div className="inline-block bg-spanish-red/10 text-spanish-red px-3 py-1 rounded-full text-xs font-bold mb-3">
                      FÚTBOL
                    </div>
                    <h3 className="text-2xl font-heading font-bold mb-3">La Liga</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Los mejores equipos de España compiten por el título de campeón
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Temporada completa disponible</span>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border-2 hover:border-primary transition-all hover:shadow-xl group cursor-pointer">
                <div className="flex flex-col md:flex-row h-full">
                  <div className="relative w-full md:w-2/5 h-48 md:h-auto">
                    <Image
                      src="/liga-endesa-basketball-arena-spain-acb.jpg"
                      alt="Liga Endesa"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex-1">
                    <div className="inline-block bg-spanish-blue/10 text-spanish-blue px-3 py-1 rounded-full text-xs font-bold mb-3">
                      BALONCESTO
                    </div>
                    <h3 className="text-2xl font-heading font-bold mb-3">Liga Endesa</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      La mejor liga de baloncesto de España con partidos emocionantes
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Partidos cada semana</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-spanish-red via-primary to-spanish-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            ¿Listo para la Acción?
          </h2>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto opacity-95 leading-relaxed">
            No pierdas la oportunidad de vivir los mejores momentos del deporte español
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 font-semibold shadow-lg hover:shadow-xl"
            >
              <Link href="/contacto">
                Solicitar Entradas Ahora
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 font-semibold bg-white/10 border-2 border-white text-white hover:bg-white hover:text-foreground"
            >
              <Link href="/sobre-nosotros">Conoce Más</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
