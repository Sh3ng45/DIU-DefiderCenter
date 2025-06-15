import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import TalleresPage from './pages/TalleresPage';
import GimnasioPage from './pages/GimnasioPage';
import SeleccionesPage from './pages/SeleccionesPage';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/talleres" element={<TalleresPage />} />
            <Route path="/gimnasio" element={<GimnasioPage />} />
            <Route path="/selecciones" element={<SeleccionesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;