import { SportPageTemplate } from '@/components/sport-page-template'

export const metadata = {
  title: 'Entradas de Voleibol - Superliga, Copa del Rey | EntradasDeporte',
  description: 'Entradas para Superliga Masculina, Superliga Femenina y todas las competiciones de voleibol en España.',
}

export default function VoleibolPage() {
  const leagues = [
    {
      name: 'Superliga Masculina',
      description: 'La máxima categoría del voleibol masculino español con equipos competitivos.',
      image: '/superliga-masculina-volleyball-spanish-mens.jpg',
    },
    {
      name: 'Superliga Femenina',
      description: 'Liga femenina de voleibol con alto nivel de juego y grandes rivalidades.',
      image: '/superliga-femenina-volleyball-spanish-womens.jpg',
    },
    {
      name: 'Copa del Rey',
      description: 'Torneo de copa con los mejores equipos masculinos del país.',
      image: '/copa-rey-voleibol-volleyball-mens-tournament.jpg',
    },
    {
      name: 'Supercopa',
      description: 'Torneo que marca el inicio de la temporada con los campeones.',
      image: '/supercopa-voleibol-volleyball-spanish-champions.jpg',
    },
  ]

  return (
    <SportPageTemplate
      sportName="Voleibol"
      description="La Superliga española ofrece voleibol de alto nivel con equipos competitivos."
      heroImage="/volleyball-match-indoor.jpg"
      leagues={leagues}
    />
  )
}
