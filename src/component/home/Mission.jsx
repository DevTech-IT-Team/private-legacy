import { useEffect, useRef } from 'react'
import coachingImg from '../../assets/coaching.png'

/* ── Premium inline SVG icons — no emoji ── */
const IconGradCap = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5"/>
  </svg>
)

const IconShield = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <polyline points="9 12 11 14 15 10"/>
  </svg>
)

const IconTree = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22V12"/>
    <path d="M12 12C12 12 7 10 7 6a5 5 0 0 1 10 0c0 4-5 6-5 6z"/>
    <path d="M12 16c0 0-4-1.5-4-4"/>
    <path d="M12 16c0 0 4-1.5 4-4"/>
    <line x1="8" y1="22" x2="16" y2="22"/>
  </svg>
)

const values = [
  {
    Icon: IconGradCap,
    color: '#333399',
    bg: 'rgba(51,51,153,0.08)',
    border: 'rgba(51,51,153,0.18)',
    glow: 'rgba(51,51,153,0.15)',
    title: 'Education That Empowers',
    text: 'We simplify complex trust concepts into clear, actionable education that helps everyday families — not just financial professionals — protect their future.',
  },
  {
    Icon: IconShield,
    color: '#006600',
    bg: 'rgba(0,102,0,0.07)',
    border: 'rgba(0,102,0,0.18)',
    glow: 'rgba(0,102,0,0.12)',
    title: 'Protection Before Action',
    text: 'Unlike traditional legal services, we focus on education and mentorship first — giving you the knowledge you need before you take the next step.',
  },
  {
    Icon: IconTree,
    color: '#CC9933',
    bg: 'rgba(204,153,51,0.10)',
    border: 'rgba(204,153,51,0.22)',
    glow: 'rgba(204,153,51,0.15)',
    title: 'A Legacy Vision',
    text: 'Passing wealth to the next generation through intentional planning, preparation, and a clear family legacy roadmap built around your unique goals.',
  },
]

function useReveal(...refs) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.12 }
    )
    refs.forEach((r) => r.current && observer.observe(r.current))
    return () => observer.disconnect()
  }, [])  // eslint-disable-line react-hooks/exhaustive-deps
}

function Mission() {
  const imgRef   = useRef(null)
  const textRef  = useRef(null)
  const cardsRef = useRef(null)
  useReveal(imgRef, textRef, cardsRef)

  return (
    <section className="mission-section" id="about">
      <div className="container">
        <div className="mission-grid">

          {/* ── LEFT IMAGE ── */}
          <div className="mission-image-wrap fade-up" ref={imgRef}>
            <div className="mission-img-frame">
              <img src={coachingImg} alt="Family trust coaching session" loading="lazy" />
              <div className="mission-img-shimmer" />
            </div>

            <div className="mission-badge-float float-anim">
              <span className="mission-badge-number">1st</span>
              <span className="mission-badge-text">Generation<br />Wealth Builder<br />Support</span>
            </div>

            {/* Decorative orb */}
            <div className="mission-orb mission-orb-1" />
            <div className="mission-orb mission-orb-2" />
          </div>

          {/* ── RIGHT CONTENT ── */}
          <div className="mission-content">
            <div className="fade-up" ref={textRef}>
              <p className="eyebrow">Why Legacy Trust Services</p>
              <h2 className="section-title">
                Your Family&apos;s Wealth<br />Deserves a Plan That Lasts
              </h2>
              <p className="section-subtitle" style={{ marginBottom: '2.2rem' }}>
                Building wealth is only the beginning. Protecting it and passing it on takes education, preparation, and a trusted partner. That&apos;s where we come in.
              </p>
            </div>

            <div className="mission-values fade-up delay-2" ref={cardsRef}>
              {values.map((v, i) => (
                <div
                  className="mission-value-card"
                  key={i}
                  style={{
                    '--v-color': v.color,
                    '--v-bg': v.bg,
                    '--v-border': v.border,
                    '--v-glow': v.glow,
                  }}
                >
                  <div className="mvc-icon-wrap">
                    <v.Icon />
                  </div>
                  <div className="mvc-body">
                    <h4>{v.title}</h4>
                    <p>{v.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Mission
