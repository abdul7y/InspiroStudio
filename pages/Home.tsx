import React, { useEffect, useRef, useState } from "react";
import {
  Play,
  Pause,
  Check,
  Star,
  ArrowRight,
  Rocket,
  Power,
  X,
  Plus,
  BadgeCheck,
  Dot,
  Slack as SlackIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  NAVBAR_CTA_BUTTON_AUTO_WIDTH_CLASS,
  NAVBAR_CTA_BUTTON_CLASS,
} from "../constants/buttonStyles";
import leftcurve from "../images/leftcurve.jpg";
import rightcurve from "../images/rightcurve.jpg";
import image from "../images/image.png";
import image2 from "../images/image-copy.png";
import image3 from "../images/image-copy-2.png";
import star from "../images/star-rm.png";
import avatar1 from "../images/avatar1.jpg";
import avatar2 from "../images/avatar2.jpg";
import avatar3 from "../images/avatar3.jpg";
import twitter from "../images/twitter.jpg";

import video from "../videos/Preview.mp4";

const HERO_TYPING_WORDS = [
  "AI & SaaS",
  "Ecommerce.",
  "Law Firms.",
  "Rental House.",
  "Software Houses.",
];

type HeroBrandId = "loom" | "johnson" | "slack" | "sony" | "microsoft";

const HERO_BRANDS: HeroBrandId[] = [
  "loom",
  "johnson",
  "slack",
  "sony",
  "microsoft",
];

const PRICING_CARD_GRADIENT =
  "bg-gradient-to-br from-[#070b1a] via-[#050814] to-black";
const PRICING_CARD_GLOW =
  "bg-[radial-gradient(85%_65%_at_20%_0%,rgba(59,130,246,0.22),transparent_60%)]";

const renderHeroBrandLogo = (brand: HeroBrandId) => {
  switch (brand) {
    case "loom":
      return (
        <div className="flex items-center gap-3 text-white/90">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-8 w-8 sm:h-10 sm:w-10"
          >
            <g fill="none" stroke="#5B5CE2" strokeLinecap="round" strokeWidth="2.3">
              <path d="M12 2.7v4.6" />
              <path d="M12 16.7v4.6" />
              <path d="M2.7 12h4.6" />
              <path d="M16.7 12h4.6" />
              <path d="M5.4 5.4l3.3 3.3" />
              <path d="M15.3 15.3l3.3 3.3" />
              <path d="M18.6 5.4l-3.3 3.3" />
              <path d="M8.7 15.3l-3.3 3.3" />
            </g>
            <circle cx="12" cy="12" r="2.1" fill="#5B5CE2" />
          </svg>
          <span className="whitespace-nowrap text-[26px] font-semibold tracking-[-0.05em] lowercase leading-none sm:text-[31px]">
            loom
          </span>
        </div>
      );

    case "johnson":
      return (
        <div
          className="flex flex-col whitespace-nowrap text-white/90 leading-[0.82]"
          style={{ fontFamily: '"Times New Roman", Georgia, serif' }}
        >
          <span className="text-[20px] font-semibold leading-none sm:text-[24px]">Johnson</span>
          <span className="-mt-0.5 text-[20px] font-semibold leading-none sm:text-[24px]">
            &amp;Johnson
          </span>
        </div>
      );

    case "slack":
      return (
        <div className="flex items-center gap-3 text-white/95">
          <SlackIcon
            aria-hidden="true"
            className="h-8 w-8 sm:h-10 sm:w-10"
            strokeWidth={2.2}
          />
          <span className="whitespace-nowrap text-[25px] font-semibold tracking-[-0.05em] lowercase leading-none sm:text-[30px]">
            slack
          </span>
        </div>
      );

    case "sony":
      return (
        <span
          className="whitespace-nowrap text-[26px] font-semibold uppercase tracking-[0.14em] text-white/90 leading-none sm:text-[31px]"
          style={{ fontFamily: '"Times New Roman", Georgia, serif' }}
        >
          SONY
        </span>
      );

    case "microsoft":
      return (
        <div className="flex items-center gap-3 text-white/85">
          <div className="grid grid-cols-2 gap-[2px]">
            <span className="h-[12px] w-[12px] sm:h-[14px] sm:w-[14px] bg-[#F25022]" />
            <span className="h-[12px] w-[12px] sm:h-[14px] sm:w-[14px] bg-[#7FBA00]" />
            <span className="h-[12px] w-[12px] sm:h-[14px] sm:w-[14px] bg-[#00A4EF]" />
            <span className="h-[12px] w-[12px] sm:h-[14px] sm:w-[14px] bg-[#FFB900]" />
          </div>
          <span className="whitespace-nowrap text-[24px] font-medium tracking-[-0.05em] leading-none sm:text-[29px]">
            Microsoft
          </span>
        </div>
      );
  }
};

const Home: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [heroTypedText, setHeroTypedText] = useState("");
  const [heroWordIndex, setHeroWordIndex] = useState(0);
  const [heroIsDeleting, setHeroIsDeleting] = useState(false);

  const CALENDLY_LINK = "https://calendly.com/inspirostudio-io/30min";
  const ABOUT_VIDEO_SRC = video;

  // TODO: Replace these poster images if needed when you switch to final project videos.
  const PORTFOLIO_MEDIA_POSTERS = {
    first: image,
    second: image2,
    third: image3,
  };

  // TODO: Replace these video sources with your final portfolio video links/files.
  const PORTFOLIO_VIDEO_LINKS = {
    first: video,
    second: video,
    third: video,
  };

  const logos = ["LOGO", "IPSUM", "IPSUOM"];

  const portfolioItems = [
    {
      id: 1,
      title: "and",
      year: "2024",
      tags: ["SaaS", "Campaign"],
      posterSrc: PORTFOLIO_MEDIA_POSTERS.first,
      videoSrc: PORTFOLIO_VIDEO_LINKS.first,
    },
    {
      id: 2,
      title: "The Horizon",
      year: "2024",
      tags: ["Ocean", "Launch"],
      posterSrc: PORTFOLIO_MEDIA_POSTERS.second,
      videoSrc: PORTFOLIO_VIDEO_LINKS.second,
    },
    {
      id: 3,
      title: "White Stag",
      year: "2024",
      tags: ["SaaS", "Landing Page"],
      posterSrc: PORTFOLIO_MEDIA_POSTERS.third,
      videoSrc: PORTFOLIO_VIDEO_LINKS.third,
    },
  ];

  const portfolioVideoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const [portfolioPlaying, setPortfolioPlaying] = useState<boolean[]>(
    portfolioItems.map(() => true)
  );

  const togglePortfolioVideo = (index: number) => {
    const videoEl = portfolioVideoRefs.current[index];
    if (!videoEl) return;

    if (videoEl.paused) {
      const playPromise = videoEl.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {});
      }
      return;
    }

    videoEl.pause();
  };

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

  useEffect(() => {
    const currentWord = HERO_TYPING_WORDS[heroWordIndex];
    const isWordComplete = heroTypedText === currentWord;
    const isWordCleared = heroTypedText.length === 0;
    const typingDelay = heroIsDeleting ? 45 : 95;
    const holdDelay = 1400;
    const restartDelay = 260;

    const timer = window.setTimeout(() => {
      if (!heroIsDeleting) {
        if (!isWordComplete) {
          setHeroTypedText(currentWord.slice(0, heroTypedText.length + 1));
          return;
        }
        setHeroIsDeleting(true);
        return;
      }

      if (!isWordCleared) {
        setHeroTypedText(currentWord.slice(0, heroTypedText.length - 1));
        return;
      }

      setHeroIsDeleting(false);
      setHeroWordIndex((prev) => (prev + 1) % HERO_TYPING_WORDS.length);
    }, !heroIsDeleting && isWordComplete
      ? holdDelay
      : heroIsDeleting && isWordCleared
        ? restartDelay
        : typingDelay);

    return () => {
      window.clearTimeout(timer);
    };
  }, [heroIsDeleting, heroTypedText, heroWordIndex]);

  return (
    <div className="relative min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-start px-8 md:px-16 lg:px-24 overflow-hidden bg-gradient-to-r from-black via-[#020916] to-[#0b1f3f]">
        {/* Add a radial gradient overlay for extra depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black to-blue-700/35"></div>

        <div className="max-w-[1440px] mx-auto w-full pt-[250px] md:pt-[280px] pb-[140px] md:pb-[180px]">
          <div className="max-w-[900px] relative z-10">
            <h1 className="text-[60px] md:text-[80px] lg:text-[100px] text-white mb-8 tracking-[-0.03em] leading-[1.05]">
              <span className="font-normal">Video Marketing Agency For</span>
              <br className="hidden lg:block" />
              <span className="inline-flex items-end">
                <span className="bg-gradient-to-r from-[#53a5ff] via-[#2f83ff] to-[#00a3ff] bg-clip-text text-transparent font-extrabold">{heroTypedText}</span>
                <span className="ml-1 inline-block h-[0.88em] w-[3px] rounded-full bg-blue-400 animate-pulse" />
              </span>
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
                className={`${NAVBAR_CTA_BUTTON_AUTO_WIDTH_CLASS} mb-12`}
              >
                BOOK A DISCOVERY CALL
              </a>

            </div>
          </div>
        </div>
        {/* <div className="waves-container">
            <div className="wave wave-3"></div>
            <div className="wave wave-2"></div>
            <div className="wave"></div>
          </div> */}
        <div className="absolute inset-x-0 bottom-0 h-36 md:h-44 lg:h-52 bg-gradient-to-b from-transparent via-[#060f22]/60 to-black pointer-events-none"></div>
      </section>

      <div className="relative left-1/2 z-20 -mt-10 w-screen -translate-x-1/2 overflow-hidden pb-6 sm:-mt-12 sm:pb-7 lg:-mt-14 lg:pb-8">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, #07173f 0%, #0a1f57 46%, #0f2c7a 74%, #18439f 100%)",
          }}
        />
        <div className="relative flex min-h-[78px] w-full items-center overflow-hidden select-none sm:min-h-[90px]">
          <div
            className="animate-infinite-scroll flex h-[78px] min-w-max items-center gap-10 sm:h-[90px] sm:gap-14 lg:gap-20"
            style={{ animationDuration: "22s" }}
          >
            {[...HERO_BRANDS, ...HERO_BRANDS, ...HERO_BRANDS].map((brand, index) => (
              <div
                key={`${brand}-${index}`}
                className="flex h-full min-w-[160px] items-center justify-center sm:min-w-[198px] lg:min-w-[228px]"
              >
                {renderHeroBrandLogo(brand)}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Portfolio Section */}
      <section className="relative overflow-visible bg-black">
        <div className="relative w-full bg-black overflow-hidden pt-16 md:pt-20 lg:pt-24">
          <div className="relative mb-0">
            {/* LEFT CURVE */}
            <img
              src={leftcurve}
              alt="Left Curve"
              className="absolute left-0 lg:top-1/2 -bottom-5 -translate-y-1/2 w-[35%] 2xl:max-w-[350px] lg:max-w-[280px] pointer-events-none"
            />

            {/* RIGHT CURVE */}
            <img
              src={rightcurve}
              alt="Right Curve"
              className="absolute right-0 lg:top-1/2 -bottom-5 -translate-y-1/2 w-[35%] 2xl:max-w-[350px] lg:max-w-[280px] pointer-events-none"
            />

            <div className="relative z-10 max-w-3xl mx-auto px-8 md:px-16 lg:px-24 text-center flex flex-col items-center">
              <div className="inline-block rounded-lg bg-gradient-to-r from-transparent via-blue-700/60 to-transparent p-[1px] mb-4">
                <div
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg border-r border-l border-gray-800
                    bg-black backdrop-blur-xl"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                  <span className="text-xs text-gray-200 tracking-widest uppercase">
                    Portfolio
                  </span>
                </div>
              </div>

              <h2 className="text-[38px] md:text-[52px] text-white leading-[1.08] tracking-tight">
                Portfolio
              </h2>
              <h3 className="text-[30px] md:text-[44px] text-gray-400 leading-[1.1] tracking-tight mt-2">
                Product Success Stories
              </h3>

              <p className="text-gray-400 max-w-[560px] mt-6 text-lg">
                Explainers, onboarding, launch films and social content built to
                be watched and understood.
              </p>

              <div className="mt-10">
                <Link
                  to="/blogs"
                  className={NAVBAR_CTA_BUTTON_AUTO_WIDTH_CLASS}
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Match the portfolio cards to the global navbar shell across breakpoints. */}
        <div className="relative z-10 mx-auto mt-10 w-full max-w-[1680px] px-5 pb-[20vh] sm:mt-12 sm:px-8 lg:mt-16 lg:px-12">
          <div className="relative pb-[6vh] sm:pb-[8vh] lg:pb-[10vh]">
            {/* Keep the portfolio stack pinned near screen center while only the videos progress on scroll. */}
            {portfolioItems.map((item, index) => (
              <article
                key={item.id}
                className={`${index === 0 ? "" : "-mt-[12vh] sm:-mt-[16vh] lg:-mt-[20vh]"} sticky top-20 w-full transform-gpu will-change-transform rounded-[26px] overflow-hidden border border-white/12 bg-black shadow-[0_30px_90px_rgba(0,0,0,0.55)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:top-24 sm:rounded-[32px] lg:top-[12vh] lg:rounded-[44px]`}
                style={{ zIndex: index + 1 }}
              >
                <div className="group relative aspect-[16/9] bg-[#0a1633]">
                  <video
                    ref={(el) => {
                      portfolioVideoRefs.current[index] = el;
                    }}
                    className="absolute inset-0 w-full h-full object-cover opacity-100 transform-gpu will-change-transform"
                    src={item.videoSrc}
                    poster={item.posterSrc}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    autoPlay
                    onPlay={() =>
                      setPortfolioPlaying((prev) =>
                        prev.map((value, idx) => (idx === index ? true : value))
                      )
                    }
                    onPause={() =>
                      setPortfolioPlaying((prev) =>
                        prev.map((value, idx) => (idx === index ? false : value))
                      )
                    }
                  />

                  <button
                    type="button"
                    onClick={() => togglePortfolioVideo(index)}
                    aria-label={portfolioPlaying[index] ? "Pause video" : "Play video"}
                    className="absolute inset-0 m-auto h-16 w-16 sm:h-20 sm:w-20 rounded-full border border-white/65 bg-black/55 text-white flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 transition-opacity duration-300"
                  >
                    {portfolioPlaying[index] ? (
                      <Pause className="h-6 w-6 sm:h-7 sm:w-7" />
                    ) : (
                      <Play className="h-6 w-6 sm:h-7 sm:w-7 fill-white" />
                    )}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. About Inspiro Section */}

      <section className="relative overflow-hidden bg-black">
        <div className="relative w-full bg-black overflow-hidden pt-16 md:pt-20 lg:pt-24">
          <div className="relative mb-14 md:mb-16">
            {/* LEFT CURVE */}
            <img
              src={leftcurve}
              alt="Left Curve"
              className="absolute left-0 lg:top-1/2 -bottom-5 -translate-y-1/2 w-[35%] 2xl:max-w-[350px] lg:max-w-[280px] pointer-events-none"
            />

            {/* RIGHT CURVE */}
            <img
              src={leftcurve}
              alt="Right Curve"
              className="absolute right-0 lg:top-1/2 -bottom-5 -scale-x-100 -translate-y-1/2 w-[35%] 2xl:max-w-[350px] lg:max-w-[280px] pointer-events-none"
            />

            <div className="relative z-10 max-w-3xl mx-auto px-8 md:px-16 lg:px-24 text-center flex flex-col items-center">
                <div className="inline-block rounded-lg bg-gradient-to-r from-transparent via-blue-700/60 to-transparent p-[1px] mb-4">
                  <div
                    className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg border-r border-l border-gray-800
                    bg-black backdrop-blur-xl"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                    <span className="text-xs text-gray-200 tracking-widest uppercase">
                      About Inspiro
                    </span>
                  </div>
                </div>
                <h2 className="text-[38px] md:text-[52px] text-white leading-[1.08] tracking-tight">
                  Building Stronger Brands
                </h2>
                <h3 className="text-[30px] md:text-[44px] text-gray-400 leading-[1.1] tracking-tight mt-2">
                  Across 30+ Countries
                </h3>
            </div>
          </div>

          <div className="max-w-[1440px] mx-auto relative z-10 px-8 md:px-16 lg:px-24">
            <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
              <div className="order-2 flex justify-center lg:order-1 lg:justify-start">
                <div className="group relative w-full max-w-[520px] transition-transform duration-300 hover:-translate-y-2">
                  <div className="rounded-[34px] bg-[linear-gradient(135deg,#1456ff_0%,#1f7dff_58%,#00a3ff_100%)] p-[1px] shadow-[0_18px_45px_rgba(20,112,255,0.3)] transition-all duration-300 group-hover:shadow-[0_22px_70px_rgba(39,145,255,0.45)]">
                    <div className="relative aspect-square w-full overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(46,125,255,0.28),rgba(8,18,38,0.8)_42%,rgba(0,0,0,0.2)_72%,transparent_100%)] shadow-[0_28px_80px_rgba(0,0,0,0.55)]">
                    <video
                      className="absolute inset-0 h-full w-full object-cover opacity-88 transition-transform duration-500 group-hover:scale-[1.04]"
                      src={ABOUT_VIDEO_SRC}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.16),transparent_42%)]"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(20,86,255,0.14)_0%,rgba(31,125,255,0.08)_42%,rgba(0,0,0,0.4)_100%)] transition-opacity duration-300 group-hover:opacity-90"></div>
                    <div className="absolute inset-x-0 -bottom-10 h-28 bg-gradient-to-t from-black via-black/65 to-transparent blur-2xl"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-blue-100/30 bg-[linear-gradient(135deg,rgba(20,86,255,0.88)_0%,rgba(31,125,255,0.84)_58%,rgba(0,163,255,0.8)_100%)] backdrop-blur-md shadow-[0_0_30px_rgba(59,130,246,0.35)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_45px_rgba(39,145,255,0.55)]">
                        <Play className="w-6 h-6 text-white fill-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-5 left-6 text-[10px] uppercase tracking-[0.35em] text-white/70">
                      Video Preview
                    </div>
                  </div>
                  </div>
                </div>
              </div>

              <div className="order-1 space-y-8 text-center lg:order-2 lg:ml-auto lg:max-w-[540px] lg:text-left">
                <p className="max-w-[520px] text-[15px] leading-relaxed text-gray-400 md:text-[16px] lg:max-w-none">
                  Delivering expert solutions that transform modern businesses.
                  Driving innovation globally, partnering with clients for
                  impact.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-3 text-[14px] text-gray-300 lg:justify-start">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-700">
                      <BadgeCheck className="h-4 w-4 text-white" />
                    </span>
                    <span>From $0 to $500,000 in revenue.</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-[14px] text-gray-300 lg:justify-start">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-700">
                      <BadgeCheck className="h-4 w-4 text-white" />
                    </span>
                    <span>70% growth in new customers.</span>
                  </div>
                </div>

                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-start">
                  <button
                    type="button"
                    className={NAVBAR_CTA_BUTTON_AUTO_WIDTH_CLASS}
                  >
                    About Inspiro
                  </button>
                  <div className="hidden lg:block h-6 w-px bg-gray-700"></div>
                  <div className="px-1 py-2">
                    <div className="flex flex-col items-center gap-2 lg:items-start">
                      <div className="flex items-center gap-1">
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
        </div>
      </section>

      {/* 4. Blogs Section */}
      <section className="relative bg-black overflow-hidden">
        
        <div className="relative w-full bg-black overflow-hidden xl:mt-24 md:py-20 py-40">
          {/* LEFT CURVE */}
          <img
            src={leftcurve}
            alt="Left Curve"
            className="absolute lg:left-0 lg:top-1/2 left-0 -bottom-5 -translate-y-1/2 w-[35%] 2xl:max-w-[350px] lg:max-w-[280px] pointer-events-none"
          />

          {/* RIGHT CURVE */}
          <img
            src={leftcurve}
            alt="Right Curve"
            className="absolute lg:right-0 lg:top-1/2 right-1 -bottom-5 -scale-x-100 -translate-y-1/2 w-[35%] 2xl:max-w-[350px] lg:max-w-[280px]  pointer-events-none"
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
            <div className="mt-10">
              <a
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={NAVBAR_CTA_BUTTON_AUTO_WIDTH_CLASS}
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
                <div
                  key={`${card.id}-${index}`}
                  className="group w-[320px] sm:w-[360px] md:w-[420px] lg:w-[480px] xl:w-[520px] flex-shrink-0 transform-gpu transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-4"
                  aria-hidden={index >= blogSlides.length}
                >
                  <div
                    className={`relative rounded-[28px] border border-white/[0.08] p-[2px] ${PRICING_CARD_GRADIENT} shadow-[0_40px_120px_rgba(0,0,0,0.9)] transition-all duration-500 group-hover:border-blue-400/30 group-hover:shadow-[0_55px_150px_rgba(4,10,24,0.95)]`}
                  >
                    <div
                      className={`pointer-events-none absolute inset-0 rounded-[28px] opacity-80 transition-opacity duration-500 group-hover:opacity-100 ${PRICING_CARD_GLOW}`}
                    />

                    <div className="relative rounded-[26px] bg-[#05060a] p-2">
                      {/* MAIN CARD */}
                      <div
                        className={`relative h-[500px] overflow-hidden rounded-[22px] border border-white/[0.08] p-3 ${PRICING_CARD_GRADIENT}`}
                      >
                        <div
                          className={`pointer-events-none absolute inset-0 opacity-80 transition-opacity duration-500 group-hover:opacity-100 ${PRICING_CARD_GLOW}`}
                        />

                        {/* IMAGE SECTION */}
                        <img
                          src={card.image}
                          alt={card.title}
                          className="h-full w-full scale-105 object-cover opacity-70 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-all duration-500 group-hover:via-black/55 group-hover:from-black/95" />

                        {/* CONTENT SECTION */}
                        <div
                          className={`absolute bottom-0 left-0 right-0 m-3 flex-1 rounded-[21px] border border-white/[0.08] p-6 transition-all duration-500 group-hover:-translate-y-2 group-hover:border-blue-400/25 ${PRICING_CARD_GRADIENT}`}
                        >
                          <div
                            className={`pointer-events-none absolute inset-0 rounded-[21px] opacity-70 transition-opacity duration-500 group-hover:opacity-100 ${PRICING_CARD_GLOW}`}
                          />

                          <div className="relative">
                            {/* LOGO / ICON */}
                            <div className="mb-4">
                              <div className="rounded-md flex text-start">
                                <h1 className="text-white text-2xl font-bold tracking-tight transition-colors duration-300 group-hover:text-blue-50">
                                  {card.title}
                                </h1>
                              </div>
                            </div>

                            {/* TITLE */}
                            <h3 className="text-white text-[20px] font-semibold mb-2 flex items-center gap-2">
                              {card.client}{" "}
                              <span className="bg-blue-700 text-[10px] font-semibold px-2 py-0.5 rounded transition-colors duration-300 group-hover:bg-blue-600">
                                {card.badge}
                              </span>
                            </h3>

                            <div className="border-t border-zinc-500/80 w-24 rounded-full mb-4 transition-colors duration-300 group-hover:border-blue-400/50"></div>

                            {/* DESCRIPTION */}
                            <p className="text-zinc-400 text-[14px] leading-relaxed mb-6 transition-colors duration-300 group-hover:text-zinc-300">
                              {card.description}
                            </p>

                            {/* STATS PILLS */}
                            <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
                              <span
                                className="px-4 py-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-gray-400 text-sm font-medium text-center transition-all duration-300 group-hover:border-blue-400/20 group-hover:bg-blue-500/10 group-hover:text-gray-200"
                              >
                                {card.stats[0]}
                              </span>
                              <span
                                className="px-4 py-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-gray-400 text-sm font-medium text-center transition-all duration-300 group-hover:border-blue-400/20 group-hover:bg-blue-500/10 group-hover:text-gray-200"
                              >
                                {card.stats[1]}
                              </span>
                            </div>
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
      <section className="relative overflow-hidden bg-black">

        {/* <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-[radial-gradient(circle_at_70%_20%,rgba(59,130,246,0.18),transparent_60%)]"></div>
          <div className="absolute -top-20 right-10 w-[40%] h-[40%] bg-[radial-gradient(circle,rgba(168,85,247,0.18),transparent_65%)]"></div>
          <div
            className="absolute top-0 right-0 w-[65%] h-[40%] bg-[#0b1628]/80"
            style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%, 62% 100%)" }}
          ></div>
        </div> */}

        <div className="relative z-10 mt-32">
          <div className="relative mb-14 md:mb-16">
            {/* LEFT CURVE */}
            <img
              src={leftcurve}
              alt="Left Curve"
              className="absolute left-0 lg:top-1/2 -bottom-5 -translate-y-1/2 w-[35%] 2xl:max-w-[350px] lg:max-w-[280px] pointer-events-none"
            />

            {/* RIGHT CURVE */}
            <img
              src={leftcurve}
              alt="Right Curve"
              className="absolute right-0 lg:top-1/2 -bottom-5 -scale-x-100 -translate-y-1/2 w-[35%] 2xl:max-w-[350px] lg:max-w-[280px] pointer-events-none"
            />

            <div className="relative z-10 max-w-4xl mx-auto px-8 md:px-16 lg:px-24 text-center flex flex-col items-center">
          {/* <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em]">
              Inspiro Benefits
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
                Inspiro Benefits
              </span>
            </div>
          </div>

          <h2 className="text-[30px] md:text-[44px] text-white leading-[1.1] tracking-tight">
            We Don't Just Design, We Build.
          </h2>
          <h3 className="text-[26px] md:text-[40px]  text-gray-400 leading-[1.1] tracking-tight">
            If You Can Dream It, We Can Build It!
          </h3>

          <div className="mt-8 flex w-full max-w-[1080px] justify-center">
            <Link
              to="/contact"
              className={NAVBAR_CTA_BUTTON_AUTO_WIDTH_CLASS}
            >
              Contact Now
            </Link>
          </div>
            </div>
          </div>

          <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-8 mt-12">
            <div className="space-y-6">
              <div className="group relative w-full md:h-[420px]  2xl:h-[430px] lg:h-[450px] rounded-[26px] bg-gradient-to-br from-[#1a0f2e] via-[#0b0b12] to-black border border-violet-950 p-5 shadow-[0_35px_90px_rgba(0,0,0,0.7)] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/25 hover:shadow-[0_45px_110px_rgba(5,12,32,0.85)]">
                {/* bottom accent glow */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-tr from-[#1766e8]/40 via-[#2f83ff]/20 to-transparent blur-2xl opacity-80 transition-opacity duration-500 group-hover:opacity-100"></div>

                {/* Image container */}
                <div className="relative h-[230px] rounded-[18px] overflow-hidden border border-white/10 mb-5">
                  <img
                    src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=80"
                    alt="Submit Unlimited Requests"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                </div>

                {/* Content */}
                <h3 className="text-white font-semibold text-[15px] mb-2 transition-colors duration-300 group-hover:text-blue-50">
                  Submit Unlimited Requests
                </h3>

                <div className="border border-violet-500/30 w-24 mb-3 transition-colors duration-300 group-hover:border-blue-400/40" />

                <p className="text-violet-100 text-[13px] leading-relaxed mb-4 transition-colors duration-300 group-hover:text-violet-50/90">
                  Enjoy the freedom to submit unlimited requests without any
                  restrictions. Whether you need design tweaks, we're here to
                  assist you at every step.
                </p>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="group relative 2xl:h-[250px] lg:h-[280px] rounded-[20px] bg-gradient-to-br from-[#1a0f2e] via-[#0b0b12] to-black border border-violet-950 p-5 overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.55)] transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/25 hover:shadow-[0_38px_90px_rgba(5,12,32,0.8)]">
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-tr from-[#1766e8]/40 via-[#2f83ff]/20 to-transparent blur-2xl opacity-80 transition-opacity duration-500 group-hover:opacity-100"></div>
                  <div className="relative h-[110px] rounded-[12px] overflow-hidden border border-white/10 mb-3">
                    <img
                      src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80"
                      alt="Quick turnaround"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="text-white font-bold text-[13px] transition-colors duration-300 group-hover:text-blue-50">
                      Quick Turnaround
                    </h4>
                    <span className="px-2 py-0.5 rounded bg-blue-700 border-2 border-blue-600 text-white text-[8px] font-bold uppercase transition-colors duration-300 group-hover:bg-blue-600">
                      NEW
                    </span>
                  </div>
                  <div className="border border-violet-500/30 w-24 mb-3 transition-colors duration-300 group-hover:border-blue-400/40" />

                  <p className="text-violet-100 text-[13px] leading-relaxed transition-colors duration-300 group-hover:text-violet-50/90">
                    We prioritize efficiency without compromising quality.
                  </p>
                </div>

                <div className="group relative 2xl:h-[250px] lg:h-[280px] rounded-[20px] bg-gradient-to-br from-[#1a0f2e] via-[#0b0b12] to-black border border-violet-950 p-5 overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.55)] transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/25 hover:shadow-[0_38px_90px_rgba(5,12,32,0.8)]">
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-tr from-[#1766e8]/40 via-[#2f83ff]/20 to-transparent blur-2xl opacity-80 transition-opacity duration-500 group-hover:opacity-100"></div>
                  <div className="relative h-[110px] rounded-[12px] overflow-hidden border border-white/10 mb-3">
                    <img
                      src="https://images.unsplash.com/photo-1556155092-8707de31f9c4?auto=format&fit=crop&w=900&q=80"
                      alt="Publish in seconds"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  </div>
                  <h4 className="text-white font-bold text-[13px] mb-2 transition-colors duration-300 group-hover:text-blue-50">
                    Publish in Seconds
                  </h4>
                  <div className="border border-violet-500/30 w-24 mb-3 transition-colors duration-300 group-hover:border-blue-400/40" />

                  <p className="text-violet-100 text-[13px] leading-relaxed transition-colors duration-300 group-hover:text-violet-50/90">
                    Publish your site in seconds with our streamlined process.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="group relative  2xl:h-[340px] lg:h-[360px] rounded-[22px] bg-gradient-to-br from-[#1a0f2e] via-[#0b0b12] to-black border border-violet-950 p-6 overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.55)] transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/25 hover:shadow-[0_38px_90px_rgba(5,12,32,0.8)]">
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-tr from-[#1766e8]/40 via-[#2f83ff]/20 to-transparent blur-2xl opacity-80 transition-opacity duration-500 group-hover:opacity-100"></div>
                <div className="relative h-[170px] rounded-[14px] overflow-hidden border border-white/10 mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=900&q=80"
                    alt="Requests and revisions"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <h4 className="text-white font-bold text-[14px] transition-colors duration-300 group-hover:text-blue-50">
                    Requests & Revisions
                  </h4>
                  <span className="px-2 py-0.5 rounded bg-blue-700 border-2 border-blue-600 text-white text-[8px] font-bold uppercase transition-colors duration-300 group-hover:bg-blue-600">
                    NEW
                  </span>
                </div>
                <div className="border border-violet-500/30 w-24 mb-3 transition-colors duration-300 group-hover:border-blue-400/40" />

                <p className="text-violet-100 text-[13px] leading-relaxed transition-colors duration-300 group-hover:text-violet-50/90">
                  Our process includes multiple rounds of requests and
                  revisions, ensuring that your feedback is incorporated and
                  that the final product meets your expectations.
                </p>
              </div>

              <div className="group relative 2xl:h-[340px] lg:h-[360px] rounded-[22px] bg-gradient-to-br from-[#1a0f2e] via-[#0b0b12] to-black border border-violet-950 p-6 overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.55)] transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/25 hover:shadow-[0_38px_90px_rgba(5,12,32,0.8)]">
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-tr from-[#1766e8]/40 via-[#2f83ff]/20 to-transparent blur-2xl opacity-80 transition-opacity duration-500 group-hover:opacity-100"></div>
                <div className="relative h-[170px] rounded-[14px] overflow-hidden border border-white/10 mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80"
                    alt="References"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <h4 className="text-white font-bold text-[14px] transition-colors duration-300 group-hover:text-blue-50">
                    Worry Free Pricing
                  </h4>
                  <span className="px-2 py-0.5 rounded bg-blue-700 border-2 border-blue-600 text-white text-[8px] font-bold uppercase transition-colors duration-300 group-hover:bg-blue-600">
                    NEW
                  </span>
                </div>
                <div className="border border-violet-500/30 w-24 mb-3 transition-colors duration-300 group-hover:border-blue-400/40" />

                <p className="text-violet-100 text-[13px] leading-relaxed transition-colors duration-300 group-hover:text-violet-50/90">
                  Whether you're just starting or scaling up, our flexible
                  pricing plans are designed to fit your needs and budget, so
                  you can get started without any financial stress.
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
      {/* PRICING SECTION */}
      <section className="relative overflow-hidden bg-black">
        <div className="relative w-full bg-black w-full overflow-hidden py-40">
        {/* background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-64 bg-blue-600/10 blur-[120px]" />
        </div>

        <div className="relative mb-20">
          {/* LEFT CURVE */}
          <img
            src={leftcurve}
            alt="Left Curve"
            className="absolute left-0 lg:top-1/2 -bottom-5 -translate-y-1/2 w-[35%] 2xl:max-w-[350px] lg:max-w-[280px] pointer-events-none"
          />

          {/* RIGHT CURVE */}
          <img
            src={leftcurve}
            alt="Right Curve"
            className="absolute right-0 lg:top-1/2 -bottom-5 -scale-x-100 -translate-y-1/2 w-[35%] 2xl:max-w-[350px] lg:max-w-[280px] pointer-events-none"
          />

          {/* heading */}
          <div className="relative z-10 max-w-4xl mx-auto px-8 md:px-16 lg:px-24 text-center flex flex-col items-center">
            <div className="inline-block rounded-lg bg-gradient-to-r from-transparent via-blue-700/60 to-transparent p-[1px] mb-6">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg border-x border-gray-800 bg-black backdrop-blur-xl">
                <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                <span className="text-xs text-gray-200 tracking-widest">
                  Pricing
                </span>
              </div>
            </div>

            <h2 className="text-3xl md:text-[44px] text-white tracking-tight leading-[1.05]">
              Plans for all businesses, suitable for
            </h2>
            <h3 className="text-3xl md:text-[44px] text-gray-400 tracking-tight leading-[1.1] mt-2">
              Personal Brands, Agencies, Startups.
            </h3>

            <p className="text-zinc-500 text-[18px] mt-6 max-w-2xl mx-auto leading-relaxed">
              Our pricing plans are designed to make getting started as
              effortless as possible. With flexible options tailored to suit a
              variety of needs and budgets.
            </p>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto relative z-10 px-8 md:px-16 lg:px-24">
          {/* cards */}
          <div className="max-w-[980px] mx-auto grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
            {/* PRO WEEKLY */}

            <div
              className={`group relative h-full w-full max-w-[460px] mx-auto rounded-[34px] border border-white/[0.08] 
                  ${PRICING_CARD_GRADIENT}
                  shadow-[0_45px_140px_rgba(0,0,0,0.85)] overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-3 hover:border-blue-300/20 hover:shadow-[0_60px_160px_rgba(0,0,0,0.92)]`}
            >
              {/* top blue glow */}
              <div className={`absolute inset-0 opacity-80 transition-opacity duration-500 group-hover:opacity-100 ${PRICING_CARD_GLOW}`} />

              <div className="relative px-8 md:px-9 pt-10 pb-8 min-h-[690px] flex-1 flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex flex-col  items-start gap-3">
                    <div className="px-5 py-4 rounded-xl bg-slate-900 shadow-xl shadow-blue-900 border border-blue-900 flex items-center justify-center transition-all duration-500 group-hover:border-blue-400/40 group-hover:shadow-[0_0_35px_rgba(59,130,246,0.25)]">
                      <Rocket />
                    </div>
                    <span className="text-white font-semibold text-[15px] transition-colors duration-300 group-hover:text-blue-50">
                      Pro Weekly
                    </span>
                  </div>

                  <span
                    className="px-3 py-2 rounded-lg bg-blue-500/10 border bg-gradient-to-t from-gray-500/20 to-blue-900/20 border-blue-500/20 transition-all duration-300 group-hover:border-blue-400/30 group-hover:text-white 
        text-[13px] font-semibold text-blue-100"
                  >
                    Most Pick
                  </span>
                </div>

                {/* Price */}
                <div className="relative mb-6 min-h-[84px]">
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
                <p className="min-h-[70px] text-gray-400 text-[14px] leading-relaxed mb-7 transition-colors duration-300 group-hover:text-gray-300">
                  Our basic pricing plan is designed to offer great value while
                  providing the essential features you need to get started.
                </p>

                {/* Pills */}
                <div className="flex gap-3 mb-8">
                  <span className="px-4 py-1.5 rounded-lg  bg-blue-500/10 border border-white/10 text-[13px] transition-all duration-300 group-hover:border-blue-400/25 group-hover:bg-blue-500/15">
                    <b>100+</b> <span className="text-gray-400">Projects</span>
                  </span>
                  <span className="px-4 py-1.5 rounded-lg bg-blue-500/10 border border-white/10 text-[13px] text-gray-300 transition-all duration-300 group-hover:border-blue-400/25 group-hover:bg-blue-500/15">
                    <b>75+</b> <span className="text-gray-400">Revisions</span>
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8 text-[13px]">
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
                      <BadgeCheck className="h-5 w-5 text-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* CTA: keep only pill shape from reference */}
              <div className="relative mt-auto px-6 pb-6">
                <a
                  href={CALENDLY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${NAVBAR_CTA_BUTTON_CLASS} mx-auto w-full text-center`}
                >
                  Book an Appointment
                </a>
              </div>
            </div>

            {/* PREMIUM */}
            <div
              className={`group relative h-full w-full max-w-[460px] mx-auto rounded-[34px] border border-white/[0.08] 
                  ${PRICING_CARD_GRADIENT}
                  shadow-[0_45px_140px_rgba(0,0,0,0.85)] overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-3 hover:border-blue-300/20 hover:shadow-[0_60px_160px_rgba(0,0,0,0.92)]`}
            >
              {/* top indigo/blue glow */}
              <div className={`absolute inset-0 opacity-80 transition-opacity duration-500 group-hover:opacity-100 ${PRICING_CARD_GLOW}`} />

              <div className="relative px-8 md:px-9 pt-10 pb-8 min-h-[690px] flex-1 flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex flex-col items-start gap-3">
                    <div className="px-5 py-4 rounded-xl bg-slate-900 shadow-xl shadow-blue-900 border border-blue-900 flex items-center justify-center transition-all duration-500 group-hover:border-blue-400/40 group-hover:shadow-[0_0_35px_rgba(59,130,246,0.25)]">
                      <Power /> {/* or Rocket if you want consistency */}
                    </div>

                    <span className="text-white font-semibold text-[15px] transition-colors duration-300 group-hover:text-blue-50">
                      Premium
                    </span>
                  </div>

                  <span
                    className="px-3 py-2 rounded-lg bg-blue-500/10 border bg-gradient-to-t from-gray-500/20 to-blue-900/20 border-blue-500/20 transition-all duration-300 group-hover:border-blue-400/30 group-hover:text-white 
        text-[13px] font-semibold text-blue-100"
                  >
                    Recommended
                  </span>
                </div>

                {/* Price */}
                <div className="relative mb-6 min-h-[84px]">
                  <div className="flex items-end gap-2">
                    <span className="text-white text-[44px]">$2,599</span>
                    <span className="text-gray-500 text-[14px] mb-3">
                      /Month
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-[44px] line-through opacity-0 select-none"
                    >
                      $1450
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="min-h-[70px] text-gray-400 text-[14px] leading-relaxed mb-7 transition-colors duration-300 group-hover:text-gray-300">
                  Our premium pricing plan is designed for businesses looking
                  for advanced features and priority-level support.
                </p>

                {/* Pills */}
                <div className="flex gap-3 mb-8">
                  <span className="px-4 py-1.5 rounded-lg bg-blue-500/10 border border-white/10 text-[13px] transition-all duration-300 group-hover:border-blue-400/25 group-hover:bg-blue-500/15">
                    <b>650+</b> <span className="text-gray-400">Projects</span>
                  </span>
                  <span className="px-4 py-1.5 rounded-lg bg-blue-500/10 border border-white/10 text-[13px] transition-all duration-300 group-hover:border-blue-400/25 group-hover:bg-blue-500/15">
                    <b>250+</b> <span className="text-gray-400">Revisions</span>
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8 text-[13px]">
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
                      <BadgeCheck className="h-5 w-5 text-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
                <img
                  src={star}
                  alt="Star"
                  className="pointer-events-none absolute bottom-28 right-1/2 -translate-x-1/2 opacity-20 mx-auto"
                />
              </div>
              {/* CTA: keep only pill shape from reference */}
              <div className="relative mt-auto px-6 pb-6">
                <a
                  href={CALENDLY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${NAVBAR_CTA_BUTTON_CLASS} mx-auto w-full text-center`}
                >
                  Book an Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* 7. Testimonial Section â€" Dark Premium SaaS Glassmorphism */}
      <section className="relative overflow-hidden bg-black">
        {/* ambient background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-72 bg-blue-600/20 blur-[140px]" />
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
              Customer Reviews on
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
                className={NAVBAR_CTA_BUTTON_AUTO_WIDTH_CLASS}
              >
                Let's Work Together
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
                className="group midnight-card-gradient relative h-full flex flex-col rounded-[26px]
              border-t 
              border-blue-800
              p-8
              shadow-[0_30px_90px_rgba(0,0,0,0.9)]
              hover:-translate-y-3
              hover:border-white/[0.12]
              hover:shadow-[0_42px_120px_rgba(0,0,0,0.95)]
              transition-all duration-500"
              >
                {/* top */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex flex-col items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white font-bold transition-transform duration-500 group-hover:scale-105">
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
                      className="w-6 h-6 opacity-40 transition-all duration-300 group-hover:opacity-70 group-hover:scale-110"
                    />
                  </span>
                </div>

                {/* content */}
                <p className="text-zinc-400  text-[14px] leading-relaxed mb-10 transition-colors duration-300 group-hover:text-zinc-300">
                  "{t.text}"
                </p>

                {/* footer */}
                <div className="mt-auto pt-6 border-t border-white/[0.06] transition-colors duration-300 group-hover:border-white/[0.12]">
                  <div className="text-white font-semibold flex items-center gap-0.5 text-[14px] transition-colors duration-300 group-hover:text-blue-50">
                    {t.name} <Dot />
                    {t.role}
                  </div>
                  <div className="text-gray-500 font-semibold text-[13px] transition-colors duration-300 group-hover:text-gray-400">
                    {t.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 8. FAQ Section */}
      <section className="relative overflow-hidden bg-black">
        <div className="relative w-full bg-black overflow-hidden py-40">
          {/* <div className="absolute inset-0 bg-gradient-to-b from-[#08030b] via-[#1a0a1e] to-[#0a050f] pointer-events-none"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-600/50 to-transparent z-20"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-blue-600/10 blur-[80px] pointer-events-none z-10"></div>
           */}

          <div className="relative mb-16">
            {/* LEFT CURVE */}
            <img
              src={leftcurve}
              alt="Left Curve"
              className="absolute left-0 lg:top-1/2 -bottom-5 -translate-y-1/2 w-[35%] 2xl:max-w-[350px] lg:max-w-[280px] pointer-events-none"
            />

            {/* RIGHT CURVE */}
            <img
              src={leftcurve}
              alt="Right Curve"
              className="absolute right-0 lg:top-1/2 -bottom-5 -scale-x-100 -translate-y-1/2 w-[35%] 2xl:max-w-[350px] lg:max-w-[280px] pointer-events-none"
            />

            <div className="relative z-10 max-w-4xl mx-auto px-8 md:px-16 lg:px-24 text-center flex flex-col items-center mb-16">
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
              <h2 className="text-4xl 2xl:text-[72px] lg:text-[44px] font-bold leading-[1.05] tracking-tight mb-6">
                <span className="text-white font-normal">Frequently</span>
                <span className="text-gray-500/80 block font-normal">
                  Asked Questions
                </span>
              </h2>
              <p className="text-gray-400 font-semibold max-w-2xl">
                Have questions? Our FAQs section covers quick answers to the
                most common inquiries.
              </p>
            </div>
          </div>

          <div className="max-w-[1440px] mx-auto relative z-10 px-8 md:px-16 lg:px-24">
            <div className="max-w-4xl mx-auto space-y-4">
              {faqItems.map((item, idx) => (
                <div
                  key={idx}
                  className={`midnight-card-gradient border border-blue-100/15 rounded-[24px] overflow-hidden group hover:border-white/[0.08] transition-all duration-500 cursor-pointer ${activeFaq === idx ? "border-white/[0.12]" : ""}`}
                  onMouseEnter={() => setActiveFaq(idx)}
                  onMouseLeave={() =>
                    setActiveFaq((current) => (current === idx ? null : current))
                  }
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
                    className={`transition-all duration-700 ease-in-out px-8 overflow-hidden ${activeFaq === idx ? "max-h-64 pb-10 opacity-100" : "max-h-0 opacity-0"}`}
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

      {/* 9. Unique Opportunity Section - Overlay layer that reveals fixed footer */}
      <section className="relative z-20 h-[150vh] bg-transparent">
        <div className="sticky top-0 h-screen flex items-end">
          <div className="w-full">
            <div className="midnight-card-gradient relative overflow-hidden rounded-none border-y border-white/10 min-h-[100svh] flex items-center">
            {/* Background Glow Effects */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[100px]"></div>
              <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-black rounded-full blur-[100px]"></div>
              <div className="absolute -top-60 -right-20 w-[400px] h-[400px] bg-blue-800 rounded-full blur-[100px]"></div>
              <div className="absolute -bottom-60 right-40 w-[700px] h-[600px] bg-black rounded-full blur-[100px]"></div>
            </div>

              {/* Content */}
              <div className="relative z-10 w-full py-24 px-6 md:px-16 lg:px-24 flex flex-col items-center text-center">
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
                    from-black via-slate-950 to-blue-900/30"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                  <span className="text-xs text-gray-200 tracking-widest uppercase">
                    Join Us Now
                  </span>
                </div>
              </div>

              {/* Heading */}
                <h2 className="md:block hidden text-5xl lg:text-6xl 2xl:text-7xl text-white leading-[1.05] max-w-5xl">
                  Each Project we Undertake
                  <br />
                  <span className="text-white/50">is a Unique Opportunity.</span>
                </h2>
                <h2 className="md:hidden block text-[44px] text-white leading-[1.05] max-w-4xl">
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
                  type="button"
                  className={`${NAVBAR_CTA_BUTTON_AUTO_WIDTH_CLASS} mt-12`}
                >
                  Book an Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll reveal space: allows Join Us layer to fully move up, exposing fixed footer */}
      <section className="relative z-10 h-[110vh] bg-transparent pointer-events-none" />

    </div>
  );
};

export default Home;
