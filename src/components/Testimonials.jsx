import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { testimonials } from '../data/testimonials'
import { useScrollAnimation, fadeUpVariants } from '../hooks/useScrollAnimation'

const variants = {
  enter: (dir) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
  exit: (dir) => ({ x: dir > 0 ? -80 : 80, opacity: 0, transition: { duration: 0.3 } }),
}

export default function Testimonials() {
  const [[page, dir], setPage] = useState([0, 0])
  const [paused, setPaused] = useState(false)
  const { ref: titleRef, animate: titleAnimate } = useScrollAnimation({ threshold: 0.3 })

  const paginate = useCallback(
    (newDir) => setPage(([p]) => [(p + newDir + testimonials.length) % testimonials.length, newDir]),
    []
  )

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => paginate(1), 5000)
    return () => clearInterval(id)
  }, [paused, paginate])

  const t = testimonials[page]

  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={titleRef}
          variants={fadeUpVariants}
          initial="hidden"
          animate={titleAnimate}
          className="text-center mb-14"
        >
          <p className="text-xs uppercase tracking-[0.35em] font-semibold text-gold mb-4">
            Testimonios
          </p>
          <h2
            className="text-4xl md:text-5xl font-light text-warm-900"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Lo que dicen{' '}
            <span className="font-semibold">nuestros clientes</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={page}
                custom={dir}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="bg-warm-100 rounded-2xl p-8 md:p-12 text-center border border-warm-200"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} fill="#C9A84C" stroke="none" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote
                  className="text-xl md:text-2xl font-light text-warm-900 leading-relaxed mb-8 italic"
                  style={{ fontFamily: '"Cormorant Garamond", serif' }}
                >
                  "{t.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center">
                    <span className="text-cream text-sm font-semibold">{t.initials}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-warm-900 text-sm">{t.name}</p>
                    <p className="text-xs uppercase tracking-widest text-stone">{t.event}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <button
            onClick={() => paginate(-1)}
            className="cursor-pointer absolute top-1/2 -translate-y-1/2 -left-5 md:-left-8 w-10 h-10 rounded-full bg-cream border border-warm-200 flex items-center justify-center text-stone hover:text-gold hover:border-gold transition-colors duration-200 shadow-sm"
            aria-label="Testimonio anterior"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => paginate(1)}
            className="cursor-pointer absolute top-1/2 -translate-y-1/2 -right-5 md:-right-8 w-10 h-10 rounded-full bg-cream border border-warm-200 flex items-center justify-center text-stone hover:text-gold hover:border-gold transition-colors duration-200 shadow-sm"
            aria-label="Testimonio siguiente"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setPage([i, i > page ? 1 : -1])}
              className={`cursor-pointer w-2 h-2 rounded-full transition-all duration-200 ${
                i === page ? 'bg-gold w-6' : 'bg-warm-200 hover:bg-stone'
              }`}
              aria-label={`Ir al testimonio ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
