import { SportPageTemplate } from '@/components/sport-page-template'

export const metadata = {
  title: 'Entradas de Fútbol - La Liga, Copa del Rey | EntradasDeporte',
  description: 'Entradas para La Liga, Copa del Rey, Champions League y todos los torneos de fútbol en España.',
}

export default function FutbolPage() {
  const leagues = [
    {
      name: 'La Liga Santander',
      description: 'La máxima categoría del fútbol español con los mejores equipos del país en competición semanal.',
      image: '/la-liga-spanish-football-stadium-match.jpg',
    },
    {
      name: 'Copa del Rey',
      description: 'El torneo de copa más prestigioso de España con emocionantes partidos eliminatorios.',
      image: '/copa-del-rey-football-trophy-celebration.jpg',
    },
    {
      name: 'Supercopa de España',
      description: 'Enfrentamiento entre los campeones de La Liga y la Copa del Rey.',
      image: '/supercopa-espana-football-stadium-night.jpg',
    },
    {
      name: 'UEFA Champions League',
      description: 'La competición de clubes más importante de Europa con equipos españoles.',
      image: '/champions-league-stadium-night-lights-european-foo.jpg',
    },
    {
      name: 'UEFA Europa League',
      description: 'Segunda competición europea con participación de clubes españoles.',
      image: '/europa-league-football-stadium-spanish-teams.jpg',
    },
    {
      name: 'La Liga 2',
      description: 'Segunda división del fútbol español con equipos emergentes y emocionantes.',
      image: '/la-liga-2-segunda-division-spanish-football.jpg',
    },
  ]

  return (
    <SportPageTemplate
      sportName="Fútbol"
      description="El fútbol es la pasión nacional de España. Desde La Liga hasta la Champions League, ofrecemos acceso a los torneos más prestigiosos del mundo."
      heroImage="/spanish-football-stadium-red.jpg"
      leagues={leagues}
    />
  )
}
