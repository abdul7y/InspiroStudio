import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  ArrowUpRight,
} from "lucide-react";
import { NAV_LINKS } from "../constants/navigation";

const CONTACT_EMAIL = "business@inspirostudio.io";
const CALENDLY_LINK = "https://calendly.com/inspirostudio-io/30min";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const location = useLocation();
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const footerClasses =
    "fixed inset-x-0 bottom-0 z-0 border-t border-blue-200/10 bg-[#030a18] text-white px-4 sm:px-8 lg:px-14 h-screen overflow-hidden";

  useEffect(() => {
    const updateReveal = () => {
      const distanceToBottom =
        document.documentElement.scrollHeight -
        (window.scrollY + window.innerHeight);
      // Reveal footer content during the final scroll stretch.
      setIsFooterVisible(distanceToBottom <= window.innerHeight * 0.95);
    };

    updateReveal();
    window.addEventListener("scroll", updateReveal, { passive: true });
    window.addEventListener("resize", updateReveal);
    return () => {
      window.removeEventListener("scroll", updateReveal);
      window.removeEventListener("resize", updateReveal);
    };
  }, [location.pathname]);

  return (
    <footer className={footerClasses}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-44 -left-36 h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[110px]" />
        <div className="absolute top-20 -right-24 h-[300px] w-[300px] rounded-full bg-sky-500/15 blur-[90px]" />
      </div>

      <div
        className={`relative z-10 max-w-[1360px] mx-auto w-full transition-all duration-700 ease-out ${
          isFooterVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } py-5`}
      >
        <div className="midnight-card-gradient mb-8 rounded-[28px] border border-blue-100/15 p-6 md:p-7">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-blue-200/70">
                Inspiro Studio
              </p>
              <h3 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight text-white md:text-4xl">
                High-conversion visuals for ambitious digital brands.
              </h3>
            </div>
            <a
              href={CALENDLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-btn-custom site-button inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl px-8 py-3.5 text-[13px] font-bold uppercase tracking-[0.12em] text-white"
            >
              Book Discovery Call
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 mb-8">
          <div>
            <h3 className="text-[20px] font-semibold tracking-tight">Studio</h3>
            <div className="mt-4 space-y-3 text-[15px] text-blue-100/75 leading-relaxed">
              <p className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 text-blue-300" />
                <a
                  href={CALENDLY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Book a discovery call
                </a>
              </p>
              <p className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-blue-300" />
                <span>Remote-first creative team serving brands worldwide</span>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-[20px] font-semibold tracking-tight">Support</h3>
            <div className="mt-4 space-y-3 text-[15px] text-blue-100/75 leading-relaxed">
              <p className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-1 text-blue-300" />
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="hover:text-white transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
              <p className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-blue-300" />
                <span>Project briefs reviewed within 24 hours</span>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-[20px] font-semibold tracking-tight">Follow</h3>
            <div className="mt-4">
              <div className="flex items-center gap-3">
                <a
                  href="https://facebook.com"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full border border-blue-100/20 bg-white/[0.04] text-blue-100 flex items-center justify-center hover:bg-blue-500/20 hover:text-white transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full border border-blue-100/20 bg-white/[0.04] text-blue-100 flex items-center justify-center hover:bg-blue-500/20 hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://x.com"
                  aria-label="X"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full border border-blue-100/20 bg-white/[0.04] text-blue-100 flex items-center justify-center hover:bg-blue-500/20 hover:text-white transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full border border-blue-100/20 bg-white/[0.04] text-blue-100 flex items-center justify-center hover:bg-blue-500/20 hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6 flex flex-col items-center text-center">
          <Link to="/" className="inline-flex items-end justify-center mb-5" aria-label="Inspiro Studio">
            <span className="logo-wordmark whitespace-nowrap text-[44px] text-white sm:text-[96px] lg:text-[168px] xl:text-[188px]">
              Inspiro Studio
            </span>
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[13px] uppercase tracking-[0.1em] text-blue-100/70">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="h-px bg-blue-100/15 mb-5" />

        <p className="text-center text-[12px] uppercase tracking-[0.1em] text-blue-100/50">
          Copyright (c) {year} Inspiro Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
