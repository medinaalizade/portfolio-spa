import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import Routes and replace BrowserRouter with Router
import AboutPage from './AboutPage';
import WorkSamplesPage from './WorkSamplePage';
import ContactPage from './ContactPage';
import "./App.css"

function App() {
  const [activeLink, setActiveLink] = useState('');

  return (
    <Router>
      <div className='container'>
        <nav className='navbar'>
          <ul type="none" className='list'>
            <li>
              <Link to="/" 
                    className={activeLink === '/' ? 'nav-link active' : 'nav-link'}
                    onClick={() => setActiveLink('/')}>About</Link>
            </li>
            <li>
              <Link to="/work-samples" 
                    className={activeLink === '/work-samples' ? 'nav-link active' : 'nav-link'}
                    onClick={() => setActiveLink('/work-samples')}>Work Samples</Link>
            </li>
            <li>
              <Link to="/contact" 
                    className={activeLink === '/contact' ? 'nav-link active' : 'nav-link'}
                    onClick={() => setActiveLink('/contact')}>Contact Information</Link>
            </li>
          </ul>
        </nav>

        <Routes> {/* Wrap Routes around your Route components */}
          <Route path="/" element={<AboutPage />} />
          <Route path="/work-samples" element={<WorkSamplesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
