import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Homepage';
import Questao1 from '../pages/questao1/Questao1';
import Questao2 from '../pages/questao2/Questao2';
import Questao3 from '../pages/questao3/Questao3';

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/questao1" element={<Questao1 />} />
      <Route path="/questao2" element={<Questao2 />} />
      <Route path="/questao3" element={<Questao3 />} />
    </Routes>
  );
}
