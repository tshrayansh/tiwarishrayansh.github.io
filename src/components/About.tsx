import React from 'react';
import aboutData from '../content/about.json';

export const About: React.FC = () => {
  return (
    <div className="space-y-6 text-left">
      <div className="space-y-1">
        <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
          01 // Introduction
        </span>
        <h2 className="font-serif text-2xl font-normal text-zinc-900 dark:text-zinc-50 tracking-tight">
          1. Biography
        </h2>
      </div>

      <div className="space-y-5">
        {aboutData.storyParagraphs.map((paragraph, index) => (
          <p 
            key={index}
            className="font-serif text-[15px] text-zinc-800 dark:text-zinc-300 leading-relaxed text-justify tracking-normal"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};
