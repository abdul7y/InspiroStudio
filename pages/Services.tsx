import React from "react";
import { Link } from "react-router-dom";
import {
  Layers,
  Clapperboard,
  Sparkles,
  LayoutDashboard,
  Palette,
  Globe,
  Target,
  Boxes,
  Zap,
  Users,
  ShieldCheck,
  BookOpen,
  Search,
  PenLine,
  Film,
  Music,
  ArrowRight,
  Check,
} from "lucide-react";
import SEOHead from "../components/SEOHead";
import { NAVBAR_CTA_BUTTON_AUTO_WIDTH_CLASS } from "../constants/buttonStyles";

const CALENDLY_LINK = "https://calendly.com/inspirostudio-io/30min";

type IconType = React.ComponentType<{ className?: string }>;

const SectionHeading: React.FC<{
  badge: string;
  titleTop: string;
  titleBottom: string;
  description?: string;
}> = ({ badge, titleTop, titleBottom, description }) => (
  <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center mb-16">
    <div className="inline-block rounded-lg bg-gradient-to-r from-transparent via-blue-700/60 to-transparent p-[1px] mb-6">
      <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg border-x border-gray-800 bg-black backdrop-blur-xl">
        <span className="w-1.5 h-1.5 rounded-full bg-white" />
        <span className="text-xs text-gray-200 tracking-widest uppercase">
          {badge}
        </span>
      </div>
    </div>

    <h2 className="text-[38px] md:text-[52px] text-white leading-[1.08] tracking-tight">
      {titleTop}
    </h2>
    <h3 className="text-[30px] md:text-[44px] text-gray-400 leading-[1.1] tracking-tight mt-2">
      {titleBottom}
    </h3>

    {description && (
      <p className="text-gray-400 max-w-[560px] mt-6 text-lg leading-relaxed">
        {description}
      </p>
    )}
  </div>
);

const services: {
  icon: IconType;
  title: string;
  description: string;
  tags: string[];
}[] = [
  {
    icon: Layers,
    title: "UI/UX Design for Modern Digital Products",
    description:
      "Research-led interface and experience design that turns complex products into clean, intuitive flows users actually enjoy.",
    tags: ["User Research", "Wireframing", "Design Systems"],
  },
  {
    icon: Clapperboard,
    title: "Professional 2D Storyboard & Visual Storytelling",
    description:
      "Frame-by-frame storyboards and concept art that map every beat of your story before a single second is animated.",
    tags: ["Storyboards", "Concept Art", "Scene Planning"],
  },
  {
    icon: Sparkles,
    title: "Creative Animation & Motion Graphics",
    description:
      "High-end 2D animation and motion design for explainers, product launches, and social content built to be watched.",
    tags: ["2D Animation", "Motion Design", "Explainers"],
  },
  {
    icon: LayoutDashboard,
    title: "Digital Product Design & UX Strategy",
    description:
      "End-to-end product thinking — from strategy and prototyping to UX audits that keep your roadmap sharp and measurable.",
    tags: ["Product Strategy", "Prototyping", "UX Audits"],
  },
  {
    icon: Palette,
    title: "Brand Identity & Creative Direction",
    description:
      "Distinct visual identities and art direction that give your brand a confident, consistent voice across every touchpoint.",
    tags: ["Logo Design", "Brand Guidelines", "Art Direction"],
  },
  {
    icon: Globe,
    title: "Responsive Website Design & Development",
    description:
      "Pixel-perfect, fast-loading websites engineered to convert — designed and built to perform on every screen size.",
    tags: ["Web Design", "Frontend Dev", "CMS Integration"],
  },
];

const advantages: { icon: IconType; title: string; description: string }[] = [
  {
    icon: Target,
    title: "Conversion-Focused Design",
    description:
      "Every screen is designed around a clear goal, so good-looking work also moves your core business metrics.",
  },
  {
    icon: Boxes,
    title: "Scalable Design Systems",
    description:
      "Reusable components and tokens that keep your product consistent as your team and feature set grow.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description:
      "Tight feedback loops and clear checkpoints mean you see polished work quickly, without the agency drag.",
  },
  {
    icon: Users,
    title: "Dedicated Creative Team",
    description:
      "A senior designer, animator, and producer assigned to your project — not a rotating cast of freelancers.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-Level Quality",
    description:
      "Production standards and review gates trusted by brands shipping to millions of users worldwide.",
  },
  {
    icon: BookOpen,
    title: "Strategic Storytelling",
    description:
      "We lead with narrative, so your visuals explain, persuade, and stay memorable long after the first watch.",
  },
];

const stats: { value: string; label: string }[] = [
  { value: "250+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "8+ Yrs", label: "Industry Experience" },
  { value: "20+", label: "Industries Served" },
];

const processSteps: {
  step: string;
  icon: IconType;
  title: string;
  description: string;
}[] = [
  {
    step: "01",
    icon: Search,
    title: "Onboarding & Discovery",
    description:
      "We start with your goals, brand, and audience — aligning on scope and success before any design begins.",
  },
  {
    step: "02",
    icon: PenLine,
    title: "Script & Concept",
    description:
      "We shape the core message and creative direction, turning your brief into a clear, compelling concept.",
  },
  {
    step: "03",
    icon: Film,
    title: "Storyboard & Style",
    description:
      "Styleframes and storyboards lock the look and pacing, so the final animation matches the vision exactly.",
  },
  {
    step: "04",
    icon: Music,
    title: "Voice-over & Music",
    description:
      "Professional voice, sound design, and music bring the piece to life and master it for every platform.",
  },
];

const platforms: { name: string; description: string }[] = [
  { name: "Figma", description: "Interface & prototyping" },
  { name: "Framer", description: "Interactive web design" },
  { name: "After Effects", description: "Motion & compositing" },
  { name: "Blender", description: "3D & rendering" },
  { name: "Photoshop", description: "Image & texture work" },
  { name: "Illustrator", description: "Vector & brand assets" },
  { name: "Cinema 4D", description: "Motion design in 3D" },
  { name: "Lottie", description: "Lightweight web animation" },
];

const Services: React.FC = () => {
  return (
    <div className="bg-global-gradient min-h-screen relative overflow-hidden">
      <SEOHead
        title="Services"
        description="Creative design and animation services from Inspiro Studio — UI/UX, 2D storyboards, motion graphics, product design, brand identity, and responsive web."
        path="/services"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-black/50" />
      <div className="relative z-10">
        {/* 1. Hero */}
        <section className="relative pt-48 pb-24 px-6 md:px-12 lg:px-24 text-center overflow-hidden">
          <div className="max-w-[1440px] mx-auto relative z-10 flex flex-col items-center">
            <div className="inline-block rounded-lg bg-gradient-to-r from-transparent via-blue-700/60 to-transparent p-[1px] mb-6">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg border-x border-gray-800 bg-black backdrop-blur-xl">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                <span className="text-xs text-gray-200 tracking-widest uppercase">
                  Our Services
                </span>
              </div>
            </div>

            <h1 className="text-[44px] md:text-[68px] lg:text-[84px] text-white tracking-tight leading-[1.02] max-w-5xl">
              Creative Design & Animation
              <br />
              <span className="text-gray-400">
                That Transform Digital Experiences
              </span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mt-8 leading-relaxed">
              We help startups, brands, and enterprises create visually stunning
              digital products through strategic design, engaging animation, and
              conversion-focused creative solutions.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
              <a
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={NAVBAR_CTA_BUTTON_AUTO_WIDTH_CLASS}
              >
                Book a Discovery Call
              </a>
              <Link to="/contact" className={NAVBAR_CTA_BUTTON_AUTO_WIDTH_CLASS}>
                Start a Project
              </Link>
            </div>
          </div>
        </section>

        {/* 2. A Full Creative Stack */}
        <section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24">
          <div className="max-w-[1440px] mx-auto">
            <SectionHeading
              badge="What We Do"
              titleTop="A Full Creative Stack"
              titleBottom="For Ambitious Brands"
              description="From the first idea to the final pixel, we cover every layer of design, animation, and product craft your brand needs to stand out."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className="group midnight-card-gradient border border-white/10 rounded-[28px] p-8 flex flex-col shadow-[0_24px_70px_rgba(0,0,0,0.55)] transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/25 hover:shadow-[0_38px_110px_rgba(5,12,32,0.85)]"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-white/10 flex items-center justify-center text-blue-300 mb-8 transition-all duration-500 group-hover:bg-blue-500/20 group-hover:text-white">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h4 className="text-white text-[21px] leading-snug tracking-tight mb-4 transition-colors duration-300 group-hover:text-blue-50">
                      {service.title}
                    </h4>

                    <p className="text-gray-400 text-[15px] leading-relaxed mb-8 flex-1">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-6 border-t border-white/[0.06]">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-[12px] text-gray-300 transition-all duration-300 group-hover:border-blue-400/20 group-hover:bg-blue-500/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. Why Brands Choose Us */}
        <section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24">
          <div className="max-w-[1440px] mx-auto">
            <SectionHeading
              badge="Why Inspiro"
              titleTop="Why Brands Choose"
              titleBottom="Our Creative Agency"
              description="Strategy, craft, and speed delivered by a senior team — the reasons growth-stage teams return for engagement after engagement."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {advantages.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="group midnight-card-gradient border border-white/10 rounded-[24px] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/25 hover:shadow-[0_38px_90px_rgba(5,12,32,0.8)]"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-white/10 flex items-center justify-center text-blue-300 mb-6 transition-all duration-500 group-hover:bg-blue-500/20 group-hover:text-white">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-white text-[18px] tracking-tight mb-3 transition-colors duration-300 group-hover:text-blue-50">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-[14px] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Stats row */}
            <div className="midnight-card-gradient border border-white/10 rounded-[28px] mt-10 p-8 md:p-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-[40px] md:text-[52px] text-white leading-none tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[12px] uppercase tracking-widest text-gray-400 mt-3">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Our Process */}
        <section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24">
          <div className="max-w-[1440px] mx-auto">
            <SectionHeading
              badge="How We Work"
              titleTop="Turning Ideas Into"
              titleBottom="Beautiful Reality"
              description="From the first conversation to the final mix, every project moves through four creative gates that turn raw concepts into finished, on-brand animation."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {processSteps.map((process) => {
                const Icon = process.icon;
                return (
                  <div
                    key={process.step}
                    className="group midnight-card-gradient border border-white/10 rounded-[24px] p-8 flex flex-col transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/25 hover:shadow-[0_38px_90px_rgba(5,12,32,0.8)]"
                  >
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-white/10 flex items-center justify-center text-blue-300 transition-all duration-500 group-hover:bg-blue-500/20 group-hover:text-white">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[34px] text-white/15 tracking-tight transition-colors duration-300 group-hover:text-white/25">
                        {process.step}
                      </span>
                    </div>
                    <h4 className="text-white text-[18px] tracking-tight mb-3 transition-colors duration-300 group-hover:text-blue-50">
                      {process.title}
                    </h4>
                    <p className="text-gray-400 text-[14px] leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. Technology Platforms */}
        <section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24">
          <div className="max-w-[1440px] mx-auto">
            <SectionHeading
              badge="Our Toolkit"
              titleTop="Our Proven"
              titleBottom="Technology Platforms"
              description="A battle-tested stack for design, animation, and web — chosen so every deliverable is fast to produce, easy to hand off, and built to scale with your team."
            />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {platforms.map((platform) => (
                <div
                  key={platform.name}
                  className="group midnight-card-gradient border border-white/10 rounded-[24px] p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/25 hover:shadow-[0_38px_90px_rgba(5,12,32,0.8)]"
                >
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-blue-500/15 group-hover:border-blue-400/25">
                    <span className="text-[22px] font-bold text-white tracking-tight">
                      {platform.name.charAt(0)}
                    </span>
                  </div>
                  <h4 className="text-white text-[16px] tracking-tight transition-colors duration-300 group-hover:text-blue-50">
                    {platform.name}
                  </h4>
                  <p className="text-gray-500 text-[12px] mt-2 leading-relaxed">
                    {platform.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Closing CTA */}
        <section className="relative pb-32 px-6 md:px-12 lg:px-24">
          <div className="midnight-card-gradient max-w-[1440px] mx-auto border border-white/10 rounded-[40px] p-10 md:p-16 text-center relative overflow-hidden shadow-[0_40px_140px_rgba(0,0,0,0.55)]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="relative z-10 flex flex-col items-center">
              <h2 className="text-[34px] md:text-[52px] text-white tracking-tight leading-[1.05] max-w-3xl">
                Have a Project in Mind?
              </h2>
              <h3 className="text-[26px] md:text-[40px] text-gray-400 tracking-tight leading-[1.1] mt-2">
                Let&apos;s Build It Together.
              </h3>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8 text-[14px] text-gray-300">
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-400" /> Free 30-min strategy
                  call
                </span>
                <span className="hidden sm:block h-4 w-px bg-white/15" />
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-400" /> Briefs reviewed
                  within 24 hours
                </span>
              </div>

              <a
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${NAVBAR_CTA_BUTTON_AUTO_WIDTH_CLASS} mt-10`}
              >
                Book an Appointment
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
