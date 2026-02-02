
import React, { useState } from 'react';
import { Play, Check, Star, ArrowRight, Rocket, Power, X, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const CALENDLY_LINK = "https://calendly.com/inspirostudio-io/30min";

  const logos = [
    "LOGO", "IPSUM", "IPSUOM"
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "and",
      bgClass: "bg-gradient-to-br from-[#4f46e5] via-[#3b82f6] to-[#2563eb]",
      content: (
        <div className="flex items-center justify-center h-full">
          <span className="text-white text-[120px] md:text-[200px] font-bold tracking-tighter select-none">and</span>
        </div>
      )
    },
    {
      id: 2,
      title: "The Horizon",
      bgClass: "bg-[#0f172a]",
      content: (
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1505118380757-91f5f45d8de4?auto=format&fit=crop&q=80&w=2000" 
            alt="Ocean" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div>
      )
    },
    {
      id: 3,
      title: "White Stag",
      bgClass: "bg-[#0a0a0a]",
      content: (
        <div className="relative h-full flex flex-col items-center justify-center">
          <div className="relative z-10 space-y-12 text-center">
             <div className="flex justify-center space-x-8">
                <div className="w-20 h-56 bg-gradient-to-b from-[#222] to-[#0a0a0a] rounded-full border border-white/5 flex items-center justify-center">
                   <span className="rotate-90 text-[10px] text-white/30 font-bold uppercase tracking-widest">000</span>
                </div>
                <div className="w-20 h-56 bg-gradient-to-b from-[#222] to-[#0a0a0a] rounded-full border border-white/5 flex items-center justify-center translate-y-12">
                   <span className="rotate-90 text-[10px] text-white/30 font-bold uppercase tracking-widest">000</span>
                </div>
             </div>
          </div>
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between px-6 py-3 bg-black/60 backdrop-blur-md rounded-full border border-white/10">
            <div className="flex items-center space-x-4">
               <span className="text-[10px] font-bold text-white uppercase tracking-wider">White Stag — 2024</span>
               <div className="h-1 w-32 md:w-48 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
               </div>
            </div>
            <div className="hidden sm:flex items-center space-x-2">
               <span className="px-2 py-0.5 border border-white/10 rounded text-[9px] text-gray-400">SAAS</span>
               <span className="px-2 py-0.5 border border-white/10 rounded text-[9px] text-gray-400">Landing Page</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  const testimonials = [
    {
      name: "Daniel Carter",
      role: "Founder",
      company: "Innovate Solutions",
      quote: "Our message finally clicked. The new explainer is simple, sharp, and easy to share. They nailed the styleframes early, then the animation matched perfectly.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Daniel"
    },
    {
      name: "Emily Davis",
      role: "Product Manager",
      company: "Nexus Digital",
      quote: "The team understood our complex requirements and provided a user-friendly, high-performing website that stands out in the market.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily"
    },
    {
      name: "David Lee",
      role: "Founder",
      company: "GreenLeaf Enterprises",
      quote: "Their innovative solutions helped streamline our operations, and the website design and development is both functional and visually stunning.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David"
    }
  ];

  const faqItems = [
    { q: "What do I need to get started?", a: "To get started, simply book a call or send us your project brief. We will guide you through the initial requirements including brand guidelines and goals." },
    { q: "What kind of customization is available?", a: "We offer full customization of animations, styleframes, and brand aesthetics to match your specific vision and messaging needs." },
    { q: "How easy is it to edit for beginners?", a: "Our workflow is designed for clarity. We provide simple checkpoints and a dedicated manager so you don't need technical skills to provide feedback." },
    { q: "Let me know more about moneyback guarantee?", a: "We stand by our quality. If we don't meet the agreed-upon standards or milestones, we offer transparent refund policies as per our contract." },
    { q: "Do I need to know how to code?", a: "Not at all. We handle all technical aspects of video marketing and motion design for you, from concept to final export." },
    { q: "What will I get after purchasing the template?", a: "You'll receive full production files, multiple format exports, and the master video optimized for your selected social and ad platforms." }
  ];

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="bg-global-gradient min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center px-8 md:px-16 lg:px-24 overflow-hidden">
        <div className="max-w-[1440px] mx-auto w-full pt-32 pb-40">
          <div className="max-w-[900px] relative z-10">
            <div className="flex items-center space-x-2 mb-10">
              <span className="bg-[#2563eb] text-[11px] font-black px-2 py-0.5 rounded-[2px] text-white uppercase tracking-tight">NEW</span>
              <div className="bg-white/5 px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
                <span className="text-[13px] font-medium text-gray-300">No. 1 Studio of 2025</span>
              </div>
            </div>
            
            <h1 className="text-[60px] md:text-[80px] lg:text-[100px] font-bold text-white mb-8 tracking-[-0.03em] leading-[1.05]">
              Video Marketing Agency For <br className="hidden lg:block" /> AI & SaaS
            </h1>
            
            <p className="text-[#a1a1aa] text-lg md:text-[19px] mb-12 max-w-[620px] leading-relaxed font-normal">
              We make stories, animate them, make them sound vibrant and dress then with music, so that your business starts booming like a rocket.
            </p>
            
            <div className="flex flex-col items-start mb-24">
              <a 
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-btn-custom px-10 py-[18px] rounded-full text-white font-bold text-[15px] tracking-tight mb-12"
              >
                Book a Call
              </a>

              <div className="relative w-full max-w-[400px] overflow-hidden opacity-30 grayscale select-none pointer-events-none">
                <div className="animate-infinite-scroll flex items-center py-2">
                  {[...logos, ...logos, ...logos].map((logo, index) => (
                    <div key={index} className="flex items-center space-x-3 mx-8">
                      <div className="w-3.5 h-3.5 bg-white rounded-[1px]"></div>
                      <span className="text-[16px] font-black tracking-tighter text-white whitespace-nowrap uppercase">{logo}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="waves-container">
          <div className="wave wave-3"></div>
          <div className="wave wave-2"></div>
          <div className="wave"></div>
        </div>
      </section>

      {/* 2. Portfolio Section */}
      <section className="relative px-8 md:px-16 lg:px-24 mb-32">
        <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center pt-24 mb-32">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-white/10 bg-black/40 backdrop-blur-sm mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            <span className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">Portfolio</span>
          </div>
          <h2 className="text-[48px] md:text-[64px] font-bold text-white mb-2 tracking-tight leading-tight">Portfolio</h2>
          <h3 className="text-[24px] md:text-[32px] font-medium text-gray-400 mb-10 tracking-tight leading-tight">Product Success Stories</h3>
          <div className="relative group mt-10">
            <div className="absolute -inset-1 bg-[#8b2fc9] rounded-[14px] blur-md opacity-40 group-hover:opacity-80 transition duration-500"></div>
            <Link to="/blogs" className="relative px-12 py-3.5 bg-gradient-to-b from-[#b134eb] to-[#711ba3] border border-white/20 rounded-[12px] text-white font-bold text-[16px] tracking-tight inline-block shadow-lg transition-all duration-300">
              View Portfolio
            </Link>
          </div>
        </div>

        <div className="max-w-[1100px] mx-auto pb-[10vh] relative">
          {portfolioItems.map((item, index) => (
            <div key={item.id} className="sticky top-24 w-full aspect-video rounded-[32px] md:rounded-[40px] overflow-hidden border border-white/10 mb-[20vh] group cursor-pointer" style={{ zIndex: index + 1 }}>
              <div className={`w-full h-full ${item.bgClass} relative overflow-hidden`}>
                {item.content}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20">
                   <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20">
                      <Play className="w-10 h-10 text-white fill-white" />
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Testimonials Section */}
      <section className="relative py-48 px-8 md:px-16 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a0a1e] to-[#08030b] pointer-events-none"></div>
        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="text-center mb-24 flex flex-col items-center">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
              <span className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.2em]">Testimonial</span>
            </div>
            <h2 className="text-[48px] md:text-[68px] font-bold text-white tracking-tight leading-[1.1] mb-2">Customer Reviews</h2>
            <div className="relative group/cta mt-12">
              <div className="absolute -inset-[4px] bg-gradient-to-r from-[#8a4ba7] via-[#a855f7] to-[#5b21b6] rounded-xl blur-[32px] opacity-70 group-hover/cta:opacity-100 transition duration-500"></div>
              <a 
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block px-14 py-4.5 bg-gradient-to-r from-[#8a4ba7] to-[#5b21b6] border border-white/20 rounded-[14px] text-white font-bold text-[15px] tracking-tight shadow-2xl transition-all hover:scale-[1.02] text-center"
              >
                Let's Work Together
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-[#08030b]/90 border border-white/[0.03] rounded-[32px] p-10 flex flex-col relative group overflow-hidden shadow-2xl hover:bg-[#0c0511]/95 transition-all duration-700">
                <div className="flex items-center justify-between mb-8 relative z-10">
                  <div className="w-11 h-11 rounded-full border border-white/10 p-0.5 relative overflow-hidden bg-white/5 shadow-inner">
                    <img src={t.avatar} className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt={t.name} />
                  </div>
                  <X className="w-4 h-4 text-gray-800 hover:text-gray-400 transition-colors cursor-pointer" />
                </div>
                <div className="flex space-x-1 mb-8 relative z-10 opacity-60 group-hover:opacity-100 transition-opacity">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3 h-3 text-white fill-white" />)}
                </div>
                <p className="text-gray-400/80 group-hover:text-gray-300 text-[15px] leading-[1.6] mb-12 flex-grow font-medium relative z-10 transition-colors">"{t.quote}"</p>
                <div className="mt-auto relative z-10 border-t border-white/[0.03] pt-6">
                  <h4 className="text-white font-bold text-[14px] mb-1 tracking-tight">{t.name} <span className="mx-2 text-gray-700 font-normal">·</span> <span className="text-gray-500 font-medium">{t.role}</span></h4>
                  <p className="text-gray-600 text-[11px] font-bold uppercase tracking-[0.2em]">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="relative py-48 px-8 md:px-16 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#08030b] via-[#1a0a1e] to-[#0a050f] pointer-events-none"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-600/50 to-transparent z-20"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-purple-600/10 blur-[80px] pointer-events-none z-10"></div>
        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div className="flex flex-col items-start pt-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#1a0a1e]/80 border border-white/[0.05] mb-10 backdrop-blur-xl">
                <span className="w-1 h-1 rounded-full bg-blue-400"></span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.25em]">FAQ</span>
              </div>
              <h2 className="text-[54px] md:text-[72px] font-bold leading-[1.05] tracking-tight mb-10">
                <span className="text-white block">Frequently</span>
                <span className="text-gray-500/80 block">Asked Questions</span>
              </h2>
            </div>
            <div className="space-y-4">
              {faqItems.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`bg-[#08030b]/80 border border-white/[0.04] rounded-[24px] overflow-hidden group hover:border-white/[0.08] hover:bg-[#0c0511]/90 transition-all duration-500 cursor-pointer ${activeFaq === idx ? 'border-white/[0.12] bg-[#0c0511]' : ''}`}
                  onClick={() => toggleFaq(idx)}
                >
                  <div className="p-8 flex items-center justify-between">
                    <span className={`text-[17px] md:text-[19px] font-bold tracking-tight transition-all duration-500 ${activeFaq === idx ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>{item.q}</span>
                    <div className={`flex-shrink-0 ml-6 w-11 h-11 rounded-full border border-white/[0.05] flex items-center justify-center transition-all duration-500 ${activeFaq === idx ? 'bg-white/10 rotate-45' : 'group-hover:bg-white/5'}`}>
                      <Plus className={`w-5 h-5 transition-colors duration-500 ${activeFaq === idx ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`} />
                    </div>
                  </div>
                  <div className={`transition-all duration-700 ease-in-out px-8 overflow-hidden ${activeFaq === idx ? 'max-h-60 pb-10 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="h-px w-full bg-white/[0.03] mb-6"></div>
                    <p className="text-gray-400/90 text-[15px] leading-relaxed font-medium">{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. Unique Opportunity Section - WITH ANIMATED WAVE COLOR CART */}
      <section className="relative py-40 px-8 md:px-16 lg:px-24 overflow-hidden bg-black">
         <div className="max-w-[1440px] mx-auto">
            <div className="relative group/card overflow-hidden rounded-[40px] border border-white/5 shadow-[0_0_100px_rgba(0,0,0,0.8)]">
               
               {/* Main cart Background - theme color gradient integration */}
               <div className="absolute inset-0 bg-global-gradient pointer-events-none"></div>

               {/* ANIMATED WAVE COLOR BACKGROUND ELEMENTS */}
               <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {/* Floating Mesh/Liquid blobs for wave effect */}
                  <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[120%] bg-blue-600/20 blur-[120px] rounded-full animate-float-glow opacity-60"></div>
                  <div className="absolute -bottom-[30%] -left-[10%] w-[60%] h-[100%] bg-blue-700/15 blur-[140px] rounded-full animate-float-glow-reverse opacity-40"></div>
                  <div className="absolute top-[20%] left-[20%] w-[40%] h-[60%] bg-[#8a2be2]/10 blur-[100px] rounded-full animate-float-glow opacity-30"></div>
                  
                  {/* Subtle moving wave overlay for texture */}
                  <div className="absolute inset-0 opacity-[0.05] pointer-events-none overflow-hidden">
                    <div className="wave wave-2 !bg-blue-400/20 !bottom-auto !top-0 !h-[150%]"></div>
                    <div className="wave wave-3 !bg-purple-400/20 !bottom-auto !top-10 !h-[120%]"></div>
                  </div>
               </div>
               
               <div className="relative z-10 py-32 px-10 md:px-24 flex flex-col items-center text-center">
                  <div className="inline-flex items-center space-x-2 px-4 py-2 bg-black/40 border border-white/10 rounded-full mb-12 backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                    <span className="text-[12px] font-bold text-gray-400 tracking-wider">Join Us Now</span>
                  </div>

                  <h2 className="text-[44px] md:text-[68px] font-bold text-white mb-8 tracking-[-0.03em] leading-[1.1] max-w-4xl">
                    Each Project we Undertake <br />
                    <span className="opacity-80 font-medium">is a Unique Opportunity.</span>
                  </h2>

                  <p className="text-[#a1a1aa] text-lg md:text-[17px] mb-14 max-w-2xl leading-relaxed font-medium">
                    Ready to take the next step? Join us now and start transforming your <br className="hidden md:block" />
                    vision into reality with expert support.
                  </p>

                  <div className="relative group/btn">
                    <div className="absolute -inset-[3px] bg-gradient-to-r from-[#8a2be2] via-[#9400d3] to-[#4b0082] rounded-xl blur-[20px] opacity-70 group-hover/btn:opacity-100 transition duration-500"></div>
                    <a 
                      href={CALENDLY_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative block px-14 py-4.5 bg-gradient-to-r from-[#8a2be2] to-[#4b0082] border border-white/20 rounded-[12px] text-white font-bold text-[15px] tracking-tight shadow-2xl transition-all hover:scale-[1.03] active:scale-[0.98] text-center"
                    >
                      Book a Call
                    </a>
                  </div>
               </div>

               <div className="absolute inset-0 border border-white/[0.02] rounded-[40px] pointer-events-none"></div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;
