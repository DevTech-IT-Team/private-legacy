import { useEffect, useRef } from 'react'

const IconTractor = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 17a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
    <path d="M14 16a4 4 0 1 0 8 0 4 4 0 1 0-8 0" />
    <path d="M7 17l1-6h6l2 3h3v4" />
    <path d="M11 11V6h4l2 5" />
    <path d="M5 14h2" />
    <circle cx="18" cy="16" r="1.2" fill="currentColor" opacity="0.5" />
    <circle cx="6" cy="17" r="1" fill="currentColor" opacity="0.5" />
  </svg>
)

const IconWheat = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v20" />
    <path d="M12 4c-2.5 1.5-4 4-4 7 0 2.5 1.5 4.5 4 5" />
    <path d="M12 4c2.5 1.5 4 4 4 7 0 2.5-1.5 4.5-4 5" />
    <path d="M12 8c-2.5 1.5-4 3.5-4 6" />
    <path d="M12 8c2.5 1.5 4 3.5 4 6" />
    <path d="M12 12c-2.5 1.5-3.5 3-3.5 5" />
    <path d="M12 12c2.5 1.5 3.5 3 3.5 5" />
  </svg>
)

const IconBriefcase = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="3" ry="3" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <path d="M12 12v3" />
    <path d="M9 13.5h6" />
  </svg>
)

const IconHome = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <path d="M9 22V12h6v10" />
    <path d="M12 7l-2.5 1.5L12 10l2.5-1.5z" />
  </svg>
)

const IconFamily = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="3.5" />
    <path d="M22 21v-1.5a3.5 3.5 0 0 0-3-3.45" />
    <path d="M16 3.2a3.5 3.5 0 0 1 0 6.6" />
  </svg>
)

const IconSprout = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22V10" />
    <path d="M12 10C12 5 7.5 3 7.5 3S6 7.5 12 10z" />
    <path d="M12 10c0-5 4.5-7 4.5-7s1.5 4.5-4.5 7z" />
    <path d="M5 22h10" />
  </svg>
)

const audience = [
  {
    Icon: IconTractor,
    accentColor: '#F59E0B',
    accentBg: 'rgba(245, 158, 11, 0.15)',
    accentBorder: 'rgba(245, 158, 11, 0.35)',
    glow: 'rgba(245, 158, 11, 0.3)',
    title: 'Blue Collar Workers Who Own Land',
    desc: "Protect the land you've earned with the right trust structure for your family.",
  },
  {
    Icon: IconWheat,
    accentColor: '#10B981',
    accentBg: 'rgba(16, 185, 129, 0.15)',
    accentBorder: 'rgba(16, 185, 129, 0.35)',
    glow: 'rgba(16, 185, 129, 0.3)',
    title: 'Farmers & Ranch Families',
    desc: 'Keep your farm in the family for generations with proper legacy planning.',
  },
  {
    Icon: IconBriefcase,
    accentColor: '#3B82F6',
    accentBg: 'rgba(59, 130, 246, 0.15)',
    accentBorder: 'rgba(59, 130, 246, 0.35)',
    glow: 'rgba(59, 130, 246, 0.3)',
    title: 'First Generation Entrepreneurs',
    desc: "Preserve the business you built from scratch for your children's future.",
  },
  {
    Icon: IconHome,
    accentColor: '#EAB308',
    accentBg: 'rgba(234, 179, 8, 0.15)',
    accentBorder: 'rgba(234, 179, 8, 0.35)',
    glow: 'rgba(234, 179, 8, 0.3)',
    title: 'Homeschooling Families',
    desc: 'Families building intentional futures — education extends to wealth too.',
  },
  {
    Icon: IconFamily,
    accentColor: '#EC4899',
    accentBg: 'rgba(236, 72, 153, 0.15)',
    accentBorder: 'rgba(236, 72, 153, 0.35)',
    glow: 'rgba(236, 72, 153, 0.3)',
    title: 'Wealth-Conscious Parents',
    desc: 'Anyone who wants to pass wealth, values, and vision to their children.',
  },
  {
    Icon: IconSprout,
    accentColor: '#14B8A6',
    accentBg: 'rgba(20, 184, 166, 0.15)',
    accentBorder: 'rgba(20, 184, 166, 0.35)',
    glow: 'rgba(20, 184, 166, 0.3)',
    title: 'Legacy Builders',
    desc: "Those who understand that wealth is about more than money — it's about impact.",
  },
]

function Audience() {
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
    <section className="audience-section" id="audience">
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="audience-header fade-up" ref={headerRef}>
          <p className="eyebrow">Who We Serve</p>
          <h2 className="section-title">Built for Hardworking Families<br />Who Want to Leave a Legacy</h2>
          <p className="section-subtitle">
            You don't have to be a millionaire to need a trust. If you have assets, land, a business, or children you love — you have a legacy worth protecting.
          </p>
        </div>

        <div className="audience-grid">
          {audience.map((item, i) => {
            const IconComp = item.Icon
            return (
              <div
                className="audience-card fade-up"
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                style={{
                  transitionDelay: `${i * 0.08}s`,
                  '--accent-color': item.accentColor,
                  '--accent-bg': item.accentBg,
                  '--accent-border': item.accentBorder,
                  '--accent-glow': item.glow,
                }}
              >
                <div className="audience-icon-badge">
                  <div className="audience-icon-glow"></div>
                  <IconComp />
                </div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Audience

