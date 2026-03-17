import React, { useState } from 'react';
import { ArrowRight, Search } from 'lucide-react';
import { NAVBAR_CTA_BUTTON_AUTO_WIDTH_CLASS } from '../constants/buttonStyles';

const Blogs: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllPosts, setShowAllPosts] = useState(false);
  const posts = [
    { title: 'The Rise of Video in AI Marketing', date: 'Mar 24, 2025', tag: 'Strategy', img: 'https://picsum.photos/800/600?random=10' },
    { title: 'Designing Motion for SaaS Interfaces', date: 'Mar 18, 2025', tag: 'Design', img: 'https://picsum.photos/800/600?random=11' },
    { title: 'Narrative Storytelling for Complex Tech', date: 'Mar 05, 2025', tag: 'Culture', img: 'https://picsum.photos/800/600?random=12' },
    { title: 'Why Audio Quality Defines High-End Video', date: 'Feb 22, 2025', tag: 'Production', img: 'https://picsum.photos/800/600?random=13' },
    { title: 'Engaging Developers Through Visuals', date: 'Feb 12, 2025', tag: 'Marketing', img: 'https://picsum.photos/800/600?random=14' },
    { title: 'Inside Our 2025 Creative Stack', date: 'Jan 28, 2025', tag: 'Behind the Scenes', img: 'https://picsum.photos/800/600?random=15' },
  ];

  const normalizedSearch = searchQuery.trim().toLowerCase();
  const filteredPosts = posts.filter((post) => {
    if (!normalizedSearch) return true;
    return [post.title, post.date, post.tag].some((field) =>
      field.toLowerCase().includes(normalizedSearch)
    );
  });
  const visiblePosts = normalizedSearch
    ? filteredPosts
    : filteredPosts.slice(0, showAllPosts ? filteredPosts.length : 3);

  const handleArchiveClick = () => {
    if (normalizedSearch) {
      setSearchQuery('');
      setShowAllPosts(false);
      return;
    }

    setShowAllPosts((prev) => !prev);
  };

  return (
    <div className="bg-global-gradient min-h-screen pt-48 pb-24 px-6 sm:px-12 lg:px-24 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-black/50"></div>
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 space-y-8 md:space-y-0">
          <div>
            <h1 className="text-6xl font-bold text-white tracking-tight mb-6">Insights & <span className="text-blue-300">Perspectives</span></h1>
            <p className="text-[#a1a1aa] text-lg max-w-xl">Exploring the frontier of video production, tech, and storytelling.</p>
          </div>
          
          <div className="relative group w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-400 transition-colors w-4 h-4" />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search articles..." 
              className="bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-all w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visiblePosts.map((post, idx) => (
            <article key={idx} className="midnight-card-gradient border border-white/10 rounded-[24px] group cursor-pointer overflow-hidden transition-all duration-500 hover:translate-y-[-8px] hover:border-blue-400/35">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-10">
                <div className="flex items-center space-x-3 mb-5">
                  <span className="text-[10px] font-bold text-blue-300 uppercase tracking-[0.15em]">{post.tag}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                  <span className="text-[11px] text-gray-500 font-medium">{post.date}</span>
                </div>
                <h3 className="text-[22px] font-bold text-white mb-8 group-hover:text-blue-300 transition-colors leading-tight tracking-tight">
                  {post.title}
                </h3>
                <div className="flex items-center text-white text-xs font-bold tracking-tight uppercase">
                  Read Article <ArrowRight className="ml-3 w-3.5 h-3.5 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {visiblePosts.length === 0 && (
          <div className="midnight-card-gradient mt-16 rounded-[28px] border border-white/10 px-8 py-10 text-center text-[#a1a1aa]">
            No articles matched "{searchQuery}". Try a different title, tag, or date.
          </div>
        )}

        <div className="mt-24 text-center">
          <button
            type="button"
            onClick={handleArchiveClick}
            className={NAVBAR_CTA_BUTTON_AUTO_WIDTH_CLASS}
          >
            {normalizedSearch
              ? 'Clear Search'
              : showAllPosts
                ? 'Show Fewer'
                : 'Browse Archive'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
