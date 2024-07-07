import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import ServiceDetail from './pages/ServiceDetail';
import Services from './pages/Services';
import ThemeToggle from './ThemeToggle';
import Book from './pages/Book';

function App() {

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme === 'light' ? 'light-mode' : 'dark-mode';
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <BrowserRouter>
      {/* <ThemeToggle theme={theme} toggleTheme={toggleTheme} /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:serviceId" element={<ServiceDetail />} />
        <Route path="services/book" element={<Book/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
