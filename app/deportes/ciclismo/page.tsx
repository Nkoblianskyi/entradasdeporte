import { SportPageTemplate } from '@/components/sport-page-template'

export const metadata = {
  title: 'Entradas de Ciclismo - La Vuelta a España | EntradasDeporte',
  description: 'Entradas para La Vuelta a España, Vuelta al País Vasco y todas las carreras de ciclismo en España.',
}

export default function CiclismoPage() {
  const leagues = [
    {
      name: 'La Vuelta a España',
      description: 'Una de las tres grandes vueltas del ciclismo mundial con etapas espectaculares.',
      image: '/la-vuelta-espana-cycling-grand-tour-mountains.jpg',
    },
    {
      name: 'Vuelta al País Vasco',
      description: 'Carrera por etapas con recorridos exigentes por el norte de España.',
      image: '/vuelta-pais-vasco-cycling-northern-spain-race.jpg',
    },
    {
      name: 'Vuelta a Burgos',
      description: 'Carrera de preparación para las grandes citas del calendario.',
      image: '/vuelta-burgos-cycling-preparation-race-spain.jpg',
    },
    {
      name: 'Clásica de San Sebastián',
      description: 'Una de las clásicas más prestigiosas del calendario WorldTour.',
      image: '/clasica-san-sebastian-cycling-worldtour-basque.jpg',
    },
  ]

  return (
    <SportPageTemplate
      sportName="Ciclismo"
      description="La Vuelta a España y las clásicas españolas son eventos únicos para los amantes del ciclismo."
      heroImage="/cycling-vuelta-espana-mountains.jpg"
      leagues={leagues}
    />
  )
}
