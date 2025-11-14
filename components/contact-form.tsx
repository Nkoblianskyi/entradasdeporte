'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { CheckCircle2, Mail, Phone } from 'lucide-react'

export function ContactForm() {
  const searchParams = useSearchParams()
  const [isSuccessOpen, setIsSuccessOpen] = useState(false)
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    deporte: '',
    liga: '',
    entradas: '1',
    mensaje: '',
  })

  useEffect(() => {
    const deporteParam = searchParams.get('deporte')
    const ligaParam = searchParams.get('liga')
    
    if (deporteParam || ligaParam) {
      setFormData((prev) => ({
        ...prev,
        deporte: deporteParam || prev.deporte,
        liga: ligaParam || prev.liga,
      }))
    }
  }, [searchParams.get('deporte'), searchParams.get('liga')])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSuccessOpen(true)
    // Reset form
    setFormData({
      nombre: '',
      apellido: '',
      email: '',
      telefono: '',
      deporte: '',
      liga: '',
      entradas: '1',
      mensaje: '',
    })
  }

  const sports = [
    'Fútbol',
    'Baloncesto',
    'Tenis',
    'MotoGP',
    'Fórmula 1',
    'Balonmano',
    'Voleibol',
    'Ciclismo',
  ]

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="nombre">
              Nombre <span className="text-destructive">*</span>
            </Label>
            <Input
              id="nombre"
              required
              value={formData.nombre}
              onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
              placeholder="Tu nombre"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="apellido">
              Apellido <span className="text-destructive">*</span>
            </Label>
            <Input
              id="apellido"
              required
              value={formData.apellido}
              onChange={(e) => setFormData({ ...formData, apellido: e.target.value })}
              placeholder="Tu apellido"
            />
          </div>
        </div>

        {/* Email and Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="email">
              Email <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="tu@email.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="telefono">Teléfono</Label>
            <Input
              id="telefono"
              type="tel"
              value={formData.telefono}
              onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
              placeholder="+34 XXX XXX XXX"
            />
          </div>
        </div>

        {/* Sport and League */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="deporte">
              Deporte <span className="text-destructive">*</span>
            </Label>
            <Select
              required
              value={formData.deporte}
              onValueChange={(value) => setFormData({ ...formData, deporte: value })}
            >
              <SelectTrigger id="deporte">
                <SelectValue placeholder="Selecciona un deporte" />
              </SelectTrigger>
              <SelectContent>
                {sports.map((sport) => (
                  <SelectItem key={sport} value={sport}>
                    {sport}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="liga">Liga/Torneo de interés</Label>
            <Input
              id="liga"
              value={formData.liga}
              onChange={(e) => setFormData({ ...formData, liga: e.target.value })}
              placeholder="ej. La Liga, EuroLeague"
            />
          </div>
        </div>

        {/* Number of Tickets */}
        <div className="space-y-2">
          <Label htmlFor="entradas">Número de entradas</Label>
          <Input
            id="entradas"
            type="number"
            min="1"
            max="50"
            value={formData.entradas}
            onChange={(e) => setFormData({ ...formData, entradas: e.target.value })}
          />
        </div>

        {/* Message */}
        <div className="space-y-2">
          <Label htmlFor="mensaje">
            Mensaje <span className="text-destructive">*</span>
          </Label>
          <Textarea
            id="mensaje"
            required
            value={formData.mensaje}
            onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
            placeholder="Cuéntanos más sobre tu solicitud..."
            rows={5}
          />
        </div>

        {/* Submit Button */}
        <Button type="submit" size="lg" className="w-full font-semibold">
          Enviar Solicitud
        </Button>
      </form>

      {/* Success Dialog */}
      <Dialog open={isSuccessOpen} onOpenChange={setIsSuccessOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
            </div>
            <DialogTitle className="text-center text-2xl">
              ¡Mensaje enviado con éxito!
            </DialogTitle>
            <DialogDescription className="text-center text-base">
              Nos pondremos en contacto contigo en 24 horas
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 pt-4">
            <div className="flex items-start gap-3 text-sm">
              <Mail className="w-5 h-5 text-muted-foreground mt-0.5" />
              <div>
                <p className="font-medium">Email</p>
                <a href="mailto:info@entradasdeporte.es" className="text-muted-foreground hover:text-primary">
                  info@entradasdeporte.es
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <Phone className="w-5 h-5 text-muted-foreground mt-0.5" />
              <div>
                <p className="font-medium">Teléfono</p>
                <a href="tel:+34914567890" className="text-muted-foreground hover:text-primary">
                  +34 91 456 7890
                </a>
              </div>
            </div>
          </div>

          <Button onClick={() => setIsSuccessOpen(false)} className="w-full mt-4">
            Cerrar
          </Button>
        </DialogContent>
      </Dialog>
    </>
  )
}
