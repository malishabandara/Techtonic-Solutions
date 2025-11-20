import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import MyTechtonic from './pages/MyTechtonic';
import Services from './pages/Services';
import TechtonicAcademy from './pages/TechtonicAcademy';
import TechtonicPro from './pages/TechtonicPro';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/my-techtonic" element={<MyTechtonic />} />
          <Route path="/techtonic-pro" element={<TechtonicPro />} />
          <Route path="/techtonic-academy" element={<TechtonicAcademy />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
