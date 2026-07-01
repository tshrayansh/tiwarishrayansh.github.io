import React from 'react';
import experienceData from '../content/experience.json';
import { FiBriefcase, FiBookOpen, FiUsers, FiAward } from 'react-icons/fi';

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'Research':
      return <FiBriefcase className="h-4 w-4 text-slate-400 dark:text-slate-500" />;
    case 'Teaching':
      return <FiBookOpen className="h-4 w-4 text-slate-400 dark:text-slate-500" />;
    case 'Leadership':
      return <FiUsers className="h-4 w-4 text-slate-400 dark:text-slate-500" />;
    default:
      return <FiAward className="h-4 w-4 text-slate-400 dark:text-slate-500" />;
  }
};

export const Experience: React.FC = () => {
  return (
    <div className="space-y-8 text-left">
      {/* Museum Header */}
      <div className="space-y-1.5 border-b border-zinc-200/60 dark:border-zinc-900/60 pb-4">
        <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-800 dark:text-emerald-500 font-bold">
          Section III // credentials
        </span>
        <h2 className="font-serif text-3xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
          III. Academic Experience
        </h2>
      </div>

      <div className="space-y-6 pt-2">
        {experienceData.map((exp) => (
          <div
            key={exp.id}
            className="space-y-3 border-l border-slate-100 dark:border-zinc-900/60 pl-5"
          >
            {/* Header Block */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <div className="flex items-center gap-2">
                <div className="text-slate-400">
                  {getTypeIcon(exp.type)}
                </div>
                <div>
                  <h3 className="font-geist text-sm font-bold text-slate-900 dark:text-slate-50 leading-tight">
                    {exp.role}
                  </h3>
                  <p className="text-[10px] text-slate-400 dark:text-zinc-550 font-mono">
                    {exp.organization}
                  </p>
                </div>
              </div>

              <div className="sm:text-right font-mono text-[9px] text-slate-400 dark:text-zinc-500">
                <span className="font-semibold block">{exp.period}</span>
                <span className="block">{exp.location}</span>
              </div>
            </div>

            {/* Bullets */}
            <ul className="space-y-1.5 list-disc pl-5 text-[11px] text-slate-500 dark:text-zinc-400 font-light leading-relaxed font-sans">
              {exp.details.map((detail, idx) => (
                <li key={idx} className="marker:text-slate-200 dark:marker:text-slate-800">
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
