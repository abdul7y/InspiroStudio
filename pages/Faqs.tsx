
import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const Faqs: React.FC = () => {
  const CALENDLY_LINK = "https://calendly.com/inspirostudio-io/30min";

  const faqs = [
    { 
      q: "What is your typical production timeline?", 
      a: "A high-end 60-second video typically takes 4 to 8 weeks. This includes scripting, storyboarding, design, animation, and sound mastering." 
    },
    { 
      q: "Do you handle the entire production lifecycle?", 
      a: "Yes. We are a full-service partner. We handle everything from the initial strategy and scriptwriting to the final color grading and sound design." 
    },
    { 
      q: "What do your pricing models look like?", 
      a: "We offer project-based pricing for specific deliverables and retainer-based models for brands needing ongoing monthly content production." 
    },
    { 
      q: "Can you create content for social media ad campaigns?", 
      a: "Absolutely. We specialize in cross-platform delivery, ensuring your video looks native on TikTok, LinkedIn, or high-end broadcast television." 
    },
    { 
      q: "How many rounds of revisions are included?", 
      a: "Every project includes two major feedback rounds at each stage (storyboard, style frames, and final animation) to ensure total alignment." 
    }
  ];

  return (
    <div className="pt-48 pb-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto text-center mb-24">
        <h1 className="text-6xl font-bold text-white mb-8 tracking-tight">Got <span className="text-purple-300">Questions?</span></h1>
        <p className="text-[#a1a1aa] text-lg">Detailed insights into our creative process and partnerships.</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-5">
        {faqs.map((faq, idx) => (
          <FaqItem key={idx} question={faq.q} answer={faq.a} />
        ))}
      </div>

      <div className="max-w-3xl mx-auto mt-32 glass-card p-16 text-center">
        <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-300 mx-auto mb-8">
          <HelpCircle className="w-8 h-8" />
        </div>
        <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">Still curious?</h3>
        <p className="text-[#a1a1aa] mb-10 leading-relaxed">Our producers are ready to answer anything else you need to know about starting a project with Inspiro.</p>
        <a 
          href={CALENDLY_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="glow-btn-custom px-10 py-4 font-bold rounded-full text-white text-[15px] tracking-tight inline-block"
        >
          Book a Call
        </a>
      </div>
    </div>
  );
};

const FaqItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`glass-card overflow-hidden transition-all duration-500 ${isOpen ? 'bg-white/[0.08]' : 'hover:bg-white/[0.05]'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-8 flex items-center justify-between text-left"
      >
        <span className="text-xl font-bold text-white pr-8 tracking-tight">{question}</span>
        <ChevronDown className={`text-gray-500 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 py-8 border-t border-white/10' : 'max-h-0 opacity-0'}`}>
        <p className="px-8 text-[#a1a1aa] leading-relaxed text-[17px]">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default Faqs;
