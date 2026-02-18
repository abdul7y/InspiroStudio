import React from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Twitter,
  Instagram,
  Linkedin,
  Heart,
  Play,
} from "lucide-react";
import logo from "../images/logo.png";
import video from "../videos/Preview.mp4";

const Footer: React.FC = () => {
  const ABOUT_VIDEO_SRC = video;
  return (
    // <footer className="pt-24 pb-12 px-6 sm:px-12 lg:px-24 border-t border-white/10 bg-transparent">
    //   <div className="max-w-[1440px] mx-auto">
    //     <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
    //       <div className="col-span-1 md:col-span-1">
    //         <Link to="/" className="flex items-center mb-6">
    //           <span className="text-[20px] font-semibold tracking-tight text-white">Inspiro Studio.</span>
    //         </Link>
    //         <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
    //           Transforming AI & SaaS visions into world-class digital experiences through motion and design.
    //         </p>
    //         <div className="flex space-x-4">
    //           <SocialLink icon={<Twitter className="w-4 h-4" />} />
    //           <SocialLink icon={<Instagram className="w-4 h-4" />} />
    //           <SocialLink icon={<Linkedin className="w-4 h-4" />} />
    //         </div>
    //       </div>

    //       <div>
    //         <h4 className="text-white font-bold mb-6">Explore</h4>
    //         <ul className="space-y-4 text-sm text-gray-400 font-medium">
    //           <li><Link to="/" className="hover:text-purple-300 transition-colors">Home</Link></li>
    //           <li><Link to="/about" className="hover:text-purple-300 transition-colors">About Us</Link></li>
    //           <li><Link to="/blogs" className="hover:text-purple-300 transition-colors">Insights</Link></li>
    //           <li><Link to="/faqs" className="hover:text-purple-300 transition-colors">FAQs</Link></li>
    //         </ul>
    //       </div>

    //       <div>
    //         <h4 className="text-white font-bold mb-6">Services</h4>
    //         <ul className="space-y-4 text-sm text-gray-400 font-medium">
    //           <li><a href="#" className="hover:text-purple-300 transition-colors">Video Marketing</a></li>
    //           <li><a href="#" className="hover:text-purple-300 transition-colors">Motion Design</a></li>
    //           <li><a href="#" className="hover:text-purple-300 transition-colors">AI Consulting</a></li>
    //           <li><a href="#" className="hover:text-purple-300 transition-colors">Visual Branding</a></li>
    //         </ul>
    //       </div>

    //       <div>
    //         <h4 className="text-white font-bold mb-6">Stay Inspired</h4>
    //         <p className="text-gray-400 text-sm mb-4">Join our creative newsletter.</p>
    //         <form className="flex">
    //           <input
    //             type="email"
    //             placeholder="Email address"
    //             className="bg-white/5 border border-white/10 rounded-l-xl px-4 py-2.5 text-sm focus:outline-none focus:border-purple-500/50 w-full"
    //           />
    //           <button className="bg-white text-black px-6 py-2.5 rounded-r-xl font-bold text-sm hover:bg-gray-200 transition-colors">Join</button>
    //         </form>
    //       </div>
    //     </div>

    //     <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-gray-500 font-medium">
    //       <p>© 2025 Inspiro Studio. All rights reserved.</p>
    //       <div className="flex space-x-8">
    //         <a href="#" className="hover:text-white transition-colors">Privacy</a>
    //         <a href="#" className="hover:text-white transition-colors">Terms</a>
    //         <a href="#" className="hover:text-white transition-colors">Cookies</a>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
    <footer className="bg-black border-t border-white/10 relative pt-16 pb-8 px-6 sm:px-12 2xl:px-32 lg:px-8">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-60 -left-60 w-[500px] h-[500px] bg-blue-800/40 rounded-full blur-[100px]"></div>

        <div className="absolute -top-60 -right-20 w-[400px] h-[400px] bg-blue-800/50 rounded-full blur-[100px]"></div>
        <div className="absolute top-90 -right-20 w-[400px] h-[400px] bg-blue-800/50 rounded-full blur-[100px]"></div>
        <div className="absolute top-80 right-20 w-[400px] h-[400px] bg-blue-800/50 rounded-full blur-[100px]"></div>

        {/* <div className="absolute -bottom-60 right-40 w-[700px] h-[600px] bg-black rounded-full blur-[100px]"></div> */}
      </div>
      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-4 2xl:gap-10 gap-4 lg:gap-4 mb-12">
          {/* Left Section - Brand & Newsletter */}
          <div className="">
            {/* Logo */}
            <Link to="/" className="inline-block mb-6">
              <div className="flex items-center gap-1">
                <div className="bg-white flex items-center justify-center">
                  {/* <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                    <path
                      d="M3 12h18M3 6h18M3 18h18"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg> */}
                  <img
                    src={logo}
                    alt="Inspiro Studio Logo"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </Link>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed mb-2 flex 2xl:flex-row lg:flex-row 2xl:items-center lg:items-start gap-1">
              Made remotely with
              <Heart className="w-4 h-4 fill-blue-500 text-blue-500 mt-0.5" />{" "}
              and passion
            </p>
            <p className="mb-8">
              <span className="block text-gray-500">- Westhill Studio.</span>
            </p>

            {/* Newsletter */}
            <div className="flex border border-white/20 p-2 rounded-2xl">
              <input
                type="email"
                placeholder="Enter Your Email..."
                className="bg-transparent rounded-lg py-1 pl-2 text-sm w-full text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500/50 flex-1"
              />
              <button className="bg-blue-700 ring-2 ring-blue-500 shadow-xl shadow-blue-500/20 text-white font-semibold px-2 py-1 rounded-lg font-medium text-sm   transition-colors whitespace-nowrap">
                Subscribe Us
              </button>
            </div>
          </div>

          {/* Template Pages */}
          <div className="flex flex-col lg:pl-14 ">
            <h4 className="text-white font-semibold mb-6 text-sm">
              Template Pages
            </h4>
            <ul className="space-y-3 text-sm text-gray-400 text-start">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="hover:text-white transition-colors"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="flex flex-col lg:pl-14 ">
            <h4 className="text-white font-semibold mb-6 text-sm">Social</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Twitter (X)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Youtube
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Framer
                </a>
              </li>
            </ul>
          </div>

          {/* Video Showcase */}
          <div className="">
            {/* <div className="bg-black rounded-2xl overflow-hidden aspect-video relative border border-white/10">
            
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 border-4 border-blue-500 rounded-full animate-pulse"></div>
              </div>
            </div> */}
            <div
              className="inline-block rounded-lg bg-gradient-to-r 
                    from-transparent via-blue-700/60 to-transparent 
                    p-[1px] mb-4"
            >
              <div
                className="inline-flex items-center space-x-2 px-3 py-2 
                      rounded-lg border-x border-gray-800 
                      bg-slate-900/80 backdrop-blur-xl"
              >
                
                <span className="text-xs text-gray-200 font-semibold tracking-widest ">
                  Sales-7,360,109
                </span>
              </div>
            </div>
            <div className="flex justify-start gap-2">
              <div className="relative w-full max-w-[250px] rounded-lg border border-white/10 p-1 bg-zinc-900/80">
                <div className="relative aspect-square w-full rounded-lg  border border-white/10 overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.7)]">
                  <video
                    className="absolute inset-0 w-full h-full  object-cover opacity-90"
                    src={ABOUT_VIDEO_SRC}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_60%)]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.35)]">
                      <Play className="w-6 h-6 text-white fill-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2024 Mandiro Design</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink: React.FC<{ icon: React.ReactNode }> = ({ icon }) => (
  <a
    href="#"
    className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center hover:bg-white/5 text-gray-400 hover:text-white transition-all"
  >
    {icon}
  </a>
);

export default Footer;
