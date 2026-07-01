import React from 'react';
import interestsData from '../content/interests.json';

export const Interests: React.FC = () => {
  return (
    <div className="space-y-6 text-left pt-6">
      <div className="space-y-1">
        <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-slate-50 tracking-tight">
          Current Explorations
        </h3>
        <p className="font-mono text-[8px] uppercase tracking-wider text-zinc-400">
          Topics of active study
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
        {interestsData.map((interest) => (
          <div
            key={interest.id}
            className="space-y-2 border-l border-zinc-200 dark:border-zinc-800 pl-4"
          >
            <div className="flex items-center gap-1.5">
              <span className="text-base" role="img" aria-label={interest.title}>
                {interest.icon}
              </span>
              <h4 className="font-geist text-xs font-bold text-slate-900 dark:text-slate-50">
                {interest.title}
              </h4>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-zinc-400 font-light leading-relaxed">
              {interest.description}
            </p>
            <span className="inline-block font-mono text-[8px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              {interest.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
