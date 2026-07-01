import React from 'react';
import interestsData from '../content/interests.json';

export const Interests: React.FC = () => {
  return (
    <div className="space-y-6 text-left">
      <div className="space-y-1.5">
        <span className="font-mono text-[9px] uppercase tracking-wider text-emerald-800 dark:text-emerald-500 font-semibold">
          Focus Areas
        </span>
        <h2 className="font-geist text-2xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
          Current Focus
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
        {interestsData.map((interest) => (
          <div
            key={interest.id}
            className="space-y-2 border-l border-slate-200 dark:border-zinc-800 pl-4"
          >
            <div className="flex items-center gap-1.5">
              <span className="text-base" role="img" aria-label={interest.title}>
                {interest.icon}
              </span>
              <h3 className="font-geist text-xs font-bold text-slate-900 dark:text-slate-50">
                {interest.title}
              </h3>
            </div>
            <p className="text-[11px] text-slate-550 dark:text-zinc-400 font-light leading-relaxed">
              {interest.description}
            </p>
            <span className="inline-block font-mono text-[8px] uppercase tracking-wider text-slate-400 dark:text-zinc-500">
              {interest.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
