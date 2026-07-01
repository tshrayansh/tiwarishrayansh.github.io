import React from 'react';
import interestsData from '../content/interests.json';

export const Interests: React.FC = () => {
  return (
    <div className="space-y-6 text-left pt-6">
      <div className="space-y-1">
        <h3 className="font-serif text-lg font-normal text-zinc-900 dark:text-zinc-50 tracking-tight">
          Areas of Focus
        </h3>
        <p className="font-mono text-[8px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
          Topics of active study and coding
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 pt-2">
        {interestsData.map((interest) => (
          <div
            key={interest.id}
            className="space-y-1"
          >
            <h4 className="font-serif text-sm font-medium text-zinc-800 dark:text-zinc-200">
              {interest.title}
            </h4>
            <p className="text-xs text-zinc-550 dark:text-zinc-450 font-light leading-relaxed">
              {interest.description}
            </p>
            <span className="inline-block font-mono text-[8px] tracking-wider text-zinc-400">
              {interest.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
