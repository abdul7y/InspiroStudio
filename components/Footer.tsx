import React from "react";
import { Link } from "react-router-dom";
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

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#0b1d3a] via-[#0a1330] to-black text-white px-6 sm:px-10 lg:px-16 pt-12 pb-10">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-600/25 rounded-full blur-[100px]"></div>
        <div className="absolute -top-56 -right-16 w-[380px] h-[380px] bg-blue-800/30 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-64 right-28 w-[620px] h-[520px] bg-black/80 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto">
        <div className="h-px bg-white/15 mb-14"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-14">
          <div>
            <h3 className="text-[24px] font-semibold mb-4 tracking-tight">Studio</h3>
            <div className="space-y-4 text-[18px] text-white/75 leading-relaxed">
              <p className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 text-white" />
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
                <MapPin className="w-5 h-5 mt-1 text-white" />
                <span>Remote-first creative team serving brands worldwide</span>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-[24px] font-semibold mb-4 tracking-tight">Support</h3>
            <div className="space-y-4 text-[18px] text-white/75 leading-relaxed">
              <p className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 text-white" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors">
                  {CONTACT_EMAIL}
                </a>
              </p>
              <p className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-white" />
                <span>Project briefs reviewed within 24 hours</span>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-[24px] font-semibold mb-4 tracking-tight">Reach out to us</h3>
            <div className="space-y-4 text-[18px] text-white/75 leading-relaxed">
              <p className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 text-white" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors">
                  {CONTACT_EMAIL}
                </a>
              </p>
              <div className="flex items-center gap-3 pt-1">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  aria-label="X"
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center text-center mb-14">
          <Link to="/" className="inline-flex items-center mb-10">
            <span className="leading-none tracking-[-0.045em] text-[44px] sm:text-[76px] lg:text-[140px] font-semibold text-white">
              <span className="italic font-light">inspiro</span>
              <span>studio</span>
              <span className="inline-block w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 bg-blue-700 align-middle ml-2"></span>
            </span>
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[15px] text-white/75">
            {NAV_LINKS.map((link) => (
              <Link key={link.name} to={link.path} className="hover:text-white transition-colors">
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="h-px bg-white/15 mb-8"></div>

        <p className="text-center text-[15px] text-white/55">
          Copyright (c) {year} Inspiro Studio. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
