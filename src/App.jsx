import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import QueroSerVoluntario from './pages/QueroSerVoluntario/QueroSerVoluntario';
import './GlobalStyles.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quero-ser-voluntario" element={<QueroSerVoluntario />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
