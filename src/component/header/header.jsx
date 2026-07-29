import { useState, useEffect } from 'react'
import logo from '../../assets/logo.png'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Who We Serve', href: '#audience' },
  { label: 'Why Us', href: '#benefits' },
  { label: 'Contact', href: '#contact' },
]

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`topbar${scrolled ? ' scrolled' : ''}`}>
      <a className="brand" href="#home" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
        <img className="brand-logo" src={logo} alt="Private Legacy logo" />
        <div className="brand-text">
          <strong>Private Legacy</strong>
          <span>Passing wealth to the next generation</span>
        </div>
      </a>

      <nav aria-label="Primary navigation">
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} onClick={(e) => { e.preventDefault(); handleNav(link.href) }}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="nav-cta">
        <a className="btn btn-primary" href="#contact" onClick={(e) => { e.preventDefault(); handleNav('#contact') }}>
          Get Started →
        </a>
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu open">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={(e) => { e.preventDefault(); handleNav(link.href) }}>
              {link.label}
            </a>
          ))}
          <a className="btn btn-primary" style={{ marginTop: '0.5rem' }} href="#contact" onClick={(e) => { e.preventDefault(); handleNav('#contact') }}>
            Get Started →
          </a>
        </div>
      )}
    </header>
  )
}

export default Header
