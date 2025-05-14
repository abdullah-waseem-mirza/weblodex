  import React, { useEffect } from 'react';
  import { Routes, Route, useLocation } from 'react-router-dom';
  import { LuMessageCircleMore } from "react-icons/lu";
  import Navbar from './components/Navbar';
  import Footer from './components/Footer';
  import Home from './pages/Home';
  import About from './pages/About';
  import Services from './pages/Services';
  import TeamPage from './pages/TeamPage';
  import Projects from './pages/Projects';
  import Contact from './pages/Contact';

  const App = () => {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);

    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/923156674654" // Replace with your actual number
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 z-50"
        >
          <div className="relative flex items-center justify-center w-16 h-16">
            {/* Animated Outer Ping Circle */}
            <span
              className="absolute rounded-full bg-indigo-300"
              style={{
                width: '40px',
                height: '40px',
                animation: 'customPing 1.4s ease-out infinite',
                zIndex: -1,
              }}
            ></span>

            {/* Main WhatsApp Button */}
            <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-indigo-500 text-white shadow-md hover:bg-indigo-600 transition">
              <LuMessageCircleMore size={25} />
            </div>
          </div>
        </a>
      </>
    );
  };

  export default App;
