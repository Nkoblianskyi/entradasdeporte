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
      image: '/567aee1188ab50e17ac4de07f8dd5257.jpg',
    },
    {
      name: 'Supercopa ASOBAL',
      description: 'Enfrentamiento entre el campeón de liga y el ganador de la Copa del Rey.',
      image: '/1dce3eaee8a6571ef6364928e1aaffa9.jpg',
    },
    {
      name: 'EHF Champions League',
      description: 'La máxima competición europea con participación de clubes españoles.',
      image: '/c42e3564cb280bc77a8f0b119b5bdfbd.jpg',
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
