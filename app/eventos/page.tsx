'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function EventosPage() {
  const [activeFilter, setActiveFilter] = useState('Todos')

  const filters = [
    'Todos',
    'Fútbol',
    'Baloncesto',
    'Tenis',
    'MotoGP',
    'Fórmula 1',
    'Balonmano',
    'Voleibol',
    'Ciclismo',
  ]

  const events = [
    {
      sport: 'Fútbol',
      name: 'La Liga Santander',
      description: 'La máxima categoría del fútbol español con los mejores equipos del país.',
      image: '/la-liga-spanish-football-stadium-match.jpg',
    },
    {
      sport: 'Fútbol',
      name: 'Copa del Rey',
      description: 'El torneo de copa más prestigioso de España con partidos eliminatorios emocionantes.',
      image: '/copa-del-rey-football-trophy-celebration.jpg',
    },
    {
      sport: 'Fútbol',
      name: 'UEFA Champions League',
      description: 'La competición de clubes más importante de Europa.',
      image: '/champions-league-stadium-night-lights-european-foo.jpg',
    },
    {
      sport: 'Baloncesto',
      name: 'Liga Endesa (ACB)',
      description: 'La mejor liga de baloncesto de España con equipos de primer nivel.',
      image: '/liga-endesa-basketball-arena-spain-acb.jpg',
    },
    {
      sport: 'Baloncesto',
      name: 'EuroLeague',
      description: 'La máxima competición europea de baloncesto de clubes.',
      image: '/euroleague-basketball-european-arena-competition.jpg',
    },
    {
      sport: 'Tenis',
      name: 'Mutua Madrid Open',
      description: 'Torneo Masters 1000 con las mejores raquetas del mundo.',
      image: '/mutua-madrid-open-tennis-clay-court-spain.jpg',
    },
    {
      sport: 'Tenis',
      name: 'Barcelona Open Banc Sabadell',
      description: 'Prestigioso torneo ATP 500 en tierra batida.',
      image: '/barcelona-open-tennis-clay-court-atp-tournament.jpg',
    },
    {
      sport: 'MotoGP',
      name: 'Gran Premio de España',
      description: 'Carreras de MotoGP en los mejores circuitos españoles.',
      image: '/motogp-gran-premio-spain-racing-circuit-bikes.jpg',
    },
    {
      sport: 'MotoGP',
      name: 'GP de Jerez',
      description: 'Circuito de Jerez, uno de los más emblemáticos del campeonato.',
      image: '/jerez-circuit-motogp-motorcycle-racing-spain.jpg',
    },
    {
      sport: 'Fórmula 1',
      name: 'Gran Premio de España',
      description: 'F1 en el Circuit de Barcelona-Catalunya con la máxima emoción.',
      image: '/formula-1-barcelona-catalunya-circuit-f1-racing.jpg',
    },
    {
      sport: 'Balonmano',
      name: 'Liga ASOBAL',
      description: 'La liga española de balonmano, referente en Europa.',
      image: '/liga-asobal-handball-spain-indoor-arena.jpg',
    },
    {
      sport: 'Balonmano',
      name: 'EHF Champions League',
      description: 'La Champions League del balonmano europeo.',
      image: '/ehf-champions-league-handball-european-competition.jpg',
    },
    {
      sport: 'Voleibol',
      name: 'Superliga Masculina',
      description: 'La máxima categoría del voleibol masculino español.',
      image: '/superliga-volleyball-spain-indoor-court-match.jpg',
    },
    {
      sport: 'Voleibol',
      name: 'Copa del Rey de Voleibol',
      description: 'Torneo de copa con los mejores equipos nacionales.',
      image: '/copa-del-rey-volleyball-tournament-spain.jpg',
    },
    {
      sport: 'Ciclismo',
      name: 'La Vuelta a España',
      description: 'Una de las tres grandes vueltas del ciclismo mundial.',
      image: '/vuelta-espana-cycling-mountains-peloton-spain.jpg',
    },
    {
      sport: 'Ciclismo',
      name: 'Vuelta al País Vasco',
      description: 'Carrera por etapas en el País Vasco con recorridos exigentes.',
      image: '/placeholder.svg?height=400&width=600',
    },
  ]

  const filteredEvents =
    activeFilter === 'Todos'
      ? events
      : events.filter((event) => event.sport === activeFilter)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/10 via-background to-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6 text-balance">
            Ligas y Torneos Disponibles
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explora todas las competiciones deportivas de España
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-muted/30 sticky top-20 z-40 border-b border-border backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? 'default' : 'outline'}
                onClick={() => setActiveFilter(filter)}
                className="font-semibold"
              >
                {filter}
              </Button>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Mostrando {filteredEvents.length}{' '}
            {filteredEvents.length === 1 ? 'liga o torneo' : 'ligas y torneos'}
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {filteredEvents.map((event, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      {event.sport}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">
                    {event.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {event.description}
                  </p>

                  <Button asChild className="w-full" variant="outline">
                    <Link href={`/contacto?deporte=${encodeURIComponent(event.sport)}&liga=${encodeURIComponent(event.name)}`}>
                      Solicitar Entradas
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
