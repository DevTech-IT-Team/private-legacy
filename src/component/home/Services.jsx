import { useEffect, useRef } from 'react'

const IconGradCap = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5"/>
  </svg>
)

const IconUsers = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
)

const IconFileText = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
  </svg>
)

const IconHandshake = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
    <path d="m7 21 1.6-1.6c.4-.4.4-1 0-1.4l-2.2-2.2c-.4-.4-1-.4-1.4 0L2 17" />
    <path d="M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-2.1 2.1" />
    <path d="M13 3 7 9" />
    <path d="M21 11.5a2.5 2.5 0 0 0-3.5-3.5l-3.3 3.3" />
  </svg>
)

const services = [
  {
    Icon: IconGradCap,
    iconBg: 'icon-blue',
    title: 'Educational Courses',
    description:
      'Comprehensive online courses that explain private trusts, wealth preservation, estate planning fundamentals, and legacy-building strategies — in plain language, designed for real families.',
    tag: 'Self-Paced Learning',
  },
  {
    Icon: IconUsers,
    iconBg: 'icon-cerulean',
    title: 'Membership Community',
    description:
      'Become part of a supportive learning community with exclusive educational content, live webinars, peer discussion, and ongoing guidance from our team.',
    tag: 'Ongoing Access',
  },
  {
    Icon: IconFileText,
    iconBg: 'icon-green',
    title: 'Downloadable Resources',
    description:
      "Access practical workbooks, checklists, templates, guides, and planning materials to help you organize your family's future — ready to use right away.",
    tag: 'Instant Access',
  },
  {
    Icon: IconHandshake,
    iconBg: 'icon-gold',
    title: 'Coaching & Mentorship',
    description:
      "Receive personalized educational coaching to understand trust concepts, define your family's goals, and create a clear roadmap for your legacy with expert guidance.",
    tag: '1-on-1 Support',
  },
]

function Services() {
  const headerRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.12 }
    )

    if (headerRef.current) observer.observe(headerRef.current)
    cardsRef.current.forEach((c) => c && observer.observe(c))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="services-section" id="services">
      <div className="services-bg-pattern" aria-hidden="true" />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="services-header fade-up" ref={headerRef}>
          <p className="eyebrow">Our Services</p>
          <h2 className="section-title">
            Everything Your Family Needs to<br />
            Build a Lasting Legacy
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            From foundational trust education to personalized coaching — we provide practical tools and support for every step of your legacy journey.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, i) => {
            const IconComponent = service.Icon
            return (
              <article
                className="service-card fade-up"
                key={service.title}
                ref={(el) => (cardsRef.current[i] = el)}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className={`service-card-icon-wrap ${service.iconBg}`}>
                  <IconComponent />
                </div>
                <span className="badge badge-blue" style={{ marginBottom: '0.8rem' }}>
                  {service.tag}
                </span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a className="service-card-link" href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
                  Learn More
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services

