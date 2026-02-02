
import React, { useState } from 'react';
import { Mail, Send, MessageCircle, CheckCircle2, Loader2, Sparkles, ArrowRight, ClipboardList, User, Briefcase, ShieldCheck, AlertCircle } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'Video Marketing',
    brief: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [aiInsight, setAiInsight] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.brief) return;

    setStatus('submitting');
    setErrorMessage(null);

    try {
      // 1. AI Analysis of the user's specific project "want"
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `A potential client named ${formData.name} wants: "${formData.brief}". Service category: ${formData.category}.
                  Act as our Studio's Chief Strategist. Provide a 2-sentence expert response validating their technical vision. 
                  Keep it sophisticated, elite, and encouraging.`,
        config: {
          temperature: 0.7,
          maxOutputTokens: 150,
          thinkingConfig: { thinkingBudget: 50 }
        }
      });

      const insight = response.text || "Your requirements align perfectly with our cinematic standards. We are ready to scale this vision into a world-class production.";
      setAiInsight(insight);

      // 2. Dispatch to the Node.js backend
      // We point to the local server port 3001 or the relative /api path if proxied
      const mailResponse = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          aiInsight: insight
        })
      });

      if (mailResponse.ok) {
        setStatus('success');
      } else {
        const errorData = await mailResponse.json();
        throw new Error(errorData.details || 'Server rejected the email dispatch.');
      }
    } catch (error: any) {
      console.error("Submission error:", error);
      // Detailed error for the user to understand the Node server requirement
      setErrorMessage(error.message === 'Failed to fetch' 
        ? 'Connection Refused. Please ensure your Node.js server (server.js) is running on port 3001.' 
        : error.message);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="pt-48 pb-24 px-6 sm:px-12 lg:px-24 min-h-screen flex items-center justify-center">
        <div className="max-w-4xl w-full relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-[40px] blur opacity-30 animate-pulse"></div>
          
          <div className="relative bg-[#08030b] border border-white/10 rounded-[40px] p-12 md:p-16 overflow-hidden shadow-2xl">
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
               <div className="absolute -top-1/2 -right-1/4 w-full h-full bg-blue-600/30 blur-[120px] rounded-full animate-float-glow"></div>
               <div className="absolute -bottom-1/2 -left-1/4 w-full h-full bg-purple-600/20 blur-[120px] rounded-full animate-float-glow-reverse"></div>
               <div className="waves-container !opacity-20">
                  <div className="wave wave-3"></div>
                  <div className="wave wave-2"></div>
                  <div className="wave"></div>
               </div>
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8 border border-blue-500/20 mx-auto lg:mx-0 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                  <ShieldCheck className="w-8 h-8 text-blue-400" />
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">Mailed to Inbox.</h2>
                <p className="text-gray-400 text-lg mb-10 max-w-sm mx-auto lg:mx-0">
                  Your project details have been securely delivered to <br/>
                  <span className="text-white font-bold bg-white/5 px-2 py-1 rounded-lg border border-white/10 inline-block mt-2">
                    business@inspirostudio.io
                  </span>
                </p>

                {aiInsight && (
                  <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-left backdrop-blur-xl relative overflow-hidden shadow-inner group/ai">
                    <div className="absolute top-0 right-0 p-4 opacity-30">
                      <Sparkles className="w-5 h-5 text-purple-400" />
                    </div>
                    <h4 className="text-[10px] font-black text-purple-400 uppercase tracking-[0.3em] mb-4 flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-2 animate-pulse"></span>
                      Studio Intelligence
                    </h4>
                    <p className="text-gray-300 italic leading-relaxed font-medium text-[15px]">
                      "{aiInsight}"
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-black/40 border border-white/10 rounded-3xl p-8 backdrop-blur-2xl shadow-inner">
                 <div className="flex items-center space-x-3 mb-8 border-b border-white/10 pb-4">
                    <ClipboardList className="w-4 h-4 text-gray-500" />
                    <span className="text-[11px] font-black text-gray-500 uppercase tracking-widest">Live Dispatch Receipt</span>
                 </div>

                 <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                       <User className="w-4 h-4 text-purple-400 mt-1" />
                       <div>
                          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1">Identity</p>
                          <p className="text-white font-bold">{formData.name}</p>
                       </div>
                    </div>
                    <div className="flex items-start space-x-4">
                       <Briefcase className="w-4 h-4 text-blue-400 mt-1" />
                       <div>
                          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1">Service Type</p>
                          <p className="text-white font-bold">{formData.category}</p>
                       </div>
                    </div>
                    <div className="pt-4 border-t border-white/5">
                       <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-3">Project Requirement</p>
                       <p className="text-gray-400 text-sm leading-relaxed italic line-clamp-3">
                          "{formData.brief}"
                       </p>
                    </div>
                 </div>

                 <button 
                  onClick={() => setStatus('idle')}
                  className="w-full mt-10 py-4 bg-white text-black font-bold rounded-2xl hover:bg-gray-100 transition-all flex items-center justify-center space-x-3 group shadow-xl"
                >
                  <span>Submit Another Brief</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-48 pb-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="sticky top-48">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-10 tracking-tight leading-[1.05]">
              TELL US <br/><span className="text-purple-300">EVERYTHING</span>.
            </h1>
            <p className="text-xl text-[#a1a1aa] mb-16 leading-relaxed max-w-lg font-medium opacity-80">
              Your project inquiry is about to be mailed to <span className="text-white border-b border-purple-500/50 pb-1">business@inspirostudio.io</span>. 
            </p>

            <div className="space-y-12">
              <ContactInfoItem 
                icon={<Mail className="w-5 h-5" />}
                title="Business Dispatch"
                content="business@inspirostudio.io"
              />
              <ContactInfoItem 
                icon={<MessageCircle className="w-5 h-5" />}
                title="Agency Support"
                content="Live inbox testing active"
              />
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-[32px] blur-xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
            
            <div className="relative glass-card p-12 border-white/10 bg-black/40 backdrop-blur-2xl shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-10 tracking-tight flex items-center">
                Project Test Form
                {status === 'submitting' && <Loader2 className="ml-4 w-5 h-5 text-purple-400 animate-spin" />}
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                {status === 'error' && (
                  <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-5 flex items-start space-x-3 text-red-400 text-sm animate-pulse">
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold mb-1">Dispatch Failed</p>
                      <p className="opacity-80 leading-relaxed">{errorMessage}</p>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Name / Brand</label>
                    <input 
                      required
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      disabled={status === 'submitting'}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4.5 text-white focus:outline-none focus:border-purple-500/50 transition-all disabled:opacity-50" 
                      placeholder="e.g. Acme Corp" 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Contact Email</label>
                    <input 
                      required
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      disabled={status === 'submitting'}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4.5 text-white focus:outline-none focus:border-purple-500/50 transition-all disabled:opacity-50" 
                      placeholder="you@domain.com" 
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Category</label>
                  <div className="relative">
                    <select 
                      value={formData.category}
                      onChange={(e) => setFormData({...formData, category: e.target.value})}
                      disabled={status === 'submitting'}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4.5 text-white focus:outline-none focus:border-purple-500/50 transition-all appearance-none cursor-pointer disabled:opacity-50"
                    >
                      <option className="bg-[#1a0a1e]">Video Marketing</option>
                      <option className="bg-[#1a0a1e]">Product Animation</option>
                      <option className="bg-[#1a0a1e]">Branding Package</option>
                      <option className="bg-[#1a0a1e]">Social Strategy</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                      <ArrowRight className="w-4 h-4 rotate-90" />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Project Brief (The Want)</label>
                  <textarea 
                    required
                    rows={6} 
                    value={formData.brief}
                    onChange={(e) => setFormData({...formData, brief: e.target.value})}
                    disabled={status === 'submitting'}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4.5 text-white focus:outline-none focus:border-purple-500/50 transition-all resize-none disabled:opacity-50" 
                    placeholder="Describe exactly what you want from our studio..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={status === 'submitting'}
                  className="glow-btn-custom w-full py-5 text-white font-bold text-[15px] rounded-full tracking-tight flex items-center justify-center space-x-3 relative overflow-hidden group shadow-2xl"
                >
                  <span className="relative z-10">{status === 'submitting' ? 'Mailing to Studio...' : 'Mail Project to Inbox'}</span>
                  {status === 'submitting' ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                </button>
                
                <p className="text-[10px] text-gray-600 text-center uppercase tracking-widest opacity-60">
                  Node.js Backend Required for Live Email Delivery
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactInfoItem: React.FC<{ icon: React.ReactNode; title: string; content: string }> = ({ icon, title, content }) => (
  <div className="flex items-start space-x-8 group">
    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-300 group-hover:bg-purple-500/10 group-hover:border-purple-500/20 transition-all duration-300 shadow-xl">
      {icon}
    </div>
    <div>
      <h4 className="text-lg font-bold text-white mb-1 tracking-tight group-hover:text-purple-300 transition-colors">{title}</h4>
      <p className="text-gray-400 font-medium text-[15px]">{content}</p>
    </div>
  </div>
);

export default Contact;
