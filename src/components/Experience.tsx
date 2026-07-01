import React from 'react';
import experienceData from '../content/experience.json';

export const Experience: React.FC = () => {
  return (
    <div className="space-y-8 text-left">
      {/* Museum Header */}
      <div className="space-y-1 border-b border-zinc-200/60 dark:border-zinc-900/60 pb-4">
        <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
          03 // Credentials
        </span>
        <h2 className="font-serif text-2xl font-normal text-zinc-900 dark:text-zinc-50 tracking-tight">
          3. Academic Experience
        </h2>
      </div>

      <div className="space-y-8 pt-2">
        {experienceData.map((exp) => (
          <div
            key={exp.id}
            className="space-y-2"
          >
            {/* Header Block */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div className="space-y-0.5">
                <h3 className="font-serif text-base font-medium text-zinc-900 dark:text-zinc-50 leading-tight">
                  {exp.role}
                </h3>
                <p className="text-xs text-zinc-450 dark:text-zinc-500 font-mono">
                  {exp.organization} &bull; {exp.location}
                </p>
              </div>

              <div className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500 font-bold">
                {exp.period}
              </div>
            </div>

            {/* Details Bullets */}
            <ul className="space-y-1 list-disc pl-4 text-xs text-zinc-650 dark:text-zinc-400 font-light leading-relaxed font-sans">
              {exp.details.map((detail, idx) => (
                <li key={idx} className="marker:text-zinc-300 dark:marker:text-zinc-800">
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
