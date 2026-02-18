import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
    { name: "FAQ", path: "/faqs" },
  ];

  const CALENDLY_LINK = "https://calendly.com/inspirostudio-io/30min";

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-black/80 backdrop-blur-xl py-4 border-b border-zinc-700" : "py-6"}`}
    >
      <div className="max-w-[1440px] mx-auto w-full px-10 2xl:px-50 md:px-8 lg:px-50">
        <nav className="flex items-center justify-between gap-4">
          <div className="flex items-center space-x-10">
            <Link to="/" className="flex items-center">
              <span className="text-[20px] electrolize-regular tracking-tight text-white">
                Inspiro Studio.
              </span>
            </Link>
            <div className="hidden md:block w-px h-9 bg-white/20"></div>
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-12">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-[14px] font-medium tracking-wide transition-colors ${
                    location.pathname === link.path
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <a
              href={CALENDLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-btn-custom px-8 py-3 shadow-lg shadow-blue-500 whitespace-nowrap text-[14px] font-bold rounded-xl text-white inline-block tracking-tight"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 "
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-2xl overflow-hidden transition-all duration-300 ${isOpen ? "max-h-screen border-b border-white/10 py-10" : "max-h-0 py-0"}`}
      >
        <div className="flex flex-col items-center space-y-8 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-xl font-medium ${
                location.pathname === link.path ? "text-white" : "text-gray-500"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href={CALENDLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="glow-btn-custom px-10 py-4 text-sm font-bold rounded-full text-white"
          >
            Book a Call
          </a>
        </div>
      </div>
    </header>
    </>

  );
};

export default Header;
