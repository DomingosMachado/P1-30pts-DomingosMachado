import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Homepage'
import Questao1 from './pages/questao1/Questao1'
import Questao2 from './pages/questao2/Questao2'
import Questao3 from './pages/questao3/Questao3'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Questao1" element={<Questao1 />} />
        <Route path="/Questao2" element={<Questao2 />} />
        <Route path="/Questao3" element={<Questao3 />} />
      </Routes>
    </Router>
  )
}

export default App
