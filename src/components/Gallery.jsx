import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'
import { galleryCategories, galleryImages } from '../data/gallery'
import {
  useScrollAnimation,
  fadeUpVariants,
} from '../hooks/useScrollAnimation'

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [lightbox, setLightbox] = useState(null)
  const { ref: titleRef, animate: titleAnimate } = useScrollAnimation({ threshold: 0.3 })

  const filtered =
    activeCategory === 'Todos'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory)

  return (
    <section className="bg-warm-100 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={titleRef}
          variants={fadeUpVariants}
          initial="hidden"
          animate={titleAnimate}
          className="text-center mb-12"
        >
          <p className="text-xs uppercase tracking-[0.35em] font-semibold text-gold mb-4">
            Galería
          </p>
          <h2
            className="text-4xl md:text-5xl font-light text-warm-900"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Momentos que{' '}
            <span className="font-semibold">perduran</span>
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`cursor-pointer text-xs uppercase tracking-widest font-semibold px-5 py-2 rounded-full border transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-gold text-cream border-gold'
                  : 'border-warm-200 text-stone hover:border-gold hover:text-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((img) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                className="group relative break-inside-avoid rounded-xl overflow-hidden cursor-pointer"
                onClick={() => setLightbox(img)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-warm-900/0 group-hover:bg-warm-900/30 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn
                    size={28}
                    className="text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-warm-900/92 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox.src.replace('w=800', 'w=1200')}
                alt={lightbox.alt}
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setLightbox(null)}
                className="cursor-pointer absolute top-4 right-4 bg-warm-900/70 text-cream p-2 rounded-full hover:bg-warm-900 transition-colors duration-200"
                aria-label="Cerrar imagen"
              >
                <X size={20} />
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-warm-900/80 to-transparent p-4">
                <p className="text-cream/80 text-sm font-light">{lightbox.alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
