import React from 'react';
import skillsData from '../content/skills.json';

export const Skills: React.FC = () => {
  return (
    <div className="bento-card p-8 text-left space-y-6">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 dark:text-zinc-500 bg-slate-50 dark:bg-zinc-900 border border-slate-200/50 dark:border-zinc-800/50 px-2 py-0.5 rounded">
            [07 // toolbox]
          </span>
          <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400">Technical Competencies</span>
        </div>

        <h2 className="font-geist text-2xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
          Skills &amp; Methodologies
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          {skillsData.map((categoryObj, index) => (
            <div 
              key={index}
              className="p-5 rounded-xl border border-slate-100 bg-slate-50/10 dark:border-zinc-900/60 dark:bg-zinc-950/20 space-y-3"
            >
              <h3 className="font-geist text-xs font-bold text-slate-900 dark:text-slate-200 border-b border-slate-100 dark:border-zinc-900/40 pb-2">
                {categoryObj.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {categoryObj.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-[10px] text-slate-600 dark:text-zinc-300 bg-white dark:bg-zinc-900 border border-slate-200/40 dark:border-zinc-800/40 px-2 py-1 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-100 dark:border-zinc-900/60 pt-4 flex justify-between items-center text-[10px] font-mono text-slate-400 dark:text-zinc-500">
        <span>[SKILLS // NON-QUANTIFIED]</span>
        <span>[SYSTEMS // BIO &amp; CODE]</span>
      </div>
    </div>
  );
};
