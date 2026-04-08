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
} from "lucide-react";
import { NAV_LINKS } from "../constants/navigation";

const CONTACT_EMAIL = "business@inspirostudio.io";
const CALENDLY_LINK = "https://calendly.com/inspirostudio-io/30min";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const location = useLocation();
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const footerClasses =
    "fixed inset-x-0 bottom-0 z-0 border-t border-violet-200/10 bg-[#050208] text-white px-4 sm:px-8 lg:px-14 overflow-hidden";

  useEffect(() => {
    const updateReveal = () => {
      const distanceToBottom =
        document.documentElement.scrollHeight -
        (window.scrollY + window.innerHeight);
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
        <div className="absolute -top-44 -left-36 h-[420px] w-[420px] rounded-full bg-violet-600/20 blur-[110px]" />
        <div className="absolute top-20 -right-24 h-[300px] w-[300px] rounded-full bg-fuchsia-500/18 blur-[90px]" />
      </div>

      <div
        className={`relative z-10 max-w-[1480px] mx-auto w-full flex flex-col justify-end transition-all duration-700 ease-out ${
          isFooterVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } pt-8 pb-5`}
      >
        {/* Info columns */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-6 pt-8">
          {/* Col 1 – Studio */}
          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.18em] text-violet-100/50 mb-4">
              Studio
            </h3>
            <div className="space-y-3 text-[15px] text-violet-100/80 leading-relaxed">
              <p className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-[3px] shrink-0 text-violet-400" />
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
                <MapPin className="w-4 h-4 mt-[3px] shrink-0 text-violet-400" />
                <span>Remote-first creative team serving brands worldwide</span>
              </p>
            </div>
          </div>

          {/* Col 2 – Support */}
          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.18em] text-violet-100/50 mb-4">
              Support
            </h3>
            <div className="space-y-3 text-[15px] text-violet-100/80 leading-relaxed">
              <p className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-[3px] shrink-0 text-violet-400" />
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="hover:text-white transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
              <p className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-[3px] shrink-0 text-violet-400" />
                <span>Project briefs reviewed within 24 hours</span>
              </p>
            </div>
          </div>

          {/* Col 3 – Reach out */}
          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.18em] text-violet-100/50 mb-4">
              Reach out to us
            </h3>
            <div className="space-y-3 text-[15px] text-violet-100/80 leading-relaxed">
              <p className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-[3px] shrink-0 text-violet-400" />
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="hover:text-white transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
              <div className="flex items-center gap-2 mt-1">
                {[
                  { href: "https://facebook.com", label: "Facebook", icon: <Facebook className="w-[14px] h-[14px]" /> },
                  { href: "https://instagram.com", label: "Instagram", icon: <Instagram className="w-[14px] h-[14px]" /> },
                  { href: "https://x.com", label: "X", icon: <Twitter className="w-[14px] h-[14px]" /> },
                  { href: "https://linkedin.com", label: "LinkedIn", icon: <Linkedin className="w-[14px] h-[14px]" /> },
                ].map(({ href, label, icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-9 w-9 rounded-full border border-violet-100/20 bg-white/[0.04] text-violet-100 flex items-center justify-center hover:bg-violet-500/20 hover:border-violet-400/40 hover:text-white transition-all duration-200"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Giant wordmark */}
        <Link
          to="/"
          className="flex w-full items-end justify-center mb-2"
          aria-label="Inspiro Studio"
        >
          <span className="logo-wordmark block whitespace-nowrap text-center leading-[0.84] text-[32px] text-white/90 sm:text-[52px] md:text-[72px] lg:text-[96px] xl:text-[112px] 2xl:text-[124px] hover:text-white transition-colors duration-300">
            Inspiro Studio
          </span>
        </Link>

        {/* Bottom bar */}
        <div className="mt-1 pt-3 border-t border-violet-100/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <nav className="flex flex-wrap items-center justify-center sm:justify-start gap-x-7 gap-y-2 text-[12px] uppercase tracking-[0.1em] text-violet-100/50">
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
          <p className="text-[12px] uppercase tracking-[0.1em] text-violet-100/60 shrink-0">
            © {year} Inspiro Studio
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
