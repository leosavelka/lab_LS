import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './layout/Nav';
import Services from './pages/Services';
import Products from './pages/Products';
import AboutUs from './pages/AboutUs';
import Portfolio from './pages/Portfolio';
import FAQ from './pages/FAQ';
import Contacts from './pages/Contacts';
import Calculation from './pages/Calculation';
import Makerequest from './pages/Makerequest';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Services />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/make-request" element={<Makerequest />} />
          <Route path="/calculation" element={<Calculation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;