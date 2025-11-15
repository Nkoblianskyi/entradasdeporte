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
      image: '/6ebc171aefd1bc040c38c5cdbacaaddd.jpg',
    },
    {
      name: 'Vuelta al País Vasco',
      description: 'Carrera por etapas con recorridos exigentes por el norte de España.',
      image: '/055b9f4b50e56eb287daf42c4db2c5ef.jpg',
    },
    {
      name: 'Vuelta a Burgos',
      description: 'Carrera de preparación para las grandes citas del calendario.',
      image: '/bf3ddda2a924af84e8949ddf02445e79.jpg',
    },
    {
      name: 'Clásica de San Sebastián',
      description: 'Una de las clásicas más prestigiosas del calendario WorldTour.',
      image: '/6b1dc476bcc53bf82865380353dc82d1.jpg',
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
