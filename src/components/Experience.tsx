import React from 'react';
import experienceData from '../content/experience.json';
import { FiBriefcase, FiBookOpen, FiUsers, FiAward } from 'react-icons/fi';

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'Research':
      return <FiBriefcase className="h-4 w-4 text-slate-500 dark:text-slate-400" />;
    case 'Teaching':
      return <FiBookOpen className="h-4 w-4 text-slate-500 dark:text-slate-400" />;
    case 'Leadership':
      return <FiUsers className="h-4 w-4 text-slate-500 dark:text-slate-400" />;
    default:
      return <FiAward className="h-4 w-4 text-slate-500 dark:text-slate-400" />;
  }
};

export const Experience: React.FC = () => {
  return (
    <div className="bento-card p-8 text-left space-y-6 h-full flex flex-col justify-between">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 dark:text-zinc-500 bg-slate-50 dark:bg-zinc-900 border border-slate-200/50 dark:border-zinc-800/50 px-2 py-0.5 rounded">
            [05 // credentials]
          </span>
          <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400">Research &amp; Work Roles</span>
        </div>

        <h2 className="font-geist text-2xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
          Experience
        </h2>

        <div className="space-y-4 pt-2">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="p-4 rounded-xl border border-slate-100 bg-slate-50/10 dark:border-zinc-900/50 dark:bg-zinc-950/10 space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-white dark:bg-zinc-900 border border-slate-200/40 dark:border-zinc-800/40">
                    {getTypeIcon(exp.type)}
                  </div>
                  <div>
                    <h3 className="font-geist text-xs font-bold text-slate-900 dark:text-slate-50 leading-tight">
                      {exp.role}
                    </h3>
                    <p className="text-[10px] text-slate-400 dark:text-zinc-500 font-mono mt-0.5">
                      {exp.organization}
                    </p>
                  </div>
                </div>

                <div className="sm:text-right pl-9 sm:pl-0 font-mono">
                  <span className="text-[9px] text-slate-500 dark:text-zinc-400 block font-semibold">
                    {exp.period}
                  </span>
                  <span className="text-[8px] text-slate-400 dark:text-zinc-500 block">
                    {exp.location}
                  </span>
                </div>
              </div>

              <ul className="pl-9 space-y-1.5 list-disc text-[11px] text-slate-500 dark:text-zinc-400 font-light leading-relaxed">
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

      <div className="border-t border-slate-100 dark:border-zinc-900/60 pt-4 flex justify-between items-center text-[10px] font-mono text-slate-400 dark:text-zinc-500">
        <span>[CLASSIFICATION // ACADEMIC]</span>
        <span>[UPDATED // Q3 2026]</span>
      </div>
    </div>
  );
};
