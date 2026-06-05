import { motion } from 'framer-motion'
import {
  useScrollAnimation,
  fadeLeftVariants,
  fadeRightVariants,
  staggerContainerVariants,
  fadeUpVariants,
} from '../hooks/useScrollAnimation'

const stats = [
  { value: '8+', label: 'Años de experiencia' },
  { value: '500+', label: 'Eventos realizados' },
  { value: '50+', label: 'Proveedores aliados' },
]

export default function About() {
  const { ref: textRef, animate: textAnimate } = useScrollAnimation({ threshold: 0.2 })
  const { ref: imgRef, animate: imgAnimate } = useScrollAnimation({ threshold: 0.2 })
  const { ref: statsRef, animate: statsAnimate } = useScrollAnimation({ threshold: 0.2 })

  return (
    <section className="bg-warm-100 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text column */}
          <motion.div
            ref={textRef}
            variants={fadeLeftVariants}
            initial="hidden"
            animate={textAnimate}
          >
            <p className="text-xs uppercase tracking-[0.35em] font-semibold text-gold mb-4">
              Nuestra Historia
            </p>
            <h2
              className="text-4xl md:text-5xl font-light text-warm-900 leading-tight mb-6"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              Donde cada detalle<br />
              <span className="font-semibold">cuenta</span>
            </h2>
            <p className="text-stone font-light leading-relaxed mb-5 text-base">
              La Juana Meeting Point nació del sueño de crear en Mendoza un espacio donde las celebraciones de vida se conviertan en recuerdos eternos. Desde nuestra apertura, hemos sido el escenario elegido para los momentos más significativos de cientos de familias y empresas.
            </p>
            <p className="text-stone font-light leading-relaxed mb-8 text-base">
              Rodeados por la belleza natural de los Andes y el espíritu mendocino, ofrecemos espacios versátiles con una atención personalizada que garantiza que cada evento sea único, íntimo y extraordinario.
            </p>
            <button
              onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="cursor-pointer inline-flex items-center gap-2 text-sm uppercase tracking-widest font-semibold text-gold hover:text-gold-dark transition-colors duration-200 border-b border-gold/40 hover:border-gold-dark pb-0.5"
            >
              Consultá disponibilidad
            </button>
          </motion.div>

          {/* Image column */}
          <motion.div
            ref={imgRef}
            variants={fadeRightVariants}
            initial="hidden"
            animate={imgAnimate}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&q=80"
                alt="Interior elegante del salón La Juana Meeting Point"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-900/30 to-transparent" />
            </div>
            {/* Decorative accent */}
            <div
              className="absolute -bottom-6 -left-6 w-40 h-40 rounded-2xl -z-10"
              style={{ backgroundColor: '#C9A84C', opacity: 0.15 }}
            />
            <div
              className="absolute -top-6 -right-6 w-24 h-24 rounded-full -z-10"
              style={{ backgroundColor: '#F5E6C8' }}
            />
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          ref={statsRef}
          variants={staggerContainerVariants(0.18)}
          initial="hidden"
          animate={statsAnimate}
          className="mt-20 grid grid-cols-3 gap-8 border-t border-warm-200 pt-12"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUpVariants} className="text-center">
              <p
                className="text-4xl md:text-5xl font-light text-warm-900 mb-2"
                style={{ fontFamily: '"Cormorant Garamond", serif' }}
              >
                {stat.value}
              </p>
              <p className="text-xs uppercase tracking-widest text-stone font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
