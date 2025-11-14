import { SportPageTemplate } from '@/components/sport-page-template'

export const metadata = {
  title: 'Entradas de Baloncesto - Liga Endesa, EuroLeague | EntradasDeporte',
  description: 'Entradas para Liga Endesa, Copa del Rey, EuroLeague y todas las competiciones de baloncesto en España.',
}

export default function BaloncestoPage() {
  const leagues = [
    {
      name: 'Liga Endesa (ACB)',
      description: 'La mejor liga de baloncesto de España con equipos de primer nivel mundial.',
      image: '/liga-endesa-basketball-arena-spain-acb.jpg',
    },
    {
      name: 'Copa del Rey de Baloncesto',
      description: 'Torneo de copa con formato de final a ocho en un fin de semana espectacular.',
      image: '/copa-rey-baloncesto-final-eight-spain.jpg',
    },
    {
      name: 'Supercopa ACB',
      description: 'Torneo que da inicio a la temporada con los mejores equipos.',
      image: '/supercopa-acb-basketball-spanish-champions.jpg',
    },
    {
      name: 'EuroLeague',
      description: 'La máxima competición europea de baloncesto de clubes.',
      image: '/euroleague-basketball-european-arena-competition.jpg',
    },
    {
      name: 'EuroCup',
      description: 'Segunda competición europea con equipos españoles de alto nivel.',
      image: '/eurocup-basketball-spanish-teams-european.jpg',
    },
  ]

  return (
    <SportPageTemplate
      sportName="Baloncesto"
      description="España es potencia mundial en baloncesto. Disfruta de la emoción de la Liga Endesa y las competiciones europeas."
      heroImage="/basketball-arena-spain.jpg"
      leagues={leagues}
    />
  )
}
