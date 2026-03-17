import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../constants/navigation";

const CALENDLY_LINK = "https://calendly.com/inspirostudio-io/30min";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hideOnFooter, setHideOnFooter] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const pageBottomDistance =
        document.documentElement.scrollHeight -
        (window.scrollY + window.innerHeight);
      // Hide navbar when user reaches the final viewport near footer.
      setHideOnFooter(pageBottomDistance <= 64);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [location.pathname]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        hideOnFooter ? "opacity-0 -translate-y-8 pointer-events-none" : "opacity-100 translate-y-0"
      }`}
    >
      <div className="mx-auto w-full max-w-[1680px] px-5 sm:px-8 lg:px-12">
        <nav
          className={`mt-4 rounded-[120px] border px-6 sm:px-8 lg:px-10 transition-all duration-300 ${
            scrolled
              ? "border-blue-200/20 bg-[#050d1f]/88 py-3.5 shadow-[0_18px_55px_rgba(1,6,16,0.6)] backdrop-blur-xl"
              : "border-blue-200/15 bg-[#060f22]/70 py-4 backdrop-blur-md"
          }`}
        >
          <div className="grid grid-cols-[auto_auto] items-center gap-4 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
            <div className="flex items-center">
              <Link to="/" className="group inline-flex items-center" aria-label="Inspiro Studio">
                <span className="logo-wordmark whitespace-nowrap text-[23px] text-white sm:text-[28px] lg:text-[40px]">
                  Inspiro Studio
                </span>
              </Link>
            </div>

            <div className="hidden items-center justify-center gap-8 md:flex">
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative text-[13px] font-semibold uppercase tracking-[0.11em] transition-colors ${
                      isActive ? "text-white" : "text-blue-100/70 hover:text-white"
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-blue-300 transition-all ${
                        isActive ? "w-full opacity-100" : "w-0 opacity-0"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            <div className="hidden items-center justify-end md:flex">
              <a
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-btn-custom site-button inline-flex whitespace-nowrap rounded-[120px] px-10 py-4 text-[14px] font-bold uppercase tracking-[0.12em] text-white"
              >
                Book a Call
              </a>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="col-start-2 inline-flex h-12 w-12 items-center justify-center justify-self-end rounded-full border border-blue-100/20 bg-white/5 text-white md:hidden"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-3 rounded-2xl border border-blue-200/20 bg-[#050d1f]/95 p-5 backdrop-blur-xl">
            <div className="flex flex-col gap-5">
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-sm font-semibold uppercase tracking-[0.11em] ${
                      isActive ? "text-white" : "text-blue-100/75"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
            <a
              href={CALENDLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-btn-custom site-button mt-6 inline-flex w-full items-center justify-center rounded-[120px] px-10 py-5 text-[14px] font-bold uppercase tracking-[0.12em] text-white"
            >
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
