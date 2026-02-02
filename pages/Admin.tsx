import React, { useState, useEffect } from 'react';
import { Mail, Settings, LayoutDashboard, Trash2, CheckCircle, Clock, ExternalLink, ShieldCheck, Save, Inbox, Sparkles } from 'lucide-react';

interface Submission {
  id: number;
  name: string;
  email: string;
  category: string;
  brief: string;
  date: string;
  aiInsight?: string;
  deliveredTo?: string;
}

const Admin: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'submissions' | 'settings'>('submissions');
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [adminEmail, setAdminEmail] = useState('business@inspirostudio.io');
  const [saveStatus, setSaveStatus] = useState(false);

  useEffect(() => {
    // Load data from localStorage
    const savedInbox = JSON.parse(localStorage.getItem('inspiro_inbox') || '[]');
    setSubmissions(savedInbox);

    const savedEmail = localStorage.getItem('inspiro_admin_email');
    if (savedEmail) {
        setAdminEmail(savedEmail);
    } else {
        setAdminEmail('business@inspirostudio.io');
    }
  }, []);

  const handleDelete = (id: number) => {
    const updated = submissions.filter(s => s.id !== id);
    setSubmissions(updated);
    localStorage.setItem('inspiro_inbox', JSON.stringify(updated));
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('inspiro_admin_email', adminEmail);
    setSaveStatus(true);
    setTimeout(() => setSaveStatus(false), 2000);
  };

  const clearAll = () => {
    if (window.confirm('Are you sure you want to clear the entire agency inbox?')) {
      setSubmissions([]);
      localStorage.removeItem('inspiro_inbox');
    }
  };

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 lg:px-24 min-h-screen">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <ShieldCheck className="w-5 h-5 text-purple-400" />
              <span className="text-[10px] font-black text-purple-400 uppercase tracking-[0.3em]">Studio Operating System</span>
            </div>
            <h1 className="text-4xl font-bold text-white tracking-tight">Admin Control Center</h1>
          </div>

          <div className="flex p-1 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl shadow-2xl">
            <button 
              onClick={() => setActiveTab('submissions')}
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTab === 'submissions' ? 'bg-white text-black shadow-lg' : 'text-gray-400 hover:text-white'}`}
            >
              <Inbox className="w-4 h-4" />
              <span>Captured Leads</span>
            </button>
            <button 
              onClick={() => setActiveTab('settings')}
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTab === 'settings' ? 'bg-white text-black shadow-lg' : 'text-gray-400 hover:text-white'}`}
            >
              <Settings className="w-4 h-4" />
              <span>Agency Config</span>
            </button>
          </div>
        </div>

        {activeTab === 'submissions' ? (
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-white flex items-center">
                Mailed Inquiries <span className="ml-3 bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs">{submissions.length}</span>
              </h2>
              {submissions.length > 0 && (
                <button 
                  onClick={clearAll}
                  className="text-xs text-red-400/70 hover:text-red-400 font-bold uppercase tracking-widest transition-colors"
                >
                  Clear System Memory
                </button>
              )}
            </div>

            {submissions.length === 0 ? (
              <div className="glass-card p-32 text-center border-dashed border-white/10">
                <Mail className="w-16 h-16 text-gray-700 mx-auto mb-6 opacity-20" />
                <p className="text-gray-500 font-medium">No projects have been mailed to the studio yet.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-8">
                {submissions.map((sub) => (
                  <div key={sub.id} className="glass-card p-10 border-white/10 hover:bg-white/[0.04] transition-all group overflow-hidden relative shadow-xl">
                    <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    <div className="flex flex-col lg:flex-row justify-between gap-12">
                      <div className="flex-grow space-y-8">
                        <div className="flex flex-wrap items-center gap-6">
                          <div>
                            <h3 className="text-xl font-bold text-white">{sub.name}</h3>
                            <p className="text-gray-500 text-sm font-medium">{sub.email}</p>
                          </div>
                          <span className="text-xs text-gray-500 bg-white/5 border border-white/10 px-4 py-2 rounded-xl flex items-center">
                            <Clock className="w-3.5 h-3.5 mr-2" /> {sub.date}
                          </span>
                          <span className="text-[10px] font-black bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded uppercase tracking-[0.1em]">
                            {sub.category}
                          </span>
                          {sub.deliveredTo && (
                            <span className="text-[10px] font-medium text-gray-600 italic">
                              Sent to: {sub.deliveredTo}
                            </span>
                          )}
                        </div>

                        <div className="space-y-3 bg-white/[0.02] p-6 rounded-2xl border border-white/5">
                          <p className="text-[10px] text-gray-600 font-black uppercase tracking-[0.2em]">Project Requirement (The Want)</p>
                          <p className="text-gray-300 leading-relaxed text-[16px]">"{sub.brief}"</p>
                        </div>

                        {sub.aiInsight && (
                          <div className="bg-purple-500/[0.03] border border-purple-500/10 rounded-2xl p-6 relative">
                            {/* Corrected missing Sparkles import */}
                            <Sparkles className="absolute top-4 right-4 w-4 h-4 text-purple-400/20" />
                            <p className="text-[10px] text-purple-400 font-black uppercase tracking-widest mb-3 flex items-center">
                              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-2"></span>
                              AI Strategist Recommendation
                            </p>
                            <p className="text-gray-400 text-[14px] leading-relaxed italic">{sub.aiInsight}</p>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col justify-between items-end border-t lg:border-t-0 lg:border-l border-white/5 pt-8 lg:pt-0 lg:pl-12 space-y-8 min-w-[240px]">
                        <div className="space-y-4 w-full text-right">
                          <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Action Center</p>
                          <a href={`mailto:${sub.email}`} className="text-white hover:text-purple-300 font-bold flex items-center justify-end group/link transition-all">
                            Reply to Client <ExternalLink className="ml-2 w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-all" />
                          </a>
                        </div>
                        
                        <div className="flex space-x-3">
                          <button 
                            onClick={() => handleDelete(sub.id)}
                            className="p-4 bg-red-500/5 hover:bg-red-500/10 text-red-500/70 border border-red-500/10 rounded-2xl transition-all"
                            title="Delete submission"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                          <button 
                            className="flex items-center space-x-3 px-8 py-4 bg-white text-black font-bold text-xs rounded-2xl transition-all hover:bg-gray-100 uppercase tracking-widest shadow-xl"
                            onClick={() => window.open(`mailto:${sub.email}`)}
                          >
                            <CheckCircle className="w-4 h-4" />
                            <span>Dispatch Reply</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            <div className="glass-card p-12 border-white/10 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-10 tracking-tight">System Infrastructure</h2>
              
              <form onSubmit={handleSaveSettings} className="space-y-10">
                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Business Dispatch Email</label>
                  <p className="text-xs text-gray-600 mb-4 leading-relaxed">This is the public-facing administrative address where project briefs are mailed. All leads collected on the site will reflect this destination.</p>
                  <input 
                    type="email" 
                    value={adminEmail}
                    onChange={(e) => setAdminEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-purple-500/50 transition-all text-lg font-medium" 
                    placeholder="business@inspirostudio.io" 
                  />
                </div>

                <div className="pt-10 border-t border-white/5">
                  <button 
                    type="submit"
                    className={`w-full py-5 font-bold text-[15px] rounded-full tracking-tight flex items-center justify-center space-x-3 transition-all ${saveStatus ? 'bg-green-600 text-white' : 'bg-white text-black hover:scale-[1.02] shadow-2xl'}`}
                  >
                    {saveStatus ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        <span>Settings Applied Globally</span>
                      </>
                    ) : (
                      <>
                        <Save className="w-5 h-5" />
                        <span>Save Administrative Config</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
            
            <div className="mt-16 glass-card p-10 border-purple-500/20 bg-purple-500/5">
               <div className="flex items-start space-x-6">
                  <div className="p-4 bg-purple-500/20 rounded-2xl shadow-inner">
                     <ShieldCheck className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                     <h4 className="text-white text-lg font-bold mb-2">Technical Delivery Protocol</h4>
                     <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                        Every submission is currently routed through the agency's mock mail protocol to <strong>{adminEmail}</strong>. Customer 'wants' are stored in the studio's persistent lead database.
                     </p>
                  </div>
               </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;