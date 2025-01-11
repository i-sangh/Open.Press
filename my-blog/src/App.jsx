import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlogPost from './components/BlogPost';
import Contact from './pages/Contact';
import Advertise from './pages/Advertise';
import Privacy from './pages/Privacy';
import Cookies from './pages/Cookies';
import Terms from './pages/Terms';
import Profile from './pages/Profile';  // Add this import

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/advertise" element={<Advertise />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/profile" element={<Profile />} />  
      </Routes>
    </BrowserRouter>
  );
};

export default App;