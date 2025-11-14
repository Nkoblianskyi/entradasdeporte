import { SportPageTemplate } from '@/components/sport-page-template'

export const metadata = {
  title: 'Entradas de Fórmula 1 - Gran Premio de España | EntradasDeporte',
  description: 'Entradas para el Gran Premio de España de Fórmula 1 en el Circuit de Barcelona-Catalunya.',
}

export default function Formula1Page() {
  const leagues = [
    {
      name: 'Gran Premio de España',
      description: 'La máxima categoría del automovilismo visita España en una cita imprescindible.',
      image: '/f1-gran-premio-espana-barcelona-racing.jpg',
    },
    {
      name: 'Circuit de Barcelona-Catalunya',
      description: 'Circuito histórico que ha acogido grandes momentos de la Fórmula 1.',
      image: '/f1-circuit-barcelona-catalunya-historic-track.jpg',
    },
  ]

  return (
    <SportPageTemplate
      sportName="Fórmula 1"
      description="El Gran Premio de España en el Circuit de Barcelona-Catalunya es una cita imprescindible."
      heroImage="/formula-1-barcelona-circuit.jpg"
      leagues={leagues}
    />
  )
}
