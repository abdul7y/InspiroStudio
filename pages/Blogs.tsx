
import React from 'react';
import { ArrowRight, Search } from 'lucide-react';

const Blogs: React.FC = () => {
  const posts = [
    { title: 'The Rise of Video in AI Marketing', date: 'Mar 24, 2025', tag: 'Strategy', img: 'https://picsum.photos/800/600?random=10' },
    { title: 'Designing Motion for SaaS Interfaces', date: 'Mar 18, 2025', tag: 'Design', img: 'https://picsum.photos/800/600?random=11' },
    { title: 'Narrative Storytelling for Complex Tech', date: 'Mar 05, 2025', tag: 'Culture', img: 'https://picsum.photos/800/600?random=12' },
    { title: 'Why Audio Quality Defines High-End Video', date: 'Feb 22, 2025', tag: 'Production', img: 'https://picsum.photos/800/600?random=13' },
    { title: 'Engaging Developers Through Visuals', date: 'Feb 12, 2025', tag: 'Marketing', img: 'https://picsum.photos/800/600?random=14' },
    { title: 'Inside Our 2025 Creative Stack', date: 'Jan 28, 2025', tag: 'Behind the Scenes', img: 'https://picsum.photos/800/600?random=15' },
  ];

  return (
    <div className="pt-48 pb-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 space-y-8 md:space-y-0">
          <div>
            <h1 className="text-6xl font-bold text-white tracking-tight mb-6">Insights & <span className="text-purple-300">Perspectives</span></h1>
            <p className="text-[#a1a1aa] text-lg max-w-xl">Exploring the frontier of video production, tech, and storytelling.</p>
          </div>
          
          <div className="relative group w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-purple-400 transition-colors w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-sm text-white focus:outline-none focus:border-purple-500/50 transition-all w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <article key={idx} className="glass-card group cursor-pointer overflow-hidden transition-all duration-500 hover:translate-y-[-8px] hover:bg-white/[0.05]">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-10">
                <div className="flex items-center space-x-3 mb-5">
                  <span className="text-[10px] font-bold text-purple-300 uppercase tracking-[0.15em]">{post.tag}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                  <span className="text-[11px] text-gray-500 font-medium">{post.date}</span>
                </div>
                <h3 className="text-[22px] font-bold text-white mb-8 group-hover:text-purple-300 transition-colors leading-tight tracking-tight">
                  {post.title}
                </h3>
                <div className="flex items-center text-white text-xs font-bold tracking-tight uppercase">
                  Read Article <ArrowRight className="ml-3 w-3.5 h-3.5 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-24 text-center">
          <button className="px-10 py-4 glass-card border-white/10 text-white font-bold text-sm tracking-tight hover:bg-white/5 transition-all rounded-full">
            Browse Archive
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
