
import React, { useState } from 'react';
import { Play, Check, Star, ArrowRight, Rocket, Power, X, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const CALENDLY_LINK = "https://calendly.com/inspirostudio-io/30min";
  const ABOUT_VIDEO_SRC = "/videos/about-inspiro.mp4";

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

  const blogSlides = [
    {
      id: 1,
      title: "Basel",
      client: "Crimson Studio",
      badge: "NEW",
      description: "Achieved a increase in sales within six months through a customized strategy.",
      stats: ["30% Increase in Sales", "40% Boost in Retention"],
      image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
      accent: "from-emerald-500/20 via-emerald-400/10 to-transparent"
    },
    {
      id: 2,
      title: "Raven Company Inc",
      client: "Raven Company Inc",
      badge: "HIGH",
      description: "Streamlined operations, reducing costs by with our automation solutions.",
      stats: ["25% Conversion Rates", "50% Reduced in CPA"],
      image: "https://images.unsplash.com/photo-1545239351-ef35f43d514b?auto=format&fit=crop&w=1200&q=80",
      accent: "from-indigo-500/20 via-sky-500/10 to-transparent"
    },
    {
      id: 3,
      title: "Manila.",
      client: "Gotham Wonder",
      badge: "FRESH",
      description: "Boosted customer engagement with a digital presence and targeted campaigns.",
      stats: ["80% Increased Traffic", "35% Growth in Sales"],
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      accent: "from-blue-500/20 via-violet-500/10 to-transparent"
    }
  ];
  const blogSlidesLoop = [...blogSlides, ...blogSlides];

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

      {/* 3. About Inspiro Section */}
      <section className="relative px-8 md:px-16 lg:px-24 mb-32">
        <div className="max-w-[1440px] mx-auto">
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-b from-[#0c0c10] via-[#09090d] to-[#050506] px-8 md:px-14 py-16 md:py-20">
            <div className="absolute -inset-10 bg-[radial-gradient(60%_60%_at_20%_10%,rgba(124,58,237,0.25),transparent_55%),radial-gradient(50%_50%_at_80%_20%,rgba(59,130,246,0.22),transparent_60%),radial-gradient(70%_70%_at_50%_100%,rgba(16,185,129,0.18),transparent_70%)] pointer-events-none"></div>
            <div className="absolute inset-0 opacity-[0.18] pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:72px_72px]"></div>
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[70%] h-40 bg-purple-500/10 blur-[90px] pointer-events-none"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="flex justify-center lg:justify-start">
                <div className="relative w-full max-w-[420px]">
                  <div className="relative aspect-square w-full rounded-[32px] bg-gradient-to-br from-[#0e5a52] via-[#0a3f3a] to-[#072726] border border-white/10 overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.7)]">
                    <video
                      className="absolute inset-0 w-full h-full object-cover opacity-90"
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
                    <div className="absolute bottom-5 left-6 text-[10px] uppercase tracking-[0.35em] text-white/70">
                      Video Preview
                    </div>
                  </div>
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[78%] h-14 bg-gradient-to-r from-[#3b82f6]/30 via-[#8a2be2]/35 to-[#0ea5e9]/25 blur-[32px]"></div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em]">About Inspiro</span>
                </div>

                <div>
                  <h2 className="text-[38px] md:text-[52px] font-bold text-white leading-[1.08] tracking-tight">
                    Building Stronger Brands
                  </h2>
                  <h3 className="text-[30px] md:text-[44px] font-semibold text-gray-400 leading-[1.1] tracking-tight">
                    Across 30+ Countries
                  </h3>
                </div>

                <p className="text-[15px] md:text-[16px] text-gray-400 leading-relaxed max-w-[520px]">
                  Delivering expert solutions that transform modern businesses. Driving innovation globally, partnering with clients for impact.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-300 text-[14px]">
                    <span className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-blue-400" />
                    </span>
                    <span>From $0 to $500,000 in revenue.</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300 text-[14px]">
                    <span className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-blue-400" />
                    </span>
                    <span>70% growth in new customers.</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                  <button className="relative inline-flex items-center justify-center px-6 py-2.5 rounded-full text-white text-[13px] font-bold tracking-tight bg-gradient-to-r from-[#8a2be2] via-[#7c3aed] to-[#4b0082] shadow-[0_0_28px_rgba(168,85,247,0.45)] border border-white/20">
                    About Inspiro
                  </button>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-3 h-3 text-white fill-white" />
                      ))}
                    </div>
                    <span className="text-[12px] text-gray-400">200+ Agencies Rated</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 rounded-[40px] border border-white/[0.04] pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* 4. Blogs Section */}
      <section className="relative px-8 md:px-16 lg:px-24 mb-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[42%] h-48 bg-gradient-to-b from-[#0b1628] to-transparent opacity-80" style={{ clipPath: "polygon(0 0, 100% 0, 72% 100%, 0 100%)" }}></div>
          <div className="absolute top-0 right-0 w-[42%] h-48 bg-gradient-to-b from-[#0b1628] to-transparent opacity-80" style={{ clipPath: "polygon(28% 100%, 100% 0, 100% 100%, 0 100%)" }}></div>
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[70%] h-56 bg-purple-600/10 blur-[100px]"></div>
        </div>

        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="text-center flex flex-col items-center mb-10">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em]">Blogs</span>
            </div>
            <h2 className="text-[40px] md:text-[56px] font-bold text-white tracking-tight leading-[1.1]">
              Delivering Tangible Results
            </h2>
            <h3 className="text-[32px] md:text-[48px] font-semibold text-gray-400 tracking-tight leading-[1.1]">
              That Propel Your Success
            </h3>
            <p className="text-[14px] md:text-[15px] text-gray-500 mt-4 max-w-[540px]">
              Animation is not decoration. It is a faster way to explain, launch, and sell.
            </p>
            <div className="relative group/cta mt-8">
              <div className="absolute -inset-[3px] bg-gradient-to-r from-[#8a2be2] via-[#7c3aed] to-[#4b0082] rounded-full blur-[16px] opacity-70 group-hover/cta:opacity-100 transition duration-500"></div>
              <a
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-gradient-to-r from-[#8a2be2] via-[#7c3aed] to-[#4b0082] text-white text-[13px] font-bold tracking-tight border border-white/20 shadow-[0_0_26px_rgba(168,85,247,0.45)]"
              >
                Book a 15-min call
              </a>
            </div>
          </div>
        </div>

        <div className="relative mt-6 -mx-8 md:-mx-16 lg:-mx-24">
          <div className="absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-black/70 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-black/70 to-transparent z-20 pointer-events-none"></div>

          <div className="overflow-hidden px-6 md:px-10 lg:px-12">
            <div className="animate-infinite-scroll flex items-stretch gap-6 py-4">
              {blogSlidesLoop.map((card, index) => (
                <div
                  key={`${card.id}-${index}`}
                  className="w-[320px] sm:w-[360px] md:w-[400px] lg:w-[460px] xl:w-[520px] flex-shrink-0"
                  aria-hidden={index >= blogSlides.length}
                >
                  <div className="relative h-[420px] md:h-[460px] lg:h-[480px] bg-[#0a0b0f] border border-white/[0.06] rounded-[20px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6)] flex flex-col">
                    <div className={`absolute inset-0 bg-gradient-to-b ${card.accent} opacity-70 pointer-events-none`}></div>
                    <div className="relative h-[56%] overflow-hidden">
                      <img src={card.image} alt={card.title} className="w-full h-full object-cover opacity-80" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    </div>

                    <div className="relative p-5 flex-1 flex flex-col">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white text-[15px] font-bold">{card.title}</span>
                        <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[9px] font-bold tracking-wide uppercase">
                          {card.badge}
                        </span>
                      </div>
                      <p className="text-[12px] text-gray-400 font-medium mb-3">{card.client}</p>
                      <p className="text-[12px] text-gray-500 leading-relaxed mb-4 flex-1">{card.description}</p>
                      <div className="flex items-center space-x-2">
                        <span className="px-2 py-1 rounded-full bg-white/5 text-[10px] text-gray-300 border border-white/10">{card.stats[0]}</span>
                        <span className="px-2 py-1 rounded-full bg-white/5 text-[10px] text-gray-300 border border-white/10">{card.stats[1]}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* 5. Landing Benefits Section */}
      <section className="relative px-8 md:px-16 lg:px-24 mb-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-[radial-gradient(circle_at_70%_20%,rgba(59,130,246,0.18),transparent_60%)]"></div>
          <div className="absolute -top-20 right-10 w-[40%] h-[40%] bg-[radial-gradient(circle,rgba(168,85,247,0.18),transparent_65%)]"></div>
          <div className="absolute top-0 right-0 w-[65%] h-[40%] bg-[#0b1628]/80" style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%, 62% 100%)" }}></div>
        </div>

        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em]">Landin Benefits</span>
          </div>

          <h2 className="text-[30px] md:text-[44px] font-bold text-white leading-[1.1] tracking-tight">
            We Just Don't Design, We Build.
          </h2>
          <h3 className="text-[26px] md:text-[40px] font-semibold text-gray-400 leading-[1.1] tracking-tight">
            If You Can Dream It, We Can Play It!
          </h3>

          <div className="mt-6 flex flex-wrap items-center gap-2 text-[11px] md:text-[12px]">
            {[
              "Enhanced UX",
              "Boosted Conversions",
              "Fast Loading",
              "SEO Optimized",
              "Customizable",
              "Scalable",
              "Increased Engagement",
              "Expandable",
              "Secure",
              "User-Friendly"
            ].map((chip) => (
              <span key={chip} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                {chip}
              </span>
            ))}
            <button className="ml-1 px-3.5 py-1 rounded-full bg-white text-black text-[11px] font-bold shadow-[0_0_18px_rgba(255,255,255,0.2)]">
              Contact Now
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-8 mt-10">
            <div className="space-y-6">
              <div className="relative h-[400px] md:h-[420px] rounded-[22px] bg-gradient-to-b from-[#140b22] via-[#0a0b10] to-[#07060a] border border-white/[0.06] p-6 overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#4b0082]/45 via-[#6d28d9]/20 to-transparent"></div>
                <div className="relative h-[220px] rounded-[16px] overflow-hidden border border-white/10 mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=80"
                    alt="Submit unlimited requests"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>
                <h4 className="text-white font-bold text-[15px] mb-2">Submit Unlimited Requests</h4>
                <p className="text-gray-400 text-[12px] leading-relaxed mb-4">
                  Enjoy the freedom to submit unlimited requests without any restrictions. Whether you need design tweaks, we're here to assist you at every step.
                </p>
                <div className="flex flex-wrap gap-2">
                  <button className="px-3.5 py-2 rounded-full text-[11px] font-bold text-white bg-gradient-to-r from-[#8a2be2] via-[#7c3aed] to-[#4b0082] shadow-[0_0_18px_rgba(168,85,247,0.45)]">
                    Book an Appointment
                  </button>
                  <button className="px-3.5 py-2 rounded-full text-[11px] font-bold text-gray-200 bg-white/5 border border-white/10">
                    What is Landin?
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative h-[230px] rounded-[20px] bg-gradient-to-b from-[#140b22] via-[#0a0b10] to-[#07060a] border border-white/[0.06] p-5 overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.55)]">
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#4b0082]/45 via-[#6d28d9]/20 to-transparent"></div>
                  <div className="relative h-[110px] rounded-[12px] overflow-hidden border border-white/10 mb-3">
                    <img
                      src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80"
                      alt="Quick turnaround"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="text-white font-bold text-[13px]">Quick Turnaround</h4>
                    <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[9px] font-bold uppercase">NEW</span>
                  </div>
                  <p className="text-gray-400 text-[11px] leading-relaxed">
                    We prioritize efficiency without compromising quality.
                  </p>
                </div>
                <div className="relative h-[230px] rounded-[20px] bg-gradient-to-b from-[#140b22] via-[#0a0b10] to-[#07060a] border border-white/[0.06] p-5 overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.55)]">
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#4b0082]/45 via-[#6d28d9]/20 to-transparent"></div>
                  <div className="relative h-[110px] rounded-[12px] overflow-hidden border border-white/10 mb-3">
                    <img
                      src="https://images.unsplash.com/photo-1556155092-8707de31f9c4?auto=format&fit=crop&w=900&q=80"
                      alt="Publish in seconds"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  </div>
                  <h4 className="text-white font-bold text-[13px] mb-2">Publish in Seconds</h4>
                  <p className="text-gray-400 text-[11px] leading-relaxed">
                    Publish your site in seconds with our streamlined process.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative h-[320px] rounded-[22px] bg-gradient-to-b from-[#140b22] via-[#0a0b10] to-[#07060a] border border-white/[0.06] p-6 overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.55)]">
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#4b0082]/45 via-[#6d28d9]/20 to-transparent"></div>
                <div className="relative h-[170px] rounded-[14px] overflow-hidden border border-white/10 mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=900&q=80"
                    alt="Requests and revisions"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <h4 className="text-white font-bold text-[14px]">Requests & Revisions</h4>
                  <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[9px] font-bold uppercase">NEW</span>
                </div>
                <p className="text-gray-400 text-[12px] leading-relaxed">
                  Our process includes multiple rounds of requests and revisions, ensuring that your feedback is incorporated and that the final product meets your expectations.
                </p>
              </div>

              <div className="relative h-[320px] rounded-[22px] bg-gradient-to-b from-[#140b22] via-[#0a0b10] to-[#07060a] border border-white/[0.06] p-6 overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.55)]">
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#4b0082]/45 via-[#6d28d9]/20 to-transparent"></div>
                <div className="relative h-[170px] rounded-[14px] overflow-hidden border border-white/10 mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80"
                    alt="References"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <h4 className="text-white font-bold text-[14px]">Worry Free Pricing</h4>
                  <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[9px] font-bold uppercase">NEW</span>
                </div>
                <p className="text-gray-400 text-[12px] leading-relaxed">
                  Whether you're just starting or scaling up, our flexible pricing plans are designed to fit your needs and budget, so you can get started without any financial stress.
                </p>
              </div>
            </div>
          </div>
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
