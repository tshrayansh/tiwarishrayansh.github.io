import React from 'react';
import timelineData from '../content/timeline.json';

export const Timeline: React.FC = () => {
  return (
    <div className="space-y-6 text-left pt-6">
      <div className="space-y-1">
        <h3 className="font-serif text-lg font-normal text-zinc-900 dark:text-zinc-50 tracking-tight">
          Chronology &amp; Milestones
        </h3>
        <p className="font-mono text-[8px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
          Checkpoints of the scientific path
        </p>
      </div>

      <div className="space-y-5 pt-2">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-baseline py-1"
          >
            {/* Year Column */}
            <div className="w-16 flex-shrink-0 font-mono text-[10px] font-bold text-zinc-400 dark:text-zinc-500">
              {item.year}
            </div>

            {/* Content Column */}
            <div className="flex-grow space-y-0.5">
              <h4 className="font-serif text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                {item.title}
              </h4>
              <p className="text-xs text-zinc-550 dark:text-zinc-450 font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
