
import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Faqs from './pages/Faqs';
import Header from './components/Header';
import Footer from './components/Footer';
import { NAVBAR_CTA_BUTTON_AUTO_WIDTH_CLASS } from './constants/buttonStyles';

const CALENDLY_LINK = 'https://calendly.com/inspirostudio-io/30min';

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

const JoinUsRevealLayer: React.FC = () => {
  return (
    <>
      <section className="relative z-20 h-[150vh] bg-transparent">
        <div className="sticky top-0 h-screen flex items-end">
          <div className="w-full">
            <div className="midnight-card-gradient relative overflow-hidden rounded-none border-y border-white/10 min-h-[100svh] flex items-center">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[100px]" />
                <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-black rounded-full blur-[100px]" />
                <div className="absolute -top-60 -right-20 w-[400px] h-[400px] bg-blue-800 rounded-full blur-[100px]" />
                <div className="absolute -bottom-60 right-40 w-[700px] h-[600px] bg-black rounded-full blur-[100px]" />
              </div>

              <div className="relative z-10 w-full py-24 px-6 md:px-16 lg:px-24 flex flex-col items-center text-center">
                <div className="inline-block rounded-lg bg-gradient-to-r from-transparent via-blue-700/60 to-transparent p-[1px] mb-8">
                  <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg border-x border-gray-800 backdrop-blur-xl bg-gradient-to-t from-black via-slate-950 to-blue-900/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    <span className="text-xs text-gray-200 tracking-widest uppercase">
                      Join Us Now
                    </span>
                  </div>
                </div>

                <h2 className="hidden md:block text-5xl lg:text-6xl 2xl:text-7xl text-white leading-[1.05] max-w-5xl">
                  Each Project we Undertake
                  <br />
                  <span className="text-white/50">is a Unique Opportunity.</span>
                </h2>
                <h2 className="md:hidden block text-[44px] text-white leading-[1.05] max-w-4xl">
                  Each Project, Our
                  <br />
                  <span className="text-white/50">Design is Great.</span>
                </h2>

                <p className="mt-6 text-white/60 text-base md:text-lg max-w-2xl leading-relaxed">
                  Ready to take the next step? Join us now and start transforming your
                  vision into reality with expert support.
                </p>

                <a
                  href={CALENDLY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${NAVBAR_CTA_BUTTON_AUTO_WIDTH_CLASS} mt-12`}
                >
                  Book an Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative z-10 h-[110vh] bg-transparent pointer-events-none" />
    </>
  );
};

const AppShell: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="bg-global-gradient min-h-screen flex flex-col">
      <Header />
      <main className="relative z-10 flex-grow">
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
      {!isHome && <JoinUsRevealLayer />}
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <CustomCursor />
      <ScrollToTop />
      <AppShell />
    </Router>
  );
};

export default App;
