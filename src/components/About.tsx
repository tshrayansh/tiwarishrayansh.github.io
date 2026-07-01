import React from 'react';
import aboutData from '../content/about.json';

export const About: React.FC = () => {
  return (
    <div className="bento-card p-8 text-left space-y-6 h-full flex flex-col justify-between">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 dark:text-zinc-500 bg-slate-50 dark:bg-zinc-900 border border-slate-200/50 dark:border-zinc-800/50 px-2 py-0.5 rounded">
            [02 // biography]
          </span>
          <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400">Personal Narrative</span>
        </div>

        <h2 className="font-geist text-2xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
          My Story
        </h2>

        <div className="space-y-4">
          {aboutData.storyParagraphs.map((paragraph, index) => (
            <p 
              key={index}
              className="text-xs md:text-sm text-slate-500 dark:text-zinc-400 font-light leading-relaxed text-justify"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-100 dark:border-zinc-900/60 pt-4 flex justify-between items-center text-[10px] font-mono text-slate-400 dark:text-zinc-500">
        <span>[ORIGIN // PUNE, INDIA]</span>
        <span>[STATUS // CURIOUS]</span>
      </div>
    </div>
  );
};
