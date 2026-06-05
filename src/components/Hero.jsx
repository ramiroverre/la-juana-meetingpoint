import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.4 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '35%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={ref} className="relative h-screen min-h-[640px] overflow-hidden flex items-center justify-center">
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          y: bgY,
          backgroundImage:
            'url(https://images.unsplash.com/photo-1519741497674-611481863552?w=1800&q=85)',
        }}
      />
      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-warm-900/55 via-warm-900/40 to-warm-900/65" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.p
            variants={itemVariants}
            className="text-xs uppercase tracking-[0.4em] font-medium mb-6"
            style={{ color: '#F5E6C8' }}
          >
            Mendoza, Argentina
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] mb-6 text-cream"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Un espacio para tus<br />
            <em className="not-italic font-semibold" style={{ color: '#F5E6C8' }}>
              momentos más importantes
            </em>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg font-light mb-10 max-w-xl mx-auto leading-relaxed"
            style={{ color: 'rgba(250,248,243,0.82)' }}
          >
            Salón de eventos con carácter propio. Espacios elegantes, equipo dedicado y
            cada detalle pensado para que tu celebración sea inolvidable.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.querySelector('#espacios')?.scrollIntoView({ behavior: 'smooth' })}
              className="cursor-pointer px-8 py-3.5 bg-gold text-cream text-sm uppercase tracking-widest font-semibold rounded-full hover:bg-gold-dark transition-colors duration-200"
            >
              Conocer Espacios
            </button>
            <button
              onClick={() => document.querySelector('#galeria')?.scrollIntoView({ behavior: 'smooth' })}
              className="cursor-pointer px-8 py-3.5 border border-cream/60 text-cream text-sm uppercase tracking-widest font-medium rounded-full hover:bg-cream/10 transition-colors duration-200"
            >
              Ver Galería
            </button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => document.querySelector('#nosotros')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer text-cream/60 hover:text-cream transition-colors duration-200"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Siguiente sección"
      >
        <ChevronDown size={28} />
      </motion.button>
    </section>
  )
}
