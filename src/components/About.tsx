import React from 'react';
import aboutData from '../content/about.json';

export const About: React.FC = () => {
  return (
    <div className="space-y-6 text-left">
      <div className="space-y-1">
        <h2 className="font-geist text-2xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
          My Story
        </h2>
        <p className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider">
          Path &amp; Philosophy
        </p>
      </div>

      <div className="space-y-5">
        {aboutData.storyParagraphs.map((paragraph, index) => (
          <p 
            key={index}
            className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-light leading-relaxed"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};
