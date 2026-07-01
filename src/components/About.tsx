import React from 'react';
import aboutData from '../content/about.json';

export const About: React.FC = () => {
  return (
    <div className="space-y-8 text-left">
      {/* Museum Curation Header */}
      <div className="space-y-1.5 border-b border-zinc-200/60 dark:border-zinc-900/60 pb-4">
        <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-800 dark:text-emerald-500 font-bold">
          Section I // biography
        </span>
        <h2 className="font-serif text-3xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
          I. Biography
        </h2>
      </div>

      {/* Quantitative Milestones Dashboard Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-b border-zinc-150 dark:border-zinc-900/40">
        <div className="space-y-1">
          <span className="font-mono text-[8px] uppercase tracking-wider text-zinc-400">Run Club Led</span>
          <p className="font-serif text-2xl font-bold text-zinc-900 dark:text-zinc-50">120+</p>
          <p className="text-[10px] text-zinc-450 dark:text-zinc-500">Active community members</p>
        </div>
        <div className="space-y-1">
          <span className="font-mono text-[8px] uppercase tracking-wider text-zinc-400">Distance Logged</span>
          <p className="font-serif text-2xl font-bold text-zinc-900 dark:text-zinc-50">1,270 km</p>
          <p className="text-[10px] text-zinc-450 dark:text-zinc-500">Marathon training cycles</p>
        </div>
        <div className="space-y-1">
          <span className="font-mono text-[8px] uppercase tracking-wider text-zinc-400">Neural Conductance</span>
          <p className="font-serif text-2xl font-bold text-zinc-900 dark:text-zinc-50">Hodgkin-Huxley</p>
          <p className="text-[10px] text-zinc-450 dark:text-zinc-500">Simulations modeled</p>
        </div>
        <div className="space-y-1">
          <span className="font-mono text-[8px] uppercase tracking-wider text-zinc-400">Affiliation</span>
          <p className="font-serif text-2xl font-bold text-zinc-900 dark:text-zinc-50">IISER</p>
          <p className="text-[10px] text-zinc-450 dark:text-zinc-500">Undergraduate lab research</p>
        </div>
      </div>

      {/* Story Narrative */}
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
