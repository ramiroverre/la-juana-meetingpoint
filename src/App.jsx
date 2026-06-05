import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="inicio">
          <Hero />
        </section>
        <section id="nosotros">
          <About />
        </section>
        <section id="espacios">
          <Services />
        </section>
        <section id="galeria">
          <Gallery />
        </section>
        <section id="testimonios">
          <Testimonials />
        </section>
        <section id="contacto">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  )
}
