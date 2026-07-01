import React from 'react';
import experienceData from '../content/experience.json';
import { FiBriefcase, FiBookOpen, FiUsers, FiAward } from 'react-icons/fi';

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'Research':
      return <FiBriefcase className="h-4.5 w-4.5 text-slate-600 dark:text-slate-400" />;
    case 'Teaching':
      return <FiBookOpen className="h-4.5 w-4.5 text-slate-600 dark:text-slate-400" />;
    case 'Leadership':
      return <FiUsers className="h-4.5 w-4.5 text-slate-600 dark:text-slate-400" />;
    default:
      return <FiAward className="h-4.5 w-4.5 text-slate-600 dark:text-slate-400" />;
  }
};

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 border-t border-slate-100 dark:border-slate-900 transition-colors">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        {/* Title Column */}
        <div className="md:col-span-4 text-left">
          <h2 className="font-geist text-3xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
            Academic & Work Experience
          </h2>
          <p className="mt-2 text-sm font-mono text-slate-400 dark:text-slate-500">
            Roles & contributions
          </p>
        </div>

        {/* Experience List Column */}
        <div className="md:col-span-8 text-left space-y-6">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="p-6 rounded-xl border border-slate-200/80 bg-white dark:border-slate-800/80 dark:bg-slate-950 shadow-sm space-y-4"
            >
              {/* Header section */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50">
                    {getTypeIcon(exp.type)}
                  </div>
                  <div>
                    <h3 className="font-geist text-base font-bold text-slate-900 dark:text-slate-50 leading-tight">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {exp.organization}
                    </p>
                  </div>
                </div>

                <div className="sm:text-right pl-11 sm:pl-0">
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                    {exp.period}
                  </span>
                  <p className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                    {exp.location}
                  </p>
                </div>
              </div>

              {/* Details Bullet List */}
              <ul className="pl-11 pr-2 space-y-2 list-disc text-sm text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                {exp.details.map((detail, idx) => (
                  <li key={idx} className="marker:text-slate-300 dark:marker:text-slate-700">
                    {detail}
                  </li>
                ))}
              </ul>

              {/* Tag indicator */}
              <div className="pl-11 flex justify-start">
                <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 dark:text-slate-500 border border-slate-200 dark:border-slate-800 px-2 py-0.5 rounded">
                  {exp.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
