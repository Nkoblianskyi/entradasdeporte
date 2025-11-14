import { SportPageTemplate } from '@/components/sport-page-template'

export const metadata = {
  title: 'Entradas de Balonmano - Liga ASOBAL, Champions | EntradasDeporte',
  description: 'Entradas para Liga ASOBAL, Copa del Rey y todas las competiciones de balonmano en España.',
}

export default function BalonmanoPage() {
  const leagues = [
    {
      name: 'Liga ASOBAL',
      description: 'La liga española de balonmano, referente en Europa con equipos de élite.',
      image: '/liga-asobal-handball-spanish-elite-teams.jpg',
    },
    {
      name: 'Copa del Rey',
      description: 'Torneo de copa con los mejores equipos españoles en emocionantes enfrentamientos.',
      image: '/copa-rey-balonmano-handball-spanish-tournament.jpg',
    },
    {
      name: 'Supercopa ASOBAL',
      description: 'Enfrentamiento entre el campeón de liga y el ganador de la Copa del Rey.',
      image: '/supercopa-asobal-handball-champions-match.jpg',
    },
    {
      name: 'EHF Champions League',
      description: 'La máxima competición europea con participación de clubes españoles.',
      image: '/ehf-champions-league-handball-european-spanish.jpg',
    },
  ]

  return (
    <SportPageTemplate
      sportName="Balonmano"
      description="El balonmano español domina Europa. Liga ASOBAL y Champions League te esperan."
      heroImage="/handball-game-spain.jpg"
      leagues={leagues}
    />
  )
}
