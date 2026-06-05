import { motion } from 'framer-motion'
import { Users, ChevronRight } from 'lucide-react'
import { services } from '../data/services'
import {
  useScrollAnimation,
  fadeUpVariants,
  staggerContainerVariants,
} from '../hooks/useScrollAnimation'

export default function Services() {
  const { ref: titleRef, animate: titleAnimate } = useScrollAnimation({ threshold: 0.3 })
  const { ref: gridRef, animate: gridAnimate } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={titleRef}
          variants={fadeUpVariants}
          initial="hidden"
          animate={titleAnimate}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.35em] font-semibold text-gold mb-4">
            Nuestros Espacios
          </p>
          <h2
            className="text-4xl md:text-5xl font-light text-warm-900 leading-tight"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Cada evento merece<br />
            <span className="font-semibold">el espacio perfecto</span>
          </h2>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          ref={gridRef}
          variants={staggerContainerVariants(0.13)}
          initial="hidden"
          animate={gridAnimate}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={fadeUpVariants}
              whileHover={{ y: -8, boxShadow: '0 24px 48px rgba(44,36,22,0.13)' }}
              transition={{ duration: 0.25 }}
              className="group bg-warm-100 rounded-2xl overflow-hidden cursor-pointer border border-warm-200"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={`Espacio ${service.name} en La Juana Meeting Point`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-warm-900/50 to-transparent" />
                {/* Tag */}
                <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest font-semibold bg-gold text-cream px-3 py-1 rounded-full">
                  {service.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3
                  className="text-xl font-semibold text-warm-900 mb-1"
                  style={{ fontFamily: '"Cormorant Garamond", serif' }}
                >
                  {service.name}
                </h3>
                <div className="flex items-center gap-1.5 text-stone mb-3">
                  <Users size={13} />
                  <span className="text-xs font-medium">Hasta {service.capacity} personas</span>
                </div>
                <p className="text-stone text-sm font-light leading-relaxed mb-4 line-clamp-3">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-1 mb-4">
                  {service.features.slice(0, 3).map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-stone">
                      <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
                  className="cursor-pointer flex items-center gap-1 text-xs uppercase tracking-widest font-semibold text-gold hover:text-gold-dark transition-colors duration-200 group-hover:gap-2"
                >
                  Consultar <ChevronRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
