import Header from '../component/header/header'
import Footer from '../component/footer/footer'

function PrivacyPolicy() {
  return (
    <div className="page-shell">
      <Header />
      <main style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '80vh' }} className="container">
        <h1 style={{ marginBottom: '20px' }}>Privacy Policy</h1>
        <p style={{ color: 'var(--text-color)', lineHeight: '1.6' }}>
          This is a placeholder for the Privacy Policy. Update this page with your official privacy policy content.
        </p>
      </main>
      <Footer />
    </div>
  )
}

export default PrivacyPolicy
