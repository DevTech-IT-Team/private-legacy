import Header from '../component/header/header'
import Hero from '../component/home/hero'
import Marquee from '../component/home/Marquee'
import Mission from '../component/home/Mission'
import Services from '../component/home/Services'
import Audience from '../component/home/Audience'
import Benefits from '../component/home/Benefits'
import Contact from '../component/home/Contact'
import Footer from '../component/footer/footer'

function Home() {
  return (
    <div className="page-shell">
      <Header />

      <main>
        <Hero />
        <Marquee />
        <Mission />
        <Services />
        <Audience />

        {/* Quote Break */}
        <section className="quote-section">
          <div className="container">
            <blockquote>
              The wealth you build today is the foundation your children will stand on tomorrow. Give them a legacy worth standing on.
            </blockquote>
            <p className="quote-author">— Legacy Trust Services</p>
          </div>
        </section>

        <Benefits />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default Home
