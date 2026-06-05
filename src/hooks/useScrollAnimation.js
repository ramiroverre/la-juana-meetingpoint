import { useInView } from 'react-intersection-observer'

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
}

export const fadeLeftVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

export const fadeRightVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

export const staggerContainerVariants = (stagger = 0.12) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: 0.1 },
  },
})

export function useScrollAnimation(options = {}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
    ...options,
  })
  return { ref, animate: inView ? 'visible' : 'hidden' }
}
