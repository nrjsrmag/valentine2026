import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import YesPage from './components/YesPage'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/yes" element={<YesPage />} />
      </Routes>
    </Router>
  )
}

export default App
