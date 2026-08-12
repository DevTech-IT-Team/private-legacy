import Header from '../component/header/header'
import Footer from '../component/footer/footer'

function TermsOfService() {
  return (
    <div className="page-shell">
      <Header />
      <main style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '80vh' }} className="container">
        <h1 style={{ marginBottom: '20px' }}>Terms and Conditions</h1>
        <p style={{ color: 'var(--text-color)', lineHeight: '1.6' }}>
          This is a placeholder for the Terms and Conditions. Update this page with your official terms content.
        </p>
      </main>
      <Footer />
    </div>
  )
}

export default TermsOfService
