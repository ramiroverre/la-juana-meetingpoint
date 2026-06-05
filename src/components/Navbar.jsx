import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Espacios', href: '#espacios' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    return scrollY.on('change', (y) => setScrolled(y > 60))
  }, [scrollY])

  const handleNavClick = (href) => {
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
        style={{
          backgroundColor: scrolled ? 'rgba(250,248,243,0.97)' : 'rgba(250,248,243,0)',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          boxShadow: scrolled ? '0 2px 24px rgba(44,36,22,0.08)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#inicio"
              className="flex flex-col leading-none cursor-pointer"
              onClick={(e) => { e.preventDefault(); handleNavClick('#inicio') }}
            >
              <span
                className="text-2xl font-light tracking-widest transition-colors duration-300"
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  color: scrolled ? '#2C2416' : '#FAF8F3',
                }}
              >
                La Juana
              </span>
              <span
                className="text-xs font-medium uppercase tracking-[0.25em] transition-colors duration-300"
                style={{ color: scrolled ? '#C9A84C' : '#F5E6C8' }}
              >
                Meeting Point
              </span>
            </a>

            {/* Desktop links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-xs uppercase tracking-widest font-medium cursor-pointer transition-colors duration-200 hover:text-gold"
                  style={{ color: scrolled ? '#7A6E60' : 'rgba(250,248,243,0.85)' }}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={() => handleNavClick('#contacto')}
                className="cursor-pointer text-xs uppercase tracking-widest font-semibold px-5 py-2.5 border rounded-full transition-all duration-200 hover:bg-gold hover:border-gold hover:text-cream"
                style={{
                  borderColor: scrolled ? '#C9A84C' : 'rgba(250,248,243,0.6)',
                  color: scrolled ? '#C9A84C' : '#FAF8F3',
                }}
              >
                Consultar
              </button>
            </div>

            {/* Mobile burger */}
            <button
              className="lg:hidden cursor-pointer p-2 transition-colors duration-200"
              style={{ color: scrolled ? '#2C2416' : '#FAF8F3' }}
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-cream flex flex-col pt-24 px-8 pb-8 lg:hidden"
          >
            <nav className="flex flex-col gap-6 flex-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-3xl font-light text-warm-900 cursor-pointer hover:text-gold transition-colors duration-200"
                  style={{ fontFamily: '"Cormorant Garamond", serif' }}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
            <button
              onClick={() => handleNavClick('#contacto')}
              className="cursor-pointer text-sm uppercase tracking-widest font-semibold px-6 py-3 bg-gold text-cream rounded-full hover:bg-gold-dark transition-colors duration-200"
            >
              Consultar Disponibilidad
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
