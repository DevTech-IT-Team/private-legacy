import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import PrivacyPolicy from './pages/privacy'
import TermsOfService from './pages/terms'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsOfService />} />
    </Routes>
  )
}

export default App
