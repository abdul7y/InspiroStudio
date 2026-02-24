
import React, { useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Faqs from './pages/Faqs';
import Header from './components/Header';
import Footer from './components/Footer';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
};

const CustomCursor: React.FC = () => {
  const outerRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) return;

    document.body.classList.add('custom-cursor-enabled');

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let rafId = 0;

    const animate = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;

      if (outerRef.current) {
        outerRef.current.style.transform = `translate3d(${ringX - 17}px, ${ringY - 17}px, 0)`;
      }

      if (innerRef.current) {
        innerRef.current.style.transform = `translate3d(${mouseX - 3}px, ${mouseY - 3}px, 0)`;
      }

      rafId = window.requestAnimationFrame(animate);
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const handleMouseDown = () => {
      outerRef.current?.classList.add('cursor-outer-press');
    };

    const handleMouseUp = () => {
      outerRef.current?.classList.remove('cursor-outer-press');
    };

    const handleMouseLeave = () => {
      outerRef.current?.classList.add('cursor-hidden');
      innerRef.current?.classList.add('cursor-hidden');
    };

    const handleMouseEnter = () => {
      outerRef.current?.classList.remove('cursor-hidden');
      innerRef.current?.classList.remove('cursor-hidden');
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);
    rafId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      document.body.classList.remove('custom-cursor-enabled');
    };
  }, []);

  return (
    <>
      <div ref={outerRef} className="custom-cursor-outer" aria-hidden="true" />
      <div ref={innerRef} className="custom-cursor-inner" aria-hidden="true" />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <CustomCursor />
      <ScrollToTop />
      <div className="bg-global-gradient min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/about-us" element={<Navigate to="/about" replace />} />
            <Route path="/blog" element={<Navigate to="/blogs" replace />} />
            <Route path="/faq" element={<Navigate to="/faqs" replace />} />
            <Route path="/portfolio" element={<Navigate to="/" replace />} />
            <Route path="/services" element={<Navigate to="/" replace />} />
            <Route path="/testimonials" element={<Navigate to="/" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
