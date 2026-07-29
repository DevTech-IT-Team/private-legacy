import { useEffect, useRef, useState } from 'react'

function Contact() {
  const leftRef = useRef(null)
  const rightRef = useRef(null)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    if (leftRef.current) observer.observe(leftRef.current)
    if (rightRef.current) observer.observe(rightRef.current)
    return () => observer.disconnect()
  }, [])

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Compose mailto link
    const subject = encodeURIComponent(`Legacy Trust Inquiry – ${formData.service || 'General'}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nInterested In: ${formData.service}\n\nMessage:\n${formData.message}`
    )
    window.location.href = `mailto:legacytrustservices@proton.me?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p className="eyebrow">Get In Touch</p>
          <h2 className="section-title">Ready to Start Building Your Legacy?</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Your family's future deserves thoughtful planning. Begin your educational journey today and discover how private trusts can protect what matters most.
          </p>
        </div>

        <div className="contact-grid">
          {/* Info Card */}
          <div className="contact-info-card fade-up" ref={leftRef}>
            <h3>Let&apos;s Connect</h3>

            <div className="contact-details">
              <div className="contact-detail">
                <div className="contact-detail-icon icon-cerulean">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div className="contact-detail-text">
                  <strong>Email Us</strong>
                  <a href="mailto:legacytrustservices@proton.me">legacytrustservices@proton.me</a>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon icon-green">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div className="contact-detail-text">
                  <strong>Phone & Fax</strong>
                  <p style={{ margin: '0.25rem 0 0' }}>
                    <strong>Local:</strong> <a href="tel:2068444745" style={{ color: 'inherit', textDecoration: 'underline' }}>(206) 844-4745</a><br />
                    <strong>Toll Free:</strong> <a href="tel:8882193955" style={{ color: 'inherit', textDecoration: 'underline' }}>(888) 219-3955</a><br />
                    <strong>Fax:</strong> (360) 360-0822
                  </p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon icon-gold">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div className="contact-detail-text">
                  <strong>Office Address</strong>
                  <p>600 1st Ave. Ste: 102-2577<br />Seattle, Washington 98104</p>
                </div>
              </div>
            </div>

            <div style={{ padding: '1.5rem', borderRadius: '1rem', background: 'linear-gradient(135deg, rgba(51,51,153,0.06), rgba(0,153,204,0.06))', border: '1px solid rgba(51,51,153,0.1)' }}>
              <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: '1rem', color: 'var(--blue-deep)', lineHeight: '1.6', marginBottom: '0.5rem' }}>
                &quot;Every family deserves to know how to protect what they&apos;ve built. We&apos;re here to make that education accessible to everyone.&quot;
              </p>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                — Legacy Trust Services
              </span>
            </div>

            <div style={{ marginTop: '1.5rem', padding: '1rem 1.2rem', borderRadius: '0.8rem', background: 'rgba(204,153,51,0.08)', border: '1px solid rgba(204,153,51,0.2)' }}>
              <p style={{ fontSize: '0.82rem', color: '#7a6020', fontWeight: 500, lineHeight: 1.6 }}>
                <strong>📌 Educational Disclaimer:</strong> Legacy Trust Services provides educational content and coaching only. We do not provide legal advice. Please consult a licensed attorney for legal matters.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-card fade-up delay-3" ref={rightRef}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>✅</div>
                <h3 style={{ color: 'var(--white)', marginBottom: '0.5rem' }}>Message Sent!</h3>
                <p>Your email client should have opened. We&apos;ll get back to you soon.</p>
                <button
                  className="btn btn-gold"
                  style={{ marginTop: '1.5rem' }}
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h3>Start Your Journey</h3>
                <p>Tell us about your family&apos;s goals and we&apos;ll help you find the right path forward.</p>

                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(555) 000-0000"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="service">I&apos;m Interested In</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                      >
                        <option value="">Select a service</option>
                        <option value="Educational Courses">Educational Courses</option>
                        <option value="Membership Community">Membership Community</option>
                        <option value="Downloadable Resources">Downloadable Resources</option>
                        <option value="Coaching & Mentorship">Coaching &amp; Mentorship</option>
                        <option value="General Information">General Information</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Tell Us About Your Goals</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Share a bit about your family's situation and what you're hoping to accomplish..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <button className="btn btn-gold" type="submit" style={{ width: '100%', marginTop: '0.5rem', fontSize: '1rem' }}>
                    Send My Message →
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
