import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, MessageCircle, Mail, Send } from 'lucide-react'

function InstagramIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}
import {
  useScrollAnimation,
  fadeLeftVariants,
  fadeRightVariants,
  fadeUpVariants,
} from '../hooks/useScrollAnimation'

const eventTypes = [
  'Casamiento',
  'Cumpleaños / Quinceañero',
  'Evento Corporativo',
  'Baby Shower / Bautismo',
  'Aniversario',
  'Otro',
]

export default function Contact() {
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', evento: '', fecha: '', mensaje: '' })
  const [sent, setSent] = useState(false)

  const { ref: titleRef, animate: titleAnimate } = useScrollAnimation({ threshold: 0.3 })
  const { ref: formRef, animate: formAnimate } = useScrollAnimation({ threshold: 0.15 })
  const { ref: infoRef, animate: infoAnimate } = useScrollAnimation({ threshold: 0.15 })

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="bg-warm-100 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={titleRef}
          variants={fadeUpVariants}
          initial="hidden"
          animate={titleAnimate}
          className="text-center mb-14"
        >
          <p className="text-xs uppercase tracking-[0.35em] font-semibold text-gold mb-4">
            Contacto
          </p>
          <h2
            className="text-4xl md:text-5xl font-light text-warm-900"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Hagamos realidad<br />
            <span className="font-semibold">tu evento soñado</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Form */}
          <motion.div
            ref={formRef}
            variants={fadeLeftVariants}
            initial="hidden"
            animate={formAnimate}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-cream rounded-2xl p-10 text-center border border-warm-200 h-full flex flex-col items-center justify-center gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-gold/15 flex items-center justify-center mb-2">
                  <Send size={28} className="text-gold" />
                </div>
                <h3 className="text-2xl font-semibold text-warm-900" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                  ¡Consulta enviada!
                </h3>
                <p className="text-stone font-light text-sm">
                  Gracias por contactarnos. Nos comunicaremos con vos dentro de las próximas 24 horas.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="nombre" className="block text-xs uppercase tracking-widest font-semibold text-stone mb-1.5">
                      Nombre *
                    </label>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      required
                      value={form.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre completo"
                      className="w-full bg-cream border border-warm-200 rounded-xl px-4 py-3 text-sm text-warm-900 placeholder:text-stone/50 focus:outline-none focus:border-gold transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs uppercase tracking-widest font-semibold text-stone mb-1.5">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      className="w-full bg-cream border border-warm-200 rounded-xl px-4 py-3 text-sm text-warm-900 placeholder:text-stone/50 focus:outline-none focus:border-gold transition-colors duration-200"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="telefono" className="block text-xs uppercase tracking-widest font-semibold text-stone mb-1.5">
                      Teléfono
                    </label>
                    <input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      value={form.telefono}
                      onChange={handleChange}
                      placeholder="+54 261 000 0000"
                      className="w-full bg-cream border border-warm-200 rounded-xl px-4 py-3 text-sm text-warm-900 placeholder:text-stone/50 focus:outline-none focus:border-gold transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="fecha" className="block text-xs uppercase tracking-widest font-semibold text-stone mb-1.5">
                      Fecha tentativa
                    </label>
                    <input
                      id="fecha"
                      name="fecha"
                      type="date"
                      value={form.fecha}
                      onChange={handleChange}
                      className="w-full bg-cream border border-warm-200 rounded-xl px-4 py-3 text-sm text-warm-900 focus:outline-none focus:border-gold transition-colors duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="evento" className="block text-xs uppercase tracking-widest font-semibold text-stone mb-1.5">
                    Tipo de evento *
                  </label>
                  <select
                    id="evento"
                    name="evento"
                    required
                    value={form.evento}
                    onChange={handleChange}
                    className="w-full bg-cream border border-warm-200 rounded-xl px-4 py-3 text-sm text-warm-900 focus:outline-none focus:border-gold transition-colors duration-200 cursor-pointer"
                  >
                    <option value="">Seleccioná el tipo</option>
                    {eventTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-xs uppercase tracking-widest font-semibold text-stone mb-1.5">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    value={form.mensaje}
                    onChange={handleChange}
                    placeholder="Contanos sobre tu evento, cantidad de personas, necesidades especiales..."
                    className="w-full bg-cream border border-warm-200 rounded-xl px-4 py-3 text-sm text-warm-900 placeholder:text-stone/50 focus:outline-none focus:border-gold transition-colors duration-200 resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: '0 8px 25px rgba(201,168,76,0.35)' }}
                  whileTap={{ scale: 0.98 }}
                  className="cursor-pointer w-full bg-gold text-cream py-3.5 rounded-full text-sm uppercase tracking-widest font-semibold hover:bg-gold-dark transition-colors duration-200"
                >
                  Enviar Consulta
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            ref={infoRef}
            variants={fadeRightVariants}
            initial="hidden"
            animate={infoAnimate}
            className="space-y-8"
          >
            <div>
              <h3
                className="text-2xl font-semibold text-warm-900 mb-6"
                style={{ fontFamily: '"Cormorant Garamond", serif' }}
              >
                Información de contacto
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-semibold text-stone mb-0.5">Dirección</p>
                    <p className="text-warm-900 text-sm font-light">Av. San Martín 1234, Godoy Cruz<br />Mendoza, Argentina</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-semibold text-stone mb-0.5">Teléfono</p>
                    <a href="tel:+5426100000000" className="text-warm-900 text-sm font-light hover:text-gold transition-colors duration-200">
                      +54 261 000-0000
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-semibold text-stone mb-0.5">Email</p>
                    <a href="mailto:info@lajuanameetingpoint.com" className="text-warm-900 text-sm font-light hover:text-gold transition-colors duration-200">
                      info@lajuanameetingpoint.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs uppercase tracking-widest font-semibold text-stone mb-4">Seguinos</p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="flex items-center gap-2 border border-warm-200 rounded-full px-4 py-2 text-sm text-stone hover:border-gold hover:text-gold transition-colors duration-200 cursor-pointer"
                >
                  <InstagramIcon size={16} /> Instagram
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 border border-warm-200 rounded-full px-4 py-2 text-sm text-stone hover:border-gold hover:text-gold transition-colors duration-200 cursor-pointer"
                >
                  <MessageCircle size={16} /> WhatsApp
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden h-52 border border-warm-200">
              <iframe
                title="Ubicación La Juana Meeting Point en Mendoza"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.764!2d-68.8458!3d-32.9072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDU0JzI2LjAiUyA2OMKwNTAnNDUuMCJX!5e0!3m2!1ses!2sar!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="bg-cream rounded-2xl p-5 border border-warm-200">
              <p className="text-xs uppercase tracking-widest font-semibold text-stone mb-2">Horarios de atención</p>
              <p className="text-sm text-warm-900 font-light">Lunes a Viernes: 9:00 – 18:00 hs</p>
              <p className="text-sm text-warm-900 font-light">Sábados: 10:00 – 14:00 hs</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
