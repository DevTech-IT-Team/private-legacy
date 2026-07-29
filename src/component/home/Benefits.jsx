import { useEffect, useRef } from 'react'
import farmlandImg from '../../assets/farmland.png'

const benefits = [
  'Clear, easy-to-understand educational content for real families',
  'Designed for everyday people — not just financial professionals',
  'Step-by-step learning approach that builds confidence',
  'Practical resources you can apply to your life immediately',
  'Personalized coaching and mentorship tailored to your goals',
  'Focused on preserving wealth and values across generations',
]

function Benefits() {
  const listRef = useRef(null)
  const visualRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.12 }
    )
    if (listRef.current) observer.observe(listRef.current)
    if (visualRef.current) observer.observe(visualRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="benefits-section" id="benefits">
      <div className="container">
        <div className="benefits-grid">
          <div className="fade-up" ref={listRef}>
            <p className="eyebrow">Why Families Choose Us</p>
            <h2 className="section-title">
              Education Designed for<br />Real Families, Real Futures
            </h2>
            <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
              We meet you where you are. No legal jargon, no intimidating process — just clear, empowering education built around your family&apos;s goals.
            </p>

            <div className="benefits-list">
              {benefits.map((item, i) => (
                <div className="benefit-item" key={i}>
                  <div className="benefit-check">
                    <svg viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '2rem' }}>
              <a
                className="btn btn-primary"
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              >
                Start Your Legacy Journey →
              </a>
            </div>
          </div>

          <div className="benefits-visual fade-up delay-3" ref={visualRef}>
            <img src={farmlandImg} alt="Farmland and family land worth protecting" loading="lazy" />
            <div className="benefits-float-card float-anim-2">
              <p>&quot;The best time to protect your family&apos;s wealth is before you need to.&quot;</p>
              <span>Legacy Trust Services</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits
