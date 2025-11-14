import { SportPageTemplate } from '@/components/sport-page-template'

export const metadata = {
  title: 'Entradas de MotoGP - Gran Premio de España | EntradasDeporte',
  description: 'Entradas para Gran Premio de España, GP de Jerez y todas las carreras de MotoGP en España.',
}

export default function MotoGPPage() {
  const leagues = [
    {
      name: 'Gran Premio de España',
      description: 'Carreras oficiales del campeonato mundial de MotoGP en circuitos españoles.',
      image: '/motogp-gran-premio-spain-racing-circuit-bikes.jpg',
    },
    {
      name: 'GP de Jerez',
      description: 'Circuito de Jerez-Ángel Nieto, uno de los más emblemáticos del calendario.',
      image: '/motogp-jerez-circuit-angel-nieto-racing.jpg',
    },
    {
      name: 'GP de Catalunya',
      description: 'Circuit de Barcelona-Catalunya acoge una de las citas más esperadas.',
      image: '/motogp-barcelona-catalunya-circuit-racing.jpg',
    },
    {
      name: 'GP de Aragón',
      description: 'MotorLand Aragón ofrece un trazado técnico y espectacular.',
      image: '/motogp-aragon-motorland-circuit-technical-track.jpg',
    },
    {
      name: 'GP de la Comunitat Valenciana',
      description: 'Circuito Ricardo Tormo, escenario habitual del cierre de temporada.',
      image: '/motogp-valencia-ricardo-tormo-circuit-finale.jpg',
    },
  ]

  return (
    <SportPageTemplate
      sportName="MotoGP"
      description="España es la cuna de grandes campeones de MotoGP. Vive la velocidad en los circuitos más emocionantes."
      heroImage="/motogp-racing-spain.jpg"
      leagues={leagues}
    />
  )
}
