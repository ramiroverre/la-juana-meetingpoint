import { MessageCircle, Heart } from 'lucide-react'

function InstagramIcon({ size = 17 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon({ size = 17 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Espacios', href: '#espacios' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
]

const socials = [
  { Icon: InstagramIcon, label: 'Instagram', href: '#' },
  { Icon: MessageCircle, label: 'WhatsApp', href: '#' },
  { Icon: FacebookIcon, label: 'Facebook', href: '#' },
]

export default function Footer() {
  const handleNav = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer style={{ backgroundColor: '#2C2416' }} className="pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <p
                className="text-3xl font-light text-cream tracking-widest"
                style={{ fontFamily: '"Cormorant Garamond", serif' }}
              >
                La Juana
              </p>
              <p className="text-xs uppercase tracking-[0.25em] font-medium text-gold">
                Meeting Point
              </p>
            </div>
            <p className="text-cream/50 text-sm font-light leading-relaxed max-w-xs">
              El espacio donde los momentos más importantes de tu vida se convierten en recuerdos eternos. Mendoza, Argentina.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs uppercase tracking-widest font-semibold text-gold mb-5">
              Navegación
            </p>
            <ul className="space-y-2.5">
              {links.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => handleNav(l.href)}
                    className="cursor-pointer text-sm text-cream/60 hover:text-cream transition-colors duration-200 font-light"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + contact */}
          <div>
            <p className="text-xs uppercase tracking-widest font-semibold text-gold mb-5">
              Conectate
            </p>
            <div className="flex gap-3 mb-6">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="cursor-pointer w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-cream/60 hover:text-cream hover:border-gold transition-colors duration-200"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
            <p className="text-cream/40 text-xs font-light leading-relaxed">
              Av. San Martín 1234, Godoy Cruz<br />
              Mendoza, Argentina<br />
              +54 261 000-0000
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-cream/30 text-xs font-light">
          <p>© {new Date().getFullYear()} La Juana Meeting Point. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1.5">
            Hecho con <Heart size={11} fill="currentColor" /> en Mendoza, Argentina
          </p>
        </div>
      </div>
    </footer>
  )
}
