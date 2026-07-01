import React from 'react';
import aboutData from '../content/about.json';

export const About: React.FC = () => {
  return (
    <div className="space-y-6 text-left">
      <div className="space-y-1.5">
        <span className="font-mono text-[9px] uppercase tracking-wider text-emerald-800 dark:text-emerald-500 font-semibold">
          Biography
        </span>
        <h2 className="font-serif text-2xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
          My Story
        </h2>
      </div>

      <div className="space-y-5">
        {aboutData.storyParagraphs.map((paragraph, index) => (
          <p 
            key={index}
            className="font-serif text-[14px] md:text-[15px] text-zinc-700 dark:text-zinc-300 leading-relaxed text-justify tracking-normal"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};
