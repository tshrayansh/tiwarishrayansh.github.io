import React from 'react';
import skillsData from '../content/skills.json';

export const Skills: React.FC = () => {
  return (
    <div className="py-6 text-left space-y-6">
      <div className="space-y-1">
        <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-slate-50 tracking-tight">
          Technical Toolbox
        </h3>
        <p className="font-mono text-[8px] uppercase tracking-wider text-zinc-400">
          Methodologies &amp; tools
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
        {skillsData.map((categoryObj, index) => (
          <div 
            key={index}
            className="space-y-4"
          >
            <h4 className="font-geist text-xs font-bold text-slate-900 dark:text-slate-200 border-b border-slate-100 dark:border-zinc-900/60 pb-2 uppercase tracking-wider font-mono text-[9px]">
              {categoryObj.category}
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {categoryObj.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="font-mono text-[10px] text-slate-600 dark:text-zinc-300 bg-slate-50 dark:bg-zinc-900/50 border border-slate-200/40 dark:border-zinc-800/40 px-2 py-1 rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
