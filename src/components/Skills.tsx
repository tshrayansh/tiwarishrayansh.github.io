import React from 'react';
import skillsData from '../content/skills.json';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 border-t border-slate-100 dark:border-slate-900 transition-colors">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        {/* Title Column */}
        <div className="md:col-span-4 text-left">
          <h2 className="font-geist text-3xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
            Technical Skills
          </h2>
          <p className="mt-2 text-sm font-mono text-slate-400 dark:text-slate-500">
            Competencies & toolbox
          </p>
        </div>

        {/* Skills grid list */}
        <div className="md:col-span-8 text-left space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skillsData.map((categoryObj, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl border border-slate-200/80 bg-white dark:border-slate-800/85 dark:bg-slate-950 shadow-sm space-y-4"
              >
                <h3 className="font-geist text-sm font-semibold text-slate-800 dark:text-slate-300 border-b border-slate-100 dark:border-slate-900 pb-2">
                  {categoryObj.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categoryObj.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="font-mono text-xs text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 px-2.5 py-1.5 rounded-md hover:border-slate-300 dark:hover:border-slate-700 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
