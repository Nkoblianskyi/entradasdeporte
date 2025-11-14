import { SportPageTemplate } from '@/components/sport-page-template'

export const metadata = {
  title: 'Entradas de Tenis - Madrid Open, Barcelona Open | EntradasDeporte',
  description: 'Entradas para Mutua Madrid Open, Barcelona Open y todos los torneos de tenis en España.',
}

export default function TenisPage() {
  const leagues = [
    {
      name: 'Mutua Madrid Open',
      description: 'Torneo Masters 1000 con las mejores raquetas del mundo en tierra batida.',
      image: '/mutua-madrid-open-tennis-clay-court-spain.jpg',
    },
    {
      name: 'Barcelona Open Banc Sabadell',
      description: 'Prestigioso torneo ATP 500 en las instalaciones del Real Club de Tenis Barcelona.',
      image: '/barcelona-open-tennis-clay-court-atp-tournament.jpg',
    },
    {
      name: 'Mallorca Championships',
      description: 'Torneo ATP en hierba como preparación para Wimbledon.',
      image: '/mallorca-championships-tennis-grass-court-atp.jpg',
    },
    {
      name: 'Valencia Open',
      description: 'Torneo ATP 500 en pista dura que cierra la temporada europea.',
      image: '/valencia-open-tennis-hard-court-atp-500.jpg',
    },
  ]

  return (
    <SportPageTemplate
      sportName="Tenis"
      description="Los mejores torneos de tenis tienen lugar en España. Madrid Open, Barcelona Open y más."
      heroImage="/tennis-court-spanish-tournament.jpg"
      leagues={leagues}
    />
  )
}
