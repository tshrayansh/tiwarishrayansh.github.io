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
    <section className="relative overflow-hidden py-20 md:py-28 bg-white dark:bg-slate-950 transition-colors">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Hero Text (Left side on desktop) */}
        <div className="md:col-span-8 space-y-6 text-left">
          <div className="space-y-2">
            <span className="font-mono text-xs font-semibold tracking-wider text-green-700 dark:text-green-500 uppercase px-2 py-1 bg-green-50 dark:bg-green-950/30 rounded">
              Aspiring Researcher
            </span>
            <h1 className="font-geist text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 leading-tight">
              {aboutData.name}
            </h1>
            <p className="font-geist text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-300">
              {aboutData.tagline}
            </p>
          </div>
          
          <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-2xl font-light leading-relaxed">
            {aboutData.shortBio}
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#resume"
              className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 transition-colors cursor-pointer"
            >
              <FiFileText className="h-4 w-4" />
              View CV
            </a>
            <a
              href={aboutData.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <FiGithub className="h-4 w-4" />
              GitHub
            </a>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <FiMail className="h-4 w-4" />
              Contact
            </button>
          </div>
        </div>

        {/* Hero Visual/Illustration (Right side on desktop) */}
        <div className="md:col-span-4 flex justify-center">
          <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center group shadow-sm transition-all duration-300">
            {/* Display profile photo if it exists, fallback to abstract illustration */}
            <img 
              src="./profile.jpeg" 
              alt={aboutData.name} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              onError={(e) => {
                // If profile photo is missing, hide the image and display the SVG fallback
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  const fallback = parent.querySelector('.svg-fallback');
                  if (fallback) fallback.classList.remove('hidden');
                }
              }}
            />
            {/* Geometric/Biological SVG Fallback */}
            <div className="svg-fallback hidden absolute inset-0 flex flex-col items-center justify-center p-6 text-slate-400 dark:text-slate-600">
              <svg className="w-24 h-24 stroke-current opacity-80" viewBox="0 0 24 24" fill="none" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                {/* Abstract double helix or neural net illustration */}
                <path d="M4.5 16.5c1.5-1.5 3-4.5 3-4.5s1.5-3 3-4.5M13.5 16.5c1.5-1.5 3-4.5 3-4.5s1.5-3 3-4.5" />
                <path d="M6 9c2 1 4 0 6-2 2-2 4-3 6-2" />
                <path d="M6 17c2 1 4 0 6-2 2-2 4-3 6-2" />
                <circle cx="12" cy="12" r="3" />
                <circle cx="6" cy="9" r="1.5" />
                <circle cx="18" cy="7" r="1.5" />
                <circle cx="6" cy="17" r="1.5" />
                <circle cx="18" cy="15" r="1.5" />
              </svg>
              <span className="mt-2 font-mono text-[10px] text-slate-400 dark:text-slate-500">Curiosity First</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
