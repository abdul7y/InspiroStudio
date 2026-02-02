
import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-24 pb-12 px-6 sm:px-12 lg:px-24 border-t border-white/10 bg-transparent">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center mb-6">
              <span className="text-[20px] font-semibold tracking-tight text-white">Inspiro Studio.</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Transforming AI & SaaS visions into world-class digital experiences through motion and design.
            </p>
            <div className="flex space-x-4">
              <SocialLink icon={<Twitter className="w-4 h-4" />} />
              <SocialLink icon={<Instagram className="w-4 h-4" />} />
              <SocialLink icon={<Linkedin className="w-4 h-4" />} />
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-medium">
              <li><Link to="/" className="hover:text-purple-300 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-purple-300 transition-colors">About Us</Link></li>
              <li><Link to="/blogs" className="hover:text-purple-300 transition-colors">Insights</Link></li>
              <li><Link to="/faqs" className="hover:text-purple-300 transition-colors">FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-medium">
              <li><a href="#" className="hover:text-purple-300 transition-colors">Video Marketing</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Motion Design</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">AI Consulting</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Visual Branding</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Stay Inspired</h4>
            <p className="text-gray-400 text-sm mb-4">Join our creative newsletter.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/5 border border-white/10 rounded-l-xl px-4 py-2.5 text-sm focus:outline-none focus:border-purple-500/50 w-full"
              />
              <button className="bg-white text-black px-6 py-2.5 rounded-r-xl font-bold text-sm hover:bg-gray-200 transition-colors">Join</button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-gray-500 font-medium">
          <p>© 2025 Inspiro Studio. All rights reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink: React.FC<{ icon: React.ReactNode }> = ({ icon }) => (
  <a href="#" className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center hover:bg-white/5 text-gray-400 hover:text-white transition-all">
    {icon}
  </a>
);

export default Footer;
