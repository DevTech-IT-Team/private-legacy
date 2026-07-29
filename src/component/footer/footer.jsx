import logo from '../../assets/logo.png'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Who We Serve', href: '#audience' },
  { label: 'Why Us', href: '#benefits' },
  { label: 'Contact', href: '#contact' },
]

const quickLinks = [
  { label: 'Educational Courses', href: '#services' },
  { label: 'Membership Community', href: '#services' },
  { label: 'Downloadable Resources', href: '#services' },
  { label: 'Coaching & Mentorship', href: '#services' },
]

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <img className="brand-logo" src={logo} alt="Private Legacy logo" />
            <strong>Private Legacy</strong>
            <p>
              Educating families about private trusts to protect assets and facilitate the trust creation process. Mentoring to develop a vision for their legacy as a family.
            </p>
            <div className="footer-social">
              <a className="social-btn" href="#" aria-label="Facebook" title="Facebook (coming soon)">f</a>
              <a className="social-btn" href="#" aria-label="Instagram" title="Instagram (coming soon)">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a className="social-btn" href="#" aria-label="YouTube" title="YouTube (coming soon)">▶</a>
              <a className="social-btn" href="#" aria-label="LinkedIn" title="LinkedIn (coming soon)">in</a>
            </div>
          </div>

          {/* Nav */}
          <div className="footer-col">
            <h5>Navigation</h5>
            <ul className="footer-links">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h5>Our Services</h5>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h5>Contact Us</h5>
            <div className="footer-contact-item">
              <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </span>
              <span>
                <a href="mailto:legacytrustservices@proton.me">legacytrustservices@proton.me</a>
              </span>
            </div>
            <div className="footer-contact-item" style={{ alignItems: 'flex-start' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', marginTop: '3px' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', fontSize: '0.88rem' }}>
                <span>Local: <a href="tel:2068444745" style={{ color: 'inherit' }}>(206) 844-4745</a></span>
                <span>Toll Free: <a href="tel:8882193955" style={{ color: 'inherit' }}>(888) 219-3955</a></span>
                <span>Fax: (360) 360-0822</span>
              </div>
            </div>
            <div className="footer-contact-item">
              <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </span>
              <span>
                600 1st Ave. Ste: 102-2577<br />
                Seattle, Washington 98104
              </span>
            </div>
            <div style={{ marginTop: '1.4rem' }}>
              <a
                className="btn btn-gold"
                href="mailto:legacytrustservices@proton.me"
                style={{ padding: '0.7rem 1.5rem', fontSize: '0.85rem' }}
              >
                Start Your Journey →
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Private Legacy / Legacy Trust Services. All rights reserved.</p>
          <p className="footer-disclaimer">
            For educational purposes only. Not legal advice.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
