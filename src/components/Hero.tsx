import React from 'react';
import aboutData from '../content/about.json';
import { FiFileText, FiGithub, FiMail } from 'react-icons/fi';

export const Hero: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="py-20 md:py-28 border-b border-slate-100 dark:border-zinc-900/60 transition-colors">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 text-left">
        
        {/* Left side text introduction */}
        <div className="max-w-2xl space-y-6">
          <div className="space-y-3">
            <span className="font-mono text-[10px] tracking-widest text-emerald-800 dark:text-emerald-500 uppercase font-semibold">
              Research Portfolio &amp; Log
            </span>
            <h1 className="font-geist text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 leading-tight">
              {aboutData.name}
            </h1>
            <p className="font-geist text-xl md:text-2xl font-light text-slate-700 dark:text-zinc-300 leading-snug">
              {aboutData.tagline}
            </p>
          </div>
          
          <p className="text-sm md:text-base text-slate-500 dark:text-zinc-400 font-light leading-relaxed">
            {aboutData.shortBio}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#resume"
              className="inline-flex items-center gap-1.5 rounded-md bg-slate-900 hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-950 dark:hover:bg-slate-100 text-white font-semibold font-geist text-xs px-4 py-2 transition-colors cursor-pointer"
            >
              <FiFileText className="h-3.5 w-3.5" />
              View CV
            </a>
            <a
              href={aboutData.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white hover:bg-slate-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 text-slate-700 font-semibold font-geist text-xs px-4 py-2 transition-colors cursor-pointer"
            >
              <FiGithub className="h-3.5 w-3.5" />
              GitHub
            </a>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white hover:bg-slate-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 text-slate-700 font-semibold font-geist text-xs px-4 py-2 transition-colors cursor-pointer"
            >
              <FiMail className="h-3.5 w-3.5" />
              Contact
            </button>
          </div>
        </div>

        {/* Right side profile image */}
        <div className="flex-shrink-0">
          <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border border-slate-200/80 dark:border-zinc-800 shadow-xs flex items-center justify-center bg-slate-50 dark:bg-zinc-900">
            <img 
              src="./profile.jpeg" 
              alt={aboutData.name} 
              className="w-full h-full object-cover" 
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  const fallback = parent.querySelector('.svg-fallback');
                  if (fallback) fallback.classList.remove('hidden');
                }
              }}
            />
            {/* Minimalist fallback */}
            <div className="svg-fallback hidden absolute inset-0 flex items-center justify-center text-slate-400 dark:text-zinc-600">
              <svg className="w-12 h-12 stroke-current opacity-80" viewBox="0 0 24 24" fill="none" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
