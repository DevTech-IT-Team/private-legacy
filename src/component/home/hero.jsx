import { useEffect, useRef } from 'react'
import heroImg from '../../assets/hero_family.png'

const features = [
  {
    number: '01',
    title: 'Educational Courses',
    desc: 'Step-by-step private trust education crafted for real families — not lawyers.',
    accent: '#38d9f5',   /* bright cyan — visible on dark */
  },
  {
    number: '02',
    title: 'Coaching & Mentorship',
    desc: 'Personalized 1-on-1 guidance to define, protect, and build your family legacy.',
    accent: '#f5c842',   /* bright gold — visible on dark */
  },
  {
    number: '03',
    title: 'Downloadable Resources',
    desc: 'Workbooks, checklists & templates you can apply to your life right away.',
    accent: '#4ade80',   /* bright green — visible on dark */
  },
]

function Hero() {
  const leftRef = useRef(null)
  const rightRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (leftRef.current) leftRef.current.classList.add('visible')
      setTimeout(() => {
        if (rightRef.current) rightRef.current.classList.add('visible')
      }, 250)
    }, 80)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="hero" id="home" aria-label="Hero">
      <div className="hero-bg">
        <img src={heroImg} alt="Multigenerational family on their farm at golden hour" loading="eager" />
        <div className="hero-bg-overlay" />
        <div className="hero-bg-noise" />
      </div>

      <div className="hero-content">
        {/* ── LEFT COPY ── */}
        <div className="hero-left fade-up" ref={leftRef}>
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Private Trust Education &amp; Legacy Planning
          </div>

          <h1 className="hero-h1">
            Build a Legacy That<br />
            <em>Lasts for Generations</em>
          </h1>

          <p className="hero-sub">
            Protect what you&apos;ve worked hard to build. We educate families on private trusts — helping you preserve assets, create generational wealth, and secure the future for those you love.
          </p>

          <div className="hero-actions">
            <a
              className="btn btn-gold"
              href="#services"
              onClick={(e) => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              Explore Our Courses
            </a>
            <a
              className="btn btn-outline"
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              Book a Consultation
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-num">4</span>
              <span className="hero-stat-label">Core Services</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num">100%</span>
              <span className="hero-stat-label">Family Focused</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num">∞</span>
              <span className="hero-stat-label">Generational Impact</span>
            </div>
          </div>
        </div>

        {/* ── RIGHT PANEL ── */}
        <div className="hero-right fade-up" ref={rightRef}>
          <div className="hero-feature-panel">
            <p className="hero-panel-label">What We Offer</p>

            {features.map((f, i) => (
              <div className="hero-feature-row" key={i} style={{ '--accent': f.accent }}>
                <span className="hero-feature-num">{f.number}</span>
                <div className="hero-feature-divider" />
                <div className="hero-feature-text">
                  <strong>{f.title}</strong>
                  <span>{f.desc}</span>
                </div>
              </div>
            ))}

            <div className="hero-panel-cta">
              <a
                href="#about"
                className="hero-panel-link"
                onClick={(e) => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }) }}
              >
                Learn about our mission
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
