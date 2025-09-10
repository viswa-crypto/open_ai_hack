import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Marketplace from './pages/Marketplace';
import Franchise from './pages/Franchise';
import Community from './pages/Community';
import Investors from './pages/Investors';
import Marketing from './pages/Marketing';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/franchise" element={<Franchise />} />
            <Route path="/community" element={<Community />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/marketing" element={<Marketing />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
        <ChatBot />
      </div>
    </Router>
  );
}

export default App;