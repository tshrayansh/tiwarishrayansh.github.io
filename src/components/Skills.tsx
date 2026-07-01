import React from 'react';
import skillsData from '../content/skills.json';

export const Skills: React.FC = () => {
  return (
    <div className="py-6 text-left space-y-4">
      <div className="space-y-1">
        <h3 className="font-serif text-lg font-normal text-zinc-900 dark:text-zinc-50 tracking-tight">
          Technical Toolbox
        </h3>
        <p className="font-mono text-[8px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
          Methodologies &amp; tools
        </p>
      </div>

      <div className="space-y-3 pt-2 text-xs">
        {skillsData.map((categoryObj, index) => (
          <div 
            key={index}
            className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 py-1"
          >
            {/* Category label */}
            <span className="w-32 flex-shrink-0 font-serif font-medium text-zinc-800 dark:text-zinc-200">
              {categoryObj.category}
            </span>
            {/* Comma-separated list */}
            <span className="flex-grow text-zinc-555 dark:text-zinc-450 font-light leading-relaxed font-sans">
              {categoryObj.skills.join(', ')}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
