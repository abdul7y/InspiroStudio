import React, { useEffect, useRef, useState } from "react";
import SEOHead from "../components/SEOHead";
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
  Palette,
  PenTool,
  Clapperboard,
  Sparkles,
  Fingerprint,
  Monitor,
  Mail,
  Send,
  MessageCircle,
  Loader2,
  ClipboardList,
  User,
  Briefcase,
  ShieldCheck,
  AlertCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  NAVBAR_CTA_BUTTON_AUTO_WIDTH_CLASS,
  NAVBAR_CTA_BUTTON_CLASS,
  NAVBAR_CTA_BUTTON_FULL_WIDTH_CLASS,
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

/* Services data for gradient cards */
const SERVICES = [
  {
    title: "Digital Advertising",
    description:
      "Run great ads with our digital advertising agency. We do Times Square billboard advertising and digital out-of-home advertising and work as a top screen advertising company. We also use programmatic display advertising, LED billboard advertising services, an outdoor digital advertising agency setup, video advertising production, a fresh brand advertising campaign, and smart DOOH advertising solutions.",
    icon: <Palette className="w-7 h-7 text-blue-300" />,

    iconBg: "rgba(59,130,246,0.15)",
  },
  {
    title: "SEO, PPC & Digital Marketing",
    description:
      "Get seen by more people and find new customers with SEO services for small businesses. A dedicated PPC management agency team and a smart search engine optimization consultant. At Inspiro Studio, we also offer local SEO services and smart marketing help.",
    icon: <PenTool className="w-7 h-7 text-emerald-300" />,

    iconBg: "rgba(52,211,153,0.15)",
  },
  {
    title: "Social Media Marketing",
    description:
      "Grow your name with our social media marketing services, fun posts, and real fan growth. We also manage social media management pricing plans and run a Facebook ads agency setup to help you succeed.",
    icon: <Clapperboard className="w-7 h-7 text-amber-300" />,

    iconBg: "rgba(251,191,36,0.15)",
  },
  {
    title: "Animation & Explainer Videos",
    description:
      "As a top explainer video production company, Inspiro Studio makes great 2D animation services, a fun SaaS explainer video, and a clear product demo video. We also work as a 3D motion graphics company and offer animation design services, as well as whiteboard animation service plans.",
    icon: <Sparkles className="w-7 h-7 text-pink-300" />,

    iconBg: "rgba(236,72,153,0.15)",
  },
  {
    title: "Branding & Graphic Design",
    description:
      "From professional logo design services and a custom logo design online tool to complete brand identity design, we make clear visuals. Our creative graphic design company experts offer great branding and design services with a full visual identity design agency experience. We produce affordable logo designs and also make logo designs for startups.",
    icon: <Fingerprint className="w-7 h-7 text-purple-300" />,

    iconBg: "rgba(167,139,250,0.15)",
  },
  {
    title: "Web & App Development",
    description:
      "At Inspiro Studio, we build great digital tools with our custom website development services. We are a mobile app development agency that supports e-commerce website development and responsive web design services made for growth.",
    icon: <Monitor className="w-7 h-7 text-cyan-300" />,

    iconBg: "rgba(34,211,238,0.15)",
  },
];

const PRICING_CARD_GRADIENT =
  "bg-gradient-to-br from-[#070b1a] via-[#050814] to-black";
const PRICING_CARD_GLOW =
  "bg-[radial-gradient(85%_65%_at_20%_0%,rgba(168,85,247,0.24),transparent_60%)]";

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
            <g
              fill="none"
              stroke="#5B5CE2"
              strokeLinecap="round"
              strokeWidth="2.3"
            >
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
          <span className="text-[20px] font-semibold leading-none sm:text-[24px]">
            Johnson
          </span>
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
  const [activeStage, setActiveStage] = useState<string>("delivery");
  const [heroTypedText, setHeroTypedText] = useState("");
  const [heroWordIndex, setHeroWordIndex] = useState(0);
  const [heroIsDeleting, setHeroIsDeleting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "Video Marketing",
    brief: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [aiInsight, setAiInsight] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const buildInsightFallback = (category: string) => {
    const fallbackByCategory: Record<string, string> = {
      "Video Marketing":
        "Your brief is a strong fit for a high-converting narrative video strategy focused on clarity, retention, and conversion.",
      "Product Animation":
        "Your concept is ideal for a product-led animation flow that simplifies technical details and improves buyer confidence.",
      "Branding Package":
        "Your direction supports a premium branding system with cohesive visual language and clear market positioning.",
      "Social Strategy":
        "Your request aligns with a social-first content system built for engagement, consistency, and repeatable creative output.",
    };
    return (
      fallbackByCategory[category] ||
      "Your project direction is clear and commercially strong, and we can map it into a focused production roadmap quickly."
    );
  };

  const resolveContactApiUrl = () => {
    const hostname = window.location.hostname;
    const isLocalHost = hostname === "localhost" || hostname === "127.0.0.1";
    return isLocalHost ? "http://localhost:3001/api/contact" : "/api/contact";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.brief) return;

    setStatus("submitting");
    setErrorMessage(null);
    setAiInsight(null);

    try {
      const fallbackInsight = buildInsightFallback(formData.category);

      const mailResponse = await fetch(resolveContactApiUrl(), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          aiInsight: fallbackInsight,
        }),
      });

      let payload: {
        message?: string;
        aiInsight?: string;
        error?: string;
        details?: string;
      } = {};
      try {
        payload = await mailResponse.json();
      } catch {
        payload = {};
      }

      if (!mailResponse.ok) {
        throw new Error(
          payload.details ||
            payload.error ||
            "Server rejected the email dispatch.",
        );
      }

      setAiInsight(payload.aiInsight || fallbackInsight);
      setStatus("success");
    } catch (error: any) {
      console.error("Submission error:", error);
      setErrorMessage(
        error.message === "Failed to fetch"
          ? "Connection refused. Please ensure your Node.js backend (server.cjs) is running on port 3001."
          : error.message,
      );
      setStatus("error");
    }
  };

  const CALENDLY_LINK = "https://calendly.com/inspirostudio-io/30min";

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
    portfolioItems.map(() => true),
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
      q: "How much does web development cost in 2026?",
      a: "The web development cost in 2026 relies on how big your page is and what it needs to do. Small pages cost less, while big apps with lots of buttons cost more. We always tell you the exact price before we start.",
    },
    {
      q: "Do you provide full-stack development services?",
      a: "Yes! We offer full-stack development services. We build the front part that people see and the back part that keeps everything running behind the scenes.",
    },
    {
      q: "Can you handle SEO and paid advertising together?",
      a: "Yes, we can. We can make your site better for search engines and run paid ads at the exact same time to bring you more visitors.",
    },
    {
      q: "Do you work with startups and SaaS companies?",
      a: "Yes, we do! We love working with new teams and software brands. We help turn your ideas into real, working apps.",
    },
    {
      q: "What is included in your branding and design services?",
      a: "We draw your logo, pick your colors, and make your business look neat and professional across the entire internet.",
    },
    {
      q: "How long does a typical website or app project take? ",
      a: "It changes based on the job. A simple page can take just a few weeks, while a huge mobile app might take a few months.",
    },
  ];

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

    const timer = window.setTimeout(
      () => {
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
      },
      !heroIsDeleting && isWordComplete
        ? holdDelay
        : heroIsDeleting && isWordCleared
          ? restartDelay
          : typingDelay,
    );

    return () => {
      window.clearTimeout(timer);
    };
  }, [heroIsDeleting, heroTypedText, heroWordIndex]);

  return (
    <div className="relative min-h-screen">
      <SEOHead
        title="Inspiro Studio | Video Marketing Agency"
        description="Premium video production, motion design, and conversion-focused digital storytelling. Transform your brand with expert creative support from Inspiro Studio."
        path="/"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Inspiro Studio",
            url: "https://inspirostudio.io",
            logo: "https://inspirostudio.io/images/inspiro-logo.svg",
            sameAs: [
              "https://facebook.com",
              "https://instagram.com",
              "https://x.com",
              "https://linkedin.com",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "sales",
              email: "business@inspirostudio.io",
              url: "https://calendly.com/inspirostudio-io/30min",
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Inspiro Studio",
            url: "https://inspirostudio.io",
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            })),
          },
        ]}
      />
      {/* 1. Hero Section — prod-style: one dominant bloom from the right edge + black base */}
      <section className="relative md:min-h-screen flex items-start px-6 md:px-16 lg:px-24 overflow-hidden bg-black">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          {/* Main right-edge bloom — same placement as inspirostudio.io; purple via CSS vars */}
          <div className="prod-grad-hero-right absolute inset-y-[-8%] right-0 w-[min(92vw,820px)] md:w-[min(78vw,760px)]" />
          <div className="prod-grad-hero-left absolute inset-0 opacity-90" />
        </div>
        {/* Fade to pure black toward bottom (logo strip) */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 md:h-40 bg-gradient-to-t from-black via-black/70 to-transparent" />

        <div className="max-w-7xl mx-auto w-full pt-28 sm:pt-36 md:pt-[200px] lg:pt-[280px] pb-10 sm:pb-20 md:pb-[140px] lg:pb-[180px]">
          <div className="max-w-[900px] relative z-10">
            <h1 className="text-[36px] sm:text-[50px] md:text-[68px] lg:text-[88px] xl:text-[100px] text-white mb-6 md:mb-8 tracking-[-0.03em] leading-[1.05]">
              <span className="font-normal">
                A Web Development Company Built for Businesses That Refuse to
                Blend In
              </span>
              <br className="hidden lg:block" />
              <span className="inline-flex items-end">
                <span className="bg-gradient-to-r from-[#e9d5ff] via-[#c084fc] to-[#a855f7] bg-clip-text text-transparent font-extrabold">
                  {heroTypedText}
                </span>
                <span className="ml-1 inline-block h-[0.88em] w-[3px] rounded-full bg-violet-400 animate-pulse" />
              </span>
            </h1>

            <p className="text-[#a1a1aa] text-base md:text-[19px] mb-8 md:mb-12 max-w-[620px] leading-relaxed font-normal">
              We combine custom website development services, mobile app
              development, SEO, branding, animation, and digital advertising to
              help businesses attract more customers and grow faster.
            </p>

            <div className="flex flex-col items-start mb-10 md:mb-24">
              <a
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${NAVBAR_CTA_BUTTON_AUTO_WIDTH_CLASS} mb-8 md:mb-12`}
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
        <div className="absolute inset-x-0 bottom-0 h-20 md:h-36 lg:h-44 bg-gradient-to-b from-transparent to-black pointer-events-none" />
      </section>

      <div className="relative left-1/2 z-20 -mt-10 w-screen -translate-x-1/2 overflow-hidden bg-gradient-to-b from-[#060f22] to-black pb-6 sm:-mt-12 sm:pb-7 lg:-mt-14 lg:pb-8">
        <div className="relative flex min-h-[78px] w-full items-center overflow-hidden select-none sm:min-h-[90px]">
          <div
            className="animate-infinite-scroll flex min-w-max items-center gap-8 sm:gap-14 lg:gap-20"
            style={{ animationDuration: "22s" }}
          >
            {[...HERO_BRANDS, ...HERO_BRANDS, ...HERO_BRANDS].map(
              (brand, index) => (
                <div
                  key={`${brand}-${index}`}
                  className="flex h-[68px] sm:h-[90px] min-w-[120px] sm:min-w-[198px] lg:min-w-[228px] items-center justify-center"
                >
                  {renderHeroBrandLogo(brand)}
                </div>
              ),
            )}
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
              <div className="inline-block rounded-lg bg-gradient-to-r from-transparent via-violet-700/60 to-transparent p-[1px] mb-4">
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
                Featured Projects & Success Stories
              </h3>

              <p className="text-gray-400 max-w-[560px] mt-6 text-lg">
                Custom websites, mobile apps, branding, SEO, animation, and
                marketing campaigns crafted to elevate brands, increase
                visibility, and drive growth. Explore our work and discover
                what's possible for your business.
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
        <div className="relative z-10 mx-auto mt-10 w-full max-w-7xl px-5 pb-10 sm:pb-[15vh] lg:pb-[20vh] sm:mt-12 sm:px-8 lg:mt-16 lg:px-12">
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
                        prev.map((value, idx) =>
                          idx === index ? true : value,
                        ),
                      )
                    }
                    onPause={() =>
                      setPortfolioPlaying((prev) =>
                        prev.map((value, idx) =>
                          idx === index ? false : value,
                        ),
                      )
                    }
                  />

                  <button
                    type="button"
                    onClick={() => togglePortfolioVideo(index)}
                    aria-label={
                      portfolioPlaying[index] ? "Pause video" : "Play video"
                    }
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

      {/* 3. Services Section — Design & Animation with gradient cards */}
      <section className="relative overflow-hidden bg-black">
        {/* ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-72 bg-blue-600/20 blur-[140px]" />
        </div>

        <div className="relative w-full bg-black overflow-hidden py-20 px-10">
          {/* LEFT CURVE */}
          <img
            src={leftcurve}
            alt=""
            className="absolute lg:left-0 lg:top-1/2 left-0 -bottom-5 -translate-y-1/2 w-[35%] 2xl:max-w-[350px] lg:max-w-[280px] pointer-events-none"
          />

          {/* Section Header — water drop entrance */}
          <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col items-center relative z-10 animate-water-drop-in">
            {/* Badge */}
            <div className="inline-block rounded-lg bg-gradient-to-r from-transparent via-blue-700/60 to-transparent p-[1px] mb-8">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg border-x border-gray-800 bg-black backdrop-blur-xl">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                <span className="text-xs text-gray-200 tracking-widest uppercase">
                  Our Digital Growth Solutions
                </span>
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-[48px] text-white tracking-tight leading-[1.05]">
              End-to-End Digital Solutions For
            </h2>
            <h3 className="text-4xl md:text-[48px] text-gray-400 tracking-tight leading-[1.1] mt-2">
              Modern Brands
            </h3>

            {/* Subtitle */}
            <p className="text-zinc-500 font-semibold text-[15px] mt-6 w-full max-w-lg mx-auto">
              Simple services built to help businesses create, market, and grow
              great websites and apps.
            </p>
          </div>

          {/* RIGHT CURVE */}
          <img
            src={leftcurve}
            alt=""
            className="absolute lg:right-0 lg:top-1/2 right-1 -bottom-5 -scale-x-100 -translate-y-1/2 w-[35%] 2xl:max-w-[350px] lg:max-w-[280px] pointer-events-none"
          />
        </div>

        {/* Service Cards — gradient-colored with staggered water item animation */}
        <div className="max-w-7xl mx-auto relative z-10 pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 2xl:px-32 lg:px-22 md:px-16 px-8">
            {SERVICES.map((service, idx) => (
              <div
                key={idx}
                className="group midnight-card-gradient relative h-full flex flex-col rounded-[26px] border-t border-blue-800 py-12 px-8 shadow-[0_30px_90px_rgba(0,0,0,0.9)] hover:-translate-y-3 hover:border-white/[0.12] hover:shadow-[0_42px_120px_rgba(0,0,0,0.95)] transition-all duration-500 animate-water-item"
                style={{
                  animationDelay: `${200 + idx * 100}ms`,
                }}
              >
                {/* Service icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110"
                  style={{ background: service.iconBg }}
                >
                  {service.icon}
                </div>

                {/* Service title */}
                <h4 className="text-white text-xl font-semibold mb-4">
                  {service.title}
                </h4>

                {/* Service description */}
                <p className="text-zinc-400 text-[14px] leading-relaxed transition-colors duration-300 group-hover:text-zinc-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Recent Projects Section */}
      <section className="relative bg-black overflow-hidden">
        <div className="relative w-full bg-black overflow-hidden py-14 md:py-20">
          {/* LEFT CURVE */}
          <img
            src={leftcurve}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="absolute lg:left-0 lg:top-1/2 left-0 -bottom-5 -translate-y-1/2 w-[35%] 2xl:max-w-[350px] lg:max-w-[280px] pointer-events-none"
          />

          {/* RIGHT CURVE */}
          <img
            src={leftcurve}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="absolute lg:right-0 lg:top-1/2 right-1 -bottom-5 -scale-x-100 -translate-y-1/2 w-[35%] 2xl:max-w-[350px] lg:max-w-[280px] pointer-events-none"
          />

          {/* CENTER CONTENT — water-drop-in style matching Services */}
          <div className="text-center max-w-3xl mx-auto mb-14 flex flex-col items-center relative z-10 animate-water-drop-in">
            {/* BADGE */}
            <div className="inline-block rounded-lg bg-gradient-to-r from-transparent via-blue-700/60 to-transparent p-[1px] mb-8">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg border-x border-gray-800 bg-black backdrop-blur-xl">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                <span className="text-xs text-gray-200 tracking-widest uppercase">
                  Recent Projects
                </span>
              </div>
            </div>

            {/* HEADINGS */}
            <h2 className="text-4xl md:text-[48px] text-white tracking-tight leading-[1.05]">
              Our Recent Projects
            </h2>
            <h3 className="text-4xl md:text-[48px] text-gray-400 tracking-tight leading-[1.1] mt-2">
              Built for Growth. Designed for Impact.
            </h3>

            <p className="text-zinc-500 font-semibold text-[15px] mt-6 w-full max-w-lg mx-auto">
              Explore the way we help companies initiate, grow, and succeed
              through creativity, technology, and marketing strategy. .
            </p>
          </div>
        </div>

        {/* PROJECT CARDS GRID */}
        <div className="max-w-7xl mx-auto relative z-10 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 2xl:px-32 lg:px-22 md:px-16 px-8">
            {[
              {
                title: "Digital Products",
                description:
                  "Modern mobile apps, websites, and e-commerce platforms have been created to draw in visitors, simplify daily operations, and support long-term success.",
                image:
                  "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80",
                tags: ["Web Apps"],
              },
              {
                title: "Brand Experiences",
                description:
                  "Unique brand identities, logo systems, and creative elements designed to foster trust, visibility, and long-term client relationships.",
                image:
                  "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?auto=format&fit=crop&w=800&q=80",
                tags: ["Brand Identity"],
              },
              {
                title: "Audience Growth",
                description:
                  "SEO, paid advertising, social media, and email advertising strategies were prioritized to improve exposure, generate qualified leads, and drive conversions.",
                image:
                  "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
                tags: ["SEO Marketing"],
              },
              {
                title: "Visual Storytelling",
                description:
                  "Dynamic motion design and visual effects for social media, product launches, and immersive brand experiences.",
                image:
                  "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80",
                tags: ["Motion Media"],
              },
            ].map((project, idx) => (
              <div
                key={idx}
                className="group relative h-[580px] rounded-[28px] border border-white/[0.08] p-[2px] transition-all duration-500 hover:-translate-y-3 hover:border-violet-400/30 hover:shadow-[0_55px_150px_rgba(4,10,24,0.95)]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(7,11,26,1) 0%, rgba(5,8,20,1) 50%, rgba(0,0,0,1) 100%)",
                }}
              >
                <div
                  className="pointer-events-none absolute inset-0 rounded-[28px] opacity-80 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(85% 65% at 20% 0%, rgba(168,85,247,0.24), transparent 60%)",
                  }}
                />

                <div className="relative rounded-[26px] bg-[#05060a] p-2 h-full">
                  <div className="relative h-full overflow-hidden rounded-[22px] border border-white/[0.08]">
                    <div
                      className="pointer-events-none absolute inset-0 opacity-80 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        background:
                          "radial-gradient(85% 65% at 20% 0%, rgba(168,85,247,0.24), transparent 60%)",
                      }}
                    />

                    {/* IMAGE */}
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                    />

                    {/* GRADIENT OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-all duration-500 group-hover:via-black/60 group-hover:from-black/95" />

                    {/* CONTENT */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div
                        className="rounded-[21px] border border-white/[0.08] p-6 backdrop-blur-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:border-violet-400/25"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(7,11,26,0.95) 0%, rgba(5,8,20,0.95) 100%)",
                        }}
                      >
                        <div
                          className="pointer-events-none absolute inset-0 rounded-[21px] opacity-70 transition-opacity duration-500 group-hover:opacity-100"
                          style={{
                            background:
                              "radial-gradient(85% 65% at 20% 0%, rgba(168,85,247,0.24), transparent 60%)",
                          }}
                        />

                        <div className="relative">
                          <div className="flex items-center gap-3 mb-3">
                            <h3 className="text-white text-2xl font-bold tracking-tight transition-colors duration-300 group-hover:text-violet-50">
                              {project.title}
                            </h3>
                          </div>

                          <div className="border-t border-zinc-500/80 w-20 rounded-full mb-3 transition-colors duration-300 group-hover:border-violet-400/50" />

                          <p className="text-zinc-400 text-[14px] leading-relaxed mb-4 transition-colors duration-300 group-hover:text-zinc-300">
                            {project.description}
                          </p>

                          <div className="flex gap-2">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-gray-400 text-xs font-medium transition-all duration-300 group-hover:border-violet-400/20 group-hover:bg-violet-500/10 group-hover:text-gray-200"
                              >
                                {tag}
                              </span>
                            ))}
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
      </section>
      {/* 5. Process Section */}
      <section className="relative overflow-hidden bg-black">
        <div className="relative z-10 mt-16 md:mt-24 lg:mt-32">
          {/* HEADER BLOCK */}
          <div className="relative mb-16">
            {/* LEFT CURVE */}
            <img
              src={leftcurve}
              alt=""
              className="absolute left-0 lg:top-1/2 -bottom-5 -translate-y-1/2 w-[35%] 2xl:max-w-[350px] lg:max-w-[280px] pointer-events-none"
            />
            {/* RIGHT CURVE */}
            <img
              src={leftcurve}
              alt=""
              className="absolute right-0 lg:top-1/2 -bottom-5 -scale-x-100 -translate-y-1/2 w-[35%] 2xl:max-w-[350px] lg:max-w-[280px] pointer-events-none"
            />

            {/* HEADING CONTENT */}
            <div className="relative z-10 max-w-3xl mx-auto px-8 md:px-16 lg:px-24 text-center flex flex-col items-center">
              <div className="inline-block rounded-lg bg-gradient-to-r from-transparent via-violet-700/60 to-transparent p-[1px] mb-8">
                <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg border-x border-gray-800 bg-black backdrop-blur-xl">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span className="text-xs text-gray-200 tracking-widest uppercase">
                    Work Flow
                  </span>
                </div>
              </div>

              <h2 className="text-[30px] md:text-[44px] text-white leading-[1.1] tracking-tight">
                Where Structure Meets Creativity:
              </h2>
              <h3 className="text-[26px] md:text-[40px] text-gray-400 leading-[1.1] tracking-tight">
                A Smarter Way to Design
              </h3>

              <p className="text-zinc-500 font-semibold text-[15px] mt-6 w-full max-w-2xl mx-auto">
                We follow a simple, step-by-step plan that turns your basic
                thoughts into great digital tools. Every step has a goal so that
                every design choice is made for a good reason, not just by
                guessing.
              </p>
            </div>
          </div>

          {/* PIPELINE CIRCLES */}
          <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-20 2xl:px-32 mb-16">
            <div className="flex items-start justify-center flex-nowrap sm:gap-0">
              {[
                { id: "research", number: "1", title: "Research" },
                { id: "strategy", number: "2", title: "Strategy" },
                { id: "design", number: "3", title: "Design" },
                { id: "animation", number: "4", title: "Animation" },
                { id: "delivery", number: "5", title: "Delivery" },
              ].map((stage, i) => {
                const stageOrder = [
                  "research",
                  "strategy",
                  "design",
                  "animation",
                  "delivery",
                ];
                const activeIdx = stageOrder.indexOf(activeStage);
                const currentIdx = stageOrder.indexOf(stage.id);
                const isActive = activeStage === stage.id;
                const isPast = currentIdx < activeIdx;
                return (
                  <React.Fragment key={stage.id}>
                    <div className="flex flex-col items-center shrink-0">
                      <button
                        onClick={() => setActiveStage(stage.id)}
                        className={`w-10 h-10 sm:w-[72px] sm:h-[72px] rounded-full flex items-center justify-center text-sm sm:text-xl font-bold border-2 transition-all duration-300 shrink-0 midnight-card-gradient ${
                          isActive
                            ? "border-white text-white shadow-[0_0_30px_rgba(255,255,255,0.35),0_0_60px_rgba(255,255,255,0.15)]"
                            : isPast
                              ? "border-violet-400/40 text-violet-200/80 hover:border-white/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                              : "border-zinc-600/50 text-zinc-400 hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                        }`}
                      >
                        <span className="text-sm sm:text-lg pr-[10px]">
                          {stage.number}
                        </span>
                      </button>
                      <span
                        className={`text-[10px] sm:text-xs font-medium tracking-wide mt-3 whitespace-nowrap transition-colors duration-300 ${
                          isActive
                            ? "text-white"
                            : isPast
                              ? "text-violet-300/70"
                              : "text-zinc-500"
                        }`}
                      >
                        {stage.title}
                      </span>
                    </div>
                    {i < 4 && (
                      <div className="flex-1 flex items-center self-center mx-0 sm:mx-2 min-w-[16px] sm:min-w-[60px]">
                        <svg
                          className="w-full h-4 sm:h-8"
                          viewBox="0 0 120 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 12 Q30 0 60 12 Q90 24 119 12"
                            stroke={
                              isPast
                                ? "rgba(139,92,246,0.5)"
                                : "rgba(63,63,70,0.6)"
                            }
                            strokeWidth="2"
                            strokeLinecap="round"
                            fill="none"
                          />
                        </svg>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* DETAIL CARD */}
          <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-20 2xl:px-32 pb-24">
            <div className="midnight-card-gradient rounded-[26px] border border-violet-800/40 p-8 md:p-12 flex flex-col md:flex-row gap-8 md:gap-16 items-center">
              {/* Left: Large number */}
              <div className="flex-shrink-0">
                <span
                  className="text-[90px] md:text-[140px] font-extrabold leading-none bg-gradient-to-br from-white via-violet-200 to-violet-500/40 bg-clip-text "
                  style={{
                    fontFamily: "'Poppins','Plus Jakarta Sans',sans-serif",
                    letterSpacing: "-0.0em",
                    fontStyle: "italic",
                  }}
                >
                  {activeStage === "research"
                    ? "1"
                    : activeStage === "strategy"
                      ? "2"
                      : activeStage === "design"
                        ? "3"
                        : activeStage === "animation"
                          ? "4"
                          : "5"}
                </span>
              </div>

              {/* Right: Content */}
              <div className="flex-1 w-full">
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
                  {activeStage === "research"
                    ? "Research"
                    : activeStage === "strategy"
                      ? "Strategy"
                      : activeStage === "design"
                        ? "Design"
                        : activeStage === "animation"
                          ? "Animation"
                          : "Delivery"}
                </h3>
                <p className="text-zinc-400 text-[14px] leading-relaxed mb-6">
                  {activeStage === "delivery"
                    ? "We pack everything up perfectly for the coding team. Clean files, organized pictures, and launch tools make sure the final handoff is smooth and safe."
                    : activeStage === "research"
                      ? "We start by learning about the people who use your app, your market, and the other companies out there. It helps us find real problems and neat ideas."
                      : activeStage === "strategy"
                        ? "Next, we pick the main path for your product. We sketch how a user moves through the app, design the map of the pages, and set clear goals."
                        : activeStage === "design"
                          ? "We change the plan into beautiful, clean, and real-looking screens. We also built a matching design kit, so every single page looks like it belongs together."
                          : "We make your app feel alive with smooth movement. From tiny button bounces to clean videos, we add motion that makes the app easy and fun to use."}
                </p>

                {activeStage === "delivery" && (
                  <div className="mb-6">
                    <h4 className="text-white/70 text-xs font-semibold mb-3 uppercase tracking-widest">
                      Deliverables
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Dev hand-off",
                        "Asset library",
                        "Launch toolkit",
                        "Post-launch QA",
                      ].map((d) => (
                        <span
                          key={d}
                          className="px-3 py-1.5 rounded-lg bg-violet-500/10 border border-white/10 text-[12px] text-zinc-300"
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-3 text-zinc-400 text-[13px] mb-4">
                  <span>🚀 Stage</span>
                  <span className="w-1 h-1 rounded-full bg-zinc-600" />
                  <span>
                    {activeStage === "research"
                      ? "Research"
                      : activeStage === "strategy"
                        ? "Strategy"
                        : activeStage === "design"
                          ? "Design"
                          : activeStage === "animation"
                            ? "Animation"
                            : "Delivery"}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-zinc-600" />
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-[11px] font-semibold tracking-wide">
                    <svg
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    {activeStage === "delivery" ? "1 week" : "2 weeks"}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-zinc-500 text-[13px]">
                    Stage{" "}
                    {activeStage === "research"
                      ? "1"
                      : activeStage === "strategy"
                        ? "2"
                        : activeStage === "design"
                          ? "3"
                          : activeStage === "animation"
                            ? "4"
                            : "5"}{" "}
                    of 5
                  </span>
                  {activeStage !== "delivery" && (
                    <button
                      onClick={() => {
                        const order = [
                          "research",
                          "strategy",
                          "design",
                          "animation",
                          "delivery",
                        ];
                        const idx = order.indexOf(activeStage);
                        if (idx < order.length - 1)
                          setActiveStage(order[idx + 1]);
                      }}
                      className="text-violet-400 text-[13px] font-semibold flex items-center gap-1 hover:text-violet-300 transition-colors"
                    >
                      Next stage →
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 6. Technology Platforms / Tools Section */}
      <section className="relative overflow-hidden bg-black">
        <div className="relative w-full bg-black overflow-hidden py-16 md:py-28 lg:py-40">
          {/* background glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-64 bg-violet-600/10 blur-[120px] transform-gpu" />
          </div>

          <div className="relative mb-16">
            {/* LEFT CURVE */}
            <img
              src={leftcurve}
              alt=""
              className="absolute left-0 lg:top-1/2 -bottom-5 -translate-y-1/2 w-[35%] 2xl:max-w-[350px] lg:max-w-[280px] pointer-events-none"
            />
            {/* RIGHT CURVE */}
            <img
              src={leftcurve}
              alt=""
              className="absolute right-0 lg:top-1/2 -bottom-5 -scale-x-100 -translate-y-1/2 w-[35%] 2xl:max-w-[350px] lg:max-w-[280px] pointer-events-none"
            />

            {/* HEADER */}
            <div className="relative z-10 max-w-3xl mx-auto px-8 md:px-16 lg:px-24 text-center flex flex-col items-center">
              <div className="inline-block rounded-lg bg-gradient-to-r from-transparent via-violet-700/60 to-transparent p-[1px] mb-8">
                <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg border-x border-gray-800 bg-black backdrop-blur-xl">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span className="text-xs text-gray-200 tracking-widest uppercase">
                    Technology Platforms
                  </span>
                </div>
              </div>

              <h2 className="text-[30px] md:text-[44px] text-white leading-[1.1] tracking-tight">
                Our Proven Technology Platforms.
              </h2>
              <h3 className="text-[26px] md:text-[40px] text-gray-400 leading-[1.1] tracking-tight">
                Platforms & Tools We Master
              </h3>

              <p className="text-zinc-500 font-semibold text-[15px] mt-6 w-full max-w-2xl mx-auto leading-relaxed">
                We use a clean, modern mix of tools to build fast and strong apps and websites. Every piece of software we pick is chosen to make sure your product is fast, safe, and easy for people to use. Our goal is to turn big ideas into smooth, simple, and ready-for-tomorrow tools.

              </p>
            </div>
          </div>

          {/* TOOLS MARQUEE CUBES */}
          <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-20 2xl:px-32 mt-10 space-y-6">
            {/* Row 1 — Frontend */}
            <div className="tools-marquee">
              <div className="tools-marquee-track speed-medium">
                {[
                  {
                    name: "React",
                    src: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
                  },
                  {
                    name: "Next.js",
                    src: "https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg",
                  },
                  {
                    name: "TypeScript",
                    src: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
                  },
                  {
                    name: "Tailwind",
                    src: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
                  },
                  ...Array.from({ length: 3 }, () => [
                    {
                      name: "React",
                      src: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
                    },
                    {
                      name: "Next.js",
                      src: "https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg",
                    },
                    {
                      name: "TypeScript",
                      src: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
                    },
                    {
                      name: "Tailwind",
                      src: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
                    },
                  ]).flat(),
                ].map((tool, i) => (
                  <div key={`fe-${i}`} className="tool-cube">
                    <img
                      src={tool.src}
                      alt={tool.name}
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="tool-cube-label">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2 — Backend & API — reverse direction */}
            <div className="tools-marquee">
              <div className="tools-marquee-track speed-slow">
                {[
                  {
                    name: "Node.js",
                    src: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
                  },
                  {
                    name: "Python",
                    src: "https://www.vectorlogo.zone/logos/python/python-icon.svg",
                  },
                  {
                    name: "GraphQL",
                    src: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
                  },
                  {
                    name: "PostgreSQL",
                    src: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg",
                  },
                  ...Array.from({ length: 3 }, () => [
                    {
                      name: "Node.js",
                      src: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
                    },
                    {
                      name: "Python",
                      src: "https://www.vectorlogo.zone/logos/python/python-icon.svg",
                    },
                    {
                      name: "GraphQL",
                      src: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
                    },
                    {
                      name: "PostgreSQL",
                      src: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg",
                    },
                  ]).flat(),
                ].map((tool, i) => (
                  <div key={`be-${i}`} className="tool-cube">
                    <img
                      src={tool.src}
                      alt={tool.name}
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="tool-cube-label">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 3 — Design & 3D */}
            <div className="tools-marquee">
              <div className="tools-marquee-track speed-fast">
                {[
                  {
                    name: "Figma",
                    src: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
                  },
                  {
                    name: "After Effects",
                    src: "https://www.vectorlogo.zone/logos/adobe/adobe-icon.svg",
                  },
                  {
                    name: "Blender",
                    src: "https://www.vectorlogo.zone/logos/blender/blender-icon.svg",
                  },
                  { name: "Spline", src: "" },
                  ...Array.from({ length: 3 }, () => [
                    {
                      name: "Figma",
                      src: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
                    },
                    {
                      name: "After Effects",
                      src: "https://www.vectorlogo.zone/logos/adobe/adobe-icon.svg",
                    },
                    {
                      name: "Blender",
                      src: "https://www.vectorlogo.zone/logos/blender/blender-icon.svg",
                    },
                    { name: "Spline", src: "" },
                  ]).flat(),
                ].map((tool, i) => (
                  <div key={`de-${i}`} className="tool-cube">
                    {tool.src ? (
                      <img
                        src={tool.src}
                        alt={tool.name}
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-[26px] h-[26px] text-white/70"
                      >
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                      </svg>
                    )}
                    <span className="tool-cube-label">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="relative z-10 max-w-3xl mx-auto px-8 md:px-16 lg:px-24 mt-16 text-center flex flex-col items-center">
            <p className="text-zinc-400 text-[15px] font-semibold mb-8">
              Build Your Software Development Team with us.
            </p>
            <a
              href="https://calendly.com/inspirostudio-io/30min"
              target="_blank"
              rel="noopener noreferrer"
              className={NAVBAR_CTA_BUTTON_AUTO_WIDTH_CLASS}
            >
              Get A Quote
            </a>
          </div>
        </div>
      </section>
      {/* PRICING SECTION */}
      <section className="relative overflow-hidden bg-black">
        <div className="relative w-full bg-black overflow-hidden py-16 md:py-28 lg:py-40">
          {/* background glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-64 bg-violet-600/10 blur-[120px] transform-gpu" />
          </div>

          <div className="relative mb-20">
            {/* LEFT CURVE */}
            <img
              src={leftcurve}
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              className="absolute left-0 lg:top-1/2 -bottom-5 -translate-y-1/2 w-[35%] 2xl:max-w-[350px] lg:max-w-[280px] pointer-events-none"
            />

            {/* RIGHT CURVE */}
            <img
              src={leftcurve}
              alt="Right Curve"
              className="absolute right-0 lg:top-1/2 -bottom-5 -scale-x-100 -translate-y-1/2 w-[35%] 2xl:max-w-[350px] lg:max-w-[280px] pointer-events-none"
            />

            {/* heading */}
            <div className="relative z-10 max-w-3xl mx-auto px-8 md:px-16 lg:px-24 text-center flex flex-col items-center">
              <div className="inline-block rounded-lg bg-gradient-to-r from-transparent via-violet-700/60 to-transparent p-[1px] mb-6">
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

              <p className="text-zinc-400 text-[18px] mt-6 max-w-2xl mx-auto leading-relaxed">
                Our pricing plans are designed to make getting started as
                effortless as possible. With flexible options tailored to suit a
                variety of needs and budgets.
              </p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10 px-8 md:px-16 lg:px-24">
            {/* cards */}
            <div className="w-full grid grid-cols-1 items-stretch gap-8 lg:grid-cols-3">
              {/* PRO WEEKLY */}

              <div
                className={`group relative h-full w-full rounded-[34px] border border-white/[0.08] 
                  ${PRICING_CARD_GRADIENT}
                  shadow-[0_45px_140px_rgba(0,0,0,0.85)] overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-3 hover:border-violet-300/20 hover:shadow-[0_60px_160px_rgba(0,0,0,0.92)]`}
              >
                {/* top blue glow */}
                <div
                  className={`absolute inset-0 opacity-80 transition-opacity duration-500 group-hover:opacity-100 ${PRICING_CARD_GLOW}`}
                />

                <div className="relative px-8 md:px-9 pt-10 pb-8 min-h-[690px] flex-1 flex flex-col">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex flex-col items-start gap-3">
                      <div className="px-5 py-4 rounded-xl bg-slate-900 shadow-xl shadow-violet-950 border border-violet-900 flex items-center justify-center transition-all duration-500 group-hover:border-violet-400/40 group-hover:shadow-[0_0_35px_rgba(168,85,247,0.28)]">
                        <Rocket />
                      </div>
                      <span className="text-white font-semibold text-[15px] transition-colors duration-300 group-hover:text-violet-50">
                        Pro Weekly
                      </span>
                    </div>

                    <span
                      className="px-3 py-2 rounded-lg bg-violet-500/10 border bg-gradient-to-t from-gray-500/20 to-violet-900/20 border-violet-500/20 transition-all duration-300 group-hover:border-violet-400/30 group-hover:text-white 
        text-[13px] font-semibold text-violet-100"
                    >
                      Most Pick
                    </span>
                  </div>

                  {/* Price */}
                  <div className="relative mb-6 min-h-[84px]">
                    <div className="flex items-end gap-2">
                      <span className="text-white text-[44px]">$790</span>
                      <span className="text-gray-500 text-[14px] mb-3">
                        /Month
                      </span>
                      <span className="text-gray-600 text-[44px] line-through opacity-70">
                        $1450
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="min-h-[70px] text-gray-400 text-[14px] leading-relaxed mb-7 transition-colors duration-300 group-hover:text-gray-300">
                    Our basic pricing plan is designed to offer great value
                    while providing the essential features you need to get
                    started.
                  </p>

                  {/* Pills */}
                  <div className="flex gap-3 mb-8">
                    <span className="px-4 py-1.5 rounded-lg bg-violet-500/10 border border-white/10 text-[13px] transition-all duration-300 group-hover:border-violet-400/25 group-hover:bg-violet-500/15">
                      <b>100+</b>{" "}
                      <span className="text-gray-400">Projects</span>
                    </span>
                    <span className="px-4 py-1.5 rounded-lg bg-violet-500/10 border border-white/10 text-[13px] text-gray-300 transition-all duration-300 group-hover:border-violet-400/25 group-hover:bg-violet-500/15">
                      <b>75+</b>{" "}
                      <span className="text-gray-400">Revisions</span>
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
                        <BadgeCheck className="h-5 w-5 text-violet-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* CTA */}
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

              {/* GROWTH */}
              <div
                className={`group relative h-full w-full rounded-[34px] border border-white/[0.08] 
                  ${PRICING_CARD_GRADIENT}
                  shadow-[0_45px_140px_rgba(0,0,0,0.85)] overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-3 hover:border-violet-300/20 hover:shadow-[0_60px_160px_rgba(0,0,0,0.92)]`}
              >
                {/* top glow */}
                <div
                  className={`absolute inset-0 opacity-80 transition-opacity duration-500 group-hover:opacity-100 ${PRICING_CARD_GLOW}`}
                />

                <div className="relative px-8 md:px-9 pt-10 pb-8 min-h-[690px] flex-1 flex flex-col">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex flex-col items-start gap-3">
                      <div className="px-5 py-4 rounded-xl bg-slate-900 shadow-xl shadow-violet-950 border border-violet-900 flex items-center justify-center transition-all duration-500 group-hover:border-violet-400/40 group-hover:shadow-[0_0_35px_rgba(168,85,247,0.28)]">
                        <Sparkles />
                      </div>
                      <span className="text-white font-semibold text-[15px] transition-colors duration-300 group-hover:text-violet-50">
                        Growth Plan
                      </span>
                    </div>

                    <span
                      className="px-3 py-2 rounded-lg bg-violet-500/10 border bg-gradient-to-t from-gray-500/20 to-violet-900/20 border-violet-500/20 transition-all duration-300 group-hover:border-violet-400/30 group-hover:text-white 
        text-[13px] font-semibold text-violet-100"
                    >
                      Popular
                    </span>
                  </div>

                  {/* Price */}
                  <div className="relative mb-6 min-h-[84px]">
                    <div className="flex items-end gap-2">
                      <span className="text-white text-[44px]">$1,499</span>
                      <span className="text-gray-500 text-[14px] mb-3">
                        /Month
                      </span>
                      <span className="text-gray-600 text-[44px] line-through opacity-70">
                        $2,299
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="min-h-[70px] text-gray-400 text-[14px] leading-relaxed mb-7 transition-colors duration-300 group-hover:text-gray-300">
                    Our most popular plan for growing businesses that need extra
                    capacity and faster delivery.
                  </p>

                  {/* Pills */}
                  <div className="flex gap-3 mb-8">
                    <span className="px-4 py-1.5 rounded-lg bg-violet-500/10 border border-white/10 text-[13px] transition-all duration-300 group-hover:border-violet-400/25 group-hover:bg-violet-500/15">
                      <b>300+</b>{" "}
                      <span className="text-gray-400">Projects</span>
                    </span>
                    <span className="px-4 py-1.5 rounded-lg bg-violet-500/10 border border-white/10 text-[13px] text-gray-300 transition-all duration-300 group-hover:border-violet-400/25 group-hover:bg-violet-500/15">
                      <b>150+</b>{" "}
                      <span className="text-gray-400">Revisions</span>
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
                        <BadgeCheck className="h-5 w-5 text-violet-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* CTA */}
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
                className={`group relative h-full w-full rounded-[34px] border border-white/[0.08] 
                  ${PRICING_CARD_GRADIENT}
                  shadow-[0_45px_140px_rgba(0,0,0,0.85)] overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-3 hover:border-violet-300/20 hover:shadow-[0_60px_160px_rgba(0,0,0,0.92)]`}
              >
                {/* top indigo/blue glow */}
                <div
                  className={`absolute inset-0 opacity-80 transition-opacity duration-500 group-hover:opacity-100 ${PRICING_CARD_GLOW}`}
                />

                <div className="relative px-8 md:px-9 pt-10 pb-8 min-h-[690px] flex-1 flex flex-col">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex flex-col items-start gap-3">
                      <div className="px-5 py-4 rounded-xl bg-slate-900 shadow-xl shadow-violet-950 border border-violet-900 flex items-center justify-center transition-all duration-500 group-hover:border-violet-400/40 group-hover:shadow-[0_0_35px_rgba(168,85,247,0.28)]">
                        <Power /> {/* or Rocket if you want consistency */}
                      </div>

                      <span className="text-white font-semibold text-[15px] transition-colors duration-300 group-hover:text-violet-50">
                        Premium
                      </span>
                    </div>

                    <span
                      className="px-3 py-2 rounded-lg bg-violet-500/10 border bg-gradient-to-t from-gray-500/20 to-violet-900/20 border-violet-500/20 transition-all duration-300 group-hover:border-violet-400/30 group-hover:text-white 
        text-[13px] font-semibold text-violet-100"
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
                    <span className="px-4 py-1.5 rounded-lg bg-violet-500/10 border border-white/10 text-[13px] transition-all duration-300 group-hover:border-violet-400/25 group-hover:bg-violet-500/15">
                      <b>650+</b>{" "}
                      <span className="text-gray-400">Projects</span>
                    </span>
                    <span className="px-4 py-1.5 rounded-lg bg-violet-500/10 border border-white/10 text-[13px] transition-all duration-300 group-hover:border-violet-400/25 group-hover:bg-violet-500/15">
                      <b>250+</b>{" "}
                      <span className="text-gray-400">Revisions</span>
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
                        <BadgeCheck className="h-5 w-5 text-violet-500" />
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
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-72 bg-violet-600/20 blur-[140px] transform-gpu" />
        </div>

        <div className="relative w-full bg-black overflow-hidden py-16 px-6 md:px-10">
          <img
            src={leftcurve}
            alt=""
            className="absolute lg:left-0 lg:top-1/2 left-0 -bottom-5 -translate-y-1/2 w-[35%] 2xl:max-w-[350px] lg:max-w-[280px]   pointer-events-none"
          />

          <div className="text-center max-w-3xl mx-auto mb-28 flex flex-col items-center  relative z-10">
            <div
              className="inline-block rounded-lg bg-gradient-to-r 
                    from-transparent via-violet-700/60 to-transparent 
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
Trusted By Startups, SaaS Brands & Growing Businesses
            </h2>

            {/* <h3 className="text-4xl md:text-[48px] text-gray-400 tracking-tight leading-[1.1] mt-2">
              Process and Final Quality
            </h3> */}

            <p className="text-zinc-400 font-semibold text-[15px] mt-6 w-full max-w-lg mx-auto">
             Read what our clients say about how we helped them build trust and look great.

            </p>
            {/* <div className="relative w-full max-w-[400px] mt-8 overflow-hidden opacity-30 grayscale select-none pointer-events-none">
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
            </div> */}

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

        <div className="max-w-7xl mx-auto relative z-10">
          {/* header */}

          {/* testimonial cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-8 md:px-16 lg:px-20 2xl:px-32">
            {[
              {
                image: avatar1,
                name: "Sarah Mitchell,",
                role: "Product Manager",
                company: "Innovate Solutions",
                text: "Working with the Inspiro team changed our product path completely. The team learned the goals fast and made a clean, fresh screen layout that users love. Talking together was easy the whole time. ",
              },
              {
                image: avatar2,
                name: "James Carter,",
                role: "SaaS Founder",
                company: "Nexus Digital",
                text: "We saw a big jump in happy users after the new design. Inspiro Studio focuses on smart layouts that really work. It was not just pretty to look at; it worked great.",
              },
              {
                image: avatar3,
                name: "Ayesha Khan,",
                role: "Tech Lead",
                company: "GreenLeaf Enterprises",
                text: "From the basic plan to the final code, everything was done perfectly. The team is fun, creative, and very good with new tech tools. They always finished on time",
              },
              {
                image: avatar3,
                name: "Daniel Roberts",
                role: "Startup Founder",
                company: "PixelWorks Studio",
                text: "With Inspiro Studio, we came up with just a simple thought, and the team turned it into a real, working, and growing app. The path was clear, organized, and very fast. ",
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
                name: "Michael Lee,",
                role: " Business Owner",
                company: "Fusion Studio",
                text: "The best part is how honest and steady they are. They are not just a group you hire once but a true friend for your tech and design needs. ",
              },
            ].map((t, idx) => (
              <div
                key={idx}
                className="group midnight-card-gradient relative h-full flex flex-col rounded-[26px]
              border-t 
              border-violet-800
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
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
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
                  <div className="text-white font-semibold flex items-center gap-0.5 text-[14px] transition-colors duration-300 group-hover:text-violet-50">
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
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-violet-600/50 to-transparent z-20"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-violet-600/10 blur-[80px] pointer-events-none z-10"></div>
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

            <div className="relative z-10 max-w-3xl mx-auto px-8 md:px-16 lg:px-24 text-center flex flex-col items-center mb-16">
              {/* <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#1a0a1e]/80 border border-white/[0.05] mb-10 backdrop-blur-xl">
                <span className="w-1 h-1 rounded-full bg-violet-400"></span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.25em]">
                  FAQ
                </span>
              </div> */}
              <div
                className="inline-block rounded-lg bg-gradient-to-r 
                    from-transparent via-violet-700/60 to-transparent 
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

          <div className="max-w-7xl mx-auto relative z-10 px-8 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto space-y-4">
              {faqItems.map((item, idx) => (
                <div
                  key={idx}
                  className={`midnight-card-gradient border border-violet-100/15 rounded-[24px] overflow-hidden group hover:border-white/[0.08] transition-all duration-500 cursor-pointer ${activeFaq === idx ? "border-white/[0.12]" : ""}`}
                  onMouseEnter={() => setActiveFaq(idx)}
                  onMouseLeave={() =>
                    setActiveFaq((current) =>
                      current === idx ? null : current,
                    )
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

      {/* 9. Contact Section */}
      <section className="relative bg-transparent py-12 md:py-16 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div
            className={`group relative w-full rounded-[32px] border border-white/[0.08] ${PRICING_CARD_GRADIENT} shadow-[0_45px_140px_rgba(0,0,0,0.9),0_0_60px_rgba(168,85,247,0.1)] overflow-hidden transition-[border-color,box-shadow] duration-500 hover:border-violet-400/25 hover:shadow-[0_60px_160px_rgba(0,0,0,0.95),0_0_80px_rgba(192,132,252,0.15)]`}
          >
            <div className="pointer-events-none absolute inset-0 opacity-80 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(75%_55%_at_50%_0%,rgba(192,132,252,0.22),transparent_65%)]" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

            <div className="relative z-10 py-10 md:py-12 px-6 md:px-12">
              {status === "success" ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  <div className="text-center lg:text-left">
                    <div className="w-14 h-14 bg-violet-500/10 rounded-2xl flex items-center justify-center mb-6 border border-violet-500/20 mx-auto lg:mx-0 shadow-[0_0_20px_rgba(168,85,247,0.25)]">
                      <ShieldCheck className="w-7 h-7 text-violet-400" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight leading-tight">
                      Mailed to Inbox.
                    </h2>
                    <p className="text-gray-400 text-base mb-8 max-w-sm mx-auto lg:mx-0">
                      Your project details have been securely delivered to{" "}
                      <br />
                      <span className="text-white font-bold bg-white/5 px-2 py-1 rounded-lg border border-white/10 inline-block mt-2">
                        business@inspirostudio.io
                      </span>
                    </p>
                    {aiInsight && (
                      <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-left backdrop-blur-xl relative overflow-hidden shadow-inner group/ai">
                        <div className="absolute top-0 right-0 p-4 opacity-30">
                          <Sparkles className="w-5 h-5 text-violet-300" />
                        </div>
                        <h4 className="text-[10px] font-black text-violet-300 uppercase tracking-[0.3em] mb-3 flex items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-violet-300 mr-2 animate-pulse"></span>
                          Studio Intelligence
                        </h4>
                        <p className="text-gray-300 italic leading-relaxed font-medium text-[15px]">
                          "{aiInsight}"
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="bg-gradient-to-br from-[#070b1a] via-[#050814] to-black border border-white/10 rounded-3xl p-6 backdrop-blur-2xl shadow-inner">
                    <div className="flex items-center space-x-3 mb-6 border-b border-white/10 pb-3">
                      <ClipboardList className="w-4 h-4 text-gray-500" />
                      <span className="text-[11px] font-black text-gray-500 uppercase tracking-widest">
                        Live Dispatch Receipt
                      </span>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <User className="w-4 h-4 text-violet-300 mt-0.5" />
                        <div>
                          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1">
                            Identity
                          </p>
                          <p className="text-white font-bold">
                            {formData.name}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <Briefcase className="w-4 h-4 text-violet-400 mt-0.5" />
                        <div>
                          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1">
                            Service Type
                          </p>
                          <p className="text-white font-bold">
                            {formData.category}
                          </p>
                        </div>
                      </div>
                      <div className="pt-3 border-t border-white/5">
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-2">
                          Project Requirement
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed italic line-clamp-3">
                          "{formData.brief}"
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setStatus("idle")}
                      className={`${NAVBAR_CTA_BUTTON_FULL_WIDTH_CLASS} group mt-8`}
                    >
                      <span>Submit Another Brief</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
                    <div className="w-full max-w-[480px]">
                      <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-bold text-white mb-4 tracking-tight leading-[1.05]">
                        TELL US <br />
                        <span className="text-violet-300">EVERYTHING</span>.
                      </h2>
                      <p className="text-sm md:text-base text-[#a1a1aa] mb-6 leading-relaxed max-w-md font-medium opacity-80">
                        Your project inquiry is about to be mailed to{" "}
                        <span className="text-white border-b border-violet-500/50 pb-1">
                          business@inspirostudio.io
                        </span>
                        .
                      </p>
                      <div className="space-y-6">
                        <ContactInfoItem
                          icon={<Mail className="w-4 h-4" />}
                          title="Business Dispatch"
                          content="business@inspirostudio.io"
                        />
                        <ContactInfoItem
                          icon={<MessageCircle className="w-4 h-4" />}
                          title="Agency Support"
                          content="Live inbox testing active"
                        />
                      </div>
                    </div>
                    <div className="relative group contact-water-shell w-full max-w-[580px]">
                      <div className="contact-water-drop"></div>
                      <div className="contact-water-drop-secondary"></div>
                      <div className="contact-water-ripple contact-water-ripple-one"></div>
                      <div className="contact-water-ripple contact-water-ripple-two"></div>
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-500/25 via-fuchsia-400/25 to-violet-500/25 rounded-[32px] blur-xl opacity-75 group-hover:opacity-100 transition duration-700"></div>
                      <div className="midnight-card-gradient relative border border-white/10 rounded-[24px] p-6 md:p-8 shadow-2xl animate-water-drop-in">
                        <h3
                          className="text-xl font-bold text-white mb-6 tracking-tight flex items-center animate-water-item"
                          style={{ animationDelay: "120ms" }}
                        >
                          Project Contact Form
                          {status === "submitting" && (
                            <Loader2 className="ml-3 w-4 h-4 text-violet-300 animate-spin" />
                          )}
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-5">
                          {status === "error" && (
                            <div
                              className="bg-red-500/10 border border-red-500/20 rounded-2xl p-4 flex items-start space-x-3 text-red-400 text-sm animate-water-item"
                              style={{ animationDelay: "180ms" }}
                            >
                              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                              <div>
                                <p className="font-bold mb-1">
                                  Dispatch Failed
                                </p>
                                <p className="opacity-80 leading-relaxed">
                                  {errorMessage}
                                </p>
                              </div>
                            </div>
                          )}
                          <div
                            className="grid grid-cols-1 md:grid-cols-2 gap-5 animate-water-item"
                            style={{ animationDelay: "220ms" }}
                          >
                            <div className="space-y-2">
                              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                                Name / Brand
                              </label>
                              <input
                                required
                                type="text"
                                value={formData.name}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    name: e.target.value,
                                  })
                                }
                                disabled={status === "submitting"}
                                className="w-full contact-water-input border rounded-2xl px-5 py-4 text-[14px] text-white placeholder:text-slate-300/55 focus:outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                placeholder="e.g. Acme Corp"
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                                Contact Email
                              </label>
                              <input
                                required
                                type="email"
                                value={formData.email}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    email: e.target.value,
                                  })
                                }
                                disabled={status === "submitting"}
                                className="w-full contact-water-input border rounded-2xl px-5 py-4 text-[14px] text-white placeholder:text-slate-300/55 focus:outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                placeholder="you@domain.com"
                              />
                            </div>
                          </div>
                          <div
                            className="space-y-2 animate-water-item"
                            style={{ animationDelay: "300ms" }}
                          >
                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                              Category
                            </label>
                            <div className="relative">
                              <select
                                value={formData.category}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    category: e.target.value,
                                  })
                                }
                                disabled={status === "submitting"}
                                className="w-full contact-water-input border rounded-2xl px-5 py-4 text-[14px] text-white focus:outline-none transition-all appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                              >
                                <option className="bg-[#0a1428]">
                                  Video Marketing
                                </option>
                                <option className="bg-[#0a1428]">
                                  Product Animation
                                </option>
                                <option className="bg-[#0a1428]">
                                  Branding Package
                                </option>
                                <option className="bg-[#0a1428]">
                                  Social Strategy
                                </option>
                              </select>
                              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                                <ArrowRight className="w-4 h-4 rotate-90" />
                              </div>
                            </div>
                          </div>
                          <div
                            className="space-y-2 animate-water-item"
                            style={{ animationDelay: "380ms" }}
                          >
                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                              Project Brief
                            </label>
                            <textarea
                              required
                              rows={4}
                              value={formData.brief}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  brief: e.target.value,
                                })
                              }
                              disabled={status === "submitting"}
                              className="w-full contact-water-input min-h-[120px] border rounded-2xl px-5 py-4 text-[14px] text-white placeholder:text-slate-300/55 focus:outline-none transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                              placeholder="What do you need from our studio?"
                            ></textarea>
                          </div>
                          <button
                            type="submit"
                            disabled={status === "submitting"}
                            className={`${NAVBAR_CTA_BUTTON_FULL_WIDTH_CLASS} contact-water-submit relative overflow-hidden group shadow-2xl animate-water-item`}
                            style={{ animationDelay: "460ms" }}
                          >
                            <span className="relative z-10">
                              {status === "submitting"
                                ? "Mailing to Studio..."
                                : "Mail Project to Inbox"}
                            </span>
                            {status === "submitting" ? (
                              <Loader2 className="w-4 h-4 animate-spin" />
                            ) : (
                              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            )}
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ContactInfoItem: React.FC<{
  icon: React.ReactNode;
  title: string;
  content: string;
}> = ({ icon, title, content }) => (
  <div className="flex items-start space-x-4 group">
    <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-violet-300 group-hover:bg-violet-500/10 group-hover:border-violet-500/20 transition-all duration-300 shadow-xl">
      {icon}
    </div>
    <div>
      <h4 className="text-base font-bold text-white mb-0.5 tracking-tight group-hover:text-violet-300 transition-colors">
        {title}
      </h4>
      <p className="text-gray-400 font-medium text-[14px]">{content}</p>
    </div>
  </div>
);

export default Home;
