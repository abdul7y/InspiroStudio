import React, { useState } from "react";
import {
  Play,
  Check,
  Star,
  ArrowRight,
  Rocket,
  Power,
  X,
  Plus,
  BadgeCheck,
  Dot,
} from "lucide-react";
import { Link } from "react-router-dom";
import leftcurve from "../images/leftcurve.jpg";
import image from "../images/image.png";
import image2 from "../images/image-copy.png";
import image3 from "../images/image-copy-2.png";
import star from "../images/star-rm.png";
import avatar1 from "../images/avatar1.jpg";
import avatar2 from "../images/avatar2.jpg";
import avatar3 from "../images/avatar3.jpg";
import twitter from "../images/twitter.jpg";

import video from "../videos/Preview.mp4";

const Home: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const CALENDLY_LINK = "https://calendly.com/inspirostudio-io/30min";
  const ABOUT_VIDEO_SRC = video;

  const logos = ["LOGO", "IPSUM", "IPSUOM"];

  const portfolioItems = [
    {
      id: 1,
      title: "and",
      bgClass: "bg-gradient-to-br from-[#4f46e5] via-[#3b82f6] to-[#2563eb]",
      content: (
        // <div className="flex items-center justify-center h-full">
        //   <span className="text-white text-[120px] md:text-[200px] font-bold tracking-tighter select-none">
        //     and
        //   </span>
        // </div>
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={image}
            alt="Ocean"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div>
      ),
    },
    {
      id: 2,
      title: "The Horizon",
      bgClass: "bg-[#0f172a]",
      content: (
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={image2}
            alt="Ocean"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div>
      ),
    },
    {
      id: 3,
      title: "White Stag",
      bgClass: "bg-[#0a0a0a]",
      content: (
        <div className="relative h-full flex flex-col items-center justify-center">
          <div className="w-full">
            <img
              src={image3}
              alt="White Stag"
              className="w-full h-full h-fit object-cover object-center"
            />
          </div>

          {/* <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between space-x-3 px-3 py-2 bg-black/60 backdrop-blur-md rounded-xl border border-white/10">
            <div className="flex items-center space-x-3 w-full">
              <div className="flex items-center space-x-4 bg-black border border-white/10 px-3 py-2 rounded-lg">
                <span className="text-[10px] font-bold text-white uppercase ">
                  White Stag . 2024
                </span>
              </div>
              <div className="border-r border-gray-600 h-8" />
              <div className="p-1 bg-zinc-900 w-6xl w-full border border-white/10 rounded-lg">
                <div className="h-6 w-2xl md:w-full bg-white/10 rounded-lg overflow-hidden">
                  <div className="h-full w-2/3 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                </div>
              </div>
            </div>

            <div className="hidden sm:flex items-center space-x-3">
              <div className="border-r border-gray-600 h-8" />
              <span className="px-2 py-0.5 border border-white/10 bg-zinc-900 rounded text-[9px] text-gray-200">
                SAAS
              </span>
              <span className="px-2 py-0.5 border border-white/10 rounded bg-zinc-900 text-[9px] text-gray-200">
                Landing Page
              </span>
            </div>
          </div> */}
          <div
            className="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-3 px-4 py-2.5 
  bg-black/65 backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl md:visible invisible"
          >
            {/* Left section */}
            <div className="flex items-center gap-3 min-w-0 flex-1">
              {/* White Stag badge */}
              <div className="flex items-center gap-3.5 bg-black/80 border border-white/15 px-3.5 py-1.5 rounded-lg">
                <span className="text-[11px] md:text-xs font-bold tracking-wide text-white uppercase">
                  WHITE STAG<span className="text-white/60">.</span> 2024
                </span>
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-px h-7 bg-white/10" />

              {/* Progress bar container */}
              <div className="flex-1 h-5 bg-zinc-900/80 border border-white/10 rounded-lg overflow-hidden">
                <div
                  className="h-full w-3/5 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 rounded-lg"
                  style={{ minWidth: "20%" }} // prevents it from collapsing too much
                />
              </div>
            </div>

            {/* Right tags – hidden on mobile */}
            <div className="hidden sm:flex items-center gap-2.5 shrink-0">
              <div className="hidden sm:block w-px h-7 bg-white/10" />

              <span className="px-2.5 py-1 text-[10px] font-medium text-gray-200 bg-zinc-900/80 border border-white/10 rounded-md">
                SAAS
              </span>
              <span className="px-2.5 py-1 text-[10px] font-medium text-gray-200 bg-zinc-900/80 border border-white/10 rounded-md">
                Landing Page
              </span>
            </div>
          </div>
          <div
            className="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-3 px-3 py-2.5 
   md:invisible visible bg-black rounded-xl"
          >
            <p className="text-white text-sm">White Stag</p>
            <span className="text-white text-xs bg-zinc-900/80 backdrop-blur-xl rounded-lg px-2 py-1 border border-white/10 shadow-xl">
              2024
            </span>
          </div>
        </div>
      ),
    },
  ];

  const testimonials = [
    {
      name: "Daniel Carter",
      role: "Founder",
      company: "Innovate Solutions",
      quote:
        "Our message finally clicked. The new explainer is simple, sharp, and easy to share. They nailed the styleframes early, then the animation matched perfectly.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Daniel",
    },
    {
      name: "Emily Davis",
      role: "Product Manager",
      company: "Nexus Digital",
      quote:
        "The team understood our complex requirements and provided a user-friendly, high-performing website that stands out in the market.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    },
    {
      name: "David Lee",
      role: "Founder",
      company: "GreenLeaf Enterprises",
      quote:
        "Their innovative solutions helped streamline our operations, and the website design and development is both functional and visually stunning.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    },
  ];

  const faqItems = [
    {
      q: "What do I need to get started?",
      a: "To get started, simply book a call or send us your project brief. We will guide you through the initial requirements including brand guidelines and goals.",
    },
    {
      q: "What kind of customization is available?",
      a: "We offer full customization of animations, styleframes, and brand aesthetics to match your specific vision and messaging needs.",
    },
    {
      q: "How easy is it to edit for beginners?",
      a: "Our workflow is designed for clarity. We provide simple checkpoints and a dedicated manager so you don't need technical skills to provide feedback.",
    },
    {
      q: "Let me know more about moneyback guarantee?",
      a: "We stand by our quality. If we don't meet the agreed-upon standards or milestones, we offer transparent refund policies as per our contract.",
    },
    {
      q: "Do I need to know how to code?",
      a: "Not at all. We handle all technical aspects of video marketing and motion design for you, from concept to final export.",
    },
    {
      q: "What will I get after purchasing the template?",
      a: "You'll receive full production files, multiple format exports, and the master video optimized for your selected social and ad platforms.",
    },
  ];

  const blogSlides = [
    {
      id: 1,
      title: "Basel",
      client: "Crimson Studio",
      badge: "NEW",
      description:
        "Achieved a increase in sales within six months through a customized strategy.",
      stats: ["30% Increase in Sales", "40% Boost in Retention"],
      image:
        "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
      accent: "from-emerald-500/20 via-emerald-400/10 to-transparent",
    },
    {
      id: 2,
      title: "A",
      client: "Raven Company Inc",
      badge: "HIGH",
      description:
        "Streamlined operations, reducing costs by with our automation solutions.",
      stats: ["25% Conversion Rates", "50% Reduced in CPA"],
      image:
        "https://images.unsplash.com/photo-1545239351-ef35f43d514b?auto=format&fit=crop&w=1200&q=80",
      accent: "from-indigo-500/20 via-sky-500/10 to-transparent",
    },
    {
      id: 3,
      title: "Manila.",
      client: "Gotham Wonder",
      badge: "FRESH",
      description:
        "Boosted customer engagement with a digital presence and targeted campaigns.",
      stats: ["80% Increased Traffic", "35% Growth in Sales"],
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      accent: "from-blue-500/20 via-violet-500/10 to-transparent",
    },
  ];
  const blogSlidesLoop = [...blogSlides, ...blogSlides];

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className=" min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center px-8 md:px-16 lg:px-24 overflow-hidden bg-gradient-to-r from-black via-black to-fuchsia-900">
        {/* Add a radial gradient overlay for extra depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black to-fuchsia-600/40"></div>

        <div className="max-w-[1440px] mx-auto w-full pt-32 pb-40">
          <div className="max-w-[900px] relative z-10">
            <div className="flex items-center space-x-2 mb-10">
              <div className="bg-white/10 px-1 pr-2 py-1.5 rounded-xl flex justify-between items-center gap-2 border border-white/10 backdrop-blur-sm">
                <span className="bg-[#2563eb] text-[11px] font-black px-2 py-1 rounded-md text-white uppercase tracking-tight">
                  NEW
                </span>
                <span className="text-[13px] font-medium text-gray-300">
                  No. 1 Studio of 2025
                </span>
              </div>
            </div>

            <h1 className="text-[60px] md:text-[80px] lg:text-[100px]  text-white mb-8 tracking-[-0.03em] leading-[1.05]">
              Video Marketing Agency For <br className="hidden lg:block" /> AI &
              SaaS
            </h1>

            <p className="text-[#a1a1aa] text-lg md:text-[19px] mb-12 max-w-[620px] leading-relaxed font-normal">
              We make stories, animate them, make them sound vibrant and dress
              then with music, so that your business starts booming like a
              rocket.
            </p>

            <div className="flex flex-col items-start mb-24">
              <a
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-btn-custom px-10 py-[18px] rounded-xl text-white font-bold text-[15px] tracking-tight mb-12 shadow-lg shadow-blue-500/50"
              >
                Book a Call
              </a>

              <div className="relative w-full max-w-[400px] overflow-hidden opacity-30 grayscale select-none pointer-events-none">
                <div className="animate-infinite-scroll flex items-center py-2">
                  {[...logos, ...logos, ...logos].map((logo, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 mx-8"
                    >
                      <div className="w-3.5 h-3.5 bg-white rounded-[1px]"></div>
                      <span className="text-[16px] font-black tracking-tighter text-white whitespace-nowrap uppercase">
                        {logo}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="waves-container">
            <div className="wave wave-3"></div>
            <div className="wave wave-2"></div>
            <div className="wave"></div>
          </div> */}
      </section>

      {/* 2. Portfolio Section */}
      <section className="relative px-8 lg:px-16 p-8 lg:px-0 bg-black overflow-hidden">
        <div className="relative w-full bg-black overflow-hidden 2xl:py-28 py-32">
          {/* LEFT CURVE */}
          <img
            src={leftcurve}
            alt="Left Curve"
            className="absolute lg:left-0 lg:top-1/2 -bottom-10 -translate-y-1/2 
               w-[40%] 2xl:max-w-[400px] lg:max-w-[300px] md:max-w-[200px]  
               pointer-events-none select-none"
          />

          {/* RIGHT CURVE */}
          <img
            src={leftcurve}
            alt="Right Curve"
            className="absolute lg:right-0 lg:top-1/2 -bottom-10 right-1 -translate-y-1/2 -scale-x-100 
               w-[40%] 2xl:max-w-[400px] lg:max-w-[300px] md:max-w-[200px]  
               pointer-events-none select-none"
          />

          {/* CENTER CONTENT */}
          <div className="relative z-10 max-w-[900px] mx-auto px-6 text-center flex flex-col items-center">
            {/* BADGE */}
            <div
              className="inline-block rounded-lg bg-gradient-to-r 
                    from-transparent via-blue-700/60 to-transparent 
                    p-[1px] mb-8"
            >
              <div
                className="inline-flex items-center space-x-2 px-4 py-2 
                      rounded-lg border-x border-gray-800 
                      bg-black backdrop-blur-xl"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                <span className="text-xs text-gray-200 tracking-widest uppercase">
                  Portfolio
                </span>
              </div>
            </div>

            {/* HEADLINES */}
            <h2
              className="lg:text-[48px] 2xl:text-[72px] text-4xl   
                   text-white tracking-tight leading-[1.05]"
            >
              Portfolio
            </h2>

            <h3
              className="lg:text-[40px] 2xl:text-[56px] text-4xl font-medium 
                   text-gray-400 tracking-tight leading-[1.05] mt-2"
            >
              Product Success Stories
            </h3>

            <p className="text-gray-400 max-w-[560px] mt-6 text-lg">
              Explainers, onboarding, launch films and social content built to
              be watched and understood.
            </p>

            {/* CTA */}
            <div className="relative group mt-12">
              <div
                className="absolute -inset-[4px] 
                      bg-gradient-to-r 
                      from-[#8a2be2] via-[#7c3aed] to-[#4b0082] 
                      rounded-full blur-[18px] 
                      opacity-70 group-hover:opacity-100 
                      transition duration-500"
              ></div>

              <Link
                to="/blogs"
                className="relative inline-flex items-center justify-center 
                   px-10 py-3 rounded-xl 
                   bg-gradient-to-r 
                   from-[#8a2be2] via-[#7c3aed] to-[#4b0082] 
                   text-white text-sm font-semibold 
                   border border-white/20 
                   shadow-[0_0_30px_rgba(168,85,247,0.5)]
                   shadow-lg shadow-blue-500/50
                   "
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-[1100px] mx-auto pb-[10vh] relative z-10 scroll-snap-y scroll-smooth overflow-y-auto h-screen sidebar-hide px-6">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="sticky top-24 w-full aspect-video rounded-[32px] md:rounded-[40px] overflow-hidden border border-white/10 mb-[20vh] group cursor-pointer"
              style={{ zIndex: index + 1 }}
            >
              <div
                className={`w-full h-full ${item.bgClass} relative overflow-hidden`}
              >
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

      <section className="relative px-8 md:px-16 lg:px-24 bg-black overflow-hidden">
        <div className="max-w-[1440px] w-full ">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 xl:gap-4 lg:gap-10 gap-10 mitems-center">
            <div className="flex justify-center lg:justify-start  gap-2 order-2 lg:order-1">
              <div className="relative w-full max-w-[500px]">
                <div className="relative aspect-square w-full rounded-[32px] shadow-2xl shadow-blue-700/60  border border-white/10 overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.7)]">
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
                  <div className="absolute bottom-5 left-6 text-[10px] uppercase tracking-[0.35em] text-white/70">
                    Video Preview
                  </div>
                </div>
              </div>
            </div>

            <div className="md:space-y-4 space-y-8 order-1 lg:order-2 text-left lg:text-left">
              {/* <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em]">
                    About Inspiro
                  </span>
                </div> */}
              <div className="inline-block rounded-lg bg-gradient-to-r from-transparent via-blue-700/60 to-transparent p-[1px] mb-4">
                <div
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg border-r border-l border-gray-800
                  bg-black backdrop-blur-xl"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                  <span className="text-xs text-gray-200 tracking-widest">
                    About Inspiro
                  </span>
                </div>
              </div>
              <div>
                <h2 className="text-[38px] md:text-[52px]  text-white leading-[1.08] tracking-tight mb-4">
                  Building Stronger Brands
                </h2>
                <h3 className="text-[30px] md:text-[44px] text-gray-400 leading-[1.1] tracking-tight">
                  Across 30+ Countries
                </h3>
              </div>

              <p className="text-[15px] md:text-[16px] text-gray-400 leading-relaxed max-w-[520px]">
                Delivering expert solutions that transform modern businesses.
                Driving innovation globally, partnering with clients for impact.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300 text-[14px]">
                  <span className="w-5 h-5 rounded-full bg-blue-700 flex items-center justify-center">
                    <BadgeCheck className="w-full h-full " />
                  </span>
                  <span>From $0 to $500,000 in revenue.</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 text-[14px]">
                  <span className="w-5 h-5 rounded-full bg-blue-700 flex items-center justify-center">
                    <BadgeCheck className="w-full h-full " />
                  </span>
                  <span>70% growth in new customers.</span>
                </div>
              </div>

              <div className="flex flex-col-reverse md:flex-row md:items-center gap-6">
                <button className="relative inline-flex w-fit items-center justify-center px-6 py-2.5 rounded-xl text-white text-[13px] font-bold tracking-tight bg-gradient-to-r from-[#8a2be2] via-[#7c3aed] to-[#4b0082] shadow-lg shadow-blue-500/50 border border-white/20">
                  About Inspiro
                </button>
                <div className="hidden sm:block w-px h-6 bg-gray-700"></div>
                <div className="px-1 py-2">
                  <div className="flex flex-col items-start gap-2">
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          className="w-3 h-3 text-white fill-white"
                        />
                      ))}
                    </div>
                    <span className="text-[12px] text-gray-400">
                      200+ Agencies Rated
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Blogs Section */}
      <section className="relative bg-black overflow-hidden">
        
        <div className="relative w-full bg-black overflow-hidden xl:mt-24 md:py-20 py-40">
          {/* LEFT CURVE */}
          <img
            src={leftcurve}
            alt="Left Curve"
            className="absolute lg:left-0 lg:top-1/2 -bottom-5 -translate-y-1/2 w-[35%] 2xl:max-w-[350px] lg:max-w-[250px] md:max-w-[200px] pointer-events-none"
          />

          {/* RIGHT CURVE */}
          <img
            src={leftcurve}
            alt="Right Curve"
            className="absolute lg:right-0 lg:top-1/2 -bottom-5 right-1 -scale-x-100 -translate-y-1/2 w-[35%] 2xl:max-w-[350px] lg:max-w-[250px] md:max-w-[200px]  pointer-events-none"
          />

          {/* CENTER CONTENT */}
          <div className="relative z-10 max-w-[900px] mx-auto text-center px-6 flex flex-col items-center">
            {/* BLOG BADGE */}
            <div className="inline-block rounded-lg bg-gradient-to-r from-transparent via-blue-700/60 to-transparent p-[1px] mb-6">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg border-x border-gray-800 bg-black backdrop-blur-xl">
                <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                <span className="text-xs text-gray-200 tracking-widest">
                  BLOGS
                </span>
              </div>
            </div>

            {/* HEADINGS */}
            <h2 className="text-4xl 2xl:text-[56px] lg:text-[40px] text-white tracking-tight leading-[1.05]">
              Delivering Tangible Results
            </h2>

            <h3 className="text-4xl 2xl:text-[56px] lg:text-[40px]  text-gray-400 tracking-tight leading-[1.05]">
              That Propel Your Success
            </h3>

            <p className="text-lg text-gray-400 mt-6 max-w-[540px] md:visible invisible">
              Animation is not decoration. It is a faster way to explain,
              launch, and sell.
            </p>
            <p className="text-lg text-gray-400 md:invisible visible max-w-[540px]">
              Effortlessly connect with your favorite tools. Whether it's your CRM, email marketing platform.
            </p>

            {/* CTA */}
            <div className="relative group mt-10">
              <div className="absolute -inset-[4px] bg-gradient-to-r from-[#8a2be2] via-[#7c3aed] to-[#4b0082] rounded-full blur-[20px] opacity-70 group-hover:opacity-100 transition duration-500"></div>

              <a
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center px-8 py-3 rounded-xl bg-gradient-to-r from-[#8a2be2] via-[#7c3aed] to-[#4b0082] text-white text-sm font-semibold border border-white/20 shadow-[0_0_30px_rgba(168,85,247,0.5)] shadow-lg shadow-blue-500/50 transition duration-300"
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
                // <div className="p-3 border border-zinc-600 rounded-[20px]">
                //   <div
                //     key={`${card.id}-${index}`}
                //     className="w-[320px] sm:w-[360px] md:w-[400px] lg:w-[460px] xl:w-[520px] flex-shrink-0"
                //     aria-hidden={index >= blogSlides.length}
                //   >
                //     <div className="relative h-[420px] md:h-[460px] lg:h-[480px] bg-[#0a0b0f] border border-white/[0.06] rounded-[20px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6)] flex flex-col">
                //       <div
                //         className={`absolute inset-0 bg-gradient-to-b ${card.accent} opacity-70 pointer-events-none`}
                //       ></div>
                //       <div className="relative h-[56%] overflow-hidden">
                //         <img
                //           src={card.image}
                //           alt={card.title}
                //           className="w-full h-full object-cover opacity-80"
                //         />
                //         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                //       </div>

                //       <div className="relative p-5 flex-1 flex flex-col">
                //         <div className="flex items-center justify-between mb-2">
                //           <span className="text-white text-[15px] font-bold">
                //             {card.title}
                //           </span>
                //           <span className="px-2 py-0.5 rounded-ful                                                                                                                                                                                                          l bg-blue-500/20 text-blue-300 text-[9px] font-bold tracking-wide uppercase">
                //             {card.badge}
                //           </span>
                //         </div>
                //         <p className="text-[12px] text-gray-400 font-medium mb-3">
                //           {card.client}
                //         </p>
                //         <p className="text-[12px] text-gray-500 leading-relaxed mb-4 flex-1">
                //           {card.description}
                //         </p>
                //         <div className="flex items-center space-x-2">
                //           <span className="px-2 py-1 rounded-full bg-white/5 text-[10px] text-gray-300 border border-white/10">
                //             {card.stats[0]}
                //           </span>
                //           <span className="px-2 py-1 rounded-full bg-white/5 text-[10px] text-gray-300 border border-white/10">
                //             {card.stats[1]}
                //           </span>
                //         </div>
                //       </div>
                //     </div>
                //   </div>
                // </div>
                <div className="relative p-[2px] rounded-[28px] border border-zinc-600 bg-gradient-to-b from-white/10 to-white/5">
                  {/* OUTER FRAME */}
                  <div className="rounded-[26px] bg-[#05060a] p-2 shadow-[0_40px_120px_rgba(0,0,0,0.9)]">
                    <div
                      key={`${card.id}-${index}`}
                      className="w-[320px] sm:w-[360px] md:w-[420px] lg:w-[480px] xl:w-[520px] "
                      aria-hidden={index >= blogSlides.length}
                    >
                      {/* MAIN CARD */}
                      <div
                        className="relative h-[500px] bg-[#0b0c10] border border-zinc-800
                      rounded-[22px] overflow-hidden flex flex-col p-3 "
                      >
                        {/* IMAGE SECTION */}
                        {/* <div className="relative h-[58%] overflow-hidden"> */}
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover scale-105 opacity-70"
                        />
                        <div
                          className="absolute inset-0 bg-gradient-to-t 
                          from-black via-black/40 to-transparent bottom-0"
                        />
                        {/* </div> */}

                        {/* CONTENT SECTION */}
                        <div
                          className="absolute bottom-0 m-3 left-0 right-0 flex-1 bg-[#0a0b0f] p-6 
                        border border-zinc-800 
                        rounded-[21px] -mt-6"
                        >
                          {/* LOGO / ICON */}
                          <div className="mb-4">
                            <div
                              className="
                            rounded-md flex text-start "
                            >
                              <h1 className="text-white text-2xl font-bold tracking-tight">
                                {card.title}
                              </h1>
                            </div>
                          </div>

                          {/* TITLE */}
                          <h3 className="text-white text-[20px] font-semibold mb-2 flex items-center gap-2">
                            {card.client}{" "}
                            <span className="bg-blue-700 text-[10px] font-semibold px-2 py-0.5 rounded">
                              {card.badge}
                            </span>
                          </h3>

                          <div className="border-t border-zinc-500 w-24 rounded-full mb-4"></div>
                          {/* DESCRIPTION */}
                          <p className="text-zinc-400 text-[14px] leading-relaxed mb-6">
                            {card.description}
                          </p>

                          {/* STATS PILLS */}
                          <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
                            <span
                              className="px-4 py-2 rounded-lg 
                             bg-white/[0.04] border border-white/[0.08] 
                             text-gray-400 text-sm font-medium text-center"
                            >
                              {card.stats[0]}
                            </span>
                            <span
                              className="px-4 py-2 rounded-lg 
                             bg-white/[0.04] border border-white/[0.08] 
                             text-gray-400 text-sm font-medium text-center"
                            >
                              {card.stats[1]}
                            </span>
                          </div>
                        </div>
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
      <section className="relative px-8 md:px-16 lg:px-24 overflow-hidden bg-black">
        {/* <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-[radial-gradient(circle_at_70%_20%,rgba(59,130,246,0.18),transparent_60%)]"></div>
          <div className="absolute -top-20 right-10 w-[40%] h-[40%] bg-[radial-gradient(circle,rgba(168,85,247,0.18),transparent_65%)]"></div>
          <div
            className="absolute top-0 right-0 w-[65%] h-[40%] bg-[#0b1628]/80"
            style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%, 62% 100%)" }}
          ></div>
        </div> */}

        <div className="max-w-[1440px] mx-auto relative z-10 mt-32 ">
          {/* <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em]">
              Landin Benefits
            </span>
          </div> */}
          <div
            className="inline-block rounded-lg bg-gradient-to-r 
                    from-transparent via-blue-700/60 to-transparent 
                    p-[1px] mb-8"
          >
            <div
              className="inline-flex items-center space-x-2 px-4 py-2 
                      rounded-lg border-x border-gray-800 
                      bg-black backdrop-blur-xl"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              <span className="text-xs text-gray-200 tracking-widest uppercase">
                Landin Benefits
              </span>
            </div>
          </div>

          <h2 className="text-[30px] md:text-[44px] text-white leading-[1.1] tracking-tight">
            We Just Don't Design, We Build.
          </h2>
          <h3 className="text-[26px] md:text-[40px]  text-gray-400 leading-[1.1] tracking-tight">
            If You Can Dream It, We Can Play It!
          </h3>

          <div className="mt-6 flex flex-wrap max-w-2xl w-full items-center gap-2 text-[11px] md:text-[12px]">
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
              "User-Friendly",
            ].map((chip) => (
              <span
                key={chip}
                className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-gray-300"
              >
                {chip}
              </span>
            ))}
            <button className="ml-1 px-3.5 py-1 rounded-full bg-white text-black text-[11px] font-bold shadow-[0_0_18px_rgba(255,255,255,0.2)]">
              Contact Now
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-8 mt-10">
            <div className="space-y-6">
              <div className="relative w-full md:h-[420px]  2xl:h-[430px] lg:h-[450px] rounded-[26px] bg-gradient-to-br from-[#1a0f2e] via-[#0b0b12] to-black border border-violet-950 p-5 shadow-[0_35px_90px_rgba(0,0,0,0.7)] overflow-hidden">
                {/* bottom purple glow */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-tr from-[#7c3aed]/40 via-[#9333ea]/20 to-transparent blur-2xl"></div>

                {/* Image container */}
                <div className="relative h-[230px] rounded-[18px] overflow-hidden border border-white/10 mb-5">
                  <img
                    src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=80"
                    alt="Submit Unlimited Requests"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                </div>

                {/* Content */}
                <h3 className="text-white font-semibold text-[15px] mb-2">
                  Submit Unlimited Requests
                </h3>

                <div className="border border-violet-500/30 w-24 mb-3" />

                <p className="text-violet-100 text-[13px] leading-relaxed mb-4">
                  Enjoy the freedom to submit unlimited requests without any
                  restrictions. Whether you need design tweaks, we're here to
                  assist you at every step.
                </p>

                {/* Buttons */}
                <div className="flex gap-3">
                  <button className="px-4 py-2 rounded-lg text-[12px] font-semibold text-white bg-gradient-to-r from-[#a855f7] via-[#7c3aed] to-[#5b21b6] shadow-[0_0_20px_rgba(168,85,247,0.55)] hover:scale-[1.03] transition">
                    Book an Appointment
                  </button>

                  <button className="px-4 py-2 rounded-lg text-[12px] font-semibold text-white bg-gradient-to-r from-[#a855f7] via-[#7c3aed] to-[#5b21b6] shadow-[0_0_20px_rgba(168,85,247,0.55)] hover:scale-[1.03] transition">
                    What is Landin?
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative 2xl:h-[250px] lg:h-[280px] rounded-[20px] bg-gradient-to-br from-[#1a0f2e] via-[#0b0b12] to-black border border-violet-950 p-5 overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.55)]">
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-tr from-[#7c3aed]/40 via-[#9333ea]/20 to-transparent blur-2xl"></div>
                  <div className="relative h-[110px] rounded-[12px] overflow-hidden border border-white/10 mb-3">
                    <img
                      src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80"
                      alt="Quick turnaround"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="text-white font-bold text-[13px]">
                      Quick Turnaround
                    </h4>
                    <span className="px-2 py-0.5 rounded bg-blue-700 border-2 border-blue-600 text-white text-[8px] font-bold uppercase">
                      NEW
                    </span>
                  </div>
                  <div className="border border-violet-500/30 w-24 mb-3" />

                  <p className="text-violet-100 text-[13px] leading-relaxed">
                    We prioritize efficiency without compromising quality.
                  </p>
                </div>

                <div className="relative 2xl:h-[250px] lg:h-[280px] rounded-[20px] bg-gradient-to-br from-[#1a0f2e] via-[#0b0b12] to-black border border-violet-950 p-5 overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.55)]">
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-tr from-[#7c3aed]/40 via-[#9333ea]/20 to-transparent blur-2xl"></div>
                  <div className="relative h-[110px] rounded-[12px] overflow-hidden border border-white/10 mb-3">
                    <img
                      src="https://images.unsplash.com/photo-1556155092-8707de31f9c4?auto=format&fit=crop&w=900&q=80"
                      alt="Publish in seconds"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  </div>
                  <h4 className="text-white font-bold text-[13px] mb-2">
                    Publish in Seconds
                  </h4>
                  <div className="border border-violet-500/30 w-24 mb-3" />

                  <p className="text-violet-100 text-[13px] leading-relaxed">
                    Publish your site in seconds with our streamlined process.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative  2xl:h-[340px] lg:h-[360px] rounded-[22px] bg-gradient-to-br from-[#1a0f2e] via-[#0b0b12] to-black border border-violet-950 p-6 overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.55)]">
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-tr from-[#7c3aed]/40 via-[#9333ea]/20 to-transparent blur-2xl"></div>
                <div className="relative h-[170px] rounded-[14px] overflow-hidden border border-white/10 mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=900&q=80"
                    alt="Requests and revisions"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <h4 className="text-white font-bold text-[14px]">
                    Requests & Revisions
                  </h4>
                  <span className="px-2 py-0.5 rounded bg-blue-700 border-2 border-blue-600 text-white text-[8px] font-bold uppercase">
                    NEW
                  </span>
                </div>
                <div className="border border-violet-500/30 w-24 mb-3" />

                <p className="text-violet-100 text-[13px] leading-relaxed">
                  Our process includes multiple rounds of requests and
                  revisions, ensuring that your feedback is incorporated and
                  that the final product meets your expectations.
                </p>
              </div>

              <div className="relative 2xl:h-[340px] lg:h-[360px] rounded-[22px] bg-gradient-to-br from-[#1a0f2e] via-[#0b0b12] to-black border border-violet-950 p-6 overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.55)]">
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-tr from-[#7c3aed]/40 via-[#9333ea]/20 to-transparent blur-2xl"></div>
                <div className="relative h-[170px] rounded-[14px] overflow-hidden border border-white/10 mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80"
                    alt="References"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <h4 className="text-white font-bold text-[14px]">
                    Worry Free Pricing
                  </h4>
                  <span className="px-2 py-0.5 rounded bg-blue-700 border-2 border-blue-600 text-white text-[8px] font-bold uppercase">
                    NEW
                  </span>
                </div>
                <div className="border border-violet-500/30 w-24 mb-3" />

                <p className="text-violet-100 text-[13px] leading-relaxed">
                  Whether you're just starting or scaling up, our flexible
                  pricing plans are designed to fit your needs and budget, so
                  you can get started without any financial stress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* PRICING SECTION */}
      <section className="relative px-8 md:px-16 lg:px-24 py-40 overflow-hidden bg-black">
        {/* background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-64 bg-purple-600/10 blur-[120px]" />
        </div>

        <div className="max-w-[1440px] mx-auto relative z-10">
          {/* heading */}
          <div className="max-w-3xl mb-20">
            <div className="inline-block rounded-lg bg-gradient-to-r from-transparent via-blue-700/60 to-transparent p-[1px] mb-6">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg border-x border-gray-800 bg-black backdrop-blur-xl">
                <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                <span className="text-xs text-gray-200 tracking-widest">
                  Pricing
                </span>
              </div>
            </div>

            <h2 className="text-3xl md:text-[44px] text-white tracking-tight leading-[1.05]">
              Plans for all businesses, Suitable for
            </h2>
            <h3 className="text-3xl md:text-[44px] text-gray-400 tracking-tight leading-[1.1] mt-2">
              Personal, Agencies, Startups.
            </h3>

            <p className="text-zinc-500 text-[18px] mt-6 max-w-2xl leading-relaxed">
              Our pricing plans are designed to make getting started as
              effortless as possible. With flexible options tailored to suit a
              variety of needs and budgets.
            </p>
          </div>

          {/* cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* PRO WEEKLY */}

            <div
              className="relative w-full rounded-[30px] border border-white/[0.08] 
                  bg-gradient-to-br from-[#070b1a] via-[#050814] to-black 
                  shadow-[0_45px_140px_rgba(0,0,0,0.85)] overflow-hidden"
            >
              {/* top blue glow */}
              <div className="absolute inset-0 bg-[radial-gradient(85%_65%_at_20%_0%,rgba(59,130,246,0.22),transparent_60%)]" />

              <div className="relative p-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex flex-col  items-start gap-3">
                    <div className="px-5 py-4 rounded-xl bg-slate-900 shadow-xl shadow-blue-900 border border-blue-900 flex items-center justify-center">
                      <Rocket />
                    </div>
                    <span className="text-white font-semibold text-[15px]">
                      Pro Weekly
                    </span>
                  </div>

                  <span
                    className="px-3 py-2 rounded-lg bg-blue-500/10 border bg-gradient-to-t from-gray-500/20 to-blue-900/20 border-blue-500/20 
        text-[13px] font-semibold text-blue-100"
                  >
                    Most Pick
                  </span>
                </div>

                {/* Price */}
                <div className="relative mb-6">
                  <div className="flex items-end gap-2">
                    <span className="text-white text-[44px] ">$790</span>
                    <span className="text-gray-500 text-[14px] mb-3">
                      /Month
                    </span>

                    {/* diagonal old price */}
                    <span className=" text-gray-600 text-[44px] line-through opacity-70">
                      $1450
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-[14px] leading-relaxed mb-7">
                  Our basic pricing plan is designed to offer great value while
                  providing the essential features you need to get started.
                </p>

                {/* Pills */}
                <div className="flex gap-3 mb-8">
                  <span className="px-4 py-1.5 rounded-lg  bg-blue-500/10 border border-white/10 text-[13px] ">
                    <b>100+</b> <span className="text-gray-400">Projects</span>
                  </span>
                  <span className="px-4 py-1.5 rounded-lg bg-blue-500/10 border border-white/10 text-[13px] text-gray-300">
                    <b>75+</b> <span className="text-gray-400">Revisions</span>
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-10 text-[13px]">
                  {[
                    "1 Dedicated Expert Product Designer",
                    "Up to 40 hours per week",
                    "Daily Updates",
                    "Real-Time Communication and Collaboration",
                    "One Project at a time",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <span className="w-5 h-5 rounded-full bg-blue-700 text-white flex items-center justify-center text-[11px]">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={CALENDLY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center px-6 py-3 rounded-lg 
      text-white text-[14px] font-semibold tracking-tight w-full max-w-[300px]
      bg-gradient-to-r from-[#a855f7] via-[#7c3aed] to-[#4c1d95]
      shadow-[0_0_35px_rgba(168,85,247,0.6)]
      hover:scale-[1.04] transition-all"
                >
                  Book an Appointment
                </a>
              </div>
            </div>

            {/* PREMIUM */}
            <div
              className="relative w-full rounded-[30px] border border-white/[0.08] 
                  bg-gradient-to-br from-[#070b1a] via-[#050814] to-black 
                  shadow-[0_45px_140px_rgba(0,0,0,0.85)] overflow-hidden"
            >
              {/* top indigo/blue glow */}
              <div className="absolute inset-0 bg-[radial-gradient(85%_65%_at_20%_0%,rgba(59,130,246,0.22),transparent_60%)]" />

              <div className="relative p-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex flex-col items-start gap-3">
                    <div className="px-5 py-4 rounded-xl bg-slate-900 shadow-xl shadow-blue-900 border border-blue-900 flex items-center justify-center">
                      <Power /> {/* or Rocket if you want consistency */}
                    </div>

                    <span className="text-white font-semibold text-[15px]">
                      Premium
                    </span>
                  </div>

                  <span
                    className="px-3 py-2 rounded-lg bg-blue-500/10 border bg-gradient-to-t from-gray-500/20 to-blue-900/20 border-blue-500/20 
        text-[13px] font-semibold text-blue-100"
                  >
                    Recommended
                  </span>
                </div>

                {/* Price */}
                <div className="relative mb-6">
                  <div className="flex items-end gap-2">
                    <span className="text-white text-[44px]">$2,599</span>
                    <span className="text-gray-500 text-[14px] mb-3">
                      /Month
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-[14px] leading-relaxed mb-7">
                  Our premium pricing plan is designed for businesses looking
                  for advanced features and priority-level support.
                </p>

                {/* Pills */}
                <div className="flex gap-3 mb-8">
                  <span className="px-4 py-1.5 rounded-lg bg-blue-500/10 border border-white/10 text-[13px]">
                    <b>650+</b> <span className="text-gray-400">Projects</span>
                  </span>
                  <span className="px-4 py-1.5 rounded-lg bg-blue-500/10 border border-white/10 text-[13px]">
                    <b>250+</b> <span className="text-gray-400">Revisions</span>
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-10 text-[13px]">
                  {[
                    "Dedicated Expert Product Designer",
                    "Up to 40 hours per week",
                    "Daily Updates",
                    "Real-Time Communication and Collaboration",
                    "One Project at a time",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <span className="w-5 h-5 rounded-full bg-blue-700 text-white flex items-center justify-center text-[11px]">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={CALENDLY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center px-6 py-3 rounded-lg 
      text-white text-[14px] font-semibold tracking-tight w-full max-w-[300px]
      bg-gradient-to-r from-[#a855f7] via-[#7c3aed] to-[#4c1d95]
      shadow-[0_0_35px_rgba(168,85,247,0.6)]
      hover:scale-[1.04] transition-all"
                >
                  Book an Appointment
                </a>
                <img
                  src={star}
                  alt="Star"
                  className="absolute bottom-0 right-1/2 -translate-x-1/2 opacity-20 mx-auto mt-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonial Section – Dark Premium SaaS Glassmorphism */}
      <section className="relative overflow-hidden bg-black">
        {/* ambient background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-72 bg-purple-600/20 blur-[140px]" />
          <div
            className="absolute left-0 top-[35%] w-[30%] h-[45%] bg-[#050914]"
            style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
          />
          <div
            className="absolute right-0 top-[35%] w-[30%] h-[45%] bg-[#050914]"
            style={{ clipPath: "polygon(100% 0, 100% 100%, 0 0)" }}
          />
        </div>

        <div className="relative w-full bg-black w-full overflow-hidden xl:mt-24 py-20 px-10">
          <img
            src={leftcurve}
            alt=""
            className="absolute lg:left-0 lg:top-1/2 left-0 -bottom-5 -translate-y-1/2 w-[35%] 2xl:max-w-[350px] lg:max-w-[280px]   pointer-events-none"
          />

          <div className="text-center max-w-3xl mx-auto mb-28 flex flex-col items-center  relative z-10">
            <div
              className="inline-block rounded-lg bg-gradient-to-r 
                    from-transparent via-blue-700/60 to-transparent 
                    p-[1px] mb-8"
            >
              <div
                className="inline-flex items-center space-x-2 px-4 py-2 
                      rounded-lg border-x border-gray-800 
                      bg-black backdrop-blur-xl"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                <span className="text-xs text-gray-200 tracking-widest uppercase">
                  Testimonial
                </span>
              </div>
            </div>

            <h2 className="text-4xl md:text-[48px] text-white tracking-tight leading-[1.05]">
              Customer Reviews About
            </h2>

            <h3 className="text-4xl md:text-[48px] text-gray-400 tracking-tight leading-[1.1] mt-2">
              Process and Final Quality
            </h3>

            <p className="text-zinc-500 font-semibold text-[15px] mt-6 w-full max-w-lg mx-auto">
              We keep it easy: clear checkpoints, fast feedback loops, and work
              that looks sharp on launch day.
            </p>
            <div className="relative w-full max-w-[400px] mt-8 overflow-hidden opacity-30 grayscale select-none pointer-events-none">
              <div className="animate-infinite-scroll flex items-center py-2">
                {[...logos, ...logos, ...logos].map((logo, index) => (
                  <div key={index} className="flex items-center space-x-3 mx-8">
                    <div className="w-3.5 h-3.5 bg-white rounded-[1px]"></div>
                    <span className="text-[25px] font-black tracking-tighter text-white whitespace-nowrap uppercase">
                      {logo}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <a
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 rounded-lg
              text-white text-[14px] font-bold tracking-tight
              bg-gradient-to-r from-[#a855f7] via-[#7c3aed] to-[#4c1d95]
              shadow-[0_0_35px_rgba(168,85,247,0.6)]
              hover:scale-[1.05] transition-all  shadow-lg shadow-blue-500"
              >
                Let’s Work Together
              </a>
            </div>
          </div>

          <img
            src={leftcurve}
            alt=""
            className="absolute lg:right-0 lg:top-1/2 right-1 -bottom-5 -scale-x-100 -translate-y-1/2 w-[35%] 2xl:max-w-[350px] lg:max-w-[280px]  pointer-events-none"
          />
        </div>

        <div className="max-w-[1440px] mx-auto relative z-10">
          {/* header */}

          {/* testimonial cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 2xl:px-32 lg:px-22 md:px-16 px-8">
            {[
              {
                image: avatar1,
                name: "Daniel Carter",
                role: "Founder",
                company: "Innovate Solutions",
                text: "Our message finally clicked. The new explainer is simple, sharp, and easy to share. They nailed the styleframes early, then the animation matched perfectly.",
              },
              {
                image: avatar2,
                name: "Emily Davis",
                role: "Product Manager",
                company: "Nexus Digital",
                text: "The team understood our complex requirements and delivered a user-friendly, high-performing product.",
              },
              {
                image: avatar3,
                name: "David Lee",
                role: "Founder",
                company: "GreenLeaf Enterprises",
                text: "Their execution balanced visual polish with functional clarity. A very rare combination.",
              },
              {
                image: avatar3,
                name: "Mark Thompson",
                role: "Creative Director",
                company: "PixelWorks Studio",
                text: "Strong process, sharp design sense, and excellent communication throughout the project.",
              },
              {
                image: avatar2,
                name: "Brian Clark",
                role: "Team Lead",
                company: "Mono Design",
                text: "Everything was structured, predictable, and clean. The outcome exceeded expectations.",
              },
              {
                image: avatar1,
                name: "Daniel Carter",
                role: "Founder",
                company: "Fusion Studio",
                text: "A premium experience from start to finish. The final result feels intentional and refined.",
              },
            ].map((t, idx) => (
              <div
                key={idx}
                className="relative h-full flex flex-col rounded-[26px]
              bg-gradient-to-t from-[#010c22] via-[#010c22] to-black
              backdrop-blur-xl
              border-t 
              border-blue-800
              p-8
              shadow-[0_30px_90px_rgba(0,0,0,0.9)]
              hover:border-white/[0.12]
              transition-all duration-500"
              >
                {/* top */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex flex-col items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white font-bold">
                      {/* {t.name.charAt(0)} */}
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <div className="flex gap-[2px] text-white text-[11px]">
                      {Array.from({ length: 5 }, () => (
                        <Star
                          fill="white"
                          strokeWidth={0}
                          className="h-4 w-4"
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-gray-700 text-sm">
                    <img
                      src={twitter}
                      alt="Twitter"
                      className="w-6 h-6 opacity-40"
                    />
                  </span>
                </div>

                {/* content */}
                <p className="text-zinc-400  text-[14px] leading-relaxed mb-10">
                  “{t.text}”
                </p>

                {/* footer */}
                <div className="mt-auto pt-6 border-t border-white/[0.06]">
                  <div className="text-white font-semibold flex items-center gap-0.5 text-[14px]">
                    {t.name} <Dot />
                    {t.role}
                  </div>
                  <div className="text-gray-500 font-semibold text-[13px]">
                    {t.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 8. FAQ Section */}
      <section className="relative py-40 px-8 md:px-16 lg:px-24 overflow-hidden bg-black">
        {/* <div className="absolute inset-0 bg-gradient-to-b from-[#08030b] via-[#1a0a1e] to-[#0a050f] pointer-events-none"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-600/50 to-transparent z-20"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-purple-600/10 blur-[80px] pointer-events-none z-10"></div>
         */}

        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div className="flex flex-col items-start pt-4">
              {/* <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#1a0a1e]/80 border border-white/[0.05] mb-10 backdrop-blur-xl">
                <span className="w-1 h-1 rounded-full bg-blue-400"></span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.25em]">
                  FAQ
                </span>
              </div> */}
              <div
                className="inline-block rounded-lg bg-gradient-to-r 
                    from-transparent via-blue-700/60 to-transparent 
                    p-[1px] mb-8"
              >
                <div
                  className="inline-flex items-center space-x-2 px-4 py-2 
                      rounded-lg border-x border-gray-800 
                      bg-black backdrop-blur-xl"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                  <span className="text-xs text-gray-200 tracking-widest uppercase">
                    FAQ
                  </span>
                </div>
              </div>
              <h2 className="text-4xl 2xl:text-[72px] lg:text-[44px] font-bold leading-[1.05] tracking-tight mb-10">
                <span className="text-white font-normal">Frequently</span>
                <span className="text-gray-500/80 block font-normal">
                  Asked Questions
                </span>
              </h2>
              <p className="text-gray-400 font-semibold">
                Have question? Our FAQs section has you covered withn quick
                answers to the most common inquiries
              </p>
            </div>
            <div className="space-y-4">
              {faqItems.map((item, idx) => (
                <div
                  key={idx}
                  className={`bg-[#08030b]/80 border border-zinc-800 rounded-[24px] overflow-hidden group hover:border-white/[0.08] hover:bg-[#0c0511]/90 transition-all duration-500 cursor-pointer ${activeFaq === idx ? "border-white/[0.12] bg-[#0c0511]" : ""}`}
                  onClick={() => toggleFaq(idx)}
                >
                  <div className="p-8 flex items-center justify-between">
                    <span
                      className={`text-[17px] md:text-[19px] font-bold tracking-tight transition-all duration-500 ${activeFaq === idx ? "text-white" : "text-gray-300 group-hover:text-white"}`}
                    >
                      {item.q}
                    </span>
                    <div
                      className={`flex-shrink-0 ml-6 w-11 h-11 rounded-full border border-white/[0.05] flex items-center justify-center transition-all duration-500 ${activeFaq === idx ? "bg-white/10 rotate-45" : "group-hover:bg-white/5"}`}
                    >
                      <Plus
                        className={`w-5 h-5 transition-colors duration-500 ${activeFaq === idx ? "text-white" : "text-gray-500 group-hover:text-gray-300"}`}
                      />
                    </div>
                  </div>
                  <div
                    className={`transition-all duration-700 ease-in-out px-8 overflow-hidden ${activeFaq === idx ? "max-h-60 pb-10 opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <div className="h-px w-full bg-white/[0.03] mb-6"></div>
                    <p className="text-gray-400/90 text-[15px] leading-relaxed font-medium">
                      {item.a}
                    </p>
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
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-[#0b1d3a] via-[#0a1330] to-black">
            {/* Background Glow Effects */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[100px]"></div>
              <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-black rounded-full blur-[100px]"></div>
              <div className="absolute -top-60 -right-20 w-[400px] h-[400px] bg-blue-800 rounded-full blur-[100px]"></div>
              <div className="absolute -bottom-60 right-40 w-[700px] h-[600px] bg-black rounded-full blur-[100px]"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 py-24 px-6 md:px-16 flex flex-col items-center text-center">
              {/* Tag */}
              {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full mb-10">
                <span className="w-1.5 h-1.5 rounded-full bg-white/80"></span>
                <span className="text-xs font-medium text-white/80 tracking-wide">
                  Join Us Now
                </span>
              </div> */}
              <div
                className="inline-block rounded-lg bg-gradient-to-r 
                    from-transparent via-blue-700/60 to-transparent 
                    p-[1px] mb-8"
              >
                <div
                  className="inline-flex items-center space-x-2 px-4 py-2 
                      rounded-lg border-x border-gray-800 backdrop-blur-xl bg-gradient-to-t 
                    from-black via-slate-950 to-purple-900/30"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                  <span className="text-xs text-gray-200 tracking-widest uppercase">
                    Join Us Now
                  </span>
                </div>
              </div>

              {/* Heading */}
              <h2 className="md:block hidden text-4xl 2xl:text-5xl lg:text-5xl text-white leading-tight max-w-4xl">
                Each Project we Undertake
                <br />
                <span className="text-white/50">is a Unique Opportunity.</span>
              </h2>
              <h2 className="md:hidden block text-4xl 2xl:text-5xl lg:text-5xl text-white leading-tight max-w-4xl">
                Each Project, Our
                <br />
                <span className="text-white/50">Design is Great.</span>
              </h2>

              {/* Description */}
              <p className="mt-6 text-white/60 text-base md:text-lg max-w-2xl leading-relaxed">
                Ready to take the next step? Join us now and start transforming
                your
                <br className="hidden md:block" />
                vision into reality with expert support.
              </p>

              {/* CTA Button */}
              <button
                className="mt-10 px-8 py-3.5 rounded-xl font-semibold text-white
      bg-gradient-to-r from-purple-600 to-purple-700
      shadow-[0_0_40px_rgba(168,85,247,0.5)]
      hover:shadow-[0_0_60px_rgba(168,85,247,0.7)]
      shadow-lg shadow-blue-500
      transition-all duration-300 hover:scale-105"
              >
                Book an Appointment
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
