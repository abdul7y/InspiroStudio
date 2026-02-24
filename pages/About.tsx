
import React from 'react';
import { Play, Star, Plus, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  const CALENDLY_LINK = "https://calendly.com/inspirostudio-io/30min";

  const teamMembers = [
    { name: 'Daniel Reed', role: 'Co-Founder, CEO', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop' },
    { name: 'James Turner', role: 'Developer, Tech Lead', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop' },
    { name: 'Michael Carter', role: 'Marketing, Organizer', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop' },
    { name: 'William Scott', role: 'Designer, Art Lead', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop' },
    { name: 'Ethan Mitchell', role: 'UI/UX Specialist', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop' },
    { name: 'Isabelle Hughes', role: 'Content Creator, Writer', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop' },
  ];

  const tools = [
    { name: 'Zapier', desc: 'Automation tool to connect your favorite apps.', icon: 'https://www.vectorlogo.zone/logos/zapier/zapier-icon.svg', tag: 'PRO' },
    { name: 'Slack', desc: 'Communication tool for real-time collaboration.', icon: 'https://www.vectorlogo.zone/logos/slack/slack-icon.svg' },
    { name: 'Dropbox', desc: 'Cloud storage and file sharing solution.', icon: 'https://www.vectorlogo.zone/logos/dropbox/dropbox-icon.svg' },
    { name: 'Stripe', desc: 'Payment processing platform for online business.', icon: 'https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg' },
    { name: 'Mailchimp', desc: 'Email marketing platform to nurture leads.', icon: 'https://www.vectorlogo.zone/logos/mailchimp/mailchimp-icon.svg', tag: 'FREE' },
    { name: 'Github', desc: 'Version control system for collaboration.', icon: 'https://www.vectorlogo.zone/logos/github/github-icon.svg' },
  ];

  const awards = [
    { name: 'Framer', award: 'Site Of The Day', count: '10x' },
    { name: 'Awwwards', award: 'Site Of The Year', count: '18x' },
    { name: 'Red Dot Design', award: 'Best Of The Year', count: '07x' },
    { name: 'Framer Awards', award: 'Site Of The Month', count: '12x' },
  ];

  return (
    <div className="bg-global-gradient min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative pt-48 pb-24 px-6 md:px-12 lg:px-24 text-center overflow-hidden">
        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-white/10 bg-blue-500/10 mb-8 backdrop-blur-sm">
            <div className="w-4 h-4 bg-blue-500 flex items-center justify-center rounded-sm">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
            <span className="text-[11px] font-bold text-blue-300 uppercase tracking-widest">Dig Deep About Us</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-[100px] font-bold text-white mb-8 tracking-tighter leading-[0.95]">
            Learn More About Landin <br />
            <span className="text-white">Let's Deep Dive!</span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto mb-12 leading-relaxed font-medium opacity-80">
            Landin is your go-to agency for creative thinking and marketing ideas. We specialize in digital business solutions.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-24">
            <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="px-10 py-4 rounded-xl bg-purple-600 text-white font-bold text-[14px] tracking-tight hover:bg-purple-700 transition-all shadow-xl">
              Connect With Us
            </a>
            <button className="px-10 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-[14px] tracking-tight hover:bg-white/10 transition-all">
              What is Landin?
            </button>
          </div>

          <div className="max-w-[1200px] mx-auto relative group aspect-video rounded-[40px] overflow-hidden border border-white/5 shadow-2xl bg-black">
             <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <div className="absolute w-[80%] h-[80%] bg-blue-600/10 blur-[150px] rounded-full"></div>
                <div className="relative z-10 flex items-center justify-center">
                  <svg width="400" height="400" viewBox="0 0 200 200" className="opacity-90 scale-150">
                    <path d="M100 20 L180 100 L100 180 L20 100 Z" fill="none" stroke="#3b82f6" strokeWidth="0.5" />
                    <path d="M100 40 L160 100 L100 160 L40 100 Z" fill="none" stroke="#8a4ba7" strokeWidth="1.5" />
                  </svg>
                  <div className="absolute z-20 w-16 h-16 rounded-full bg-white/10 backdrop-blur-2xl flex items-center justify-center border border-white/20 hover:scale-110 transition-transform cursor-pointer">
                    <Play className="w-6 h-6 text-white fill-white translate-x-0.5" />
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 2. Revolutionary Skills Section */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative rounded-[40px] overflow-hidden border border-white/10 aspect-[4/3] group shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000" 
              alt="Professional session" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
          
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/10 bg-white/5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">About Landin</span>
            </div>
            <h2 className="text-[44px] md:text-[56px] font-bold text-white tracking-tight leading-[1.1]">
              An Agency With Classic <br />
              <span className="text-white">Revolutionary Skills!</span>
            </h2>
            
            <div className="space-y-10">
              <div className="space-y-2">
                <h4 className="text-white font-bold text-[17px]">Your Success, Our Priority</h4>
                <p className="text-gray-400 leading-relaxed text-[15px] opacity-80">At Landin, we believe in empowering our clients to achieve their goals. Our team works closely with you.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-white font-bold text-[17px]">Partners You Can Rely On</h4>
                <p className="text-gray-400 leading-relaxed text-[15px] opacity-80">Landin is here to ensure your success with expert guidance and collaborative teamwork.</p>
              </div>
            </div>

            <div className="pt-6">
              <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-purple-600 rounded-xl text-white font-bold text-[14px] shadow-lg mb-6">
                Book an Appointment
              </a>
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500" />)}
                </div>
                <span className="text-[11px] text-gray-500 font-bold uppercase tracking-widest">200+ Agencies Rated</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Team Section - Human Portraits */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1440px] mx-auto text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Team Members</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]">Meet the Team Making</h2>
          <h3 className="text-3xl md:text-4xl font-medium text-gray-400 mb-8">Things Happen Every Day</h3>
          <p className="text-gray-500 max-w-xl mx-auto mb-16 font-medium text-[16px]">Our team is made up of passionate professionals who bring their expertise and creativity to every project.</p>
          
          <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 bg-purple-600 rounded-xl text-white font-bold text-[14px] mb-24 shadow-2xl hover:scale-105 transition-all">
            Book a 15-min call
          </a>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="group relative bg-gradient-to-br from-[#070b1a] via-[#050814] to-black border border-white/10 rounded-[32px] overflow-hidden shadow-2xl">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6 border-t border-white/10 flex justify-between items-center text-left bg-black/40 backdrop-blur-md absolute bottom-0 left-0 right-0">
                  <div>
                    <h4 className="text-white font-bold text-[17px]">{member.name}</h4>
                    <p className="text-gray-500 text-[11px] font-bold uppercase tracking-widest">{member.role}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-white/10 transition-all">
                    <Plus className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Awards Section - Main cart with Themed Sub-Carts */}
      <section className="py-48 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1440px] mx-auto bg-gradient-to-br from-[#070b1a] via-[#050814] to-black border border-white/10 rounded-[60px] p-16 md:p-24 shadow-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Awards</span>
              </div>
              <h2 className="text-6xl md:text-[80px] font-bold text-white mb-8 tracking-tighter leading-[0.9]">Awards <br /> & Recognition</h2>
              <p className="text-gray-500 max-w-sm font-medium text-[16px] leading-relaxed">We're proud to have been recognized with several awards for our hard work and dedication.</p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {awards.map((award, i) => (
                <div key={i} className="bg-gradient-to-br from-[#070b1a] via-[#050814] to-black border border-white/10 rounded-[32px] p-10 flex flex-col justify-between aspect-square group transition-all relative overflow-hidden shadow-xl hover:scale-[1.02]">
                  <div className="flex justify-between items-start relative z-10">
                    <div className="opacity-80 group-hover:opacity-100 transition-opacity">
                      <span className="text-[12px] font-black text-white uppercase tracking-widest">{award.name}</span>
                    </div>
                    <div className="text-[11px] font-black text-white bg-white/20 px-3 py-1 rounded-lg border border-white/10">{award.count}</div>
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-white font-bold text-[18px] mb-1">{award.award}</h4>
                    <p className="text-white/60 text-[11px] uppercase font-bold tracking-widest">Design Excellence</p>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/5 blur-[60px] rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Tools Section - Fixed SVG Icons */}
      <section className="py-48 px-6 md:px-12 lg:px-24 text-center">
        <div className="max-w-[1440px] mx-auto">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Tools</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]">Tools and Technologies</h2>
          <h3 className="text-3xl md:text-4xl font-medium text-gray-400 mb-16">Powering Our Productivity</h3>
          
          <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 bg-purple-600 rounded-xl text-white font-bold text-[14px] mb-24 shadow-2xl hover:scale-105 transition-all">
            Book an Appointment
          </a>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, i) => (
              <div key={i} className="bg-gradient-to-br from-[#070b1a] via-[#050814] to-black border border-white/10 rounded-[40px] p-10 text-left hover:border-white/20 transition-all group relative overflow-hidden shadow-xl flex flex-col justify-between aspect-[5/4]">
                <div>
                  <div className="flex justify-between items-start mb-10">
                    <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-[20px] flex items-center justify-center p-4 group-hover:bg-white/10 transition-all">
                      <img src={tool.icon} alt={tool.name} className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all" />
                    </div>
                    {tool.tag && (
                      <span className="text-[10px] font-black bg-blue-500/20 text-blue-400 border border-blue-500/20 px-3 py-1 rounded uppercase tracking-[0.1em]">{tool.tag}</span>
                    )}
                  </div>
                  <h4 className="text-[24px] font-bold text-white mb-4 tracking-tight">{tool.name}</h4>
                  <p className="text-gray-500 text-[15px] leading-relaxed mb-6 font-medium">{tool.desc}</p>
                </div>
                <div className="flex items-center text-gray-500 text-[11px] font-black uppercase tracking-widest group-hover:text-white transition-colors cursor-pointer border-t border-white/5 pt-8">
                  Visit Website <ArrowRight className="ml-2 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Unique Opportunity Section - Refined Wave Overlay */}
      <section className="relative py-48 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          <div className="relative group/card overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-[#070b1a] via-[#050814] to-black shadow-2xl">
            <div className="absolute inset-0 bg-global-gradient opacity-90 pointer-events-none"></div>
            
            <div className="relative z-10 py-32 flex flex-col items-center text-center px-10">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-black/40 border border-white/10 rounded-full mb-12 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                <span className="text-[12px] font-bold text-gray-400 tracking-wider uppercase">Join Us Now</span>
              </div>

              <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-[1.05] max-w-4xl">
                Each Project we Undertake <br />
                <span className="text-gray-400 font-medium italic">is a Unique Opportunity.</span>
              </h2>

              <p className="text-gray-500 text-lg md:text-[20px] mb-14 max-w-2xl leading-relaxed font-medium">
                Ready to take the next step? Join us now and start transforming your vision into reality with expert support.
              </p>

              <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="px-14 py-5 bg-purple-600 rounded-xl text-white font-bold text-[16px] tracking-tight shadow-2xl hover:scale-105 transition-all text-center">
                Book an Appointment
              </a>
            </div>

            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-600/20 blur-[100px] rounded-full"></div>
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
